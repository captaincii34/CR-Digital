import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';
import { startTelegramConnectWithForm, waitUntilConnected } from "../utils/telegramBridge";

const CryptoPerformanceMarketingSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);
  const [budget, setBudget] = useState('');
  const [goal, setGoal] = useState('');

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const formObj = {
        "Monthly Budget ($)": budget,
        "Primary Conversion Goal": goal,
        "Type": "Crypto Performance Marketing Sub-Detail",
        "Sent At": new Date().toISOString(),
        "Page": window.location.href,
      };

      const code = await startTelegramConnectWithForm(formObj);
      const ok = await waitUntilConnected(code);
      if (!ok) {
        alert("Please open the bot in Telegram and press Start. Then you can try again.");
        setLoading(false);
        return;
      }

      const result = await evaluateProject('Performance Marketing', `Budget: ${budget}. Goal: ${goal}`);
      setAiResult(result);
    } catch (err: any) {
      console.error(err);
      alert("Could not initiate Telegram connection. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reasons = [
    { title: 'Niche Ad Networks', desc: 'We maximize ROI on Web3-focused networks like Coinzilla, Bitmedia, and Cointelegraph.', icon: <path d="M13 10V3L4 14h7v7l9-11h-7z"/> },
    { title: 'Precision Targeting', desc: 'Directly reach users who hold specific tokens or trade actively on DEXs.', icon: <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/> },
    { title: 'Transparent ROI', desc: 'We report exactly how many holders or users each dollar spent has generated.', icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/> }
  ];

  const faqs = [
    { q: "What ad networks do you recommend?", a: "For Web3 native reach, we use Coinzilla and Bitmedia. For general branding with high trust, we leverage direct news outlet sponsorships like Cointelegraph." },
    { q: "How do you track on-chain conversions?", a: "We use specialized tracking scripts and custom indexers to link ad clicks to wallet connection events and transaction approvals." },
    { q: "Is there a minimum budget?", a: "To gather statistically significant data, we recommend starting with a minimum monthly ad spend of $5,000." }
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
        @media (min-width: 1024px) { 
          .hero-grid { flex-direction: row; align-items: center; justify-content: space-between; } 
        }
        .hero-text { flex: 1.2; }
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; color: #000; width: 100%; max-width: 480px; margin: 0 auto; box-shadow: 0 40px 80px rgba(0,0,0,0.7); }
        @media (min-width: 1024px) { .form-card { margin: 0; flex: 0.8; } }
        .form-control { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; background: #fff; color: #000; margin-bottom: 16px; }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 18px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        .reason-card { padding: 48px 32px; border-radius: 24px; text-align: center; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); transition: 0.4s; }
        .reason-card:hover { transform: translateY(-10px); border-color: var(--cray-gold); background: rgba(255, 177, 0, 0.1); }
        .reason-icon-box { width: 60px; height: 60px; background-color: var(--cray-gold); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.3); }

        .detail-row { display: flex; flex-direction: column; gap: 100px; }
        .detail-item { display: flex; flex-direction: column; gap: 60px; align-items: center; width: 100%; }
        @media (min-width: 1024px) { 
            .detail-item { flex-direction: row; } 
            .detail-item.reverse { flex-direction: row-reverse; } 
            .detail-text, .detail-visual { width: 50%; flex: 1; }
        }
        .detail-visual { border-radius: 32px; overflow: hidden; height: 500px; border: 1px solid rgba(255,177,0,0.2); position: relative; width: 100%; }
        .detail-visual img { width: 100%; height: 100%; object-fit: cover; }
        
        .cta-box-section { background: #f7f7f7; padding: 100px 0; color: #000; text-align: center; }
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2832" className="bg-img" alt="Performance Hero" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text">
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>Conversion Excellence</h5>
              <h1 className="h1-style">Crypto Performance Marketing</h1>
              <p className="p-style">Move beyond vanity metrics. We run data-driven ad campaigns focused on actual user acquisition, token swaps, and ecosystem growth.</p>
            </div>
            <div className="form-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>Get ROI Quote</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Reset</button></div> : (
                <form onSubmit={handleSubmit}>
                  <p className="text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-widest">Estimated Monthly Budget ($)*</p>
                  <input type="text" className="form-control" placeholder="e.g. 10000" value={budget} onChange={e=>setBudget(e.target.value)} required />
                  
                  <p className="text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-widest">Conversion Goal*</p>
                  <textarea className="form-control" rows={3} placeholder="What is your primary conversion goal?" value={goal} onChange={e=>setGoal(e.target.value)} required />
                  
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'OPENING TELEGRAM...' : 'GET PERFORMANCE PLAN'}</button>
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
          <div className="detail-row">
            <div className="detail-item">
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2000" alt="Analytics" />
              </div>
              <div className="detail-text">
                <h2 className="h2-style">Surgical Performance Tracking</h2>
                <p className="p-style">We integrate custom tracking layers into your DApp to measure every action from landing to final transaction. We identify the exact source of your most valuable holders and optimize your budget accordingly.</p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '24px'}}>
                  {["Wallet Connection Attribution", "Liquidity Provision Tracking", "High-Value Holder Profiling"].map((li, i) => (
                    <li key={i} className="p-style" style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="detail-item reverse">
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000" alt="Ads" />
              </div>
              <div className="detail-text">
                <h2 className="h2-style">Web3 Ad Network Dominance</h2>
                <p className="p-style">We bypass traditional ad censorship by leveraging decentralized and niche crypto ad networks. We manage placements on high-traffic hubs to ensure your project stays visible to active market participants 24/7.</p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '24px'}}>
                  {["Exclusive Bitmedia Placement", "Coinzilla Optimization", "Direct Crypto Outlet Buyouts"].map((li, i) => (
                    <li key={i} className="p-style" style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{color: '#000'}}>Maximize Your Project's ROI Today</h2>
          <p className="p-style" style={{color: '#555', marginTop: '15px', maxWidth: '800px', margin: '15px auto 0'}}>
            Stop wasting budget on clicks that don't convert. Hire our performance engineering team to scale your user base with precision.
          </p>
          <a href="#h-hero" className="form-button" style={{display: 'inline-block', width: 'auto', padding: '18px 48px', marginTop: '30px', textDecoration: 'none'}}>Request ROI Audit</a>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '48px'}}>Frequently Asked Questions</h2>
          <div style={{maxWidth: '850px', margin: '0 auto'}}>
            {faqs.map((f, i) => (
              <div key={i} className={`faq-accordion-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-accordion-header h4-style">
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
        <button onClick={() => window.location.hash = '#services/crypto-marketing'} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase' }}>Back to Category</button>
      </div>
    </div>
  );
};

export default CryptoPerformanceMarketingSubDetailView;