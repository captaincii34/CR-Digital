import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';
import { startTelegramConnectWithForm, waitUntilConnected } from "../utils/telegramBridge";

const PreListingMarketingSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);
  
  const [communitySize, setCommunitySize] = useState('');
  const [marketingGoals, setMarketingGoals] = useState('');

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const formObj = {
        "Current Community Size": communitySize,
        "Marketing Campaign Goals": marketingGoals,
        "Type": "Pre-Listing Marketing Sub-Detail",
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

      const result = await evaluateProject('Pre-Listing Marketing', `Size: ${communitySize}. Goals: ${marketingGoals}`);
      setAiResult(result);
    } catch (err: any) {
      console.error(err);
      alert("Could not initiate Telegram connection. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reasons = [
    { title: 'Hype Management', desc: 'We prepare setups to peak excitement in the community until launch day.', icon: <path d="M13 10V3L4 14h7v7l9-11h-7z"/> },
    { title: 'KOL & Influencer', desc: 'We announce your listing news to the whole world with global Web3 thought leaders.', icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/> },
    { title: 'Community Warming', desc: 'We prepare the audience for listing with interactive tasks via Telegram and X.', icon: <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/> }
  ];

  const faqs = [
    { q: "When should promotional activities start?", a: "Ideally, we should start warming up the community at least 4 weeks before the listing date." },
    { q: "Which platforms are more effective?", a: "X (Twitter), Telegram, and YouTube, which are the hearts of the crypto world, are our primary channels." },
    { q: "Do you run viral campaigns?", a: "Yes, we provide organic growth with rewarded airdrop and whitelist setups where the community invites each other." },
    { q: "How much should the influencer budget be?", a: "Whatever your budget, we choose accounts with high conversion rates for your project." },
    { q: "Do you provide PR support?", a: "We increase your credibility with news publications in CoinTelegraph, CoinDesk, and other major outlets." }
  ];

  return (
    <div className="crypto-detail-page">
      <style>{`
        .crypto-detail-page { background-color: #000; color: #fff; overflow-x: hidden; }
        .section-padding { padding: 100px 0; position: relative; }
        .container-xl { max-width: 1280px; margin: 0 auto; padding: 0 32px; width: 100%; position: relative; z-index: 10; }
        .bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.8); z-index: 1; }
        .grad { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent 40%, transparent 60%, #000); z-index: 2; }
        .h1-style { font-size: 40px !important; font-weight: 700 !important; line-height: 1.2; }
        .h2-style { font-size: 32px !important; font-weight: 700 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; color: #d1d5db; line-height: 1.8; }
        #h-hero { position: relative; padding: 220px 0 120px; min-height: 85vh; display: flex; align-items: center; }
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { grid-template-columns: 1.2fr 1fr; align-items: center; } }
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; color: #000; width: 100%; max-width: 480px; margin: 0 auto; box-shadow: 0 40px 80px rgba(0,0,0,0.7); }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 18px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        .reason-card { padding: 48px 32px; border-radius: 24px; text-align: center; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); transition: 0.4s; }
        .reason-card:hover { transform: translateY(-10px); border-color: var(--cray-gold); background: rgba(255, 177, 0, 0.1); }
        .reason-icon-box { width: 60px; height: 60px; background-color: var(--cray-gold); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.3); }
        .bullet-point { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .bullet-icon { width: 20px; height: 20px; background: var(--cray-gold); border-radius: 50%; display: flex; align-items: center; justifyContent: center; flex-shrink: 0; }
        .bullet-text { font-size: 11px !important; font-weight: 700 !important; text-transform: uppercase; letter-spacing: 1px; color: #fff; }
      `}</style>

      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2832" className="bg-img" alt="Marketing Hero" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>Pre-Launch Momentum</h5>
              <h1 className="h1-style">Pre-Listing Marketing Strategy</h1>
              <p className="p-style">We make the whole world talk about your project before the big day arrives. We create the 'Sold Out' effect you need at launch with our professional marketing setups.</p>
              <div style={{marginTop: '30px'}}>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">HYPE AND COMMUNITY BUILDING</span>
                </div>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">KOL AND INFLUENCER NETWORK</span>
                </div>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">STRATEGIC PR AND MEDIA SPREAD</span>
                </div>
              </div>
            </div>
            <div className="form-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>Get Marketing Analysis</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Reset</button></div> : (
                <form onSubmit={handleSubmit}>
                  <p className="text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-widest">Community Size*</p>
                  <input 
                    type="text" 
                    className="w-full border p-3 rounded-lg mb-4" 
                    placeholder="e.g. 10k on X, 5k on TG" 
                    value={communitySize}
                    onChange={(e) => setCommunitySize(e.target.value)}
                    required 
                  />
                  <p className="text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-widest">Marketing Goals*</p>
                  <textarea 
                    className="w-full border p-3 rounded-lg mb-4" 
                    rows={3} 
                    placeholder="Summarize your marketing goals..." 
                    value={marketingGoals}
                    onChange={(e) => setMarketingGoals(e.target.value)}
                    required 
                  />
                  <button type="submit" disabled={loading} className="form-button">
                    {loading ? 'OPENING TELEGRAM...' : 'GET MARKETING PLAN'}
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

      <div style={{ padding: '60px 0', textAlign: 'center' }}>
        <button onClick={() => window.location.hash = '#hizmetler/token-lansman-ve-listeleme'} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase' }}>Back</button>
      </div>
    </div>
  );
};

export default PreListingMarketingSubDetailView;