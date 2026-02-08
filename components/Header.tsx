
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
  { id: 'B', title: "B) 🚀 TOKEN VE BLOKZİNCİR GELİŞTİRME", icon: '🔗' },
  { id: 'C', title: "C) 🧠 BLOKZİNCİR VE YAZILIM GELİŞTİRME", icon: '💻' },
  { id: 'D', title: "D) 📈 TOKEN LANSMAN VE LİSTELEME HİZMETLERİ", icon: '📊' },
  { id: 'E', title: "E) 📢 KRİPTO VE WEB3 PAZARLAMA HİZMETLERİ", icon: '📣' },
  { id: 'F', title: "F) 🌐 SOSYAL MEDYA VE TOPLULUK YÖNETİMİ", icon: '👥' },
  { id: 'G', title: "G) 🎨 İÇERİK ÜRETİMİ (VİDEO VE TASARIM)", icon: '🎬' },
  { id: 'H', title: "H) 💧 PİYASA YAPICILIĞI VE LİKİDİTE ÇÖZÜMLERİ", icon: '🌊' },
  { id: 'I', title: "I) 💰 YATIRIM DANIŞMANLIĞI VE FON TOPLAMA", icon: '💸' },
  { id: 'J', title: "J) 🤝 İŞ ORTAKLIKLARI VE İŞ GELİŞTİRME", icon: '🤝' },
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-gradient-to-b from-[#09090b] to-black/50 py-5'
    } border-b border-cray-gold/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]`}>
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 no-underline group transition-transform duration-300 hover:scale-105">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-cray-gold rounded-xl flex items-center justify-center font-bold text-xl text-black shadow-[0_0_15px_rgba(255,177,0,0.4)]">
              CR
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-bold text-lg md:text-xl tracking-tight uppercase leading-none">CRAY</span>
              <span className="text-cray-gold text-[0.7rem] md:text-[0.75rem] font-medium tracking-widest uppercase mt-1">Digital</span>
            </div>
          </a>

          {/* Masaüstü Navigasyon */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition-colors">Ana Sayfa</a></li>
              
              <li 
                className="relative h-full py-2"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => {
                  setIsServicesOpen(false);
                  setActiveSubMenu(null);
                }}
              >
                <button className="flex items-center gap-1 text-gray-300 hover:text-white font-medium transition-colors cursor-pointer outline-none bg-transparent border-none">
                  Hizmetler 
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Ana Dropdown Panel - overflow-hidden kaldırıldı */}
                <div className={`absolute top-full left-0 w-[440px] pt-4 transition-all duration-300 origin-top-left ${
                  isServicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="bg-[#0f0f11] border border-cray-gold/20 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col relative">
                    <div className="py-2 w-full">
                      {servicesList.map((service) => (
                        <div 
                          key={service.id}
                          className="relative"
                          onMouseEnter={() => service.subServices && setActiveSubMenu(service.id)}
                          onMouseLeave={() => setActiveSubMenu(null)}
                        >
                          <a 
                            href={`#service-${service.id.toLowerCase()}`}
                            className={`flex items-center justify-between gap-4 px-6 py-3.5 transition-all border-b border-white/5 last:border-0 group/item no-underline ${
                              activeSubMenu === service.id ? 'bg-cray-gold/15 text-white' : 'text-gray-400 hover:text-white hover:bg-cray-gold/10'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <span className="text-xl group-hover/item:scale-110 transition-transform shrink-0">{service.icon}</span>
                              <span className="text-[0.82rem] font-bold tracking-tight leading-snug">{service.title}</span>
                            </div>
                            {service.subServices && (
                              <svg className={`w-4 h-4 transition-colors ${activeSubMenu === service.id ? 'text-cray-gold' : 'text-cray-gold/30'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </a>

                          {/* Yan Açılır Alt Menü (Fly-out) */}
                          {service.subServices && activeSubMenu === service.id && (
                            <div className="absolute left-[calc(100%-2px)] top-[-10px] w-[340px] pt-2 pl-4 z-50">
                              <div className="bg-[#151518] border border-cray-gold/40 rounded-xl shadow-[0_30px_60px_rgba(0,0,0,1)] py-4 backdrop-blur-xl">
                                <div className="px-6 mb-2">
                                  <span className="text-[0.65rem] text-cray-gold font-bold uppercase tracking-widest opacity-50">ALT HİZMETLER</span>
                                </div>
                                {service.subServices.map((sub, sIdx) => (
                                  <a 
                                    key={sIdx}
                                    href="#"
                                    className="block px-6 py-2.5 text-[0.78rem] font-bold text-gray-300 hover:text-cray-gold transition-colors hover:bg-white/5 no-underline leading-tight"
                                  >
                                    <span className="mr-3 text-cray-gold">•</span>
                                    {sub.title}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              <li><a href="#section1" className="text-gray-300 hover:text-white font-medium transition-colors">Çözümler</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition-colors">Referanslar</a></li>
            </ul>
            
            <a href="#section1" className="bg-cray-gold text-black px-7 py-2.5 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-[0_4px_15px_rgba(255,177,0,0.3)] no-underline">
              Teklif Al
            </a>
          </div>

          {/* Mobil Menü Butonu */}
          <button 
            className="lg:hidden flex flex-col gap-1.5 z-[1001] bg-transparent border-none p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-8 h-1 bg-cray-gold rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
            <div className={`w-8 h-1 bg-cray-gold rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-8 h-1 bg-cray-gold rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Mobil Menü Overlay */}
      <div className={`fixed inset-0 bg-black z-[1000] lg:hidden transition-transform duration-500 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-28 pb-10 px-6 overflow-y-auto">
          <ul className="list-none p-0 m-0 space-y-6">
            <li><a href="#" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-white no-underline">Ana Sayfa</a></li>
            
            <li className="space-y-4 pt-4">
              <span className="text-cray-gold text-sm font-bold tracking-widest uppercase opacity-60">HİZMETLERİMİZ</span>
              <div className="flex flex-col gap-5 pl-1">
                {servicesList.map((service) => (
                  <div key={service.id} className="flex flex-col gap-3">
                    <div 
                      className="flex items-center justify-between text-gray-300 hover:text-white"
                      onClick={() => service.subServices && setActiveSubMenu(activeSubMenu === service.id ? null : service.id)}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xl shrink-0">{service.icon}</span>
                        <span className="text-[0.88rem] font-bold leading-tight">{service.title}</span>
                      </div>
                      {service.subServices && (
                        <svg className={`w-5 h-5 transition-transform ${activeSubMenu === service.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                    
                    {/* Mobil Alt Menü Accordion */}
                    {service.subServices && activeSubMenu === service.id && (
                      <div className="flex flex-col gap-4 pl-12 border-l border-cray-gold/20 mt-1 py-2 animate-fade-in">
                        {service.subServices.map((sub, sIdx) => (
                          <a key={sIdx} href="#" onClick={() => setIsMenuOpen(false)} className="text-[0.85rem] text-gray-400 font-bold no-underline leading-tight">
                            {sub.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </li>

            <li className="pt-4"><a href="#section1" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-white no-underline">Çözümler</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-white no-underline">Referanslar</a></li>
          </ul>

          <div className="mt-12">
            <a href="#section1" onClick={() => setIsMenuOpen(false)} className="block w-full bg-cray-gold text-black text-center py-4 rounded-xl font-bold text-lg shadow-[0_10px_30px_rgba(255,177,0,0.3)] no-underline">
              ÜCRETSİZ TEKLİF AL
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
