import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const TokenListingDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const [listingType, setListingType] = useState('');
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
    const result = await evaluateProject(status, `Listing Goal: ${listingType}. Goal: ${goal}`);
    setAiResult(result);
    setLoading(false);
  };

  const listingScope = [
    { title: "Token Launch Strategy", desc: "Selecting the most correct timing and platform based on market conditions.", icon: "🚀" },
    { title: "DEX Launch Management", desc: "Uniswap, PancakeSwap, and Raydium liquidity setup.", icon: "🥞" },
    { title: "CEX Listing Consulting", desc: "Communication and application processes with Tier-1 and Tier-2 exchanges.", icon: "🏛️" },
    { title: "Launchpad Prep Processes", desc: "Making the project compliant with launchpad criteria.", icon: "🛫" },
    { title: "Pre-Listing Marketing", desc: "Community building, hype management, and pre-promotion.", icon: "📈" },
    { title: "Post-Listing Growth", desc: "Sustainable volume and holder increase strategies.", icon: "💎" },
    { title: "Exchange Comm & Process Management", desc: "Tracking all technical and commercial negotiations with exchanges.", icon: "📱" },
    { title: "Listing Documentation", desc: "Preparing technical reviews and legal documents.", icon: "📋" }
  ];

  const reasons = [
    {
      icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
      title: 'NDA & Confidentiality Priority',
      desc: 'The security of your projects is our most important concern'
    },
    {
      icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>,
      title: "End-to-End Project Approach",
      desc: 'We are with you at every step from ideation to launch'
    },
    {
      icon: <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>,
      title: 'Web3 & Crypto Focused Expertise',
      desc: 'Experienced team focused exclusively on crypto and Web3 projects'
    }
  ];

  const advantages = [
    "Faster listing approval",
    "Advantages in exchange commissions",
    "Professional liquidity management",
    "Stronger exchange relationships"
  ];

  const faqs = [
    { q: "On which exchanges can you list?", a: "We have an extensive partner network ranging from Tier-1 exchanges like Binance, OKX, Bybit to Tier-2 exchanges like MEXC, Gate.io." },
    { q: "What are the DEX listing requirements?", a: "A correctly structured liquidity pool, token contract, and exchange interface integration. We manage the entire process." },
    { q: "Do you provide market making support?", a: "Yes, we offer professional liquidity solutions for post-listing order book health and volume management." },
    { q: "How long does the listing process take?", a: "It varies between 2 weeks to 2 months depending on the type of exchange and project readiness." }
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

        #h-hero { position: relative; padding: 220px 0 120px; background-color: #000; min-height: 85vh; display: flex; align-items: center; }
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

        .why-us-section { position: relative; padding: 120px 0; background-color: #000; color: #fff; overflow: hidden; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        
        .reason-card { padding: 48px 32px; border-radius: 24px; text-align: center; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); transition: 0.4s; }
        .reason-card:hover { background: rgba(255, 177, 0, 0.08); border-color: rgba(255, 177, 0, 0.5); transform: translateY(-10px); }
        .reason-icon-box { width: 60px; height: 60px; background-color: var(--cray-gold); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.3); }

        .scope-section { position: relative; padding: 120px 0; overflow: hidden; background-color: #000; color: #fff; }
        .scope-header { text-align: center; margin-bottom: 72px; position: relative; z-index: 10; }
        .scope-grid { display: grid; grid-template-columns: 1fr; gap: 24px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .scope-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .scope-grid { grid-template-columns: repeat(4, 1fr); } }
        
        .scope-card { padding: 36px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 16px; transition: 0.3s; background: rgba(0,0,0,0.4); backdrop-filter: blur(8px); }
        .scope-card:hover { background: rgba(255, 177, 0, 0.06); border-color: var(--cray-gold); transform: translateY(-5px); box-shadow: 0 12px 30px rgba(255, 177, 0, 0.25); }
        .scope-icon { font-size: 44px; transition: 0.3s; }
        .scope-name { color: #fff; line-height: 1.2; font-weight: 700; }
        .scope-card:hover .scope-name { color: var(--cray-gold); }
        .scope-summary { color: #9ca3af; font-size: 13px !important; }

        .bant-section { background: #f9f9f9; padding: 80px 0; text-align: center; }
        .bant-btn { background: var(--cray-gold); color: #000; padding: 18px 40px; border-radius: 12px; font-weight: 700 !important; text-decoration: none; display: inline-block; box-shadow: 0 10px 25px rgba(255,177,0,0.4); }

        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; transition: 0.3s; }
        .faq-accordion-item:hover { border-color: #333; }
        .faq-accordion-header { padding: 24px 32px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      {/* Hero Section */}
      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Token Listing Strategy" />
        <div className="overlay"></div>
        <div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text-content">
              <h1 className="hero-title h1-style">Token Launch & Listing Services</h1>
              <p className="hero-desc p-style">
                We offer end-to-end strategy for your project to have a successful launch on global exchanges (CEX) or decentralized platforms (DEX). We stand by you at every step, from exchange relations to liquidity management.
              </p>
              
              <div className="hero-feature-list">
                {["Tier-1 and Tier-2 Exchange Network", "Strategic Launch Planning", "Legal and Technical Compliance Support", "DEX Liquidity Optimization"].map((item, i) => (
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
                <h3 className="h3-style" style={{textAlign: 'center', marginBottom: '24px'}}>Listing Evaluation</h3>
                {aiResult ? (
                  <div className="ai-result">
                    <p className="p-style" style={{ fontStyle: 'italic', marginBottom: '24px' }}>"{aiResult.summary}"</p>
                    <button onClick={() => setAiResult(null)} className="form-button">Analyze Again</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <select className="form-control p-style" value={status} onChange={(e) => setStatus(e.target.value)} required>
                        <option value="">Project Phase</option>
                        <option value="new">Pre-Launch</option>
                        <option value="existing">Listed / New Exchange Goal</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-control p-style" value={listingType} onChange={(e) => setListingType(e.target.value)} required>
                        <option value="">Target Listing</option>
                        <option value="dex">DEX Only (Uniswap etc.)</option>
                        <option value="cex">CEX Listing</option>
                        <option value="both">Both DEX and CEX</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control p-style" rows={3} placeholder="Are there target exchanges?" value={goal} onChange={(e) => setGoal(e.target.value)} required style={{resize: 'none'}} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control p-style" placeholder="Email / Telegram" value={contact} onChange={(e) => setContact(e.target.value)} required />
                    </div>
                    <button type="submit" disabled={loading} className="form-button">
                      {loading ? 'ANALYZING...' : 'GET LISTING ANALYSIS'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="section-why" className="why-us-section">
        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop" alt="Global Business Partnership" className="bg-img" />
        <div className="overlay"></div>
        <div className="grad"></div>
        <div className="container-xl">
          <h2 className="h2-style" style={{ textAlign: 'center', marginBottom: '64px' }}>Why Work With Us for Listing?</h2>
          <div className="reasons-grid">
            {reasons.map((reason, idx) => (
              <div key={idx} className="reason-card">
                <div className="reason-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

      {/* Scope Section */}
      <section className="scope-section">
        <img src="/gorsel/ag1.jpg" alt="Listing Scope Background" className="bg-img" />
        <div className="overlay" style={{ background: 'rgba(0,0,0,0.75)' }}></div>
        <div className="grad"></div>
        <div className="container-xl">
          <div className="scope-header">
            <h2 className="h2-style">Our Service Scope</h2>
            <p className="p-style" style={{ color: '#d1d5db', maxWidth: '800px', margin: '16px auto 0' }}>
              Professional listing and operational services we offer for a successful launch process.
            </p>
          </div>

          <div className="scope-grid">
            {listingScope.map((step, i) => (
              <div key={i} className="scope-card">
                <div className="scope-icon">{step.icon}</div>
                <h4 className="scope-name h4-style">{step.title}</h4>
                <p className="scope-summary p-style">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantage Split */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="h2-style" style={{marginBottom: '28px'}}>Making Post-Listing Success Sustainable</h2>
              <p className="p-style" style={{marginBottom: '24px', color: '#d1d5db', lineHeight: '1.8'}}>
                Listing on an exchange is just the beginning. Real success lies in maintaining volume after listing and exhibiting a reliable chart for your project. We manage this process based on data.
              </p>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {advantages.map((adv, i) => (
                  <li key={i} className="p-style" style={{display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px'}}>
                    <span style={{color: 'var(--cray-gold)', fontWeight: 800, fontSize: '18px'}}>✓</span> {adv}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1" style={{position: 'relative', borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(255,177,0,0.2)', height: '440px', boxShadow: '0 20px 50px rgba(0,0,0,0.6)'}}>
              <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Professional Trading Environment" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bant-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{color: '#000', marginBottom: '20px'}}>Start Your Token Listing Process Today</h2>
          <p className="p-style" style={{color: '#444', marginBottom: '40px', maxWidth: '750px', margin: '0 auto 40px'}}>
            Complete all technical and commercial preparations required to carry your project to global exchanges with our professional team.
          </p>
          <a href="#h-hero" className="bant-btn">Discuss Listing Terms</a>
        </div>
      </section>

      {/* FAQ */}
      <section id="h-faq" className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '48px'}}>Frequently Asked Questions</h2>
          <div style={{maxWidth: '850px', margin: '0 auto'}}>
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

      <div style={{ padding: '80px 0', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #444', color: '#888', padding: '14px 40px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '14px !important', transition: '0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--cray-gold)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#444'}>
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default TokenListingDetailView;