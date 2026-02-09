
import React, { useState } from 'react';

const ConsultancyDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    { title: "Crypto Project Consulting", desc: "Projenizin genel çerçevesini belirler, hedefleri, riskleri ve potansiyeli analiz ederiz." },
    { title: "Idea & Concept Validation", desc: "Fikrinizin teknik uygulanabilirliği, pazar karşılığı ve rekabet durumu değerlendirilir." },
    { title: "Business Model & Strategy", desc: "Token kullanım senaryosu (utility) ve ekosistem yapısı ile çalışan bir model kurarız." },
    { title: "Roadmap & Milestone Planning", desc: "Teknik ve pazarlama adımları, ölçülebilir KPI'lar ile takvime bağlanır." },
    { title: "Budget-Based Project Structuring", desc: "Mevcut bütçenize göre öncelikleri belirliyor, en verimli yolu çiziyoruz." },
    { title: "End-to-End Project Management", desc: "Zaman, ekip ve teslimat kontrolü profesyonel proje yöneticilerimizle sağlanır." },
    { title: "Multi-Disciplinary Coordination", desc: "Yazılım, pazarlama ve yatırım ekiplerinin tek bir strateji altında uyumu." },
    { title: "Launch, Growth & Scale", desc: "Lansman hazırlığı, listeleme stratejileri ve lansman sonrası büyüme." }
  ];

  const faqs = [
    { q: "A'dan Z'ye danışmanlık ne kadar sürer?", a: "Projenin kapsamına ve teknik gereksinimlerine göre değişmekle birlikte, fikir aşamasından lansman aşamasına gelmek genellikle 3 ila 6 ay sürer." },
    { q: "Sadece belirli bir aşama için hizmet alabilir miyim?", a: "Evet, ancak bu paketimiz uçtan uca çözüm arayan ve projesinin her adımının profesyonelce koordine edilmesini isteyen projeler içindir." },
    { q: "Bütçem kısıtlıysa ne yapmalıyım?", a: "Bütçe odaklı proje yapılandırması yapıyoruz. Önemli olan bütçenizin miktarı değil, o bütçeyi en doğru hedeflere harcamaktır." },
    { q: "NDA (Gizlilik Sözleşmesi) imzalıyor musunuz?", a: "Kesinlikle. Süreç başlamadan önce tüm fikir ve verileriniz yasal koruma altına alınır." }
  ];

  const bgImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";

  return (
    <div className="consultancy-detail-page bg-black">
      <style>{`
        .consultancy-detail-page {
          color: #fff;
        }

        /* --- HERO SECTION --- */
        .hero-section {
          position: relative;
          padding: 180px 0 100px;
          background-image: url('${bgImage}');
          background-size: cover;
          background-position: center;
          border-bottom: 1px solid rgba(255,177,0,0.15);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          z-index: 1;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, #000, transparent 40%, transparent 60%, #000);
          z-index: 2;
        }

        .container-xl {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 10;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-text h1 {
          line-height: 1.2;
          margin-bottom: 24px;
          text-shadow: 0 10px 20px rgba(0,0,0,1);
        }

        .hero-text p {
          color: #e5e7eb;
          margin-bottom: 32px;
          line-height: 1.6;
          max-width: 90%;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .hero-text h3 {
          color: var(--cray-gold);
          text-shadow: 0 2px 10px rgba(255,177,0,0.3);
        }

        .form-card {
          background: #f7f7f7;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          color: #000;
        }

        .form-card h3 {
          font-weight: 800 !important;
          margin-bottom: 24px;
          color: #000;
        }

        .form-input {
          width: 100%;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 16px;
          color: #000;
          margin-bottom: 16px;
          transition: 0.3s;
        }

        .btn-gold {
          background: var(--cray-gold);
          color: #000;
          font-weight: 800 !important;
          padding: 18px 32px;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          transition: 0.3s;
          display: block;
          border: none;
          cursor: pointer;
          text-align: center;
          width: 100%;
          box-shadow: 0 4px 15px rgba(255,177,0,0.3);
        }

        .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(255,177,0,0.4); }

        .py-section { padding-top: 100px; padding-bottom: 100px; }
        
        h2 { text-align: center; margin-bottom: 50px; line-height: 1.2; }

        /* Kimler İçin 5'li Box */
        .who-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .who-box {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,177,0,0.2);
          padding: 30px 20px;
          border-radius: 20px;
          text-align: center;
          font-weight: 600 !important;
          color: #d1d5db;
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1.4;
          min-height: 140px;
        }
        .who-box:hover { border-color: var(--cray-gold); background: rgba(255,177,0,0.08); transform: translateY(-5px); color: #fff; }

        /* Yol Haritası */
        .roadmap-container { position: relative; padding: 60px 0; }
        .roadmap-line { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, transparent, var(--cray-gold), transparent); transform: translateX(-50%); }
        .roadmap-item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; width: 100%; }
        .roadmap-card { width: 45%; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 28px; border-radius: 20px; transition: 0.3s; }
        .roadmap-dot { width: 20px; height: 20px; background: var(--cray-gold); border: 4px solid #000; border-radius: 50%; z-index: 2; box-shadow: 0 0 15px var(--cray-gold); }
        .roadmap-item:nth-child(even) { flex-direction: row-reverse; }

        /* Avantajlar */
        .advantage-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .advantage-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .advantage-item {
          display: flex;
          align-items: center;
          gap: 18px;
          font-weight: 600 !important;
          color: #e5e7eb;
        }
        .advantage-icon {
          width: 32px;
          height: 32px;
          background: rgba(255,177,0,0.15);
          border: 1px solid var(--cray-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cray-gold);
          font-weight: 900 !important;
          flex-shrink: 0;
        }

        /* Ara CTA Bandı */
        .cta-band {
          background: #f7f7f7;
          padding: 80px 0;
          text-align: center;
        }
        .cta-band h3 {
          font-weight: 800 !important;
          color: #000;
          margin-bottom: 40px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.3;
        }

        /* FAQ */
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .accordion-item { background: #080808; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; overflow: hidden; }
        .accordion-header { padding: 24px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: 700 !important; transition: 0.3s; }
        .accordion-content { padding: 0 24px 24px; color: #9ca3af; display: none; line-height: 1.6; }
        .accordion-item.active .accordion-content { display: block; }
        .accordion-item.active .accordion-header { color: var(--cray-gold); }

        @media (max-width: 1024px) {
          .hero-grid, .advantage-grid { grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .who-grid { grid-template-columns: 1fr; }
          .hero-text h1 { font-size: 32px !important; }
          .roadmap-line { left: 30px; }
          .roadmap-item { flex-direction: row !important; }
          .roadmap-card { width: calc(100% - 80px); margin-left: 80px; }
          .roadmap-dot { position: absolute; left: 20px; }
          .advantage-item { justify-content: center; }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="text-cray-gold font-black mb-4 tracking-[0.3em] text-sm uppercase">Uçtan Uca Proje Ortaklığı</div>
              <h1>A'dan Z'ye Crypto Proje Danışmanlığı</h1>
              <p>
                Kripto dünyasında sadece fikir yetmez; profesyonel bir icra gerekir. 
                Teknik mimariden küresel listeleme stratejisine kadar tüm süreçleri 
                sizin adınıza uçtan uca yönetiyoruz.
              </p>
              <h3>Bu yaklaşım klasik "ajans hizmeti" değil, uçtan uca proje ortaklığıdır.</h3>
              
              <div className="flex flex-col gap-5 mt-10">
                {["NDA Kapsamında %100 Gizlilik Güvencesi", "Blockchain Odaklı Teknik ve Ekonomik Mimari", "Global Tier-1 Borsa ve Pazarlama Networkü"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-cray-gold flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4" className="w-3 h-3"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span className="text-gray-200 font-bold text-sm tracking-wide uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-card">
              <h3>Ücretsiz Analiz Talebi</h3>
              <form>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-bold text-gray-400 mb-2">Proje Mevcut Durumu</label>
                  <select className="form-input">
                    <option>Henüz Fikir Aşamasında</option>
                    <option>Geliştirme Devam Ediyor</option>
                    <option>Lansman Hazırlığı / Listing</option>
                    <option>Yayında / Ölçeklendirme Gerekiyor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-bold text-gray-400 mb-2">Vizyonunuz & Hedefiniz</label>
                  <textarea className="form-input" rows={3} placeholder="Kısaca projenizden bahsedin..."></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-[11px] uppercase tracking-wider font-bold text-gray-400 mb-2">İletişim Bilgisi</label>
                  <input type="text" className="form-input" placeholder="Telegram veya E-posta" />
                </div>
                <button type="button" className="btn-gold">Analiz Başlat</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KIMLER ICIN SECTION (5 BOX) */}
      <section className="py-section border-t border-white/5">
        <div className="container-xl">
          <h2>Kimler İçin A’dan Z’ye Danışmanlık Sunuyoruz?</h2>
          <div className="who-grid mt-12">
            {[
              "Kripto projesi fikri olan ama nereden başlayacağını bilmeyenler",
              "Teknik, pazarlama veya strateji ekibi olmayan ekipler",
              "Bütçesi sınırlı ama doğru planla ilerlemek isteyenler",
              "Mevcut projesini profesyonel seviyeye taşımak isteyenler",
              "Yatırım veya launch sürecine hazırlanan Web3 projeleri"
            ].map((text, i) => (
              <div key={i} className="who-box">{text}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ROADMAP SECTION (8 ADIM) */}
      <section className="py-section bg-[#030303]">
        <div className="container-xl">
          <h2>Danışmanlık Yol Haritası: 8 Kritik Adım</h2>
          <div className="roadmap-container mt-12">
            <div className="roadmap-line"></div>
            {steps.map((step, i) => (
              <div key={i} className="roadmap-item">
                <div className="roadmap-card">
                  <div className="text-cray-gold font-black text-3xl mb-2 opacity-30">0{i+1}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
                <div className="roadmap-dot"></div>
                <div className="w-[45%] hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AVANTAJLAR SECTION (2 SÜTUN) */}
      <section className="py-section">
        <div className="container-xl">
          <h2>Tek Noktadan Yönetimin Avantajları</h2>
          <div className="advantage-grid mt-12">
            <div className="advantage-list">
              {[
                "Parça parça ajanslarla uğraşmazsınız",
                "Zaman ve bütçe kaybı yaşamazsınız",
                "Tüm ekip aynı hedefe odaklanır",
                "Tutarlı marka ve büyüme elde edersiniz",
                "Projeniz kontrol altında ilerler"
              ].map((text, i) => (
                <div key={i} className="advantage-item">
                  <div className="advantage-icon">✓</div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[450px]">
              <img src="/gorsel/y.jpg" alt="Web3 Advantage" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. ARA CTA BANDI */}
      <section className="cta-band">
        <div className="container-xl">
          <h2 style={{ color: '#000', marginBottom: '40px' }}>Kripto projenizi baştan sona profesyonel bir ekiple hayata geçirmek ister misiniz?</h2>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="btn-gold" style={{ width: 'auto', display: 'inline-block', paddingLeft: '80px', paddingRight: '80px' }}>
            Projemi Değerlendirin
          </button>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-section bg-black">
        <div className="container-xl">
          <h2>Merak Edilenler</h2>
          <div className="faq-container mt-12">
            {faqs.map((faq, i) => (
              <div key={i} className={`accordion-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="accordion-header">
                  {faq.q}
                  <span className="text-cray-gold transition-transform duration-300" style={{ transform: openFaq === i ? 'rotate(180deg)' : '' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </div>
                <div className="accordion-content">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-section border-t border-white/5 bg-gradient-to-b from-black to-cray-gold/5 text-center">
        <div className="container-xl">
          <h2 className="mb-6">Kripto Projenizi Profesyonel Bir Şekilde Hayata Geçirelim</h2>
          <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
            Fikir, sermaye veya mevcut bir proje… Nerede olduğunuz önemli değil. Doğru yol haritasını birlikte çizelim.
          </p>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="btn-gold" style={{ width: 'auto', padding: '24px 80px', display: 'inline-block' }}>
            Ücretsiz Ön Değerlendirme Al
          </button>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5">
        <button onClick={() => window.location.hash = ''} className="bg-white/5 border border-white/10 px-10 py-4 rounded-xl text-gray-300 hover:text-white transition-all cursor-pointer text-xs font-bold tracking-widest uppercase hover:bg-white/10">
          ← Ana Sayfaya Dön
        </button>
      </footer>
    </div>
  );
};

export default ConsultancyDetailView;
