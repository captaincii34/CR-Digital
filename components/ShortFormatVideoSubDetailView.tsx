import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const ShortFormatVideoSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await evaluateProject('Short Video', 'Viral hooks for Reels and Shorts.');
    setAiResult(result);
    setLoading(false);
  };

  const reasons = [
    { title: 'Viral Hooks', desc: 'We master the first 3 seconds of a video to ensure high retention and viral potential on X and TikTok.', icon: <path d="M13 10V3L4 14h7v7l9-11h-7z"/> },
    { title: 'Daily Consistency', desc: 'Keep your brand on the top of minds with a high-volume, high-quality daily content output.', icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/> },
    { title: 'Community Sharing', desc: 'Create snackable content that your community actually wants to share and discuss.', icon: <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/> }
  ];

  const faqs = [
    { q: "What is the best platform for short videos?", a: "For crypto, X (Twitter) and TikTok are the top performers for organic reach, while YouTube Shorts provides long-term SEO benefits." },
    { q: "Do you use AI for editing?", a: "We use AI tools for captioning and basic tasks, but the storytelling and viral hook engineering are handled by our human strategic editors." },
    { q: "How many videos should we post per week?", a: "Consistency is vital. We recommend a minimum of 3-5 short-form videos per week to stay relevant in the algorithm's feed." }
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
        @media (min-width: 1024px) { .hero-grid { grid-template-columns: 1.2fr 0.8fr; align-items: center; } }
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
        <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2832" className="bg-img" alt="Short Form Hero" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>Snackable Web3 Content</h5>
              <h1 className="h1-style">Short-Form Video Content (Reels / Shorts)</h1>
              <p className="p-style">Be seen where the world scrolls. We produce viral-optimized vertical videos that capture attention instantly and drive massive brand awareness.</p>
            </div>
            <div className="form-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>Video Plan</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Reset</button></div> : (
                <form onSubmit={handleSubmit}>
                  <input type="text" className="w-full border p-3 rounded-lg mb-4" placeholder="Primary Social Channel" required />
                  <textarea className="w-full border p-3 rounded-lg mb-4" rows={3} placeholder="How many videos per week do you need?" required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'SCRIPTING...' : 'GET VIDEO BUNDLE'}</button>
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
                <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2000" alt="Viral Hooks" />
              </div>
              <div className="detail-text">
                <h2 className="h2-style">The Art of the 3-Second Hook</h2>
                <p className="p-style">In a world of infinite scrolling, attention is the scarcest resource. Our short-form specialists focus on 'hooks'—explosive visual or verbal starts that force users to stop scrolling and engage with your project's story.</p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '24px'}}>
                  {["Trend-Matched Audio & Editing", "Captivating Text Overlays", "High-Energy Pacing"].map((li, i) => (
                    <li key={i} className="p-style" style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <span style={{color: 'var(--cray-gold)', fontWeight: 800}}>✓</span> {li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="detail-item reverse">
              <div className="detail-visual">
                <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2000" alt="Platform Optimization" />
              </div>
              <div className="detail-text">
                <h2 className="h2-style">Algorithmic Dominance</h2>
                <p className="p-style">Short-form video is currently the most favored content type across social algorithms. We help your brand exploit this to achieve massive organic reach, bridging the gap between degen community culture and high-end project standards.</p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '24px'}}>
                  {["X/TikTok Trend Mapping", "Cross-Platform Asset Packs", "Community-Led Video Challenges"].map((li, i) => (
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
          <h2 className="h2-style" style={{color: '#000'}}>Go Viral with Professional Video Engineering</h2>
          <p className="p-style" style={{color: '#555', marginTop: '15px', maxWidth: '800px', margin: '15px auto 0'}}>
            Scale your brand's visibility with high-impact shorts. Let our creative squad build your daily viral output.
          </p>
          <a href="#h-hero" className="form-button" style={{display: 'inline-block', width: 'auto', padding: '18px 48px', marginTop: '30px', textDecoration: 'none'}}>Plan Video Batch</a>
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
        <button onClick={() => window.location.hash = '#hizmetler/icerik-uretimi'} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase' }}>Back to Services</button>
      </div>
    </div>
  );
};

export default ShortFormatVideoSubDetailView;