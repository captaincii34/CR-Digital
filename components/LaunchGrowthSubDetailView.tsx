import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const LaunchGrowthSubDetailView: React.FC = () => {
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
      icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>,
      title: 'Patlayıcı Başlangıç',
      desc: 'Lansman anında ihtiyacınız olan likidite, hacim ve topluluk ilgisini senkronize şekilde yaratıyoruz.'
    },
    {
      icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></>,
      title: "Viral Büyüme Motorları",
      desc: 'Sadece reklam değil, kullanıcıların birbirini davet ettiği organik ve teknik büyüme kurguları kuruyoruz.'
    },
    {
      icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>,
      title: 'Uzun Vadeli Tutundurma',
      desc: 'Lansmandan sonra sönen projelerden olmayın. Holder sadakatini ve sürekli katılımı sağlayan modellerimiz hazır.'
    }
  ];

  const faqs = [
    { q: "Lansman için en doğru zaman ne zaman?", a: "Piyasa trendleri (bull/bear), rakip projelerin takvimi ve kendi topluluğunuzun olgunluk seviyesine göre bu zamanı birlikte belirliyoruz." },
    { q: "Growth Hacking nedir?", a: "Minimum maliyetle maksimum kullanıcıya ulaşmayı hedefleyen, teknik ve psikolojik tetikleyicilerle dolu pazarlama yöntemleridir." },
    { q: "Lansman sonrası destek veriyor musunuz?", a: "Kesinlikle. Lansman sadece bir başlangıçtır; asıl önemli olan listeleme sonrası sürdürülebilir hacim ve büyümedir." }
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
        <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Launch and Growth" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h1 className="h1-style">Lansman ve Büyüme Danışmanlığı</h1>
              <p className="hero-desc p-style">Piyasaya fırtına gibi girin ve orada kalın. Doğru zamanlama ve ölçeklenebilir büyüme motorları ile projenizi kalıcı hale getiriyoruz.</p>
            </div>
            <div className="form-card">
              <h3 className="h2-style" style={{textAlign: 'center', marginBottom: '20px', fontSize: '20px !important'}}>Büyüme Planı</h3>
              <form onSubmit={handleSubmit}>
                <input type="text" className="w-full border p-3 rounded-lg mb-4" placeholder="Mevcut Kullanıcı Sayısı" required />
                <textarea className="w-full border p-3 rounded-lg mb-4" rows={3} placeholder="3 aylık büyüme hedefiniz nedir?" required />
                <button type="submit" disabled={loading} className="form-button">{loading ? 'STRATEJİ HAZIRLANIYOR...' : 'LİSTELEME & BÜYÜME PLANI AL'}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '60px'}}>Başarıyı Hızlandıran Faktörler</h2>
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
              <h2 className="h2-style" style={{marginBottom: '20px'}}>Pazara Patlayıcı Giriş</h2>
              <p className="p-style" style={{color: '#d1d5db', lineHeight: '1.8'}}>
                Lansman günü her saniye kritiktir. Likiditenin açılmasıyla beraber pazarlama çalışmalarının pik yapmasını, topluluğun "FOMO" etkisine girmesini sağlıyoruz. Sizi sadece bir listeleme olarak değil, bir 'olay' olarak piyasaya sürüyoruz.
              </p>
            </div>
            <div className="detail-visual">
              <img src="https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2069&auto=format&fit=crop" alt="Market Entry" />
            </div>
          </div>

          <div className="detail-item reverse">
            <div className="detail-text">
              <h2 className="h2-style" style={{marginBottom: '20px'}}>Büyüme Motorları ve Tutundurma</h2>
              <p className="p-style" style={{color: '#d1d5db', lineHeight: '1.8'}}>
                Lansman sonrası sönüp giden projelerden olmayın. Viral büyüme döngüleri, referral sistemleri ve Web3 sadakat programları ile kullanıcı tabanınızı her geçen gün genişletiyoruz. Sürdürülebilir büyüme için projenizi bir ekosisteme dönüştürüyoruz.
              </p>
            </div>
            <div className="detail-visual">
              <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" alt="Growth Engines" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style">Geleceğin Web3 Devleri Arasında Yerinizi Alın</h2>
          <p className="p-style" style={{color: '#555', maxWidth: '800px', margin: '20px auto 0'}}>Lansman stratejinizi sıfır hata ile kurgulayın. Piyasa koşullarına en uygun GTM planı için profesyonel destek alın.</p>
          <a href="#h-hero" className="cta-btn">Lansman Stratejisi Al</a>
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

export default LaunchGrowthSubDetailView;