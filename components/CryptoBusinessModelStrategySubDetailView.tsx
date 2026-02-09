import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const CryptoBusinessModelStrategySubDetailView: React.FC = () => {
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
    const result = await evaluateProject(status, `İş Modeli ve Strateji Hedefi: ${goal}`);
    setAiResult(result);
    setLoading(false);
  };

  const reasons = [
    {
      icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
      title: 'Hassas Gizlilik (NDA)',
      desc: 'İş modeliniz ve ticari sırlarınız bizimle tamamen güvende. Her süreç yasal koruma altında başlar.'
    },
    {
      icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>,
      title: "Sürdürülebilir Ekonomi",
      desc: 'Sadece anlık kazanç değil, token ve ekosistem döngüsünün yıllarca çalışmasını sağlayacak modeller kurguluyoruz.'
    },
    {
      icon: <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>,
      title: 'Stratejik Yol Haritası',
      desc: 'Piyasa dalgalanmalarına karşı dayanıklı, esnek ve büyüme odaklı "Go-to-Market" planları hazırlıyoruz.'
    }
  ];

  const faqs = [
    { q: "İş modeli tasarımı neleri kapsar?", a: "Gelir kanalları, kullanıcı edinme maliyetleri, token faydası (utility) ve ekosistem içi ekonomik döngülerin tamamını kapsar." },
    { q: "Mevcut projemin modelini değiştirebilir misiniz?", a: "Evet, 'Pivot' danışmanlığımız ile projenizin eksik yönlerini tespit edip güncel pazar koşullarına uygun şekilde yeniden yapılandırıyoruz." },
    { q: "Yatırımcılar için strateji neden önemlidir?", a: "Yatırımcılar teknoloji kadar 'paranın nasıl döneceğine' bakar. Sağlam bir iş modeli, fon toplama şansınızı %300 artırır." }
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
        <img src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Strategy & Business" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text-content">
              <h1 className="h1-style">Kripto İş Modeli ve Strateji Danışmanlığı</h1>
              <p className="hero-desc p-style">Sürdürülebilir bir Web3 ekonomisi inşa edin. İş modelinizi sadece bugün için değil, geleceğin merkeziyetsiz dünyası için kurguluyoruz.</p>
              
              <div className="hero-feature-list">
                {["Gelir Odaklı Ekosistem Mimari", "Büyüme ve Ölçekleme Stratejileri", "Rekabetçi Konumlandırma", "Borsalara Hazırlık Stratejisi"].map((item, i) => (
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
              <h3 className="h3-style" style={{textAlign: 'center', marginBottom: '20px'}}>Strateji Analizi</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Tekrar</button></div> : (
                <form onSubmit={handleSubmit}>
                  <select className="form-control" value={status} onChange={e=>setStatus(e.target.value)} required>
                    <option value="">İş Geliştirme Durumu</option>
                    <option value="kurulum">Gelir Modeli Kurulumu</option>
                    <option value="optimizasyon">Mevcut Modelin Optimizasyonu</option>
                    <option value="global">Global Açılım Stratejisi</option>
                  </select>
                  <textarea className="form-control" rows={3} placeholder="Ekosistem hedeflerinizi özetleyin..." value={goal} onChange={e=>setGoal(e.target.value)} required />
                  <input type="text" className="form-control" placeholder="E-posta veya Telegram" value={contact} onChange={e=>setContact(e.target.value)} required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'MİMARİ ANALİZ EDİLİYOR...' : 'STRATEJİ ANALİZİ AL'}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us-section section-padding">
        <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" className="bg-img" alt="Expert Strategy" />
        <div className="overlay" style={{ background: 'rgba(0,0,0,0.92)' }}></div><div className="grad"></div>
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
                <h2 className="h2-style" style={{marginBottom: '20px'}}>Ticari Başarı Mimari</h2>
                <p className="p-style" style={{color: '#d1d5db', lineHeight: '1.8'}}>
                  Harika bir teknolojiye sahip olabilirsiniz, ancak sürdürülebilir bir iş modeliniz yoksa Web3 dünyasında kalıcı olamazsınız. Biz projenizi bir "yazılım" olmaktan çıkarıp, kendi ayakları üzerinde durabilen, gelir üreten ve ekosisteme değer katan profesyonel bir "işletme" haline getiriyoruz.
                </p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '24px'}}>
                  {["Gelir Akışları Tasarımı", "Maliyet Yapısı ve Finansal Modelleme", "Pazar Segmentasyonu"].map((li, i) => (
                    <li key={i} className="p-style" style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {li}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" alt="Business Architecture" />
              </div>
            </div>

            <div className="detail-item reverse">
              <div className="detail-text">
                <h2 className="h2-style" style={{marginBottom: '20px'}}>Global Rekabet Gücü</h2>
                <p className="p-style" style={{color: '#d1d5db', lineHeight: '1.8'}}>
                  Global ölçekte yüzlerce rakibiniz var. Sizi onlardan ayıracak olan sadece token grafiğiniz değil, projenizin sektörel duruşu ve uzun vadeli vizyonudur. Stratejik ortaklık kurgularımız ve büyüme modellerimizle sizi yerelden globale bir başarı hikayesi olarak taşıyoruz.
                </p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '24px'}}>
                  {["SWOT ve Rakip Analizi", "Partnerlik ve İş Geliştirme Planı", "Kullanıcı Sadakat Stratejileri"].map((li, i) => (
                    <li key={i} className="p-style" style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {li}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" alt="Market Competitive View" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{color: '#000'}}>Geleceğin Web3 Devleri Arasında Yerinizi Alın</h2>
          <p className="p-style" style={{color: '#555', maxWidth: '800px', margin: '20px auto 0'}}>
            İş modelinizi ve stratejinizi profesyonel bir bakış açısıyla kurgulamak için bugün ilk adımı atın. Projenizi sağlam temeller üzerine inşa edelim.
          </p>
          <a href="#h-hero" className="cta-btn">Stratejik Danışmanlık Al</a>
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

export default CryptoBusinessModelStrategySubDetailView;