import React, { useState, useEffect } from 'react';

interface SubService {
  title: string;
  isHeader?: boolean;
  link?: string;
}

interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  link: string;
  subServices?: SubService[];
}

const servicesList: ServiceItem[] = [
  { 
    id: 'A', 
    title: "End-to-End Crypto Project Consulting", 
    icon: '💎',
    link: '#services/end-to-end-crypto-project-consulting',
    subServices: [
      { title: "Crypto Project Consulting", link: "#services/end-to-end-crypto-project-consulting/crypto-project-consulting" },
      { title: "Crypto Idea & Concept Consulting", link: "#services/end-to-end-crypto-project-consulting/idea-and-concept" },
      { title: "Crypto Business Model & Strategy Consulting", link: "#services/end-to-end-crypto-project-consulting/business-model-and-strategy" },
      { title: "Crypto Roadmap & Tokenomics Consulting", link: "#services/end-to-end-crypto-project-consulting/roadmap-and-tokenomics" },
      { title: "Budget-Focused Crypto Project Consulting", link: "#services/end-to-end-crypto-project-consulting/budget-oriented" },
      { title: "End-to-End Crypto Project Management Consulting", link: "#services/end-to-end-crypto-project-consulting/management-consulting" },
      { title: "Launch & Growth Consulting", link: "#services/end-to-end-crypto-project-consulting/launch-and-growth" },
      { title: "Digital Marketing & Promotion Consulting", link: "#services/end-to-end-crypto-project-consulting/digital-marketing" }
    ]
  },
  { 
    id: 'B', 
    title: "Token & Blockchain Development", 
    icon: '🔗', 
    link: '#services/token-and-blockchain-development',
    subServices: [
      { title: "Token Project Consulting", link: "#services/token-and-blockchain-development/token-consulting" },
      { title: "Blockchain & Network Selection", link: "#services/token-and-blockchain-development/network-selection" },
      { title: "Smart Contract Development", link: "#services/token-and-blockchain-development/smart-contract" },
      { title: "Tokenomics Design", link: "#services/token-and-blockchain-development/tokenomics-design" },
      { title: "Whitepaper & Litepaper Preparation", link: "#services/token-and-blockchain-development/whitepaper" },
      { title: "Pitch Deck & Investor Presentations", link: "#services/token-and-blockchain-development/pitch-deck" },
      { title: "Roadmap & Go-To-Market (GTM) Planning", link: "#services/token-and-blockchain-development/gtm-planning" },
      { title: "Audit Preparation Processes (Partner-Based)", link: "#services/token-and-blockchain-development/audit-preparation" }
    ]
  },
  { 
    id: 'C', 
    title: "Blockchain & Software Development", 
    icon: '💻', 
    link: '#services/blockchain-and-software-development',
    subServices: [
      { title: "Blockchain Development", isHeader: true, link: "#services/blockchain-development" },
      { title: "Smart Contract Development", link: "#services/blockchain-and-software-development/smart-contract-dev" },
      { title: "Token & NFT Contracts", link: "#services/blockchain-and-software-development/token-nft-contracts" },
      { title: "Decentralized Application (DApp) Development", link: "#services/blockchain-and-software-development/dapp-development" },
      { title: "DAO Infrastructure Setup", link: "#services/blockchain-and-software-development/dao-infrastructure" },
      { title: "Wallet Integrations", link: "#services/blockchain-and-software-development/wallet-integration" },
      { title: "Web3 & Platform Software", isHeader: true, link: "#services/web3-platform-software" },
      { title: "Web3-Compatible Website Development", link: "#services/web3-platform-software/website-development" },
      { title: "Custom Admin Dashboards", link: "#services/web3-platform-software/custom-dashboards" },
      { title: "Analytics & Reporting Dashboards", link: "#services/web3-platform-software/analytics-reporting" },
      { title: "Backend & API Development", link: "#services/web3-platform-software/backend-api" },
      { title: "Application & Game Development", isHeader: true, link: "#services/app-game-development" },
      { title: "Web3 Mobile Application Development", link: "#services/app-game-development/mobile-app" },
      { title: "Telegram Bot & Mini App Development", link: "#services/app-game-development/telegram-mini-app" },
      { title: "Blockchain-Based Game Development", link: "#services/app-game-development/game-development" },
      { title: "GameFi / Play-to-Earn Systems", link: "#services/app-game-development/gamefi-p2e" },
      { title: "Server & Infrastructure Setup", link: "#services/app-game-development/server-infrastructure" }
    ]
  },
  { 
    id: 'D', 
    title: "Token Launch & Listing Services", 
    icon: '📊', 
    link: '#services/token-launch-and-listing',
    subServices: [
      { title: "Token Launch Strategy", link: "#services/token-launch-and-listing/strategy" },
      { title: "DEX Launch Management", link: "#services/token-launch-and-listing/dex" },
      { title: "CEX Listing Consulting", link: "#services/token-launch-and-listing/cex" },
      { title: "Launchpad Preparation Processes", link: "#services/token-launch-and-listing/launchpad" },
      { title: "Pre-Listing Marketing Strategy", link: "#services/token-launch-and-listing/pre-list-marketing" },
      { title: "Post-Listing Growth Strategy", link: "#services/token-launch-and-listing/post-list-growth" },
      { title: "Exchange Communication & Process Management", link: "#services/token-launch-and-listing/exchange-comm" },
      { title: "Listing Documentation & Checklists", link: "#services/token-launch-and-listing/docs" }
    ]
  },
  { 
    id: 'E', 
    title: "Crypto & Web3 Marketing Services", 
    icon: '📣', 
    link: '#services/crypto-marketing',
    subServices: [
      { title: "Web3 Growth Strategy", link: "#services/crypto-marketing/growth" },
      { title: "Crypto Performance Marketing", link: "#services/crypto-marketing/performance" },
      { title: "Influencer & KOL Marketing", link: "#services/crypto-marketing/influencer" },
      { title: "PR & Media Publications", link: "#services/crypto-marketing/pr" },
      { title: "Campaign & Hype Management", link: "#services/crypto-marketing/hype" },
      { title: "Landing Page & Funnel Optimization", link: "#services/crypto-marketing/funnel" },
      { title: "Analytics, Tracking & KPI Reporting", link: "#services/crypto-marketing/analytics" },
      { title: "Web3-Compliant Marketing Automation", link: "#services/crypto-marketing/automation" }
    ]
  },
  { 
    id: 'F', 
    title: "Social Media & Community Management", 
    icon: '👥', 
    link: '#services/community-management',
    subServices: [
      { title: "X (Twitter) Content & Growth Management", link: "#services/community-management/twitter" },
      { title: "Telegram Community Management", link: "#services/community-management/telegram" },
      { title: "Discord Community Management", link: "#services/community-management/discord" },
      { title: "24/7 Community Moderation", link: "#services/community-management/mod" },
      { title: "Ambassador Program Setup", link: "#services/community-management/ambassador" },
      { title: "Engagement Campaigns", link: "#services/community-management/engagement" },
      { title: "FUD & Crisis Management", link: "#services/community-management/crisis" },
      { title: "Community Analytics & Reporting", link: "#services/community-management/analytics" }
    ]
  },
  { 
    id: 'G', 
    title: "Content Production (Video & Design)", 
    icon: '🎬', 
    link: '#services/content-production',
    subServices: [
      { title: "Brand Identity Design", link: "#services/content-production/brand" },
      { title: "Web3 UI / UX Design", link: "#services/content-production/ui-ux" },
      { title: "Motion Graphics & Explainer Videos", link: "#services/content-production/motion" },
      { title: "Short-Form Video Content (Reels / Shorts)", link: "#services/content-production/shorts" },
      { title: "Meme & Trend Content Production", link: "#services/content-production/meme" },
      { title: "Announcement & Listing Content Kits", link: "#services/content-production/announcement" },
      { title: "Social Media Visual Asset Packages", link: "#services/content-production/social-kits" }
    ]
  },
  { 
    id: 'H', 
    title: "Market Making & Liquidity Solutions", 
    icon: '🌊', 
    link: '#services/market-making',
    subServices: [
      { title: "Market Making Strategy", link: "#services/market-making/strategy" },
      { title: "Liquidity Planning", link: "#services/market-making/planning" },
      { title: "Market Maker Selection & Coordination", link: "#services/market-making/mm-selection" },
      { title: "Market Making System Consulting", link: "#services/market-making/consultancy" },
      { title: "Bot Infrastructure Consulting", link: "#services/market-making/bot" },
      { title: "Spread & Volatility Optimization", link: "#services/market-making/optim" },
      { title: "DEX & CEX Liquidity Management", link: "#services/market-making/liquidity" },
      { title: "Performance Monitoring & Reporting", link: "#services/market-making/perf" }
    ]
  },
  { 
    id: 'I', 
    title: "Investment Consulting & Fundraising", 
    icon: '💸', 
    link: '#services/investment-consulting',
    subServices: [
      { title: "Investment Readiness Analysis", link: "#services/investment-consulting/audit" },
      { title: "Fundraising Strategy & Planning", link: "#services/investment-consulting/funding-strategy" },
      { title: "Seed / Private / Strategic Investment Rounds", link: "#services/investment-consulting/tours" },
      { title: "Investor Research & Targeting", link: "#services/investment-consulting/research" },
      { title: "Pitch Deck & Data Room Preparation", link: "#services/investment-consulting/deck" },
      { title: "Valuation & Token Allocation Consulting", link: "#services/investment-consulting/valuation" },
      { title: "Strategic Investor Connections", link: "#services/investment-consulting/network" },
      { title: "Co-Investment & Syndicate Structuring", link: "#services/investment-consulting/syndicate" },
      { title: "Investor Relations Management", link: "#services/investment-consulting/relations" }
    ]
  },
  { 
    id: 'J', 
    title: "Partnerships & Business Development", 
    icon: '🤝', 
    link: '#services/partnerships',
    subServices: [
      { title: "Strategic Partnerships", link: "#services/partnerships/partners" },
      { title: "Ecosystem Collaborations", link: "#services/partnerships/ecosystem" },
      { title: "Cross-Marketing Planning", link: "#services/partnerships/cross" },
      { title: "Corporate Business Development", link: "#services/partnerships/corporate" }
    ]
  },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const [mobileHizmetlerOpen, setMobileHizmetlerOpen] = useState(false);
  const [mobileActiveServiceId, setMobileActiveServiceId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setMobileHizmetlerOpen(false);
    setMobileActiveServiceId(null);
    setActiveSubMenu(null);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeAll();
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = 'about-us';
    closeAll();
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = 'services';
    closeAll();
  };

  const handleWorksClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = 'works';
    closeAll();
  };

  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = 'pricing';
    closeAll();
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = 'contact';
    closeAll();
  };

  const handleServiceClick = (item: ServiceItem) => {
    window.location.hash = item.link;
    closeAll();
  };

  const handleSubServiceClick = (e: React.MouseEvent, subLink: string) => {
    e.preventDefault();
    window.location.hash = subLink;
    closeAll();
  };

  const activeService = servicesList.find(s => s.id === activeSubMenu);

  return (
    <header id="cray-header" className={`cray-header ${scrolled ? 'scrolled' : ''}`}>
      <style>{`
        /* Visibility Controls */
        .mobile-action-group {
          display: none;
        }

        @media (max-width: 1024px) {
          .mobile-action-group { 
            display: flex !important; 
            align-items: center; 
            gap: 12px; 
          }
        }

        /* Specific Logo Parity Styling */
        .logo-title {
          color: #fff;
          font-weight: 900 !important;
          font-size: 20px !important;
          letter-spacing: -0.5px;
          text-transform: uppercase;
          line-height: 1;
        }
        .logo-title-up {
          color: var(--cray-gold) !important;
          font-size: 20px !important;
          font-weight: 900 !important;
        }
      `}</style>

      <div className="nav-container">
        <a href="#" onClick={handleHomeClick} className="logo-box">
          <div className="logo-icon">CR</div>
          <div className="logo-text">
            <span className="logo-title">CRAY<span className="logo-title-up">UP</span></span>
            <span className="logo-sub">Crypto Agency</span>
          </div>
        </a>

        <div className="main-nav">
          <ul className="nav-links">
            <li><a href="#" onClick={handleHomeClick} className="nav-link">HOMEPAGE</a></li>
            <li><a href="#about-us" onClick={handleAboutClick} className="nav-link">ABOUT US</a></li>
            
            <li className="has-mega-menu" onMouseLeave={() => setActiveSubMenu(null)}>
              <button className="nav-link mega-menu-trigger" onClick={handleServicesClick}>
                SERVICES
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="mega-menu-wrapper">
                <div className="mega-menu-content" style={{ width: 'max-content' }}>
                  <div className="mega-menu-left no-scrollbar">
                    {servicesList.map(item => (
                      <div 
                        key={item.id} 
                        className={`menu-item-row ${activeSubMenu === item.id ? 'active' : ''}`}
                        onMouseEnter={() => setActiveSubMenu(item.id)}
                        onClick={() => handleServiceClick(item)}
                      >
                        <div className="menu-item-content">
                          <span className="menu-item-icon">{item.icon}</span>
                          <span className="menu-item-title">{item.title}</span>
                        </div>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    ))}
                  </div>

                  {activeSubMenu && (
                    <div className="mega-menu-right animate-in fade-in duration-300 no-scrollbar" style={{ overflowY: 'auto', maxHeight: '600px', minWidth: '450px' }}>
                      <a 
                        href={activeService?.link} 
                        onClick={(e) => handleSubServiceClick(e, activeService?.link || '')} 
                        className="mega-menu-header"
                      >
                        <div className="mega-menu-header-icon">{activeService?.icon}</div>
                        <h4 className="mega-menu-header-title">{activeService?.title}</h4>
                      </a>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2px' }}>
                        {(activeService?.subServices || [{ title: activeService?.title || '' }]).map((sub, i) => (
                          <div key={i}>
                            {sub.isHeader ? (
                              <a href={sub.link || activeService?.link} onClick={(e) => handleSubServiceClick(e, sub.link || activeService?.link)} style={{ 
                                color: 'var(--cray-gold)', 
                                fontSize: '8.5px', 
                                fontWeight: '700', 
                                textTransform: 'capitalize', 
                                margin: '15px 0 8px 16px',
                                borderLeft: '2px solid var(--cray-gold)',
                                paddingLeft: '8px',
                                display: 'block',
                                textDecoration: 'none'
                              }}>
                                🔹 {sub.title}
                              </a>
                            ) : (
                              <a href={sub.link || activeService?.link} onClick={(e) => handleSubServiceClick(e, sub.link || activeService?.link)} className="sub-nav-link">
                                <span className="dot"></span>
                                {sub.title}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </li>

            <li><a href="#works" onClick={handleWorksClick} className="nav-link">WORKS</a></li>
            <li><a href="#pricing" onClick={handlePricingClick} className="nav-link">PRICING</a></li>
            <li><a href="#contact" onClick={handleContactClick} className="nav-link">CONTACT</a></li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="#calendar" onClick={closeAll} className="cta-button">CALENDAR</a>
          </div>
        </div>

        {/* Mobil Aksiyon Grubu */}
        <div className="mobile-action-group">
          <button className="mobile-hamburger" onClick={toggleMobileMenu}>
            <span style={isMobileMenuOpen ? { transform: 'translateY(8px) rotate(45deg)' } : {}}></span>
            <span style={isMobileMenuOpen ? { opacity: 0 } : {}}></span>
            <span style={isMobileMenuOpen ? { transform: 'translateY(-8px) rotate(-45deg)' } : {}}></span>
          </button>
        </div>
      </div>

      <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''} no-scrollbar`}>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item">
            <a href="#" onClick={handleHomeClick} className="mobile-nav-link">
              HOMEPAGE
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#about-us" onClick={handleAboutClick} className="mobile-nav-link">
              ABOUT US
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </a>
          </li>
          
          <li className="mobile-nav-item">
            <button onClick={() => setMobileHizmetlerOpen(!mobileHizmetlerOpen)} className="mobile-nav-link" style={{ background: 'none', border: 'none', width: '100%', padding: '18px 0' }}>
              SERVICES
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cray-gold)" strokeWidth="3" style={{ transform: mobileHizmetlerOpen ? 'rotate(180deg)' : '' }}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileHizmetlerOpen && (
              <div className="mobile-sub-menu">
                <a href="#services" onClick={handleServicesClick} className="mobile-sub-item-link">
                  <span className="mobile-service-title" style={{ color: 'var(--cray-gold)' }}>
                    Overview (All Services)
                  </span>
                </a>
                {servicesList.map(s => (
                  <div key={s.id} style={{ marginBottom: '8px' }}>
                    <div onClick={() => {
                      if (!s.subServices) {
                        handleServiceClick(s);
                      } else {
                        setMobileActiveServiceId(mobileActiveServiceId === s.id ? null : s.id);
                      }
                    }} className="mobile-sub-item-link">
                      <span className="mobile-service-title" style={{ color: mobileActiveServiceId === s.id ? 'var(--cray-gold)' : '#fff' }}>
                        {s.title.toLowerCase()}
                      </span>
                      {s.subServices && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ transform: mobileActiveServiceId === s.id ? 'rotate(180deg)' : '' }}>
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                    {s.subServices && mobileActiveServiceId === s.id && (
                      <div style={{ paddingLeft: '15px', borderLeft: '1px solid rgba(255, 177, 0, 0.2)', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div>
                          <a href={s.link} onClick={(e) => handleSubServiceClick(e, s.link)} className="mobile-sub-item-link">
                            <span className="mobile-service-title" style={{ color: 'var(--cray-gold)' }}>
                              {s.title.toLowerCase()}
                            </span>
                          </a>
                        </div>
                        {s.subServices.map((sub, si) => (
                          <div key={si}>
                            <a 
                              href={sub.link || s.link} 
                              onClick={(e) => handleSubServiceClick(e, sub.link || s.link)} 
                              className="mobile-sub-item-link"
                              style={!sub.isHeader ? { paddingLeft: '20px' } : {}}
                            >
                              <span className={sub.isHeader ? "mobile-sub-header-title" : "mobile-service-title"} style={!sub.isHeader ? { opacity: 0.7 } : {}}>
                                {sub.isHeader ? "🔹 " : "• "}{sub.title.toLowerCase()}
                              </span>
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>

          <li className="mobile-nav-item">
            <a href="#works" onClick={handleWorksClick} className="mobile-nav-link">
              WORKS
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </a>
          </li>

          <li className="mobile-nav-item">
            <a href="#pricing" onClick={handlePricingClick} className="mobile-nav-link">
              PRICING
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </a>
          </li>

          <li className="mobile-nav-item">
            <a href="#contact" onClick={handleContactClick} className="mobile-nav-link">
              CONTACT
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </a>
          </li>
        </ul>

        <div style={{ marginTop: '40px', paddingBottom: '20px' }}>
          <a href="#calendar" onClick={closeAll} className="cta-button" style={{ display: 'block', textAlign: 'center', fontSize: '13px', padding: '16px' }}>CALENDAR</a>
        </div>
      </div>
    </header>
  );
};

export default Header;