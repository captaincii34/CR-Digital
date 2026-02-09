import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const CryptoProjectConsultancySubDetailView: React.FC = () => {
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
    const result = await evaluateProject(status, goal);
    setAiResult(result);
    setLoading(false);
  };

  const reasons = [
    {
      icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
      title: 'NDA & Gizlilik Önceliği',
      desc: 'Projelerinizin güvenliği ve fikirlerinizin korunması bizim için en kutsal kuraldır.'
    },
    {
      icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>,
      title: "A'dan Z'ye Proje Yaklaşımı",
      desc: 'Sadece tavsiye vermiyoruz, fikir aşamasından lansman sonrasına kadar her adımda sizinle birlikte çalışıyoruz.'
    },
    {
      icon: <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>,
      title: 'Web3 & Crypto Odaklı Uzmanlık',
      desc: 'Ekibimiz yalnızca blokzincir ekosistemine odaklanmış, global projelerde deneyimli uzmanlardan oluşur.'
    }
  ];

  const faqs = [
    { q: "Danışmanlık süreci nasıl başlar?", a: "Süreç, ücretsiz bir ön değerlendirme ve gizlilik sözleşmesi (NDA) imzalanmasıyla resmiyet kazanır. Ardından projenizin mevcut durumunu analiz ederek yol haritasını çizeriz." },
    { q: "Hangi bütçe seviyeleri için uygunsunuz?", a: "Hem butik butçeli başlangıç seviyesi projelere hem de büyük ölçekli kurumsal Web3 girişimlerine uygun esnek hizmet modellerimiz mevcuttur." },
    { q: "Teknik ekip desteği sağlıyor musunuz?", a: "Evet, danışmanlık kapsamında projenizin yazılım ihtiyaçlarını kendi bünyemizdeki geliştirici ekibimizle karşılıyoruz." },
    { q: "Raporlama süreci nasıl işliyor?", a: "Haftalık periyotlarda ilerleme raporları sunuyor ve tüm verileri şeffaf bir şekilde paylaşıyoruz." }
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
        
        .why-us-section { position: relative; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        .reason-card { padding: 48px 32px; border-radius: 24px; text-align: center; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); transition: 0.4s; }
        .reason-card:hover { transform: translateY(-10px); border-color: var(--cray-gold); background: rgba(255, 177, 0, 0.08); }
        .reason-icon-box { width: 60px; height: 60px; background-color: var(--cray-gold); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.3); }
        
        .info-detail-section { padding: 120px 0; background: #050505; }
        .detail-row { display: flex; flex-direction: column; gap: 80px; }
        .detail-item { display: flex; flex-direction: column; gap: 40px; align-items: center; }
        @media (min-width: 1024px) { 
          .detail-item { flex-direction: row; } 
          .detail-item.reverse { flex-direction: row-reverse; }
        }
        .detail-text { flex: 1; }
        .detail-visual { flex: 1; position: relative; border-radius: 32px; overflow: hidden; height: 400px; border: 1px solid rgba(255,177,0,0.2); }
        .detail-visual img { width: 100%; height: 100%; object-fit: cover; }

        .cta-box-section { background: #f7f7f7; padding: 100px 0; color: #000; text-align: center; }
        .cta-btn { background: var(--cray-gold); color: #000; padding: 20px 48px; border-radius: 12px; font-weight: 700 !important; display: inline-block; transition: 0.3s; margin-top: 32px; }
        .cta-btn:hover { transform: scale(1.05); box-shadow: 0 10px 30px rgba(255,177,0,0.4); }

        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      {/* Hero Section */}
      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop" className="bg-img" alt="Crypto Consultancy" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text-content">
              <h1 className="h1-style">Kripto Proje Danışmanlığı</h1>
              <p className="hero-desc p-style">Sektörün karmaşıklığını basitleştiriyoruz. Token projenizin başarılı olması için gereken tüm stratejik kararları uzmanlıkla alıyoruz.</p>
              
              <div className="hero-feature-list">
                {["Uçtan Uca Stratejik Mimari", "Borsalara Uyumlu Yapılandırma", "Global Network Erişimi"].map((item, i) => (
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
              <h3 className="h3-style" style={{textAlign: 'center', marginBottom: '20px'}}>Proje Analizi</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Tekrar</button></div> : (
                <form onSubmit={handleSubmit}>
                  <select className="form-control" value={status} onChange={e=>setStatus(e.target.value)} required>
                    <option value="">İhtiyaç Aşaması</option>
                    <option value="yeni">Yeni Fikir / Konsept</option>
                    <option value="geliştirme">Geliştirme Aşamasında</option>
                    <option value="hazir">Lansmana Hazır</option>
                  </select>
                  <textarea className="form-control" rows={3} placeholder="Projenizin temel amacını kısaca anlatın..." value={goal} onChange={e=>setGoal(e.target.value)} required />
                  <input type="text" className="form-control" placeholder="E-posta veya Telegram" value={contact} onChange={e=>setContact(e.target.value)} required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'ANALİZ EDİLİYOR...' : 'STRATEJİK ANALİZ AL'}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us-section section-padding">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Expertise" />
        <div className="overlay" style={{ background: 'rgba(0,0,0,0.88)' }}></div><div className="grad"></div>
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

      {/* Detailed Info Section */}
      <section className="info-detail-section section-padding">
        <div className="container-xl">
          <div className="detail-row">
            <div className="detail-item">
              <div className="detail-text">
                <h2 className="h2-style" style={{marginBottom: '20px'}}>Kapsamlı Proje Analizi</h2>
                <p className="p-style" style={{color: '#d1d5db', lineHeight: '1.8'}}>
                  Her başarılı projenin arkasında derinlemesine yapılmış bir pazar ve rakip analizi vardır. Biz sadece teknik değil, aynı zamanda projenizin piyasa koşullarındaki hayatta kalma ve büyüme potansiyelini analiz ediyoruz. Trendleri takip etmek yerine, trend yaratan bir proje olmanız için gereken verileri sunuyoruz.
                </p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '24px'}}>
                  {["Pazar Boşluğu Analizi", "Kullanıcı Deneyimi (UX) Stratejisi", "Likidite ve Finansal Planlama"].map((li, i) => (
                    <li key={i} className="p-style" style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {li}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" alt="Analysis" />
              </div>
            </div>

            <div className="detail-item reverse">
              <div className="detail-text">
                <h2 className="h2-style" style={{marginBottom: '20px'}}>Teknik ve Ekonomik Mimari</h2>
                <p className="p-style" style={{color: '#d1d5db', lineHeight: '1.8'}}>
                  Tokenomics, bir projenin kalbidir. Yanlış tasarlanmış bir ekonomi modeli, en iyi teknolojiye sahip olsa bile projenin çökmesine neden olabilir. Danışmanlarımız, yatırımcıları cezbeden ve token fiyatını sürdürülebilir kılan arz-talep mekanizmalarını tasarlar.
                </p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '24px'}}>
                  {["Sürdürülebilir Tokenomics Tasarımı", "Audit'e Hazır Akıllı Kontrat Mimarisi", "Ekosistem Teşvik Modelleri"].map((li, i) => (
                    <li key={i} className="p-style" style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {li}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1642104704074-907c0698bcd9?q=80&w=2000&auto=format&fit=crop" alt="Tokenomics" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{color: '#000'}}>Hayallerinizi On-Chain Dünyasına Taşıyalım</h2>
          <p className="p-style" style={{color: '#555', maxWidth: '800px', margin: '20px auto 0'}}>
            Projenizin ihtiyacı olan uzman görüşü ve profesyonel yönetim desteği için bugün ilk adımı atın. Fikrinizi global bir başarı hikayesine dönüştürelim.
          </p>
          <a href="#h-hero" className="cta-btn">Ücretsiz Danışmanlık Al</a>
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

export default CryptoProjectConsultancySubDetailView;