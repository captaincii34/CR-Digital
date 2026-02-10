import React from 'react';

const AixoviaWorkDetailView: React.FC = () => {
  // Kullanıcının paylaştığı görselleri doğrudan referans alıyoruz
  const galleryImages = [
    { src: 'input_file_7.png', title: 'Source Intelligence', desc: 'Price is just a shadow, we see the source.' },
    { src: 'input_file_1.png', title: 'The Momentum Engine', desc: 'Teknik altyapı ölçeklendirme ve strateji.' },
    { src: 'input_file_3.png', title: 'Neural Re-Engineering', desc: 'Otonom AI agent geliştirme ve optimizasyon.' },
    { src: 'input_file_0.png', title: 'Autonomous Mining', desc: 'AI destekli mining süreçleri görsel hikaye anlatımı.' },
    { src: 'input_file_5.png', title: 'Financial Machine', desc: 'Kapalı döngü finansal mühendislik görselleştirmesi.' },
    { src: 'input_file_4.png', title: 'The Superxovia', desc: 'Marka karakter tasarımı ve ekosistem utilitisi.' },
    { src: 'input_file_6.png', title: 'Hybrid Intelligence', desc: 'Piyasanın önünde koşan hibrit zeka modeli.' },
    { src: 'input_file_2.png', title: 'Seasonal Campaigns', desc: 'Topluluk etkileşimi için yaratıcı kampanya yönetimi.' }
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
        .hero-section { position: relative; height: 80vh; display: flex; align-items: center; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.4; filter: brightness(0.7); }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, #000 5%, transparent 100%); }
        
        .container-xl { max-width: 1400px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 10; }
        
        .role-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 20px; margin-top: -100px; }
        @media (min-width: 768px) { .role-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1024px) { .role-grid { grid-template-columns: repeat(5, 1fr); } }
        
        .service-card { 
          background: rgba(15,15,15,0.95); 
          border: 1px solid rgba(255,177,0,0.2); 
          padding: 30px; 
          border-radius: 24px; 
          backdrop-filter: blur(20px);
          transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .service-card:hover { border-color: var(--cray-gold); transform: translateY(-10px); box-shadow: 0 15px 40px rgba(255,177,0,0.1); }
        .service-icon { font-size: 32px; margin-bottom: 20px; display: block; }
        .service-title { font-weight: 800 !important; font-size: 12px !important; color: var(--cray-gold); text-transform: uppercase; margin-bottom: 12px; letter-spacing: 1px; }
        .service-desc { font-size: 12px !important; color: #aaa; line-height: 1.6; }

        .content-section { padding: 120px 0; }
        .section-header { margin-bottom: 80px; }
        .section-header h2 { font-size: 52px !important; font-weight: 900 !important; margin-bottom: 25px; letter-spacing: -1.5px; }
        
        .gallery-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 24px; }
        @media (min-width: 768px) { .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1200px) { .gallery-grid { grid-template-columns: repeat(4, 1fr); } }
        
        .gallery-item { 
          position: relative; 
          border-radius: 32px; 
          overflow: hidden; 
          aspect-ratio: 16/10; 
          border: 1px solid rgba(255,255,255,0.08);
          background: #0a0a0a;
          cursor: pointer;
        }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .gallery-item:hover img { transform: scale(1.1); filter: brightness(1.1); }
        .gallery-info { 
          position: absolute; 
          inset: 0; 
          background: linear-gradient(transparent, rgba(0,0,0,0.95)); 
          display: flex; 
          flex-direction: column; 
          justify-content: flex-end; 
          padding: 30px; 
          opacity: 0; 
          transition: 0.4s ease; 
        }
        .gallery-item:hover .gallery-info { opacity: 1; }

        .case-text-box { 
          background: rgba(255,255,255,0.02); 
          border-radius: 48px; 
          padding: 80px; 
          border: 1px solid rgba(255,255,255,0.05);
          margin-bottom: 120px;
          position: relative;
          overflow: hidden;
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

        .mexc-badge {
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(255,177,0,0.1);
          padding: 12px 30px;
          border-radius: 100px;
          border: 1px solid rgba(255,177,0,0.3);
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Portfolio'ya Dön
        </div>
      </div>

      <section className="hero-section">
        <img src="input_file_0.png" className="hero-bg" alt="Aixovia Hero" />
        <div className="hero-overlay"></div>
        <div className="container-xl">
          <div style={{maxWidth: '950px'}}>
            <h5 style={{color: 'var(--cray-gold)', letterSpacing: '8px', textTransform: 'uppercase', marginBottom: '25px', fontWeight: 800, fontSize: '12px !important'}}>Success Story</h5>
            <h1 className="h1-style" style={{fontSize: '98px !important', fontWeight: 900, lineHeight: 0.85, marginBottom: '40px'}}>AIXOVIA</h1>
            <p className="p-style" style={{fontSize: '24px !important', color: '#ccc', lineHeight: 1.5, maxWidth: '800px', fontWeight: 400}}>Dünyanın ilk <span className="highlight-text">tam otonom AI agent</span> mining altyapısını kuran kripto projesi. CRAY Digital olarak bu vizyonu küresel bir markaya dönüştürdük.</p>
            <div style={{marginTop: '60px', display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
              <a href="https://aixovia.com" target="_blank" rel="noopener noreferrer" className="cta-button" style={{padding: '22px 60px', fontSize: '13px !important'}}>Websitesini Gör</a>
              <div className="mexc-badge">
                <span style={{fontSize: '11px', fontWeight: 900, color: 'var(--cray-gold)', letterSpacing: '2px'}}>LISTELENME:</span>
                <span style={{fontSize: '15px', fontWeight: 900, color: '#fff'}}>MEXC EXCHANGE</span>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="h2-style" style={{color: 'var(--cray-gold)', marginBottom: '35px', fontSize: '42px !important', lineHeight: 1.1}}>Stratejik İş Ortaklığı ve Web3 Mühendisliği</h2>
                <p className="p-style" style={{color: '#ddd', marginBottom: '30px', fontSize: '19px !important', lineHeight: 1.8, fontWeight: 400}}>
                  Aixovia projesinin tüm dijital ekosistemini inşa etmek için 360 derece stratejik sorumluluk üstlendik. Sosyal medya yönetimi, dijital içerik üretimi ve topluluğun nabzını tutan topluluk yönetimini (Community Management) CRAY Digital standartlarında hayata geçirdik.
                </p>
                <p className="p-style" style={{color: '#999', fontSize: '17px !important', lineHeight: 1.9, fontWeight: 400}}>
                  Teknik tarafta, topluluğa gerçek zamanlı trade sinyalleri sunan karmaşık <strong>Telegram Application yazılımını</strong> ve projenin dijital vitrini olan <strong>resmi websitesinin yazılımını</strong> başarıyla tamamladık. Token listeleme (MEXC) süreçlerinde ve ekosistem geliştirmelerinde danışmanlık sağlayarak projenin pazar değerini artırdık. Aixovia ile işbirliğimiz, sürekli gelişim odaklı bir danışmanlık modeliyle aktif olarak devam etmektedir.
                </p>
              </div>
              <div style={{position: 'relative', borderRadius: '40px', overflow: 'hidden', border: '1px solid rgba(255,177,0,0.3)', boxShadow: '0 30px 60px rgba(0,0,0,0.6)'}}>
                <img src="input_file_5.png" alt="Aixovia Analytics" style={{width: '100%', height: 'auto', display: 'block'}} />
              </div>
            </div>
          </div>

          <div className="section-header">
            <h2 className="h1-style">Görsel Kimlik & Kreatif Evren</h2>
            <p className="p-style text-zinc-500 max-w-2xl">Aixovia ekosistemi için yarattığımız, teknoloji ve sanatı harmanlayan görsel dünyayı keşfedin.</p>
          </div>
          
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={img.src} alt={img.title} />
                <div className="gallery-info">
                  <h4 style={{fontWeight: 900, fontSize: '15px', color: 'var(--cray-gold)', textTransform: 'uppercase', letterSpacing: '1px'}}>{img.title}</h4>
                  <p style={{fontSize: '12px', color: '#fff', marginTop: '8px', fontWeight: 400}}>{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{background: 'linear-gradient(rgba(255,177,0,0.06), transparent)', borderTop: '1px solid rgba(255,177,0,0.1)'}}>
        <div className="container-xl text-center">
          <h2 className="h2-style mb-8">Siz de Kendi Başarı Hikayenizi Yazın</h2>
          <p className="p-style text-zinc-500 mb-12 max-w-2xl mx-auto">Aixovia gibi küresel ölçekte ses getiren bir Web3 stratejisine mi ihtiyacınız var? Mühendislikten pazarlamaya, listelemeden büyümeye kadar yanınızdayız.</p>
          <a href="#booking-section" className="cta-button" style={{padding: '24px 70px', borderRadius: '18px', fontSize: '14px !important'}}>Keşif Toplantısı Planla</a>
        </div>
      </section>
    </div>
  );
};

export default AixoviaWorkDetailView;