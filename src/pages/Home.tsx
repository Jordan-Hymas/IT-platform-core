import { useMemo } from 'react'
import { Link } from 'react-router-dom'

// SVG icon helpers to keep JSX clean
function IconWave() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  )
}
function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  )
}
function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}
function IconMonitor() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  )
}
function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}
function IconNetwork() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
      <path d="M12 7v3m-4.5 7.5L12 10l4.5 7.5"/>
    </svg>
  )
}
function IconCloud() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M18 10h-1.3A6 6 0 1 0 7 15h11a4 4 0 0 0 0-8z"/>
    </svg>
  )
}
function IconPhone() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1"/>
    </svg>
  )
}
function IconChat() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )
}

const SERVICES = [
  {
    icon: <IconMonitor />,
    title: 'Managed IT Services',
    desc: 'Full-stack IT management so your team stays focused on the work that matters. Proactive monitoring, maintenance, and support — without the overhead of an in-house department.',
  },
  {
    icon: <IconNetwork />,
    title: 'Network Infrastructure',
    desc: 'Structured cabling, wireless deployment, VLAN segmentation, and firewall configuration. Networks built for performance, security, and scale.',
  },
  {
    icon: <IconShield />,
    title: 'Cybersecurity',
    desc: 'Endpoint protection, threat monitoring, vulnerability assessments, and incident response. Defense designed to stay ahead of modern attack surfaces.',
  },
  {
    icon: <IconCloud />,
    title: 'Cloud & Server Consulting',
    desc: 'Architecture reviews, migration planning, and hybrid cloud setup. From bare metal to cloud-native — we help you choose and build the right stack.',
  },
  {
    icon: <IconPhone />,
    title: 'Device & Fleet Management',
    desc: 'Zero-touch provisioning, MDM enrollment, OS patching, and lifecycle management across your entire device fleet — desktops, laptops, and mobile.',
  },
  {
    icon: <IconChat />,
    title: 'Help Desk & Support',
    desc: 'Responsive, knowledgeable support that resolves real problems — not a script-reading tier-one queue. Remote and on-site available.',
  },
]

const WHY_US = [
  {
    num: '01',
    title: 'Expertise Without Overhead',
    desc: 'Senior-level engineers and architects working directly on your environment — not delegated to an understaffed help desk. You get the right person, every time.',
  },
  {
    num: '02',
    title: 'Clear Communication',
    desc: "No jargon-heavy reports that obscure more than they explain. We translate technical reality into business language — so you stay informed without needing a decoder ring.",
  },
  {
    num: '03',
    title: 'Proactive by Default',
    desc: 'We find and fix problems before they affect your business. Scheduled maintenance, continuous monitoring, and quarterly reviews — not just break-fix.',
  },
]

const STATUS_ROWS = [
  { name: 'Core Network Infrastructure',  value: 'Operational', green: true },
  { name: 'Endpoint Monitoring',          value: 'Operational', green: true },
  { name: 'Security Threat Detection',    value: 'Operational', green: true },
  { name: 'Cloud Backup Services',        value: 'Operational', green: true },
  { name: 'Patch Management Window',      value: 'Scheduled',   green: false },
]

function UptimeBars() {
  // useMemo keeps bars stable between renders
  const bars = useMemo(() =>
    Array.from({ length: 90 }, (_, i) => {
      const partial = [12, 34, 67].includes(i)
      return {
        partial,
        height: partial ? 70 : 88 + Math.random() * 12,
        opacity: 0.5 + Math.random() * 0.45,
      }
    }), []
  )

  return (
    <div className="uptime-bars" role="img" aria-label="90-day uptime chart">
      {bars.map((bar, i) => (
        <div
          key={i}
          className={`uptime-bar${bar.partial ? ' uptime-bar--partial' : ''}`}
          style={{ height: `${bar.height.toFixed(0)}%`, opacity: bar.opacity }}
          title={`Day ${i + 1}: ${bar.partial ? 'Degraded' : '100%'}`}
        />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">
        <div className="hero__content container">

          <div className="hero__badge glass">
            <span className="hero__badge-dot" aria-hidden="true" />
            Available for New Projects
          </div>

          <h1 className="hero__headline">
            <span className="line-dim">IT Infrastructure</span>
            <span className="line-main">
              Built to <span className="text-gradient">Last</span>
            </span>
          </h1>

          <p className="hero__sub">
            We architect, deploy, and manage enterprise-grade IT systems for
            businesses that treat reliability as non-negotiable.
          </p>

          <div className="hero__actions">
            <Link to="/contact" className="btn btn--accent btn--lg">Start a Project</Link>
            <Link to="/services" className="btn btn--ghost btn--lg">Explore Services</Link>
          </div>
        </div>

        {/* Floating stat widgets */}
        <div className="hero__widgets container" aria-label="Key metrics">
          {[
            { icon: <IconWave />,    value: '99.9%',      label: 'Uptime SLA' },
            { icon: <IconClock />,   value: '<4hr',        label: 'Response Time' },
            { icon: <IconShield />,  value: '24/7',        label: 'Monitoring' },
            { icon: <IconMonitor />, value: 'End-to-End',  label: 'Managed IT' },
          ].map(({ icon, value, label }) => (
            <div key={label} className="hero__widget glass-elevated">
              <div className="hero__widget-icon" aria-hidden="true">{icon}</div>
              <div className="hero__widget-value">{value}</div>
              <div className="hero__widget-label">{label}</div>
            </div>
          ))}
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="section services" id="services">
        <div className="container">
          <div className="section__header reveal">
            <span className="section__eyebrow">What We Do</span>
            <h2 className="section__title">Core Services</h2>
            <p className="section__sub">
              End-to-end IT solutions designed around how your business actually works —
              not off-the-shelf packages that almost fit.
            </p>
          </div>

          <div className="services__grid reveal-stagger">
            {SERVICES.map(({ icon, title, desc }) => (
              <article key={title} className="service-card glass-elevated glass-hover">
                <div className="service-card__icon" aria-hidden="true">{icon}</div>
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__desc">{desc}</p>
                <Link to="/services" className="service-card__link">
                  Learn more <IconArrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dashboard / Status ───────────────────────────────── */}
      <section className="section dashboard" aria-label="Infrastructure status dashboard">
        <div className="container">
          <div className="section__header reveal">
            <span className="section__eyebrow">Always On</span>
            <h2 className="section__title">Visibility Into Everything</h2>
            <p className="section__sub">
              Real-time infrastructure monitoring with clear reporting —
              so you always know the state of your systems.
            </p>
          </div>

          <div className="dashboard__layout">

            {/* Main status panel */}
            <div className="dashboard__main glass-elevated reveal">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div className="label-accent" style={{ marginBottom: 6 }}>System Status</div>
                  <h3 className="heading-md" style={{ color: 'var(--text-primary)' }}>All Systems Operational</h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-xs)', color: 'var(--status-green)' }}>
                  <span className="status-dot status-dot--green" />
                  Live
                </div>
              </div>

              <div className="status-bar" role="list" aria-label="Service status">
                {STATUS_ROWS.map(({ name, value, green }) => (
                  <div key={name} className="status-row" role="listitem">
                    <span
                      className={`status-dot ${green ? 'status-dot--green' : 'status-dot--amber'}`}
                      aria-label={green ? 'Operational' : 'Scheduled'}
                    />
                    <span className="status-name">{name}</span>
                    <span className="status-value">{value}</span>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span className="label" style={{ color: 'var(--text-tertiary)' }}>90-day uptime</span>
                  <span className="label" style={{ color: 'var(--status-green)' }}>99.97%</span>
                </div>
                <UptimeBars />
              </div>
            </div>

            {/* Sidebar widgets */}
            <div className="dashboard__sidebar">

              <div className="dashboard__widget glass-elevated reveal" style={{ alignItems: 'center' }}>
                <div className="label-accent" style={{ alignSelf: 'flex-start' }}>Avg Response Time</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 24, width: '100%' }}>
                  <div className="metric-ring" aria-label="1.8 second average response time">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle className="metric-ring__bg" cx="40" cy="40" r="32" />
                      <circle
                        className="metric-ring__fg"
                        cx="40" cy="40" r="32"
                        strokeDasharray="201"
                        strokeDashoffset="36"
                        style={{ transition: 'stroke-dashoffset 1.2s var(--ease-out)' }}
                      />
                    </svg>
                    <div className="metric-ring__label">
                      <span className="metric-ring__value">1.8s</span>
                      <span className="metric-ring__unit">avg</span>
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="stat-value" style={{ fontSize: 'var(--text-2xl)' }}>1.8s</div>
                    <div className="stat-label">Average response</div>
                    <div style={{ marginTop: 8, fontSize: 'var(--text-xs)', color: 'var(--status-green)' }}>↓ 12% vs last month</div>
                  </div>
                </div>
              </div>

              <div className="dashboard__widget glass-elevated reveal">
                <div className="label-accent">Coverage</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { label: 'Endpoints monitored', value: '142',   pct: '94%' },
                    { label: 'Patch compliance',     value: '97.2%', pct: '97%', alt: true },
                  ].map(({ label, value, pct, alt }) => (
                    <div key={label}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{label}</span>
                        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{value}</span>
                      </div>
                      <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                        <div style={{
                          height: '100%', width: pct, borderRadius: 4,
                          background: alt
                            ? 'linear-gradient(90deg,var(--accent-alt),var(--status-green))'
                            : 'linear-gradient(90deg,var(--accent),var(--accent-alt))',
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Wide stat bar */}
            <div className="dashboard__wide glass reveal">
              {[
                { value: '99.97%', label: 'Infrastructure uptime',  change: '↑ 0.04% vs prior quarter', gradient: true },
                { value: '142',    label: 'Managed endpoints',      change: undefined },
                { value: '<4hr',   label: 'Max SLA response',       change: '↓ vs 8hr industry avg' },
                { value: '0',      label: 'Critical incidents YTD', change: 'Maintained since launch' },
              ].map(({ value, label, change, gradient }, i, arr) => (
                <>
                  <div key={label} className="wide-stat">
                    <div className={`wide-stat__value${gradient ? ' text-gradient' : ''}`}>{value}</div>
                    <div className="wide-stat__label">{label}</div>
                    {change && <div className="wide-stat__change">{change}</div>}
                  </div>
                  {i < arr.length - 1 && <div key={`div-${i}`} className="wide-divider" aria-hidden="true" />}
                </>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────── */}
      <section className="section why-us">
        <div className="container">
          <div className="section__header reveal">
            <span className="section__eyebrow">Why IT Platform Core</span>
            <h2 className="section__title">Built Different</h2>
            <p className="section__sub">
              Most IT companies over-promise and under-deliver. We operate differently —
              with clear scope, honest communication, and results you can measure.
            </p>
          </div>

          <div className="why-us__grid reveal-stagger">
            {WHY_US.map(({ num, title, desc }) => (
              <div key={num} className="why-card glass-elevated glass-hover">
                <div className="why-card__number">{num}</div>
                <h3 className="why-card__title">{title}</h3>
                <p className="why-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section cta-section" aria-label="Call to action">
        <div className="container">
          <div className="cta-section__inner glass-elevated">
            <div className="cta-section__glow" aria-hidden="true" />
            <div className="glass-badge reveal">Ready when you are</div>
            <h2 className="cta-section__title reveal">
              Let's Build Something<br />
              <span className="text-gradient">Reliable</span>
            </h2>
            <p className="cta-section__sub reveal">
              Whether you're starting from scratch or inheriting a mess —
              we'll scope it honestly and build it right.
            </p>
            <div className="cta-section__actions reveal">
              <Link to="/contact"  className="btn btn--accent btn--lg">Start a Conversation</Link>
              <Link to="/services" className="btn btn--ghost btn--lg">See Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
