import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import FooterCard from './FooterCard';
import FooterCell from './FooterCell';
import FooterLocation from './FooterLocation';
import FooterMail from './FooterMail';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Wildflower Meadow Colors
  const colors = {
    background: '#FFFFE0',      // Daisy White
    link: '#87CEEB',            // Sky Blue
    linkHover: '#00BFFF',       // Brighter Sky Blue
    cta: '#FFD700',             // Buttercup Yellow
    text: '#333333',            // Dark gray for readability
    border: '#87CEEB'           // Sky Blue accents
  };

  return (
    <footer 
      className="footer-container py-5 px-4 overflow-hidden" 
      data-aos="fade-up"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      {/* Top Section */}
      <div className="row mb-4">
        {/* Logo & Branding */}
        <div className="col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center text-start">
          <div className="d-flex align-items-center gap-2">
            <img src="./public/logo2.png" alt="Logo" style={{ height: '5rem', borderRadius:"10px" }} />
            <NavLink 
              to="/"
              className="text-decoration-none fw-bold fs-4"
              style={{ color: colors.link }}
            >
              MyProject
            </NavLink>
          </div>
          <p className="mt-3" style={{ color: '#666' }}>Train with purpose. Transform your life.</p>
        </div>

        {/* Quick Links */}
        <div className="col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center" data-aos="fade-up">
          <h5 className="fw-bold mb-3" style={{ color: colors.link }}>Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <NavLink 
                to="/" 
                className="text-decoration-none d-block mb-1" 
                style={{ color: colors.link }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/programs" 
                className="text-decoration-none d-block mb-1" 
                style={{ color: colors.link }}
              >
                Programs
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/blog" 
                className="text-decoration-none d-block mb-1" 
                style={{ color: colors.link }}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className="text-decoration-none d-block mb-1" 
                style={{ color: colors.link }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social / Connect */}
        <div className="col-md-4 d-flex flex-column align-items-center" data-aos="fade-left">
          <h5 className="fw-bold mb-3" style={{ color: colors.link }}>Connect With Us</h5>
          <FooterCard />
        </div>
      </div>

      <hr className="my-4" style={{ borderColor: colors.border }} />

      {/* Contact Info Section */}
      <div className="row text-center">
        <div className="col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0" data-aos="fade-right">
          <FooterLocation />
          <p className="fw-bold mt-2 mb-1" style={{ color: colors.link }}>Location</p>
          <span className="small">441-408 Training Studio</span>
          <span className="small">Sangli, Maharashtra, India</span>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0" data-aos="fade-up">
          <FooterCell />
          <p className="fw-bold mt-2 mb-1" style={{ color: colors.link }}>Phone</p>
          <span className="small">+91 98765 43210</span>
          <span className="small">+91 91234 56789</span>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center" data-aos="fade-left">
          <FooterMail />
          <p className="fw-bold mt-2 mb-1" style={{ color: colors.link }}>Email</p>
          <a 
            href="mailto:contact@myproject.com" 
            className="text-decoration-none small"
            style={{ color: colors.link }}
          >
            contact@myproject.com
          </a>
        </div>
      </div>

      <hr className="my-4" style={{ borderColor: colors.border }} />

      {/* Footer Bottom */}
      <div className="text-center small" style={{ color: '#666' }}>
        © 2025 MyProject — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
