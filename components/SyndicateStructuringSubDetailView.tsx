import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';
import { startTelegramConnectWithForm, waitUntilConnected } from "../utils/telegramBridge";

const SyndicateStructuringSubDetailView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const [participants, setParticipants] = useState('');
  const [groupStatus, setGroupStatus] = useState('');

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const formObj = {
        "Participant Count": participants,
        "Existing Investor Group Status": groupStatus,
        "Type": "Syndicate Structuring Sub-Detail",
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

      const result = await evaluateProject('Syndicate Structuring', `Participants: ${participants}. Group: ${groupStatus}`);
      setAiResult(result);
    } catch (err: any) {
      console.error(err);
      alert("Could not initiate Telegram connection. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reasons = [
    { title: 'Unified Capital Pool', desc: 'We group multiple smaller investors into a single syndicate, creating institutional fund power.', icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/> },
    { title: 'Managed Cap Table', desc: 'We keep your Cap Table clean with a single syndicate entry instead of dozens of individuals.', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
    { title: 'Smart Contract Based', desc: 'We automate funding and token distribution through transparent on-chain smart contracts.', icon: <path d="M13 10V3L4 14h7v7l9-11h-7z"/> }
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
        .form-control { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; background: #fff; color: #000; margin-bottom: 16px; }
        .form-button { width: 100%; background: var(--cray-gold); color: #000; padding: 18px; border-radius: 12px; font-weight: 700 !important; cursor: pointer; border: none; text-transform: uppercase; }
        .reason-icon-box { width: 60px; height: 60px; background-color: var(--cray-gold); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.3); }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        .reason-card { padding: 48px 32px; border-radius: 24px; text-align: center; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); transition: 0.4s; }
      `}</style>

      <section id="h-hero">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2832" className="bg-img" alt="Syndicate Hero" />
        <div className="overlay"></div><div className="grad"></div>
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h5 style={{color: 'var(--cray-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px'}}>Unified Investor Power</h5>
              <h1 className="h1-style">Co-Investment & Syndicate Structuring</h1>
              <p className="p-style">We turn individual power into institutional leverage. By bringing together value-add investors, we build efficient co-investment models that scale your project.</p>
            </div>
            <div className="form-card">
              <h3 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 800}}>Structure Analysis</h3>
              {aiResult ? <div className="p-style">{aiResult.summary} <button onClick={()=>setAiResult(null)} className="form-button mt-4">Reset</button></div> : (
                <form onSubmit={handleSubmit}>
                  <p className="text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-widest">Participant Count*</p>
                  <input type="text" className="form-control" placeholder="e.g. 50 investors" value={participants} onChange={e=>setParticipants(e.target.value)} required />
                  <p className="text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-widest">Group Status*</p>
                  <textarea className="form-control" rows={3} placeholder="Do you have an existing group or need one built?" value={groupStatus} onChange={e=>setGroupStatus(e.target.value)} required />
                  <button type="submit" disabled={loading} className="form-button">{loading ? 'OPENING TELEGRAM...' : 'GET SYNDICATE PLAN'}</button>
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

      <div style={{ padding: '60px 0', textAlign: 'center' }}>
        <button onClick={() => window.location.hash = '#hizmetler/yatirim-danismanligi'} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase' }}>Back to Services</button>
      </div>
    </div>
  );
};

export default SyndicateStructuringSubDetailView;