import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const TokenBlockchainDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const [blockchain, setBlockchain] = useState('');
  const [goal, setGoal] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await evaluateProject(status, `Blockchain Tercihi: ${blockchain}. Hedef: ${goal}`);
    setAiResult(result);
    setLoading(false);
  };

  const roadmapSteps = [
    { title: "Token Proje Danışmanlığı", desc: "Teknik ve iş modeli analizi.", icon: "💎" },
    { title: "Blokzincir & Ağ Seçimi", desc: "En uygun ağın belirlenmesi.", icon: "🔗" },
    { title: "Akıllı Kontrat Geliştirme", desc: "Güvenli ve optimize kod.", icon: "💻" },
    { title: "Tokenomics Tasarımı", desc: "Sürdürülebilir ekonomi.", icon: "📊" },
    { title: "Whitepaper & Litepaper", desc: "Profesyonel dokümanlar.", icon: "📄" },
    { title: "Pitch Deck Sunumları", desc: "Yatırımcı odaklı sunumlar.", icon: "📈" },
    { title: "Roadmap & GTM Planı", desc: "Pazara çıkış stratejisi.", icon: "🗺️" },
    { title: "Audit Hazırlık Süreçleri", desc: "Kontrat ön kontrolleri.", icon: "🛡️" }
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

  const advantages = [
    "Yatırımcı güveni",
    "Listeleme uyumu",
    "Sürdürülebilir büyüme",
    "Güçlü teknik altyapı"
  ];

  const faqs = [
    { q: "Hangi blokzinciri seçmeliyim?", a: "Projenizin hedeflerine, işlem hızı ihtiyacına ve maliyet beklentilerine göre birlikte analiz ederek karar veriyoruz." },
    { q: "Tokenomics’i siz mi hazırlıyorsunuz?", a: "Evet. Token ekonomisinin (arz, dağıtım, vesting, yakım mekanizmaları vb.) tamamını profesyonelce tasarlıyoruz." },
    { q: "Audit zorunlu mu?", a: "Her ciddi proje için şiddetle önerilir. Biz audit öncesi tüm teknik hazırlıkları ve ön kontrolleri yaparız." },
    { q: "Sadece token geliştirme hizmeti alabilir miyim?", a: "Evet. Ancak bu hizmet, A’dan Z’ye proje danışmanlığı yaklaşımımızın en temel teknik taşıdır." }
  ];

  return (
    <div className="crypto-detail-page">
      <style>{`
        .crypto-detail-page { background-color: #000; color: #fff; overflow-x: hidden; }
        .section-padding { padding: 80px 0; position: relative; }
        .container-xl { max-width: 1280px; margin: 0 auto; padding: 0 32px; width: 100%; position: relative; z-index: 10; }
        
        .bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.75); z-index: 1; }
        .grad { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent 40%, transparent 60%, #000); z-index: 2; }

        .h1-style { font-size: 40px !important; font-weight: 700 !important; }
        .h2-style { font-size: 30px !important; font-weight: 700 !important; }
        .h3-style { font-size: 22px !important; font-weight: 600 !important; }
        .h4-style { font-size: 18px !important; font-weight: 600 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; }

        #h-hero { position: relative; padding: 200px 0 100px; background-color: #000; min-height: 80vh; display: flex; align-items: center; }
        .hero-grid { display: flex; flex-direction: column; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { flex-direction: row; align-items: center; justify-content: space-between; } }
        
        .hero-text-content { flex: 1.2; }
        .hero-title { line-height: 1.1; margin-bottom: 24px; }
        .hero-desc { color: #d1d5db; line-height: 1.7; margin-bottom: 40px; max-width: 650px; }
        
        .hero-feature-list { display: flex; flex-direction: column; gap: 16px; margin-top: 32px; }
        .hero-feature-item { display: flex; align-items: center; gap: 12px; }
        .feature-icon-circle { width: 24px; height: 24px; background: var(--cray-gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .feature-item-text { color: #fff; font-weight: 700 !important; font-size: 11px !important; text-transform: uppercase; letter-spacing: 1px; }

        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; box-shadow: 0 40px 80px rgba(0,0,0,0.7); color: #000; width: 100%; max-width: 480px; margin: 0 auto; }
        .form-group { margin-bottom: 16px; }
        .form-control { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; background: #fff; color: #000; }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 18px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }

        /* Why Us Styles (Adapted from homepage WhyUsSection) */
        .why-us-section { position: relative; padding: 80px 0; background-color: #000; color: #fff; overflow: hidden; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        
        .reason-card {
            padding: 40px 32px;
            border-radius: 20px;
            text-align: center;
            transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
        }
        .reason-card:hover {
            background: rgba(255, 177, 0, 0.06);
            border-color: rgba(255, 177, 0, 0.3);
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .reason-icon-box {
            width: 54px;
            height: 54px;
            background-color: var(--cray-gold);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 24px;
            transition: 0.3s;
            box-shadow: 0 10px 20px rgba(255, 177, 0, 0.2);
        }
        .reason-card:hover .reason-icon-box { transform: rotate(10deg) scale(1.1); }
        .reason-title { margin-bottom: 16px; line-height: 1.3; font-weight: 700; }
        .reason-desc { color: #d1d5db; line-height: 1.6; font-size: 14px !important; }

        /* Scope Grid Section */
        .scope-section { position: relative; padding: 100px 0; overflow: hidden; background-color: #000; color: #fff; }
        .scope-header { text-align: center; margin-bottom: 64px; position: relative; z-index: 10; }
        .scope-grid { 
            display: grid; 
            grid-template-columns: 1fr; 
            gap: 24px; 
            position: relative; 
            z-index: 10; 
        }
        @media (min-width: 768px) { .scope-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .scope-grid { grid-template-columns: repeat(4, 1fr); } }
        
        .scope-card {
            padding: 32px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.15);
            text-align: center;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            transition: 0.3s;
            background: rgba(0,0,0,0.3);
            backdrop-filter: blur(5px);
        }
        .scope-card:hover {
            background: rgba(255, 177, 0, 0.05);
            border-color: var(--cray-gold);
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(255, 177, 0, 0.2);
        }
        .scope-icon { font-size: 40px; transition: 0.3s; }
        .scope-card:hover .scope-icon { transform: scale(1.1); }
        .scope-name { color: #fff; line-height: 1.25; font-weight: 700; transition: color 0.3s; }
        .scope-card:hover .scope-name { color: var(--cray-gold); }
        .scope-summary { color: #9ca3af; font-size: 13px !important; }

        .bant-section { background: #f9f9f9; padding: 60px 0; text-align: center; }
        .bant-btn { background: var(--cray-gold); color: #000; padding: 16px 32px; border-radius: 12px; font-weight: 700 !important; text-decoration: none; display: inline-block; box-shadow: 0 10px 30px rgba(255,177,0,0.3); }

        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
        .faq-accordion-body { padding: 0 24px 24px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      {/* Hero Section */}
      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop" className="bg-img" alt="Blockchain Tech" />
        <div className="overlay"></div>
        <div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text-content">
              <h1 className="hero-title h1-style">Token ve Blokzincir Geliştirme Hizmetleri</h1>
              <p className="hero-desc p-style">
                Bir kripto projesinin başarısı, doğru tasarlanmış token yapısı ve sağlam bir blokzincir altyapısıyla başlar. 
                Token fikrinizin konseptten üretime tüm sürecini profesyonel şekilde planlıyoruz.
              </p>
              
              <div className="hero-feature-list">
                {["Strateji + Teknik Geliştirme Birlikte", "Audit’e Hazır Altyapı", "Yatırımcı ve Listeleme Uyumlu Yapı", "A’dan Z’ye Proje Yaklaşımı"].map((item, i) => (
                  <div key={i} className="hero-feature-item">
                    <div className="feature-icon-circle">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="feature-item-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-card-container">
              <div className="form-card">
                <h3 className="h3-style" style={{textAlign: 'center', marginBottom: '24px'}}>Teknik Ön Değerlendirme</h3>
                {aiResult ? (
                  <div className="ai-result">
                    <p className="p-style" style={{ fontStyle: 'italic', marginBottom: '24px' }}>"{aiResult.summary}"</p>
                    <button onClick={() => setAiResult(null)} className="form-button">Yeniden Analiz Et</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <select className="form-control p-style" value={status} onChange={(e) => setStatus(e.target.value)} required>
                        <option value="">Proje Durumu Seçiniz</option>
                        <option value="yeni">Yeni token fikri</option>
                        <option value="geliştirme">Geliştirme aşamasında</option>
                        <option value="mevcut">Mevcut token / yeniden yapılandırma</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-control p-style" value={blockchain} onChange={(e) => setBlockchain(e.target.value)} required>
                        <option value="">Blockchain Tercihi</option>
                        <option value="kararsız">Kararsızım</option>
                        <option value="eth">Ethereum (ERC-20)</option>
                        <option value="bnb">BNB Chain (BEP-20)</option>
                        <option value="sol">Solana (SPL)</option>
                        <option value="diğer">Diğer</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control p-style" rows={3} placeholder="Proje hedefiniz nedir?" value={goal} onChange={(e) => setGoal(e.target.value)} required style={{resize: 'none'}} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control p-style" placeholder="E-posta / Telegram" value={contact} onChange={(e) => setContact(e.target.value)} required />
                    </div>
                    <button type="submit" disabled={loading} className="form-button">
                      {loading ? 'ANALİZ EDİLİYOR...' : 'DEĞERLENDİRME AL'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section (Replaced 'Hizmet Özetimiz') */}
      <section id="section-why" className="why-us-section section-padding">
        <img src="/gorsel/fh.jpg" alt="Why Us Background" className="bg-img" />
        <div className="overlay" style={{ background: 'rgba(0,0,0,0.75)' }}></div>
        <div className="grad"></div>
        <div className="container-xl">
          <h2 className="h2-style" style={{ textAlign: 'center', marginBottom: '60px' }}>Neden Bizimle Çalışmalısınız?</h2>
          <div className="reasons-grid">
            {reasons.map((reason, idx) => (
              <div key={idx} className="reason-card">
                <div className="reason-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {reason.icon}
                  </svg>
                </div>
                <h4 className="reason-title h4-style">{reason.title}</h4>
                <p className="reason-desc p-style">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Scope Section (Redesigned like Homepage Section 3) */}
      <section className="scope-section">
        <img src="/gorsel/ag1.jpg" alt="Scope Background" className="bg-img" />
        <div className="overlay" style={{ background: 'rgba(0,0,0,0.7)' }}></div>
        <div className="grad"></div>
        <div className="container-xl">
          <div className="scope-header">
            <h2 className="h2-style">Geliştirme Kapsamımız</h2>
            <p className="p-style" style={{ color: '#d1d5db', maxWidth: '800px', margin: '16px auto 0' }}>
              Aşağıda yer alan tüm hizmetler, Token ve Blokzincir Geliştirme sürecimizin parçalarıdır ve ihtiyaca göre tek tek veya bütüncül olarak sunulur.
            </p>
          </div>

          <div className="scope-grid">
            {roadmapSteps.map((step, i) => (
              <div key={i} className="scope-card">
                <div className="scope-icon">{step.icon}</div>
                <h4 className="scope-name h4-style">{step.title}</h4>
                <p className="scope-summary p-style">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Info Section */}
      <section className="section-padding" style={{borderTop: '1px solid rgba(255,177,0,0.1)'}}>
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="h2-style" style={{marginBottom: '24px'}}>Başarılı Bir Kripto Projesi, Sağlam Bir Temelle Başlar</h2>
              <p className="p-style" style={{marginBottom: '20px', color: '#d1d5db'}}>
                Yanlış tokenomics veya zayıf teknik altyapı; birçok projenin başarısız olmasının temel nedenidir. Biz projenizi sadece bugün için değil, uzun vadeli büyüme için inşa ederiz.
              </p>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {advantages.map((adv, i) => (
                  <li key={i} className="p-style" style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px'}}>
                    <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {adv}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1" style={{position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,177,0,0.2)', height: '440px'}}>
              <img src="https://images.unsplash.com/photo-1642104704074-907c0698bcd9?q=80&w=2000&auto=format&fit=crop" className="bg-img" alt="Solid Foundation Technical Visual" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bant-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{color: '#000', marginBottom: '16px'}}>Token ve Blokzincir Altyapınızı Profesyonel Şekilde Oluşturalım</h2>
          <p className="p-style" style={{color: '#333', marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px'}}>
            İster yeni bir token fikri, ister mevcut bir altyapının yeniden yapılandırılması olsun; doğru teknik yol haritasını birlikte oluşturalım.
          </p>
          <a href="#h-hero" className="bant-btn">Teknik Ön Değerlendirme Al</a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '40px'}}>Sıkça Sorulan Sorular</h2>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-accordion-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-accordion-header h4-style">
                  <span>{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cray-gold)" strokeWidth="3" style={{transform: openFaq === i ? 'rotate(180deg)' : ''}}>
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="faq-accordion-body p-style">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ padding: '60px 0', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '14px !important' }}>
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  );
};

export default TokenBlockchainDetailView;