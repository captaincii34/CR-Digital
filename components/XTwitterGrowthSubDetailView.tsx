import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const XTwitterGrowthSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await evaluateProject('X Büyüme', 'Twitter içerik stratejisi ve takipçi artışı analizi.');
    setAiResult(result);
    setLoading(false);
  };

  const reasons = [
    { title: 'Viral Thread Kurguları', desc: 'Projenizi saniyeler içinde binlerce kişiye ulaştıracak, teknik ve ilgi çekici thread içerikleri hazırlıyoruz.', icon: <path d="M13 10V3L4 14h7v7l9-11h-7z"/> },
    { title: 'Algoritma Dostu Akış', desc: 'X algoritmasının güncel dinamiklerine göre etkileşimi maksimize eden paylaşım saatleri ve formatları.', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/> },
    { title: 'Aktif Topluluk İnşası', desc: 'Sadece takipçi sayısı değil, paylaşımlarınıza yanıt veren ve projeyi savunan organik bir kitle inşası.', icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/> }
  ];

  const faqs = [
    { q: "Takipçi artışı garantisi veriyor musunuz?", a: "Bot hesaplar yerine tamamen organik büyüme hedefliyoruz. Doğru içerik stratejisiyle sürdürülebilir bir artış sağlıyoruz." },
    { q: "Günde kaç paylaşım yapılmalı?", a: "X algoritması için ideal olan 2 ana tweet ve aktif yanıt yönetimidir. Biz bu dengeyi sizin için kuruyoruz." },
    { q: "Thread (Zincir) içerikler neden önemli?", a: "Thread'ler, projenizin detaylarını anlatmak ve kaydedilme/paylaşılma oranlarını artırmak için en etkili X formatıdır." },
    { q: "Space etkinlikleri düzenliyor musunuz?", a: "Evet, global KOL'ların katıldığı ve projenin vizyonunun anlatıldığı X Space oturumlarını uçtan uca yönetiyoruz." },
    { q: "Rakiplerimizi takip ediyor musunuz?", a: "Evet, rakip analizi yaparak sektördeki trendleri ve fırsatları anlık olarak içerik planımıza dahil ediyoruz." }
  ];

  return (
    <div className="crypto-detail-page">
      <style>{`
        .crypto-detail-page { background-color: #000; color: #fff; overflow-x: hidden; }
        .section-padding { padding: 100px 0; position: relative; }
        .container-xl { max-width: 1280px; margin: 0 auto; padding: 0 32px; width: 100%; position: relative; z-index: 10; }
        .bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.8); z-index: 1; }
        .grad { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent 40%, transparent 60%, #000); z-index: 2; }
        .h1-style { font-size: 40px !important; font-weight: 700 !important; line-height: 1.2; }
        .h2-style { font-size: 32px !important; font-weight: 700 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; color: #d1d5db; line-height: 1.8; }
        #h-hero { position: relative; padding: 220px 0 120px; min-height: 85vh; display: flex; align-items: center; }
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { grid-template-columns: 1.2fr 1fr; align-items: center; } }
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; color: #000; width: 100%; max-width: 480px; margin: 0 auto; box-shadow: 0 40px 80px rgba(0,0,0,0.7); }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 18px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        .reason-card { padding: 48px 32px; border-radius: 24px; text-align: center; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); transition: 0.4s; }
        .reason-card:hover { transform: translateY(-10px); border-color: var(--cray-gold); background: rgba(255, 177, 0, 0.1); }
        .reason-icon-box { width: 60px; height: 60px; background-color: var(--cray-gold); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.3); }
        .detail-row { display: flex; flex-direction: column; gap: 100px; }
        .detail-item { display: flex; flex-direction: column; gap: 60px; align-items: center; width: 100%; }
        @media (min-width: 1024px) { .detail-item { flex-direction: row; } .detail-item.reverse { flex-direction: row-reverse; } }
        .detail-visual { border-radius: 32px; overflow: hidden; height: 500px; border: 1px solid rgba(255,177,0,0.2); position: relative; width: 100%; }
        .detail-visual img { width: 100%; height: 100%; object-fit: cover; }
        .cta-box-section { background: #f7f7f7; padding: 100px 0; color: #000; text-align: center; }
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; width: 100%; text-align: left; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
        .bullet-point { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .bullet-icon { width: 20px; height: 20px; background: var(--cray-gold); border-radius: 50%; display: flex; align-items: center; justifyContent: center; flex-shrink: 0; }
        .bullet-text { font-size: 11px !important; font-weight: 700 !important; text-transform: uppercase; letter-spacing: 1px; color: #fff; }
      `}</style>

      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2832" className="bg-img" alt="X Twitter Hero" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>Global Voice Authority</h5>
              <h1 className="h1-style">X (Twitter) İçerik ve Büyüme Yönetimi</h1>
              <p className="p-style">Kriptonun kalbi X'te atıyor. Projenizi doğru içerik dili, viral kurgular ve stratejik büyüme hamleleriyle ekosistemin merkezine taşıyoruz.</p>
              <div style={{marginTop: '30px'}}>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">VİRAL THREAD VE İÇERİK STRATEJİSİ</span>
                </div>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">HEDEF ODAKLI TAKİPÇİ VE ETKİLEŞİM ARTIŞI</span>
                </div>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">SPACE VE TOPLULUK ETKİNLİKLERİ YÖNETİMİ</span>
                </div>
              </div>
            </div>
            <div className="form-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>X Analizi Al</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Tekrar</button></div> : (
                <form onSubmit={handleSubmit}>
                  <input type="text" className="w-full border p-3 rounded-lg mb-4" placeholder="X Kullanıcı Adı (@...)" required />
                  <textarea className="w-full border p-3 rounded-lg mb-4" rows={3} placeholder="Büyüme hedeflerinizi özetleyin..." required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'HESAPLANIYOR...' : 'BÜYÜME PLANI AL'}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="reason-card">
                <div className="reason-icon-box">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">{r.icon}</svg>
                </div>
                <h4 className="h2-style" style={{fontSize: '20px !important', marginBottom: '15px'}}>{r.title}</h4>
                <p className="p-style" style={{fontSize: '14px'}}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{background: '#050505'}}>
        <div className="container-xl">
          <div className="detail-row">
            <div className="detail-item">
              <div className="detail-text">
                <h2 className="h2-style">Etkileşim Odaklı Görsel Dil</h2>
                <p className="p-style">Sadece metin değil, X algoritmasının sevdiği yüksek kaliteli infografikler, videolar ve giflerle markanızın duruşunu profesyonelleştiriyoruz. Takipçilerinizin ana sayfasında durup bakacağı içerikler üretiyoruz.</p>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000" alt="X Content" />
              </div>
            </div>
            <div className="detail-item reverse">
              <div className="detail-text">
                <h2 className="h2-style">Proaktif Yanıt ve Kriz Yönetimi</h2>
                <p className="p-style">X, iletişimin en hızlı olduğu yerdir. Projeniz hakkındaki tüm mentionları takip ediyor, topluluğa anlık yanıtlar veriyoruz. Olası FUD dalgalarını profesyonel bir dille henüz başlamadan durduruyoruz.</p>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000" alt="X Engagement" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style">X'te Görünürlüğünüzü Artıralım</h2>
          <p className="p-style" style={{color: '#555', marginTop: '15px', maxWidth: '800px', margin: '15px auto 0'}}>Statik paylaşımlardan kurtulun. Kripto dünyasının en dinamik platformunda uzman içerik ekibimizle ses getirin.</p>
          <a href="#h-hero" className="form-button" style={{display: 'inline-block', width: 'auto', padding: '18px 48px', marginTop: '30px', textDecoration: 'none'}}>X Stratejisi İste</a>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '48px'}}>Sıkça Sorulan Sorular</h2>
          <div style={{maxWidth: '850px', margin: '0 auto'}}>
            {faqs.map((f, i) => (
              <div key={i} className={`faq-accordion-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-accordion-header h2-style" style={{fontSize: '18px !important'}}>
                  <span>{f.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cray-gold)" strokeWidth="3" style={{transform: openFaq === i ? 'rotate(180deg)' : ''}}><path d="M19 9l-7 7-7-7" /></svg>
                </div>
                <div className="faq-accordion-body p-style"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ padding: '60px 0', textAlign: 'center' }}>
        <button onClick={() => window.location.hash = '#hizmetler/sosyal-medya-ve-topluluk-yonetimi'} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase' }}>Geri Dön</button>
      </div>
    </div>
  );
};

export default XTwitterGrowthSubDetailView;