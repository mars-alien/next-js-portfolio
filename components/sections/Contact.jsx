/**
 * Contact — centered message form.
 *
 * Props (all from useContactForm hook via page.jsx):
 *   form     {object}  — { name, email, subject, message }
 *   setField {fn}      — (key, value) => void
 *   submit   {fn}      — validates and opens mailto: link
 *   sent     {boolean} — true for 4 s after successful submission
 */
export default function Contact({ form, setField, submit, sent }) {
  return (
    <section id="contact" className="section" aria-labelledby="contact-h">
      <div className="container">
        <div className="section-head" data-reveal="up" style={{ textAlign: "center", margin: "0 auto 40px" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}><span className="eyebrow-line" />Get In Touch</div>
          <h2 id="contact-h" className="h2">Let&apos;s Build Something</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Available for internships, freelance work, and open-source collaboration.
          </p>
        </div>

        <div className="contact-center">
          <div className="form-card" data-reveal="up">
            <div className="form-header">
              <span className="form-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <h3 className="form-title">Send a Message</h3>
              <p className="form-desc">I usually reply within 24–48 hours.</p>
            </div>

            {sent ? (
              <div className="success-box" role="alert">
                <span className="success-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <p className="success-title">Message sent!</p>
                  <p className="success-text">Opening your email client…</p>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); submit(); }}>
                <div className="form-row2">
                  <div>
                    <label htmlFor="f-name" className="field-label">Name</label>
                    <div className="input-wrap">
                      <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                      </svg>
                      <input
                        id="f-name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="input"
                        value={form.name}
                        onChange={(e) => setField("name", e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="f-email" className="field-label">Email</label>
                    <div className="input-wrap">
                      <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <input
                        id="f-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="input"
                        value={form.email}
                        onChange={(e) => setField("email", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="field-spacer">
                  <label htmlFor="f-subject" className="field-label">Subject</label>
                  <input
                    id="f-subject"
                    type="text"
                    required
                    placeholder="What's this about?"
                    className="input"
                    value={form.subject}
                    onChange={(e) => setField("subject", e.target.value)}
                  />
                </div>

                <div className="field-spacer">
                  <label htmlFor="f-msg" className="field-label">Message</label>
                  <textarea
                    id="f-msg"
                    required
                    placeholder="Tell me about your project or opportunity..."
                    className="textarea"
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                  />
                </div>

                <button type="submit" className="submit-btn">Send Message ↗</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
