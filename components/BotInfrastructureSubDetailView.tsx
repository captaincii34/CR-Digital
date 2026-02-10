import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const BotInfrastructureSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await evaluateProject('Bot Infrastructure', 'High-speed trading bot architecture and security analysis.');
    setAiResult(result);
    setLoading(false);
  };

  const reasons = [
    { title: 'Low Latency Execution', desc: 'Millisecond order transmission systems running on servers closest to exchange data centers.', icon: <path d="M13 10V3L4 14h7v7l9-11h-7z"/> },
    { title: 'Multi-Exchange Connectivity', desc: 'API architectures that control all DEX and CEX platforms from a single hub.', icon: <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/> },
    { title: 'Fail-Safe Security', desc: "Cybersecurity and 'dry-run' layers that prevent bots from making errors or losing funds.", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> }
  ];

  const faqs = [
    { q: "Where are the servers hosted?", a: "We recommend hosting on AWS or Google Cloud servers located geographically as close as possible to the exchange's main data centers (e.g., Tokyo for Binance, London for Bybit)." },
    { q: "How do we handle API security?", a: "We implement strict IP-whitelisting, multi-signature API keys, and periodic key rotations to ensure project funds are never compromised." },
    { q: "Can we use these bots for arbitrage?", a: "While the primary focus is market making, the infrastructure we build is robust enough to support advanced arbitrage strategies between multiple pools and exchanges." }
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
        .h1-style { font-size: 40px !important; font-weight: 700 !important; line-height: 1.2; }
        .h2-style { font-size: 32px !important; font-weight: 700 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; color: #d1d5db; line-height: 1.8; }
        #h-hero { position: relative; padding: 220px 0 120px; min-height: 85vh; display: flex; align-items: center; }
        .hero-grid { display: flex; flex-direction: column; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { flex-direction: row; align-items: center; justify-content: space-between; } }
        .hero-text { flex: 1.2; }
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; color: #000; width: 100%; max-width: 480px; margin: 0 auto; box-shadow: 0 40px 80px rgba(0,0,0,0.7); }
        @media (min-width: 1024px) { .form-card { margin: 0; flex: 0.8; } }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 18px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        .reason-card { padding: 48px 32px; border-radius: 24px; text-align: center; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); transition: 0.4s; }
        .reason-card:hover { transform: translateY(-10px); border-color: var(--cray-gold); background: rgba(255, 177, 0, 0.1); }
        .reason-icon-box { width: 60px; height: 60px; background-color: var(--cray-gold); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.3); }
        .detail-item { display: flex; flex-direction: column; gap: 60px; align-items: center; }
        @media (min-width: 1024px) { .detail-item { flex-direction: row; } .detail-item.reverse { flex-direction: row-reverse; } }
        .detail-text { flex: 1; }
        .detail-visual { flex: 1; border-radius: 32px; overflow: hidden; height: 400px; border: 1px solid rgba(255,177,0,0.2); position: relative; }
        .detail-visual img { width: 100%; height: 100%; object-fit: cover; }
        .cta-box-section { background: #f7f7f7; padding: 100px 0; color: #000; text-align: center; }
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; text-align: left; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2832" className="bg-img" alt="Bot Infrastructure" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text">
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>High-Frequency Architecture</h5>
              <h1 className="h1-style">Bot Infrastructure Consulting</h1>
              <p className="p-style">We provide professional bot architectures to ensure your market making operations run seamlessly, quickly, and securely. Gain a market edge with low-latency execution.</p>
            </div>
            <div className="form-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>Infrastructure Audit</h3>
              {aiResult ? <div className="p-style" style={{color: '#000'}}>{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Reset</button></div> : (
                <form onSubmit={handleSubmit}>
                  <input type="text" className="w-full border p-3 rounded-lg mb-4" placeholder="Target Networks / Exchanges" required />
                  <textarea className="w-full border p-3 rounded-lg mb-4" rows={3} placeholder="What are your technical expectations?" required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'CALCULATING...' : 'GET TECHNICAL PLAN'}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="reason-card">
                <div className="reason-icon-box">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">{r.icon}</svg>
                </div>
                <h4 className="h2-style" style={{fontSize: '20px !important', marginBottom: '15px'}}>{r.title}</h4>
                <p className="p-style" style={{fontSize: '14px'}}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{background: '#050505'}}>
        <div className="container-xl">
          <div className="detail-item">
            <div className="detail-text">
              <h2 className="h2-style">Zero-Downtime Reliability</h2>
              <p className="p-style">A few seconds of bot downtime during a market surge can cost your project thousands. We build resilient architectures with auto-failover capabilities and 24/7 monitoring systems that alert your team the moment a connection is dropped.</p>
            </div>
            <div className="detail-visual">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000" alt="Server" />
            </div>
          </div>
          <div className="detail-item reverse" style={{marginTop: '100px'}}>
            <div className="detail-text">
              <h2 className="h2-style">Millisecond Advantage</h2>
              <p className="p-style">In high-frequency trading, speed is everything. We optimize your bot’s execution path, ensuring that your buy/sell orders reach the exchange matching engine faster than competitors, reducing slippage and arbitrage losses.</p>
            </div>
            <div className="detail-visual">
              <img src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=2000" alt="Speed" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style">Deploy High-Speed Trading Engines</h2>
          <p className="p-style" style={{color: '#555', marginTop: '15px', maxWidth: '800px', margin: '15px auto 0'}}>Secure your project's liquidity with industrial-grade bot infrastructure. Reach out to our technical team for a custom quote.</p>
          <a href="#h-hero" className="form-button" style={{display: 'inline-block', width: 'auto', padding: '18px 48px', marginTop: '30px', textDecoration: 'none'}}>Request Tech Spec</a>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '48px'}}>Frequently Asked Questions</h2>
          <div style={{maxWidth: '850px', margin: '0 auto'}}>
            {faqs.map((f, i) => (
              <div key={i} className={`faq-accordion-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-accordion-header h2-style" style={{fontSize: '18px !important'}}>
                  <span>{f.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cray-gold)" strokeWidth="3" style={{transform: openFaq === i ? 'rotate(180deg)' : ''}}><path d="M19 9l-7 7-7-7" /></svg>
                </div>
                <div className="faq-accordion-body p-style"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ padding: '60px 0', textAlign: 'center' }}>
        <button onClick={() => window.location.hash = '#hizmetler/piyasa-yapiciligi-ve-likidite'} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase' }}>Back to Services</button>
      </div>
    </div>
  );
};

export default BotInfrastructureSubDetailView;