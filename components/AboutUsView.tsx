import React, { useState } from 'react';

const AboutUsView: React.FC = () => {
  const [isApplying, setIsApplying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(false);
  const [finalFormSent, setFinalFormSent] = useState(false);

  const stats = [
    { value: '40+', label: 'Award Winning Campaigns', desc: "Our strategic excellence has been recognized with over 40 prestigious industry awards." },
    { value: '%98', label: 'Customer Satisfaction', desc: "We take pride in nearly all of our clients reporting high levels of satisfaction." },
    { value: '500+', label: 'Successful Projects', desc: "We have successfully completed over 500 diverse projects worldwide, exceeding targets." },
    { value: '30+', label: 'Countries', desc: "Our global reach extends to over 30 countries, providing international solutions." }
  ];

  const team = [
    { name: 'Crayus Chiristin', title: 'Founder', desc: 'Visionary leader driving the core philosophy and long-term direction of CrayUp.', img: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=400&auto=format&fit=crop' },
    { name: 'Crayus Richi', title: 'Co-Founder', desc: 'Strategic architect co-building the foundation of our 360-degree service model.', img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Crayus Anhony', title: 'CEO', desc: 'Executive officer managing global operations and ensuring excellence across all departments.', img: 'https://images.unsplash.com/photo-1640951610202-1d3c1e296310?q=80&w=400&auto=format&fit=crop' },
    { name: 'Crayus Youssef', title: 'Business Development Lead', desc: 'Ecosystem builder connecting high-tier projects with strategic global partners.', img: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop' },
    { name: 'Crayus Denis', title: 'Digital Marketing Lead', desc: 'ROI-driven growth expert crafting viral marketing funnels for Web3 success.', img: 'https://images.unsplash.com/photo-1640960543409-dbe5ccc30e2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Crayus Iliana', title: 'Social Media Lead', desc: 'Community architect managing organic growth and engagement across global platforms.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop' },
    { name: 'Crayus Giana', title: 'Senior Software Manager', desc: 'Engineering lead overseeing the development of complex dApps and platform architectures.', img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400&auto=format&fit=crop' },
    { name: 'Crayus Ian', title: 'Blockchain Specialist', desc: 'Smart contract authority ensuring institutional-grade security and technical innovation.', img: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop' }
  ];

  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
    "https://cryptologos.cc/logos/polygon-matic-logo.png",
    "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    "https://cryptologos.cc/logos/chainlink-link-logo.png",
    "https://cryptologos.cc/logos/avalanche-avax-logo.png",
    "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    "https://cryptologos.cc/logos/tron-trx-logo.png",
    "https://cryptologos.cc/logos/cardano-ada-logo.png"
  ];

  const gridImages = [
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400",
    "https://images.unsplash.com/photo-1640341719942-d6199f18a099?q=80&w=400",
    "https://images.unsplash.com/photo-1642104704074-907c0698bcd9?q=80&w=400",
    "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?q=80&w=400",
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=400",
    "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=400",
    "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=400",
    "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=400",
    "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=400"
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setApplied(true);
    }, 2000);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFinalFormSent(true);
    }, 1500);
  };

  const closeCareerModal = () => {
    setIsApplying(false);
    setApplied(false);
  };

  return (
    <div className="about-page">
      <style>{`
        .about-page { background: #000; color: #fff; width: 100%; min-height: 100vh; position: relative; z-index: 1; }
        .section-padding { padding: 100px 0; }
        .container-xl { max-width: 1280px; margin: 0 auto; padding: 0 40px; width: 100%; position: relative; z-index: 10; }
        
        .h1-style { font-size: 40px !important; font-weight: 700 !important; line-height: 1.2; }
        .h2-style { font-size: 32px !important; font-weight: 700 !important; }
        .h3-style { font-size: 24px !important; font-weight: 600 !important; }
        .h4-style { font-size: 18px !important; font-weight: 600 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; line-height: 1.8; }

        /* Hero */
        .hero-about { position: relative; padding: 200px 0 100px; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; opacity: 0.25; object-fit: cover; z-index: 0; }
        .hero-grid { max-width: 850px; position: relative; z-index: 10; }
        .about-hero-title { color: var(--cray-gold) !important; margin-bottom: 24px; }
        
        .hero-bullets { list-style: none; padding: 0; margin: 30px 0; }
        .hero-bullet { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; font-weight: 600 !important; font-size: 15px !important; color: #fff; }
        .hero-bullet span.icon { color: var(--cray-gold); font-size: 20px; }

        /* Logo Ticker */
        .ticker-section { padding: 40px 0; background: rgba(255,255,255,0.02); border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); overflow: hidden; white-space: nowrap; position: relative; }
        .ticker-container { display: flex; width: max-content; animation: scroll-right 40s linear infinite; }
        .ticker-logo { height: 40px; margin: 0 50px; filter: grayscale(1) brightness(0.7); opacity: 0.6; transition: 0.3s; object-fit: contain; }
        .ticker-logo:hover { filter: none; opacity: 1; transform: scale(1.1); }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Mission Vision */
        .mv-section { position: relative; background: #000; overflow: hidden; }
        .mv-bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.15; z-index: 0; }
        .mv-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent, #000); z-index: 1; }
        .mv-grid { display: grid; grid-template-columns: 1fr; gap: 40px; margin-top: 50px; max-width: 1000px; margin-left: auto; margin-right: auto; }
        @media (min-width: 768px) { .mv-grid { grid-template-columns: 1fr 1fr; } }
        .mv-card { padding: 50px; border: 1px solid rgba(255,177,0,0.1); border-radius: 30px; background: rgba(10,10,10,0.8); backdrop-filter: blur(10px); text-align: center; }
        .mv-card h3 { color: var(--cray-gold); margin-bottom: 25px; }

        /* Milestones */
        .milestones-section { position: relative; overflow: hidden; background: #000; }
        .milestones-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.25; z-index: 0; }
        .stat-card { background: rgba(10,10,10,0.85); border: 1px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 30px; transition: 0.4s; text-align: center; backdrop-filter: blur(12px); }
        .stat-card:hover { transform: translateY(-10px); border-color: var(--cray-gold); background: rgba(255,177,0,0.05); }
        .stat-val { font-size: 48px !important; font-weight: 800 !important; color: var(--cray-gold); margin-bottom: 10px; display: block; }
        .stat-label { font-size: 18px !important; font-weight: 700 !important; margin-bottom: 15px; display: block; }
        .stat-desc { color: #888; font-size: 14px !important; }

        /* Team */
        .team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; margin-bottom: 60px; }
        @media (max-width: 1024px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .team-grid { grid-template-columns: 1fr; } }
        .team-card { height: 350px; perspective: 1000px; cursor: pointer; }
        .team-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.8s; transform-style: preserve-3d; }
        .team-card:hover .team-card-inner { transform: rotateY(180deg); }
        .team-front, .team-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 30px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; }
        .team-front { background: #050505; }
        .team-front img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.8); transition: 0.5s; }
        .team-card:hover .team-front img { filter: none; }
        .team-back { 
            background: #0d0d0d; 
            transform: rotateY(180deg); 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center; 
            padding: 30px; 
            text-align: center; 
            border: 1px solid var(--cray-gold);
            background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
        }
        .team-info-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; background: linear-gradient(transparent, rgba(0,0,0,0.9)); }
        .team-footer { text-align: center; max-width: 700px; margin: 0 auto; }
        .team-footer-text { color: #888; font-weight: 600 !important; font-size: 15px !important; margin-bottom: 25px; line-height: 1.6; }

        /* Career Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(15px);
          z-index: 10000;
          display: flex;
          align-items: flex-start; 
          justify-content: center;
          padding: 130px 20px 40px; 
          animation: fadeIn 0.3s ease;
          overflow-y: auto; 
        }

        .modal-content {
          background: #0a0a0a;
          border: 1px solid rgba(255,177,0,0.3);
          border-radius: 32px;
          width: 100%;
          max-width: 500px; 
          max-height: fit-content;
          position: relative;
          padding: 40px 30px; 
          box-shadow: 0 30px 60px rgba(0,0,0,0.8);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255,255,255,0.05);
          border: none;
          color: #fff;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
          z-index: 100;
        }
        .modal-close-btn:hover { background: var(--cray-gold); color: #000; transform: rotate(90deg); }

        .form-input-about { width: 100%; background: #000; border: 1px solid #222; padding: 12px 16px; border-radius: 10px; color: #fff; margin-bottom: 16px; outline: none; transition: 0.3s; font-size: 13px !important; }
        .form-input-about:focus { border-color: var(--cray-gold); box-shadow: 0 0 0 4px rgba(255,177,0,0.1); }
        .form-label-min { font-size: 10px !important; font-weight: 800; text-transform: uppercase; color: #555; letter-spacing: 1px; margin-bottom: 6px; display: block; }
        
        .btn-submit-gold { 
          width: 100%; 
          background: var(--cray-gold); 
          color: #000; 
          padding: 16px; 
          border-radius: 12px; 
          font-weight: 800 !important; 
          border: none; 
          cursor: pointer; 
          text-transform: uppercase; 
          letter-spacing: 1px;
          transition: 0.3s;
          font-size: 12px !important;
        }
        .btn-submit-gold:hover { filter: brightness(1.1); transform: translateY(-2px); box-shadow: 0 10px 20px rgba(255,177,0,0.2); }

        .metro-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 160px; gap: 12px; }
        .metro-item { position: relative; overflow: hidden; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); }
        .metro-item img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; }
        .metro-item:hover img { transform: scale(1.1) rotate(1deg); }
        .metro-item:nth-child(1) { grid-column: span 2; grid-row: span 2; }
        .metro-item:nth-child(4) { grid-row: span 2; }

        /* World Reach Styles (3x3 Grid) */
        .world-reach-section { background: #000; }
        .image-grid-3x3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
        .grid-img-item { width: 100%; aspect-ratio: 1/1; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.05); }
        .grid-img-item img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; filter: grayscale(0.5); }
        .grid-img-item:hover img { filter: grayscale(0); transform: scale(1.1); }

        /* Final CTA Styles (Text Left, Form Right) */
        .final-cta-about { background: #0a0a0a; border-top: 1px solid rgba(255,177,0,0.1); }
        .final-form-box { background: rgba(255,255,255,0.02); padding: 40px; border-radius: 30px; border: 1px solid rgba(255,255,255,0.05); }
        .region-item { display: inline-block; padding: 6px 15px; background: rgba(255,177,0,0.1); border-radius: 100px; color: var(--cray-gold); font-size: 10px !important; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-right: 100px; margin-bottom: 10px; }
      `}</style>

      {/* 1. Hero Section */}
      <section className="hero-about">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" className="hero-bg" alt="About Hero" />
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h1 className="h1-style about-hero-title">Passionately Shaping the Digital Future</h1>
              <p className="p-style text-zinc-400 mb-8">CrayUp is a hybrid powerhouse that builds not only the technical infrastructure of projects in the Web3 and blockchain world, but also their vision and community bond. For us, every project is a new milestone in the digital world.</p>
              <ul className="hero-bullets">
                <li className="hero-bullet"><span className="icon">✓</span> 100% Remote & Global Operational Power</li>
                <li className="hero-bullet"><span className="icon">✓</span> Web3-Focused Strategic Perspective</li>
                <li className="hero-bullet"><span className="icon">✓</span> Approach Combining Creativity with Data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker-section">
        <div className="ticker-container">
          {[...partners, ...partners].map((url, idx) => (
            <img key={idx} src={url} className="ticker-logo" alt={`Partner ${idx + 1}`} />
          ))}
        </div>
      </div>

      <section className="section-padding mv-section">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" className="mv-bg-img" alt="Network Background" />
        <div className="mv-overlay"></div>
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="h2-style mb-4">A Personal Touch to the Digital World</h2>
            <p className="p-style text-zinc-400 max-w-2xl mx-auto">We don't believe technology is soulless. With us, every line of code becomes part of a story.</p>
          </div>
          <div className="mv-grid">
            <div className="mv-card">
              <h3 className="h3-style">Our Mission</h3>
              <p className="p-style text-zinc-300">To make blockchain technology and Web3 vision accessible, instilling not just marketing support but a long-lasting ecosystem spirit into projects.</p>
            </div>
            <div className="mv-card">
              <h3 className="h3-style">Our Vision</h3>
              <p className="p-style text-zinc-300">To be the hidden power behind the world's most innovative Web3 projects and set the standards of the decentralized future today.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding milestones-section">
        <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2000" className="milestones-bg" alt="Data Milestones" />
        <div className="mv-overlay" style={{opacity: 0.85}}></div>
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="h2-style mb-4">Milestones of Our Success</h2>
            <p className="p-style text-zinc-300">Numbers show not just our volume, but the discipline we will bring to your project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <span className="stat-val">{s.value}</span>
                <span className="stat-label">{s.label}</span>
                <p className="stat-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#050505]">
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="h2-style mb-4">The Brain Team Behind Our Success</h2>
            <p className="p-style text-zinc-500">Every expertise in the blockchain world is a separate art. We have gathered these artists under one roof.</p>
          </div>
          <div className="team-grid">
            {team.map((t, i) => (
              <div key={i} className="team-card">
                <div className="team-card-inner">
                  <div className="team-front">
                    <img src={t.img} alt={t.name} />
                    <div className="team-info-overlay">
                      <h4 className="h4-style text-white mb-1">{t.name}</h4>
                      <span className="text-cray-gold font-black uppercase text-[10px] tracking-widest">{t.title}</span>
                    </div>
                  </div>
                  <div className="team-back">
                    <h4 className="text-cray-gold font-bold text-sm mb-2 uppercase tracking-widest">{t.name}</h4>
                    <p className="text-zinc-500 text-[10px] font-black mb-4 uppercase">{t.title}</p>
                    <p className="text-white text-[13px] font-medium leading-relaxed mb-6">{t.desc}</p>
                    <div className="mt-auto flex gap-4">
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs hover:bg-white hover:text-black transition-colors">𝕏</div>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs hover:bg-[#0077b5] hover:border-[#0077b5] transition-colors">in</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="team-footer">
            <p className="team-footer-text">Under each department, we have freelance colleagues working all over the world. If you would like to join our ranks, click the button below.</p>
            <button onClick={() => setIsApplying(true)} className="cta-button !px-16 !py-5">APPLY</button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="metro-grid">
              <div className="metro-item"><img src="https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?q=80&w=800" alt="GITEX" /></div>
              <div className="metro-item"><img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800" alt="Fintech" /></div>
              <div className="metro-item"><img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800" alt="Crypto" /></div>
              <div className="metro-item"><img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800" alt="Summit" /></div>
              <div className="metro-item"><img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800" alt="Token" /></div>
              <div className="metro-item"><img src="https://images.unsplash.com/photo-1591115765373-520b7a3d72a6?q=80&w=800" alt="Blockchain" /></div>
            </div>
            <div>
              <h2 className="h2-style mb-8">Active at World-Class Conferences</h2>
              <p className="p-style text-zinc-400 mb-8">We are everywhere the heart of technology beats. From Dubai to London, we share our projects and vision at the most prestigious technology summits.</p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {['Dubai Fintech Summit', 'Gitex Global', 'Seamless Middle East', 'Token 2049', 'EthCC Paris', 'Bitcoin Nashville'].map(c => (
                  <div key={c} className="flex items-center gap-3 font-bold text-xs text-zinc-300">
                    <div className="w-2 h-2 bg-cray-gold rounded-full"></div> {c}
                  </div>
                ))}
              </div>
              <a href="#calendar" className="cta-button">Check Out Our Events</a>
            </div>
          </div>
        </div>
      </section>

      {/* World Reach Section */}
      <section className="section-padding world-reach-section">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="h2-style mb-6">We Work All Over the World</h2>
              <p className="p-style text-zinc-400 mb-8">
                Our 100% remote operational model allows us to collaborate with the most talented minds across the globe. From Silicon Valley to Dubai, London to Singapore, CrayUp is borderless. We leverage local insights with a global perspective to ensure your project's success in every corner of the planet.
              </p>
              <div className="mb-8">
                {["North America", "Europe", "Middle East", "Asia-Pacific", "Latin America", "Africa"].map(region => (
                  <span key={region} className="region-item">{region}</span>
                ))}
              </div>
              <p className="p-style text-zinc-500 font-bold uppercase text-xs tracking-widest">
                Borderless Strategy, Global Impact.
              </p>
            </div>
            <div className="image-grid-3x3">
              {gridImages.map((img, i) => (
                <div key={i} className="grid-img-item">
                  <img src={img} alt={`Global Presence ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding final-cta-about">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="h2-style mb-8 text-white">Are You Ready to Take Your Marketing Strategies to the Next Level?</h2>
              <p className="p-style text-zinc-400 mb-10 max-w-xl">
                Stop following trends and start setting them. Join forces with CrayUp to build a future-proof Web3 ecosystem that commands respect and drives real ROI. Our consultants are ready to evaluate your vision.
              </p>
              <div className="flex items-center gap-6">
                 <div className="flex -space-x-3">
                    {team.slice(0,3).map((t, i) => (
                      <img key={i} src={t.img} className="w-10 h-10 rounded-full border-2 border-black object-cover" />
                    ))}
                 </div>
                 <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Expert Strategy Team Ready</span>
              </div>
            </div>
            
            <div className="final-form-box">
              {finalFormSent ? (
                <div className="text-center py-10 animate-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-cray-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="h3-style mb-4 text-white">Message Received!</h3>
                  <p className="p-style text-zinc-400">Our strategic team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFinalSubmit}>
                  <label className="form-label-min">Your Name</label>
                  <input type="text" className="form-input-about" required placeholder="John Doe" />
                  
                  <label className="form-label-min">Email Address</label>
                  <input type="email" className="form-input-about" required placeholder="john@example.com" />
                  
                  <label className="form-label-min">Brief Message</label>
                  <textarea className="form-input-about h-24 resize-none" required placeholder="Tell us about your goals..."></textarea>
                  
                  <button type="submit" disabled={loading} className="btn-submit-gold mt-4">
                    {loading ? 'SENDING...' : 'GET IN TOUCH'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Career Modal */}
      {isApplying && (
        <div className="modal-overlay" onClick={closeCareerModal}>
          <div className="modal-content no-scrollbar" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeCareerModal}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            {applied ? (
              <div className="text-center py-10 animate-in zoom-in duration-500">
                <div className="w-16 h-16 bg-cray-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(255,177,0,0.3)]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="h3-style mb-4">Application Received!</h3>
                <p className="p-style text-zinc-400 text-sm">Your profile has been transmitted to our talent network. Our team will contact you if there is a match.</p>
                <button onClick={closeCareerModal} className="btn-submit-gold mt-10 !py-4 !px-10 w-fit mx-auto">Close</button>
              </div>
            ) : (
              <>
                <h3 className="h3-style mb-2 text-center text-white">Join Our Network</h3>
                <p className="p-style text-zinc-500 text-center mb-8 text-xs">Tell us about your expertise and work history.</p>
                <form onSubmit={handleApplySubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <div>
                      <label className="form-label-min">Full Name *</label>
                      <input type="text" className="form-input-about" required placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="form-label-min">Email Address *</label>
                      <input type="email" className="form-input-about" required placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <div>
                      <label className="form-label-min">Telegram Username *</label>
                      <input type="text" className="form-input-about" required placeholder="@username" />
                    </div>
                    <div>
                      <label className="form-label-min">X (Twitter) Link</label>
                      <input type="text" className="form-input-about" placeholder="x.com/username" />
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className="form-label-min">Target Department *</label>
                    <select className="form-input-about cursor-pointer" required>
                      <option value="">Select a category...</option>
                      <option value="consulting">Project Consulting</option>
                      <option value="token-dev">Token Development</option>
                      <option value="sw-dev">Software Development</option>
                      <option value="marketing">Web3 Marketing</option>
                      <option value="community">Community Management</option>
                      <option value="content">Content Production</option>
                      <option value="liquidity">Market Making</option>
                      <option value="investment">Investment Consulting</option>
                      <option value="partnerships">Business Development</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label className="form-label-min">Experience & Roles *</label>
                    <textarea className="form-input-about h-24 resize-none" required placeholder="Where have you worked before?"></textarea>
                  </div>
                  <div className="mb-6">
                    <label className="form-label-min">Portfolio Link</label>
                    <input type="text" className="form-input-about" placeholder="https://..." />
                  </div>
                  <button type="submit" disabled={loading} className="btn-submit-gold">
                    {loading ? 'TRANSMITTING...' : 'SUBMIT APPLICATION'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <div style={{ padding: '60px 0', textAlign: 'center', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 700, fontSize: '14px !important' }}>Back to Homepage</button>
      </div>
    </div>
  );
};

export default AboutUsView;