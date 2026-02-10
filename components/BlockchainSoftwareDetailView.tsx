import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const BlockchainSoftwareDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const [techStack, setTechStack] = useState('');
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
    const result = await evaluateProject(status, `Tech Need: ${techStack}. Goal: ${goal}`);
    setAiResult(result);
    setLoading(false);
  };

  const scopeCategories = [
    {
      title: "Blockchain Development",
      items: [
        { name: "Smart Contract Development", desc: "Secure architecture with Solidity and Rust.", icon: "📜" },
        { name: "Token & NFT Contracts", desc: "ERC-20, ERC-721 and custom standards.", icon: "🎨" },
        { name: "Decentralized Application (DApp)", desc: "End-to-end Web3 based solutions.", icon: "🌐" },
        { name: "DAO Infrastructure Setup", desc: "Governance and voting systems.", icon: "🏛️" },
        { name: "Wallet Integrations", desc: "MetaMask, WalletConnect and more.", icon: "👛" }
      ]
    },
    {
      title: "Web3 & Platform Software",
      items: [
        { name: "Web3 Compliant Website", desc: "Modern and connection-oriented interfaces.", icon: "💻" },
        { name: "Custom Management Dashboards", desc: "Blockchain data-driven admin tools.", icon: "📊" },
        { name: "Analytics & Reporting", desc: "On-chain data monitoring and visualization.", icon: "📈" },
        { name: "Backend & API", desc: "Scalable Web3 API services.", icon: "⚙️" }
      ]
    },
    {
      title: "App & Game Development",
      items: [
        { name: "Web3 Mobile App", desc: "Web3 experience for iOS and Android.", icon: "📱" },
        { name: "Telegram Bot & Mini App", desc: "Viral solutions on the TON ecosystem.", icon: "✈️" },
        { name: "Blockchain Based Gaming", desc: "On-chain game mechanics.", icon: "🎮" },
        { name: "GameFi Systems", desc: "Play-to-Earn and economy designs.", icon: "🪙" },
        { name: "Server & Infrastructure", desc: "High-performance node and server management.", icon: "🖥️" }
      ]
    }
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
    { q: "Which languages do you use?", a: "We prefer Solidity and Rust for smart contracts; React/Next.js for the frontend; and Node.js and Go for the backend." },
    { q: "Do you develop Telegram Mini Apps?", a: "Yes, we develop high-interaction Mini Apps and bots running on the TON (The Open Network) ecosystem." },
    { q: "Can you migrate my existing website to Web3?", a: "Yes, we provide Web3 transformation by adding wallet connections and smart contract integrations to your existing infrastructure." },
    { q: "How do you ensure application security?", a: "We develop all our code to audit standards and perform deep penetration testing before delivery." }
  ];

  return (
    <div className="crypto-detail-page">
      <style>{`
        .crypto-detail-page { background-color: #000; color: #fff; overflow-x: hidden; }
        .section-padding { padding: 80px 0; position: relative; }
        .container-xl { max-width: 1280px; margin: 0 auto; padding: 0 32px; width: 100%; position: relative; z-index: 10; }
        
        .bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.75); z-index: 1; }
        .grad { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent 40%, transparent 60%, #000); z-index: 2; }

        .h1-style { font-size: 40px !important; font-weight: 700 !important; }
        .h2-style { font-size: 32px !important; font-weight: 700 !important; }
        .h3-style { font-size: 22px !important; font-weight: 600 !important; }
        .h4-style { font-size: 18px !important; font-weight: 600 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; }

        #h-hero { position: relative; padding: 200px 0 100px; background-color: #000; min-height: 80vh; display: flex; align-items: center; }
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

        .why-us-section { position: relative; padding: 80px 0; background-color: #000; color: #fff; overflow: hidden; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        
        .reason-card { padding: 40px 32px; border-radius: 20px; text-align: center; transition: 0.4s; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); }
        .reason-card:hover { background: rgba(255, 177, 0, 0.06); border-color: rgba(255, 177, 0, 0.3); transform: translateY(-8px); }
        .reason-icon-box { width: 54px; height: 54px; background-color: var(--cray-gold); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.2); }

        .scope-section { position: relative; padding: 100px 0; background-color: #000; }
        .scope-cat-title { color: var(--cray-gold); text-transform: uppercase; letter-spacing: 2px; font-weight: 800; margin: 48px 0 24px; border-bottom: 2px solid rgba(255,177,0,0.2); padding-bottom: 10px; }
        .scope-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 768px) { .scope-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .scope-grid { grid-template-columns: repeat(3, 1fr); } }
        
        .scope-card { padding: 24px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255,255,255,0.02); transition: 0.3s; display: flex; gap: 16px; align-items: flex-start; }
        .scope-card:hover { border-color: var(--cray-gold); background: rgba(255,177,0,0.03); transform: translateX(5px); }
        .scope-card-icon { font-size: 24px; }
        .scope-card-name { font-weight: 700; color: #fff; margin-bottom: 4px; }
        .scope-card-desc { font-size: 13px !important; color: #9ca3af; }

        .bant-section { background: #f9f9f9; padding: 60px 0; text-align: center; }
        .bant-btn { background: var(--cray-gold); color: #000; padding: 16px 32px; border-radius: 12px; font-weight: 700 !important; text-decoration: none; display: inline-block; }

        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
        .faq-accordion-body { padding: 0 24px 24px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      {/* Hero Section */}
      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Software Development" />
        <div className="overlay"></div>
        <div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text-content">
              <h1 className="hero-title h1-style">Blockchain & Software Development Solutions</h1>
              <p className="hero-desc p-style">
                We don't just write code; we build the decentralized future. From smart contracts to mobile applications, we stand by you with our expert engineering staff for all your Web3-based software needs.
              </p>
              
              <div className="hero-feature-list">
                {["End-to-End Web3 Engineering", "Telegram Mini App Expertise", "Security-Oriented Coding", "Scalable Infrastructure"].map((item, i) => (
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
                <h3 className="h3-style" style={{textAlign: 'center', marginBottom: '24px'}}>Request Project Analysis</h3>
                {aiResult ? (
                  <div className="ai-result">
                    <p className="p-style" style={{ fontStyle: 'italic', marginBottom: '24px' }}>"{aiResult.summary}"</p>
                    <button onClick={() => setAiResult(null)} className="form-button">Analyze Again</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <select className="form-control p-style" value={status} onChange={(e) => setStatus(e.target.value)} required>
                        <option value="">Select Need Type</option>
                        <option value="new">Development from Scratch</option>
                        <option value="ekleme">Web3 Integration to Existing Infrastructure</option>
                        <option value="audit">Code Improvement / Audit Prep</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control p-style" placeholder="Preferred Tech (Solidity, TON, etc.)" value={techStack} onChange={(e) => setTechStack(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control p-style" rows={3} placeholder="What product do you want to develop?" value={goal} onChange={(e) => setGoal(e.target.value)} required style={{resize: 'none'}} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control p-style" placeholder="Email / Telegram" value={contact} onChange={(e) => setContact(e.target.value)} required />
                    </div>
                    <button type="submit" disabled={loading} className="form-button">
                      {loading ? 'ANALYZING...' : 'GET DEVELOPMENT ANALYSIS'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="section-why" className="why-us-section section-padding">
        <img src="/gorsel/fh.jpg" alt="Why Us Background" className="bg-img" />
        <div className="overlay"></div>
        <div className="grad"></div>
        <div className="container-xl">
          <h2 className="h2-style" style={{ textAlign: 'center', marginBottom: '60px' }}>Why CRAY Digital for Software?</h2>
          <div className="reasons-grid">
            {reasons.map((reason, idx) => (
              <div key={idx} className="reason-card">
                <div className="reason-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

      {/* Development Scope Section */}
      <section className="scope-section section-padding">
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="h2-style">Our Development Scope</h2>
            <p className="p-style" style={{ color: '#d1d5db', maxWidth: '800px', margin: '16px auto 0' }}>
              Our wide spectrum engineering services meeting all your technical needs in the blockchain world.
            </p>
          </div>

          {scopeCategories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="scope-cat-title h3-style">🔹 {cat.title}</h3>
              <div className="scope-grid">
                {cat.items.map((item, i) => (
                  <div key={i} className="scope-card">
                    <span className="scope-card-icon">{item.icon}</span>
                    <div>
                      <h4 className="scope-card-name h4-style">{item.name}</h4>
                      <p className="scope-card-desc p-style">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="bant-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{color: '#000', marginBottom: '16px'}}>Let's Build the Future Together</h2>
          <p className="p-style" style={{color: '#333', marginBottom: '32px'}}>
            Construct your technical infrastructure with the latest technologies of the Web3 world.
          </p>
          <a href="#h-hero" className="bant-btn">Plan Technical Meeting</a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '40px'}}>Frequently Asked Questions</h2>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
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

      <div style={{ padding: '60px 0', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '14px !important' }}>
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default BlockchainSoftwareDetailView;