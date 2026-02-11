import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';
import { startTelegramConnectWithForm, waitUntilConnected } from "../utils/telegramBridge";

const Web3MarketingAutomationSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);
  
  // Form states
  const [userBase, setUserBase] = useState('');
  const [automationNeeds, setAutomationNeeds] = useState('');

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const formObj = {
        "Current User Base": userBase,
        "Desired Automations": automationNeeds,
        "Type": "Web3 Marketing Automation Sub-Detail",
        "Sent At": new Date().toISOString(),
        "Page": window.location.href,
      };

      // 1) Start Telegram connection and open link
      const code = await startTelegramConnectWithForm(formObj);

      // 2) Wait for user to press Start in Telegram
      const ok = await waitUntilConnected(code);
      if (!ok) {
        alert("Please open the bot in Telegram and press Start. Then you can try again.");
        setLoading(false);
        return;
      }

      // 3) Proceed with AI evaluation
      const result = await evaluateProject('Marketing Automation', `User Base: ${userBase}. Needs: ${automationNeeds}`);
      setAiResult(result);
    } catch (err: any) {
      console.error(err);
      alert("Could not initiate Telegram connection. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reasons = [
    { title: 'Event-Based Triggers', desc: 'Automate messages and ads triggered by specific on-chain events like mints or swaps.', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
    { title: 'Intelligent CRM', desc: 'Segment your community based on wallet balance, transaction history, and activity.', icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/> },
    { title: 'Automated Rewards', desc: 'Instantly distribute tokens or NFTs to users who complete community tasks.', icon: <path d="M13 10V3L4 14h7v7l9-11h-7z"/> }
  ];

  const faqs = [
    { q: "What processes can we automate?", a: "Community welcome sequences, airdrop eligibility checking, dynamic tier-based messaging, and targeted follow-ups based on wallet activity." },
    { q: "Does this require technical integration?", a: "Yes, we use API connections and on-chain listeners to sync your marketing tools with real-time blockchain data." },
    { q: "How does it improve conversion?", a: "By delivering the right message exactly when a user interacts with your project on-chain, drastically increasing engagement and trust." }
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
      `}</style>

      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2832" className="bg-img" alt="Automation Hero" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text">
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>Web3 Intelligent Marketing</h5>
              <h1 className="h1-style">Web3-Compliant Marketing Automation</h1>
              <p className="p-style">Optimize your operations with smart automation. We deploy AI and on-chain listening tools that manage community interaction and reward distribution 24/7.</p>
            </div>
            <div className="form-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>Get Automation Plan</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Reset</button></div> : (
                <form onSubmit={handleSubmit}>
                  <p className="text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-widest">Current User Base*</p>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. 5,000 active wallets" 
                    value={userBase}
                    onChange={(e) => setUserBase(e.target.value)}
                    required 
                  />
                  <p className="text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-widest">Desired Automations*</p>
                  <textarea 
                    className="form-control" 
                    rows={3} 
                    placeholder="Which marketing processes would you like to automate?" 
                    value={automationNeeds}
                    onChange={(e) => setAutomationNeeds(e.target.value)}
                    required 
                  />
                  <button type="submit" disabled={loading} className="form-button">
                    {loading ? 'OPENING TELEGRAM...' : 'GENERATE AUTOMATION'}
                  </button>
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
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000" alt="Bot" />
              </div>
              <div className="detail-text">
                <h2 className="h2-style">On-Chain Triggered Workflows</h2>
                <p className="p-style">Your marketing shouldn't be static. We build workflows that react to live blockchain events. If a user mints your NFT, they get an instant tailored welcome message. If a whale swaps your token, your team gets an alert. Automation makes your project feel alive.</p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '24px'}}>
                  {["Real-Time Wallet Monitoring", "Automated Airdrop Fulfillment", "Dynamic Whitelist Access"].map((li, i) => (
                    <li key={i} className="p-style" style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="detail-item reverse">
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2000" alt="CRM" />
              </div>
              <div className="detail-text">
                <h2 className="h2-style">Intelligent Web3 CRM</h2>
                <p className="p-style">Stop treating every wallet address the same. Our automation tools segment your users based on their on-chain behavior, allowing you to send targeted incentives to dormant holders or VIP rewards to your project's top contributors automatically.</p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '24px'}}>
                  {["Wallet Activity Segmentation", "Loyalty Tier Automation", "Predictive Churn Alerts"].map((li, i) => (
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
          <h2 className="h2-style" style={{color: '#000'}}>Scale Your Operations without Scaling Your Team</h2>
          <p className="p-style" style={{color: '#555', marginTop: '15px', maxWidth: '800px', margin: '15px auto 0'}}>
            Increase your project's efficiency with automated workflows. Contact our engineering team to build your smart marketing infrastructure today.
          </p>
          <a href="#h-hero" className="form-button" style={{display: 'inline-block', width: 'auto', padding: '18px 48px', marginTop: '30px', textDecoration: 'none'}}>Plan Automation Strategy</a>
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

export default Web3MarketingAutomationSubDetailView;