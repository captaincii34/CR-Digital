import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';
import { startTelegramConnectWithForm, waitUntilConnected } from "../utils/telegramBridge";

const BlockchainSoftwareDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const [techStack, setTechStack] = useState('');
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const statusLabels: { [key: string]: string } = {
        'concept': 'Concept Only',
        'development': 'Under Development',
        'refactor': 'Refactoring Existing System'
      };

      const formObj = {
        "Project Stage": statusLabels[status] || status,
        "Required Tech Stack": techStack,
        "Technical Goal": goal,
        "Type": "Blockchain & Software Development Detail Page",
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

      const result = await evaluateProject(status, `Tech Need: ${techStack}. Goal: ${goal}`);
      setAiResult(result);
    } catch (err: any) {
      console.error(err);
      alert("Could not initiate Telegram connection. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scopeCategories = [
    {
      title: "Blockchain Development",
      items: [
        { name: "Smart Contract Development", desc: "Secure architecture with Solidity and Rust.", icon: "📜", link: "#services/blockchain-and-software-development/smart-contract-dev" },
        { name: "Token & NFT Contracts", desc: "ERC-20, ERC-721 and custom standards.", icon: "🎨", link: "#services/blockchain-and-software-development/token-nft-contracts" },
        { name: "Decentralized Application (DApp)", desc: "End-to-end Web3 based solutions.", icon: "🌐", link: "#services/blockchain-and-software-development/dapp-development" },
        { name: "DAO Infrastructure Setup", desc: "Governance and voting systems.", icon: "🏛️", link: "#services/blockchain-and-software-development/dao-infrastructure" },
        { name: "Wallet Integrations", desc: "MetaMask, WalletConnect and more.", icon: "👛", link: "#services/blockchain-and-software-development/wallet-integration" }
      ]
    },
    {
      title: "Web3 & Platform Software",
      items: [
        { name: "Web3 Compliant Website", desc: "Modern and connection-oriented interfaces.", icon: "💻", link: "#services/web3-platform-software/website-development" },
        { name: "Custom Admin Dashboards", desc: "Blockchain data-driven admin tools.", icon: "📊", link: "#services/web3-platform-software/custom-dashboards" },
        { name: "Analytics & Reporting", desc: "On-chain data monitoring and visualization.", icon: "📈", link: "#services/web3-platform-software/analytics-reporting" },
        { name: "Backend & API", desc: "Scalable Web3 API services.", icon: "⚙️", link: "#services/web3-platform-software/backend-api" }
      ]
    },
    {
      title: "App & Game Development",
      items: [
        { name: "Web3 Mobile App", desc: "Web3 experience for iOS and Android.", icon: "📱", link: "#services/app-game-development/mobile-app" },
        { name: "Telegram Bot & Mini App", desc: "Viral solutions on the TON ecosystem.", icon: "✈️", link: "#services/app-game-development/telegram-mini-app" },
        { name: "Blockchain Based Gaming", desc: "On-chain game mechanics.", icon: "🎮", link: "#services/app-game-development/game-development" },
        { name: "GameFi Systems", desc: "Play-to-Earn and economy designs.", icon: "🪙", link: "#services/app-game-development/gamefi-p2e" },
        { name: "Server & Infrastructure", desc: "High-performance node and server management.", icon: "🖥️", link: "#services/app-game-development/server-infrastructure" }
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

        .why-us-section { position: relative; padding: 80px 0; background-color: #000; color: #fff; overflow-x: hidden; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        
        .reason-card { padding: 40px 32px; border-radius: 20px; text-align: center; transition: 0.4s; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); }
        .reason-card:hover { background: rgba(255, 177, 0, 0.06); border-color: rgba(255, 177, 0, 0.3); transform: translateY(-8px); }
        .reason-icon-box { width: 54px; height: 54px; background-color: var(--cray-gold); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.2); }

        .scope-section { position: relative; padding: 100px 0; background-color: #000; }
        .scope-cat-title { color: var(--cray-gold); text-transform: uppercase; letter-spacing: 2px; font-weight: 800; margin: 48px 0 24px; border-bottom: 2px solid rgba(255,177,0,0.2); padding-bottom: 10px; }
        .scope-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 768px) { .scope-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .scope-grid { grid-template-columns: repeat(3, 1fr); } }
        
        .scope-link { text-decoration: none; display: block; }
        .scope-card { padding: 24px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255,255,255,0.02); transition: 0.3s; display: flex; gap: 16px; align-items: flex-start; height: 100%; }
        .scope-card:hover { border-color: var(--cray-gold); background: rgba(255,177,0,0.03); transform: translateX(5px); }
        .scope-card-icon { font-size: 24px; }
        .scope-card-name { font-weight: 700; color: #fff; margin-bottom: 4px; transition: color 0.3s; }
        .scope-card:hover .scope-card-name { color: var(--cray-gold); }
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
                Build the decentralized economy of the future today. We provide end-to-end software engineering from smart contracts to high-performance dApp architectures.
              </p>
              
              <div className="hero-feature-list">
                {["Full-Stack Web3 Engineering", "Audit-Ready Code Standards", "Scalable Infrastructure", "TON & Telegram Ecosystem Experts"].map((item, i) => (
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
                <h3 className="h3-style" style={{textAlign: 'center', marginBottom: '24px', color: '#000'}}>Technical Evaluation</h3>
                {aiResult ? (
                  <div className="ai-result">
                    <p className="p-style" style={{ color: '#000', fontStyle: 'italic', marginBottom: '24px' }}>"{aiResult.summary}"</p>
                    <button onClick={() => setAiResult(null)} className="form-button">Analyze Again</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <select className="form-control p-style" value={status} onChange={(e) => setStatus(e.target.value)} required>
                        <option value="">Select Project Stage</option>
                        <option value="concept">Concept Only</option>
                        <option value="development">Under Development</option>
                        <option value="refactor">Refactoring Existing System</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-control p-style" 
                        placeholder="Required Tech Stack (e.g. Solidity, React)" 
                        value={techStack}
                        onChange={(e) => setTechStack(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control p-style" rows={4} placeholder="What is your technical goal?" value={goal} onChange={(e) => setGoal(e.target.value)} required style={{resize: 'none'}} />
                    </div>
                    <button type="submit" disabled={loading} className="form-button">
                      {loading ? 'OPENING TELEGRAM...' : 'SEND'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{ textAlign: 'center', marginBottom: '60px' }}>Why Should You Work With Us?</h2>
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
      <section className="scope-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{ textAlign: 'center' }}>Our Full Development Scope</h2>
          
          {scopeCategories.map((cat, ci) => (
            <div key={ci}>
              <h3 className="scope-cat-title">{cat.title}</h3>
              <div className="scope-grid">
                {cat.items.map((item, ii) => (
                  <a href={item.link} key={ii} className="scope-link">
                    <div className="scope-card">
                      <div className="scope-card-icon">{item.icon}</div>
                      <div>
                        <h4 className="scope-card-name h4-style">{item.name}</h4>
                        <p className="scope-card-desc p-style">{item.desc}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Split Info Section */}
      <section className="section-padding" style={{borderTop: '1px solid rgba(255,177,0,0.1)'}}>
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="h2-style" style={{marginBottom: '24px'}}>Reliable Engineering for a Decentralized World</h2>
              <p className="p-style" style={{marginBottom: '20px', color: '#d1d5db'}}>
                Software in Web3 is not just about functionality; it's about trust. We follow rigorous testing protocols and industry best practices to ensure your platform is secure, fast, and scalable from day one.
              </p>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {["Audit-ready smart contracts", "High-performance indexing", "Military-grade encryption", "Seamless cross-chain bridges"].map((adv, i) => (
                  <li key={i} className="p-style" style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px'}}>
                    <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {adv}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1" style={{position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,177,0,0.2)', height: '440px'}}>
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Technical Visual" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bant-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{color: '#000', marginBottom: '16px'}}>Ready to Build the Future of Web3?</h2>
          <p className="p-style" style={{color: '#333', marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px'}}>
            Whether you need a custom smart contract, a full dApp, or a high-performance backend, our engineering team is ready to deliver.
          </p>
          <a href="#h-hero" className="bant-btn">Start Technical Consultation</a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '40px'}}>Frequently Asked Questions</h2>
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

      <div style={{ padding: '60px 0', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '14px !important' }}>
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default BlockchainSoftwareDetailView;