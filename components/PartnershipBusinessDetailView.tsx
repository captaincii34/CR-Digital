import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const PartnershipBusinessDetailView: React.FC = () => {
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
    { q: "Hangi ekosistemlerle partnerlik yapıyorsunuz?", a: "Ethereum, Solana, TON, BNB Chain ve Polygon gibi tüm majör ağların ekosistemleriyle doğrudan bağlantılarımız var." },
    { q: "Grant (hibe) süreçlerini yönetiyor musunuz?", a: "Evet, Layer-1 ve Layer-2 ağlarından hibe almak için gereken teknik ve ticari başvuruları koordine ediyoruz." },
    { q: "Partnerliklerin faydası nedir?", a: "Güvenilirliğinizi artırır, yeni kitlelere erişim sağlar ve teknik entegrasyon maliyetlerini düşürür." }
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
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; color: #000; width: 100%; max-width: 480px; margin: 0 auto; box-shadow: 0 40px 80px rgba(0,0,0,0.7); }
        .form-control { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; background: #fff; color: #000; margin-bottom: 16px; }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 18px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }
        
        .why-us-section { position: relative; padding: 120px 0; background-color: #000; overflow: hidden; }
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
            <div className="hero-text-content">
              <h1 className="h1-style">İş Ortaklıkları ve İş Geliştirme</h1>
              <p className="hero-desc p-style">Yalnız gidersen hızlı gidersin, ama birlikte gidersen uzağa gidersin. Doğru ortaklıklarla projenizin ekosistem etkisini maksimize edin.</p>
              
              <div className="hero-feature-list">
                {["Ekosistem & L1/L2 İş Birlikleri", "Stratejik Partnerlik Kurulumu", "Cross-Marketing Planlaması", "Hibe (Grant) Danışmanlığı"].map((item, i) => (
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
              <h3 className="h3-style" style={{textAlign: 'center', marginBottom: '20px'}}>Partnerlik Analizi</h3>
              <form onSubmit={handleSubmit}>
                <select className="form-control" value={status} onChange={e=>setStatus(e.target.value)} required>
                  <option value="">İş Geliştirme Aşaması</option><option value="baslangıc">Network Kurulumu</option><option value="buyume">Partnerlik Genişletme</option>
                </select>
                <input type="text" className="form-control" placeholder="Hedef Sektör/Ekosistem" value={targetSector} onChange={e=>setTargetSector(e.target.value)} />
                <textarea className="form-control" rows={3} placeholder="Ne Tür Partnerler Arıyorsunuz?" value={goal} onChange={e=>setGoal(e.target.value)} required />
                <input type="text" className="form-control" placeholder="Telegram/E-posta" value={contact} onChange={e=>setContact(e.target.value)} required />
                <button type="submit" className="form-button">{loading ? 'İŞLENİYOR...' : 'BD STRATEJİSİ AL'}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section">
        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Partnerships Visual" />
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
        <img src="/gorsel/ag1.jpg" alt="Scope Background" className="bg-img" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '60px'}}>Hizmet Kapsamımız</h2>
          <div className="scope-grid">
            {scope.map((s, i) => (
              <div key={i} className="scope-card">
                <div style={{fontSize: '40px', marginBottom: '20px'}}>{s.icon}</div>
                <h4 className="h4-style">{s.title}</h4><p className="p-style" style={{fontSize: '13px'}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{background: 'rgba(255,255,255,0.01)'}}>
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="h2-style" style={{marginBottom: '28px'}}>Ekosistem Genişlemesi</h2>
              <p className="p-style" style={{marginBottom: '24px', color: '#d1d5db'}}>
                Web3'te iş geliştirme, sadece satış yapmak değil, bir ekosistemin parçası olmaktır. Biz projenizi devler ligine taşıyacak bağlantıları kuruyoruz.
              </p>
              <ul style={{listStyle: 'none', padding: 0}}>
                {["L1/L2 Vakıf İlişkileri", "Hibe (Grant) Danışmanlığı", "Ortak Marka Kampanyaları"].map((item, i) => (
                  <li key={i} className="p-style" style={{display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px'}}>
                    <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1" style={{position: 'relative', borderRadius: '32px', overflow: 'hidden', height: '400px', border: '1px solid rgba(255,177,0,0.2)'}}>
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2959210?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Partnerships Visual" />
            </div>
          </div>
        </div>
      </section>

      <section className="bant-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{color: '#000', marginBottom: '20px'}}>Eksosisteminizi Birlikte İnşa Edelim</h2>
          <a href="#h-hero" className="bant-btn">Network Analizi Al</a>
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

export default PartnershipBusinessDetailView;