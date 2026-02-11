import React, { useState } from 'react';
import { startTelegramConnectWithForm, waitUntilConnected } from "../utils/telegramBridge";

const ServicesView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string>("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const mainServices = [
    { title: "End-to-End Crypto Project Consulting", desc: "Managing the entire process from idea to market with a single expert team.", link: "#services/end-to-end-crypto-project-consulting" },
    { title: "Token & Blockchain Development", desc: "Expert tokenomics design, smart contracts, and technical architecture.", link: "#services/token-and-blockchain-development" },
    { title: "Blockchain & Software Development", desc: "High-performance Web3 websites, dashboards, and custom software.", link: "#services/blockchain-and-software-development" },
    { title: "Token Launch & Listing Services", desc: "Strategic DEX/CEX launches and comprehensive listing management.", link: "#services/token-launch-and-listing" },
    { title: "Crypto & Web3 Marketing Services", desc: "ROI-driven growth, influencer campaigns, and global PR strategies.", link: "#services/crypto-marketing" },
    { title: "Social Media & Community Management", desc: "24/7 moderation and organic growth on X, Telegram, and Discord.", link: "#services/community-management" },
    { title: "Content Production (Video & Design)", desc: "Futuristic 3D motion graphics and premium brand identity design.", link: "#services/content-production" },
    { title: "Market Making & Liquidity Solutions", desc: "Algorithmic liquidity management for order book health and stability.", link: "#services/market-making" },
    { title: "Investment Consulting & Fundraising", desc: "Strategic round planning and direct access to global VC networks.", link: "#services/investment-consulting" },
    { title: "Partnerships & Business Development", desc: "Ecosystem collaborations that drive long-term project value.", link: "#services/partnerships" }
  ];

  const faqs = [
    { q: "What does '360-degree service' mean at CRAY Digital?", a: "It means we handle everything. From your initial whitepaper and tokenomics design to technical development, global marketing, exchange listings, and post-launch liquidity management. You don't need to coordinate multiple agencies; we are your single project partner." },
    { q: "Can I choose only one specific service?", a: "Yes, our model is flexible. While we specialize in end-to-end management, you can hire us for specific needs like Smart Contract development, KOL marketing, or MEXC/Binance listing consultancy." },
    { q: "How fast can we launch a project?", a: "A standard high-quality launch typically takes 3 to 6 months. However, for established projects needing specific growth boosts, we can implement strategies within weeks." },
    { q: "Do you provide legal and audit support?", a: "We work with top-tier legal partners for Opinion Letters and global audit firms like CertiK and Hacken to ensure your project meets all regulatory and security standards." },
    { q: "How do you track the success of marketing campaigns?", a: "We focus on on-chain data. We track real holder growth, DEX volume increases, and community sentiment shifts rather than just empty 'likes' and 'follows'." }
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const formObj = {
        "Service Interest": selectedService || "Not Selected",
        "Describe your needs": description,
        "Type": "Services Page Project Consultation",
        "Sent At": new Date().toISOString(),
        "Page": window.location.href,
      };

      // 1) Formu backend'e taslak olarak gönder ve Telegram linkini aç
      const code = await startTelegramConnectWithForm(formObj);

      // 2) Kullanıcı Telegram'da botu başlatana kadar bekle
      const ok = await waitUntilConnected(code);
      if (!ok) {
        alert("Please open the bot in Telegram and press Start. Then you can try again.");
        setLoading(false);
        return;
      }

      // Başarılı durum
      alert("Telegram connection established and request transmitted! Our team will contact you shortly.");
      setDescription("");
      setSelectedService("");
    } catch (err: any) {
      console.error(err);
      alert("Could not initiate Telegram connection. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="services-page">
      <style>{`
        .services-page { background-color: #000; color: #fff; overflow-x: hidden; }
        .section-padding { padding: 100px 0; position: relative; }
        .container-xl { max-width: 1280px; margin: 0 auto; padding: 0 32px; width: 100%; position: relative; z-index: 10; }
        .bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.75); z-index: 1; }
        .grad { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent 40%, transparent 60%, #000); z-index: 2; }
        
        .h1-style { font-size: 48px !important; font-weight: 800 !important; }
        .h2-style { font-size: 36px !important; font-weight: 700 !important; }
        .h3-style { font-size: 24px !important; font-weight: 700 !important; color: var(--cray-gold); }
        .p-style { font-size: 16px !important; font-weight: 300 !important; line-height: 1.8; }

        /* Hero */
        #s-hero { position: relative; padding: 220px 0 100px; min-height: 90vh; display: flex; align-items: center; }
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 60px; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { grid-template-columns: 1.1fr 0.9fr; align-items: center; } }
        
        .hero-bullets { margin-top: 32px; }
        .hero-bullet { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; font-weight: 700 !important; text-transform: uppercase; font-size: 13px !important; }
        .bullet-icon { width: 20px; height: 20px; background: var(--cray-gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        
        .form-card { background: #f7f7f7; padding: 40px; border-radius: 24px; color: #000; box-shadow: 0 40px 80px rgba(0,0,0,0.6); }
        .custom-select-box { position: relative; border: 1px solid #ddd; border-radius: 12px; background: #fff; margin-bottom: 16px; }
        .custom-select-trigger { padding: 14px 18px; font-size: 14px; font-weight: 700; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .custom-options { max-height: 250px; overflow-y: auto; position: absolute; top: 100%; left: 0; right: 0; background: #fff; border: 1px solid #ddd; border-radius: 0 0 12px 12px; z-index: 50; }
        .custom-option { padding: 12px 18px; font-size: 12px; font-weight: 600; cursor: pointer; border-bottom: 1px solid #f5f5f5; transition: 0.2s; }
        .custom-option:hover { background: rgba(255,177,0,0.1); color: var(--cray-gold); }
        .custom-option.selected { background: var(--cray-gold); color: #000; }

        .form-input-s { width: 100%; background: #fff; border: 1px solid #ddd; padding: 14px 18px; border-radius: 12px; color: #000; margin-bottom: 16px; font-size: 14px; outline: none; transition: 0.3s; }
        .form-input-s:focus { border-color: var(--cray-gold); }
        .form-textarea-s { height: 120px; resize: none; }

        .btn-submit-gold { 
          width: 100%; 
          background: var(--cray-gold); 
          color: #000; 
          padding: 18px; 
          border-radius: 12px; 
          font-weight: 800 !important; 
          border: none; 
          cursor: pointer; 
          text-transform: uppercase; 
          letter-spacing: 1px;
          transition: 0.3s;
        }
        .btn-submit-gold:hover { filter: brightness(1.1); transform: translateY(-2px); }

        /* Down Arrow */
        .scroll-down { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); z-index: 20; animation: bounce 2s infinite; color: var(--cray-gold); }
        @keyframes bounce { 0%, 20%, 50%, 80%, 100% {transform: translateX(-50%) translateY(0);} 40% {transform: translateX(-50%) translateY(-10px);} 60% {transform: translateX(-50%) translateY(-5px);} }

        /* Summary Section */
        .summary-section { position: relative; padding: 120px 0; background: #050505; }
        .summary-text-box { max-width: 900px; margin: 0 auto; text-align: center; }

        /* Grid Section */
        .services-grid-section { padding: 120px 0; position: relative; overflow: hidden; background: #000; }
        .services-main-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 24px; position: relative; z-index: 10; }
        @media (min-width: 640px) { .services-main-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1200px) { .services-main-grid { grid-template-columns: repeat(5, 1fr); } }
        
        .service-box { 
          background: rgba(0,0,0,0.6); 
          border: 1px solid rgba(255,255,255,0.1); 
          padding: 32px; 
          border-radius: 24px; 
          transition: 0.4s; 
          text-decoration: none; 
          display: flex; 
          flex-direction: column; 
          height: 100%;
          backdrop-filter: blur(10px);
        }
        .service-box:hover { transform: translateY(-8px); border-color: var(--cray-gold); background: rgba(255,177,0,0.05); }
        
        .service-box h4.portfolio-h4 { 
          color: var(--cray-gold) !important; 
          margin-bottom: 15px; 
          transition: 0.3s;
          font-weight: 800 !important;
          font-size: 13px !important;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .service-box:hover h4.portfolio-h4 { filter: brightness(1.2); }
        
        .service-box p { color: #ccc; font-size: 13px !important; line-height: 1.6; }

        /* FAQ */
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      {/* 1. Hero Section */}
      <section id="s-hero">
        <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop" className="bg-img" alt="Services Background" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text-content">
              <h2 className="h2-style mb-4">Services</h2>
              <h3 className="h3-style mb-6">360° Growth & Engineering Powerhouse</h3>
              <p className="p-style text-zinc-300 max-w-xl">
                We provide the complete technical, strategic, and marketing architecture required to build a global Web3 project. Our approach ensures every part of your ecosystem works in perfect harmony.
              </p>
              <div className="hero-bullets">
                {["Institutional Grade Engineering", "ROI-Focused Growth Models", "Direct Exchange & VC Network"].map((item, i) => (
                  <div key={i} className="hero-bullet">
                    <div className="bullet-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-card">
              <h4 className="text-xl font-black mb-6 text-center uppercase tracking-wider">Project Consultation</h4>
              <form onSubmit={handleFormSubmit}>
                <p className="text-[10px] font-bold text-zinc-400 mb-2 uppercase tracking-widest">Which service are you interested in?*</p>
                <div className="custom-select-box">
                  <div className="custom-select-trigger" onClick={() => setIsServiceOpen(!isServiceOpen)}>
                    <span className={selectedService ? "text-black" : "text-zinc-400"}>
                      {selectedService || "Select a service..."}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{transform: isServiceOpen ? 'rotate(180deg)' : ''}}><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                  {isServiceOpen && (
                    <div className="custom-options">
                      {mainServices.map(s => (
                        <div 
                          key={s.title} 
                          className={`custom-option ${selectedService === s.title ? 'selected' : ''}`}
                          onClick={() => { setSelectedService(s.title); setIsServiceOpen(false); }}
                        >
                          {s.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-[10px] font-bold text-zinc-400 mb-2 uppercase tracking-widest">Describe your needs*</p>
                <textarea 
                  className="form-input-s form-textarea-s" 
                  placeholder="How can we help you scale your project?" 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required 
                />

                <button type="submit" disabled={loading} className="btn-submit-gold">
                  {loading ? 'OPENING TELEGRAM...' : 'SUBMIT APPLICATION'}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
        </div>
      </section>

      {/* 2. Summary Section */}
      <section className="summary-section">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Summary Background" />
        <div className="overlay" style={{background: 'rgba(0,0,0,0.9)'}}></div><div className="grad"></div>
        <div className="container-xl">
          <div className="summary-text-box">
            <h2 className="h2-style mb-12">The Impact of CRAY Digital Standards</h2>
            <div className="space-y-6 text-zinc-300">
              <p className="p-style">CRAY Digital represents the pinnacle of Web3 consulting, where professional engineering meets viral marketing expertise. We don't just provide a service; we integrate ourselves as the core technical and strategic department of your project. Our impact is measured through the sustainable growth of over 500 successful projects globally. We understand that in the crypto space, reputation is the most valuable asset, and we protect yours with rigorous audit-standard development. Our 360-degree approach ensures that your tokenomics, smart contracts, and marketing funnels are all rowing in the same direction.</p>
              <p className="p-style">We have built direct communication lines with Tier-1 exchanges and global VC networks, opening doors that are normally closed to emerging projects. Our content production team speaks the visual language of the future, turning complex technology into captivating stories. Whether it's managing 24/7 moderation or architecting high-frequency trading bots, we deliver institutional quality across the board. CRAY Digital's influence stretches across more than 30 countries, providing a truly global perspective on market cycles. We are committed to transparency, providing real-time on-chain data reporting for all our operations. Choosing CRAY Digital means choosing a legacy of excellence and a future built on solid, decentralized foundations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="services-grid-section">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" className="bg-img" alt="Portfolio Background" />
        <div className="overlay" style={{background: 'rgba(0,0,0,0.85)'}}></div><div className="grad"></div>
        <div className="container-xl">
          <div className="text-center mb-16">
            <h2 className="h2-style mb-4">Our Service Portfolio</h2>
            <p className="p-style text-zinc-500">Explore our comprehensive range of specialized Web3 solutions.</p>
          </div>
          <div className="services-main-grid">
            {mainServices.map((s, i) => (
              <a href={s.link} key={i} className="service-box">
                <h4 className="portfolio-h4">{s.title}</h4>
                <p className="p-style">{s.desc}</p>
                <div className="mt-auto pt-6 text-cray-gold text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Band */}
      <section className="section-padding" style={{background: 'rgba(255,177,0,0.05)', textAlign: 'center'}}>
        <div className="container-xl">
          <h2 className="h2-style mb-6">Ready to Scale Your Project Globally?</h2>
          <p className="p-style text-zinc-400 mb-10 max-w-2xl mx-auto">Join the ranks of high-tier projects that trust CRAY Digital for their success architecture.</p>
          <a href="#calendar" className="cta-button !px-16 !py-6">Start a Discovery Meeting</a>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style text-center mb-16">Frequently Asked Questions</h2>
          <div style={{maxWidth: '850px', margin: '0 auto'}}>
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-accordion-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-accordion-header h4-style">
                  <span className="font-bold text-base">{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cray-gold)" strokeWidth="3" style={{transform: openFaq === i ? 'rotate(180deg)' : ''}}><path d="M19 9l-7 7-7-7" /></svg>
                </div>
                <div className="faq-accordion-body p-style"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ padding: '60px 0', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase' }}>Back to Homepage</button>
      </div>
    </div>
  );
};

export default ServicesView;