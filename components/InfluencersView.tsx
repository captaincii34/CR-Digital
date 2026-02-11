import React, { useState } from 'react';
import { startTelegramConnectWithForm, waitUntilConnected } from "../utils/telegramBridge";

type InfluencerStep = 'name' | 'success';

const faqData = [
  { q: "Katılım için herhangi bir ücret ödemem gerekiyor mu?", a: "Hayır, CrayUp Influencer Ağı'na katılmak tamamen ücretsizdir. Biz bir köprü görevi görüyoruz ve fenomenlerimizden herhangi bir maddi talepte bulunmuyoruz." },
  { q: "Hangi platformlardaki influencer'lar başvurabilir?", a: "X (Twitter), Telegram, YouTube ve Discord platformlarında kripto/Web3 odaklı içerik üreten tüm fenomenler başvurabilir." },
  { q: "Takipçi sınırı var mı?", a: "Belirli bir sayı sınırımız yok. Bizim için önemli olan takipçi sayısından ziyade kitlenizin gerçekliği, etkileşim oranınız ve projelere sağlayabileceğiniz niş katkıdır." },
  { q: "Ödemelerimi nasıl ve ne zaman alacağım?", a: "İş birliği bazlı çalışıyoruz. Ödemelerinizi tercihinize göre kripto para (USDT/Stablecoin) veya banka transferi ile iş bitiminde hızlıca alırsınız." },
  { q: "İş birliği süreci nasıl işliyor?", a: "Başvurunuz onaylandıktan sonra uygun bir proje geldiğinde ekibimiz sizinle Telegram üzerinden iletişime geçer, şartları konuşur ve onayınızla süreci başlatırız." },
  { q: "Gizli Telegram kanalına nasıl katılırım?", a: "Kayıt işleminiz tamamlanıp profiliniz doğrulandıktan sonra, sadece onaylı influencer'ların bulunduğu özel davet linki size bizzat iletilir." },
  { q: "CrayDEX ve Crayus Game öncelikleri nelerdir?", a: "CrayUp'ın kendi projelerinde (borsa ve oyun) en yüksek kademe VIP haklar, özel token airdrop'ları ve beta test süreçlerine öncelikli katılım hakkı kazanırsınız." },
  { q: "Markalarla iletişimi kim kuruyor?", a: "Tüm operasyonel yükü, bütçe görüşmelerini ve teknik detayları CrayUp yönetir. Siz sadece projenin tanıtımına ve topluluğunuza odaklanırsınız." },
  { q: "Sadece Türkiye odaklı mı çalışıyorsunuz?", a: "Hayır, global bir ajansız. Bybit, MEXC ve Gate.io gibi devlerle olan partnerliklerimiz sayesinde dünyanın her yerinden projelerle iş birliği yapma fırsatınız olur." },
  { q: "Başvuru yaptıktan sonra ne kadar sürede dönüş yapılır?", a: "Ekibimiz başvurunuzu ve kanallarınızı inceler. Genellikle 24-48 saat içerisinde Telegram üzerinden sizinle ilk temas kurulur." }
];

const InfluencersView: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState<InfluencerStep>('name');
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Form states
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleRegisterClick = () => {
    setIsModalOpen(true);
    setStep('name');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setName("");
    setSurname("");
  };

  const scrollToApply = () => {
    const el = document.getElementById('apply-now');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const formObj = {
        "First Name": name,
        "Last Name": surname,
        "Type": "Influencer Registration Initial",
        "Sent At": new Date().toISOString(),
        "Page": window.location.href,
      };

      const code = await startTelegramConnectWithForm(formObj);
      const ok = await waitUntilConnected(code);
      if (!ok) {
        alert("Bağlantı doğrulanamadı. Lütfen Telegram botunu açıp Start'a basın.");
        setLoading(false);
        return;
      }

      setStep('success');
    } catch (err: any) {
      console.error(err);
      alert("Telegram bağlantısı sırasında bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="influencers-page bg-black text-white min-h-screen">
      <style>{`
        .influencers-page { padding-top: 120px; position: relative; overflow-x: hidden; }
        .container-xl { max-width: 1280px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 10; }
        
        /* Global H1 override for this view to match homepage 40px */
        .influencers-page .h1-style { font-size: 40px !important; font-weight: 800 !important; line-height: 1.2; margin-bottom: 24px; }
        .h2-style { font-size: 32px !important; font-weight: 800 !important; margin-bottom: 20px; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; color: #ccc; line-height: 1.8; }
        
        /* Hero */
        .hero-section { position: relative; padding: 120px 0 80px; }
        .hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.25; z-index: 0; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent, #000); z-index: 1; }

        .feature-list { margin-top: 50px; display: flex; flex-direction: column; gap: 30px; max-width: 700px; }
        .feature-item { display: flex; gap: 20px; }
        .feature-tick { width: 28px; height: 28px; background: var(--cray-gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 5px; }
        .feature-content h4 { font-size: 20px !important; font-weight: 800 !important; color: #fff; margin-bottom: 5px; }
        .feature-content p { font-size: 15px !important; color: #888; margin: 0; }

        /* Register Section - Reduced padding as requested (70px) */
        .register-section { position: relative; padding: 70px 0; background: #050505; text-align: center; border-top: 1px solid rgba(255,177,0,0.1); border-bottom: 1px solid rgba(255,177,0,0.1); }
        .register-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.15; mix-blend-mode: overlay; }

        /* Why Boxes - Light padding as requested */
        .why-us-section { padding: 100px 0; }
        .why-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 20px; margin-top: 60px; }
        @media (min-width: 1024px) { .why-grid { grid-template-columns: repeat(4, 1fr); } }
        
        .why-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 40px 30px; border-radius: 24px; transition: 0.4s; height: 100%; text-align: center; }
        .why-card:hover { border-color: var(--cray-gold); background: rgba(255,177,0,0.05); transform: translateY(-10px); }
        .why-card h4 { font-size: 18px !important; font-weight: 800 !important; margin-bottom: 15px; color: var(--cray-gold); }
        .why-card p { font-size: 14px !important; color: #999; margin: 0; line-height: 1.6; }

        /* CTA Band */
        .cta-band { background: var(--cray-gold); padding: 80px 0; color: #000; text-align: center; }
        .cta-band h2 { color: #000 !important; margin-bottom: 15px; font-weight: 900 !important; font-size: 36px !important; }
        .cta-band p { color: rgba(0,0,0,0.7) !important; font-weight: 600 !important; max-width: 600px; margin: 0 auto 30px; }
        .btn-cta-dark { background: #000; color: #fff; padding: 18px 50px; border-radius: 12px; font-weight: 800 !important; border: none; cursor: pointer; text-transform: uppercase; transition: 0.3s; }
        .btn-cta-dark:hover { transform: scale(1.05); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }

        /* FAQ Section with extra padding as requested */
        .faq-section { padding: 120px 0; background: #000; }
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; text-align: left; }
        .faq-accordion-header span { font-weight: 700; font-size: 16px !important; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }

        /* Modal */
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.9); backdrop-filter: blur(20px); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .modal-box { background: #111; border: 1px solid var(--cray-gold); border-radius: 32px; width: 100%; max-width: 480px; position: relative; padding: 60px 40px; box-shadow: 0 40px 100px rgba(0,0,0,0.8); }
        .modal-close { position: absolute; top: 25px; right: 25px; background: none; border: none; color: #555; cursor: pointer; transition: 0.3s; }
        .modal-close:hover { color: var(--cray-gold); transform: rotate(90deg); }
        
        .form-input-inf { width: 100%; background: #000; border: 1px solid #222; border-radius: 12px; padding: 16px; color: #fff; font-size: 15px !important; margin-bottom: 20px; outline: none; transition: 0.3s; }
        .form-input-inf:focus { border-color: var(--cray-gold); }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2832" className="hero-bg" alt="Hero Background" />
        <div className="hero-overlay"></div>
        <div className="container-xl">
          <h5 style={{color: 'var(--cray-gold)', letterSpacing: '8px', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 800, fontSize: '12px !important'}}>CRAYUP INFLUENCER EKOSİSTEMİ</h5>
          <h1 className="h1-style">Kripto Dünyasının En Güçlü <br/> Fenomen Ağına Katılın</h1>
          <p className="p-style">
            CrayUp olarak, Web3 dünyasının sınırlarını birlikte aşıyoruz. Dev ekosistemimizde yer alan projelere ses, topluluklara ise güven veriyoruz. Bizimle çalışan fenomenler, sadece birer içerik üreticisi değil, CrayUp ailesinin stratejik ortaklarıdır.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-tick">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="feature-content">
                <h4>Gizli İş Akışı Kanalı</h4>
                <p>Sadece kayıtlı influencerlarımızın olduğu kapalı Telegram grubunda, her gün yeni iş fırsatlarını ve bütçeli kampanyaları paylaşıyoruz.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-tick">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="feature-content">
                <h4>VIP Lansman Hakları</h4>
                <p>Gelecekteki CrayDEX lansmanlarında, Crayus Telegram oyununda ve özel token satışlarında en yüksek öncelik ve VIP paketler sizi bekliyor.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-tick">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="feature-content">
                <h4>Sürdürülebilir Gelir</h4>
                <p>Çalıştığımız yüzlerce şirketle sizi tanıştırıyoruz. Portfolyonuzu güçlendiriyor ve düzenli bir iş trafiği sağlıyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kayıt Ol Section */}
      <section id="apply-now" className="register-section">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" className="register-bg" alt="Register BG" />
        <div className="container-xl">
          <h2 className="h2-style">Hemen Şimdi Başvurun</h2>
          <p className="p-style mx-auto mb-10 max-w-2xl">
            Hiçbir ücret ödemeden, sadece bilginizi bırakarak CrayUp'ın global influencer ağına dahil olun ve ekosistemdeki projelerle ilk siz tanışın.
          </p>
          <button onClick={handleRegisterClick} className="cta-button !px-24 !py-6 font-black text-lg">KAYIT OL</button>
        </div>
      </section>

      {/* Neden Biz Section */}
      <section className="why-us-section bg-black">
        <div className="container-xl">
          <h2 className="h2-style text-center">Neden Bizimle Çalışmalısınız?</h2>
          <div className="why-grid">
            <div className="why-card">
              <h4>Sıfır Komisyon</h4>
              <p>CrayUp, influencer ve marka arasındaki köprüdür. Fenomenlerden herhangi bir maddi talepte bulunmaz.</p>
            </div>
            <div className="why-card">
              <h4>Doğrudan İletişim</h4>
              <p>Resmi Telegram hesabımızdan bizzat sizinle iletişim kurar, size en uygun projeleri getiririz.</p>
            </div>
            <div className="why-card">
              <h4>Global Marka Gücü</h4>
              <p>Bybit, Gate.io ve MEXC gibi dev borsalarla olan bağımız sayesinde en prestijli işlerde yer alırsınız.</p>
            </div>
            <div className="why-card">
              <h4>Geleceğin Parçası Olun</h4>
              <p>Kendi oyunumuz ve borsamızla Web3 dünyasında devrim yaparken en büyük desteği sizlerden alacağız.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band">
        <div className="container-xl">
          <h2>Hemen Aramıza Katıl</h2>
          <p>Yüzlerce Web3 projesine ses olan influencer ağımızda yerini al. Geleceği birlikte inşa edelim.</p>
          <button onClick={scrollToApply} className="btn-cta-dark">ARAMIZA KATIL</button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container-xl">
          <h2 className="h2-style text-center mb-16">Sıkça Sorulan Sorular</h2>
          <div style={{maxWidth: '850px', margin: '0 auto'}}>
            {faqData.map((faq, i) => (
              <div key={i} className={`faq-accordion-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-accordion-header">
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

      {/* Modal Form */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            {step === 'name' ? (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-2xl font-black text-center mb-2" style={{color: '#fff'}}>Aramıza Katıl</h3>
                <p className="text-zinc-500 text-center mb-10 text-sm">Web3 dünyasının kapılarını birlikte aralayalım.</p>
                
                <form onSubmit={handleSubmit}>
                  <label className="text-[10px] font-bold text-zinc-600 mb-2 uppercase tracking-widest block">Adınız*</label>
                  <input type="text" className="form-input-inf" placeholder="Ad" value={name} onChange={e=>setName(e.target.value)} required />
                  
                  <label className="text-[10px] font-bold text-zinc-600 mb-2 uppercase tracking-widest block">Soyadınız*</label>
                  <input type="text" className="form-input-inf" placeholder="Soyad" value={surname} onChange={e=>setSurname(e.target.value)} required />
                  
                  <button type="submit" disabled={loading} className="btn-submit-gold mt-6">
                    {loading ? 'TELEGRAM AÇILIYOR...' : 'DEVAM ET'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-10 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-cray-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,177,0,0.4)]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-3xl font-black mb-4" style={{color:'#fff'}}>Harika!</h3>
                <p className="text-zinc-500">Telegram bağlantınız doğrulandı. Ekibimiz sizinle en kısa sürede iletişime geçecek.</p>
                <button onClick={closeModal} className="btn-submit-gold mt-10 !w-fit !px-12 mx-auto">Kapat</button>
              </div>
            )}
          </div>
        </div>
      )}

      <div style={{ padding: '80px 0', textAlign: 'center', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 40px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 700, fontSize: '14px !important' }}>Ana Sayfaya Dön</button>
      </div>
    </div>
  );
};

export default InfluencersView;