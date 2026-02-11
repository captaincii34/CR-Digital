import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';
import { startTelegramConnectWithForm, waitUntilConnected } from "../utils/telegramBridge";

const PartnershipBusinessDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const [targetSector, setTargetSector] = useState('');
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const statusLabels: { [key: string]: string } = {
        'baslangıc': 'Network Setup',
        'buyume': 'Expanding Partnerships'
      };

      const formObj = {
        "Business Dev Stage": statusLabels[status] || status,
        "Target Sector/Ecosystem": targetSector,
        "Desired Partner Types / Goals": goal,
        "Type": "Partnerships & Business Development Detail Page",
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

      const result = await evaluateProject(status, `Target Sector: ${targetSector}. Goal: ${goal}`);
      setAiResult(result);
    } catch (err: any) {
      console.error(err);
      alert("Could not initiate Telegram connection. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scope = [
    { title: "Strategic Partnerships", desc: "Long-term collaborations that add value to your project with industry giants.", icon: "💎", link: "#services/partnerships/partners" },
    { title: "Ecosystem Collaborations", desc: "Integration support with Layer-1/Layer-2 networks and ecosystem funds.", icon: "🔗", link: "#services/partnerships/ecosystem" },
    { title: "Cross-Marketing", desc: "Joint audience sharing and shared marketing campaigns with partner projects.", icon: "🔄", link: "#services/partnerships/cross" },
    { title: "Corporate Business Development", desc: "Matching traditional companies with your project in their Web3 transformation.", icon: "🏛️", link: "#services/partnerships/corporate" }
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
    { q: "Which ecosystems do you partner with?", a: "We have direct connections with all major networks like Ethereum, Solana, TON, BNB Chain, and Polygon." },
    { q: "Do you manage grant processes?", a: "Yes, we coordinate the technical and commercial applications required to receive grants from Layer-1 and Layer-2 networks." },
    { q: "What is the benefit of partnerships?", a: "It increases your credibility, provides access to new audiences, and reduces technical integration costs." }
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
        
        .scope-section { position: relative; padding: 120px 0; overflow: hidden; background-color: #000; }
        .scope-grid { display: grid; grid-template-columns: 1fr; gap: 24px; position: relative; z-index: 10; }
        @media (min-width: 640px) { .scope-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .scope-grid { grid-template-columns: repeat(4, 1fr); } }
        
        .scope-link { text-decoration: none; display: block; height: 100%; }
        .scope-card { padding: 36px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; background: rgba(0,0,0,0.4); backdrop-filter: blur(8px); transition: 0.3s; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .scope-card:hover { border-color: var(--cray-gold); transform: translateY(-5px); background: rgba(255, 177, 0, 0.05); }
        .scope-card-title { color: #fff; transition: color 0.3s; }
        .scope-card:hover .scope-card-title { color: var(--cray-gold); }
        
        .bant-section { background: #f9f9f9; padding: 80px 0; text-align: center; }
        .bant-btn { background: var(--cray-gold); color: #000; padding: 18px 40px; border-radius: 12px; font-weight: 700 !important; text-decoration: none; display: inline-block; box-shadow: 0 10px 25px rgba(255,177,0,0.4); }
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop" className="bg-img" alt="Partnerships & Business Development" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text-content">
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 800, fontSize: '12px !important'}}>Ecosystem & Growth</h5>
              <h1 className="h1-style">Partnerships & Business Development</h1>
              <p className="hero-desc p-style">If you want to go fast, go alone; if you want to go far, go together. Maximize your project's ecosystem impact with the right partnerships.</p>
              
              <div className="hero-feature-list">
                {["Ecosystem & L1/L2 Collaborations", "Strategic Partnership Setup", "Cross-Marketing Planning", "Grant Consulting"].map((item, i) => (
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
              <h3 className="h3-style" style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>Partnership Analysis</h3>
              <form onSubmit={handleSubmit}>
                <select className="form-control" value={status} onChange={e=>setStatus(e.target.value)} required>
                  <option value="">Business Dev Stage</option><option value="baslangıc">Network Setup</option><option value="buyume">Expanding Partnerships</option>
                </select>
                <input type="text" className="form-control" placeholder="Target Sector/Ecosystem" value={targetSector} onChange={e=>setTargetSector(e.target.value)} />
                <textarea className="form-control" rows={4} placeholder="What kind of partners are you looking for?" value={goal} onChange={e=>setGoal(e.target.value)} required style={{ resize: 'none' }} />
                <button type="submit" disabled={loading} className="form-button">{loading ? 'OPENING TELEGRAM...' : 'SEND'}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section section-padding">
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2959210?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Partnerships Visual Background" />
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

      <section className="scope-section section-padding">
        <img src="/gorsel/ag1.jpg" alt="Scope Background" className="bg-img" />
        <div className="overlay" style={{ background: 'rgba(0,0,0,0.75)' }}></div><div className="grad"></div>
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '60px'}}>Our Service Scope</h2>
          <div className="scope-grid">
            {scope.map((s, i) => (
              <a href={s.link} key={i} className="scope-link">
                <div className="scope-card">
                  <div style={{fontSize: '40px', marginBottom: '20px'}}>{s.icon}</div>
                  <h4 className="h4-style scope-card-title">{s.title}</h4>
                  <p className="p-style" style={{fontSize: '13px', color: '#9ca3af'}}>{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{background: 'rgba(255,255,255,0.01)'}}>
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="h2-style" style={{marginBottom: '28px'}}>Ecosystem Expansion</h2>
              <p className="p-style" style={{marginBottom: '24px', color: '#d1d5db', lineHeight: '1.8'}}>
                Business development in Web3 is not just about making a sale, it's about being part of an ecosystem. We build the connections that will carry your project to the big leagues.
              </p>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {["L1/L2 Foundation Relations", "Grant Consulting", "Joint Brand Campaigns"].map((item, i) => (
                  <li key={i} className="p-style" style={{display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px'}}>
                    <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1" style={{position: 'relative', borderRadius: '32px', overflow: 'hidden', height: '400px', border: '1px solid rgba(255,177,0,0.2)'}}>
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2959210?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Partnerships Visual" />
            </div>
          </div>
        </div>
      </section>

      <section className="bant-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{color: '#000', marginBottom: '20px'}}>Let's Build Your Ecosystem Together</h2>
          <a href="#h-hero" className="bant-btn">Start Network Analysis</a>
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

      <div style={{ padding: '60px 0', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase' }}>Back to Homepage</button>
      </div>
    </div>
  );
};

export default PartnershipBusinessDetailView;