import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';
import { startTelegramConnectWithForm, waitUntilConnected } from "../utils/telegramBridge";

const BudgetOrientedConsultancySubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [budgetRange, setBudgetRange] = useState('');
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const formObj = {
        "Budget Bracket": budgetRange,
        "Success Target": goal,
        "Type": "Budget Oriented Sub-Detail",
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

      const result = await evaluateProject('budget', `Budget: ${budgetRange}. Goal: ${goal}`);
      setAiResult(result);
    } catch (err: any) {
      console.error(err);
      alert("Could not initiate Telegram connection. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reasons = [
    {
      icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>,
      title: 'Maximum ROI Focused',
      desc: 'We construct strategies aiming for every $1 spent to add at least $3 of value to the project.'
    },
    {
      icon: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
      title: "Waste Expense Analysis",
      desc: 'We eliminate exorbitant and ineffective marketing expenses in the Web3 world and direct your budget to the right channels.'
    },
    {
      icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>,
      title: 'Performance-Based Growth',
      desc: 'We offer management focused directly on success, such as holder count and volume, not just vanity metrics.'
    }
  ];

  const faqs = [
    { q: "Is exchange listing possible with a limited budget?", a: "Yes, you can be listed on exchanges without straining your budget with tiered listing strategies and volume partnerships." },
    { q: "How do you optimize the marketing budget?", a: "Through high-conversion KOLs (Key Opinion Leaders) and goal-oriented PR work instead of ineffective influencers." },
    { q: "Is the consultancy fee determined according to the budget?", a: "We offer you the most efficient package by scaling our service scope according to your budget and goals." }
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
        .h3-style { font-size: 22px !important; font-weight: 600 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; }

        #h-hero { position: relative; padding: 220px 0 120px; min-height: 85vh; display: flex; align-items: center; }
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 60px; position: relative; z-index: 10; width: 100%; }
        @media (min-width: 1024px) { .hero-grid { grid-template-columns: 1.2fr 1fr; align-items: center; } }
        .form-card { background-color: #f7f7f7; border-radius: 24px; padding: 40px; box-shadow: 0 40px 80px rgba(0,0,0,0.7); color: #000; width: 100%; max-width: 480px; margin: 0 auto; }
        .form-control { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; background: #fff; color: #000; margin-bottom: 16px; font-size: 14px; }
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

      {/* Hero Section */}
      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1554224155-8d04182258f5?q=80&w=2070&auto=format&fit=crop" className="bg-img" alt="Budget Consultancy" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h1 className="h1-style">Budget-Focused Crypto Project Consulting</h1>
              <p className="p-style">Create unlimited impact with limited resources. We develop strategies that maximize ROI by using your budget in the most efficient way.</p>
            </div>
            <div className="form-card">
              <h3 className="h3-style" style={{textAlign: 'center', marginBottom: '20px', color: '#000'}}>Efficiency Analysis</h3>
              {aiResult ? (
                <div className="p-style text-center" style={{color: '#000'}}>
                  {aiResult.summary}
                  <button onClick={()=>setAiResult(null)} className="form-button mt-10">Reset Analysis</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p className="text-[10px] font-bold text-zinc-400 mb-2 uppercase tracking-widest">Budget Bracket*</p>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Estimated Budget Range (e.g. $10k - $30k)" 
                    value={budgetRange}
                    onChange={e => setBudgetRange(e.target.value)}
                    required 
                  />

                  <p className="text-[10px] font-bold text-zinc-400 mb-2 uppercase tracking-widest">Primary Goal*</p>
                  <textarea 
                    className="form-control" 
                    rows={4} 
                    placeholder="What is your primary goal with this budget?" 
                    value={goal}
                    onChange={e => setGoal(e.target.value)}
                    required 
                    style={{ resize: 'none' }}
                  />

                  <button type="submit" disabled={loading} className="form-button">
                    {loading ? 'OPENING TELEGRAM...' : 'GET EFFICIENCY PLAN'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding">
        <div className="container-xl">
          <h2 className="h2-style" style={{textAlign: 'center', marginBottom: '60px'}}>Efficient Growth Strategy</h2>
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
          <div className="detail-item">
            <div className="detail-text">
              <h2 className="h2-style" style={{marginBottom: '20px'}}>Smart Resource Management</h2>
              <p className="p-style" style={{color: '#d1d5db', lineHeight: '1.8'}}>
                It's not large budgets, but smartly spent budgets that bring success. We know the inflated prices in the Web3 ecosystem and offer the most cost-effective solutions for your project.
              </p>
            </div>
            <div className="detail-visual">
              <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2071&auto=format&fit=crop" alt="Resource Management" />
            </div>
          </div>

          <div className="detail-item reverse">
            <div className="detail-text">
              <h2 className="h2-style" style={{marginBottom: '20px'}}>Growth and Scaling</h2>
              <p className="p-style" style={{color: '#d1d5db', lineHeight: '1.8'}}>
                The most critical stage in projects started with a limited budget is directing the generated income to the correct scaling channels. We build ecosystem models that grow step by step and finance themselves.
              </p>
            </div>
            <div className="detail-visual">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" alt="Scalable Growth" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="cta-box-section">
        <div className="container-xl">
          <h2 className="h2-style" style={{color: '#000'}}>Turn Your Budget Into Power</h2>
          <p className="p-style" style={{color: '#555', maxWidth: '800px', margin: '20px auto 0'}}>Let's plan together for the best results you can reach with your current budget. Start now for your efficiency-oriented roadmap.</p>
          <a href="#h-hero" className="cta-btn">Get Started Now</a>
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

      <div style={{ padding: '60px 0', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = 'services/end-to-end-crypto-project-consulting'} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '14px 40px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase' }}>Back to Category</button>
      </div>
    </div>
  );
};

export default BudgetOrientedConsultancySubDetailView;