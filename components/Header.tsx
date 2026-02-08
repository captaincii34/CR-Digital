
import React, { useState, useEffect } from 'react';

const servicesList = [
  { id: 'A', title: "A'DAN Z'YE CRYPTO PROJE DANIŞMANLIĞI", icon: '💎' },
  { id: 'B', title: "🚀 TOKEN & BLOCKCHAIN DEVELOPMENT", icon: '🔗' },
  { id: 'C', title: "🧠 BLOCKCHAIN & SOFTWARE DEVELOPMENT", icon: '💻' },
  { id: 'D', title: "📈 TOKEN LAUNCH & LISTING SERVICES", icon: '📊' },
  { id: 'E', title: "📢 CRYPTO & WEB3 MARKETING SERVICES", icon: '📣' },
  { id: 'F', title: "🌐 SOCIAL MEDIA & COMMUNITY MANAGEMENT", icon: '👥' },
  { id: 'G', title: "🎨 CONTENT PRODUCTION (VIDEO & DESIGN)", icon: '🎬' },
  { id: 'H', title: "💧 MARKET MAKING & LIQUIDITY SOLUTIONS", icon: '🌊' },
  { id: 'I', title: "💰 INVESTMENT ADVISORY & FUNDRAISING", icon: '💸' },
  { id: 'J', title: "🤝 PARTNERSHIPS & BUSINESS DEVELOPMENT", icon: '🤝' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg md:text-xl tracking-tight">CRAY</span>
              <span className="text-cray-gold text-[0.7rem] md:text-[0.75rem] font-medium tracking-widest uppercase">Digital</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition-colors">Ana Sayfa</a></li>
              
              {/* Services Dropdown */}
              <li 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-300 group-hover:text-white font-medium transition-colors">
                  Hizmetler 
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-[350px] bg-[#0f0f11] border border-cray-gold/20 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 origin-top-left ${
                  isServicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}>
                  <div className="py-2">
                    {servicesList.map((service) => (
                      <a 
                        key={service.id}
                        href={`#service-${service.id.toLowerCase()}`}
                        className="flex items-center gap-3 px-6 py-3 hover:bg-cray-gold/10 text-gray-400 hover:text-white transition-all border-b border-white/5 last:border-0"
                      >
                        <span className="text-lg">{service.icon}</span>
                        <span className="text-[0.78rem] font-bold tracking-tight">{service.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              <li><a href="#section1" className="text-gray-300 hover:text-white font-medium transition-colors">Çözümler</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition-colors">Referanslar</a></li>
            </ul>
            
            <a href="#section1" className="bg-cray-gold text-black px-7 py-2.5 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-[0_4px_15px_rgba(255,177,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,177,0,0.5)]">
              Teklif Al
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="lg:hidden flex flex-col gap-1.5 z-[1001]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-8 h-1 bg-cray-gold rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
            <div className={`w-8 h-1 bg-cray-gold rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-8 h-1 bg-cray-gold rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-[1000] lg:hidden transition-transform duration-500 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-32 pb-10 px-8 overflow-y-auto">
          <ul className="list-none p-0 m-0 space-y-6">
            <li><a href="#" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-white no-underline">Ana Sayfa</a></li>
            
            <li className="space-y-4">
              <span className="text-cray-gold text-sm font-bold tracking-widest uppercase">Hizmetlerimiz</span>
              <div className="grid grid-cols-1 gap-3 pl-2">
                {servicesList.map((service) => (
                  <a 
                    key={service.id}
                    href={`#service-${service.id.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 text-gray-400 no-underline hover:text-white transition-colors py-1"
                  >
                    <span>{service.icon}</span>
                    <span className="text-xs font-bold leading-tight">{service.title}</span>
                  </a>
                ))}
              </div>
            </li>

            <li><a href="#section1" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-white no-underline">Çözümler</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-white no-underline">Referanslar</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-white no-underline">Hakkımızda</a></li>
          </ul>

          <div className="mt-auto pt-10">
            <a href="#section1" onClick={() => setIsMenuOpen(false)} className="block w-full bg-cray-gold text-black text-center py-5 rounded-xl font-black text-xl shadow-[0_10px_30px_rgba(255,177,0,0.3)]">
              HEMEN TEKLİF AL
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
