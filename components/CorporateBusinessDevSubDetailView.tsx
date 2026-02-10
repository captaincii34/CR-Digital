import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const CorporateBusinessDevSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const [targetSector, setTargetSector] = useState('');
  const [goal, setGoal] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await evaluateProject(status, `Hedef Sektör: ${targetSector}. Hedef: ${goal}`);
    setAiResult(result);
    setLoading(false);
  };

  const scope = [
    { title: "Stratejik Partnerlikler", desc: "Sektörün devleri ile projenize değer katacak uzun vadeli iş birlikleri.", icon: "💎" },
    { title: "Ekosistem İş Birlikleri", desc: "Layer-1/Layer-2 ağları ve ekosistem fonları ile entegrasyon desteği.", icon: "🔗" },
    { title: "Cross-Marketing", desc: "Partner projelerle ortak kitle paylaşımı ve ortak pazarlama kampanyaları.", icon: "🔄" },
    { title: "Kurumsal İş Geliştirme", desc: "Geleneksel şirketlerin Web3 dönüşümünde projenizle eşleştirilmesi.", icon: "🏛️" }
  ];

  const reasons = [
    // Fix: Using double quotes to safely include single quotes in the string
    { title: "Web2'den Web3'e Köprü", desc: 'Geleneksel dev şirketlerin projenizle entegrasyonunu ve gerçek dünya kullanımını sağlıyoruz.', icon: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/> },
    { title: 'Kurumsal Güven ve İtibar', desc: 'Projenizi büyük markaların ve kurumların çalışma standartlarına uyumlu hale getirerek prestijinizi artırıyoruz.', icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/> },
    // Fix: Using double quotes to safely include single quotes in the string
    { title: "Gerçek Dünya Utility'si", desc: 'Tokenınızın sadece borsada değil, gerçek hayattaki hizmetlerde ve kurumlarda kullanılmasını sağlayan modeller kuruyoruz.', icon: <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/> }
  ];

  const faqs = [
    { q: "Kurumsal iş geliştirme neden gereklidir?", a: "Projenizin sadece kripto topluluğuna değil, gerçek dünya ekonomisine entegre olması, tokenınızın uzun vadeli hayatta kalmasını sağlar." },
    { q: "Hangi sektörlerde kurumsal bağlantı sağlıyorsunuz?", a: "E-ticaret, oyun, finans, lojistik ve sanat başta olmak üzere birçok geleneksel sektördeki Web3 dönüşümüne hakimiz." },
    { q: "Şirketlerle yapılan iş birlikleri borsa listelemesine yardımcı olur mu?", a: "Kesinlikle. 'Real World Adoption' kanıtı olan projeler, Tier-1 borsaların listeleme listelerinde her zaman ilk sıradadır." },
    { q: "Hukuki uyum desteği veriyor musunuz?", a: "Evet, kurumsal şirketlerin kripto regülasyonları konusundaki hassasiyetini biliyor ve projenizi bu standartlara uygun dökümante ediyoruz." },
    { q: "Kurumsal bir partner bulmak ne kadar sürer?", a: "Kurumsal süreçler Web3'e göre daha yavaş işler; stratejik bir ortaklığın olgunlaşması genellikle 3 ila 6 ay arasındadır." }
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
        .hero-grid { display: flex; flex-direction: column; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { flex-direction: row; align-items: center; justify-content: space-between; } }
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; color: #000; width: 100%; max-width: 480px; margin: 0 auto; box-shadow: 0 40px 80px rgba(0,0,0,0.7); }
        .form-control { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; background: #fff; color: #000; margin-bottom: 16px; }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 18px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }
        
        .why-us-section { position: relative; background-color: #000; overflow: hidden; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        .reason-card { padding: 48px 32px; border-radius: 24px; text-align: center; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); transition: 0.4s; }
        .reason-card:hover { transform: translateY(-10px); border-color: var(--cray-gold); background: rgba(255, 177, 0, 0.08); }
        .reason-icon-box { width: 60px; height: 60px; background-color: var(--cray-gold); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.3); }
        
        .scope-section { position: relative; padding: 120px 0; overflow: hidden; background-color: #000; }
        .scope-grid { display: grid; grid-template-columns: 1fr; gap: 24px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .scope-grid { grid-template-columns: repeat(2, 1fr); } }
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
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2959210?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Partnerships Hero" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>Institutional Adoption</h5>
              <h1 className="h1-style">Kurumsal İş Geliştirme</h1>
              <p className="p-style">Projenizi sadece kripto baloncuklarının içinde tutmayın. Onu dev şirketlerin, kurumların ve gerçek ekonomi aktörlerinin kullanımına sunarak kitlesel adaptasyonu (Mass Adoption) sağlıyoruz.</p>
              <div style={{marginTop: '30px'}}>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">GELENEKSEL ŞİRKET WEB3 ENTEGRASYONU</span>
                </div>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">KURUMSAL STANDARTLARDA BD YÖNETİMİ</span>
                </div>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">STRATEJİK MARKA ORTAKLIKLARI</span>
                </div>
              </div>
            </div>
            <div className="form-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>Kurumsal Analiz Al</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Tekrar</button></div> : (
                <form onSubmit={handleSubmit}>
                  <input type="text" className="w-full border p-3 rounded-lg mb-4" placeholder="Hedef Sektör" required />
                  <textarea className="w-full border p-3 rounded-lg mb-4" rows={3} placeholder="Geleneksel bir şirketle ne tür bir sinerji hedefliyorsunuz?" required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'ARAŞTIRILIYOR...' : 'KURUMSAL PLANI AL'}</button>
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
                <h2 className="h2-style">Gerçek Dünyada Değer Yaratan Tokenomics</h2>
                <p className="p-style">Tokenınızın değerini sadece spekülasyon değil, gerçek dünyadaki bir kullanım alanı (utility) belirlesin. Geleneksel şirketlerle kuracağımız iş birlikleri sayesinde tokenınızın bir ödeme aracı, sadakat puanı veya erişim anahtarı olarak kullanılmasını sağlıyoruz.</p>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000" alt="Enterprise Adoption" />
              </div>
            </div>
            <div className="detail-item reverse">
              <div className="detail-text">
                <h2 className="h2-style">Kurumsal İletişim ve Güven</h2>
                <p className="p-style">Web2 şirketleri Web3 projelerine genellikle çekinerek yaklaşır. Biz projenizi kurumsal dilde ("corporate tongue") anlatıyor, hukuki uyumluluğunuzu ve teknik güvenliğinizi kanıtlayarak büyük markaların projenize güvenmesini sağlıyoruz.</p>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2959210?q=80&w=2000" alt="Institutional Trust" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style">Projenizi Kurumsal Devlerin Radarına Taşıyalım</h2>
          <p className="p-style" style={{color: '#555', marginTop: '15px', maxWidth: '800px', margin: '15px auto 0'}}>Geleceğin ekonomisinde yer almak için kurumsal iş birlikleri en güçlü araçtır. Sektörünüzdeki Web2 devleriyle projenizi eşleştirmek için hemen iletişime geçin.</p>
          <a href="#h-hero" className="form-button" style={{display: 'inline-block', width: 'auto', padding: '18px 48px', marginTop: '30px', textDecoration: 'none'}}>Kurumsal BD Hattını Başlat</a>
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
        <button onClick={() => window.location.hash = '#hizmetler/is-ortakliklari-ve-is-gelistirme'} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase' }}>Geri Dön</button>
      </div>
    </div>
  );
};

export default CorporateBusinessDevSubDetailView;