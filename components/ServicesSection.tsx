import React from 'react';

const services = [
  {
    title: "End-to-End Crypto Project Consulting",
    desc: "Managing the entire process from idea to market with a single team",
    icon: <path d="M12 20v-6M6 20V10M18 20V4"/>
  },
  {
    title: "Token & Blockchain Development",
    desc: "Tokenomics, smart contracts, whitepaper, and technical architecture",
    icon: <><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></>
  },
  {
    title: "Blockchain & Software Development",
    desc: "Web3 websites, dashboards, Telegram bots, and games",
    icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></>
  },
  {
    title: "Token Launch & Listing",
    desc: "DEX/CEX launches, launchpad preparation, and listing processes",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  },
  {
    title: "Crypto & Web3 Marketing",
    desc: "Growth, influencer marketing, PR, campaigns, and funnel management",
    icon: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></>
  },
  {
    title: "Social Media & Community",
    desc: "X, Telegram, Discord, community growth, and crisis management",
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>
  },
  {
    title: "Content Production",
    desc: "Brand identity, motion graphics, explainer videos, and visual content",
    icon: <><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></>
  },
  {
    title: "Market Making & Liquidity",
    desc: "Liquidity strategy, market-making consultancy, and system setup",
    icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>
  },
  {
    title: "Investment Consulting & Fundraising",
    desc: "Investment round planning, investor research, and strategic matchmaking",
    icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>
  },
  {
    title: "Partnerships & Business Development",
    desc: "Strategic partnerships, ecosystem collaborations, and cross-marketing",
    icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></>
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="section3" className="services-section">
      <style>{`
        .services-section {
          position: relative;
          padding: 60px 0;
          overflow: hidden;
          background-color: #000;
          color: #fff;
        }

        .services-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .services-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          z-index: 1;
        }

        .services-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, #000, transparent, #000);
          z-index: 2;
        }

        .services-container {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .services-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .services-title {
          margin-bottom: 16px;
        }

        .services-subtitle {
          color: #d1d5db;
          max-width: 672px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .services-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (min-width: 1024px) {
          .services-grid { grid-template-columns: repeat(5, 1fr); }
        }

        .service-card {
          padding: 32px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          text-align: center;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          transition: 0.3s;
        }

        .service-card:hover {
          background: rgba(255, 177, 0, 0.05);
          border-color: var(--cray-gold);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(255, 177, 0, 0.2);
        }

        .service-icon-box {
          width: 56px;
          height: 56px;
          color: var(--cray-gold);
          transition: 0.3s;
        }

        .service-card:hover .service-icon-box {
          transform: scale(1.1);
        }

        .service-name {
          color: #fff;
          line-height: 1.25;
          transition: color 0.3s;
        }

        .service-card:hover .service-name {
          color: var(--cray-gold);
        }

        .service-summary {
          color: #9ca3af;
        }
      `}</style>

      <img src="/gorsel/ag1.jpg" alt="Services Background" className="services-bg" />
      <div className="services-overlay"></div>
      <div className="services-gradient"></div>

      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">End-to-End Services for Web3 & Crypto</h2>
          <p className="services-subtitle">
            We approach each project based on its needs, offering flexible models from single services to full 360° solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {service.icon}
                </svg>
              </div>
              <h4 className="service-name">
                {service.title}
              </h4>
              <p className="service-summary">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;