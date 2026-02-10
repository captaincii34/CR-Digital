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
    title: "A'DAN Z'YE KRİPTO PROJE DANIŞMANLIĞI", 
    icon: '💎',
    link: '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi',
    subServices: [
      { title: "Kripto Proje Danışmanlığı", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-proje-danismanligi" },
      { title: "Kripto Fikir ve Konsept Danışmanlığı", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-fikir-ve-konsept-danismanligi" },
      { title: "Kripto İş Modeli ve Strateji Danışmanlığı", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-is-modeli-ve-strateji-danismanligi" },
      { title: "Kripto Yol Haritası ve Tocenomics Danışmanlığı", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-yol-haritasi-ve-tocenomics-danismanligi" },
      { title: "Bütçe Odaklı Kripto Proje Danışmanlığı", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/butce-odakli-kripto-proje-danismanligi" },
      { title: "Uçtan Uca Kripto Proje Yönetim Danışmanlığı", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/uctan-uca-kripto-proje-yonetim-danismanligi" },
      { title: "Lansman ve Büyüme Danışmanlığı", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/lansman-ve-buyume-danismanligi" },
      { title: "Dijital Pazarlama ve Tanıtım Danışmanlığı", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/dijital-pazarlama-ve-tanitim-danismanligi" }
    ]
  },
  { 
    id: 'B', 
    title: "TOKEN VE BLOKZİNCİR GELİŞTİRME", 
    icon: '🔗', 
    link: '#hizmetler/token-ve-blokzincir-gelistirme',
    subServices: [
      { title: "Token Proje Danışmanlığı", link: "#hizmetler/token-ve-blokzincir-gelistirme/token-proje-danismanligi" },
      { title: "Blokzincir & Ağ Seçimi", link: "#hizmetler/token-ve-blokzincir-gelistirme/blokzincir-ve-ag-secimi" },
      { title: "Akıllı Kontrat (Smart Contract) Geliştirme", link: "#hizmetler/token-ve-blokzincir-gelistirme/akilli-kontrat-gelistirme" },
      { title: "Tokenomics Tasarımı", link: "#hizmetler/token-ve-blokzincir-gelistirme/tokenomics-tasarimi" },
      { title: "Whitepaper & Litepaper Hazırlığı", link: "#hizmetler/token-ve-blokzincir-gelistirme/whitepaper-hazirligi" },
      { title: "Pitch Deck & Yatırımcı Sunumları", link: "#hizmetler/token-ve-blokzincir-gelistirme/pitch-deck-ve-sunum-hazirligi" },
      { title: "Roadmap & Go-To-Market (GTM) Planlaması", link: "#hizmetler/token-ve-blokzincir-gelistirme/roadmap-ve-gtm-planlamasi" },
      { title: "Audit Hazırlık Süreçleri (Partner Tabanlı)", link: "#hizmetler/token-ve-blokzincir-gelistirme/audit-hazirlik-surecleri" }
    ]
  },
  { 
    id: 'C', 
    title: "BLOKZİNCİR VE YAZILIM GELİŞTİRME", 
    icon: '💻', 
    link: '#hizmetler/blokzincir-ve-yazilim-gelistirme',
    subServices: [
      { title: "Blokzincir Geliştirme", isHeader: true, link: "#hizmetler/blokzincir-gelistirme" },
      { title: "Akıllı Kontrat Geliştirme", link: "#hizmetler/blokzincir-ve-yazilim-gelistirme/akilli-kontrat-gelistirme" },
      { title: "Token & NFT Kontratları", link: "#hizmetler/blokzincir-ve-yazilim-gelistirme/token-nft-kontratlari" },
      { title: "Merkeziyetsiz Uygulama (DApp) Geliştirme", link: "#hizmetler/blokzincir-ve-yazilim-gelistirme/dapp-gelistirme" },
      { title: "DAO Altyapı Kurulumu", link: "#hizmetler/blokzincir-ve-yazilim-gelistirme/dao-altyapi" },
      { title: "Cüzdan Entegrasyonları", link: "#hizmetler/blokzincir-ve-yazilim-gelistirme/cuzdan-entegrasyonu" },
      { title: "Web3 & Platform Yazılımları", isHeader: true, link: "#hizmetler/web3-ve-platform-yazilimlari" },
      { title: "Web3 Uyumlu Website Geliştirme", link: "#hizmetler/web3-ve-platform-yazilimlari/website-gelistirme" },
      { title: "Özel Yönetim Panelleri (Dashboard)", link: "#hizmetler/web3-ve-platform-yazilimlari/ozel-paneller" },
      { title: "Analitik ve Raporlama Panelleri", link: "#hizmetler/web3-ve-platform-yazilimlari/analitik-raporlama" },
      { title: "Backend & API Geliştirme", link: "#hizmetler/web3-ve-platform-yazilimlari/backend-api" },
      { title: "Uygulama & Oyun Geliştirme", isHeader: true, link: "#hizmetler/uygulama-ve-oyun-gelistirme" },
      { title: "Web3 Mobil Uygulama Geliştirme", link: "#hizmetler/uygulama-ve-oyun-gelistirme/mobil-uygulama" },
      { title: "Telegram Bot & Mini App Geliştirme", link: "#hizmetler/uygulama-ve-oyun-gelistirme/telegram-bot" },
      { title: "Blokzincir Tabanlı Oyun Geliştirme", link: "#hizmetler/uygulama-ve-oyun-gelistirme/oyun-gelistirme" },
      { title: "GameFi / Play-to-Earn Sistemleri", link: "#hizmetler/uygulama-ve-oyun-gelistirme/gamefi-p2e" },
      { title: "Sunucu & Altyapı Kurulumu", link: "#hizmetler/uygulama-ve-oyun-gelistirme/sunucu-altyapi" }
    ]
  },
  { 
    id: 'D', 
    title: "TOKEN LANSMAN VE LİSTELEME HİZMETLERİ", 
    icon: '📊', 
    link: '#hizmetler/token-lansman-ve-listeleme',
    subServices: [
      { title: "Token Lansman Stratejisi", link: "#hizmetler/token-lansman-ve-listeleme/strateji" },
      { title: "DEX Lansman Yönetimi", link: "#hizmetler/token-lansman-ve-listeleme/dex" },
      { title: "CEX Listeleme Danışmanlığı", link: "#hizmetler/token-lansman-ve-listeleme/cex" },
      { title: "Launchpad Hazırlık Süreçleri", link: "#hizmetler/token-lansman-ve-listeleme/launchpad" },
      { title: "Listeleme Öncesi Pazarlama Stratejisi", link: "#hizmetler/token-lansman-ve-listeleme/pre-list-marketing" },
      { title: "Listeleme Sonrası Büyüme Stratejisi", link: "#hizmetler/token-lansman-ve-listeleme/post-list-growth" },
      { title: "Borsa İletişim ve Süreç Yönetimi", link: "#hizmetler/token-lansman-ve-listeleme/exchange-comm" },
      { title: "Listeleme Dokümantasyonu & Kontrol Listeleri", link: "#hizmetler/token-lansman-ve-listeleme/docs" }
    ]
  },
  { 
    id: 'E', 
    title: "KRİPTO VE WEB3 PAZARLAMA HİZMETLERİ", 
    icon: '📣', 
    link: '#hizmetler/kripto-ve-web3-pazarlama',
    subServices: [
      { title: "Web3 Büyüme Stratejisi", link: "#hizmetler/kripto-ve-web3-pazarlama/growth" },
      { title: "Kripto Performans Pazarlaması", link: "#hizmetler/kripto-ve-web3-pazarlama/performance" },
      { title: "Influencer & KOL Pazarlaması", link: "#hizmetler/kripto-ve-web3-pazarlama/influencer" },
      { title: "PR & Medya Yayınları", link: "#hizmetler/kripto-ve-web3-pazarlama/pr" },
      { title: "Kampanya & Hype Yönetimi", link: "#hizmetler/kripto-ve-web3-pazarlama/hype" },
      { title: "Landing Page & Funnel Optimizasyonu", link: "#hizmetler/kripto-ve-web3-pazarlama/funnel" },
      { title: "Analitik, Takip & KPI Raporlaması", link: "#hizmetler/kripto-ve-web3-pazarlama/analytics" },
      { title: "Web3 Uyumlu Pazarlama Otomasyonu", link: "#hizmetler/kripto-ve-web3-pazarlama/automation" }
    ]
  },
  { 
    id: 'F', 
    title: "SOSYAL MEDYA VE TOPLULUK YÖNETİMİ", 
    icon: '👥', 
    link: '#hizmetler/sosyal-medya-ve-topluluk-yonetimi',
    subServices: [
      { title: "X (Twitter) İçerik ve Büyüme Yönetimi", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/twitter" },
      { title: "Telegram Topluluk Yönetimi", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/telegram" },
      { title: "Discord Topluluk Yönetimi", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/discord" },
      { title: "7/24 Topluluk Moderasyonu", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/mod" },
      { title: "Ambassador Programı Kurulumu", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/ambassador" },
      { title: "Etkileşim Kampanyaları", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/engagement" },
      { title: "FUD & Kriz Yönetimi", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/crisis" },
      { title: "Topluluk Analitiği & Raporlama", link: "#hizmetler/sosyal-medya-ve-topluluk-yonetimi/analytics" }
    ]
  },
  { 
    id: 'G', 
    title: "İÇERİK ÜRETİMI (VİDEO VE TASARIM)", 
    icon: '🎬', 
    link: '#hizmetler/icerik-uretimi',
    subServices: [
      { title: "Marka Kimliği Tasarımı", link: "#hizmetler/icerik-uretimi/brand" },
      { title: "Web3 UI / UX Tasarımı", link: "#hizmetler/icerik-uretimi/ui-ux" },
      { title: "Motion Grafik & Explainer Video", link: "#hizmetler/icerik-uretimi/motion" },
      { title: "Kısa Format Video İçerikleri (Reels / Shorts)", link: "#hizmetler/icerik-uretimi/shorts" },
      { title: "Meme & Trend İçerik Üretimi", link: "#hizmetler/icerik-uretimi/meme" },
      { title: "Duyuru & Listeleme İçerik Kitleri", link: "#hizmetler/icerik-uretimi/announcement" },
      { title: "Sosyal Medya Görsel Paketleri", link: "#hizmetler/icerik-uretimi/social-kits" }
    ]
  },
  { 
    id: 'H', 
    title: "PİYASA YAPICILIĞI VE LİKİDİTE ÇÖZÜMLERİ", 
    icon: '🌊', 
    link: '#hizmetler/piyasa-yapiciligi-ve-likidite',
    subServices: [
      { title: "Piyasa Yapıcılığı Stratejisi", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/strategy" },
      { title: "Likidite Planlaması", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/planning" },
      { title: "Market Maker Seçimi & Koordinasyonu", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/mm-selection" },
      { title: "Piyasa Yapıcılığı Sistem Danışmanlığı", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/consultancy" },
      { title: "Bot Altyapısı Danışmanlığı", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/bot" },
      { title: "Spread & Volatilite Optimizasyonu", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/optim" },
      { title: "DEX & CEX Likidite Yönetimi", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/liquidity" },
      { title: "Performans Takibi & Raporlama", link: "#hizmetler/piyasa-yapiciligi-ve-likidite/perf" }
    ]
  },
  { 
    id: 'I', 
    title: "YATIRIM DANIŞMANLIĞI VE FON TOPLAMA", 
    icon: '💸', 
    link: '#hizmetler/yatirim-danismanligi',
    subServices: [
      { title: "Yatırıma Hazırlık Analizi", link: "#hizmetler/yatirim-danismanligi/audit" },
      { title: "Fon Toplama Stratejisi & Planlaması", link: "#hizmetler/yatirim-danismanligi/funding-strategy" },
      { title: "Seed / Private / Strategic Yatırım Turları", link: "#hizmetler/yatirim-danismanligi/tours" },
      { title: "Yatırımcı Araştırması & Hedefleme", link: "#hizmetler/yatirim-danismanligi/research" },
      { title: "Pitch Deck & Data Room Hazırlığı", link: "#hizmetler/yatirim-danismanligi/deck" },
      { title: "Değerleme & Token Dağılım Danışmanlığı", link: "#hizmetler/yatirim-danismanligi/valuation" },
      { title: "Stratejik Yatırımcı Bağlantıları", link: "#hizmetler/yatirim-danismanligi/network" },
      { title: "Ortak Yatırım & Syndicate Yapılanması", link: "#hizmetler/yatirim-danismanligi/syndicate" },
      { title: "Yatırımcı İlişkileri Yönetimi", link: "#hizmetler/yatirim-danismanligi/relations" }
    ]
  },
  { 
    id: 'J', 
    title: "İŞ ORTAKLIKLARI VE İŞ GELİŞTİRME", 
    icon: '🤝', 
    link: '#hizmetler/is-ortakliklari-ve-is-gelistirme',
    subServices: [
      { title: "Stratejik Partnerlikler", link: "#hizmetler/is-ortakliklari-ve-is-gelistirme/partners" },
      { title: "Ekosistem İş Birlikleri", link: "#hizmetler/is-ortakliklari-ve-is-gelistirme/ecosystem" },
      { title: "Cross-Marketing Planlaması", link: "#hizmetler/is-ortakliklari-ve-is-gelistirme/cross" },
      { title: "Kurumsal İş Geliştirme", link: "#hizmetler/is-ortakliklari-ve-is-gelistirme/corporate" }
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

            <li><a href="#" className="nav-link">REFERENCES</a></li>
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
            <a href="#" onClick={closeAll} className="mobile-nav-link">
              REFERENCES
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