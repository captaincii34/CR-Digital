import React, { useState } from 'react';
import { startTelegramConnectWithForm, waitUntilConnected } from "../utils/telegramBridge";

type InfluencerStep = 1 | 2 | 3 | 4 | 5 | 6 | 'success';

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

// Genişletilmiş Seçenekler
const twitterOptions = ["Retweet", "Tanıtım postu paylaş", "Tweet dizisi (Flood)", "Twitter Space / Sesli", "Sabitlenmiş tweet", "Belirli tweet’e yorum", "Profil Header Kiralama", "Bio Link Kiralama", "Etiket/Trending Topic", "Uzun Süreli Ambassadorluk"];
const telegramOptions = ["Grup/Kanal paylaşımı", "Tanıtım postu paylaş", "Kendi kanalında sesli (VC)", "Resmi kanalımızda etkinlik", "Soru-cevap mini etkinlik", "Grup Sabitleme (Pin)", "Bot Butonu Reklamı", "Klasör Ekleme (Folder add)", "Shilling Desteği"];
const youtubeOptions = ["5+ dakikalık video", "Shorts (1 dk)", "Canlı yayın", "Coin analizi", "Video içi sponsorluk", "Community Post paylaşımı", "Eğitim serisi katılımı", "Podcast / Röportaj"];
const otherPlatformOptions = [
  "CoinMarketCap yorum", "Binance Square paylaşımı", "Reddit (r/Crypto vb.)", "Discord topluluk paylaşımı", "TikTok videosu", "Medium makalesi", 
  "Dextools yorum/pin", "Quora paylaşımı", "TradingView analiz", "CoinGecko yorum", "LinkedIn post", "Dexscanner paylaşımı", 
  "Warpcast (Farcaster)", "Lens Protocol", "Debank Stream", "Galxe Campaign Support", "Zealy/QuestN Yönetimi"
];
const durationOptions = ["Tek Seferlik", "Haftalık", "Aylık / Devamlı"];

const InfluencersView: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState<InfluencerStep>(1);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Form states
  const [formData, setFormData] = useState({
    twitterHandle: "",
    youtubeLink: "",
    otherSocials: "",
    
    selectedTwitter: [] as string[],
    twitterFee: "",
    
    selectedTelegram: [] as string[],
    telegramFee: "",
    
    selectedYoutube: [] as string[],
    youtubeFee: "",
    
    selectedOthers: [] as string[],
    otherPlatformText: "", 
    othersFee: "",
    
    suggestions: "",
    duration: "",
    durationFee: "" 
  });

  const handleRegisterClick = () => {
    setIsModalOpen(true);
    setStep(1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStep(1);
  };

  const scrollToApply = () => {
    const el = document.getElementById('apply-now');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const toggleSelection = (key: keyof typeof formData, value: string) => {
    const current = formData[key] as string[];
    setFormData(prev => ({
      ...prev,
      [key]: current.includes(value) ? current.filter(v => v !== value) : [...current, value]
    }));
  };

  const handleNext = () => setStep(prev => (typeof prev === 'number' ? (prev + 1) as InfluencerStep : prev));
  const handlePrev = () => setStep(prev => (typeof prev === 'number' ? (prev - 1) as InfluencerStep : prev));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const formPayload = {
        "X (Twitter)": formData.twitterHandle,
        "YouTube": formData.youtubeLink,
        "Other Channels": formData.otherSocials,
        "Twitter Choices": formData.selectedTwitter.join(", "),
        "Twitter Fee (USDT)": formData.twitterFee || "Belirtilmedi",
        "Telegram Choices": formData.selectedTelegram.join(", "),
        "Telegram Fee (USDT)": formData.telegramFee || "Belirtilmedi",
        "YouTube Choices": formData.selectedYoutube.join(", "),
        "YouTube Fee (USDT)": formData.youtubeFee || "Belirtilmedi",
        "Other Platform Choices": formData.selectedOthers.join(", "),
        "Extra Platform Text": formData.otherPlatformText || "Yok",
        "Other Platforms Fee (USDT)": formData.othersFee || "Belirtilmedi",
        "Partnership Duration": formData.duration,
        "Package/Consultancy Fee (USDT)": formData.durationFee || "Görüşülecek",
        "Suggestions/Notes": formData.suggestions,
        "Type": "Advanced Influencer Onboarding V2",
        "Sent At": new Date().toISOString(),
      };

      const code = await startTelegramConnectWithForm(formPayload);
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
        
        .influencers-page .h1-style { font-size: 40px !important; font-weight: 800 !important; line-height: 1.2; margin-bottom: 24px; }
        .h2-style { font-size: 32px !important; font-weight: 800 !important; margin-bottom: 20px; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; color: #ccc; line-height: 1.8; }
        
        .hero-section { position: relative; padding: 120px 0 80px; }
        .hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.25; z-index: 0; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent, #000); z-index: 1; }

        .feature-list { margin-top: 50px; display: flex; flex-direction: column; gap: 30px; max-width: 700px; }
        .feature-item { display: flex; gap: 20px; }
        .feature-tick { width: 28px; height: 28px; background: var(--cray-gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 5px; }
        .feature-content h4 { font-size: 20px !important; font-weight: 800 !important; color: #fff; margin-bottom: 5px; }
        .feature-content p { font-size: 15px !important; color: #888; margin: 0; }

        .register-section { position: relative; padding: 70px 0; background: #050505; text-align: center; border-top: 1px solid rgba(255,177,0,0.1); border-bottom: 1px solid rgba(255,177,0,0.1); }
        .register-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.15; mix-blend-mode: overlay; }

        .why-us-section { padding: 100px 0; }
        .why-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 20px; margin-top: 60px; }
        @media (min-width: 1024px) { .why-grid { grid-template-columns: repeat(4, 1fr); } }
        
        .why-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 40px 30px; border-radius: 24px; transition: 0.4s; height: 100%; text-align: center; }
        .why-card:hover { border-color: var(--cray-gold); background: rgba(255,177,0,0.05); transform: translateY(-10px); }
        .why-card h4 { font-size: 18px !important; font-weight: 800 !important; margin-bottom: 15px; color: var(--cray-gold); }
        .why-card p { font-size: 14px !important; color: #999; margin: 0; line-height: 1.6; }

        .cta-band { background: var(--cray-gold); padding: 80px 0; color: #000; text-align: center; }
        .btn-cta-dark { background: #000; color: #fff; padding: 18px 50px; border-radius: 12px; font-weight: 800 !important; border: none; cursor: pointer; text-transform: uppercase; transition: 0.3s; }

        .faq-section { padding: 120px 0; background: #000; }
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }

        /* Modal Styles */
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.92); backdrop-filter: blur(25px); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .modal-box { background: #111; border: 1px solid var(--cray-gold); border-radius: 32px; width: 100%; max-width: 650px; position: relative; padding: 50px 40px; box-shadow: 0 40px 100px rgba(0,0,0,0.8); overflow-y: auto; max-height: 90vh; }
        .modal-close { position: absolute; top: 25px; right: 25px; background: none; border: none; color: #555; cursor: pointer; transition: 0.3s; }
        .modal-close:hover { color: var(--cray-gold); transform: rotate(90deg); }
        
        .step-indicator { display: flex; gap: 6px; margin-bottom: 40px; }
        .step-dot { height: 4px; flex: 1; background: #222; border-radius: 2px; }
        .step-dot.active { background: var(--cray-gold); box-shadow: 0 0 10px var(--cray-gold); }

        .form-input-inf { width: 100%; background: #000; border: 1px solid #222; border-radius: 12px; padding: 14px 18px; color: #fff; font-size: 14px !important; margin-bottom: 20px; outline: none; transition: 0.3s; }
        .form-input-inf:focus { border-color: var(--cray-gold); }

        .check-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 8px; margin-bottom: 20px; }
        @media (min-width: 640px) { .check-grid { grid-template-columns: repeat(2, 1fr); } }
        
        .check-card { 
          padding: 14px; 
          background: #1a1a1a; 
          border: 1px solid #222; 
          border-radius: 12px; 
          cursor: pointer; 
          transition: 0.3s; 
          display: flex; 
          align-items: center; 
          gap: 12px;
          color: #777;
        }
        .check-card:hover { border-color: var(--cray-gold); }
        .check-card.active { border-color: var(--cray-gold); background: rgba(255,177,0,0.05); color: #fff; }
        .check-circle { width: 18px; height: 18px; border-radius: 50%; border: 2px solid #333; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
        .active .check-circle { border-color: var(--cray-gold); background: var(--cray-gold); }

        .modal-nav { display: flex; justify-content: space-between; gap: 15px; margin-top: 30px; }
        .btn-modal-prev { flex: 0.3; background: transparent; border: 1px solid #333; color: #888; padding: 16px; border-radius: 12px; font-weight: 700; cursor: pointer; text-transform: uppercase; font-size: 12px; }
        .btn-modal-next { flex: 1; background: var(--cray-gold); color: #000; border: none; padding: 16px; border-radius: 12px; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; font-size: 13px; }
        .btn-modal-next:disabled { opacity: 0.4; cursor: not-allowed; }

        .fee-input-wrap { background: #0a0a0a; padding: 20px; border-radius: 18px; border: 1px dashed #333; margin-top: 5px; margin-bottom: 15px; }
        .form-label-min { font-size: 10px !important; font-weight: 800; text-transform: uppercase; color: #555; letter-spacing: 1.5px; margin-bottom: 8px; display: block; }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2832" className="hero-bg" alt="Hero Background" />
        <div className="hero-overlay"></div>
        <div className="container-xl">
          <h5 style={{color: 'var(--cray-gold)', letterSpacing: '8px', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 800, fontSize: '12px !important'}}>CRAYUP INFLUENCER EKOSİSTEMİ</h5>
          <h1 className="h1-style">Kripto Dünyasının En Güçlü <br/> Fenomen Ağına Katılın</h1>
          <p className="p-style">CrayUp strategic ortakları arasında yerinizi alın. Global Web3 projeleriyle topluluğunuzu buluşturun.</p>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-tick">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="feature-content">
                <h4>Gizli İş Akışı Kanalı</h4>
                <p>Sadece kayıtlı influencerlarımıza özel bütçeli kampanya fırsatları.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-tick">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="feature-content">
                <h4>CrayBot İle Anında Bilgi, Anında Bildirim</h4>
                <p>Sadece kayıtlı influencerlarımıza özel anında bilgi ve iş bildirim sistemi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kayıt Ol Section */}
      <section id="apply-now" className="register-section">
        <div className="container-xl">
          <h2 className="h2-style">Hemen Şimdi Başvurun</h2>
          <p className="p-style mx-auto mb-10 max-w-2xl">Sadece kanallarinizi belirterek CrayUp'in global ağina dahil olun.</p>
          <button onClick={handleRegisterClick} className="cta-button !px-24 !py-6 font-black text-lg">KAYIT OL</button>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us-section bg-black">
        <div className="container-xl">
          <h2 className="h2-style text-center">Neden Bizimle Çalışmalısınız?</h2>
          <div className="why-grid">
            <div className="why-card"><h4>Sıfır Komisyon</h4><p>Influencer ve marka arasındaki köprüde ek ücret talep edilmez.</p></div>
            <div className="why-card"><h4>Doğrudan İletişim</h4><p>Resmi ekiplerimizle Telegram üzerinden anlık koordinasyon.</p></div>
            <div className="why-card"><h4>Global Marka Gücü</h4><p>Bybit, Gate.io ve MEXC projelerinde yer alma fırsatı.</p></div>
            <div className="why-card"><h4>Geleceğin Parçası</h4><p>Web3 devrimini bizim projelerimizle en önden takip edin.</p></div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band">
        <div className="container-xl text-center">
          <h2 className="h2-style text-black">Hemen Aramıza Katıl</h2>
          <button onClick={scrollToApply} className="btn-cta-dark">ARAMIZA KATIL</button>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container-xl">
          <h2 className="h2-style text-center mb-16">Sıkça Sorulan Sorular</h2>
          <div style={{maxWidth: '850px', margin: '0 auto'}}>
            {faqData.map((faq, i) => (
              <div key={i} className={`faq-accordion-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-accordion-header">
                  <span className="font-bold">{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cray-gold)" strokeWidth="3" style={{transform: openFaq === i ? 'rotate(180deg)' : ''}}><path d="M19 9l-7 7-7-7"/></svg>
                </div>
                <div className="faq-accordion-body p-style"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kayıt Modalı */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box no-scrollbar" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            {step !== 'success' && (
              <div className="step-indicator">
                {[1,2,3,4,5,6].map(i => <div key={i} className={`step-dot ${step >= i ? 'active' : ''}`}></div>)}
              </div>
            )}

            {/* Step 1: Kanallar */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-black mb-2">Kanallarınızı Ekleyin</h3>
                <p className="text-zinc-500 text-sm mb-8">Hangi mecralarda kitlelere hitap ediyorsunuz?</p>
                
                <label className="form-label-min">Twitter (X) Kullanıcı Adı veya Link*</label>
                <input type="text" className="form-input-inf" placeholder="@username" value={formData.twitterHandle} onChange={e=>setFormData({...formData, twitterHandle: e.target.value})} required />
                
                <label className="form-label-min">YouTube Kanal Linki (İsteğe Bağlı)</label>
                <input type="text" className="form-input-inf" placeholder="youtube.com/c/channel" value={formData.youtubeLink} onChange={e=>setFormData({...formData, youtubeLink: e.target.value})} />
                
                <label className="form-label-min">Diğer Sosyal Medya Kanalları</label>
                <textarea className="form-input-inf h-20 resize-none" placeholder="Varsa TikTok, Instagram vb. adresleriniz..." value={formData.otherSocials} onChange={e=>setFormData({...formData, otherSocials: e.target.value})} />
                
                <div className="modal-nav">
                  <div style={{flex: 0.3}}></div>
                  <button onClick={handleNext} disabled={!formData.twitterHandle} className="btn-modal-next">İLERLE</button>
                </div>
              </div>
            )}

            {/* Step 2: Twitter Seçenekleri */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-black mb-2">Twitter Çalışma Seçenekleri</h3>
                <p className="text-zinc-500 text-sm mb-8">Yapabileceklerinizi işaretleyin.</p>
                
                <div className="check-grid">
                  {twitterOptions.map(opt => (
                    <div key={opt} onClick={() => toggleSelection('selectedTwitter', opt)} className={`check-card ${formData.selectedTwitter.includes(opt) ? 'active' : ''}`}>
                      <div className="check-circle">{formData.selectedTwitter.includes(opt) && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}</div>
                      <span className="text-[11px] font-bold uppercase">{opt}</span>
                    </div>
                  ))}
                </div>

                <div className="fee-input-wrap">
                  <label className="form-label-min">Ücret Beklentisi (USDT - Opsiyonel)</label>
                  <input type="number" className="form-input-inf mb-0" placeholder="Örn: 250" value={formData.twitterFee} onChange={e=>setFormData({...formData, twitterFee: e.target.value})} />
                  <p className="text-[9px] text-zinc-500 mt-2 italic">Lütfen sadece sayı yazınız. Boş bırakırsanız süreçte konuşulacaktır.</p>
                </div>

                <div className="modal-nav">
                  <button onClick={handlePrev} className="btn-modal-prev">GERİ</button>
                  <button onClick={handleNext} className="btn-modal-next">İLERLE (TELEGRAM)</button>
                </div>
              </div>
            )}

            {/* Step 3: Telegram Seçenekleri */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-black mb-2">Telegram Çalışma Seçenekleri</h3>
                <p className="text-zinc-500 text-sm mb-8">Kanalınızda sunabileceğiniz hizmetler.</p>
                
                <div className="check-grid">
                  {telegramOptions.map(opt => (
                    <div key={opt} onClick={() => toggleSelection('selectedTelegram', opt)} className={`check-card ${formData.selectedTelegram.includes(opt) ? 'active' : ''}`}>
                      <div className="check-circle">{formData.selectedTelegram.includes(opt) && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}</div>
                      <span className="text-[11px] font-bold uppercase">{opt}</span>
                    </div>
                  ))}
                </div>

                <div className="fee-input-wrap">
                  <label className="form-label-min">Ücret Beklentisi (USDT - Opsiyonel)</label>
                  <input type="number" className="form-input-inf mb-0" placeholder="Örn: 150" value={formData.telegramFee} onChange={e=>setFormData({...formData, telegramFee: e.target.value})} />
                </div>

                <div className="modal-nav">
                  <button onClick={handlePrev} className="btn-modal-prev">GERİ</button>
                  <button onClick={handleNext} className="btn-modal-next">İLERLE (YOUTUBE)</button>
                </div>
              </div>
            )}

            {/* Step 4: YouTube Seçenekleri */}
            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-black mb-2">YouTube Çalışma Seçenekleri</h3>
                <p className="text-zinc-500 text-sm mb-8">Video ve içerik üretim modelleri.</p>
                
                <div className="check-grid">
                  {youtubeOptions.map(opt => (
                    <div key={opt} onClick={() => toggleSelection('selectedYoutube', opt)} className={`check-card ${formData.selectedYoutube.includes(opt) ? 'active' : ''}`}>
                      <div className="check-circle">{formData.selectedYoutube.includes(opt) && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}</div>
                      <span className="text-[11px] font-bold uppercase">{opt}</span>
                    </div>
                  ))}
                </div>

                <div className="fee-input-wrap">
                  <label className="form-label-min">Ücret Beklentisi (USDT - Opsiyonel)</label>
                  <input type="number" className="form-input-inf mb-0" placeholder="Örn: 500" value={formData.youtubeFee} onChange={e=>setFormData({...formData, youtubeFee: e.target.value})} />
                </div>

                <div className="modal-nav">
                  <button onClick={handlePrev} className="btn-modal-prev">GERİ</button>
                  <button onClick={handleNext} className="btn-modal-next">İLERLE (DİĞER)</button>
                </div>
              </div>
            )}

            {/* Step 5: Diğer Platformlar */}
            {step === 5 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-black mb-2">Diğer Platform Seçenekleri</h3>
                <p className="text-zinc-500 text-sm mb-8">Ekstra katkı sağlayabileceğiniz alanlar.</p>
                
                <div className="check-grid no-scrollbar" style={{ maxHeight: '220px', overflowY: 'auto' }}>
                  {otherPlatformOptions.map(opt => (
                    <div key={opt} onClick={() => toggleSelection('selectedOthers', opt)} className={`check-card ${formData.selectedOthers.includes(opt) ? 'active' : ''}`}>
                      <div className="check-circle">{formData.selectedOthers.includes(opt) && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}</div>
                      <span className="text-[10px] font-bold uppercase">{opt}</span>
                    </div>
                  ))}
                </div>

                <label className="form-label-min">Listede Olmayan Platformlar (Opsiyonel)</label>
                <input type="text" className="form-input-inf" placeholder="Örn: Warpcast, Mastodon vb." value={formData.otherPlatformText} onChange={e=>setFormData({...formData, otherPlatformText: e.target.value})} />

                <div className="fee-input-wrap">
                  <label className="form-label-min">Diğer İşler İçin Ücret Beklentisi (USDT)</label>
                  <input type="number" className="form-input-inf mb-0" placeholder="Örn: 100" value={formData.othersFee} onChange={e=>setFormData({...formData, othersFee: e.target.value})} />
                </div>

                <div className="modal-nav">
                  <button onClick={handlePrev} className="btn-modal-prev">GERİ</button>
                  <button onClick={handleNext} className="btn-modal-next">SON ADIM</button>
                </div>
              </div>
            )}

            {/* Step 6: Final Details */}
            {step === 6 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-black mb-2">İş Birliği Modeli</h3>
                <p className="text-zinc-500 text-sm mb-8">Süreçleri ve bütçeyi netleştirelim.</p>
                
                <label className="form-label-min">İş Birliği Süresi*</label>
                <div className="check-grid">
                  {durationOptions.map(d => (
                    <div key={d} onClick={() => setFormData({...formData, duration: d})} className={`check-card ${formData.duration === d ? 'active' : ''}`}>
                      <div className="check-circle">{formData.duration === d && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}</div>
                      <span className="text-xs font-bold uppercase">{d}</span>
                    </div>
                  ))}
                </div>

                <div className="fee-input-wrap">
                  <label className="form-label-min">Genel Danışmanlık/Paket Ücreti (USDT)</label>
                  <input type="number" className="form-input-inf mb-2" placeholder="Örn: 2000" value={formData.durationFee} onChange={e=>setFormData({...formData, durationFee: e.target.value})} />
                  <p className="text-[10px] text-zinc-400 italic leading-relaxed">
                    * Çalışma modelleri belirlenir, influencer ile tek fiyat tek paket üzerinden anlaşılır. Bunu bir aylık danışmanlık ücreti veya kampanya yönetim bedeli gibi düşünebilirsiniz.
                  </p>
                </div>

                <label className="form-label-min mt-4">Ekstra Önerileriniz</label>
                <textarea className="form-input-inf h-20 resize-none" placeholder="Size özel çalışma modelleri varsa yazın..." value={formData.suggestions} onChange={e=>setFormData({...formData, suggestions: e.target.value})} />

                <div className="modal-nav">
                  <button onClick={handlePrev} className="btn-modal-prev">GERİ</button>
                  <button onClick={handleSubmit} disabled={loading || !formData.duration} className="btn-modal-next">
                    {loading ? 'İLETİLİYOR...' : 'BAŞVURUYU TAMAMLA'}
                  </button>
                </div>
              </div>
            )}

            {step === 'success' && (
              <div className="text-center py-10 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-cray-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,177,0,0.4)]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-3xl font-black mb-4">Harika!</h3>
                <p className="text-zinc-400">Tüm verileriniz başarıyla kaydedildi ve Telegram bağlantınız doğrulandı. KOL departmanımız bütçe ve içerik planı için sizinle en kısa sürede iletişime geçecek.</p>
                <button onClick={closeModal} className="btn-modal-next mt-10 !w-fit !px-12 mx-auto">Kapat</button>
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