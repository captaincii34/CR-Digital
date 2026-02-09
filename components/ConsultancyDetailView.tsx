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
    { title: "Kripto Proje Danışmanlığı", desc: "Projenizin genel çerçevesini belirler, hedefleri ve potansiyeli analiz ederiz.", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-proje-danismanligi" },
    { title: "Kripto Fikir ve Konsept Danışmanlığı", desc: "Fikrinizin teknik uygulanabilirliği ve pazar karşılığı değerlendirilir.", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-fikir-ve-konsept-danismanligi" },
    { title: "Kripto İş Modeli ve Strateji Danışmanlığı", desc: "Sürdürülebilir bir ekosistem yapısı ve gelir modeli kurgularız.", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-is-modeli-ve-strateji-danismanligi" },
    { title: "Kripto Yol Haritası ve Tokenomics Danışmanlığı", desc: "Token ekonomisi ve teknik kilometre taşlarını planlarız.", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-yol-haritasi-ve-tocenomics-danismanligi" },
    { title: "Bütçe Odaklı Kripto Proje Danışmanlığı", desc: "Mevcut bütçenize göre en verimli ilerleme yolunu belirleriz.", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/butce-odakli-kripto-proje-danismanligi" },
    { title: "Uçtan Uca Kripto Proje Yönetim Danışmanlığı", desc: "Tüm süreçlerin profesyonel ekiplerce koordine edilmesini sağlarız.", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/uctan-uca-kripto-proje-yonetim-danismanligi" },
    { title: "Lansman ve Büyüme Danışmanlığı", desc: "Piyasaya giriş stratejileri ve ölçeklenebilir büyüme planları.", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/lansman-ve-buyume-danismanligi" },
    { title: "Dijital Pazarlama ve Tanıtım Danışmanlığı", desc: "Görünürlük, marka bilinirliği ve kullanıcı edinimi çalışmaları.", link: "#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/dijital-pazarlama-ve-tanitim-danismanligi" }
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
        .section-padding { padding: 80px 0; position: relative; }
        .container-xl { max-width: 1280px; margin: 0 auto; padding: 0 32px; width: 100%; position: relative; z-index: 10; }
        .bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.75); z-index: 1; }
        .grad { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent 40%, transparent 60%, #000); z-index: 2; }
        .h1-style { font-size: 40px !important; font-weight: 700 !important; }
        .h2-style { font-size: 30px !important; font-weight: 700 !important; }
        .h3-style { font-size: 22px !important; font-weight: 600 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; }
        #h-hero { position: relative; padding: 200px 0 100px; min-height: 100vh; display: flex; align-items: center; }
        .hero-grid { display: flex; flex-direction: column; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { flex-direction: row; align-items: center; justify-content: space-between; } }
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 48px; box-shadow: 0 40px 80px rgba(0,0,0,0.7); color: #000; width: 100%; max-width: 480px; margin: 0 auto; }
        .form-control { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; background: #fff; color: #000; margin-bottom: 16px; }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 20px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }
        .roadmap-wrapper { position: relative; max-width: 1000px; margin: 60px auto 0; padding: 40px 0; }
        .roadmap-track { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, transparent, var(--cray-gold), transparent); transform: translateX(-50%); opacity: 0.3; }
        .roadmap-node { display: flex; justify-content: space-between; align-items: center; margin-bottom: 48px; position: relative; }
        .roadmap-node:nth-child(even) { flex-direction: row-reverse; }
        .roadmap-step-card { width: 44%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 32px; border-radius: 24px; transition: 0.3s; text-decoration: none; cursor: pointer; display: block; }
        .roadmap-step-card:hover { background: rgba(255,177,0,0.06); border-color: var(--cray-gold); transform: translateY(-5px); }
        .roadmap-marker { width: 18px; height: 18px; background: var(--cray-gold); border: 4px solid #000; border-radius: 50%; z-index: 5; position: absolute; left: 50%; transform: translateX(-50%); box-shadow: 0 0 15px var(--cray-gold); }
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      {/* Hero */}
      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop" className="bg-img" alt="Crypto Hero" />
        <div className="overlay" style={{ background: 'rgba(0,0,0,0.7)' }}></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text-content">
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>Uçtan Uca Proje Ortaklığı</h5>
              <h1 className="h1-style">A'dan Z'ye Crypto Proje Danışmanlığı</h1>
              <p className="p-style" style={{marginTop: '20px', color: '#d1d5db', lineHeight: '1.7'}}>Bir kripto projesini hayata geçirmek için gereken tüm stratejik, teknik ve operasyonel süreçleri tek çatı altında profesyonelce sunuyoruz.</p>
              <div style={{marginTop: '32px'}}>
                {["NDA Kapsamında %100 Gizlilik", "Teknik ve Ekonomik Mimari Tasarımı", "Global Borsa ve Pazarlama Networkü"].map((item, i) => (
                  <div key={i} style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
                    {/* Fixed justify-content to justifyContent */}
                    <div style={{width: '24px', height: '24px', background: 'var(--cray-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span style={{fontSize: '11px', fontWeight: 700, textTransform: 'uppercase'}}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-card">
              <h3 className="h3-style" style={{textAlign: 'center', marginBottom: '24px', color: '#000'}}>Ücretsiz Ön Değerlendirme</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Tekrar</button></div> : (
                <form onSubmit={handleSubmit}>
                  <select className="form-control" value={status} onChange={e=>setStatus(e.target.value)} required>
                    <option value="">Proje Durumu</option><option value="yeni">Yeni proje</option><option value="mevcut">Mevcut proje</option>
                  </select>
                  <textarea className="form-control" rows={3} placeholder="Hedefiniz nedir?" value={goal} onChange={e=>setGoal(e.target.value)} required />
                  <input type="text" className="form-control" placeholder="E-posta / Telegram" value={contact} onChange={e=>setContact(e.target.value)} required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'İŞLENİYOR...' : 'DEĞERLENDİRME AL'}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '60px'}}>Danışmanlık Yol Haritası</h2>
          <div className="roadmap-wrapper">
            <div className="roadmap-track"></div>
            {roadmapSteps.map((step, i) => (
              <div key={i} className="roadmap-node">
                <a href={step.link} className="roadmap-step-card">
                  <div style={{ color: 'var(--cray-gold)', fontWeight: 900, fontSize: '24px', marginBottom: '8px', opacity: 0.5 }}>0{i+1}</div>
                  <h4 className="h4-style" style={{color: '#fff', marginBottom: '8px'}}>{step.title}</h4>
                  <p className="p-style" style={{color: '#9ca3af', fontSize: '14px', lineHeight: '1.5'}}>{step.desc}</p>
                </a>
                <div className="roadmap-marker"></div>
                <div style={{ width: '44%' }} className="hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      <div style={{ padding: '60px 0', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '14px 40px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase' }}>Ana Sayfaya Dön</button>
      </div>
    </div>
  );
};

export default ConsultancyDetailView;