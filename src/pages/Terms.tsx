import { useEffect } from 'react'

export default function TermsPage() {
  useEffect(() => {
    // Set dark background for terms page
    const originalBackground = document.body.style.background
    const originalBackgroundColor = document.body.style.backgroundColor
    document.body.style.background = 'none'
    document.body.style.backgroundColor = '#121714'

    return () => {
      // Restore original background on unmount
      document.body.style.background = originalBackground
      document.body.style.backgroundColor = originalBackgroundColor
    }
  }, [])

  return (
    <main className="wrap">
      <div className="card" role="main" aria-labelledby="terms-heading">
        <h1 id="terms-heading">Tilawah — Terms of Service</h1>
        <p><strong>Effective Date:</strong> August 13, 2025 · <strong>Contact:</strong> <a href="mailto:ibrahim@tilawahapp.com">ibrahim@tilawahapp.com</a></p>

        <p>These Terms of Service ("Terms") govern your access to and use of Tilawah (the "App"), including any content, features, and services we provide. By creating an account or using Tilawah, you agree to these Terms.</p>
        <p>"We," "us," and "our" refer to the operator of Tilawah. "You" means the individual using the App. If you are accepting these Terms on behalf of an organization, you represent that you have authority to do so.</p>

        <h2>1) What Tilawah Is</h2>
        <p>Tilawah helps Huffadh and Quran learners:</p>
        <ul>
          <li>find compatible recitation partners (buddy matching) based on preferences and schedule;</li>
          <li>run live one-to-one recitation sessions with optional mistake highlighting;</li>
          <li>read in a personal digital mushaf with word-by-word highlighting; and</li>
          <li>track last-read/page context and similar progress helpers.</li>
        </ul>
        <p>Tilawah does not provide religious rulings or authoritative fatāwā. Any feedback exchanged between users is peer-to-peer and informational only.</p>

        <h2>2) Eligibility</h2>
        <p>You must be 13+ to use Tilawah (or the minimum age required by your country). If you are under the age of majority in your location, you must have a parent/guardian's consent.</p>

        <h2>3) Your Account</h2>
        <ul>
          <li>You must provide accurate information and keep it up to date.</li>
          <li>You are responsible for safeguarding your login credentials and for all activity under your account.</li>
          <li>Notify us immediately if you suspect unauthorized use of your account.</li>
        </ul>

        <h2>4) Acceptable Use & Community Guidelines</h2>
        <p>You agree not to:</p>
        <ul>
          <li>harass, intimidate, or abuse other users;</li>
          <li>share hateful, discriminatory, or obscene content;</li>
          <li>impersonate others or misrepresent your identity;</li>
          <li>upload or share content you don't have the rights to (e.g., copyrighted recordings);</li>
          <li>attempt to probe, scan, or test the security of the App; or</li>
          <li>use the App in violation of any law or regulation.</li>
        </ul>
        <p><strong>Respect & Adab.</strong> Please interact with kindness and respect; the goal is to support each other's connection to the Qur'an.</p>

        <h2>5) Privacy</h2>
        <p>Our Privacy Policy explains what data we collect and how we use it (e.g., account details, last-read/page state, session metadata). By using Tilawah, you consent to those practices. See the <a href="https://www.privacypolicies.com/live/f36c8052-7852-454e-8e38-b263502a9822" target="_blank" rel="noopener">Privacy Policy</a>.</p>

        <h2>6) Content & Intellectual Property</h2>
        <h3>6.1 Your Content</h3>
        <p>You may submit or share content (e.g., messages, notes, session feedback). You retain your rights to your content. You grant us a non-exclusive, worldwide, royalty-free license to host, store, process, and display that content only as needed to operate the App. You are responsible for the content you share and must have the necessary rights/permissions.</p>
        <h3>6.2 Qur'an Text & Resources</h3>
        <p>The Qur'an text is widely available and, in many editions, in the public domain. If the App includes translations, audio, or other resources from third parties, those may be licensed or attributed accordingly. You agree not to copy or redistribute such materials except as permitted by their licenses.</p>
        <h3>6.3 Our IP</h3>
        <p>All App features, UI, trademarks, logos, and code are owned by us or our licensors. You receive a limited, personal, non-transferable, revocable license to use the App under these Terms.</p>

        <h2>7) Sessions & Feedback</h2>
        <p>Sessions are for live peer recitation and optional mistake highlighting. Unless we clearly say otherwise, Tilawah does not record audio or video of sessions by default. If we introduce recording later, we will request consent consistent with applicable laws. You agree not to record or share another person's recitation without their express consent and any legally required permissions.</p>

        <h2>8) Third-Party Services</h2>
        <p>Tilawah may rely on third-party services (e.g., hosting, authentication, storage). Your use of those services may be subject to their own terms. We are not responsible for third-party sites or services.</p>

        <h2>9) Network, Devices & Availability</h2>
        <p>You are responsible for your device, operating system, and internet connection. The App may be unavailable from time to time for maintenance or due to factors outside our control.</p>

        <h2>10) Changes & Updates</h2>
        <p>We may modify the App or these Terms. If we make material changes, we'll notify you (e.g., in-app notice). Continued use after updated Terms take effect means you accept them.</p>

        <h2>11) Fees & Purchases</h2>
        <p>Tilawah is currently free to use. If we later offer paid features or in-app purchases, we'll provide terms and pricing at the point of sale, and additional terms may apply.</p>

        <h2>12) Termination</h2>
        <p>You may stop using the App at any time. We may suspend or terminate your account if you violate these Terms or for risks to other users or the service. Upon termination, the license granted to you ends, but sections that by nature should survive (e.g., disclaimers, limitations) will continue to apply.</p>

        <h2>13) DMCA / Copyright Complaints</h2>
        <p>If you believe content in the App infringes your copyright, contact us with:</p>
        <ul>
          <li>your contact info;</li>
          <li>a description/link to the allegedly infringing material;</li>
          <li>a statement that you have a good-faith belief the use is not authorized; and</li>
          <li>your signature.</li>
        </ul>
        <p>Send to: <a href="mailto:ibrahim@tilawahapp.com?subject=DMCA">ibrahim@tilawahapp.com</a> (subject: "DMCA").</p>

        <h2>14) Disclaimers</h2>
        <p><strong>THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE."</strong> WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE APP WILL BE ERROR-FREE OR UNINTERRUPTED. Tilawah supports learning and memorization but does not replace qualified teachers or scholarship.</p>

        <h2>15) Limitation of Liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF DATA, PROFITS, OR REVENUE, ARISING FROM OR RELATED TO YOUR USE OF THE APP. OUR TOTAL LIABILITY FOR ANY CLAIMS RELATING TO THE APP WILL NOT EXCEED USD $100 OR THE AMOUNT YOU PAID US IN THE 12 MONTHS BEFORE THE CLAIM, WHICHEVER IS GREATER. Some jurisdictions do not allow certain limitations; in those cases, the limitation will apply to the fullest extent permitted.</p>

        <h2>16) Indemnity</h2>
        <p>You agree to defend, indemnify, and hold us harmless from any claims, damages, and expenses (including reasonable attorneys' fees) arising out of your misuse of the App, your content, or your violation of these Terms or applicable laws.</p>

        <h2>17) Governing Law</h2>
        <p>These Terms are governed by the laws of Texas, USA, without regard to conflict-of-laws rules. Your local consumer protections, if applicable, remain unaffected.</p>

        <h2>18) Dispute Resolution (Optional – U.S.)</h2>
        <p><strong>Arbitration & Class-Action Waiver.</strong> Any dispute arising from these Terms or the App will be resolved by binding arbitration on an individual basis under the rules of the AAA. You waive any right to participate in a class action.</p>
        <p><strong>Venue.</strong> If arbitration is unenforceable, the parties submit to the exclusive jurisdiction of the state and federal courts located in Dallas County, Texas, USA.</p>

        <h2>19) International Use</h2>
        <p>You are responsible for complying with local laws when using the App, including data, content, and recording/consent laws.</p>

        <h2>20) Contact</h2>
        <p>Questions about these Terms? Contact us at <a href="mailto:ibrahim@tilawahapp.com">ibrahim@tilawahapp.com</a>.</p>
      </div>
    </main>
  )
}

