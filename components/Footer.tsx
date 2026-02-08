
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-cray-gold/20 text-white">
      <div className="max-w-[1280px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cray-gold flex items-center justify-center font-bold text-lg text-black">CR</div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg">CRAY</span>
                <span className="text-cray-gold text-[0.75rem]">Digital</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Kripto sektöründe dijital pazarlama ve danışmanlık hizmetleri sunan lider ajans. Token projeleriniz için 360 derece çözümler.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-cray-gold/10 border border-cray-gold/20 flex items-center justify-center rounded-sm transition-colors hover:bg-cray-gold/20 no-underline">𝕏</a>
              <a href="#" className="w-10 h-10 bg-cray-gold/10 border border-cray-gold/20 flex items-center justify-center rounded-sm transition-colors hover:bg-cray-gold/20 no-underline">in</a>
              <a href="#" className="w-10 h-10 bg-cray-gold/10 border border-cray-gold/20 flex items-center justify-center rounded-sm transition-colors hover:bg-cray-gold/20 no-underline">✈</a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3 list-none p-0">
              <li><a href="#" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">A'dan Z'ye Danışmanlık</a></li>
              <li><a href="#" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">Token & Blockchain Development</a></li>
              <li><a href="#" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">Crypto & Web3 Marketing</a></li>
              <li><a href="#" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">Market Making & Likidite</a></li>
              <li><a href="#" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">Yatırım Danışmanlığı</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Kurumsal</h3>
            <ul className="space-y-3 list-none p-0">
              <li><a href="#" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">İletişim</a></li>
              <li><a href="#" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">Referanslar</a></li>
              <li><a href="#" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">Kaynaklar</a></li>
              <li><a href="#" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">Çözümler</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">İletişim</h3>
            <ul className="space-y-4 list-none p-0">
              <li className="flex items-start gap-3">
                <span className="text-cray-gold">✉</span>
                <a href="mailto:info@craydigital.com" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">info@craydigital.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cray-gold">☎</span>
                <a href="tel:+442071234567" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">+44 20 7123 4567</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cray-gold">📍</span>
                <span className="text-gray-400 text-sm">London, England</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cray-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 CRAY Digital. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">Gizlilik Politikası</a>
            <a href="#" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">Kullanım Koşulları</a>
            <a href="#" className="text-gray-400 text-sm no-underline hover:text-cray-gold transition-colors">KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
