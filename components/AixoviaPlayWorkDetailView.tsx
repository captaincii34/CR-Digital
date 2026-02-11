import React from 'react';

const AixoviaPlayWorkDetailView: React.FC = () => {
  const galleryImages = [
    { src: '/gorsel/2.jpg', title: 'Seasonal Mechanics', desc: 'Design of in-game events and community tournaments.' },
    { src: '/gorsel/6.jpg', title: 'Hybrid Competition', desc: 'A multiplayer competition arena with AI and human interaction.' },
    { src: '/gorsel/4.jpg', title: 'Superxovia Characters', desc: 'Technical integration of NFT-based in-game characters.' },
    { src: '/gorsel/1.jpg', title: 'Engine Scaling', desc: 'Multiplayer server infrastructure and data synchronization.' },
    { src: '/gorsel/3.jpg', title: 'Neural Agents', desc: 'Design of smart in-game bots and opponent AI.' },
    { src: '/gorsel/5.jpg', title: 'Economy Engine', desc: 'Sustainable P2E (Play-to-Earn) mathematical model.' },
    { src: '/gorsel/7.jpg', title: 'Strategic Depth', desc: 'Mapping of in-game strategy and user experience.' }
  ];

  const services = [
    { icon: '🎮', title: 'Telegram Game Development', desc: 'Multiplayer Telegram Mini App game integrated with TON, running on the play.aixovia.com infrastructure.' },
    { icon: '💰', title: 'Pre-Sale Management', desc: 'Technical and strategic management of the high-volume fund-raising pre-sale process.' },
    { icon: '🏛️', title: 'Listing Consultancy', desc: 'Listing processes and exchange relations management for Tier-1 and Tier-2 exchanges.' },
    { icon: '🎨', title: 'Game Design & UI', desc: 'Game mechanics, character designs, and user interface (UI/UX) engineering.' },
    { icon: '📣', title: 'Hype & Marketing', desc: 'Airdrop and engagement campaigns designed for the viral spread of the game.' }
  ];

  return (
    <div className="work-detail-page">
      <style>{`
        .work-detail-page { background: #000; color: #fff; min-height: 100vh; padding-top: 100px; }
        .hero-section { position: relative; height: 70vh; display: flex; align-items: center; overflow: hidden; border-bottom: 1px solid rgba(255,177,0,0.15); }
        .hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.6; filter: brightness(0.6) contrast(1.1); transition: transform 10s linear; }
        .hero-section:hover .hero-bg { transform: scale(1.1); }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, #000 0%, transparent 60%, rgba(0,0,0,0.5) 100%); }
        
        .container-xl { max-width: 1400px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 10; }
        
        .role-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 20px; margin-top: 40px; }
        @media (min-width: 768px) { .role-grid { grid-template-columns: repeat(3, 1fr); margin-top: -60px; } }
        @media (min-width: 1024px) { .role-grid { grid-template-columns: repeat(5, 1fr); } }
        
        .service-card { 
          background: rgba(15,15,15,0.95); 
          border: 1px solid rgba(255,177,0,0.25); 
          padding: 25px; 
          border-radius: 20px; 
          backdrop-filter: blur(30px);
          transition: 0.5s;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .service-card:hover { border-color: var(--cray-gold); transform: translateY(-10px); }
        .service-icon { font-size: 28px; margin-bottom: 15px; display: block; }
        .service-title { font-weight: 800 !important; font-size: 11px !important; color: var(--cray-gold); text-transform: uppercase; margin-bottom: 8px; letter-spacing: 1px; }
        .service-desc { font-size: 12px !important; color: #999; line-height: 1.6; }

        .content-section { padding: 100px 0; }
        .section-header { margin-bottom: 60px; }
        
        .gallery-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 24px; }
        @media (min-width: 768px) { .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1200px) { .gallery-grid { grid-template-columns: repeat(4, 1fr); } }
        
        .gallery-item { 
          position: relative; 
          border-radius: 24px; 
          overflow: hidden; 
          aspect-ratio: 16/10; 
          border: 1px solid rgba(255,255,255,0.08);
          background: #0a0a0a;
          cursor: pointer;
        }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: 1s; }
        .gallery-item:hover img { transform: scale(1.1); }
        .gallery-info { 
          position: absolute; 
          inset: 0; 
          background: linear-gradient(transparent, rgba(0,0,0,0.9)); 
          display: flex; 
          flex-direction: column; 
          justify-content: flex-end; 
          padding: 25px; 
          opacity: 0; 
          transition: 0.4s ease; 
        }
        .gallery-item:hover .gallery-info { opacity: 1; }

        .case-text-box { 
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          border-radius: 40px; 
          padding: 60px; 
          border: 1px solid rgba(255,177,0,0.1);
          margin-bottom: 100px;
          position: relative;
          overflow: hidden;
        }

        .back-btn { 
          display: inline-flex; 
          align-items: center; 
          gap: 10px; 
          color: #aaa; 
          font-weight: 800 !important; 
          font-size: 11px !important; 
          text-transform: uppercase; 
          letter-spacing: 1px;
          margin-bottom: 30px;
          transition: 0.4s;
          cursor: pointer;
        }
        .back-btn:hover { color: var(--cray-gold); }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,177,0,0.1);
          padding: 10px 20px;
          border-radius: 100px;
          border: 1px solid rgba(255,177,0,0.3);
          width: fit-content;
        }
        
        .highlight-text {
          color: var(--cray-gold);
          font-weight: 700;
        }
      `}</style>

      <div className="container-xl">
        <div onClick={() => window.location.hash = 'works'} className="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Return to Portfolio
        </div>
      </div>

      <section className="hero-section">
        <img src="/gorsel/2.jpg" className="hero-bg" alt="Aixovia Play Hero" />
        <div className="hero-overlay"></div>
        <div className="container-xl">
          <div style={{maxWidth: '900px'}}>
            <h5 style={{color: 'var(--cray-gold)', letterSpacing: '6px', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 800, fontSize: '12px !important'}}>Web3 Social Gaming</h5>
            <h1 className="h1-style" style={{marginBottom: '30px'}}>AIXOVIA PLAY</h1>
            <p className="p-style" style={{color: '#eee', maxWidth: '750px'}}>The entertainment arm of the Aixovia ecosystem. We brought thousands of players together in the on-chain world with a <span className="highlight-text">multiplayer Telegram game.</span></p>
            <div style={{marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
              <a href="https://play.aixovia.com" target="_blank" rel="noopener noreferrer" className="cta-button" style={{padding: '18px 45px', fontSize: '13px !important'}}>Play Now</a>
              <div className="status-badge">
                <div className="w-2 h-2 bg-cray-gold rounded-full animate-pulse"></div>
                <span style={{fontSize: '10px', fontWeight: 900, color: 'var(--cray-gold)', letterSpacing: '2px'}}>LISTING PHASE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-xl">
        <div className="role-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h4 className="service-title">{s.title}</h4>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="content-section">
        <div className="container-xl">
          
          <div className="case-text-box">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="h2-style" style={{color: 'var(--cray-gold)', marginBottom: '25px'}}>Game Economy and Pre-Sale Success</h2>
                <p className="p-style" style={{color: '#eee', marginBottom: '25px'}}>
                  We took the autonomous intelligence we established in the Aixovia project to a fun and competitive dimension with Aixovia Play. The project, met with intense community interest during the pre-sale phase, <span className="text-white font-bold">raised a high-volume investment.</span>
                </p>
                <p className="p-style" style={{color: '#999'}}>
                  As CRAY Digital, we developed the game's technical infrastructure accessed via <strong>play.aixovia.com</strong>, the Telegram Mini App integration, and the multiplayer competition mechanics. Currently, listing processes and community growth strategies are continuing at full speed.
                </p>
              </div>
              <div style={{position: 'relative', borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(255,177,0,0.2)'}}>
                <img src="/gorsel/6.jpg" alt="Aixovia Play Race" style={{width: '100%', height: 'auto', display: 'block'}} />
              </div>
            </div>
          </div>

          <div className="section-header">
            <h2 className="h2-style">Gaming & Asset Gallery</h2>
            <p className="p-style text-zinc-500 max-w-2xl">Our dedicated workspaces reflecting the technological depth and visual richness of Aixovia Play.</p>
          </div>
          
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={img.src} alt={img.title} />
                <div className="gallery-info">
                  <h4 style={{fontWeight: 900, fontSize: '14px', color: 'var(--cray-gold)', textTransform: 'uppercase', letterSpacing: '1px'}}>{img.title}</h4>
                  <p style={{fontSize: '12px', color: '#fff', marginTop: '5px'}}>{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{background: 'linear-gradient(rgba(255,177,0,0.05), transparent)', borderTop: '1px solid rgba(255,177,0,0.1)'}}>
        <div className="container-xl text-center">
          <h2 className="h2-style mb-6">Carry Your Project into the Web3 Gaming World</h2>
          <p className="p-style text-zinc-400 mb-10 max-w-2xl mx-auto">Need a game project that achieves viral success like Aixovia Play? From tokenomics to development, listing to growth, CRAY is by your side.</p>
          <a href="#calendar" className="cta-button">Plan Your Game Strategy</a>
        </div>
      </section>
    </div>
  );
};

export default AixoviaPlayWorkDetailView;