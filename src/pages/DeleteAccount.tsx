import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

type Step = "email" | "code" | "confirm" | "done";

const inputClass =
  "w-full px-4 py-3 bg-transparent border border-[#1D2E28]/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-[#1D2E28] transition-colors duration-200 disabled:opacity-50";

const DeleteAccount = () => {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [confirmText, setConfirmText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const sendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: { shouldCreateUser: false },
      });
      if (error) {
        setError(
          error.message ||
            "We couldn't send a code. Make sure this is the email you use for Tilawah.",
        );
      } else {
        setStep("code");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const verifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const { error } = await supabase.auth.verifyOtp({
        email: email.trim(),
        token: code.trim(),
        type: "email",
      });
      if (error) {
        setError(error.message || "That code is invalid or expired.");
      } else {
        setStep("confirm");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmText.trim().toUpperCase() !== "DELETE") {
      setError('Please type DELETE to confirm.');
      return;
    }
    setIsSubmitting(true);
    setError("");
    try {
      const { error } = await supabase.functions.invoke("delete-account", {
        method: "POST",
      });
      if (error) {
        setError(
          "We couldn't delete your account. Please try again or email support.",
        );
      } else {
        await supabase.auth.signOut();
        setStep("done");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetToEmail = () => {
    setStep("email");
    setCode("");
    setConfirmText("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="min-h-screen pt-20 md:pt-24 px-4 sm:px-0 relative">
        {/* Gradient overlay - only visible on desktop */}
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-foreground/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-foreground/5 to-transparent rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-10 pt-8"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-[#1D2E28] mb-4 leading-tight">
              Delete Your Account
            </h1>
            <p className="text-lg text-[#1D2E28]/70 max-w-lg mx-auto">
              Permanently delete your Tilawah account and all data associated
              with it. This cannot be undone.
            </p>
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-center"
            >
              <p className="text-red-600 font-medium">{error}</p>
            </motion.div>
          )}

          {/* Step: Enter email */}
          {step === "email" && (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={sendCode}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-foreground text-sm font-medium mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className={inputClass}
                  placeholder="your@email.com"
                />
                <p className="text-foreground/50 text-sm mt-2">
                  Enter the email you use to sign in to Tilawah. We'll send you a
                  verification code.
                </p>
              </div>
              <Button
                type="submit"
                variant="pattrn"
                size="default"
                disabled={isSubmitting}
                className="w-full rounded-full h-12 px-8 text-base font-semibold shadow-2xl shadow-primary/20 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send verification code"}
              </Button>
            </motion.form>
          )}

          {/* Step: Enter code */}
          {step === "code" && (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={verifyCode}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="code"
                  className="block text-foreground text-sm font-medium mb-1"
                >
                  Verification Code
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className={inputClass}
                  placeholder="6-digit code"
                />
                <p className="text-foreground/50 text-sm mt-2">
                  We sent a code to <strong>{email}</strong>. Check your inbox.
                </p>
              </div>
              <Button
                type="submit"
                variant="pattrn"
                size="default"
                disabled={isSubmitting}
                className="w-full rounded-full h-12 px-8 text-base font-semibold shadow-2xl shadow-primary/20 disabled:opacity-50"
              >
                {isSubmitting ? "Verifying..." : "Verify"}
              </Button>
              <button
                type="button"
                onClick={resetToEmail}
                className="w-full text-center text-foreground/60 text-sm underline hover:text-foreground transition-colors"
              >
                Use a different email
              </button>
            </motion.form>
          )}

          {/* Step: Confirm deletion */}
          {step === "confirm" && (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={deleteAccount}
              className="space-y-5"
            >
              <div className="p-5 bg-red-500/5 border border-red-500/20 rounded-2xl">
                <p className="text-foreground font-medium mb-2">
                  You're about to permanently delete the account for{" "}
                  <strong>{email}</strong>.
                </p>
                <p className="text-foreground/70 text-sm">
                  This erases your profile, reading progress, goals, highlights,
                  sessions, buddy connections, and all other data. It cannot be
                  reversed.
                </p>
              </div>
              <div>
                <label
                  htmlFor="confirm"
                  className="block text-foreground text-sm font-medium mb-1"
                >
                  Type <span className="font-bold">DELETE</span> to confirm
                </label>
                <input
                  type="text"
                  id="confirm"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  disabled={isSubmitting}
                  className={inputClass}
                  placeholder="DELETE"
                  autoComplete="off"
                />
              </div>
              <Button
                type="submit"
                variant="destructive"
                size="default"
                disabled={
                  isSubmitting ||
                  confirmText.trim().toUpperCase() !== "DELETE"
                }
                className="w-full rounded-full h-12 px-8 text-base font-semibold disabled:opacity-50"
              >
                {isSubmitting
                  ? "Deleting..."
                  : "Permanently delete my account"}
              </Button>
            </motion.form>
          )}

          {/* Step: Done */}
          {step === "done" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-primary/10 border border-primary/30 rounded-2xl text-center"
            >
              <div className="text-primary text-lg font-semibold mb-2">
                ✅ Your account has been deleted
              </div>
              <p className="text-foreground/70">
                Your Tilawah account and all associated data have been
                permanently removed. We're sorry to see you go.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DeleteAccount;
