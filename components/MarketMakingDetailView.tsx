import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const MarketMakingDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const [exchanges, setExchanges] = useState('');
  const [goal, setGoal] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await evaluateProject(status, `Exchanges: ${exchanges}. Goal: ${goal}`);
    setAiResult(result);
    setLoading(false);
  };

  const scope = [
    { title: "Market Making Strategy", desc: "Professional algorithmic setups for order book health and price stability.", icon: "🏦" },
    { title: "Liquidity Planning", desc: "Liquidity pool management based on token supply and volume targets.", icon: "🌊" },
    { title: "Market Maker Selection", desc: "Matching your project with the most suitable professional MM partners.", icon: "🤖" },
    { title: "Market Making Consulting", desc: "Efficiency analysis and improvement of existing MM processes.", icon: "📏" },
    { title: "Bot Infrastructure Consulting", desc: "Technical infrastructure support for automated trading and volume bots.", icon: "⚙️" },
    { title: "Spread & Volatility", desc: "Optimization for low spread and healthy price movements.", icon: "📊" },
    { title: "DEX & CEX Management", desc: "Simultaneous liquidity monitoring on centralized and decentralized exchanges.", icon: "🔄" },
    { title: "Performance Reporting", desc: "Transparent daily reports on volume, depth, and order book health.", icon: "📅" }
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

  const faqs = [
    { q: "On which exchanges do you provide market making?", a: "We provide support on major DEX/CEX platforms such as Binance, OKX, Bybit, MEXC, Gate.io, and Uniswap." },
    { q: "Will using a bot lead to an exchange ban?", a: "No, our bots are 100% compliant with the official API standards and ethical trading rules of the exchanges." },
    { q: "What is the reporting frequency?", a: "We provide daily summaries and detailed weekly performance reports." }
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
        .h2-style { font-size: 32px !important; font-weight: 700 !important; }
        .h3-style { font-size: 22px !important; font-weight: 600 !important; }
        .h4-style { font-size: 18px !important; font-weight: 600 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; }
        #h-hero { position: relative; padding: 220px 0 120px; min-height: 85vh; display: flex; align-items: center; }
        .hero-grid { display: flex; flex-direction: column; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { flex-direction: row; align-items: center; justify-content: space-between; } }
        .hero-text-content { flex: 1.2; }
        .hero-feature-list { display: flex; flex-direction: column; gap: 16px; margin-top: 32px; }
        .hero-feature-item { display: flex; align-items: center; gap: 12px; }
        .feature-icon-circle { width: 24px; height: 24px; background: var(--cray-gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .feature-item-text { color: #fff; font-weight: 700 !important; font-size: 11px !important; text-transform: uppercase; letter-spacing: 1px; }
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; color: #000; width: 100%; max-width: 480px; margin: 0 auto; box-shadow: 0 40px 80px rgba(0,0,0,0.7); }
        .form-control { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; background: #fff; color: #000; margin-bottom: 16px; }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 18px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }
        
        .why-us-section { position: relative; background-color: #000; overflow: hidden; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        .reason-card { padding: 48px 32px; border-radius: 24px; text-align: center; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); transition: 0.4s; }
        .reason-card:hover { transform: translateY(-10px); border-color: var(--cray-gold); background: rgba(255, 177, 0, 0.08); }
        .reason-icon-box { width: 60px; height: 60px; background-color: var(--cray-gold); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.3); }
        
        .scope-section { position: relative; padding: 120px 0; overflow: hidden; background-color: #000; color: #fff; }
        .scope-grid { display: grid; grid-template-columns: 1fr; gap: 24px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .scope-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .scope-grid { grid-template-columns: repeat(4, 1fr); } }
        .scope-card { padding: 36px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; background: rgba(0,0,0,0.4); backdrop-filter: blur(8px); transition: 0.3s; }
        .scope-card:hover { border-color: var(--cray-gold); transform: translateY(-5px); }
        
        .bant-section { background: #f9f9f9; padding: 80px 0; text-align: center; }
        .bant-btn { background: var(--cray-gold); color: #000; padding: 18px 40px; border-radius: 12px; font-weight: 700 !important; text-decoration: none; display: inline-block; box-shadow: 0 10px 25px rgba(255,177,0,0.4); }
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1611974714851-eb6053e623e4?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Market Making Hero" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text-content">
              <h1 className="h1-style">Market Making & Liquidity Solutions</h1>
              <p className="hero-desc p-style">Depth in your order book, stability in your price. We provide professional liquidity management for a healthy trading environment on global exchanges.</p>
              
              <div className="hero-feature-list">
                {["Algorithmic Liquidity Management", "Low Spread Guarantee", "Organic Volume Building", "7/24 Order Book Monitoring"].map((item, i) => (
                  <div key={i} className="hero-feature-item">
                    <div className="feature-icon-circle">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="feature-item-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-card">
              <h3 className="h3-style" style={{textAlign: 'center', marginBottom: '20px'}}>Liquidity Analysis</h3>
              <form onSubmit={handleSubmit}>
                <select className="form-control" value={status} onChange={e=>setStatus(e.target.value)} required>
                  <option value="">Trading Status</option><option value="yeni">Pre-Launch</option><option value="aktif">Currently Trading</option>
                </select>
                <input type="text" className="form-control" placeholder="Active Exchanges" value={exchanges} onChange={e=>setExchanges(e.target.value)} />
                <textarea className="form-control" rows={3} placeholder="What is your volume target?" value={goal} onChange={e=>setGoal(e.target.value)} required />
                <input type="text" className="form-control" placeholder="Telegram / Email" value={contact} onChange={e=>setContact(e.target.value)} required />
                <button type="submit" className="form-button">{loading ? 'PROCESSING...' : 'GET LIQUIDITY PLAN'}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section section-padding">
        <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Trading Analysis Background" />
        <div className="overlay" style={{ background: 'rgba(0,0,0,0.85)' }}></div><div className="grad"></div>
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '60px'}}>Why Should You Work With Us?</h2>
          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="reason-card">
                <div className="reason-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {r.icon}
                  </svg>
                </div>
                <h4 className="h4-style">{r.title}</h4><p className="p-style">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scope-section">
        <img src="/gorsel/ag1.jpg" alt="Liquidity Scope" className="bg-img" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '60px'}}>Our Service Scope</h2>
          <div className="scope-grid">
            {scope.map((s, i) => (
              <div key={i} className="scope-card">
                <div style={{fontSize: '40px', marginBottom: '20px'}}>{s.icon}</div>
                <h4 className="h4-style">{s.title}</h4><p className="p-style" style={{fontSize: '13px'}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{background: 'rgba(255,177,0,0.03)'}}>
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="h2-style" style={{marginBottom: '28px'}}>Price Stability and Depth</h2>
              <p className="p-style" style={{marginBottom: '24px', color: '#d1d5db'}}>
                The success of a token in the market depends not just on the price, but on the depth in the order book. We minimize 'slippage' issues for your project and ensure it displays a healthy chart.
              </p>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {["Low Spread Guarantee", "Organic Liquidity, Not Fake Volume", "7/24 Active Algorithmic Management"].map((item, i) => (
                  <li key={i} className="p-style" style={{display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px'}}>
                    <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1" style={{position: 'relative', borderRadius: '32px', overflow: 'hidden', height: '400px', border: '1px solid rgba(255,177,0,0.2)'}}>
              <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Trading" />
            </div>
          </div>
        </div>
      </section>

      <section className="bant-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{color: '#000', marginBottom: '20px'}}>Secure Your Order Book Health</h2>
          <a href="#h-hero" className="bant-btn">Request Liquidity Quote</a>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '48px'}}>Frequently Asked Questions</h2>
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

      <div style={{ padding: '80px 0', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #444', color: '#888', padding: '14px 40px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase' }}>Back to Homepage</button>
      </div>
    </div>
  );
};

export default MarketMakingDetailView;