import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const InvestorRelationsSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await evaluateProject('Investor Relations', 'Post-funding reporting and sustainable communication management analysis.');
    setAiResult(result);
    setLoading(false);
  };

  const reasons = [
    { title: 'Continuous Trust', desc: 'We keep investors informed and engaged after the funding round, ensuring long-term loyalty and support.', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
    { title: 'Transparent Reporting', desc: 'Monthly and quarterly financial/operational reports that prove project success with hard data.', icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/> },
    { title: 'Retention & Expansion', desc: 'We create strategies to ensure existing investors participate in future rounds and advocate for your brand.', icon: <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/> }
  ];

  const faqs = [
    { q: "How often should we report to investors?", a: "We recommend monthly high-level updates and comprehensive quarterly financial and operational reports." },
    { q: "What should we do if project milestones are delayed?", a: "Transparent communication is key. We help you frame delays with a clear recovery plan to maintain investor confidence." },
    { q: "Do you help organize investor Town Halls?", a: "Yes, we coordinate virtual and physical meetings where you can present progress directly to your backers." }
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
        .bullet-point { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .bullet-icon { width: 20px; height: 20px; background: var(--cray-gold); border-radius: 50%; display: flex; align-items: center; justifyContent: center; flex-shrink: 0; }
        .bullet-text { font-size: 11px !important; font-weight: 700 !important; text-transform: uppercase; letter-spacing: 1px; color: #fff; }

        .detail-item { display: flex; flex-direction: column; gap: 60px; align-items: center; }
        @media (min-width: 1024px) { .detail-item { flex-direction: row; } .detail-item.reverse { flex-direction: row-reverse; } }
        .detail-text { flex: 1; }
        .detail-visual { flex: 1; border-radius: 32px; overflow: hidden; height: 400px; border: 1px solid rgba(255,177,0,0.2); position: relative; }
        .detail-visual img { width: 100%; height: 100%; object-fit: cover; }
        .cta-box-section { background: #f7f7f7; padding: 100px 0; color: #000; text-align: center; }
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; text-align: left; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }
      `}</style>

      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2959210?q=80&w=2832" className="bg-img" alt="Relations Hero" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div className="hero-text">
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>Sustainable Partnership</h5>
              <h1 className="h1-style">Investor Relations Management</h1>
              <p className="p-style">Securing funding is just the beginning. We professionally manage investor communication to turn your backers into your project's greatest advocates.</p>
              <div style={{marginTop: '30px'}}>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">PERIODIC OPERATIONAL REPORTING</span>
                </div>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">INVESTOR UPDATES & TOWN HALLS</span>
                </div>
                <div className="bullet-point">
                  <div className="bullet-icon"><svg viewBox="0 0 24 24" width="12" height="12" stroke="#000" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span className="bullet-text">CRISIS & REPUTATION MANAGEMENT SUPPORT</span>
                </div>
              </div>
            </div>
            <div className="form-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>Communication Audit</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Reset</button></div> : (
                <form onSubmit={handleSubmit}>
                  <input type="text" className="form-control" placeholder="Current Investor Count" required />
                  <textarea className="form-control" rows={3} placeholder="What are your main communication challenges?" required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'PROCESSING...' : 'GET IR PLAN'}</button>
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
          <div className="detail-item">
            <div className="detail-text">
              <h2 className="h2-style">Institutional Reporting Standards</h2>
              <p className="p-style">Investors appreciate clarity. We help you produce monthly and quarterly reports that track your core KPIs, on-chain activity, and burn rate. This institutional-grade transparency builds deep trust and encourages follow-on funding.</p>
            </div>
            <div className="detail-visual">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000" alt="Reporting" />
            </div>
          </div>
          <div className="detail-item reverse" style={{marginTop: '100px'}}>
            <div className="detail-text">
              <h2 className="h2-style">Strategic Retention & Upselling</h2>
              <p className="p-style">Your current investors are your easiest source for the next round. We manage your relationships so that investors feel like partners in the journey, making them much more likely to support your future rounds or bridge funding needs.</p>
            </div>
            <div className="detail-visual">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000" alt="Retention" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style">Turn Your Backers into Brand Ambassadors</h2>
          <p className="p-style" style={{color: '#555', marginTop: '15px', maxWidth: '800px', margin: '15px auto 0'}}>Trust is the currency of Web3. Let us professionally manage your investor relations to ensure long-term stability and growth.</p>
          <a href="#h-hero" className="form-button" style={{display: 'inline-block', width: 'auto', padding: '18px 48px', marginTop: '30px', textDecoration: 'none'}}>Request IR Plan</a>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '48px'}}>Frequently Asked Questions</h2>
          <div style={{maxWidth: '850px', margin: '0 auto'}}>
            {faqs.map((f, i) => (
              <div key={i} className={`faq-accordion-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-accordion-header h2-style" style={{fontSize: '18px !important'}}>
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
        <button onClick={() => window.location.hash = '#hizmetler/yatirim-danismanligi'} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase' }}>Back to Services</button>
      </div>
    </div>
  );
};

export default InvestorRelationsSubDetailView;