
import React, { useState, useEffect } from 'react';

interface SubService {
  title: string;
}

interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  subServices?: SubService[];
}

const servicesList: ServiceItem[] = [
  { 
    id: 'A', 
    title: "A) A'DAN Z'YE KRİPTO PROJE DANIŞMANLIĞI", 
    icon: '💎',
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
  { id: 'B', title: "B) TOKEN VE BLOKZİNCİR GELİŞTİRME", icon: '🔗' },
  { id: 'C', title: "C) BLOKZİNCİR VE YAZILIM GELİŞTİRME", icon: '💻' },
  { id: 'D', title: "D) TOKEN LANSMAN VE LİSTELEME HİZMETLERİ", icon: '📊' },
  { id: 'E', title: "E) KRİPTO VE WEB3 PAZARLAMA HİZMETLERİ", icon: '📣' },
  { id: 'F', title: "F) SOSYAL MEDYA VE TOPLULUK YÖNETİMİ", icon: '👥' },
  { id: 'G', title: "G) İÇERİK ÜRETİMİ (VİDEO VE TASARIM)", icon: '🎬' },
  { id: 'H', title: "H) PİYASA YAPICILIĞI VE LİKİDİTE ÇÖZÜMLERİ", icon: '🌊' },
  { id: 'I', title: "I) YATIRIM DANIŞMANLIĞI VE FON TOPLAMA", icon: '💸' },
  { id: 'J', title: "J) İŞ ORTAKLIKLARI VE İŞ GELİŞTİRME", icon: '🤝' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeService = servicesList.find(s => s.id === activeSubMenu);

  return (
    <header 
      id="cray-site-header"
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 font-sans ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl py-3 border-b border-cray-gold/20 shadow-[0_10px_50px_rgba(0,0,0,0.9)]' 
          : 'bg-gradient-to-b from-black via-black/70 to-transparent py-7 border-b border-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center relative">
        {/* Logo Bölümü */}
        <a href="#" className="flex items-center gap-3 no-underline group shrink-0 cursor-pointer select-none">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-cray-gold rounded-xl flex items-center justify-center font-bold text-xl text-black shadow-[0_0_20px_rgba(255,177,0,0.4)] transition-all group-hover:shadow-[0_0_35px_rgba(255,177,0,0.7)]">
            CR
          </div>
          <div className="flex flex-col text-left">
            <span className="text-white font-black text-lg md:text-xl tracking-tighter uppercase leading-none">CRAY</span>
            <span className="text-cray-gold text-[0.65rem] font-bold tracking-[0.3em] uppercase mt-1">Digital</span>
          </div>
        </a>

        {/* Masaüstü Menü */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li><a href="#" className="text-white hover:text-cray-gold text-[0.8rem] font-bold uppercase tracking-[0.15em] transition-all no-underline select-none">Ana Sayfa</a></li>
            <li><a href="#" className="text-white hover:text-cray-gold text-[0.8rem] font-bold uppercase tracking-[0.15em] transition-all no-underline select-none">Hakkımızda</a></li>
            
            {/* Hizmetler Dropdown */}
            <li 
              className="relative py-2"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => {
                setIsServicesOpen(false);
                setActiveSubMenu(null);
              }}
            >
              <button className={`flex items-center gap-2 text-[0.8rem] font-bold uppercase tracking-[0.15em] transition-all cursor-pointer bg-transparent border-none outline-none select-none ${
                isServicesOpen ? 'text-cray-gold' : 'text-white'
              }`}>
                Hizmetler 
                <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mega Menü Konteynırı - Görünmez köprü padding-top:24px */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-[24px] transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
                }`}
              >
                <div 
                  className={`bg-[#0a0a0c] border border-white/10 rounded-[32px] shadow-[0_60px_120px_rgba(0,0,0,1)] flex transition-all duration-500 overflow-hidden ${
                    activeSubMenu ? 'w-[980px]' : 'w-[440px]'
                  }`}
                >
                  {/* Sol Sütun: Ana Kategoriler */}
                  <div className="w-[440px] shrink-0 bg-black/40 py-8 no-scrollbar overflow-y-auto max-h-[75vh] border-r border-white/5">
                    {servicesList.map((service) => (
                      <div 
                        key={service.id}
                        onMouseEnter={() => setActiveSubMenu(service.id)}
                        className={`relative group/item transition-all duration-300 cursor-pointer ${
                          activeSubMenu === service.id ? 'bg-cray-gold/15' : 'hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className={`flex items-center justify-between px-10 py-5 transition-all ${
                          activeSubMenu === service.id ? 'translate-x-1' : ''
                        }`}>
                          <div className="flex items-center gap-6">
                            <span className={`text-2xl transition-all duration-500 ${
                              activeSubMenu === service.id ? 'scale-125 brightness-125' : 'opacity-40 grayscale group-hover/item:opacity-100 group-hover/item:grayscale-0'
                            }`}>
                              {service.icon}
                            </span>
                            <span className={`text-[0.78rem] font-bold tracking-widest uppercase transition-all ${
                              activeSubMenu === service.id ? 'text-white' : 'text-gray-400 group-hover/item:text-white/80'
                            }`}>
                              {service.title}
                            </span>
                          </div>
                          {service.subServices && (
                            <svg className={`w-4 h-4 transition-all duration-300 ${
                              activeSubMenu === service.id ? 'text-cray-gold translate-x-1 opacity-100' : 'text-white/5 opacity-0'
                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                        {activeSubMenu === service.id && (
                          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-cray-gold shadow-[0_0_20px_rgba(255,177,0,0.8)]"></div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Sağ Sütun: Alt Detaylar (Sadece seçim yapıldığında görünür) */}
                  <div className={`flex-1 bg-gradient-to-br from-cray-gold/[0.03] to-transparent p-12 relative transition-all duration-500 ${
                    activeSubMenu ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {activeService && (
                      <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="flex items-center gap-6 mb-12">
                          <div className="w-16 h-16 bg-cray-gold/10 rounded-[20px] flex items-center justify-center text-4xl border border-cray-gold/20 shadow-[inset_0_0_20px_rgba(255,177,0,0.1)]">
                            {activeService.icon}
                          </div>
                          <div>
                            <h4 className="text-white text-2xl font-bold uppercase tracking-tight leading-none mb-3">
                              {activeService.title.replace(/^[A-Z]\)\s/, '')}
                            </h4>
                            <div className="flex items-center gap-3">
                              <span className="h-[2px] w-8 bg-cray-gold/40"></span>
                              <p className="text-cray-gold text-[0.65rem] font-black tracking-[0.5em] uppercase">Detaylı Çözümlerimiz</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-2">
                          {activeService.subServices?.map((sub, idx) => (
                            <a 
                              key={idx}
                              href="#"
                              className="group/sub flex items-center gap-5 px-6 py-4 rounded-2xl hover:bg-cray-gold/5 transition-all no-underline border border-transparent hover:border-cray-gold/10"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-cray-gold/30 group-hover/sub:bg-cray-gold group-hover/sub:scale-150 transition-all duration-300"></div>
                              <span className="text-[0.92rem] font-semibold text-gray-400 group-hover/sub:text-white transition-colors">
                                {sub.title}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>

            <li><a href="#section1" className="text-white hover:text-cray-gold text-[0.8rem] font-bold uppercase tracking-[0.15em] transition-all no-underline select-none">Çözümler</a></li>
            <li><a href="#" className="text-white hover:text-cray-gold text-[0.8rem] font-bold uppercase tracking-[0.15em] transition-all no-underline select-none">Referanslar</a></li>
          </ul>

          <a href="#section1" className="bg-cray-gold text-black px-9 py-3.5 rounded-xl font-black text-[0.75rem] tracking-[0.15em] uppercase hover:scale-105 transition-all shadow-[0_10px_30px_rgba(255,177,0,0.3)] no-underline">
            Teklif Al
          </a>
        </div>

        {/* Mobil Menü Butonu */}
        <button 
          className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 z-[10001] bg-white/5 rounded-xl border border-white/10 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-cray-gold rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-cray-gold rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-cray-gold rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </nav>

      {/* Mobil Menü Panel */}
      <div className={`fixed inset-0 bg-black/98 backdrop-blur-3xl z-[10000] lg:hidden transition-all duration-600 ease-in-out ${
        isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-32 pb-10 px-8 overflow-y-auto no-scrollbar">
          <div className="flex flex-col gap-8">
            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black text-white no-underline uppercase tracking-tighter italic">Ana Sayfa</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black text-white no-underline uppercase tracking-tighter italic">Hakkımızda</a>
            
            <div className="space-y-6 pt-2">
              <span className="text-cray-gold text-[0.65rem] font-black tracking-[0.5em] uppercase opacity-40">HİZMETLERİMİZ</span>
              <div className="flex flex-col gap-5">
                {servicesList.map((service) => (
                  <div key={service.id} className="group">
                    <div 
                      className="flex items-center justify-between text-white py-1 cursor-pointer"
                      onClick={() => service.subServices && setActiveSubMenu(activeSubMenu === service.id ? null : service.id)}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{service.icon}</span>
                        <span className="text-[1.1rem] font-bold leading-none">{service.title}</span>
                      </div>
                      {service.subServices && (
                        <svg className={`w-6 h-6 text-cray-gold transition-transform ${activeSubMenu === service.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                    {service.subServices && activeSubMenu === service.id && (
                      <div className="flex flex-col gap-5 pl-12 border-l-2 border-cray-gold/20 mt-4 py-2">
                        {service.subServices.map((sub, sIdx) => (
                          <a key={sIdx} href="#" onClick={() => setIsMenuOpen(false)} className="text-[0.95rem] text-gray-400 font-bold no-underline hover:text-white transition-colors">
                            {sub.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <a href="#section1" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black text-white no-underline uppercase tracking-tighter italic pt-2">Çözümler</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black text-white no-underline uppercase tracking-tighter italic">Referanslar</a>
          </div>

          <div className="mt-auto pt-16">
            <a href="#section1" onClick={() => setIsMenuOpen(false)} className="block w-full bg-cray-gold text-black text-center py-5 rounded-2xl font-black text-lg tracking-[0.1em] shadow-[0_15px_45px_rgba(255,177,0,0.4)] no-underline uppercase">
              Ücretsiz Teklif Al
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
