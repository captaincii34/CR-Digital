import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const ModerationSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await evaluateProject('Moderation', '7/24 safety and interaction strategy.');
    setAiResult(result);
    setLoading(false);
  };

  const reasons = [
    { title: 'Global Timezone Coverage', desc: 'Our team spans every major timezone to ensure your community is active and safe 24/7.', icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/> },
    { title: 'Instant FUD Control', desc: 'We monitor sentiment and neutralize disinformation in seconds to protect your project reputation.', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
    { title: 'Technical Expertise', desc: 'Our moderators are trained in blockchain jargon, providing accurate answers to complex investor queries.', icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/> }
  ];

  const faqs = [
    { q: "How do you handle 24/7 coverage?", a: "We have a distributed global team living in different timezones, ensuring that there is always at least one senior moderator active at any moment." },
    { q: "Can you provide moderation in specific languages?", a: "Yes, we offer moderation in English, Turkish, Chinese, Arabic, and Korean." },
    { q: "How do you respond to a project crisis?", a: "We have pre-set crisis protocols. Moderators follow a verified internal script and work directly with your team to calm the community instantly." }
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
        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2832" className="bg-img" alt="Moderation Hero" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>Always Active Safety</h5>
              <h1 className="h1-style">24/7 Community Moderation</h1>
              <p className="p-style">Crypto never sleeps, and neither do we. Protect your community from scams and FUD with our expert multi-lingual moderation squads around the clock.</p>
            </div>
            <div className="form-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>Get Squad Quote</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Reset</button></div> : (
                <form onSubmit={handleSubmit}>
                  <input type="text" className="w-full border p-3 rounded-lg mb-4" placeholder="Community Platform & Link" required />
                  <textarea className="w-full border p-3 rounded-lg mb-4" rows={3} placeholder="Which languages do you require support for?" required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'ANALYZING...' : 'GET MODERATION PLAN'}</button>
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
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000" alt="Team Work" />
              </div>
              <div className="detail-text">
                <h2 className="h2-style">Continuous Sentiment Defense</h2>
                <p className="p-style">Market volatility often leads to FUD. Our moderators are experts in identifying early signs of community unrest and neutralizing it through technically accurate, calm, and persuasive communication.</p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '24px'}}>
                  {["Real-Time Sentiment Monitoring", "Proactive FUD Mitigation", "Crisis Response Readiness"].map((li, i) => (
                    <li key={i} className="p-style" style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="detail-item reverse">
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000" alt="Security" />
              </div>
              <div className="detail-text">
                <h2 className="h2-style">Institutional Standards of Conduct</h2>
                <p className="p-style">We maintain a professional atmosphere in your channels, ensuring your project is attractive to serious investors. No spam, no bot attacks, and zero tolerance for malicious actors trying to drain your LP.</p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '24px'}}>
                  {["Spam & Scam Filtering", "Administrative Data Privacy", "Verified Answer Database"].map((li, i) => (
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
          <h2 className="h2-style" style={{color: '#000'}}>Sleep Soundly While We Guard Your Community</h2>
          <p className="p-style" style={{color: '#555', marginTop: '15px', maxWidth: '800px', margin: '15px auto 0'}}>
            Don't let one missed message destroy your project's reputation. Get the world's most elite moderation squad behind you.
          </p>
          <a href="#h-hero" className="form-button" style={{display: 'inline-block', width: 'auto', padding: '18px 48px', marginTop: '30px', textDecoration: 'none'}}>Get Moderation Quote</a>
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

export default ModerationSubDetailView;