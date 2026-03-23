import { FormEvent } from 'react'

const SERVICE_OPTIONS = [
  { value: 'managed-it', label: 'Managed IT Services' },
  { value: 'network',    label: 'Network Infrastructure' },
  { value: 'security',   label: 'Cybersecurity' },
  { value: 'cloud',      label: 'Cloud & Server Consulting' },
  { value: 'devices',    label: 'Device & Fleet Management' },
  { value: 'helpdesk',   label: 'Help Desk & Support' },
  { value: 'other',      label: 'Other / Not Sure Yet' },
]

const CONTACT_DETAILS = [
  {
    label: 'Email',
    value: 'hello@itplatformcore.com', // Swap email here
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <path d="M22 6l-10 7L2 6"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+1 (555) 000-0000', // Swap phone here
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.77h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6.09 6.09l1.27-.89a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z"/>
      </svg>
    ),
  },
  {
    label: 'Business Hours',
    value: 'Mon–Fri, 8am–6pm local',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Remote-first — available nationwide', // Swap location here
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

export default function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Wire up to your backend, Netlify Forms, Formspree, etc.
    const data = new FormData(e.currentTarget)
    console.log(Object.fromEntries(data))
    alert('Message received. We will reply within one business day.')
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="contact-hero">
        <div className="container">
          <span className="section__eyebrow reveal" style={{ justifyContent: 'center', marginBottom: 20 }}>
            Contact
          </span>
          <h1 className="contact-hero__title reveal">
            Let's Start a<br />
            <span className="text-gradient">Conversation</span>
          </h1>
          <p className="contact-hero__sub reveal">
            Tell us where you are and what you're dealing with.
            We'll respond within one business day with an honest assessment.
          </p>
        </div>
      </section>

      {/* ── Form + Info ──────────────────────────────────────── */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-section__layout">

            {/* Form */}
            <div>
              <form
                className="contact-form glass-elevated reveal"
                onSubmit={handleSubmit}
                aria-label="Contact form"
              >
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="first-name">First Name</label>
                    <input className="form-input" type="text" id="first-name" name="first_name"
                           placeholder="Jordan" required autoComplete="given-name" />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="last-name">Last Name</label>
                    <input className="form-input" type="text" id="last-name" name="last_name"
                           placeholder="Smith" required autoComplete="family-name" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="email">Work Email</label>
                    <input className="form-input" type="email" id="email" name="email"
                           placeholder="you@company.com" required autoComplete="email" />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="company">Company</label>
                    <input className="form-input" type="text" id="company" name="company"
                           placeholder="Acme Corp" autoComplete="organization" />
                  </div>
                </div>

                <div className="form-field form-field--full" style={{ gridColumn: '1/-1' }}>
                  <label className="form-label" htmlFor="service">Service Interest</label>
                  <select className="form-select" id="service" name="service" defaultValue="">
                    <option value="" disabled>Select a service area</option>
                    {SERVICE_OPTIONS.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-field" style={{ gridColumn: '1/-1' }}>
                  <label className="form-label" htmlFor="message">Tell Us About Your Situation</label>
                  <textarea
                    className="form-textarea"
                    id="message"
                    name="message"
                    required
                    placeholder="Describe your current setup, what's not working, and what you're trying to achieve. The more context you share, the more useful our first conversation will be."
                  />
                </div>

                <button type="submit" className="btn btn--accent form-submit">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>

                <p className="form-note">
                  We respond within one business day. No automated replies, no sales pipeline.
                </p>
              </form>
            </div>

            {/* Info sidebar */}
            <div className="contact-info">

              <div className="contact-info-card glass-elevated reveal">
                <div className="label" style={{ marginBottom: 4 }}>Get in Touch</div>
                {CONTACT_DETAILS.map(({ label, value, icon }) => (
                  <div key={label} className="contact-detail">
                    <div className="contact-detail__icon" aria-hidden="true">{icon}</div>
                    <div>
                      <div className="contact-detail__label">{label}</div>
                      <div className="contact-detail__value">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="response-card glass-elevated reveal">
                <div
                  style={{
                    width: 42, height: 42, display: 'grid', placeItems: 'center',
                    background: 'var(--status-green-dim)',
                    border: '1px solid rgba(52,211,153,0.18)',
                    borderRadius: 'var(--radius-full)', flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--status-green)" strokeWidth="2" strokeLinecap="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <div>
                  <div className="response-card__title">Response within 24 hours</div>
                  <div className="response-card__sub">
                    A real reply from a real engineer — not a ticket number and an autoresponder.
                  </div>
                </div>
              </div>

              <div className="glass reveal" style={{ padding: 'var(--sp-6)' }}>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                  Not ready to fill out a form? Send an email directly with a brief description of
                  what you're working with — that's enough to start.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
