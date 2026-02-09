import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const DigitalMarketingPromotionSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const reasons = [
    {
      icon: <path d="M12 20v-6M6 20V10M18 20V4"/>,
      title: 'Veri Odaklı Tanıtım',
      desc: 'Sadece "hype" değil, projenize gerçek yatırımcı ve kullanıcı getiren ölçülebilir kanalları kullanıyoruz.'
    },
    {
      icon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>,
      title: "Global Medya Gücü",
      desc: 'Tier-1 kripto haber sitelerinden global PR ağlarına kadar projenizi tüm dünyaya duyuracak bağlantılara sahibiz.'
    },
    {
      icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>,
      title: 'Hedeflenmiş KOL Ağı',
      desc: 'Bot takipçili hesaplar yerine projenizin segmentine uygun, gerçek etkileşimli Web3 liderleriyle çalışıyoruz.'
    }
  ];

  const faqs = [
    { q: "Pazarlama stratejisi ne kadar sürede hazır olur?", a: "Projenizin kapsamına göre detaylı analiz ve uygulama planını 3 ila 7 iş günü içerisinde hazırlıyoruz." },
    { q: "Hangi bölgelerde tanıtım yapıyorsunuz?", a: "Global odağımızla birlikte özellikle Asya, Amerika ve Avrupa pazarlarında güçlü bir haber ve influencer ağımız mevcut." },
    { q: "Küçük bütçeli projeler için tanıtım mümkün mü?", a: "Evet, her bütçeye uygun 'etki odaklı' mini paketlerimiz ve büyüme kurgularımız bulunmaktadır." }
  ];

  return (
    <div className="crypto-detail-page">
      <style>{`
        .crypto-detail-page { background-color: #000; color: #fff; overflow-x: hidden; }
        .section-padding { padding: 100px 0; position: relative; }
        .container-xl { max-width: 1280px; margin: 0 auto; padding: 0 32px; width: 100%; position: relative; z-index: 10; }
        .bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.85); z-index: 1; }
        .grad { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent 40%, transparent 60%, #000); z-index: 2; }
        
        .h1-style { font-size: 40px !important; font-weight: 700 !important; }
        .h2-style { font-size: 30px !important; font-weight: 700 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; }

        #h-hero { position: relative; padding: 220px 0 120px; min-height: 85vh; display: flex; align-items: center; }
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { grid-template-columns: 1.2fr 1fr; align-items: center; } }
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; color: #000; width: 100%; max-width: 480px; margin: 0 auto; }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 18px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }

        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        .reason-card { padding: 48px 32px; border-radius: 24px; text-align: center; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); transition: 0.4s; }
        .reason-card:hover { transform: translateY(-10px); border-color: var(--cray-gold); background: rgba(255, 177, 0, 0.08); }
        .reason-icon-box { width: 60px; height: 60px; background-color: var(--cray-gold); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.3); }
        .reason-icon-box svg { display: block; }

        .detail-item { display: flex; flex-direction: column; gap: 40px; align-items: center; margin-bottom: 100px; }
        @media (min-width: 1024px) { 
          .detail-item { flex-direction: row; } 
          .detail-item.reverse { flex-direction: row-reverse; }
        }
        .detail-text { flex: 1; }
        .detail-visual { flex: 1; position: relative; border-radius: 32px; overflow: hidden; height: 400px; border: 1px solid rgba(255,177,0,0.2); }
        .detail-visual img { width: 100%; height: 100%; object-fit: cover; }

        .cta-box-section { background: #f7f7f7; padding: 100px 0; color: #000; text-align: center; }
        .cta-btn { background: var(--cray-gold); color: #000; padding: 20px 48px; border-radius: 12px; font-weight: 700 !important; display: inline-block; transition: 0.3s; margin-top: 32px; text-decoration: none; }
        
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; width: 100%; text-align: left; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      {/* Hero */}
      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2062&auto=format&fit=crop" className="bg-img" alt="Digital Promotion" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h1 className="h1-style">Dijital Pazarlama ve Tanıtım Danışmanlığı</h1>
              <p className="hero-desc p-style">Sadece tanıtım yapmıyoruz, marka inşa ediyoruz. Web3 dünyasına uygun reklam ve tanıtım stratejileriyle sesinizi tüm dünyaya duyuruyoruz.</p>
            </div>
            <div className="form-card">
              <h3 className="h2-style" style={{textAlign: 'center', marginBottom: '20px', fontSize: '20px !important'}}>Tanıtım Talebi</h3>
              <form onSubmit={handleSubmit}>
                <input type="text" className="w-full border p-3 rounded-lg mb-4" placeholder="Telegram / X Linki" required />
                <textarea className="w-full border p-3 rounded-lg mb-4" rows={3} placeholder="Hangi bölgelerde öne çıkmak istiyorsunuz?" required />
                <button type="submit" disabled={loading} className="form-button">{loading ? 'MARKALANILIYOR...' : 'TANITIM STRATEJİSİ AL'}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '60px'}}>Tanıtımda Fark Yaratan Yaklaşımlar</h2>
          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="reason-card">
                <div className="reason-icon-box">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                    {r.icon}
                  </svg>
                </div>
                <h4 className="h4-style">{r.title}</h4><p className="p-style">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Info */}
      <section className="section-padding" style={{background: '#050505'}}>
        <div className="container-xl">
          <div className="detail-item">
            <div className="detail-text">
              <h2 className="h2-style" style={{marginBottom: '20px'}}>Marka Hikayesi İnşası</h2>
              <p className="p-style" style={{color: '#d1d5db', lineHeight: '1.8'}}>
                Web3'te dikkat çekmek için teknik detaylardan fazlası gerekir. Projenizin topluluğa dokunan ruhunu ve hikayesini kurguluyoruz. Doğru kanallarda, doğru dille konuşarak markanızı kalıcı hale getiriyoruz.
              </p>
            </div>
            <div className="detail-visual">
              <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" alt="Brand Building" />
            </div>
          </div>

          <div className="detail-item reverse">
            <div className="detail-text">
              <h2 className="h2-style" style={{marginBottom: '20px'}}>Küresel Görünürlük ve PR</h2>
              <p className="p-style" style={{color: '#d1d5db', lineHeight: '1.8'}}>
                Sadece bir bölgeye değil, tüm dünyaya hitap etmeniz için global haber ağlarını ve etkileşim kanallarını aktif kullanıyoruz. CoinTelegraph, Forbes ve büyük borsa portalları üzerinden markanızı devler ligine taşıyoruz.
              </p>
            </div>
            <div className="detail-visual">
              <img src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2062&auto=format&fit=crop" alt="Global PR" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style">Markanızı Global Arenaya Taşıyalım</h2>
          <p className="p-style" style={{color: '#555', maxWidth: '800px', margin: '20px auto 0'}}>Dünyanın dört bir yanındaki kripto yatırımcılarına ulaşın. Tier-1 PR ve KOL networkümüzle görünürlüğünüzü en üst seviyeye çıkarın.</p>
          <a href="#h-hero" className="cta-btn">Tanıtım Paketi Al</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '48px'}}>Sıkça Sorulan Sorular</h2>
          <div style={{maxWidth: '850px', margin: '0 auto'}}>
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-accordion-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-accordion-header h4-style">
                  <span>{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cray-gold)" strokeWidth="3" style={{transform: openFaq === i ? 'rotate(180deg)' : ''}}><path d="M19 9l-7 7-7-7" /></svg>
                </div>
                <div className="faq-accordion-body p-style"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ padding: '80px 0', textAlign: 'center', background: '#000' }}>
        <button onClick={() => window.location.hash = '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi'} className="p-style" style={{ background: 'transparent', border: '1px solid #444', color: '#888', padding: '14px 40px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase' }}>Hizmetler Sayfasına Dön</button>
      </div>
    </div>
  );
};

export default DigitalMarketingPromotionSubDetailView;