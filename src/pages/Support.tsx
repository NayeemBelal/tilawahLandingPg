import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function SupportPage() {
  const email = 'ibrahim@tilawahapp.com'
  const subject = encodeURIComponent('Tilawah Support')
  const body = encodeURIComponent(
    'Please include:\n- Your Tilawah account email\n- Device (iPhone/iPad model)\n- iOS version\n- App version\n- Steps to reproduce'
  )
  const mailto = `mailto:${email}?subject=${subject}&body=${body}`

  useEffect(() => {
    // Set dark background for support page
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
      <div className="card" role="main" aria-labelledby="support-heading">
        <div className="greeting-section">
          <div className="islamic-greeting" lang="ar" aria-label="Islamic greeting">
            السلام عليكم ورحمة الله وبركاته
          </div>
          <p className="greeting-translation">Peace be upon you and Allah's mercy and blessings</p>
        </div>
        <h2 id="support-heading">Tilawah — Support</h2>
        <p>
          Tilawah helps Huffadh and Quran learners find compatible recitation partners, run live sessions with
          real-time mistake highlighting, and read with word-by-word highlighting.
        </p>

        <h2>Contact Us</h2>
        <p>We typically respond within <strong>24–48 hours</strong>.</p>
        <a className="email" href={mailto} rel="noopener">{email}</a>
        <p className="fine">If the button doesn't open your email app, write to us at <strong>{email}</strong>.</p>

        <h2>Quick Help / FAQ</h2>
        <ul>
          <li><strong>Create an account:</strong> Sign up in the app with your email and verify it.</li>
          <li><strong>Buddy matching:</strong> Set recitation style, pace, and availability. Matches appear when clicking Add Buddy on the main screen.</li>
          <li><strong>Start a session:</strong> Open a match and tap <em>Start Session</em>.</li>
          <li><strong>Mistake highlighting:</strong> During a session, tap and hold the word/segment and/or add a note to mark a mistake for your partner in real time.</li>
          <li><strong>Reset password:</strong> On the login screen, tap <em>Forgot Password</em> and enter your email to receive a reset link.</li>
          <li><strong>Delete account / data:</strong> Profile → Delete Account (or email support).</li>
        </ul>

        <h2>Legal</h2>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link>
          {' '}·{' '}
          <Link to="/terms">Terms of Service</Link>
        </p>

        <div className="footer">Last updated: {new Date().toLocaleString('en-US', { month: 'short', year: 'numeric' })} · © {new Date().getFullYear()} Tilawah</div>
      </div>
    </main>
  )
}

