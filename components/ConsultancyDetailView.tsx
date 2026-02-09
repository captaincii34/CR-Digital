import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const ConsultancyDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState('');
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
    const result = await evaluateProject(status, goal);
    setAiResult(result);
    setLoading(false);
  };

  const roadmapSteps = [
    { title: "Kripto Proje Danışmanlığı", desc: "Projenizin genel çerçevesini belirler, hedefleri ve potansiyeli analiz ederiz.", link: "#crypto-proje-danismanlik" },
    { title: "Kripto Fikir ve Konsept Danışmanlığı", desc: "Fikrinizin teknik uygulanabilirliği ve pazar karşılığı değerlendirilir.", link: "#kripto-fikir-danismanlik" },
    { title: "Kripto İş Modeli ve Strateji Danışmanlığı", desc: "Sürdürülebilir bir ekosistem yapısı ve gelir modeli kurgularız.", link: "#kripto-is-modeli-danismanlik" },
    { title: "Kripto Yol Haritası ve Tocenomics Danışmanlığı", desc: "Token ekonomisi ve teknik kilometre taşlarını planlarız.", link: "#kripto-yol-haritasi-danismanlik" },
    { title: "Bütçe Odaklı Kripto Proje Danışmanlığı", desc: "Mevcut bütçenize göre en verimli ilerleme yolunu belirleriz.", link: "#butce-odakli-danismanlik" },
    { title: "Uçtan Uca Kripto Proje Yönetim Danışmanlığı", desc: "Tüm süreçlerin profesyonel ekiplerce koordine edilmesini sağlarız.", link: "#uctan-uca-danismanlik" },
    { title: "Lansman ve Büyüme Danışmanlığı", desc: "Piyasaya giriş stratejileri ve ölçeklenebilir büyüme planları.", link: "#lansman-buyume-danismanlik" },
    { title: "Dijital Pazarlama ve Tanıtım Danışmanlığı", desc: "Görünürlük, marka bilinirliği ve kullanıcı edinimi çalışmaları.", link: "#dijital-pazarlama-danismanlik" }
  ];

  const whoBoxes = [
    "Kripto projesi fikri olan ama nereden başlayacağını bilmeyenler",
    "Teknik, pazarlama veya strateji ekibi olmayan ekipler",
    "Bütçesi sınırlı ama doğru planla ilerlemek isteyenler",
    "Mevcut projesini profesyonel seviyeye taşımak isteyenler",
    "Yatırım veya launch sürecine hazırlanan Web3 projeleri"
  ];

  const advantages = [
    "Parça parça ajanslarla uğraşmazsınız",
    "Zaman ve bütçe kaybı yaşamazsınız",
    "Tüm ekip aynı hedefe odaklanır",
    "Tutarlı marka ve büyüme elde edersiniz",
    "Projeniz kontrol altında ilerler"
  ];

  const faqs = [
    { q: "A'dan Z'ye danışmanlık ne kadar sürer?", a: "Projenin kapsamına ve teknik gereksinimlerine göre değişmekle birlikte, fikir aşamasından lansman aşamasına gelmek genellikle 3 ila 6 ay sürer." },
    { q: "Sadece belirli bir aşama için hizmet alabilir miyim?", a: "Evet, ancak bu paketimiz uçtan uca çözüm arayan ve projesinin her adımının profesyonelce koordine edilmesini isteyen projeler içindir." },
    { q: "Bütçem kısıtlıysa ne yapmalıyım?", a: "Bütçe odaklı proje yapılandırması yapıyoruz. Önemli olan bütçenizin miktarı değil, o bütçeyi en doğru hedeflere harcamaktır." },
    { q: "NDA (Gizlilik Sözleşmesi) imzalıyor musunuz?", a: "Kesinlikle. Süreç başlamadan önce tüm fikir ve verileriniz yasal koruma altına alınır." }
  ];

  return (
    <div className="crypto-detail-page">
      <style>{`
        .crypto-detail-page { background-color: #000; color: #fff; overflow-x: hidden; }
        .section-padding {
            padding: 60px 0;
            position: relative;
        }
        .container-xl { max-width: 1280px; margin: 0 auto; padding: 0 32px; width: 100%; position: relative; z-index: 10; }
        
        /* Ortak Arkaplan Stilleri */
        .bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.75); z-index: 1; }
        .grad { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent 40%, transparent 60%, #000); z-index: 2; }

        /* Typography Hiyerarşisi */
        .h1-style { font-size: 40px !important; font-weight: 700 !important; }
        .h2-style { font-size: 30px !important; font-weight: 700 !important; }
        .h3-style { font-size: 22px !important; font-weight: 600 !important; }
        .h4-style { font-size: 18px !important; font-weight: 600 !important; }
        .h5-style { font-size: 14px !important; font-weight: 600 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; }

        /* 1) h-hero */
        #h-hero {
            position: relative;
            padding: 200px 0 60px;
            background-color: #000;
            min-height: 100vh;
            display: flex;
            align-items: center;
        }
        
        .hero-grid { display: flex; flex-direction: column; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { flex-direction: row; align-items: center; justify-content: space-between; } }
        
        .hero-text-content { flex: 1.2; }
        .hero-badge { color: var(--cray-gold); text-transform: uppercase; letter-spacing: 4px; margin-bottom: 20px; }
        .hero-title { line-height: 1.1; margin-bottom: 20px; }
        .hero-subtitle { color: var(--cray-gold); margin-bottom: 12px; }
        .hero-desc { color: #d1d5db; line-height: 1.7; margin-bottom: 40px; max-width: 650px; }
        
        .hero-feature-list { display: flex; flex-direction: column; gap: 16px; margin-top: 32px; }
        .hero-feature-item { display: flex; align-items: center; gap: 12px; }
        .feature-icon-circle { width: 24px; height: 24px; background: var(--cray-gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .feature-icon-svg { width: 12px; height: 12px; stroke: #000; stroke-width: 4px; fill: none; }
        .feature-item-text { color: #fff; font-weight: 700 !important; font-size: 11px !important; text-transform: uppercase; letter-spacing: 1px; }

        .form-card-container { flex: 0.8; width: 100%; max-width: 480px; margin: 0 auto; }
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 48px; box-shadow: 0 40px 80px rgba(0,0,0,0.7); color: #000; }
        .form-header-title { text-align: center; margin-bottom: 24px; color: #000; }
        
        .form-group { margin-bottom: 20px; }
        .form-control { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; background: #fff; color: #000; transition: border-color 0.3s; }
        .form-control:focus { outline: none; border-color: var(--cray-gold); }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 20px; border-radius: 12px; font-weight: 700 !important; text-transform: uppercase; cursor: pointer; transition: 0.3s; border: none; letter-spacing: 1px; margin-top: 10px; }
        .form-button:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(255,177,0,0.4); }

        /* 2) h-section1 */
        #h-section1 { background: #000; overflow: hidden; }
        .section-title-center { text-align: center; margin-bottom: 60px; }
        .who-container { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
        .who-item { flex: 1 1 200px; max-width: 240px; padding: 32px 24px; border-radius: 20px; text-align: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); display: flex; align-items: center; justify-content: center; min-height: 180px; color: #fff; line-height: 1.4; backdrop-filter: blur(10px); }
        .who-item:hover { border-color: rgba(255,177,0,0.6); background: rgba(255,177,0,0.12); transform: translateY(-10px); box-shadow: 0 15px 35px rgba(0,0,0,0.5); }

        /* 3) h-consultant2 */
        #h-consultant2 { background: #050505; }
        .roadmap-wrapper { position: relative; max-width: 1000px; margin: 40px auto 0; padding: 40px 0; }
        .roadmap-track { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, transparent, var(--cray-gold), transparent); transform: translateX(-50%); opacity: 0.4; }
        .roadmap-node { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; position: relative; }
        .roadmap-node:nth-child(even) { flex-direction: row-reverse; }
        
        .roadmap-step-card { 
          width: 44%; 
          background: rgba(255,255,255,0.02); 
          border: 1px solid rgba(255,255,255,0.05); 
          padding: 32px; 
          border-radius: 24px; 
          transition: 0.3s; 
          text-decoration: none; 
          display: block; 
          cursor: pointer;
        }
        .roadmap-step-card:hover {
          background: rgba(255,177,0,0.05);
          border-color: rgba(255,177,0,0.3);
          transform: scale(1.02);
        }

        .roadmap-marker { width: 20px; height: 20px; background: var(--cray-gold); border: 4px solid #000; border-radius: 50%; z-index: 5; box-shadow: 0 0 15px var(--cray-gold); position: absolute; left: 50%; transform: translateX(-50%); }
        .step-num { color: var(--cray-gold); font-weight: 900 !important; font-size: 28px !important; margin-bottom: 8px; opacity: 0.4; line-height: 1; }
        .step-heading { margin-bottom: 12px; color: #fff; }
        .step-para { color: #9ca3af; line-height: 1.6; margin: 0; }

        /* 4) h-section3 */
        #h-section3 { border-top: 1px solid rgba(255,177,0,0.1); background: linear-gradient(to bottom, rgba(255,177,0,0.07), transparent); }
        .info-split-layout { display: flex; flex-direction: column; gap: 60px; align-items: center; }
        @media (min-width: 1024px) { .info-split-layout { flex-direction: row; } }
        .info-split-text { flex: 1.1; }
        .info-split-visual { flex: 0.9; position: relative; width: 100%; max-width: 600px; height: 440px; border-radius: 24px; overflow: hidden; border: 1px solid rgba(255,177,0,0.2); box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
        .info-split-image { width: 100%; height: 100%; object-fit: cover; }
        
        .adv-list { list-style: none; padding: 0; margin: 24px 0; display: flex; flex-direction: column; gap: 8px; }
        .adv-item { display: flex; align-items: center; gap: 16px; }
        .adv-check { color: var(--cray-gold); font-size: 18px !important; font-weight: 800 !important; }
        .adv-text { color: #e5e7eb; }

        /* 5) h-bant4 */
        #h-bant4 {
            background: #f9f9f9;
            padding: 60px 0;
            text-align: center;
        }
        .bant-header { color: #000; margin-bottom: 40px; line-height: 1.25; }
        .bant-btn {
            background: var(--cray-gold);
            color: #000;
            padding: 12px 18px;
            border-radius: 11px;
            font-weight: 600 !important;
            text-transform: capitalize;
            display: inline-block;
            text-decoration: none;
            transition: 0.3s;
            box-shadow: 0 15px 35px rgba(255, 177, 0, 0.4);
            letter-spacing: 0px;
        }
        .bant-btn:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(255,177,0,0.5); }

        /* 6) h-faq5 */
        #h-faq5 { background: #000; }
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 18px; margin-bottom: 16px; transition: 0.3s; overflow: hidden; }
        .faq-accordion-header { padding: 28px 32px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none; }
        .faq-accordion-body { padding: 0 32px 32px; color: #9ca3af; line-height: 1.7; display: none; }
        .faq-accordion-item.active { border-color: rgba(255,177,0,0.4); background: #0c0c0e; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-arrow { transition: transform 0.3s; color: var(--cray-gold); }
        .faq-accordion-item.active .faq-arrow { transform: rotate(180deg); }
      `}</style>

      {/* 1) h-hero */}
      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop" className="bg-img" alt="Crypto Consultancy Hero" />
        <div className="overlay" style={{ background: 'rgba(0,0,0,0.7)' }}></div>
        <div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text-content">
              <h5 className="hero-badge h5-style">Uçtan Uca Proje Ortaklığı</h5>
              <h1 className="hero-title h1-style">A'dan Z'ye Crypto Proje Danışmanlığı</h1>
              <h2 className="hero-subtitle h2-style">Profesyonel Hizmet</h2>
              <p className="hero-desc p-style">
                Bir kripto projesini hayata geçirmek, büyütmek ve sürdürülebilir hale getirmek için ihtiyacınız olan tüm teknik, stratejik ve operasyonel süreçleri tek çatı altında sunuyoruz. Ya da mevcut olan projenin ihtiyaçlarına göre aksiyon alarak beraber büyüme sağlıyoruz.
              </p>
              
              <div className="hero-feature-list">
                {[
                  "NDA Kapsamında %100 Gizlilik Güvencesi", 
                  "Blockchain Odaklı Teknik ve Ekonomik Mimari", 
                  "Global Tier-1 Borsa ve Pazarlama Networkü"
                ].map((item, i) => (
                  <div key={i} className="hero-feature-item">
                    <div className="feature-icon-circle">
                      <svg viewBox="0 0 24 24" className="feature-icon-svg">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="feature-item-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-card-container">
              <div className="form-card">
                <h3 className="form-header-title h3-style">Ücretsiz Ön Değerlendirme</h3>
                {aiResult ? (
                  <div className="ai-result">
                    <p className="hero-desc p-style" style={{ fontStyle: 'italic', color: '#333', marginBottom: '24px' }}>"{aiResult.summary}"</p>
                    <button onClick={() => setAiResult(null)} className="form-button p-style">Yeniden Analiz Et</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <select className="form-control p-style" value={status} onChange={(e) => setStatus(e.target.value)} required>
                        <option value="">Proje Durumu Seçiniz</option>
                        <option value="yeni">Yeni proje</option>
                        <option value="mevcut">Mevcut proje</option>
                        <option value="yatirim">Yatırım aşaması</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control p-style" rows={3} placeholder="Ne yapmak istiyorsunuz?" value={goal} onChange={(e) => setGoal(e.target.value)} required style={{resize: 'none'}} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control p-style" placeholder="E-posta / Telegram" value={contact} onChange={(e) => setContact(e.target.value)} required />
                    </div>
                    <button type="submit" disabled={loading} className="form-button p-style">
                      {loading ? 'ANALİZ EDİLİYOR...' : 'DEĞERLENDİRME AL'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) h-section1 */}
      <section id="h-section1" className="section-padding">
        <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Who We Serve Arkaplan" />
        <div className="overlay" style={{ background: 'rgba(0,0,0,0.8)' }}></div>
        <div className="grad"></div>
        <div className="container-xl">
          <h2 className="section-title-center h2-style">Kimler İçin A’dan Z’ye Danışmanlık Sunuyoruz?</h2>
          <div className="who-container">
            {whoBoxes.map((text, i) => (
              <div key={i} className="who-item p-style">{text}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) h-consultant2 */}
      <section id="h-consultant2" className="section-padding">
        <div className="container-xl">
          <h2 className="section-title-center h2-style">Danışmanlık Yol Haritası: 8 Kritik Adım</h2>
          <div className="roadmap-wrapper">
            <div className="roadmap-track"></div>
            {roadmapSteps.map((step, i) => (
              <div key={i} className="roadmap-node">
                <a href={step.link} className="roadmap-step-card">
                  <div className="step-num">0{i+1}</div>
                  <h4 className="step-heading h4-style">{step.title}</h4>
                  <p className="step-para p-style">{step.desc}</p>
                </a>
                <div className="roadmap-marker"></div>
                {/* Spacer for desktop layout grid alignment */}
                <div style={{ width: '44%' }} className="hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) h-section3 */}
      <section id="h-section3" className="section-padding">
        <div className="container-xl">
          <div className="info-split-layout">
            <div className="info-split-text">
              <h2 className="h2-style" style={{ textAlign: 'left', marginBottom: '24px' }}>Tek Noktadan Yönetimin Avantajları</h2>
              <ul className="adv-list">
                {advantages.map((text, i) => (
                  <li key={i} className="adv-item">
                    <span className="adv-check">✓</span>
                    <span className="adv-text p-style">{text}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '40px' }}>
                <a href="#h-hero" className="bant-btn p-style">Hemen Başlayın</a>
              </div>
            </div>
            <div className="info-split-visual">
              <img src="https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2069&auto=format&fit=crop" alt="Advantage visual" className="info-split-image" />
            </div>
          </div>
        </div>
      </section>

      {/* 5) h-bant4 */}
      <section id="h-bant4">
        <div className="container-xl">
          <div className="bant-content">
            <h3 className="bant-header h2-style">Kripto projenizi baştan sona profesyonel bir ekiple hayata geçirmek ister misiniz?</h3>
            <a href="#h-hero" className="bant-btn p-style">Projemi Değerlendirin</a>
          </div>
        </div>
      </section>

      {/* 6) h-faq5 */}
      <section id="h-faq5" className="section-padding">
        <div className="container-xl">
          <h2 className="section-title-center h2-style">Sıkça Sorulan Sorular</h2>
          <div className="faq-box" style={{maxWidth: '800px', margin: '0 auto'}}>
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-accordion-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-accordion-header h4-style">
                  <span>{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="faq-arrow">
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

      <div className="back-nav-footer" style={{ padding: '60px 0', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = ''} style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase' }}>
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  );
};

export default ConsultancyDetailView;