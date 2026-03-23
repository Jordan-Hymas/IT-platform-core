import { useState } from 'react'
import { Link } from 'react-router-dom'

// ── Tab icons ────────────────────────────────────────────────
function NetworkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
      <path d="M12 7v3m-4.5 7.5L12 10l4.5 7.5"/>
    </svg>
  )
}
function CameraIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>
    </svg>
  )
}
function MonitorIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  )
}
function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
    </svg>
  )
}

// ── Tab + media data ─────────────────────────────────────────
const TABS = [
  { id: 'networking', label: 'Networking',        icon: <NetworkIcon /> },
  { id: 'security',   label: 'Physical Security', icon: <CameraIcon /> },
  { id: 'managed',    label: 'Managed IT',        icon: <MonitorIcon /> },
  { id: 'multisite',  label: 'Multi-Site',        icon: <GlobeIcon /> },
]

const TAB_VIDEO: Record<string, string> = {
  networking: '/media/networkDisplay.mp4',
  security:   '/media/camerDisplay.mp4',
  managed:    '/media/networkTop.mp4',
  multisite:  '/media/cameraTop.mp4',
}

// ── Showcase hero ─────────────────────────────────────────────
// Structure mirrors ui.com: rack + bezel + video are all siblings
// in one canvas. The canvas has overflow:hidden. The rack is
// position:absolute spanning the full canvas height (top to bottom),
// so it appears in the text/tabs area AND next to the devices.
function ServicesShowcase() {
  const [active, setActive] = useState('networking')

  return (
    <section className="svcs-hero">
      <div className="svcs-hero__canvas">

        {/* Rack — absolute, covers full canvas height */}
        <video
          className="svcs-hero__rack"
          src="/media/unifi-rack.mp4"
          autoPlay muted loop playsInline
          aria-hidden="true"
        />

        {/* Headline + tabs — normal flow, z-index above rack */}
        <div className="svcs-hero__top">
          <div className="container">
            <h1 className="svcs-hero__headline reveal">
              Enterprise IT, Built to Scale.
            </h1>
          </div>
          <div className="svcs-hero__tabs reveal">
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`svcs-hero__tab${active === tab.id ? ' is-active' : ''}`}
                onClick={() => setActive(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Devices — flex row at bottom, z-index above rack */}
        <div className="svcs-hero__devices">

          {/* iPad: bezel on top of screen video (matching ui.com pattern) */}
          <div className="svcs-hero__ipad">
            <div className="svcs-hero__ipad-bezel">
              <img src="/media/display.avif" alt="" aria-hidden="true" />
            </div>
            <div className="svcs-hero__ipad-screen">
              <video key={TAB_VIDEO[active]} autoPlay muted loop playsInline>
                <source src={TAB_VIDEO[active]} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Phone: bezel on top of screen video */}
          <div className="svcs-hero__phone">
            <div className="svcs-hero__phone-bezel">
              <img src="/media/iphoneDisplay.avif" alt="" aria-hidden="true" />
            </div>
            <div className="svcs-hero__phone-screen">
              <video autoPlay muted loop playsInline>
                <source src="/media/network-iphone.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ── Service item ─────────────────────────────────────────────
function CheckIcon() {
  return (
    <div className="service-item__check" aria-hidden="true">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
  )
}

interface ServiceItemProps { title: string; desc: string }
function ServiceItem({ title, desc }: ServiceItemProps) {
  return (
    <div className="service-item glass-elevated glass-hover">
      <CheckIcon />
      <div>
        <div className="service-item__title">{title}</div>
        <p className="service-item__desc">{desc}</p>
      </div>
    </div>
  )
}

const PROCESS_STEPS = [
  { num: '01', title: 'Discovery',       desc: 'We audit your current environment — hardware, software, network, and security posture.' },
  { num: '02', title: 'Proposal',        desc: 'Clear scope, timeline, and pricing. No vague retainers or surprise line items.' },
  { num: '03', title: 'Deployment',      desc: 'Phased implementation with minimal disruption. Documented every step of the way.' },
  { num: '04', title: 'Ongoing Support', desc: 'Continuous monitoring, proactive maintenance, and regular reviews — not just when things break.' },
]

// ── Page ─────────────────────────────────────────────────────
export default function Services() {
  return (
    <>
      <ServicesShowcase />

      {/* ── Managed IT ───────────────────────────────────────── */}
      <section className="service-category" id="managed-it">
        <div className="container">
          <div className="service-category__layout">
            <div className="service-category__info reveal">
              <div className="service-category__icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <h2 className="service-category__title">Managed IT Services</h2>
              <p className="service-category__desc">
                A fully outsourced IT department that acts like it's in-house.
                We take ownership of your infrastructure so your team can focus on the business.
              </p>
            </div>
            <div className="service-items reveal-stagger">
              <ServiceItem title="Proactive Monitoring"        desc="24/7 infrastructure monitoring with automated alerting. We know about issues before your users do." />
              <ServiceItem title="Patch & Update Management"   desc="Scheduled OS and software patching across your fleet — tested, staged, and deployed without disruption." />
              <ServiceItem title="Backup & Disaster Recovery"  desc="Automated backups with tested restoration procedures. RPO and RTO defined and documented for your environment." />
              <ServiceItem title="Vendor & License Management" desc="We manage your software vendors, renewals, and license compliance so nothing lapses unexpectedly." />
            </div>
          </div>
        </div>
      </section>

      {/* ── Network ──────────────────────────────────────────── */}
      <section className="service-category" id="network">
        <div className="container">
          <div className="service-category__layout">
            <div className="service-category__info reveal">
              <div className="service-category__icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
                  <path d="M12 7v3m-4.5 7.5L12 10l4.5 7.5"/>
                </svg>
              </div>
              <h2 className="service-category__title">Network Infrastructure</h2>
              <p className="service-category__desc">
                Purpose-built networks that are secure by design, fast under load, and
                documented so the next engineer can understand them in minutes.
              </p>
            </div>
            <div className="service-items reveal-stagger">
              <ServiceItem title="Network Design & Architecture" desc="Segmented, documented network architecture built for performance, scale, and security from the ground up." />
              <ServiceItem title="Wireless Deployment"           desc="Enterprise Wi-Fi with proper coverage analysis, AP placement, and SSID segmentation for employees and guests." />
              <ServiceItem title="Firewall & VPN Configuration"  desc="Next-gen firewall setup with IDS/IPS, site-to-site and client VPN, and zero-trust access policies." />
            </div>
          </div>
        </div>
      </section>

      {/* ── Security ─────────────────────────────────────────── */}
      <section className="service-category" id="security">
        <div className="container">
          <div className="service-category__layout">
            <div className="service-category__info reveal">
              <div className="service-category__icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h2 className="service-category__title">Cybersecurity</h2>
              <p className="service-category__desc">
                Modern threats require modern defenses. We layer security across every
                part of your environment — not just at the perimeter.
              </p>
            </div>
            <div className="service-items reveal-stagger">
              <ServiceItem title="Endpoint Detection & Response"   desc="EDR deployment and management across your fleet — behavioral threat detection, not just signatures." />
              <ServiceItem title="Vulnerability Assessment"        desc="Scheduled scanning, prioritized remediation guidance, and executive reporting you can actually act on." />
              <ServiceItem title="Identity & Access Management"    desc="MFA enforcement, SSO configuration, role-based access controls, and privileged account governance." />
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="section process">
        <div className="container">
          <div className="section__header section__header--center reveal">
            <span className="section__eyebrow" style={{ justifyContent: 'center' }}>How It Works</span>
            <h2 className="section__title">From Scope to Support</h2>
            <p className="section__sub">A clear, repeatable process — so you always know where you stand.</p>
          </div>
          <div className="process__steps reveal-stagger">
            {PROCESS_STEPS.map(({ num, title, desc }) => (
              <div key={num} className="process-step glass-elevated">
                <div className="process-step__num">{num}</div>
                <h3 className="process-step__title">{title}</h3>
                <p className="process-step__desc">{desc}</p>
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
            <h2 className="cta-section__title reveal">Not Sure Where to Start?</h2>
            <p className="cta-section__sub reveal">
              A 30-minute conversation is usually enough to identify the biggest gaps
              and where to focus first. No obligation.
            </p>
            <div className="cta-section__actions reveal">
              <Link to="/contact" className="btn btn--accent btn--lg">Book a Discovery Call</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
