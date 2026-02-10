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
    link: '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi',
    subServices: [
      { title: "Crypto Project Consulting", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-proje-danismanligi" },
      { title: "Crypto Idea & Concept Consulting", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-fikir-ve-konsept-danismanligi" },
      { title: "Crypto Business Model & Strategy Consulting", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-is-modeli-ve-strateji-danismanligi" },
      { title: "Crypto Roadmap & Tokenomics Consulting", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-yol-haritasi-ve-tocenomics-danismanligi" },
      { title: "Budget-Focused Crypto Project Consulting", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/butce-odakli-kripto-proje-danismanligi" },
      { title: "End-to-End Crypto Project Management Consulting", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/uctan-uca-kripto-proje-yonetim-danismanligi" },
      { title: "Launch & Growth Consulting", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/lansman-ve-buyume-danismanligi" },
      { title: "Digital Marketing & Promotion Consulting", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/dijital-pazarlama-ve-tanitim-danismanligi" }
    ]
  },
  { 
    id: 'B', 
    title: "Token & Blockchain Development", 
    icon: '🔗', 
    link: '#hizmetler/token-ve-blokzincir-gelistirme',
    subServices: [
      { title: "Token Project Consulting", link: "#hizmetler/token-ve-blokzincir-gelistirme/token-proje-danismanligi" },
      { title: "Blockchain & Network Selection", link: "#hizmetler/token-ve-blokzincir-gelistirme/blokzincir-ve-ag-secimi" },
      { title: "Smart Contract Development", link: "#hizmetler/token-ve-blokzincir-gelistirme/akilli-kontrat-gelistirme" },
      { title: "Tokenomics Design", link: "#hizmetler/token-ve-blokzincir-gelistirme/tokenomics-tasarimi" },
      { title: "Whitepaper & Litepaper Preparation", link: "#hizmetler/token-ve-blokzincir-gelistirme/whitepaper-hazirligi" },
      { title: "Pitch Deck & Investor Presentations", link: "#hizmetler/token-ve-blokzincir-gelistirme/pitch-deck-ve-sunum-hazirligi" },
      { title: "Roadmap & Go-To-Market (GTM) Planning", link: "#hizmetler/token-ve-blokzincir-gelistirme/roadmap-ve-gtm-planlamasi" },
      { title: "Audit Preparation Processes (Partner-Based)", link: "#hizmetler/token-ve-blokzincir-gelistirme/audit-hazirlik-surecleri" }
    ]
  },
  { 
    id: 'C', 
    title: "Blockchain & Software Development", 
    icon: '💻', 
    link: '#hizmetler/blokzincir-ve-yazilim-gelistirme',
    subServices: [
      { title: "Blockchain Development", isHeader: true, link: "#hizmetler/blokzincir-gelistirme" },
      { title: "Smart Contract Development", link: "#hizmetler/blokzincir-ve-yazilim-gelistirme/akilli-kontrat-gelistirme" },
      { title: "Token & NFT Contracts", link: "#hizmetler/blokzincir-ve-yazilim-gelistirme/token-nft-kontratlari" },
      { title: "Decentralized Application (DApp) Development", link: "#hizmetler/blokzincir-ve-yazilim-gelistirme/dapp-gelistirme" },
      { title: "DAO Infrastructure Setup", link: "#hizmetler/blokzincir-ve-yazilim-gelistirme/dao-altyapi" },
      { title: "Wallet Integrations", link: "#hizmetler/blokzincir-ve-yazilim-gelistirme/cuzdan-entegrasyonu" },
      { title: "Web3 & Platform Software", isHeader: true, link: "#hizmetler/web3-ve-platform-yazilimlari" },
      { title: "Web3-Compatible Website Development", link: "#hizmetler/web3-ve-platform-yazilimlari/website-gelistirme" },
      { title: "Custom Admin Dashboards", link: "#hizmetler/web3-ve-platform-yazilimlari/ozel-paneller" },
      { title: "Analytics & Reporting Dashboards", link: "#hizmetler/web3-ve-platform-yazilimlari/analitik-raporlama" },
      { title: "Backend & API Development", link: "#hizmetler/web3-ve-platform-yazilimlari/backend-api" },
      { title: "Application & Game Development", isHeader: true, link: "#hizmetler/uygulama-ve-oyun-gelistirme" },
      { title: "Web3 Mobile Application Development", link: "#hizmetler/uygulama-ve-oyun-gelistirme/mobil-uygulama" },
      { title: "Telegram Bot & Mini App Development", link: "#hizmetler/uygulama-ve-oyun-gelistirme/telegram-bot" },
      { title: "Blockchain-Based Game Development", link: "#hizmetler/uygulama-ve-oyun-gelistirme/oyun-gelistirme" },
      { title: "GameFi / Play-to-Earn Systems", link: "#hizmetler/uygulama-ve-oyun-gelistirme/gamefi-p2e" },
      { title: "Server & Infrastructure Setup", link: "#hizmetler/uygulama-ve-oyun-gelistirme/sunucu-altyapi" }
    ]
  },
  { 
    id: 'D', 
    title: "Token Launch & Listing Services", 
    icon: '📊', 
    link: '#hizmetler/token-lansman-ve-listeleme',
    subServices: [
      { title: "Token Launch Strategy", link: "#hizmetler/token-lansman-ve-listeleme/strateji" },
      { title: "DEX Launch Management", link: "#hizmetler/token-lansman-ve-listeleme/dex" },
      { title: "CEX Listing Consulting", link: "#hizmetler/token-lansman-ve-listeleme/cex" },
      { title: "Launchpad Preparation Processes", link: "#hizmetler/token-lansman-ve-listeleme/launchpad" },
      { title: "Pre-Listing Marketing Strategy", link: "#hizmetler/token-lansman-ve-listeleme/pre-list-marketing" },
      { title: "Post-Listing Growth Strategy", link: "#hizmetler/token-lansman-ve-listeleme/post-list-growth" },
      { title: "Exchange Communication & Process Management", link: "#hizmetler/token-lansman-ve-listeleme/exchange-comm" },
      { title: "Listing Documentation & Checklists", link: "#hizmetler/token-lansman-ve-listeleme/docs" }
    ]
  },
  { 
    id: 'E', 
    title: "Crypto & Web3 Marketing Services", 
    icon: '📣', 
    link: '#hizmetler/kripto-ve-web3-pazarlama',
    subServices: [
      { title: "Web3 Growth Strategy", link: "#hizmetler/kripto-ve-web3-pazarlama/growth" },
      { title: "Crypto Performance Marketing", link: "#hizmetler/kripto-ve-web3-pazarlama/performance" },
      { title: "Influencer & KOL Marketing", link: "#hizmetler/kripto-ve-web3-pazarlama/influencer" },
      { title: "PR & Media Publications", link: "#hizmetler/kripto-ve-web3-pazarlama/pr" },
      { title: "Campaign & Hype Management", link: "#hizmetler/kripto-ve-web3-pazarlama/hype" },
      { title: "Landing Page & Funnel Optimization", link: "#hizmetler/kripto-ve-web3-pazarlama/funnel" },
      { title: "Analytics, Tracking & KPI Reporting", link: "#hizmetler/kripto-ve-web3-pazarlama/analytics" },
      { title: "Web3-Compliant Marketing Automation", link: "#hizmetler/kripto-ve-web3-pazarlama/automation" }
    ]
  },
  { 
    id: 'F', 
    title: "Social Media & Community Management", 
    icon: '👥', 
    link: '#hizmetler/sosyal-medya-ve-topluluk-yonetimi',
    subServices: [
      { title: "X (Twitter) Content & Growth Management", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/twitter" },
      { title: "Telegram Community Management", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/telegram" },
      { title: "Discord Community Management", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/discord" },
      { title: "24/7 Community Moderation", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/mod" },
      { title: "Ambassador Program Setup", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/ambassador" },
      { title: "Engagement Campaigns", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/engagement" },
      { title: "FUD & Crisis Management", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/crisis" },
      { title: "Community Analytics & Reporting", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/analytics" }
    ]
  },
  { 
    id: 'G', 
    title: "Content Production (Video & Design)", 
    icon: '🎬', 
    link: '#hizmetler/icerik-uretimi',
    subServices: [
      { title: "Brand Identity Design", link: "#hizmetler/icerik-uretimi/brand" },
      { title: "Web3 UI / UX Design", link: "#hizmetler/icerik-uretimi/ui-ux" },
      { title: "Motion Graphics & Explainer Videos", link: "#hizmetler/icerik-uretimi/motion" },
      { title: "Short-Form Video Content (Reels / Shorts)", link: "#hizmetler/icerik-uretimi/shorts" },
      { title: "Meme & Trend Content Production", link: "#hizmetler/icerik-uretimi/meme" },
      { title: "Announcement & Listing Content Kits", link: "#hizmetler/icerik-uretimi/announcement" },
      { title: "Social Media Visual Asset Packages", link: "#hizmetler/icerik-uretimi/social-kits" }
    ]
  },
  { 
    id: 'H', 
    title: "Market Making & Liquidity Solutions", 
    icon: '🌊', 
    link: '#hizmetler/piyasa-yapiciligi-ve-likidite',
    subServices: [
      { title: "Market Making Strategy", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/strategy" },
      { title: "Liquidity Planning", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/planning" },
      { title: "Market Maker Selection & Coordination", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/mm-selection" },
      { title: "Market Making System Consulting", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/consultancy" },
      { title: "Bot Infrastructure Consulting", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/bot" },
      { title: "Spread & Volatility Optimization", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/optim" },
      { title: "DEX & CEX Liquidity Management", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/liquidity" },
      { title: "Performance Monitoring & Reporting", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/perf" }
    ]
  },
  { 
    id: 'I', 
    title: "Investment Consulting & Fundraising", 
    icon: '💸', 
    link: '#hizmetler/yatirim-danismanligi',
    subServices: [
      { title: "Investment Readiness Analysis", link: "#hizmetler/yatirim-danismanligi/audit" },
      { title: "Fundraising Strategy & Planning", link: "#hizmetler/yatirim-danismanligi/funding-strategy" },
      { title: "Seed / Private / Strategic Investment Rounds", link: "#hizmetler/yatirim-danismanligi/tours" },
      { title: "Investor Research & Targeting", link: "#hizmetler/yatirim-danismanligi/research" },
      { title: "Pitch Deck & Data Room Preparation", link: "#hizmetler/yatirim-danismanligi/deck" },
      { title: "Valuation & Token Allocation Consulting", link: "#hizmetler/yatirim-danismanligi/valuation" },
      { title: "Strategic Investor Connections", link: "#hizmetler/yatirim-danismanligi/network" },
      { title: "Co-Investment & Syndicate Structuring", link: "#hizmetler/yatirim-danismanligi/syndicate" },
      { title: "Investor Relations Management", link: "#hizmetler/yatirim-danismanligi/relations" }
    ]
  },
  { 
    id: 'J', 
    title: "Partnerships & Business Development", 
    icon: '🤝', 
    link: '#hizmetler/is-ortakliklari-ve-is-gelistirme',
    subServices: [
      { title: "Strategic Partnerships", link: "#hizmetler/is-ortakliklari-ve-is-gelistirme/partners" },
      { title: "Ecosystem Collaborations", link: "#hizmetler/is-ortakliklari-ve-is-gelistirme/ecosystem" },
      { title: "Cross-Marketing Planning", link: "#hizmetler/is-ortakliklari-ve-is-gelistirme/cross" },
      { title: "Corporate Business Development", link: "#hizmetler/is-ortakliklari-ve-is-gelistirme/corporate" }
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
    window.location.hash = 'hakkimizda';
    closeAll();
  };

  const handleWorksClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = 'works';
    closeAll();
  };

  const handleLinkClick = () => {
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
      `}</style>

      <div className="nav-container">
        <a href="#" onClick={handleHomeClick} className="logo-box">
          <div className="logo-icon">CR</div>
          <div className="logo-text">
            <span className="logo-title">CRAY</span>
            <span className="logo-sub">Digital</span>
          </div>
        </a>

        <div className="main-nav">
          <ul className="nav-links">
            <li><a href="#" onClick={handleHomeClick} className="nav-link">HOMEPAGE</a></li>
            <li><a href="#hakkimizda" onClick={handleAboutClick} className="nav-link">ABOUT US</a></li>
            
            <li className="has-mega-menu" onMouseLeave={() => setActiveSubMenu(null)}>
              <button className="nav-link mega-menu-trigger">
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
            <li><a href="#booking-section" onClick={handleLinkClick} className="nav-link">CONTACT</a></li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="#booking-section" onClick={closeAll} className="cta-button">CALENDAR</a>
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
            <a href="#hakkimizda" onClick={handleAboutClick} className="mobile-nav-link">
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
            <a href="#booking-section" onClick={closeAll} className="mobile-nav-link">
              CONTACT
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </a>
          </li>
        </ul>

        <div style={{ marginTop: '40px', paddingBottom: '20px' }}>
          <a href="#booking-section" onClick={closeAll} className="cta-button" style={{ display: 'block', textAlign: 'center', fontSize: '13px', padding: '16px' }}>CALENDAR</a>
        </div>
      </div>
    </header>
  );
};

export default Header;