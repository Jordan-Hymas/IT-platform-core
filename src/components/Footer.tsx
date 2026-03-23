import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">

          <div>
            {/* Swap company name here */}
            <div className="footer__brand-name">IT Platform Core</div>
            <p className="footer__brand-desc">
              Premium managed IT services and infrastructure consulting for
              businesses that refuse to compromise on reliability.
            </p>
          </div>

          <div>
            <div className="footer__col-title">Services</div>
            <ul className="footer__links" role="list">
              <li><Link to="/services" className="footer__link">Managed IT</Link></li>
              <li><Link to="/services" className="footer__link">Network Infrastructure</Link></li>
              <li><Link to="/services" className="footer__link">Cybersecurity</Link></li>
              <li><Link to="/services" className="footer__link">Cloud Consulting</Link></li>
              <li><Link to="/services" className="footer__link">Device Management</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Company</div>
            <ul className="footer__links" role="list">
              <li><Link to="/about"   className="footer__link">About</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
              <li><a href="#" className="footer__link">Careers</a></li>
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Contact</div>
            <ul className="footer__links" role="list">
              {/* Swap contact info here */}
              <li><span className="footer__link">hello@itplatformcore.com</span></li>
              <li><span className="footer__link">+1 (555) 000-0000</span></li>
              <li><span className="footer__link">Remote-first — available nationwide</span></li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          {/* Swap year and company name here */}
          <span className="footer__copyright">
            &copy; 2025 IT Platform Core. All rights reserved.
          </span>
          <div className="footer__status" aria-label="System status: all systems operational">
            <span className="footer__status-dot" aria-hidden="true" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
