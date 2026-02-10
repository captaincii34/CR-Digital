import React from 'react';

const AixoviaPlayWorkDetailView: React.FC = () => {
  const galleryImages = [
    { src: '/gorsel/2.jpg', title: 'Seasonal Mechanics', desc: 'Oyun içi etkinlikler ve topluluk turnuvaları tasarımı.' },
    { src: '/gorsel/6.jpg', title: 'Hybrid Competition', desc: 'AI ve insan etkileşimli multiplayer rekabet sahası.' },
    { src: '/gorsel/4.jpg', title: 'Superxovia Characters', desc: 'NFT tabanlı oyun içi karakterlerin teknik entegrasyonu.' },
    { src: '/gorsel/1.jpg', title: 'Engine Scaling', desc: 'Multiplayer sunucu altyapısı ve veri senkronizasyonu.' },
    { src: '/gorsel/3.jpg', title: 'Neural Agents', desc: 'Oyun içi akıllı botlar ve rakip AI tasarımı.' },
    { src: '/gorsel/5.jpg', title: 'Economy Engine', desc: 'Sürdürülebilir P2E (Play-to-Earn) matematiksel modeli.' },
    { src: '/gorsel/7.jpg', title: 'Strategic Depth', desc: 'Oyun içi strateji ve kullanıcı deneyimi haritalaması.' }
  ];

  const services = [
    { icon: '🎮', title: 'Telegram Game Yazılımı', desc: 'play.aixovia.com altyapısında çalışan, TON entegreli multiplayer Telegram Mini App oyunu.' },
    { icon: '💰', title: 'Pre-Sale Yönetimi', desc: 'Yüksek hacimli fon toplayan ön satış (Pre-sale) sürecinin teknik ve stratejik yönetimi.' },
    { icon: '🏛️', title: 'Listing Danışmanlığı', desc: 'Tier-1 ve Tier-2 borsalarda listeleme süreçleri ve borsa ilişkileri yönetimi.' },
    { icon: '🎨', title: 'Game Design & UI', desc: 'Oyun mekanikleri, karakter tasarımları ve kullanıcı arayüzü (UI/UX) mühendisliği.' },
    { icon: '📣', title: 'Hype & Marketing', desc: 'Oyunun viral yayılımı için tasarlanan airdrop ve etkileşim kampanyaları.' }
  ];

  return (
    <div className="work-detail-page">
      <style>{`
        .work-detail-page { background: #000; color: #fff; min-height: 100vh; padding-top: 100px; }
        .hero-section { position: relative; height: 90vh; display: flex; align-items: center; overflow: hidden; border-bottom: 1px solid rgba(255,177,0,0.15); }
        .hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.6; filter: brightness(0.6) contrast(1.1); transition: transform 10s linear; }
        .hero-section:hover .hero-bg { transform: scale(1.1); }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, #000 0%, transparent 60%, rgba(0,0,0,0.5) 100%); }
        
        .container-xl { max-width: 1400px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 10; }
        
        .role-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 20px; margin-top: -120px; }
        @media (min-width: 768px) { .role-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1024px) { .role-grid { grid-template-columns: repeat(5, 1fr); } }
        
        .service-card { 
          background: rgba(15,15,15,0.95); 
          border: 1px solid rgba(255,177,0,0.25); 
          padding: 35px; 
          border-radius: 28px; 
          backdrop-filter: blur(30px);
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .service-card:hover { border-color: var(--cray-gold); transform: translateY(-12px); box-shadow: 0 30px 60px rgba(255,177,0,0.15); }
        .service-icon { font-size: 36px; margin-bottom: 25px; display: block; }
        .service-title { font-weight: 800 !important; font-size: 13px !important; color: var(--cray-gold); text-transform: uppercase; margin-bottom: 12px; letter-spacing: 1.5px; }
        .service-desc { font-size: 12px !important; color: #bbb; line-height: 1.7; }

        .content-section { padding: 140px 0; }
        .section-header { margin-bottom: 80px; }
        .section-header h2 { font-size: 56px !important; font-weight: 900 !important; margin-bottom: 25px; letter-spacing: -2px; }
        
        .gallery-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 30px; }
        @media (min-width: 768px) { .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1200px) { .gallery-grid { grid-template-columns: repeat(4, 1fr); } }
        
        .gallery-item { 
          position: relative; 
          border-radius: 40px; 
          overflow: hidden; 
          aspect-ratio: 16/10; 
          border: 1px solid rgba(255,255,255,0.08);
          background: #0a0a0a;
          cursor: pointer;
          box-shadow: 0 15px 30px rgba(0,0,0,0.5);
        }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: 1.2s cubic-bezier(0.4, 0, 0.2, 1); }
        .gallery-item:hover img { transform: scale(1.15); filter: brightness(1.2); }
        .gallery-info { 
          position: absolute; 
          inset: 0; 
          background: linear-gradient(transparent, rgba(0,0,0,0.95)); 
          display: flex; 
          flex-direction: column; 
          justify-content: flex-end; 
          padding: 35px; 
          opacity: 0; 
          transition: 0.5s ease; 
        }
        .gallery-item:hover .gallery-info { opacity: 1; }

        .case-text-box { 
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          border-radius: 56px; 
          padding: 80px; 
          border: 1px solid rgba(255,177,0,0.1);
          margin-bottom: 140px;
          position: relative;
          overflow: hidden;
        }

        .back-btn { 
          display: inline-flex; 
          align-items: center; 
          gap: 12px; 
          color: #aaa; 
          font-weight: 800 !important; 
          font-size: 11px !important; 
          text-transform: uppercase; 
          letter-spacing: 2px;
          margin-bottom: 40px;
          transition: 0.4s;
          cursor: pointer;
        }
        .back-btn:hover { color: var(--cray-gold); transform: translateX(-8px); }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,177,0,0.12);
          padding: 10px 25px;
          border-radius: 100px;
          border: 1px solid rgba(255,177,0,0.4);
          width: fit-content;
        }
        
        .highlight-text {
          background: linear-gradient(90deg, #ffb100, #ffeb3b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
        }
      `}</style>

      <div className="container-xl">
        <div onClick={() => window.location.hash = 'works'} className="back-btn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Portfolio'ya Dön
        </div>
      </div>

      <section className="hero-section">
        {/* Ana Hero Görseli: 2.jpg */}
        <img src="/gorsel/2.jpg" className="hero-bg" alt="Aixovia Play Hero" />
        <div className="hero-overlay"></div>
        <div className="container-xl">
          <div style={{maxWidth: '1000px'}}>
            <h5 style={{color: 'var(--cray-gold)', letterSpacing: '10px', textTransform: 'uppercase', marginBottom: '30px', fontWeight: 800, fontSize: '12px !important'}}>Web3 Social Gaming</h5>
            <h1 className="h1-style" style={{fontSize: '110px !important', fontWeight: 900, lineHeight: 0.8, marginBottom: '45px'}}>AIXOVIA PLAY</h1>
            <p className="p-style" style={{fontSize: '26px !important', color: '#eee', lineHeight: 1.4, maxWidth: '850px', fontWeight: 300}}>Aixovia ekosisteminin eğlence kolu. <span className="highlight-text">Multiplayer Telegram oyunu</span> ile binlerce oyuncuyu on-chain dünyada buluşturduk.</p>
            <div style={{marginTop: '65px', display: 'flex', flexWrap: 'wrap', gap: '25px'}}>
              <a href="https://play.aixovia.com" target="_blank" rel="noopener noreferrer" className="cta-button" style={{padding: '24px 65px', fontSize: '14px !important', borderRadius: '18px'}}>Hemen Oyna</a>
              <div className="status-badge">
                <div className="w-3 h-3 bg-cray-gold rounded-full animate-pulse"></div>
                <span style={{fontSize: '11px', fontWeight: 900, color: 'var(--cray-gold)', letterSpacing: '3px'}}>LİSTELEME AŞAMASINDA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-xl">
        <div className="role-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h4 className="service-title">{s.title}</h4>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="content-section">
        <div className="container-xl">
          
          <div className="case-text-box">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="h2-style" style={{color: 'var(--cray-gold)', marginBottom: '35px', fontSize: '46px !important', lineHeight: 1.1, letterSpacing: '-1.5px'}}>Oyun Ekonomisi ve Ön Satış Başarısı</h2>
                <p className="p-style" style={{color: '#eee', marginBottom: '35px', fontSize: '20px !important', lineHeight: 1.8, fontWeight: 300}}>
                  Aixovia projesinde kurduğumuz otonom zekayı, Aixovia Play ile eğlenceli ve rekabetçi bir boyuta taşıdık. Ön satış (pre-sale) aşamasında topluluğun yoğun ilgisiyle karşılanan proje, <span className="text-white font-bold">yüksek hacimli bir yatırım topladı.</span>
                </p>
                <p className="p-style" style={{color: '#999', fontSize: '18px !important', lineHeight: 1.9, fontWeight: 300}}>
                  CRAY Digital olarak bu süreçte; oyunun **play.aixovia.com** üzerinden erişilen teknik altyapısını, Telegram Mini App entegrasyonunu ve çok oyunculu (multiplayer) rekabet mekaniklerini kurguladık. Şu an borsada listeleme süreçleri ve topluluk büyüme stratejileri tüm hızıyla devam etmektedir.
                </p>
              </div>
              <div style={{position: 'relative', borderRadius: '48px', overflow: 'hidden', border: '1px solid rgba(255,177,0,0.35)', boxShadow: '0 40px 80px rgba(0,0,0,0.8)'}}>
                {/* Vurgu Görseli: 6.jpg */}
                <img src="/gorsel/6.jpg" alt="Aixovia Play Race" style={{width: '100%', height: 'auto', display: 'block'}} />
              </div>
            </div>
          </div>

          <div className="section-header">
            <h2 className="h1-style">Gaming & Asset Gallery</h2>
            <p className="p-style text-zinc-500 max-w-2xl text-lg">Aixovia Play'in teknolojik derinliğini ve görsel zenginliğini yansıtan özel çalışma alanlarımız.</p>
          </div>
          
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={img.src} alt={img.title} />
                <div className="gallery-info">
                  <h4 style={{fontWeight: 900, fontSize: '16px', color: 'var(--cray-gold)', textTransform: 'uppercase', letterSpacing: '1.5px'}}>{img.title}</h4>
                  <p style={{fontSize: '13px', color: '#fff', marginTop: '10px', fontWeight: 300}}>{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{background: 'linear-gradient(rgba(255,177,0,0.08), transparent)', borderTop: '1px solid rgba(255,177,0,0.15)', padding: '160px 0'}}>
        <div className="container-xl text-center">
          <h2 className="h2-style mb-8" style={{fontSize: '48px !important'}}>Projenizi Web3 Gaming Dünyasına Taşıyın</h2>
          <p className="p-style text-zinc-400 mb-12 max-w-3xl mx-auto text-xl">Aixovia Play gibi viral başarı yakalayan bir oyun projesine mi ihtiyacınız var? Tokenomics'ten yazılıma, listing'den büyümeye kadar CRAY yanınızda.</p>
          <a href="#booking-section" className="cta-button" style={{padding: '26px 80px', borderRadius: '20px', fontSize: '15px !important'}}>Oyun Stratejini Planla</a>
        </div>
      </section>
    </div>
  );
};

export default AixoviaPlayWorkDetailView;