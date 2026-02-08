
import React from 'react';

const reasons = [
  {
    icon: <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>,
    title: 'Web3 & Crypto Odaklı Uzmanlık',
    desc: 'Sadece kripto ve Web3 projelerine odaklanmış deneyimli ekip'
  },
  {
    icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>,
    title: "A'dan Z'ye Proje Yaklaşımı",
    desc: 'Fikir aşamasından lansmanına kadar her adımda yanınızdayız'
  },
  {
    icon: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
    title: 'Tek Noktadan Yönetim',
    desc: 'Tüm süreçleri koordine eden entegre ekip yapısı'
  },
  {
    icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
    title: 'NDA & Gizlilik Önceliği',
    desc: 'Projelerinizin güvenliği bizim için en önemli konu'
  },
  {
    icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    title: 'Veri Odaklı Karar Mekanizması',
    desc: 'Her kararımız analitik verilerle desteklenir'
  },
  {
    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    title: 'Global Standartlarda Süreçler',
    desc: 'Uluslararası kalite standartlarında hizmet sunuyoruz'
  }
];

const WhyUsSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-black text-white min-h-[600px] overflow-hidden">
      <img src="https://picsum.photos/id/182/1920/1080" alt="Why Us Background" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-[1]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black z-[2]"></div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Neden Bizimle Çalışmalısınız?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="group p-8 rounded-lg text-center transition-all duration-300 hover:bg-cray-gold/5">
              <div className="w-12 h-12 bg-cray-gold rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(255,177,0,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {reason.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-300 font-light leading-snug">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#" className="bg-cray-gold text-black px-8 py-4 rounded-lg font-bold inline-block transition-all duration-300 hover:scale-105">
            Daha Fazla Bilgi Al
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
