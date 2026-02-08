
import React from 'react';

const services = [
  {
    title: "A'dan Z'ye Crypto Proje Danışmanlığı",
    desc: "Fikirden pazara tüm sürecin tek ekip tarafından yönetilmesi",
    icon: <path d="M12 20v-6M6 20V10M18 20V4"/>
  },
  {
    title: "Token & Blockchain Geliştirme",
    desc: "Tokenomics, smart contract, whitepaper ve teknik mimari",
    icon: <><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></>
  },
  {
    title: "Blockchain & Yazılım Geliştirme",
    desc: "Web3 siteler, dashboard'lar, Telegram botları ve oyunlar",
    icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></>
  },
  {
    title: "Token Lansmanı & Listeleme",
    desc: "DEX/CEX launch, launchpad hazırlığı ve listeleme süreçleri",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  },
  {
    title: "Kripto & Web3 Pazarlama",
    desc: "Growth, influencer, PR, kampanya ve funnel yönetimi",
    icon: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></>
  },
  {
    title: "Sosyal Medya & Topluluk",
    desc: "X, Telegram, Discord, topluluk büyütme ve kriz yönetimi",
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>
  },
  {
    title: "İçerik Üretimi",
    desc: "Brand identity, motion graphics, explainer videos ve görsel içerik",
    icon: <><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></>
  },
  {
    title: "Piyasa Yapıcılığı & Likidite",
    desc: "Likidite stratejisi, market making danışmanlığı ve sistem kurulumu",
    icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>
  },
  {
    title: "Yatırım Danışmanlığı & Fon Toplama",
    desc: "Yatırım turu planlama, yatırımcı araştırması ve stratejik eşleşmeler",
    icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>
  },
  {
    title: "Ortaklıklar & İş Geliştirme",
    desc: "Stratejik partnerlikler, ecosystem collaborations ve cross-marketing",
    icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></>
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="section3" className="relative py-20 overflow-hidden bg-black text-white">
      <img src="target-bg.jpg" alt="Services Background" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-[1]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black z-[2]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Web3 & Crypto İçin Uçtan Uca Hizmetler</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
            Her projeye ihtiyacına göre yaklaşır, tek bir hizmetten komple 360° çözüme kadar esnek modeller sunarız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group p-8 rounded-xl border border-white/15 text-center cursor-pointer flex flex-col items-center gap-4 transition-all duration-300 hover:bg-cray-gold/5 hover:border-cray-gold hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(255,177,0,0.2)]">
              <div className="w-14 h-14 text-cray-gold transition-all duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {service.icon}
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold leading-tight group-hover:text-cray-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm font-light leading-snug">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
