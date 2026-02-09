import React, { useState, useEffect } from 'react';

interface SubService {
  title: string;
}

interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  link?: string;
  subServices?: SubService[];
}

const servicesList: ServiceItem[] = [
  { 
    id: 'A', 
    title: "A'DAN Z'YE KRİPTO PROJE DANIŞMANLIĞI", 
    icon: '💎',
    link: '#danismanlik',
    subServices: [
      { title: "Kripto Proje Danışmanlığı" },
      { title: "Fikir ve Konsept Doğrulama" },
      { title: "İş Modeli ve Strateji" },
      { title: "Yol Haritası ve Kilometre Taşı Planlaması" },
      { title: "Bütçe Odaklı Proje Yapılandırma" },
      { title: "Uçtan Uca Proje Yönetimi" },
      { title: "Çok Disiplinli Ekip Koordinasyonu" },
      { title: "Lansman, Büyüme ve Ölçeklendirme Danışmanlığı" },
      { title: "Lansman Sonrası Optimizasyon ve Danışmanlık" }
    ]
  },
  { id: 'B', title: "TOKEN VE BLOKZİNCİR GELİŞTİRME", icon: '🔗' },
  { id: 'C', title: "BLOKZİNCİR VE YAZILIM GELİŞTİRME", icon: '💻' },
  { id: 'D', title: "TOKEN LANSMAN VE LİSTELEME HİZMETLERİ", icon: '📊' },
  { id: 'E', title: "KRİPTO VE WEB3 PAZARLAMA HİZMETLERİ", icon: '📣' },
  { id: 'F', title: "SOSYAL MEDYA VE TOPLULUK YÖNETİMİ", icon: '👥' },
  { id: 'G', title: "İÇERİK ÜRETİMİ (VİDEO VE TASARIM)", icon: '🎬' },
  { id: 'H', title: "PİYASA YAPICILIĞI VE LİKİDİTE ÇÖZÜMLERİ", icon: '🌊' },
  { id: 'I', title: "YATIRIM DANIŞMANLIĞI VE FON TOPLAMA", icon: '💸' },
  { id: 'J', title: "İŞ ORTAKLIKLARI VE İŞ GELİŞTİRME", icon: '🤝' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  // Mobil Akordeon
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
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Hash'i temizle ve ana sayfayı tetikle
    window.location.hash = '';
    // Sayfanın en üstüne yumuşak geçiş yap
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeAll();
  };

  const handleServiceClick = (item: ServiceItem) => {
    if (item.link) {
      window.location.hash = item.link;
      closeAll();
      setActiveSubMenu(null);
    }
  };

  const activeService = servicesList.find(s => s.id === activeSubMenu);

  return (
    <header className={`cray-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* LOGO - Tıklandığında ana sayfaya döner */}
        <a href="#" onClick={handleHomeClick} className="logo-box">
          <div className="logo-icon">CR</div>
          <div className="logo-text">
            <span className="logo-title">CRAY</span>
            <span className="logo-sub">Digital</span>
          </div>
        </a>

        {/* MASAÜSTÜ NAVIGASYON */}
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
                <div className="mega-menu-content" style={{ width: activeSubMenu ? '980px' : '440px' }}>
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
                        {item.subServices && (
                           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>

                  {activeSubMenu && (
                    <div className="mega-menu-right animate-in fade-in duration-300">
                      <div className="mega-menu-header">
                        <div className="mega-menu-header-icon">
                          {activeService?.icon}
                        </div>
                        <h4 className="mega-menu-header-title">{activeService?.title}</h4>
                      </div>

                      <div style={{ display: 'grid', gap: '2px' }}>
                        {activeService?.subServices?.map((sub, i) => (
                          <a key={i} href={activeService.link || "#"} onClick={closeAll} className="sub-nav-link">
                            <span className="dot"></span>
                            {sub.title}
                          </a>
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

        {/* MOBIL HAMBURGER */}
        <button className="mobile-hamburger" onClick={toggleMobileMenu}>
          <span style={isMobileMenuOpen ? { transform: 'translateY(8px) rotate(45deg)' } : {}}></span>
          <span style={isMobileMenuOpen ? { opacity: 0 } : {}}></span>
          <span style={isMobileMenuOpen ? { transform: 'translateY(-8px) rotate(-45deg)' } : {}}></span>
        </button>
      </div>

      {/* MOBIL OVERLAY */}
      <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
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
                      if (s.link) {
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
                          <a key={si} href={s.link || "#"} onClick={closeAll} className="sub-nav-link">
                            <span className="dot"></span>
                            {sub.title}
                          </a>
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

        <div style={{ marginTop: 'auto' }}>
          <a href="#section1" onClick={closeAll} className="cta-button" style={{ display: 'block', textAlign: 'center', fontSize: '16px', padding: '20px' }}>Ücretsiz Teklif Al</a>
        </div>
      </div>
    </header>
  );
};

export default Header;