import React from 'react';

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
          grid-template-columns: 1fr; gap: 48px;
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
          font-weight: 900 !important;
          font-size: 18px !important;
          border-radius: 4px;
        }

        .footer-logo-text {
          display: flex;
          flex-direction: column;
        }

        .footer-logo-main {
          color: #fff;
          font-weight: 900 !important;
          font-size: 20px !important;
          line-height: 1;
          text-transform: uppercase;
        }

        .footer-logo-up {
          color: var(--cray-gold) !important;
          font-weight: 900 !important;
          font-size: 20px !important;
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

        .footer-email-link {
          color: var(--cray-gold);
          text-decoration: none;
          font-weight: 700 !important;
          font-size: 14px !important;
          transition: 0.3s;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-email-link:hover {
          filter: brightness(1.2);
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
                <span className="footer-logo-main">CRAY<span className="footer-logo-up">UP</span></span>
                <span className="footer-logo-sub">Crypto Agency</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              Leading agency providing digital marketing and consultancy services in the crypto industry. 360-degree solutions for your token projects.
            </p>
            <a href="mailto:info@crayup.com" className="footer-email-link">
              ✉ info@crayup.com
            </a>
            <div className="footer-social-list">
              <a href="#" className="footer-social-link">𝕏</a>
              <a href="#" className="footer-social-link">in</a>
              <a href="#" className="footer-social-link">✈</a>
            </div>
          </div>

          {/* Our Services Column */}
          <div>
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services/end-to-end-crypto-project-consulting" className="footer-link">End-to-End Crypto Project Consulting</a></li>
              <li><a href="#services/token-and-blockchain-development" className="footer-link">Token & Blockchain Development</a></li>
              <li><a href="#services/blockchain-and-software-development" className="footer-link">Blockchain & Software Development</a></li>
              <li><a href="#services/token-launch-and-listing" className="footer-link">Token Launch & Listing Services</a></li>
              <li><a href="#services/crypto-marketing" className="footer-link">Crypto & Web3 Marketing Services</a></li>
            </ul>
          </div>

          {/* Other Services Column */}
          <div>
            <h4 className="footer-title">Other Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services/community-management" className="footer-link">Social Media & Community Management</a></li>
              <li><a href="#services/content-production" className="footer-link">Content Production (Video & Design)</a></li>
              <li><a href="#services/market-making" className="footer-link">Market Making & Liquidity Solutions</a></li>
              <li><a href="#services/investment-consulting" className="footer-link">Investment Consulting & Fundraising</a></li>
              <li><a href="#services/partnerships" className="footer-link">Partnerships & Business Development</a></li>
            </ul>
          </div>

          {/* Corporate Column */}
          <div>
            <h4 className="footer-title">Corporate</h4>
            <ul className="footer-links-list">
              <li><a href="#about-us" className="footer-link">About Us</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#works" className="footer-link">Works</a></li>
              <li><a href="#pricing" className="footer-link">Pricing</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 CrayUp. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#privacy-policy" className="footer-legal-link">Privacy Policy</a>
            <a href="#terms-of-service" className="footer-legal-link">Terms of Service</a>
            <a href="#gdpr" className="footer-legal-link">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;