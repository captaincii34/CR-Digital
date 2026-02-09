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
      { title: "Token Proje Danışmanlığı" },
      { title: "Blokzincir & Ağ Seçimi" },
      { title: "Akıllı Kontrat (Smart Contract) Geliştirme" },
      { title: "Tokenomics Tasarımı" },
      { title: "Whitepaper & Litepaper Hazırlığı" },
      { title: "Pitch Deck & Yatırımcı Sunumları" },
      { title: "Roadmap & Go-To-Market (GTM) Planlaması" },
      { title: "Audit Hazırlık Süreçleri (Partner Tabanlı)" }
    ]
  },
  { 
    id: 'C', 
    title: "BLOKZİNCİR VE YAZILIM GELİŞTİRME", 
    icon: '💻', 
    link: '#hizmetler/blokzincir-ve-yazilim-gelistirme',
    subServices: [
      { title: "Blokzincir Geliştirme", isHeader: true, link: "#hizmetler/blokzincir-gelistirme" },
      { title: "Akıllı Kontrat Geliştirme" },
      { title: "Token & NFT Kontratları" },
      { title: "Merkeziyetsiz Uygulama (DApp) Geliştirme" },
      { title: "DAO Altyapı Kurulumu" },
      { title: "Cüzdan Entegrasyonları" },
      { title: "Web3 & Platform Yazılımları", isHeader: true, link: "#hizmetler/web3-ve-platform-yazilimlari" },
      { title: "Web3 Uyumlu Website Geliştirme" },
      { title: "Özel Yönetim Panelleri (Dashboard)" },
      { title: "Analitik ve Raporlama Panelleri" },
      { title: "Backend & API Geliştirme" },
      { title: "Uygulama & Oyun Geliştirme", isHeader: true, link: "#hizmetler/uygulama-ve-oyun-gelistirme" },
      { title: "Web3 Mobil Uygulama Geliştirme" },
      { title: "Telegram Bot & Mini App Geliştirme" },
      { title: "Blokzincir Tabanlı Oyun Geliştirme" },
      { title: "GameFi / Play-to-Earn Sistemleri" },
      { title: "Sunucu & Altyapı Kurulumu" }
    ]
  },
  { 
    id: 'D', 
    title: "TOKEN LANSMAN VE LİSTELEME HİZMETLERİ", 
    icon: '📊', 
    link: '#hizmetler/token-lansman-ve-listeleme',
    subServices: [
      { title: "Token Lansman Stratejisi" },
      { title: "DEX Lansman Yönetimi" },
      { title: "CEX Listeleme Danışmanlığı" },
      { title: "Launchpad Hazırlık Süreçleri" },
      { title: "Listeleme Öncesi Pazarlama Stratejisi" },
      { title: "Listeleme Sonrası Büyüme Stratejisi" },
      { title: "Borsa İletişim ve Süreç Yönetimi" },
      { title: "Listeleme Dokümantasyonu & Kontrol Listeleri" }
    ]
  },
  { 
    id: 'E', 
    title: "KRİPTO VE WEB3 PAZARLAMA HİZMETLERİ", 
    icon: '📣', 
    link: '#hizmetler/kripto-ve-web3-pazarlama',
    subServices: [
      { title: "Web3 Büyüme Stratejisi" },
      { title: "Kripto Performans Pazarlaması" },
      { title: "Influencer & KOL Pazarlaması" },
      { title: "PR & Medya Yayınları" },
      { title: "Kampanya & Hype Yönetimi" },
      { title: "Landing Page & Funnel Optimizasyonu" },
      { title: "Analitik, Takip & KPI Raporlaması" },
      { title: "Web3 Uyumlu Pazarlama Otomasyonu" }
    ]
  },
  { 
    id: 'F', 
    title: "SOSYAL MEDYA VE TOPLULUK YÖNETİMİ", 
    icon: '👥', 
    link: '#hizmetler/sosyal-medya-ve-topluluk-yonetimi',
    subServices: [
      { title: "X (Twitter) İçerik ve Büyüme Yönetimi" },
      { title: "Telegram Topluluk Yönetimi" },
      { title: "Discord Topluluk Yönetimi" },
      { title: "7/24 Topluluk Moderasyonu" },
      { title: "Ambassador Programı Kurulumu" },
      { title: "Etkileşim Kampanyaları" },
      { title: "FUD & Kriz Yönetimi" },
      { title: "Topluluk Analitiği & Raporlama" }
    ]
  },
  { 
    id: 'G', 
    title: "İÇERİK ÜRETİMI (VİDEO VE TASARIM)", 
    icon: '🎬', 
    link: '#hizmetler/icerik-uretimi',
    subServices: [
      { title: "Marka Kimliği Tasarımı" },
      { title: "Web3 UI / UX Tasarımı" },
      { title: "Motion Grafik & Explainer Video" },
      { title: "Kısa Format Video İçerikleri (Reels / Shorts)" },
      { title: "Meme & Trend İçerik Üretimi" },
      { title: "Duyuru & Listeleme İçerik Kitleri" },
      { title: "Sosyal Medya Görsel Paketleri" }
    ]
  },
  { 
    id: 'H', 
    title: "PİYASA YAPICILIĞI VE LİKİDİTE ÇÖZÜMLERİ", 
    icon: '🌊', 
    link: '#hizmetler/piyasa-yapiciligi-ve-likidite',
    subServices: [
      { title: "Piyasa Yapıcılığı Stratejisi" },
      { title: "Likidite Planlaması" },
      { title: "Market Maker Seçimi & Koordinasyonu" },
      { title: "Piyasa Yapıcılığı Sistem Danışmanlığı" },
      { title: "Bot Altyapısı Danışmanlığı" },
      { title: "Spread & Volatilite Optimizasyonu" },
      { title: "DEX & CEX Likidite Yönetimi" },
      { title: "Performans Takibi & Raporlama" }
    ]
  },
  { 
    id: 'I', 
    title: "YATIRIM DANIŞMANLIĞI VE FON TOPLAMA", 
    icon: '💸', 
    link: '#hizmetler/yatirim-danismanligi',
    subServices: [
      { title: "Yatırıma Hazırlık Analizi" },
      { title: "Fon Toplama Stratejisi & Planlaması" },
      { title: "Seed / Private / Strategic Yatırım Turları" },
      { title: "Yatırımcı Araştırması & Hedefleme" },
      { title: "Pitch Deck & Data Room Hazırlığı" },
      { title: "Değerleme & Token Dağılım Danışmanlığı" },
      { title: "Stratejik Yatırımcı Bağlantıları" },
      { title: "Ortak Yatırım & Syndicate Yapılanması" },
      { title: "Yatırımcı İlişkileri Yönetimi" }
    ]
  },
  { 
    id: 'J', 
    title: "İŞ ORTAKLIKLARI VE İŞ GELİŞTİRME", 
    icon: '🤝', 
    link: '#hizmetler/is-ortakliklari-ve-is-gelistirme',
    subServices: [
      { title: "Stratejik Partnerlikler" },
      { title: "Ekosistem İş Birlikleri" },
      { title: "Cross-Marketing Planlaması" },
      { title: "Kurumsal İş Geliştirme" }
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
            <li><a href="#" onClick={handleHomeClick} className="nav-link">Ana Sayfa</a></li>
            <li><a href="#" className="nav-link">Hakkımızda</a></li>
            
            <li className="has-mega-menu" onMouseLeave={() => setActiveSubMenu(null)}>
              <button className="nav-link mega-menu-trigger">
                Hizmetler
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="mega-menu-wrapper">
                <div className="mega-menu-content" style={{ width: activeSubMenu ? '850px' : '440px' }}>
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
                    <div className="mega-menu-right animate-in fade-in duration-300 no-scrollbar" style={{ overflowY: 'auto', maxHeight: '600px' }}>
                      <div className="mega-menu-header">
                        <div className="mega-menu-header-icon">{activeService?.icon}</div>
                        <h4 className="mega-menu-header-title">{activeService?.title}</h4>
                      </div>

                      {/* Changed to 1 column layout as requested */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2px' }}>
                        {(activeService?.subServices || [{ title: activeService?.title || '' }]).map((sub, i) => (
                          <div key={i}>
                            {sub.isHeader ? (
                              <a href={sub.link || activeService?.link} onClick={(e) => handleSubServiceClick(e, sub.link || activeService?.link)} style={{ 
                                color: 'var(--cray-gold)', 
                                fontSize: '11px', 
                                fontWeight: '700', 
                                textTransform: 'uppercase', 
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

            <li><a href="#section1" className="nav-link">Çözümler</a></li>
            <li><a href="#" className="nav-link">Referanslar</a></li>
          </ul>

          <a href="#section1" className="cta-button">Teklif Al</a>
        </div>

        <button className="mobile-hamburger" onClick={toggleMobileMenu}>
          <span style={isMobileMenuOpen ? { transform: 'translateY(8px) rotate(45deg)' } : {}}></span>
          <span style={isMobileMenuOpen ? { opacity: 0 } : {}}></span>
          <span style={isMobileMenuOpen ? { transform: 'translateY(-8px) rotate(-45deg)' } : {}}></span>
        </button>
      </div>

      <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''} no-scrollbar`} style={{ overflowY: 'auto' }}>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item"><a href="#" onClick={handleHomeClick} className="mobile-nav-link">Ana Sayfa</a></li>
          <li className="mobile-nav-item"><a href="#" onClick={closeAll} className="mobile-nav-link">Hakkımızda</a></li>
          
          <li className="mobile-nav-item">
            <button onClick={() => setMobileHizmetlerOpen(!mobileHizmetlerOpen)} className="mobile-nav-link" style={{ background: 'none', border: 'none', width: '100%' }}>
              Hizmetler
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cray-gold)" strokeWidth="3" style={{ transform: mobileHizmetlerOpen ? 'rotate(180deg)' : '' }}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileHizmetlerOpen && (
              <div className="mobile-sub-menu">
                {servicesList.map(s => (
                  <div key={s.id} style={{ marginBottom: '15px' }}>
                    <div onClick={() => {
                      if (!s.subServices) {
                        handleServiceClick(s);
                      } else {
                        setMobileActiveServiceId(mobileActiveServiceId === s.id ? null : s.id);
                      }
                    }} style={{ display: 'flex', justifyContent: 'space-between', color: mobileActiveServiceId === s.id ? 'var(--cray-gold)' : '#fff', fontWeight: 700, fontSize: '16px', cursor: 'pointer' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>{s.icon} {s.title}</span>
                      {s.subServices && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ transform: mobileActiveServiceId === s.id ? 'rotate(180deg)' : '' }}>
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                    {s.subServices && mobileActiveServiceId === s.id && (
                      <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        {s.subServices.map((sub, si) => (
                          <div key={si}>
                            <a href={sub.link || s.link} onClick={(e) => handleSubServiceClick(e, sub.link || s.link)} className="sub-nav-link">
                              <span className="dot"></span>
                              {sub.title}
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

          <li className="mobile-nav-item"><a href="#section1" onClick={closeAll} className="mobile-nav-link">Çözümler</a></li>
          <li className="mobile-nav-item"><a href="#" onClick={closeAll} className="mobile-nav-link">Referanslar</a></li>
        </ul>

        <div style={{ marginTop: 'auto', paddingBottom: '40px' }}>
          <a href="#section1" onClick={closeAll} className="cta-button" style={{ display: 'block', textAlign: 'center', fontSize: '16px', padding: '20px' }}>Ücretsiz Teklif Al</a>
        </div>
      </div>
    </header>
  );
};

export default Header;