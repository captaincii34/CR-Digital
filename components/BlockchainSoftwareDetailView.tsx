import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const BlockchainSoftwareDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const [techStack, setTechStack] = useState('');
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
    const result = await evaluateProject(status, `Teknoloji İhtiyacı: ${techStack}. Hedef: ${goal}`);
    setAiResult(result);
    setLoading(false);
  };

  const scopeCategories = [
    {
      title: "Blokzincir Geliştirme",
      items: [
        { name: "Akıllı Kontrat Geliştirme", desc: "Solidity ve Rust ile güvenli mimari.", icon: "📜" },
        { name: "Token & NFT Kontratları", desc: "ERC-20, ERC-721 ve özel standartlar.", icon: "🎨" },
        { name: "Merkeziyetsiz Uygulama (DApp)", desc: "Web3 tabanlı uçtan uca çözümler.", icon: "🌐" },
        { name: "DAO Altyapı Kurulumu", desc: "Yönetişim ve oylama sistemleri.", icon: "🏛️" },
        { name: "Cüzdan Entegrasyonları", desc: "MetaMask, WalletConnect ve dahası.", icon: "👛" }
      ]
    },
    {
      title: "Web3 & Platform Yazılımları",
      items: [
        { name: "Web3 Uyumlu Website", desc: "Modern ve bağlantı odaklı arayüzler.", icon: "💻" },
        { name: "Özel Yönetim Panelleri", desc: "Blockchain veri odaklı admin araçları.", icon: "📊" },
        { name: "Analitik & Raporlama", desc: "On-chain veri izleme ve görselleştirme.", icon: "📈" },
        { name: "Backend & API", desc: "Ölçeklenebilir Web3 API servisleri.", icon: "⚙️" }
      ]
    },
    {
      title: "Uygulama & Oyun Geliştirme",
      items: [
        { name: "Web3 Mobil Uygulama", desc: "iOS ve Android için Web3 deneyimi.", icon: "📱" },
        { name: "Telegram Bot & Mini App", desc: "TON ekosisteminde viral çözümler.", icon: "✈️" },
        { name: "Blokzincir Tabanlı Oyun", desc: "On-chain oyun mekanikleri.", icon: "🎮" },
        { name: "GameFi Sistemleri", desc: "Play-to-Earn ve ekonomi kurguları.", icon: "🪙" },
        { name: "Sunucu & Altyapı", desc: "Yüksek performanslı node ve sunucu yönetimi.", icon: "🖥️" }
      ]
    }
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
    { q: "Hangi dilleri kullanıyorsunuz?", a: "Smart contract tarafında Solidity ve Rust; frontend tarafında React/Next.js; backend tarafında ise Node.js ve Go dillerini tercih ediyoruz." },
    { q: "Telegram Mini App geliştiriyor musunuz?", a: "Evet, TON (The Open Network) ekosisteminde çalışan yüksek etkileşimli Mini App'ler ve botlar geliştiriyoruz." },
    { q: "Mevcut web sitemi Web3'e taşıyabilir misiniz?", a: "Evet, mevcut altyapınıza cüzdan bağlantısı ve akıllı kontrat entegrasyonu ekleyerek Web3 dönüşümünü sağlıyoruz." },
    { q: "Uygulama güvenliğini nasıl sağlıyorsunuz?", a: "Tüm kodlarımızı audit standartlarında geliştiriyor ve teslim öncesi derinlemesine penetrasyon testlerinden geçiriyoruz." }
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

        .why-us-section { position: relative; padding: 80px 0; background-color: #000; color: #fff; overflow: hidden; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        
        .reason-card { padding: 40px 32px; border-radius: 20px; text-align: center; transition: 0.4s; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); }
        .reason-card:hover { background: rgba(255, 177, 0, 0.06); border-color: rgba(255, 177, 0, 0.3); transform: translateY(-8px); }
        .reason-icon-box { width: 54px; height: 54px; background-color: var(--cray-gold); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.2); }

        .scope-section { position: relative; padding: 100px 0; background-color: #000; }
        .scope-cat-title { color: var(--cray-gold); text-transform: uppercase; letter-spacing: 2px; font-weight: 800; margin: 48px 0 24px; border-bottom: 2px solid rgba(255,177,0,0.2); padding-bottom: 10px; }
        .scope-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 768px) { .scope-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .scope-grid { grid-template-columns: repeat(3, 1fr); } }
        
        .scope-card { padding: 24px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255,255,255,0.02); transition: 0.3s; display: flex; gap: 16px; align-items: flex-start; }
        .scope-card:hover { border-color: var(--cray-gold); background: rgba(255,177,0,0.03); transform: translateX(5px); }
        .scope-card-icon { font-size: 24px; }
        .scope-card-name { font-weight: 700; color: #fff; margin-bottom: 4px; }
        .scope-card-desc { font-size: 13px !important; color: #9ca3af; }

        .bant-section { background: #f9f9f9; padding: 60px 0; text-align: center; }
        .bant-btn { background: var(--cray-gold); color: #000; padding: 16px 32px; border-radius: 12px; font-weight: 700 !important; text-decoration: none; display: inline-block; }

        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
        .faq-accordion-body { padding: 0 24px 24px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      {/* Hero Section */}
      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Software Development" />
        <div className="overlay"></div>
        <div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text-content">
              <h1 className="hero-title h1-style">Blokzincir ve Yazılım Geliştirme Çözümleri</h1>
              <p className="hero-desc p-style">
                Sadece kod yazmıyoruz; geleceğin merkeziyetsiz dünyasını inşa ediyoruz. Akıllı kontratlardan mobil uygulamalara, Web3 tabanlı her türlü yazılım ihtiyacınızda uzman mühendis kadromuzla yanınızdayız.
              </p>
              
              <div className="hero-feature-list">
                {["Uçtan Uca Web3 Mühendisliği", "Telegram Mini App Uzmanlığı", "Güvenlik Odaklı Kodlama", "Ölçeklenebilir Altyapı"].map((item, i) => (
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
                <h3 className="h3-style" style={{textAlign: 'center', marginBottom: '24px'}}>Proje Analizi İsteyin</h3>
                {aiResult ? (
                  <div className="ai-result">
                    <p className="p-style" style={{ fontStyle: 'italic', marginBottom: '24px' }}>"{aiResult.summary}"</p>
                    <button onClick={() => setAiResult(null)} className="form-button">Yeniden Analiz Et</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <select className="form-control p-style" value={status} onChange={(e) => setStatus(e.target.value)} required>
                        <option value="">İhtiyaç Türü Seçiniz</option>
                        <option value="yeni">Sıfırdan Geliştirme</option>
                        <option value="ekleme">Mevcut Altyapıya Web3 Entegrasyonu</option>
                        <option value="audit">Kod İyileştirme / Audit Hazırlık</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control p-style" placeholder="Tercih Edilen Teknoloji (Solidity, TON vb.)" value={techStack} onChange={(e) => setTechStack(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control p-style" rows={3} placeholder="Geliştirmek istediğiniz ürün nedir?" value={goal} onChange={(e) => setGoal(e.target.value)} required style={{resize: 'none'}} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control p-style" placeholder="E-posta / Telegram" value={contact} onChange={(e) => setContact(e.target.value)} required />
                    </div>
                    <button type="submit" disabled={loading} className="form-button">
                      {loading ? 'ANALİZ EDİLİYOR...' : 'GELİŞTİRME ANALİZİ AL'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="section-why" className="why-us-section section-padding">
        <img src="/gorsel/fh.jpg" alt="Why Us Background" className="bg-img" />
        <div className="overlay"></div>
        <div className="grad"></div>
        <div className="container-xl">
          <h2 className="h2-style" style={{ textAlign: 'center', marginBottom: '60px' }}>Yazılımda Neden Cray Digital?</h2>
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

      {/* Development Scope Section */}
      <section className="scope-section section-padding">
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="h2-style">Geliştirme Kapsamımız</h2>
            <p className="p-style" style={{ color: '#d1d5db', maxWidth: '800px', margin: '16px auto 0' }}>
              Blokzincir dünyasındaki tüm teknik ihtiyaçlarınızı karşılayan geniş spektrumlu mühendislik hizmetlerimiz.
            </p>
          </div>

          {scopeCategories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="scope-cat-title h3-style">🔹 {cat.title}</h3>
              <div className="scope-grid">
                {cat.items.map((item, i) => (
                  <div key={i} className="scope-card">
                    <span className="scope-card-icon">{item.icon}</span>
                    <div>
                      <h4 className="scope-card-name h4-style">{item.name}</h4>
                      <p className="scope-card-desc p-style">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="bant-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{color: '#000', marginBottom: '16px'}}>Geleceği Birlikte İnşa Edelim</h2>
          <p className="p-style" style={{color: '#333', marginBottom: '32px'}}>
            Projenizin teknik altyapısını Web3 dünyasının en güncel teknolojileriyle kurgulayın.
          </p>
          <a href="#h-hero" className="bant-btn">Teknik Görüşme Planla</a>
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

export default BlockchainSoftwareDetailView;