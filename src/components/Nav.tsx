import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about',    label: 'About' },
  { to: '/contact',  label: 'Contact' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <nav className={`nav${scrolled ? ' is-scrolled' : ''}`} id="nav" aria-label="Main navigation">
        <div className="nav__inner container">
          <Link to="/" className="nav__logo" aria-label="IT Platform Core home">
            {/* Swap logo mark and name here */}
            <span className="nav__logo-mark" aria-hidden="true">IPC</span>
            <span className="nav__logo-name">IT Platform Core</span>
          </Link>

          <ul className="nav__links" role="list">
            {LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`nav__link${pathname === to ? ' nav__link--active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <span className="nav__spacer" aria-hidden="true" />
          <Link to="/contact" className="btn btn--accent nav__cta">Get Started</Link>

          <button
            className={`nav__toggle${menuOpen ? ' is-open' : ''}`}
            id="nav-toggle"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="nav-mobile"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <nav
        id="nav-mobile"
        className={`nav__mobile${menuOpen ? ' is-open' : ''}`}
        aria-label="Mobile navigation"
      >
        {LINKS.map(({ to, label }) => (
          <Link key={to} to={to} className="nav__mobile-link">{label}</Link>
        ))}
        <Link
          to="/contact"
          className="btn btn--accent"
          style={{ marginTop: 16, justifyContent: 'center' }}
        >
          Get Started
        </Link>
      </nav>
    </>
  )
}
