import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const FudCrisisManagementSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await evaluateProject('Kriz Yönetimi', 'FUD analizi ve itibar koruma stratejisi.');
    setAiResult(result);
    setLoading(false);
  };

  const reasons = [
    { title: 'Saniyeler İçinde Müdahale', desc: 'Sektördeki 7/24 alarm sistemimizle, olumsuz bir durumun yayılmasını saniyeler içinde durduruyoruz.', icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/> },
    { title: 'Profesyonel İletişim', desc: 'Panik yapmadan, yatırımcıyı ikna eden ve teknik verilerle desteklenen resmi açıklamalar hazırlıyoruz.', icon: <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/> },
    { title: 'İtibar Kurtarma (Recovery)', desc: 'Kriz sonrasında kaybolan güveni geri kazanmak için stratejik pazarlama ve PR dalgaları oluşturuyoruz.', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> }
  ];

  const faqs = [
    { q: "FUD nedir ve neden tehlikelidir?", a: "Fear, Uncertainty and Doubt (Korku, Belirsizlik ve Şüphe) anlamına gelir. Yanlış bilgi hızla yayılıp token fiyatının ve topluluk güveninin çökmesine neden olabilir." },
    { q: "Bir kriz anında ilk 30 dakikada ne yapıyorsunuz?", a: "Önce grubun durumunu analiz ediyor, botları devreye sokuyor ve ardından projenin resmi cevabını her platformda aynı dille yayıyoruz." },
    { q: "Hack saldırısı durumunda destek veriyor musunuz?", a: "Teknik ekibimizle hasar tespiti yaparken, iletişim ekibimizle topluluğu şeffaf bir şekilde bilgilendirerek panik satışlarını önlüyoruz." },
    { q: "Organize saldırıları (Raid) nasıl engellersiniz?", a: "Discord ve Telegram özel bot korumalarımızla gruba anlık giren saldırganları otomatik olarak tespit edip banlıyoruz." },
    { q: "Kriz senaryoları hazırlıyor musunuz?", a: "Evet, her projenin başında olası kriz noktalarını tespit edip 'B planlarımızı' önceden hazır tutuyoruz." }
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
        .form-button { width: 100%; background: #ef4444; color: #fff; padding: 18px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        .reason-card { padding: 48px 32px; border-radius: 24px; text-align: center; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); transition: 0.4s; }
        .reason-card:hover { transform: translateY(-10px); border-color: #ef4444; background: rgba(239, 68, 68, 0.05); }
        .reason-icon-box { width: 60px; height: 60px; background-color: #ef4444; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(239, 68, 68, 0.3); }
        .detail-row { display: flex; flex-direction: column; gap: 100px; }
        .detail-item { display: flex; flex-direction: column; gap: 60px; align-items: center; width: 100%; }
        @media (min-width: 1024px) { .detail-item { flex-direction: row; } .detail-item.reverse { flex-direction: row-reverse; } }
        .detail-visual { border-radius: 32px; overflow: hidden; height: 500px; border: 1px solid rgba(239,68,68,0.2); position: relative; width: 100%; }
        .detail-visual img { width: 100%; height: 100%; object-fit: cover; }
        .cta-box-section { background: #fef2f2; padding: 100px 0; color: #000; text-align: center; }
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; width: 100%; text-align: left; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: #ef4444; }
        .bullet-point { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .bullet-icon { width: 20px; height: 20px; background: #ef4444; border-radius: 50%; display: flex; align-items: center; justifyContent: center; flex-shrink: 0; }
        .bullet-text { font-size: 11px !important; font-weight: 700 !important; text-transform: uppercase; letter-spacing: 1px; color: #fff; }
      `}</style>

      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2832" className="bg-img" alt="Crisis Management Hero" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h5 style={{color: '#ef4444', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>Emergency Response Unit</h5>
              <h1 className="h1-style">FUD & Kriz Yönetimi</h1>
              <p className="p-style">Kripto dünyasında güveni kaybetmek saniyeler alır, geri kazanmak aylar. Projenizi hedef alan organize saldırıları ve kriz anlarını profesyonel bir zırhla koruyoruz.</p>
              <div style={{marginTop: '30px'}}>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#fff" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">7/24 SİBER VE SOSYAL MEDYA ALARM HATTI</span>
                </div>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#fff" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">ANLIK RESMİ AÇIKLAMA VE YALANLAMA YÖNETİMİ</span>
                </div>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#fff" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">KRİZ SONRASI GÜVEN TAZELEME STRATEJİLERİ</span>
                </div>
              </div>
            </div>
            <div className="form-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>Acil Durum Analizi</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Tekrar</button></div> : (
                <form onSubmit={handleSubmit}>
                  <input type="text" className="w-full border p-3 rounded-lg mb-4" placeholder="Proje Adı / Link" required />
                  <textarea className="w-full border p-3 rounded-lg mb-4" rows={3} placeholder="Mevcut bir kriz veya endişeniz var mı?" required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'İŞLENİYOR...' : 'KRİZ PLANI AL'}</button>
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
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">{r.icon}</svg>
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
                <h2 className="h2-style">İtibarınızı Veriyle Koruyun</h2>
                <p className="p-style">Kriz anında sadece duygularla değil, verilerle konuşuyoruz. On-chain kanıtlar, audit raporları ve teknik açıklamalarla FUD yayanların iddialarını çürütüyor, topluluğa projenin gücünü hatırlatıyoruz.</p>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000" alt="Data Security" />
              </div>
            </div>
            <div className="detail-item reverse">
              <div className="detail-text">
                <h2 className="h2-style">Şeffaf İletişim, Güçlü Duruş</h2>
                <p className="p-style">Sorunları gizlemek yerine, onları profesyonelce yönetiyoruz. Şeffaf ve dürüst bir kriz iletişimi, kriz bittiğinde markanızın eskisinden daha güçlü ve güvenilir olmasını sağlar.</p>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000" alt="Transparent Comm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style">Projenizi Olası Felaketlere Karşı Zırhlandırın</h2>
          <p className="p-style" style={{color: '#555', marginTop: '15px', maxWidth: '800px', margin: '15px auto 0'}}>Kriz kapıyı çalmadan önleminizi alın. Profesyonel itibar yönetimi ve kriz müdahale ekibimizle projeniz her zaman güvenli limanda kalsın.</p>
          <a href="#h-hero" className="form-button" style={{display: 'inline-block', width: 'auto', padding: '18px 48px', marginTop: '30px', textDecoration: 'none', background: '#000'}}>Önleyici Analiz Al</a>
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" style={{transform: openFaq === i ? 'rotate(180deg)' : ''}}><path d="M19 9l-7 7-7-7" /></svg>
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

export default FudCrisisManagementSubDetailView;