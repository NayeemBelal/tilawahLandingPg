// Supabase Edge Function: delete-account
//
// Permanently deletes the authenticated user and ALL data associated with them.
//
// The Tilawah schema has NO foreign keys to auth.users and NO ON DELETE CASCADE,
// so every user-owned row must be deleted explicitly here, using the service-role
// key (which must never be exposed to the browser). The frontend authenticates the
// user (email OTP) and calls this function with the user's JWT; we re-derive the
// user id from that token server-side and never trust a client-supplied id.
//
// Deployed with verify_jwt: true.

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

// Every table that holds user-owned rows, with the column(s) that reference the user.
// (Excludes app_versions and reserved_usernames — global config, not user data.)
const USER_TABLES: { table: string; columns: string[] }[] = [
  { table: "buddy_pairs", columns: ["user_a", "user_b"] },
  { table: "daily_goals", columns: ["user_id"] },
  { table: "daily_progress", columns: ["user_id"] },
  { table: "friend_requests", columns: ["requester", "recipient"] },
  { table: "group_session_participants", columns: ["user_id"] },
  { table: "group_sessions", columns: ["initiator_id"] },
  { table: "highlights", columns: ["user_id"] },
  { table: "last_read", columns: ["user_id"] },
  { table: "notification_preferences", columns: ["user_id"] },
  { table: "recurring_sessions", columns: ["proposer_id", "receiver_id"] },
  { table: "session_contributions", columns: ["user_id"] },
  { table: "session_feedback", columns: ["user_id"] },
  { table: "session_page_visits", columns: ["user_id"] },
  { table: "sessions", columns: ["user_a_id", "user_b_id"] },
  { table: "share_edit_log", columns: ["owner_user_id"] },
  { table: "share_links", columns: ["owner_user_id"] },
  { table: "share_view_sessions", columns: ["owner_user_id"] },
  { table: "solo_reading_sessions", columns: ["user_id"] },
  { table: "user_preferences", columns: ["user_id"] },
  { table: "profiles", columns: ["id"] },
];

const AVATAR_BUCKET = "profile-pictures";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) {
    return json({ error: "Server is misconfigured" }, 500);
  }

  // Extract the caller's JWT and resolve the user it belongs to.
  const authHeader = req.headers.get("Authorization") ?? "";
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (!token) {
    return json({ error: "Missing authorization token" }, 401);
  }

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: userData, error: userError } = await admin.auth.getUser(token);
  if (userError || !userData?.user) {
    return json({ error: "Invalid or expired session" }, 401);
  }
  const userId = userData.user.id;

  const errors: string[] = [];

  // 1. Remove the user's avatar(s) from storage.
  try {
    const paths = new Set<string>();

    // From the stored avatar_url, parse out the object path within the bucket.
    const { data: profile } = await admin
      .from("profiles")
      .select("avatar_url")
      .eq("id", userId)
      .maybeSingle();
    const avatarUrl: string | null = profile?.avatar_url ?? null;
    if (avatarUrl) {
      const marker = `/${AVATAR_BUCKET}/`;
      const idx = avatarUrl.indexOf(marker);
      if (idx !== -1) {
        paths.add(avatarUrl.slice(idx + marker.length).split("?")[0]);
      }
    }

    // Fallback: anything stored under a `${userId}/` prefix.
    const { data: listed } = await admin.storage
      .from(AVATAR_BUCKET)
      .list(userId, { limit: 100 });
    for (const obj of listed ?? []) {
      paths.add(`${userId}/${obj.name}`);
    }

    if (paths.size > 0) {
      const { error: rmError } = await admin.storage
        .from(AVATAR_BUCKET)
        .remove([...paths]);
      if (rmError) errors.push(`storage: ${rmError.message}`);
    }
  } catch (e) {
    errors.push(`storage: ${e instanceof Error ? e.message : String(e)}`);
  }

  // 2. Delete all user-owned rows.
  for (const { table, columns } of USER_TABLES) {
    const orFilter = columns.map((c) => `${c}.eq.${userId}`).join(",");
    const query = admin.from(table).delete();
    const { error } = columns.length === 1
      ? await query.eq(columns[0], userId)
      : await query.or(orFilter);
    if (error) errors.push(`${table}: ${error.message}`);
  }

  // 3. Delete the auth user itself (hard delete). Do this last.
  const { error: authDeleteError } = await admin.auth.admin.deleteUser(userId);
  if (authDeleteError) {
    errors.push(`auth: ${authDeleteError.message}`);
    // The auth record still exists, so the account isn't gone — surface as failure.
    return json(
      { error: "Failed to fully delete account", details: errors },
      500,
    );
  }

  if (errors.length > 0) {
    // Auth user is gone (account is unusable) but some data cleanup failed.
    return json({ success: true, warnings: errors }, 200);
  }

  return json({ success: true }, 200);
});
