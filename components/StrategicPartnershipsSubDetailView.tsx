import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const StrategicPartnershipsSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await evaluateProject('Stratejik Partnerlik', 'Sektörel devlerle iş birliği ve değer katma analizi.');
    setAiResult(result);
    setLoading(false);
  };

  const reasons = [
    { title: 'Küratörlü Partner Ağı', desc: 'Sadece "logo" değil, projenize gerçek değer, likidite ve kullanıcı katacak partnerleri seçiyoruz.', icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/> },
    { title: 'Müzakere ve Sözleşme Yönetimi', desc: 'Partnerlik şartlarını projeniz lehine optimize ediyor, ticari ve teknik protokolleri yönetiyoruz.', icon: <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"/> },
    { title: 'Sürdürülebilir Sinerji', desc: 'Tek seferlik duyurular yerine, her iki projenin de uzun vadeli büyümesini sağlayan entegrasyonlar kurguluyoruz.', icon: <path d="M13 10V3L4 14h7v7l9-11h-7z"/> }
  ];

  const faqs = [
    { q: "Doğru partneri nasıl seçiyorsunuz?", a: "Projenizin hedef kitlesi, teknik altyapısı ve eksik yönlerini analiz ederek, bu boşlukları en verimli şekilde dolduracak partnerleri match ediyoruz." },
    { q: "Partnerlik süreci ne kadar sürer?", a: "İlk tanıştırmadan resmi duyuruya kadar olan süreç, entegrasyonun kapsamına göre genellikle 2 ila 4 hafta arasındadır." },
    { q: "Borsalar partnerliklere önem veriyor mu?", a: "Evet, Tier-1 borsalar listeleme öncesi projenin ekosistemdeki ağırlığını ve hangi projelerle 'el sıkıştığını' mutlaka inceler." },
    { q: "Partnerliklerde maliyet oluşur mu?", a: "Genellikle karşılıklı değer takası (Cross-marketing) üzerine kurulu modeller geliştiriyoruz; ancak bazı durumlarda ortak havuz veya teknik maliyetler oluşabilir." },
    { q: "Küçük projeler büyük partnerler bulabilir mi?", a: "Doğru bir değer önermesi ve profesyonel bir sunum ile, niş bir alanda çözüm sunan projelerin devlerle partner olması mümkündür." }
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
        @media (min-width: 1024px) { 
            .detail-item { flex-direction: row; } 
            .detail-item.reverse { flex-direction: row-reverse; } 
            .detail-text, .detail-visual { width: 50%; flex: 1; }
        }
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
        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2832" className="bg-img" alt="Strategic Partnership Hero" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>Synergy Building</h5>
              <h1 className="h1-style">Stratejik Partnerlikler</h1>
              <p className="p-style">Web3 dünyasında "tek başına" olmak büyümenin en büyük engelidir. Projenize prestij ve güç katacak, ekosistemi genişletecek doğru partnerlerle köprüler kuruyoruz.</p>
              <div style={{marginTop: '30px'}}>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">HEDEF ODAKLI PARTNER EŞLEŞTİRME</span>
                </div>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">TİCARİ VE TEKNİK MÜZAKERE YÖNETİMİ</span>
                </div>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">UZUN VADELİ EKOSİSTEM ENTEGRASYONU</span>
                </div>
              </div>
            </div>
            <div className="form-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>Partnerlik Analizi Al</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Tekrar</button></div> : (
                <form onSubmit={handleSubmit}>
                  <input type="text" className="w-full border p-3 rounded-lg mb-4" placeholder="Proje Kategorisi (DeFi, GameFi, vb.)" required />
                  <textarea className="w-full border p-3 rounded-lg mb-4" rows={3} placeholder="Nasıl bir partnerlik (Teknik, Likidite, Marketing) arıyorsunuz?" required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'ARAŞTIRILIYOR...' : 'PARTNERLİK PLANI AL'}</button>
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
                <h2 className="h2-style">Doğru Kapıları Doğru Anahtarlarla Açın</h2>
                <p className="p-style">Piyasada binlerce proje varken hangisinin sizin için doğru partner olduğunu saptamak zaman alıcı olabilir. Biz, projenizin tokenomics ve teknik yapısıyla tam uyumlu, karşılıklı fayda sağlayacak partnerleri 5+ yıllık global networkümüzle buluyoruz.</p>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000" alt="Networking" />
              </div>
            </div>
            <div className="detail-item reverse">
              <div className="detail-text">
                <h2 className="h2-style">Lansman Öncesi Güç Birliği</h2>
                <p className="p-style">Güçlü bir partnerlik listesi, projenizin lansman anındaki güven skorunu doğrudan etkiler. Yatırımcıların ve borsaların en çok dikkat ettiği "Ekosistem Gücü"nü, projenize entegre ederek listeleme ve fon toplama şansınızı artırıyoruz.</p>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000" alt="Success Coordination" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style">Ekosisteminizi Devlerle Büyütelim</h2>
          <p className="p-style" style={{color: '#555', marginTop: '15px', maxWidth: '800px', margin: '15px auto 0'}}>Doğru bir partnerlik projenizin kaderini bir gecede değiştirebilir. Profesyonel BD (Business Development) desteği ile tanışın.</p>
          <a href="#h-hero" className="form-button" style={{display: 'inline-block', width: 'auto', padding: '18px 48px', marginTop: '30px', textDecoration: 'none'}}>Partnerlik Hattını Başlat</a>
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

export default StrategicPartnershipsSubDetailView;