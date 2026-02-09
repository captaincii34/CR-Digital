import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const KriptoMarketingDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const [budget, setBudget] = useState('');
  const [goal, setGoal] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await evaluateProject(status, `Pazarlama Bütçesi: ${budget}. Hedef: ${goal}`);
    setAiResult(result);
    setLoading(false);
  };

  const marketingScope = [
    { title: "Web3 Büyüme Stratejisi", desc: "Veriye dayalı büyüme planları ve ROI odaklı yaklaşımlar.", icon: "🎯" },
    { title: "Performans Pazarlaması", desc: "Reklam ağları üzerinden hedeflenmiş kullanıcı edinimi.", icon: "⚡" },
    { title: "Influencer & KOL", desc: "Global Web3 kanaat önderleri ile stratejik iş birlikleri.", icon: "🌟" },
    { title: "PR & Medya Yayınları", desc: "CoinTelegraph, Forbes ve diğer majör mecralarda tanıtım.", icon: "📰" },
    { title: "Kampanya & Hype Yönetimi", desc: "Toplulukta heyecan yaratan viral kampanya kurguları.", icon: "🔥" },
    { title: "Landing Page Optimizasyonu", desc: "Daha yüksek dönüşüm oranları için teknik ve görsel iyileştirme.", icon: "🛠️" },
    { title: "Analitik & KPI Raporlama", desc: "Tüm pazarlama verilerinin şeffaf ve ölçülebilir takibi.", icon: "📊" },
    { title: "Pazarlama Otomasyonu", desc: "Web3 uyumlu CRM ve otomatik pazarlama araçları.", icon: "🤖" }
  ];

  const reasons = [
    {
      icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
      title: 'NDA & Gizlilik Önceliği',
      desc: 'Projelerinizin güvenliği bizim için en önemli konu'
    },
    {
      icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>,
      title: "A'dan Z'ye Proje Yaklaşımı",
      desc: 'Fikir aşamasından lansmanına kadar her adımda yanınızdayız'
    },
    {
      icon: <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>,
      title: 'Web3 & Crypto Odaklı Uzmanlık',
      desc: 'Sadece kripto ve Web3 projelerine odaklanmış deneyimli ekip'
    }
  ];

  const faqs = [
    { q: "Pazarlama çalışmaları ne zaman sonuç verir?", a: "Stratejik çalışmalar ilk haftadan etkisini göstermeye başlar, ancak sürdürülebilir büyüme 3-6 aylık periyotlarda netleşir." },
    { q: "Hangi platformlarda reklam veriyorsunuz?", a: "X (Twitter), YouTube ve Web3 odaklı niş reklam ağlarını (Coinzilla vb.) kullanıyoruz." },
    { q: "Küçük bütçeli projeler için çözümünüz var mı?", a: "Evet, her bütçeye uygun 'Growth Hacking' paketlerimiz mevcurtur." }
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
        .hero-grid { display: flex; flex-direction: column; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { flex-direction: row; align-items: center; justify-content: space-between; } }
        .hero-text-content { flex: 1.2; }
        .hero-feature-list { display: flex; flex-direction: column; gap: 16px; margin-top: 32px; }
        .hero-feature-item { display: flex; align-items: center; gap: 12px; }
        .feature-icon-circle { width: 24px; height: 24px; background: var(--cray-gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .feature-item-text { color: #fff; font-weight: 700 !important; font-size: 11px !important; text-transform: uppercase; letter-spacing: 1px; }
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; box-shadow: 0 40px 80px rgba(0,0,0,0.7); color: #000; width: 100%; max-width: 480px; margin: 0 auto; }
        .form-control { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; background: #fff; color: #000; margin-bottom: 16px; }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 18px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }
        
        .why-us-section { position: relative; padding: 120px 0; background-color: #000; overflow: hidden; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        .reason-card { padding: 48px 32px; border-radius: 24px; text-align: center; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); transition: 0.4s; }
        .reason-card:hover { transform: translateY(-10px); border-color: var(--cray-gold); background: rgba(255, 177, 0, 0.08); }
        .reason-icon-box { width: 60px; height: 60px; background-color: var(--cray-gold); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.3); }
        
        .scope-section { position: relative; padding: 120px 0; overflow: hidden; background-color: #000; color: #fff; }
        .scope-grid { display: grid; grid-template-columns: 1fr; gap: 24px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .scope-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .scope-grid { grid-template-columns: repeat(4, 1fr); } }
        .scope-card { padding: 36px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; background: rgba(0,0,0,0.4); backdrop-filter: blur(8px); transition: 0.3s; }
        .scope-card:hover { border-color: var(--cray-gold); transform: translateY(-5px); }
        
        .bant-section { background: #f9f9f9; padding: 80px 0; text-align: center; }
        .bant-btn { background: var(--cray-gold); color: #000; padding: 18px 40px; border-radius: 12px; font-weight: 700 !important; text-decoration: none; display: inline-block; box-shadow: 0 10px 25px rgba(255,177,0,0.4); }
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" className="bg-img" alt="Digital Marketing" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text-content">
              <h1 className="h1-style">Kripto ve Web3 Pazarlama Hizmetleri</h1>
              <p className="hero-desc p-style">Markanızı gürültünün arasından öne çıkarıyor, projenizin global çapta görünürlük kazanması için 360 derece büyüme modelleri sunuyoruz.</p>
              
              <div className="hero-feature-list">
                {["ROI Odaklı Strateji", "Global Medya Networkü", "KOL & Influencer Yönetimi", "Veri Temelli Büyüme"].map((item, i) => (
                  <div key={i} className="hero-feature-item">
                    <div className="feature-icon-circle">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="feature-item-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-card">
              <h3 className="h3-style" style={{textAlign: 'center', marginBottom: '20px'}}>Pazarlama Analizi</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Tekrar</button></div> : (
                <form onSubmit={handleSubmit}>
                  <select className="form-control" value={status} onChange={e=>setStatus(e.target.value)} required>
                    <option value="">Proje Durumu</option><option value="yeni">Lansman Hazırlığı</option><option value="mevcut">Büyüme/Ölçekleme</option>
                  </select>
                  <input type="text" className="form-control" placeholder="Aylık Bütçe Hedefi" value={budget} onChange={e=>setBudget(e.target.value)} />
                  <textarea className="form-control" rows={3} placeholder="Hedef Kitleniz Neresi?" value={goal} onChange={e=>setGoal(e.target.value)} required />
                  <input type="text" className="form-control" placeholder="Telegram/E-posta" value={contact} onChange={e=>setContact(e.target.value)} required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'İŞLENİYOR...' : 'STRATEJİ AL'}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section">
        <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Marketing Success" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '60px'}}>Neden Bizimle Çalışmalısınız?</h2>
          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="reason-card">
                <div className="reason-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {r.icon}
                  </svg>
                </div>
                <h4 className="h4-style">{r.title}</h4><p className="p-style">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scope-section">
        <img src="/gorsel/ag1.jpg" alt="Marketing Scope" className="bg-img" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '60px'}}>Hizmet Kapsamımız</h2>
          <div className="scope-grid">
            {marketingScope.map((s, i) => (
              <div key={i} className="scope-card">
                <div style={{fontSize: '40px', marginBottom: '20px'}}>{s.icon}</div>
                <h4 className="h4-style">{s.title}</h4><p className="p-style" style={{fontSize: '13px'}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="h2-style" style={{marginBottom: '28px'}}>Pazarlamada Sürdürülebilir Büyüme</h2>
              <p className="p-style" style={{marginBottom: '24px', color: '#d1d5db', lineHeight: '1.8'}}>
                Kripto dünyasında hype geçicidir, topluluk ise kalıcı. Biz projenizin sadece bir kez konuşulmasını değil, ekosistemin bir parçası olmasını sağlıyoruz.
              </p>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {["Gelişmiş ROI Takibi", "Viral Kampanya Kurguları", "Niş Kitle Hedefleme"].map((adv, i) => (
                  <li key={i} className="p-style" style={{display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px'}}>
                    <span style={{color: 'var(--cray-gold)', fontWeight: 800, fontSize: '18px'}}>✓</span> {adv}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1" style={{position: 'relative', borderRadius: '32px', overflow: 'hidden', height: '440px', border: '1px solid rgba(255,177,0,0.2)'}}>
              <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Success Visual" />
            </div>
          </div>
        </div>
      </section>

      <section className="bant-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{color: '#000', marginBottom: '20px'}}>Pazarlama Stratejinizi Bugün Oluşturalım</h2>
          <p className="p-style" style={{color: '#444', marginBottom: '40px'}}>Projenizi global arenada öne çıkaracak profesyonel destek için hemen iletişime geçin.</p>
          <a href="#h-hero" className="bant-btn">Analiz Talep Et</a>
        </div>
      </section>

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
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #444', color: '#888', padding: '14px 40px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase' }}>Ana Sayfaya Dön</button>
      </div>
    </div>
  );
};

export default KriptoMarketingDetailView;