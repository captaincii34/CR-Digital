import React from 'react';

const AixoviaWorkDetailView: React.FC = () => {
  // /gorsel klasöründeki .jpg uzantılı görsellerin stratejik haritası
  const galleryImages = [
    { src: '/gorsel/7.jpg', title: 'Source Intelligence', desc: 'Price is just a shadow, we see the source.' },
    { src: '/gorsel/1.jpg', title: 'The Momentum Engine', desc: 'Teknik altyapı ölçeklendirme ve strateji.' },
    { src: '/gorsel/3.jpg', title: 'Neural Re-Engineering', desc: 'Otonom AI agent geliştirme ve optimizasyon.' },
    { src: '/gorsel/2.jpg', title: 'Seasonal Campaigns', desc: 'Topluluk etkileşimi için yaratıcı kampanya yönetimi.' },
    { src: '/gorsel/5.jpg', title: 'Financial Machine', desc: 'Kapalı döngü finansal mühendislik görselleştirmesi.' },
    { src: '/gorsel/4.jpg', title: 'The Superxovia', desc: 'Marka karakter tasarımı ve ekosistem utilitisi.' },
    { src: '/gorsel/6.jpg', title: 'Hybrid Intelligence', desc: 'Piyasanın önünde koşan hibrit zeka modeli.' }
  ];

  const services = [
    { icon: '📱', title: 'Telegram App Yazılımı', desc: 'Topluluğa özel trade sinyalleri üreten AI tabanlı Telegram Mini App yazılımı ve bot entegrasyonu.' },
    { icon: '🌐', title: 'Web Yazılımı & Platform', desc: 'aixovia.com platformunun stratejik tasarımı, UI/UX mimarisi ve full-stack yazılım süreçleri.' },
    { icon: '📊', title: 'Listing Danışmanlığı', desc: 'MEXC borsası listeleme süreçleri, borsa iletişimi ve teknik dokümantasyon hazırlığı.' },
    { icon: '🎬', title: 'İçerik & Video Tasarımı', desc: 'Sosyal medya yönetimi için fütüristik 3D tasarımlar, etkileyici video prodüksiyonları.' },
    { icon: '👥', title: 'Community Yönetimi', desc: 'Küresel topluluk büyüme mimarisi, 7/24 aktif kanal moderasyonu ve büyüme stratejileri.' }
  ];

  return (
    <div className="work-detail-page">
      <style>{`
        .work-detail-page { background: #000; color: #fff; min-height: 100vh; padding-top: 100px; }
        .hero-section { position: relative; height: 90vh; display: flex; align-items: center; overflow: hidden; border-bottom: 1px solid rgba(255,177,0,0.15); }
        .hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.6; filter: brightness(0.7) contrast(1.1); transition: transform 10s linear; }
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

        .mexc-badge {
          display: flex;
          align-items: center;
          gap: 18px;
          background: rgba(255,177,0,0.12);
          padding: 14px 35px;
          border-radius: 100px;
          border: 1px solid rgba(255,177,0,0.4);
          width: fit-content;
          box-shadow: 0 0 25px rgba(255,177,0,0.1);
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
        {/* Ana Hero Görseli: 1.jpg */}
        <img src="/gorsel/1.jpg" className="hero-bg" alt="Aixovia Hero" />
        <div className="hero-overlay"></div>
        <div className="container-xl">
          <div style={{maxWidth: '1000px'}}>
            <h5 style={{color: 'var(--cray-gold)', letterSpacing: '10px', textTransform: 'uppercase', marginBottom: '30px', fontWeight: 800, fontSize: '12px !important'}}>AI Web3 Innovation</h5>
            <h1 className="h1-style" style={{fontSize: '110px !important', fontWeight: 900, lineHeight: 0.8, marginBottom: '45px'}}>AIXOVIA</h1>
            <p className="p-style" style={{fontSize: '26px !important', color: '#eee', lineHeight: 1.4, maxWidth: '850px', fontWeight: 300}}>Dünyanın ilk <span className="highlight-text">tam otonom AI agent</span> mining altyapısını kuran Web3 projesi. CRAY Digital olarak bu otonom vizyonu küresel bir markaya dönüştürdük.</p>
            <div style={{marginTop: '65px', display: 'flex', flexWrap: 'wrap', gap: '25px'}}>
              <a href="https://aixovia.com" target="_blank" rel="noopener noreferrer" className="cta-button" style={{padding: '24px 65px', fontSize: '14px !important', borderRadius: '18px'}}>Websitesini Gör</a>
              <div className="mexc-badge">
                <span style={{fontSize: '11px', fontWeight: 900, color: 'var(--cray-gold)', letterSpacing: '3px'}}>BORSADA LISTELİ:</span>
                <span style={{fontSize: '17px', fontWeight: 900, color: '#fff'}}>MEXC GLOBAL</span>
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
                <h2 className="h2-style" style={{color: 'var(--cray-gold)', marginBottom: '35px', fontSize: '46px !important', lineHeight: 1.1, letterSpacing: '-1.5px'}}>Stratejik İş Ortaklığı ve Web3 Mühendisliği</h2>
                <p className="p-style" style={{color: '#eee', marginBottom: '35px', fontSize: '20px !important', lineHeight: 1.8, fontWeight: 300}}>
                  Aixovia projesinin tüm dijital ekosistemini inşa etmek için 360 derece stratejik sorumluluk üstlendik. Sosyal medya yönetimi, dijital içerik üretimi ve topluluğun nabzını tutan topluluk yönetimini (Community Management) CRAY Digital standartlarında hayata geçirdik.
                </p>
                <p className="p-style" style={{color: '#999', fontSize: '18px !important', lineHeight: 1.9, fontWeight: 300}}>
                  Teknik tarafta, topluluğa gerçek zamanlı trade sinyalleri sunan karmaşık <strong>Telegram Application yazılımını</strong> ve projenin dijital vitrini olan <strong>resmi websitesinin yazılımını</strong> başarıyla tamamladık. Token listeleme (MEXC) süreçlerinde ve ekosistem geliştirmelerinde danışmanlık sağlayarak projenin pazar değerini artırdık.
                </p>
              </div>
              <div style={{position: 'relative', borderRadius: '48px', overflow: 'hidden', border: '1px solid rgba(255,177,0,0.35)', boxShadow: '0 40px 80px rgba(0,0,0,0.8)'}}>
                {/* Vurgu Görseli: 5.jpg */}
                <img src="/gorsel/5.jpg" alt="Aixovia Analytics" style={{width: '100%', height: 'auto', display: 'block'}} />
              </div>
            </div>
          </div>

          <div className="section-header">
            <h2 className="h1-style">Görsel Kimlik & Kreatif Evren</h2>
            <p className="p-style text-zinc-500 max-w-2xl text-lg">Aixovia ekosistemi için yarattığımız, teknoloji ve sanatı harmanlayan görsel dünyayı keşfedin. Tüm görseller /gorsel klasöründen çekilmektedir.</p>
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
      <section className="section-padding" style={{background: 'linear-gradient(rgba(255,177,0,0.08), transparent)', borderTop: '1px solid rgba(255,177,0,0.15)'}}>
        <div className="container-xl text-center">
          <h2 className="h2-style mb-8" style={{fontSize: '48px !important'}}>Siz de Kendi Başarı Hikayenizi Yazın</h2>
          <p className="p-style text-zinc-400 mb-12 max-w-3xl mx-auto text-xl">Aixovia gibi küresel ölçekte ses getiren bir Web3 stratejisine mi ihtiyacınız var? Mühendislikten pazarlamaya, listelemeden büyümeye kadar yanınızdayız.</p>
          <a href="#booking-section" className="cta-button" style={{padding: '26px 80px', borderRadius: '20px', fontSize: '15px !important'}}>Keşif Toplantısı Planla</a>
        </div>
      </section>
    </div>
  );
};

export default AixoviaWorkDetailView;