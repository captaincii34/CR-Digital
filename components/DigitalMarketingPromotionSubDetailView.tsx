import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const DigitalMarketingPromotionSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const reasons = [
    {
      icon: <path d="M12 20v-6M6 20V10M18 20V4"/>,
      title: 'Data-Driven Promotion',
      desc: 'We use measurable channels that bring real investors and users to your project, not just "hype".'
    },
    {
      icon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>,
      title: "Global Media Power",
      desc: 'We have connections to announce your project to the whole world, from Tier-1 crypto news sites to global PR networks.'
    },
    {
      icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>,
      title: 'Targeted KOL Network',
      desc: 'We work with real, high-engagement Web3 leaders instead of bot-follower accounts.'
    }
  ];

  const faqs = [
    { q: "How long does it take to prepare a marketing strategy?", a: "According to your project's scope, we prepare a detailed analysis and application plan within 3 to 7 business days." },
    { q: "In which regions do you promote?", a: "With our global focus, we have a strong news and influencer network, especially in Asia, America, and Europe markets." },
    { q: "Is promotion possible for small budget projects?", a: "Yes, we have 'impact-oriented' mini packages and growth setups suitable for every budget." }
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
        
        .h1-style { font-size: 40px !important; font-weight: 700 !important; }
        .h2-style { font-size: 30px !important; font-weight: 700 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; }

        #h-hero { position: relative; padding: 220px 0 120px; min-height: 85vh; display: flex; align-items: center; }
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { grid-template-columns: 1.2fr 1fr; align-items: center; } }
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; color: #000; width: 100%; max-width: 480px; margin: 0 auto; }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 18px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }

        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        .reason-card { padding: 48px 32px; border-radius: 24px; text-align: center; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); transition: 0.4s; }
        .reason-card:hover { transform: translateY(-10px); border-color: var(--cray-gold); background: rgba(255, 177, 0, 0.08); }
        .reason-icon-box { width: 60px; height: 60px; background-color: var(--cray-gold); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.3); }
        .reason-icon-box svg { display: block; }

        .detail-item { display: flex; flex-direction: column; gap: 40px; align-items: center; margin-bottom: 100px; }
        @media (min-width: 1024px) { 
          .detail-item { flex-direction: row; } 
          .detail-item.reverse { flex-direction: row-reverse; } 
        }
        .detail-text { flex: 1; }
        .detail-visual { flex: 1; position: relative; border-radius: 32px; overflow: hidden; height: 400px; border: 1px solid rgba(255,177,0,0.2); }
        .detail-visual img { width: 100%; height: 100%; object-fit: cover; }

        .cta-box-section { background: #f7f7f7; padding: 100px 0; color: #000; text-align: center; }
        .cta-btn { background: var(--cray-gold); color: #000; padding: 20px 48px; border-radius: 12px; font-weight: 700 !important; display: inline-block; transition: 0.3s; margin-top: 32px; text-decoration: none; }
        
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; width: 100%; text-align: left; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      {/* Hero */}
      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2062&auto=format&fit=crop" className="bg-img" alt="Digital Promotion" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h1 className="h1-style">Digital Marketing & Promotion Consulting</h1>
              <p className="hero-desc p-style">We don't just promote; we build a brand. We announce your voice to the whole world with advertising and promotion strategies suitable for the Web3 world.</p>
            </div>
            <div className="form-card">
              <h3 className="h2-style" style={{textAlign: 'center', marginBottom: '20px', fontSize: '20px !important'}}>Promotion Request</h3>
              <form onSubmit={handleSubmit}>
                <input type="text" className="w-full border p-3 rounded-lg mb-4" placeholder="Telegram / X Link" required />
                <textarea className="w-full border p-3 rounded-lg mb-4" rows={3} placeholder="In which regions do you want to stand out?" required />
                <button type="submit" disabled={loading} className="form-button">{loading ? 'BRANDING...' : 'GET PROMOTION STRATEGY'}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '60px'}}>Approaches That Make a Difference in Promotion</h2>
          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="reason-card">
                <div className="reason-icon-box">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                    {r.icon}
                  </svg>
                </div>
                <h4 className="h4-style">{r.title}</h4><p className="p-style">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Info */}
      <section className="section-padding" style={{background: '#050505'}}>
        <div className="container-xl">
          <div className="detail-row">
            <div className="detail-item">
              <div className="detail-text">
                <h2 className="h2-style" style={{marginBottom: '20px'}}>Brand Story Construction</h2>
                <p className="p-style" style={{color: '#d1d5db', lineHeight: '1.8'}}>
                  More than technical details are needed to attract attention in Web3. We construct the soul and story of your project that touches the community. By speaking the right language in the right channels, we make your brand permanent.
                </p>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" alt="Brand Building" />
              </div>
            </div>

            <div className="detail-item reverse">
              <div className="detail-text">
                <h2 className="h2-style" style={{marginBottom: '20px'}}>Global Visibility and PR</h2>
                <p className="p-style" style={{color: '#d1d5db', lineHeight: '1.8'}}>
                  We actively use global news networks and interaction channels so that you can reach not just one region, but the whole world. We carry your brand to the big leagues through CoinTelegraph, Forbes, and major exchange portals.
                </p>
              </div>
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2062&auto=format&fit=crop" alt="Global PR" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style">Let's Carry Your Brand to the Global Arena</h2>
          <p className="p-style" style={{color: '#555', marginTop: '15px', maxWidth: '800px', margin: '15px auto 0'}}>Reach crypto investors from all over the world. Increase your visibility to the highest level with our Tier-1 PR and KOL network.</p>
          <a href="#h-hero" className="cta-btn">Get Promotion Package</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '48px'}}>Frequently Asked Questions</h2>
          <div style={{maxWidth: '850px', margin: '0 auto'}}>
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-accordion-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-accordion-header h4-style">
                  <span>{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cray-gold)" strokeWidth="3" style={{transform: openFaq === i ? 'rotate(180deg)' : ''}}><path d="M19 9l-7 7-7-7" /></svg>
                </div>
                <div className="faq-accordion-body p-style"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ padding: '80px 0', textAlign: 'center', background: '#000' }}>
        <button onClick={() => window.location.hash = '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi'} className="p-style" style={{ background: 'transparent', border: '1px solid #444', color: '#888', padding: '14px 40px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase' }}>Back to Services</button>
      </div>
    </div>
  );
};

export default DigitalMarketingPromotionSubDetailView;