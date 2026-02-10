import React, { useState } from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="site-footer" className="site-footer">
      <style>{`
        .site-footer {
          background-color: #000;
          border-top: 1px solid rgba(255, 177, 0, 0.2);
          color: #fff;
          padding: 80px 0 40px;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          margin-bottom: 60px;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-logo-box {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .footer-logo-icon {
          width: 40px;
          height: 40px;
          background-color: var(--cray-gold);
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800 !important;
          font-size: 18px !important;
          border-radius: 4px;
        }

        .footer-logo-text {
          display: flex;
          flex-direction: column;
        }

        .footer-logo-main {
          color: #fff;
          font-weight: 800 !important;
          font-size: 18px !important;
          line-height: 1;
        }

        .footer-logo-sub {
          color: var(--cray-gold);
          font-size: 11px !important;
          font-weight: 700 !important;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-brand-desc {
          color: #9ca3af;
          font-size: 14px !important;
          line-height: 1.6;
          margin: 0;
          font-weight: 300 !important;
        }

        .footer-social-list {
          display: flex;
          gap: 12px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-social-link {
          width: 36px;
          height: 36px;
          background: rgba(255, 177, 0, 0.05);
          border: 1px solid rgba(255, 177, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          color: #fff;
          text-decoration: none;
          transition: 0.3s;
          font-size: 14px !important;
        }

        .footer-social-link:hover {
          background: rgba(255, 177, 0, 0.2);
          border-color: var(--cray-gold);
          color: var(--cray-gold);
        }

        .footer-title {
          color: #fff;
          font-size: 16px !important;
          font-weight: 700 !important;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 14px !important;
          font-weight: 400 !important;
          transition: 0.3s;
        }

        .footer-link:hover {
          color: var(--cray-gold);
          padding-left: 4px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
        }

        .footer-contact-icon {
          color: var(--cray-gold);
          font-size: 14px !important;
        }

        .footer-contact-text {
          color: #9ca3af;
          font-size: 14px !important;
          font-weight: 400 !important;
          text-decoration: none;
          line-height: 1.4;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 177, 0, 0.1);
          padding-top: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
        }

        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        .footer-copyright {
          color: #6b7280;
          font-size: 13px !important;
          font-weight: 400 !important;
          margin: 0;
        }

        .footer-legal-links {
          display: flex;
          gap: 24px;
        }

        .footer-legal-link {
          color: #6b7280;
          text-decoration: none;
          font-size: 13px !important;
          transition: 0.2s;
        }

        .footer-legal-link:hover {
          color: #fff;
        }
      `}</style>

      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo & Desc Column */}
          <div className="footer-brand-col">
            <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} className="footer-logo-box">
              <div className="footer-logo-icon">CR</div>
              <div className="footer-logo-text">
                <span className="footer-logo-main">CRAY</span>
                <span className="footer-logo-sub">Digital</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              Leading agency providing digital marketing and consultancy services in the crypto industry. 360-degree solutions for your token projects.
            </p>
            <div className="footer-social-list">
              <a href="#" className="footer-social-link">𝕏</a>
              <a href="#" className="footer-social-link">in</a>
              <a href="#" className="footer-social-link">✈</a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services/end-to-end-crypto-project-consulting" className="footer-link">360° Consultancy</a></li>
              <li><a href="#services/token-and-blockchain-development" className="footer-link">Token & Blockchain Dev</a></li>
              <li><a href="#services/crypto-marketing" className="footer-link">Web3 Marketing</a></li>
              <li><a href="#services/market-making" className="footer-link">Market Making</a></li>
              <li><a href="#services/investment-consulting" className="footer-link">Investment Advisory</a></li>
            </ul>
          </div>

          {/* Corporate Column */}
          <div>
            <h4 className="footer-title">Corporate</h4>
            <ul className="footer-links-list">
              <li><a href="#about-us" className="footer-link">About Us</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
              <li><a href="#works" className="footer-link">Works</a></li>
              <li><a href="#" className="footer-link">Resources</a></li>
              <li><a href="#" className="footer-link">Solutions</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="footer-title">Contact</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉</span>
              <a href="mailto:info@craydigital.com" className="footer-contact-text">info@craydigital.com</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">☎</span>
              <a href="tel:+442071234567" className="footer-contact-text">+44 20 7123 4567</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span className="footer-contact-text">London, England</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 CRAY Digital. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Service</a>
            <a href="#" className="footer-legal-link">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;