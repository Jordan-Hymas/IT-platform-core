import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Background from './components/Background'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import TestShowcase from './pages/TestShowcase'

/** Hide the textured background on pages that use a plain white canvas. */
function BackgroundConditional() {
  const { pathname } = useLocation()
  if (pathname === '/services' || pathname === '/test') return null
  return <Background />
}

/** Scroll to top + re-run reveal observers on every route change. */
function RouteManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal, .reveal-stagger').forEach(el =>
        el.classList.add('is-visible')
      )
      return
    }

    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      )
      document.querySelectorAll('.reveal, .reveal-stagger').forEach(el =>
        observer.observe(el)
      )
      return () => observer.disconnect()
    }, 60)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteManager />
      <BackgroundConditional />
      <Nav />
      <main className="page-main">
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about"    element={<About />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/test"     element={<TestShowcase />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
