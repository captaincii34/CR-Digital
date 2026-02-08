
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-gradient-to-b from-[#09090b] to-black border-b border-cray-gold/30 shadow-[0_4px_12px_rgba(255,177,0,0.2)]">
      <nav className="max-w-[1280px] mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3 no-underline group transition-transform duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-cray-gold rounded-xl flex items-center justify-center font-bold text-xl text-black shadow-[0_4px_12px_rgba(255,177,0,0.3)]">
              CR
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-tight">CRAY</span>
              <span className="text-cray-gold text-[0.75rem] font-medium">Digital</span>
            </div>
          </a>

          <ul className="hidden md:flex items-center gap-8 list-none">
            <li><a href="#" className="text-gray-300 no-underline font-medium transition-colors duration-300 hover:text-white">Ana Sayfa</a></li>
            <li><a href="#section3" className="text-gray-300 no-underline font-medium transition-colors duration-300 hover:text-white">Hizmetler</a></li>
            <li><a href="#section1" className="text-gray-300 no-underline font-medium transition-colors duration-300 hover:text-white">Çözümler</a></li>
            <li><a href="#" className="text-gray-300 no-underline font-medium transition-colors duration-300 hover:text-white">Referanslar</a></li>
            <li><a href="#" className="text-gray-300 no-underline font-medium transition-colors duration-300 hover:text-white">Hakkımızda</a></li>
            <li>
              <a href="#section1" className="bg-cray-gold text-black px-6 py-2.5 rounded-lg font-bold no-underline transition-all duration-300 hover:scale-105 shadow-[0_4px_12px_rgba(255,177,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,177,0,0.4)]">
                Teklif Al
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
