import React from 'react';

const AixoviaWorkDetailView: React.FC = () => {
  const galleryImages = [
    { src: '/images/a/8.png', title: 'Intelligence Source', desc: 'Price is just a shadow, we see the source.' },
    { src: '/images/a/2.png', title: 'The Momentum Engine', desc: 'Teknik altyapı ölçeklendirme ve strateji.' },
    { src: '/images/a/4.png', title: 'Re-Engineering', desc: 'Otonom AI agent geliştirme aşamaları.' },
    { src: '/images/a/1.png', title: 'Mining Operations', desc: 'AI mining süreçleri görsel hikaye anlatımı.' },
    { src: '/images/a/6.png', title: 'Financial Machine', desc: 'Kapalı döngü finansal mühendislik görselleştirmesi.' },
    { src: '/images/a/5.png', title: 'The Superxovia', desc: 'Marka karakter tasarımı ve kullanım alanları.' },
    { src: '/images/a/7.png', title: 'Hybrid Intelligence', desc: 'Piyasanın önünde koşan hibrit zeka modeli.' },
    { src: '/images/a/3.png', title: 'Campaign Design', desc: 'Topluluk etkileşimi için yaratıcı kampanya yönetimi.' }
  ];

  const services = [
    { icon: '📱', title: 'Telegram App Yazılımı', desc: 'AI destekli trade sinyalleri üreten uygulamanın uçtan uca yazılımı.' },
    { icon: '📊', title: 'Borsa Listeleme Danışmanlığı', desc: 'MEXC listeleme süreçleri ve borsa sonrası pazar geliştirme stratejileri.' },
    { icon: '🎬', title: 'İçerik & Video Üretimi', desc: '3D motion grafikler, sosyal medya içerik setleri ve görsel tasarımlar.' },
    { icon: '👥', title: 'Topluluk Yönetimi', desc: '7/24 aktif etkileşim ve küresel topluluk büyüme mimarisi.' },
    { icon: '🌐', title: 'Website Geliştirme', desc: 'aixovia.com platformunun stratejik tasarımı ve teknik kurulumu.' }
  ];

  return (
    <div className="work-detail-page">
      <style>{`
        .work-detail-page { background: #000; color: #fff; min-height: 100vh; padding-top: 100px; }
        .hero-section { position: relative; height: 75vh; display: flex; align-items: center; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.5; filter: brightness(0.6); }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, #000, transparent); }
        
        .container-xl { max-width: 1400px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 10; }
        
        .role-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 20px; margin-top: -120px; }
        @media (min-width: 768px) { .role-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1024px) { .role-grid { grid-template-columns: repeat(5, 1fr); } }
        
        .service-card { 
          background: rgba(15,15,15,0.9); 
          border: 1px solid rgba(255,177,0,0.2); 
          padding: 30px; 
          border-radius: 24px; 
          backdrop-filter: blur(20px);
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .service-card:hover { border-color: var(--cray-gold); transform: translateY(-8px); box-shadow: 0 10px 30px rgba(255,177,0,0.1); }
        .service-icon { font-size: 32px; margin-bottom: 20px; display: block; }
        .service-title { font-weight: 800 !important; font-size: 13px !important; color: var(--cray-gold); text-transform: uppercase; margin-bottom: 12px; letter-spacing: 0.5px; }
        .service-desc { font-size: 12px !important; color: #aaa; line-height: 1.6; }

        .content-section { padding: 120px 0; }
        .section-header { margin-bottom: 80px; }
        .section-header h2 { font-size: 48px !important; font-weight: 900 !important; margin-bottom: 25px; letter-spacing: -1px; }
        
        .gallery-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 24px; }
        @media (min-width: 768px) { .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1200px) { .gallery-grid { grid-template-columns: repeat(4, 1fr); } }
        
        .gallery-item { 
          position: relative; 
          border-radius: 24px; 
          overflow: hidden; 
          aspect-ratio: 16/9; 
          border: 1px solid rgba(255,255,255,0.08);
          background: #0a0a0a;
          cursor: pointer;
        }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
        .gallery-item:hover img { transform: scale(1.1); filter: brightness(1.1); }
        .gallery-info { 
          position: absolute; 
          inset: 0; 
          background: linear-gradient(transparent, rgba(0,0,0,0.9)); 
          display: flex; 
          flex-direction: column; 
          justify-content: flex-end; 
          padding: 25px; 
          opacity: 0; 
          transition: 0.3s ease; 
        }
        .gallery-item:hover .gallery-info { opacity: 1; }

        .case-text-box { 
          background: rgba(255,255,255,0.02); 
          border-radius: 40px; 
          padding: 60px; 
          border: 1px solid rgba(255,255,255,0.05);
          margin-bottom: 100px;
        }

        .back-btn { 
          display: inline-flex; 
          align-items: center; 
          gap: 12px; 
          color: #888; 
          font-weight: 800 !important; 
          font-size: 11px !important; 
          text-transform: uppercase; 
          letter-spacing: 2px;
          margin-bottom: 40px;
          transition: 0.3s;
          cursor: pointer;
        }
        .back-btn:hover { color: var(--cray-gold); transform: translateX(-5px); }
      `}</style>

      <div className="container-xl">
        <div onClick={() => window.location.hash = 'works'} className="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Portfolio'ya Dön
        </div>
      </div>

      <section className="hero-section">
        <img src="/images/a/8.png" className="hero-bg" alt="Aixovia Hero" />
        <div className="hero-overlay"></div>
        <div className="container-xl">
          <div style={{maxWidth: '900px'}}>
            <h5 style={{color: 'var(--cray-gold)', letterSpacing: '6px', textTransform: 'uppercase', marginBottom: '25px', fontWeight: 800}}>Başarı Hikayesi</h5>
            <h1 className="h1-style" style={{fontSize: '84px !important', fontWeight: 900, lineHeight: 0.9, marginBottom: '30px'}}>AIXOVIA</h1>
            <p className="p-style" style={{fontSize: '22px !important', color: '#ccc', lineHeight: 1.6, maxWidth: '700px'}}>Dünyanın ilk tam otonom AI agent mining altyapısı. Teknik bir vizyonu küresel bir kripto markasına dönüştürdük.</p>
            <div style={{marginTop: '50px', display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
              <a href="https://aixovia.com" target="_blank" rel="noopener noreferrer" className="cta-button" style={{padding: '20px 50px', fontSize: '12px !important'}}>Websitesini Ziyaret Et</a>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', background: 'rgba(255,177,0,0.1)', padding: '0 30px', borderRadius: '15px', border: '1px solid rgba(255,177,0,0.3)'}}>
                <span style={{fontSize: '11px', fontWeight: 900, color: 'var(--cray-gold)', letterSpacing: '1px'}}>LISTELENME:</span>
                <span style={{fontSize: '14px', fontWeight: 900, color: '#fff'}}>MEXC EXCHANGE</span>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="h2-style" style={{color: 'var(--cray-gold)', marginBottom: '30px'}}>Stratejik İş Ortaklığı</h2>
                <p className="p-style" style={{color: '#ddd', marginBottom: '25px', fontSize: '18px !important', lineHeight: 1.8}}>
                  Aixovia projesinin tüm süreçlerinde 360 derece bir sorumluluk üstlendik. Sosyal medya yönetimi, dijital içerik üretimi, etkileyici video tasarımları ve topluluk yönetimini (Community Management) CRAY Digital standartlarında hayata geçirdik.
                </p>
                <p className="p-style" style={{color: '#999', fontSize: '16px !important', lineHeight: 1.8}}>
                  Teknik tarafta, topluluğa gerçek zamanlı trade sinyalleri sunan <strong>Telegram Application yazılımını</strong> ve projenin vitrini olan <strong>resmi websitesinin yazılımını</strong> tamamladık. Token listeleme süreçlerinde (MEXC) ve ekosistem geliştirmelerinde stratejik danışmanlık sağladık. Aixovia ile olan işbirliğimiz, karşılıklı güven ve sürekli gelişim üzerine kurulu bir danışmanlık modeliyle aktif olarak devam etmektedir.
                </p>
              </div>
              <div style={{position: 'relative', borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(255,177,0,0.2)'}}>
                <img src="/images/a/6.png" alt="Aixovia Dashboard" style={{width: '100%', height: 'auto'}} />
              </div>
            </div>
          </div>

          <div className="section-header">
            <h2>Görsel Kimlik & Tasarım</h2>
            <p className="p-style text-zinc-500 max-w-2xl">Aixovia ekosistemi için yarattığımız kreatif evrene yakından bakın. Veri ile sanatı birleştiren görsel dilimiz.</p>
          </div>
          
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={img.src} alt={img.title} />
                <div className="gallery-info">
                  <h4 style={{fontWeight: 900, fontSize: '14px', color: 'var(--cray-gold)'}}>{img.title}</h4>
                  <p style={{fontSize: '11px', color: '#fff', marginTop: '5px'}}>{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{background: 'linear-gradient(rgba(255,177,0,0.05), transparent)', borderTop: '1px solid rgba(255,177,0,0.1)'}}>
        <div className="container-xl text-center">
          <h2 className="h2-style mb-6">Siz de Kendi Başarı Hikayenizi Yazın</h2>
          <p className="p-style text-zinc-500 mb-10 max-w-2xl mx-auto">Aixovia gibi küresel ölçekte ses getiren bir Web3 stratejisine mi ihtiyacınız var? Mühendislikten pazarlamaya, listelemeden büyümeye kadar yanınızdayız.</p>
          <a href="#booking-section" className="cta-button" style={{padding: '22px 60px', borderRadius: '15px', fontSize: '13px !important'}}>Keşif Toplantısı Planla</a>
        </div>
      </section>
    </div>
  );
};

export default AixoviaWorkDetailView;