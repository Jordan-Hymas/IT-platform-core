import { useState } from 'react'

const TABS = [
  { id: 'networking', label: 'Networking' },
  { id: 'security',   label: 'Physical Security' },
  { id: 'managed',    label: 'Managed IT' },
  { id: 'multisite',  label: 'Multi-Site' },
]

const TABLET_VIDEO: Record<string, string> = {
  networking: '/mediaTest/protect-tablet-Cq1SGa0b.mp4',
  security:   '/mediaTest/protect-tablet-Cq1SGa0b.mp4',
  managed:    '/mediaTest/protect-tablet-Cq1SGa0b.mp4',
  multisite:  '/mediaTest/protect-tablet-Cq1SGa0b.mp4',
}

const PHONE_VIDEO: Record<string, string> = {
  networking: '/mediaTest/network-iphone-X3f93BlC.mp4',
  security:   '/mediaTest/network-iphone-X3f93BlC.mp4',
  managed:    '/mediaTest/network-iphone-X3f93BlC.mp4',
  multisite:  '/mediaTest/network-iphone-X3f93BlC.mp4',
}

export default function TestShowcase() {
  const [active, setActive] = useState('security')

  return (
    <section className="tsc">

      {/* ── Headline + tabs — normal flow above the stage ── */}
      <div className="tsc__top">
        <div className="container">
          <h1 className="tsc__headline">Enterprise IT, Built to Scale.</h1>
        </div>
        <div className="tsc__tabs">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`tsc__tab${active === tab.id ? ' is-active' : ''}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/*
        ── Device stage ──
        Mirrors sc-iQeKKQ: fixed height, overflow:hidden.
        All three children (rack, tablet, phone) are position:absolute.

        Proportions taken directly from ui.com computed styles:
          rack  width = 451/1368 = 33%
          tablet width = 1208/1368 = 88.3%  (largely behind rack on left)
          phone left  = 1030/1368 = 75.3%
          phone width = 234/1368  = 17.1%
          phone top   = 487/964   = 50.5%  (of stage height)
      */}
      <div className="tsc__stage">

        {/* Rack: left edge, full stage height, object-fit:contain shows the full rack */}
        <video
          className="tsc__rack"
          src="/media/mediaTest/rack-GwodzbZG.mp4"
          autoPlay muted loop playsInline
          aria-hidden="true"
        />

        {/* Tablet: centered, height fills stage, rack overlaps behind the left bezel */}
        {/* Phone is a child of tablet so it can be positioned relative to the tablet corner */}
        <div className="tsc__tablet">
          <div className="tsc__tablet-bezel">
            <img src="/mediaTest/download.avif" alt="" aria-hidden="true" />
          </div>
          <video className="tsc__tablet-video" key={TABLET_VIDEO[active]} autoPlay muted loop playsInline>
            <source src={TABLET_VIDEO[active]} type="video/mp4" />
          </video>
          <div className="tsc__phone">
            <div className="tsc__phone-bezel">
              <img src="/mediaTest/download (1).avif" alt="" aria-hidden="true" />
            </div>
            <div className="tsc__phone-screen">
              <video key={PHONE_VIDEO[active]} autoPlay muted loop playsInline>
                <source src={PHONE_VIDEO[active]} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
