import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const location = useLocation();
  const isProject = location.pathname.includes("/project-details");
  const year = new Date().getFullYear();

  const scrollTo = (e, id) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page-wrapper">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      <footer className="footer-section">
        {/* ── Bottom Bar ── */}
        <div className="footer-bottom">
          <div className="footer-inner">
            {/* Left: Brand */}
            <div className="footer-brand">
              <div className="footer-brand-name">
                Mitesh <span>Soni</span>
              </div>
              <div className="footer-brand-tagline">
                Web Developer & Full Stack Developer
              </div>
            </div>

            {/* Right: Socials + copyright */}
            <div className="footer-right">
              <div className="footer-socials">
                <a
                  href="https://www.linkedin.com/in/mitesh-soni-886824323/"
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  href="https://github.com/Mitesh-soni"
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  href="tel:+8000215545"
                  className="social-btn"
                  aria-label="Phone"
                >
                  <i className="fa-solid fa-phone" />
                </a>
              </div>
              <div className="footer-copy">
                © {year} Mitesh Soni · All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
