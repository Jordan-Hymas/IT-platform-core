import { Link } from 'react-router-dom'

const VALUES = [
  {
    num: '01',
    title: 'Clarity over complexity',
    desc: "If we can't explain what we're doing and why in plain language, we're not doing it right. Technical depth should simplify your decisions — not complicate them.",
  },
  {
    num: '02',
    title: 'Ownership, not excuses',
    desc: 'When something breaks or goes wrong, we say so — clearly and immediately — and then we fix it. No blame-shifting, no vague status updates.',
  },
  {
    num: '03',
    title: 'Proactive beats reactive',
    desc: "The best support tickets are the ones that never get filed. Monitoring, maintenance, and foresight are built into everything we do.",
  },
  {
    num: '04',
    title: 'Right-sized solutions',
    desc: "We won't sell you enterprise tooling if a simpler solution does the job. The goal is your outcome — not our invoice.",
  },
]

const APPROACH = [
  {
    num: '01',
    title: 'Audit before advising',
    desc: "We don't walk in with a pre-built solution. We look at what you actually have first — then determine what's worth keeping, what needs replacing, and what's missing entirely.",
  },
  {
    num: '02',
    title: 'Document everything',
    desc: "Every configuration, every decision, every credential stored securely — documented so that you're never locked into us. We build systems you can hand to anyone.",
  },
  {
    num: '03',
    title: 'Report clearly and regularly',
    desc: "Monthly reports that tell you what happened, what we fixed, what's coming, and what we recommend — in plain language with context you can act on.",
  },
  {
    num: '04',
    title: 'Scale with you',
    desc: "Whether you grow from 5 to 50 or add a second office — our services scale without requiring you to re-negotiate from scratch every year.",
  },
]

const STATS = [
  { value: '99.9%', label: 'SLA uptime commitment' },
  { value: '<4hr',  label: 'Maximum response time' },
  { value: '100%',  label: 'Senior-level engineers' },
  { value: '0',     label: 'Scripted tier-one support' },
]

export default function About() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__inner">

            <div>
              <span className="section__eyebrow reveal" style={{ marginBottom: 24 }}>About</span>
              <h1 className="about-hero__title reveal">
                IT Done Right<br />
                <span className="text-gradient">Without the Noise</span>
              </h1>
              <p className="about-hero__sub reveal">
                IT Platform Core was built out of frustration with how most IT providers operate —
                slow to respond, opaque about what they're actually doing, and quick to charge for
                work that doesn't move the needle. We do things differently.
              </p>
            </div>

            <div className="about-stats reveal-stagger">
              {STATS.map(({ value, label }) => (
                <div key={label} className="about-stat glass-elevated">
                  <div className="about-stat__value text-gradient">{value}</div>
                  <div className="about-stat__label">{label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="section values">
        <div className="container">
          <div className="section__header reveal">
            <span className="section__eyebrow">What We Stand For</span>
            <h2 className="section__title">Core Values</h2>
            <p className="section__sub">These aren't wall posters. They're the filter we run every decision through.</p>
          </div>

          <div className="values__grid reveal-stagger">
            {VALUES.map(({ num, title, desc }) => (
              <div key={num} className="value-card glass-elevated glass-hover">
                <div className="value-card__num">{num}</div>
                <div>
                  <h3 className="value-card__title">{title}</h3>
                  <p className="value-card__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team / Founder ────────────────────────────────────── */}
      <section className="section team">
        <div className="container container--narrow">
          <div className="section__header section__header--center reveal">
            <span className="section__eyebrow" style={{ justifyContent: 'center' }}>The Team</span>
            <h2 className="section__title">People, Not Processes</h2>
          </div>

          <div className="team__card glass-elevated reveal">
            <div className="team__avatar" aria-label="Founder photo placeholder">
              {/* Swap with a real <img> when ready */}
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              {/* Swap founder details here */}
              <div className="team__name">Founder Name</div>
              <div className="team__role">Founder &amp; Principal Engineer</div>
              <p className="team__bio">
                Placeholder — add your own story here. What drove you to start this company,
                what you've built before, and what you care about most when it comes to how
                businesses use technology. Keep it direct and genuine.
              </p>
              <p className="team__bio" style={{ marginTop: 16 }}>
                The kind of details worth including: years of experience, certifications earned,
                industries you know well, the kinds of problems you find most interesting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Approach ─────────────────────────────────────────── */}
      <section className="section approach">
        <div className="container">
          <div className="section__header reveal">
            <span className="section__eyebrow">How We Work</span>
            <h2 className="section__title">The Approach</h2>
            <p className="section__sub">Some principles that shape every engagement — regardless of size or scope.</p>
          </div>

          <div className="approach__items reveal-stagger">
            {APPROACH.map(({ num, title, desc }) => (
              <div key={num} className="approach-item glass-elevated glass-hover">
                <div className="approach-item__num">{num}</div>
                <div>
                  <h3 className="approach-item__title">{title}</h3>
                  <p className="approach-item__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-section__inner glass-elevated">
            <div className="cta-section__glow" aria-hidden="true" />
            <h2 className="cta-section__title reveal">
              Ready to Work with a Team<br />
              <span className="text-gradient">That Gets It?</span>
            </h2>
            <p className="cta-section__sub reveal">
              Let's start with a conversation about where you are and where you want to be.
            </p>
            <div className="cta-section__actions reveal">
              <Link to="/contact"  className="btn btn--accent btn--lg">Get in Touch</Link>
              <Link to="/services" className="btn btn--ghost btn--lg">View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
