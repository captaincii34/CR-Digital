import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const BlockchainNetworkSelectionSubDetailView: React.FC = () => {
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
    const result = await evaluateProject(status, `Ağ Seçimi: ${goal}`);
    setAiResult(result);
    setLoading(false);
  };

  const reasons = [
    {
      icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>,
      title: 'Maliyet Optimizasyonu',
      desc: 'İşlem ücretleri (gas fees) projenizin kullanıcı deneyimini bitirmesin. İşlem hacminize en ekonomik ağı seçiyoruz.'
    },
    {
      icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>,
      title: "Hız & Ölçeklenebilirlik",
      desc: 'Saniyede binlerce işlemi (TPS) destekleyen, geleceğin trafiğine hazır, tıkanıklık yaşamayan altyapılar kuruyoruz.'
    },
    {
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
      title: 'Ekosistem Uyumu',
      desc: 'Projenizin likidite hedeflerine göre; Ethereum, Solana, BNB veya Layer-2 ağları arasından en doğrusunu seçiyoruz.'
    }
  ];

  const faqs = [
    { q: "Hangi blokzinciri seçmeliyim?", a: "Bu tamamen projenizin türüne bağlıdır. DeFi projeleri likidite için Ethereum/Layer2 ağlarını, GameFi projeleri hız için Solana veya Polygon'u tercih edebilir." },
    { q: "Layer 2 çözümleri güvenli mi?", a: "Arbitrum, Optimism ve Base gibi ağlar Ethereum ana ağının güvenliğini devralırken çok düşük maliyet sunar. Bunları projenize en verimli şekilde entegre ediyoruz." },
    { q: "Ağlar arası köprü (Bridge) kuruyor musunuz?", a: "Evet, projenizin birden fazla ağda çalışabilmesi için güvenli multichain ve bridge mimarileri tasarlıyoruz." }
  ];

  return (
    <div className="crypto-detail-page">
      <style>{`
        .crypto-detail-page { background-color: #000; color: #fff; overflow-x: hidden; }
        .section-padding { padding: 120px 0; position: relative; }
        .container-xl { max-width: 1280px; margin: 0 auto; padding: 0 32px; width: 100%; position: relative; z-index: 10; }
        .bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.8); z-index: 1; }
        .grad { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent 40%, transparent 60%, #000); z-index: 2; }
        .h1-style { font-size: 40px !important; font-weight: 700 !important; }
        .h2-style { font-size: 32px !important; font-weight: 700 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; color: #d1d5db; }
        #h-hero { position: relative; padding: 220px 0 120px; min-height: 85vh; display: flex; align-items: center; }
        .hero-grid { display: flex; flex-direction: column; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { flex-direction: row; align-items: center; justify-content: space-between; } }
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; box-shadow: 0 40px 80px rgba(0,0,0,0.7); color: #000; width: 100%; max-width: 480px; margin: 0 auto; }
        .form-control { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; background: #fff; color: #000; margin-bottom: 16px; }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 18px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        .reason-card { padding: 48px 32px; border-radius: 24px; text-align: center; background: rgba(0,0,0,0.6); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); transition: 0.4s; }
        .reason-card:hover { transform: translateY(-10px); border-color: var(--cray-gold); background: rgba(255, 177, 0, 0.15); }
        .reason-icon-box { width: 60px; height: 60px; background-color: var(--cray-gold); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.3); }
        .info-detail-section { background: #050505; }
        .detail-row { display: flex; flex-direction: column; gap: 100px; }
        .detail-item { display: flex; flex-direction: column; gap: 60px; align-items: center; width: 100%; }
        @media (min-width: 1024px) { 
            .detail-item { flex-direction: row; } 
            .detail-item.reverse { flex-direction: row-reverse; } 
            .detail-text, .detail-visual { width: 50%; flex: 1; }
        }
        .detail-visual { border-radius: 32px; overflow: hidden; height: 500px; border: 1px solid rgba(255,177,0,0.2); position: relative; width: 100%; }
        .detail-visual img { width: 100%; height: 100%; object-fit: cover; }
        .cta-box-section { background: #f7f7f7; padding: 100px 0; color: #000; text-align: center; }
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      {/* 1. Hero */}
      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832" className="bg-img" alt="Network Selection" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div style={{flex: 1.2}}>
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>Altyapı Karar Destek</h5>
              <h1 className="h1-style">Blokzincir ve Ağ Seçimi</h1>
              <p className="p-style" style={{marginTop: '20px', lineHeight: '1.7'}}>Yanlış ağ seçimi projenizin sonu olabilir. Teknik ihtiyacınıza ve bütçenize en uygun blokzinciri veriye dayalı analizlerle sizin için belirliyoruz.</p>
              <div style={{marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '15px'}}>
                <span style={{background: 'rgba(255,177,0,0.1)', color: 'var(--cray-gold)', padding: '8px 16px', borderRadius: '30px', fontSize: '12px', fontWeight: 700}}>✓ EVM & NON-EVM ANALİZİ</span>
                <span style={{background: 'rgba(255,177,0,0.1)', color: 'var(--cray-gold)', padding: '8px 16px', borderRadius: '30px', fontSize: '12px', fontWeight: 700}}>✓ LAYER 2 STRATEJİLERİ</span>
              </div>
            </div>
            <div className="form-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>Ağ Uyumluluk Testi</h3>
              {aiResult ? <div className="p-style" style={{color: '#000'}}>{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Yeniden Dene</button></div> : (
                <form onSubmit={handleSubmit}>
                  <select className="form-control" required>
                    <option value="">Proje Türü</option><option value="defi">DeFi / Finans</option><option value="gamefi">GameFi / Oyun</option><option value="rwa">RWA (Gerçek Dünya Varlıkları)</option>
                  </select>
                  <textarea className="form-control" rows={3} placeholder="Beklenen günlük işlem hacmi ve kullanıcı sayısı..." value={goal} onChange={e=>setGoal(e.target.value)} required />
                  <input type="text" className="form-control" placeholder="E-posta veya Telegram" value={contact} onChange={e=>setContact(e.target.value)} required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'HESAPLANIYOR...' : 'EN UYGUN AĞI BUL'}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Box Section */}
      <section className="section-padding">
        <img src="https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=2000" className="bg-img" alt="Boxes Background" />
        <div className="overlay" style={{background: 'rgba(0,0,0,0.85)'}}></div>
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

      {/* 3. Detailed Content (Z-Pattern %50-%50) */}
      <section className="info-detail-section section-padding">
        <div className="container-xl">
          <div className="detail-row">
            <div className="detail-item">
              <div className="detail-text">
                <h2 className="h2-style">EVM vs Non-EVM Karar Süreci</h2>
                <p className="p-style" style={{marginTop: '24px', lineHeight: '1.8'}}>Ethereum Sanal Makinesi (EVM) uyumluluğu, geniş bir araç seti sunar. Ancak bazı yüksek performans gerektiren projeler için Solana veya TON gibi non-EVM yapılar çok daha yüksek verimlilik sağlayabilir.</p>
                <ul style={{marginTop: '32px', listStyle: 'none', padding: 0}}>
                   {["Geliştirici Ekosistem Analizi", "Likitide Derinliği Kontrolü", "Teknik Dokümantasyon Desteği"].map((item, i) => (
                    <li key={i} className="p-style" style={{marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=2000" alt="Block Selection" />
              </div>
            </div>

            <div className="detail-item reverse">
              <div className="detail-text">
                <h2 className="h2-style">Layer 2 ve Rollup Stratejileri</h2>
                <p className="p-style" style={{marginTop: '24px', lineHeight: '1.8'}}>Ana ağın güvenliğini korurken ölçeklenebilirliği artırmak için Arbitrum, Optimism veya Base gibi L2 çözümlerini projenize entegre ediyoruz. Kullanıcılarınıza düşük maliyetli deneyim sunun.</p>
                <ul style={{marginTop: '32px', listStyle: 'none', padding: 0}}>
                   {["Sıfıra Yakın Gas Fee", "Saniyelik Onay Süreleri", "Ethereum Güvenlik Standartları"].map((item, i) => (
                    <li key={i} className="p-style" style={{marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=2000" alt="Scalability" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Band */}
      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style">Hangi Ağda Başlayacağınızdan Emin Değil misiniz?</h2>
          <p className="p-style" style={{color: '#555', marginTop: '15px'}}>Teknik ekibimiz projenizi analiz etsin ve en verimli blokzincir ağını sizin için belirlesin.</p>
          <a href="#h-hero" className="form-button" style={{display: 'inline-block', width: 'auto', padding: '18px 48px', marginTop: '30px', textDecoration: 'none'}}>Ücretsiz Teknik Görüşme</a>
        </div>
      </section>

      {/* 5. FAQ */}
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
        <button onClick={() => window.location.hash = '#hizmetler/token-ve-blokzincir-gelistirme'} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase' }}>Geri Dön</button>
      </div>
    </div>
  );
};

export default BlockchainNetworkSelectionSubDetailView;