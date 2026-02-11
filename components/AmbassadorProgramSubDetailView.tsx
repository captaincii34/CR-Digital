import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';
import { startTelegramConnectWithForm, waitUntilConnected } from "../utils/telegramBridge";

const AmbassadorProgramSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const [size, setSize] = useState('');
  const [rewards, setRewards] = useState('');

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const formObj = {
        "Community Size": size,
        "Reward Structure": rewards,
        "Type": "Ambassador Program Sub-Detail",
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

      const result = await evaluateProject('Ambassador Program', `Size: ${size}. Rewards: ${rewards}`);
      setAiResult(result);
    } catch (err: any) {
      console.error(err);
      alert("Could not initiate Telegram connection. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reasons = [
    { title: 'Organic Advocacy', desc: 'Turn your top fans into an extension of your marketing team through structured incentive models.', icon: <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/> },
    { title: 'Scalable Growth', desc: 'Build local community nodes in different regions without increasing overhead costs significantly.', icon: <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/> },
    { title: 'Technical & Content Support', desc: 'Your ambassadors act as an early testing and content generation force, adding massive value.', icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/> }
  ];

  const faqs = [
    { q: "What is an ambassador program?", a: "It's a structured partnership where your most passionate users are rewarded with tokens or exclusive perks to promote your project within their own circles." },
    { q: "How do you vet ambassadors?", a: "We use a rigorous application process tracking past engagement, social reach, and technical understanding of your project's niche." },
    { q: "Do you manage the reward distribution?", a: "Yes, we handle the entire operations including performance tracking, KPI reporting, and manual or automated reward fulfillment." }
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
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { grid-template-columns: 1.2fr 1fr; align-items: center; } }
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; color: #000; width: 100%; max-width: 480px; margin: 0 auto; box-shadow: 0 40px 80px rgba(0,0,0,0.7); }
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
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2832" className="bg-img" alt="Ambassador Hero" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>Grassroots Growth</h5>
              <h1 className="h1-style">Ambassador Program Setup</h1>
              <p className="p-style">Mobilize your true believers. We design and launch professional ambassador programs that turn your community members into powerful, multi-lingual advocates for your brand.</p>
            </div>
            <div className="form-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>Program Blueprint</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Reset</button></div> : (
                <form onSubmit={handleSubmit}>
                  <p className="text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-widest">Community Size*</p>
                  <input type="text" className="w-full border p-3 rounded-lg mb-4" placeholder="Total current members" value={size} onChange={e=>setSize(e.target.value)} required />
                  <p className="text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-widest">Reward Potentials*</p>
                  <textarea className="w-full border p-3 rounded-lg mb-4" rows={3} placeholder="What rewards (Tokens, NFTs, Early Access) are available?" value={rewards} onChange={e=>setRewards(e.target.value)} required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'OPENING TELEGRAM...' : 'GET AMBASSADOR PLAN'}</button>
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
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000" alt="Advocacy" />
              </div>
              <div className="detail-text">
                <h2 className="h2-style">True Grassroots Momentum</h2>
                <p className="p-style">Ambassadors are not just influencers; they are your community leaders. We help you select and manage a squad that creates authentic content, hosts local events, and represents your brand across global markets.</p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '24px'}}>
                  {["Vetted Elite Advocates", "Regional Market Mastery", "Authentic Content Generation"].map((li, i) => (
                    <li key={i} className="p-style" style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="detail-item reverse">
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000" alt="Strategy" />
              </div>
              <div className="detail-text">
                <h2 className="h2-style">Tiered Reward Architectures</h2>
                <p className="p-style">We build sustainable incentive models that keep ambassadors motivated without causing token sell pressure. By linking rewards to specific KPIs like user referrals or technical contributions, we ensure a high ROI for your project.</p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '24px'}}>
                  {["Performance-Based Vesting", "Exclusive NFT Tiering", "Early Access Privileges"].map((li, i) => (
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
          <h2 className="h2-style" style={{color: '#000'}}>Unleash Your Community's Marketing Power</h2>
          <p className="p-style" style={{color: '#555', marginTop: '15px', maxWidth: '800px', margin: '15px auto 0'}}>
            Stop paying for expensive ads and start investing in your people. Build your global ambassador network today.
          </p>
          <a href="#h-hero" className="form-button" style={{display: 'inline-block', width: 'auto', padding: '18px 48px', marginTop: '30px', textDecoration: 'none'}}>Request Blueprint</a>
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
        <button onClick={() => window.location.hash = '#hizmetler/sosyal-medya-ve-topluluk-yonetimi'} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase' }}>Back to Services</button>
      </div>
    </div>
  );
};

export default AmbassadorProgramSubDetailView;