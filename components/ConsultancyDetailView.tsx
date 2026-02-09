
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
          font-family: 'Open Sans', sans-serif;
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
          background: rgba(0, 0, 0, 0.7);
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
          font-size: 48px; /* Anasayfa ile uyumlu */
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          text-transform: uppercase;
          color: #fff;
        }

        .hero-text p {
          font-size: 18px; /* Anasayfa body boyutu */
          color: #d1d5db;
          margin-bottom: 40px;
          line-height: 1.6;
          max-width: 90%;
        }

        .form-card {
          background: #f7f7f7;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          color: #000;
        }

        .form-card h3 {
          font-size: 24px;
          font-weight: 800;
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
          font-size: 15px;
        }

        .btn-gold {
          background: var(--cray-gold);
          color: #000;
          font-weight: 800;
          padding: 18px 32px;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          transition: 0.3s;
          display: block;
          border: none;
          cursor: pointer;
          text-align: center;
          font-size: 15px;
          width: 100%;
        }

        .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(255,177,0,0.3); }

        /* --- SECTIONS --- */
        .py-section { padding-top: 100px; padding-bottom: 100px; }
        h2 { font-size: 42px; font-weight: 800; text-align: center; margin-bottom: 50px; line-height: 1.2; }

        /* Kimler İçin Kutucukları */
        .who-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .who-box {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,177,0,0.2);
          padding: 30px 20px;
          border-radius: 16px;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          color: #d1d5db;
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .who-box:hover { border-color: var(--cray-gold); background: rgba(255,177,0,0.05); transform: translateY(-5px); }

        /* Yol Haritası (Saklanan Yapı) */
        .roadmap-container { position: relative; padding: 60px 0; }
        .roadmap-line { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, transparent, var(--cray-gold), transparent); transform: translateX(-50%); }
        .roadmap-item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; width: 100%; }
        .roadmap-card { width: 45%; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 28px; border-radius: 20px; transition: 0.3s; }
        .roadmap-dot { width: 20px; height: 20px; background: var(--cray-gold); border: 4px solid #000; border-radius: 50%; z-index: 2; box-shadow: 0 0 15px var(--cray-gold); }
        .roadmap-item:nth-child(even) { flex-direction: row-reverse; }

        /* Avantajlar 2 Sütun */
        .advantage-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .advantage-list-item {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          font-size: 18px;
          font-weight: 600;
        }

        /* CTA Bandı */
        .cta-band {
          background: #f7f7f7;
          padding: 80px 0;
          text-align: center;
          color: #000;
        }
        .cta-band h3 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 40px;
          color: #000;
        }

        /* FAQ - Ortalanmış ve Daraltılmış */
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .accordion-item { background: #080808; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; overflow: hidden; }
        .accordion-header { padding: 24px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: 700; font-size: 18px; transition: 0.3s; }
        .accordion-content { padding: 0 24px 24px; color: #9ca3af; display: none; font-size: 16px; line-height: 1.6; }
        .accordion-item.active .accordion-content { display: block; }
        .accordion-item.active .accordion-header { color: var(--cray-gold); }

        @media (max-width: 1024px) {
          .hero-grid, .advantage-grid { grid-template-columns: 1fr; text-align: center; }
          .who-grid { grid-template-columns: 1fr; }
          .hero-text h1 { font-size: 36px; }
          .roadmap-line { left: 30px; }
          .roadmap-item { flex-direction: row !important; }
          .roadmap-card { width: calc(100% - 80px); margin-left: 80px; }
          .roadmap-dot { position: absolute; left: 20px; }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="text-cray-gold font-black mb-4 tracking-[0.3em] text-sm uppercase">Uçtan Uca Web3 Stratejisi</div>
              <h1>A'dan Z'ye Crypto Proje Danışmanlığı</h1>
              <p>
                Kripto dünyasında sadece fikir yetmez; profesyonel bir icra gerekir. 
                Teknik mimariden küresel listeleme stratejisine kadar tüm süreçleri 
                sizin adınıza uçtan uca yönetiyoruz.
              </p>
              <div className="flex flex-col gap-5 mt-8">
                {["NDA Kapsamında %100 Gizlilik", "Blockchain Odaklı Teknik Mimari", "Global Tier-1 Borsa Networkü"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-cray-gold flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4" className="w-3 h-3"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span className="text-gray-200 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-card">
              <h3>Ücretsiz Analiz Talebi</h3>
              <form>
                <select className="form-input">
                  <option>Henüz Fikir Aşamasında</option>
                  <option>Geliştirme Devam Ediyor</option>
                  <option>Lansman Hazırlığı / Listing</option>
                  <option>Yayında / Ölçeklendirme Gerekiyor</option>
                </select>
                <textarea className="form-input" rows={3} placeholder="Vizyonunuzdan bahsedin..."></textarea>
                <input type="text" className="form-input" placeholder="Telegram veya E-posta" />
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

      {/* 3. ROADMAP SECTION */}
      <section className="py-section bg-[#030303]">
        <div className="container-xl">
          <h2>Danışmanlık Yol Haritası: 8 Kritik Adım</h2>
          <div className="roadmap-container mt-12">
            <div className="roadmap-line"></div>
            {steps.map((step, i) => (
              <div key={i} className="roadmap-item">
                <div className="roadmap-card">
                  <div className="text-cray-gold font-black text-3xl mb-2 opacity-30">0{i+1}</div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
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
            <div>
              {[
                "Parça parça ajanslarla uğraşmazsınız",
                "Zaman ve bütçe kaybı yaşamazsınız",
                "Tüm ekip aynı hedefe odaklanır",
                "Tutarlı marka ve büyüme elde edersiniz",
                "Projeniz kontrol altında ilerler"
              ].map((text, i) => (
                <div key={i} className="advantage-list-item">
                  <div className="w-8 h-8 rounded-full bg-cray-gold/20 flex items-center justify-center border border-cray-gold text-cray-gold font-bold">✓</div>
                  <span className="text-gray-200">{text}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[400px]">
              <img src="/gorsel/y.jpg" alt="Advantage" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. ARA CTA BANDI (AÇIK RENK) */}
      <section className="cta-band">
        <div className="container-xl">
          <h3>Kripto projenizi baştan sona profesyonel bir ekiple hayata geçirmek ister misiniz?</h3>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="btn-gold" style={{ width: 'auto', display: 'inline-block', paddingLeft: '60px', paddingRight: '60px' }}>
            Projemi Değerlendirin
          </button>
        </div>
      </section>

      {/* 6. FAQ SECTION (ORTALANMIŞ) */}
      <section className="py-section">
        <div className="container-xl">
          <h2>Merak Edilenler</h2>
          <div className="faq-container mt-12">
            {faqs.map((faq, i) => (
              <div key={i} className={`accordion-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="accordion-header">
                  {faq.q}
                  <span className="text-cray-gold" style={{ transform: openFaq === i ? 'rotate(180deg)' : '' }}>
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
          <h2>Kripto Projenizi Profesyonel Bir Şekilde Hayata Geçirelim</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
            Fikir, sermaye veya mevcut bir proje… Nerede olduğunuz önemli değil. Doğru yol haritasını birlikte çizelim.
          </p>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="btn-gold" style={{ width: 'auto', padding: '24px 60px', fontSize: '18px', display: 'inline-block' }}>
            Ücretsiz Ön Değerlendirme Al
          </button>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5">
        <button onClick={() => window.location.hash = ''} className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl text-gray-300 hover:text-white transition-all cursor-pointer text-xs font-bold tracking-widest uppercase hover:bg-white/10">
          ← Ana Sayfaya Dön
        </button>
      </footer>
    </div>
  );
};

export default ConsultancyDetailView;
