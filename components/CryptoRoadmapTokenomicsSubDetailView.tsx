import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const CryptoRoadmapTokenomicsSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const [goal, setGoal] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await evaluateProject(status, `Yol Haritası ve Tokenomics Hedefi: ${goal}`);
    setAiResult(result);
    setLoading(false);
  };

  const reasons = [
    {
      icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>,
      title: 'Matematiksel Kusursuzluk',
      desc: 'Enflasyonist ve deflasyonist modelleri dengeleyerek token ekonominizin uzun vadeli sağlığını koruyoruz.'
    },
    {
      icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>,
      title: "Vesting & Dağıtım",
      desc: 'Yatırımcı güvenini sarsmayacak, piyasa satış baskısını minimize eden dağıtım takvimleri kurguluyoruz.'
    },
    {
      icon: <><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>,
      title: 'Gerçekçi Kilometre Taşları',
      desc: 'Topluluğa ve yatırımcıya güven veren, tutarlı ve ulaşılabilir bir teknik/ticari yol haritası çiziyoruz.'
    }
  ];

  const faqs = [
    { q: "Tokenomics tasarımı neden kritiktir?", a: "Hatalı bir arz-talep dengesi, projeniz teknik olarak harika olsa bile token değerinin korunmasını imkansız hale getirir." },
    { q: "Vesting sürelerini nasıl belirliyorsunuz?", a: "Piyasa standartları, projenin nakit akışı ihtiyacı ve yatırımcı psikolojisini analiz ederek her segmente özel kilit takvimleri hazırlıyoruz." },
    { q: "Roadmap revize edilebilir mi?", a: "Evet, piyasa koşullarına göre esneklik payı bırakarak projenin güncelliğini korumasını sağlıyoruz." }
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
        .h3-style { font-size: 22px !important; font-weight: 600 !important; }
        .h4-style { font-size: 18px !important; font-weight: 600 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; }

        #h-hero { position: relative; padding: 220px 0 120px; min-height: 85vh; display: flex; align-items: center; }
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { grid-template-columns: 1.2fr 1fr; align-items: center; } }
        
        .hero-feature-list { display: flex; flex-direction: column; gap: 16px; margin-top: 32px; }
        .hero-feature-item { display: flex; align-items: center; gap: 12px; }
        .feature-icon-circle { width: 24px; height: 24px; background: var(--cray-gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .feature-item-text { color: #fff; font-weight: 700 !important; font-size: 11px !important; text-transform: uppercase; letter-spacing: 1px; }

        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; box-shadow: 0 40px 80px rgba(0,0,0,0.7); color: #000; width: 100%; max-width: 480px; margin: 0 auto; }
        .form-control { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; background: #fff; color: #000; margin-bottom: 16px; }
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
        .cta-btn:hover { transform: scale(1.05); box-shadow: 0 10px 30px rgba(255,177,0,0.4); }

        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; width: 100%; text-align: left; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      {/* Hero */}
      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Roadmap & Tokenomics" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h1 className="h1-style">Kripto Yol Haritası ve Tokenomics Danışmanlığı</h1>
              <p className="hero-desc p-style">Token ekonominizi ve büyüme planınızı veriye dayalı, sürdürülebilir modellerle inşa ediyoruz. Başarı için matematiksel temel şarttır.</p>
              <div className="hero-feature-list">
                {["Dinamik Arz Mekanizmaları", "Vesting ve Kilit Takvimi", "Topluluk Teşvik Modelleri", "Yatırımcı Odaklı Roadmap"].map((item, i) => (
                  <div key={i} className="hero-feature-item">
                    <div className="feature-icon-circle"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg></div>
                    <span className="feature-item-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-card">
              <h3 className="h3-style" style={{textAlign: 'center', marginBottom: '20px'}}>Ekonomi Analizi</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Tekrar</button></div> : (
                <form onSubmit={handleSubmit}>
                  <select className="form-control" value={status} onChange={e=>setStatus(e.target.value)} required>
                    <option value="">Token Durumu</option><option value="fikir">Sadece Fikir</option><option value="taslak">Taslak Hazır</option><option value="yayinda">Yayında / Pivot</option>
                  </select>
                  <textarea className="form-control" rows={3} placeholder="Token kullanım amacınız nedir?" value={goal} onChange={e=>setGoal(e.target.value)} required />
                  <input type="text" className="form-control" placeholder="Telegram / E-posta" value={contact} onChange={e=>setContact(e.target.value)} required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'ANALİZ EDİLİYOR...' : 'EKONOMİ PLANI AL'}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '60px'}}>Neden Biz?</h2>
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
              <h2 className="h2-style" style={{marginBottom: '20px'}}>Sürdürülebilir Ekonomik Denge</h2>
              <p className="p-style" style={{color: '#d1d5db', lineHeight: '1.8'}}>
                Tokenların piyasadaki başarısı sadece reklamla değil, matematiksel arz-talep kurgusuyla sağlanır. Dağıtım miktarlarından yakım (burn) mekanizmalarına kadar her detayı projenizin geleceği için optimize ediyoruz.
              </p>
            </div>
            <div className="detail-visual">
              <img src="https://images.unsplash.com/photo-1642104704074-907c0698bcd9?q=80&w=2000&auto=format&fit=crop" alt="Economic Engineering" />
            </div>
          </div>

          <div className="detail-item reverse">
            <div className="detail-text">
              <h2 className="h2-style" style={{marginBottom: '20px'}}>Stratejik Takvimleme</h2>
              <p className="p-style" style={{color: '#d1d5db', lineHeight: '1.8'}}>
                Doğru zamanda doğru adımı atmak hayati önem taşır. Lansman öncesi hazırlıklardan borsa listelemelerine kadar tüm süreci kapsayan, yatırımcıya güven veren bir yol haritası (Roadmap) inşa ediyoruz.
              </p>
            </div>
            <div className="detail-visual">
              <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop" alt="Strategy Timeline" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style">Ekonominizi Sağlam Temellere Oturtalım</h2>
          <p className="p-style" style={{color: '#555', maxWidth: '800px', margin: '20px auto 0'}}>Projenizin kalbi olan ekonomiyi uzman ellere teslim edin. Bugün iletişime geçerek detaylı analiz raporunuzu oluşturun.</p>
          <a href="#h-hero" className="cta-btn">Analiz Talep Et</a>
        </div>
      </section>

      {/* FAQ Section */}
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

      <div style={{ padding: '80px 0', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi'} className="p-style" style={{ background: 'transparent', border: '1px solid #444', color: '#888', padding: '14px 40px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase' }}>Hizmetler Sayfasına Dön</button>
      </div>
    </div>
  );
};

export default CryptoRoadmapTokenomicsSubDetailView;