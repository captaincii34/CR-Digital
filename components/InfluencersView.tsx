import React, { useState } from 'react';
import { startTelegramConnectWithForm, waitUntilConnected } from "../utils/telegramBridge";

type InfluencerStep = 1 | 2 | 3 | 4 | 5 | 6 | 'success';

const faqData = [
  { q: "Do I need to pay any fee to participate?", a: "No, joining the CrayUp Influencer Network is completely free. We act as a bridge and do not demand any financial payment from our influencers." },
  { q: "Influencers from which platforms can apply?", a: "All influencers producing crypto/Web3 focused content on X (Twitter), Telegram, YouTube, and Discord platforms can apply." },
  { q: "Is there a follower limit?", a: "We do not have a specific numerical limit. What matters most to us is the authenticity of your audience, your engagement rate, and the niche contribution you can provide to projects." },
  { q: "How and when will I receive my payments?", a: "We work on a collaboration basis. You receive your payments quickly at the end of the job via cryptocurrency (USDT/Stablecoin) or bank transfer, depending on your preference." },
  { q: "How does the collaboration process work?", a: "After your application is approved and a suitable project arrives, our team will contact you via Telegram, discuss the terms, and start the process with your approval." },
  { q: "How can I join the private Telegram channel?", a: "Once your registration is complete and your profile is verified, a special invitation link for approved influencers will be sent to you personally." },
  { q: "What are the priorities for CrayDEX and Crayus Game?", a: "You gain high-tier VIP rights, exclusive token airdrops, and priority access to beta test processes in CrayUp's own projects (exchange and game)." },
  { q: "Who communicates with the brands?", a: "CrayUp manages all operational burdens, budget negotiations, and technical details. You only focus on promoting the project and your community." },
  { q: "Do you only focus on Turkey?", a: "No, we are a global agency. Thanks to our partnerships with giants like Bybit, MEXC, and Gate.io, you have the opportunity to collaborate with projects from all over the world." },
  { q: "How long does it take to get a response after applying?", a: "Our team reviews your application and channels. Usually, the first contact is established via Telegram within 24-48 hours." }
];

// Expanded Options
const twitterOptions = ["Retweet", "Share promotional post", "Tweet series (Flood)", "Twitter Space / Audio", "Pinned tweet", "Comment on specific tweet", "Profile Header Rental", "Bio Link Rental", "Tag/Trending Topic", "Long-term Ambassadorship"];
const telegramOptions = ["Group/Channel sharing", "Share promotional post", "Voice chat (VC) in own channel", "Event in our official channel", "Q&A mini-event", "Group Pinning", "Bot Button Ad", "Folder add", "Shilling Support"];
const youtubeOptions = ["5+ minute video", "Shorts (1 min)", "Live stream", "Coin analysis", "In-video sponsorship", "Community Post sharing", "Educational series participation", "Podcast / Interview"];
const otherPlatformOptions = [
  "CoinMarketCap comment", "Binance Square post", "Reddit (r/Crypto etc.)", "Discord community post", "TikTok video", "Medium article", 
  "Dextools comment/pin", "Quora post", "TradingView analysis", "CoinGecko comment", "LinkedIn post", "Dexscanner sharing", 
  "Warpcast (Farcaster)", "Lens Protocol", "Debank Stream", "Galxe Campaign Support", "Zealy/QuestN Management"
];
const durationOptions = ["One-Time", "Weekly", "Monthly / Ongoing"];

const InfluencersView: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState<InfluencerStep>(1);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Form states
  const [formData, setFormData] = useState({
    twitterHandle: "",
    youtubeLink: "",
    otherSocials: "",
    
    selectedTwitter: [] as string[],
    twitterFee: "",
    
    selectedTelegram: [] as string[],
    telegramFee: "",
    
    selectedYoutube: [] as string[],
    youtubeFee: "",
    
    selectedOthers: [] as string[],
    otherPlatformText: "", 
    othersFee: "",
    
    suggestions: "",
    duration: "",
    durationFee: "" 
  });

  const handleRegisterClick = () => {
    setIsModalOpen(true);
    setStep(1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStep(1);
  };

  const scrollToApply = () => {
    const el = document.getElementById('apply-now');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const toggleSelection = (key: keyof typeof formData, value: string) => {
    const current = formData[key] as string[];
    setFormData(prev => ({
      ...prev,
      [key]: current.includes(value) ? current.filter(v => v !== value) : [...current, value]
    }));
  };

  const handleNext = () => setStep(prev => (typeof prev === 'number' ? (prev + 1) as InfluencerStep : prev));
  const handlePrev = () => setStep(prev => (typeof prev === 'number' ? (prev - 1) as InfluencerStep : prev));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const formPayload = {
        "X (Twitter)": formData.twitterHandle,
        "YouTube": formData.youtubeLink,
        "Other Channels": formData.otherSocials,
        "Twitter Choices": formData.selectedTwitter.join(", "),
        "Twitter Fee (USDT)": formData.twitterFee || "Not Specified",
        "Telegram Choices": formData.selectedTelegram.join(", "),
        "Telegram Fee (USDT)": formData.telegramFee || "Not Specified",
        "YouTube Choices": formData.selectedYoutube.join(", "),
        "YouTube Fee (USDT)": formData.youtubeFee || "Not Specified",
        "Other Platform Choices": formData.selectedOthers.join(", "),
        "Extra Platform Text": formData.otherPlatformText || "None",
        "Other Platforms Fee (USDT)": formData.othersFee || "Not Specified",
        "Partnership Duration": formData.duration,
        "Package/Consultancy Fee (USDT)": formData.durationFee || "To be discussed",
        "Suggestions/Notes": formData.suggestions,
        "Type": "Advanced Influencer Onboarding V2",
        "Sent At": new Date().toISOString(),
      };

      const code = await startTelegramConnectWithForm(formPayload);
      const ok = await waitUntilConnected(code);
      if (!ok) {
        alert("Connection could not be verified. Please open the Telegram bot and press Start.");
        setLoading(false);
        return;
      }

      setStep('success');
    } catch (err: any) {
      console.error(err);
      alert("An error occurred during the Telegram connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="influencers-page bg-black text-white min-h-screen">
      <style>{`
        .influencers-page { padding-top: 120px; position: relative; overflow-x: hidden; }
        .container-xl { max-width: 1280px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 10; }
        
        .influencers-page .h1-style { font-size: 40px !important; font-weight: 800 !important; line-height: 1.2; margin-bottom: 24px; }
        .h2-style { font-size: 32px !important; font-weight: 800 !important; margin-bottom: 20px; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; color: #ccc; line-height: 1.8; }
        
        .hero-section { position: relative; padding: 120px 0 80px; }
        .hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.25; z-index: 0; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent, #000); z-index: 1; }

        .feature-list { margin-top: 50px; display: flex; flex-direction: column; gap: 30px; max-width: 700px; }
        .feature-item { display: flex; gap: 20px; }
        .feature-tick { width: 28px; height: 28px; background: var(--cray-gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 5px; }
        .feature-content h4 { font-size: 20px !important; font-weight: 800 !important; color: #fff; margin-bottom: 5px; }
        .feature-content p { font-size: 15px !important; color: #888; margin: 0; }

        .register-section { position: relative; padding: 70px 0; background: #050505; text-align: center; border-top: 1px solid rgba(255,177,0,0.1); border-bottom: 1px solid rgba(255,177,0,0.1); }
        .register-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.15; mix-blend-mode: overlay; }

        .why-us-section { padding: 100px 0; }
        .why-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 20px; margin-top: 60px; }
        @media (min-width: 1024px) { .why-grid { grid-template-columns: repeat(4, 1fr); } }
        
        .why-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 40px 30px; border-radius: 24px; transition: 0.4s; height: 100%; text-align: center; }
        .why-card:hover { border-color: var(--cray-gold); background: rgba(255,177,0,0.05); transform: translateY(-10px); }
        .why-card h4 { font-size: 18px !important; font-weight: 800 !important; margin-bottom: 15px; color: var(--cray-gold); }
        .why-card p { font-size: 14px !important; color: #999; margin: 0; line-height: 1.6; }

        .cta-band { background: var(--cray-gold); padding: 80px 0; color: #000; text-align: center; }
        .btn-cta-dark { background: #000; color: #fff; padding: 18px 50px; border-radius: 12px; font-weight: 800 !important; border: none; cursor: pointer; text-transform: uppercase; transition: 0.3s; }

        .faq-section { padding: 120px 0; background: #000; }
        .faq-accordion-item { background: #09090b; border: 1px solid #1a1a1a; border-radius: 16px; margin-bottom: 12px; }
        .faq-accordion-header { padding: 24px 32px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .faq-accordion-body { padding: 0 32px 28px; color: #9ca3af; display: none; }
        .faq-accordion-item.active .faq-accordion-body { display: block; }
        .faq-accordion-item.active .faq-accordion-header { color: var(--cray-gold); }

        /* Modal Styles */
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.92); backdrop-filter: blur(25px); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .modal-box { background: #111; border: 1px solid var(--cray-gold); border-radius: 32px; width: 100%; max-width: 650px; position: relative; padding: 50px 40px; box-shadow: 0 40px 100px rgba(0,0,0,0.8); overflow-y: auto; max-height: 90vh; }
        .modal-close { position: absolute; top: 25px; right: 25px; background: none; border: none; color: #555; cursor: pointer; transition: 0.3s; }
        .modal-close:hover { color: var(--cray-gold); transform: rotate(90deg); }
        
        .step-indicator { display: flex; gap: 6px; margin-bottom: 40px; }
        .step-dot { height: 4px; flex: 1; background: #222; border-radius: 2px; }
        .step-dot.active { background: var(--cray-gold); box-shadow: 0 0 10px var(--cray-gold); }

        .form-input-inf { width: 100%; background: #000; border: 1px solid #222; border-radius: 12px; padding: 14px 18px; color: #fff; font-size: 14px !important; margin-bottom: 20px; outline: none; transition: 0.3s; }
        .form-input-inf:focus { border-color: var(--cray-gold); }

        .check-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 8px; margin-bottom: 20px; }
        @media (min-width: 640px) { .check-grid { grid-template-columns: repeat(2, 1fr); } }
        
        .check-card { 
          padding: 14px; 
          background: #1a1a1a; 
          border: 1px solid #222; 
          border-radius: 12px; 
          cursor: pointer; 
          transition: 0.3s; 
          display: flex; 
          align-items: center; 
          gap: 12px;
          color: #777;
        }
        .check-card:hover { border-color: var(--cray-gold); }
        .check-card.active { border-color: var(--cray-gold); background: rgba(255,177,0,0.05); color: #fff; }
        .check-circle { width: 18px; height: 18px; border-radius: 50%; border: 2px solid #333; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
        .active .check-circle { border-color: var(--cray-gold); background: var(--cray-gold); }

        .modal-nav { display: flex; justify-content: space-between; gap: 15px; margin-top: 30px; }
        .btn-modal-prev { flex: 0.3; background: transparent; border: 1px solid #333; color: #888; padding: 16px; border-radius: 12px; font-weight: 700; cursor: pointer; text-transform: uppercase; font-size: 12px; }
        .btn-modal-next { flex: 1; background: var(--cray-gold); color: #000; border: none; padding: 16px; border-radius: 12px; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; font-size: 13px; }
        .btn-modal-next:disabled { opacity: 0.4; cursor: not-allowed; }

        .fee-input-wrap { background: #0a0a0a; padding: 20px; border-radius: 18px; border: 1px dashed #333; margin-top: 5px; margin-bottom: 15px; }
        .form-label-min { font-size: 10px !important; font-weight: 800; text-transform: uppercase; color: #555; letter-spacing: 1.5px; margin-bottom: 8px; display: block; }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2832" className="hero-bg" alt="Hero Background" />
        <div className="hero-overlay"></div>
        <div className="container-xl">
          <h5 style={{color: 'var(--cray-gold)', letterSpacing: '8px', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 800, fontSize: '12px !important'}}>CRAYUP INFLUENCER ECOSYSTEM</h5>
          <h1 className="h1-style">Join the Most Powerful <br/> Influencer Network in Crypto</h1>
          <p className="p-style">Take your place among CrayUp's strategic partners. Connect your community with global Web3 projects.</p>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-tick">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="feature-content">
                <h4>Private Workflow Channel</h4>
                <p>Exclusive paid campaign opportunities only for our registered influencers.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-tick">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="feature-content">
                <h4>Instant Notifications with CrayBot</h4>
                <p>Instant information and job notification system exclusive to our registered influencers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply-now" className="register-section">
        <div className="container-xl">
          <h2 className="h2-style">Apply Right Now</h2>
          <p className="p-style mx-auto mb-10 max-w-2xl">Join CrayUp's global network just by specifying your channels.</p>
          <button onClick={handleRegisterClick} className="cta-button !px-24 !py-6 font-black text-lg">REGISTER NOW</button>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us-section bg-black">
        <div className="container-xl">
          <h2 className="h2-style text-center">Why Should You Work With Us?</h2>
          <div className="why-grid">
            <div className="why-card"><h4>Zero Commission</h4><p>No additional fees are requested for the bridge between the influencer and the brand.</p></div>
            <div className="why-card"><h4>Direct Communication</h4><p>Instant coordination via Telegram with our official teams.</p></div>
            <div className="why-card"><h4>Global Brand Power</h4><p>Opportunity to participate in Bybit, Gate.io, and MEXC projects.</p></div>
            <div className="why-card"><h4>Part of the Future</h4><p>Follow the Web3 revolution from the front row with our projects.</p></div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band">
        <div className="container-xl text-center">
          <h2 className="h2-style text-black">Join Us Today</h2>
          <button onClick={scrollToApply} className="btn-cta-dark">JOIN US</button>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container-xl">
          <h2 className="h2-style text-center mb-16">Frequently Asked Questions</h2>
          <div style={{maxWidth: '850px', margin: '0 auto'}}>
            {faqData.map((faq, i) => (
              <div key={i} className={`faq-accordion-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-accordion-header">
                  <span className="font-bold">{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cray-gold)" strokeWidth="3" style={{transform: openFaq === i ? 'rotate(180deg)' : ''}}><path d="M19 9l-7 7-7-7"/></svg>
                </div>
                <div className="faq-accordion-body p-style"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box no-scrollbar" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            {step !== 'success' && (
              <div className="step-indicator">
                {[1,2,3,4,5,6].map(i => <div key={i} className={`step-dot ${step >= i ? 'active' : ''}`}></div>)}
              </div>
            )}

            {/* Step 1: Channels */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-black mb-2">Add Your Channels</h3>
                <p className="text-zinc-500 text-sm mb-8">In which media do you address audiences?</p>
                
                <label className="form-label-min">Twitter (X) Username or Link*</label>
                <input type="text" className="form-input-inf" placeholder="@username" value={formData.twitterHandle} onChange={e=>setFormData({...formData, twitterHandle: e.target.value})} required />
                
                <label className="form-label-min">YouTube Channel Link (Optional)</label>
                <input type="text" className="form-input-inf" placeholder="youtube.com/c/channel" value={formData.youtubeLink} onChange={e=>setFormData({...formData, youtubeLink: e.target.value})} />
                
                <label className="form-label-min">Other Social Media Channels</label>
                <textarea className="form-input-inf h-20 resize-none" placeholder="TikTok, Instagram etc. addresses if any..." value={formData.otherSocials} onChange={e=>setFormData({...formData, otherSocials: e.target.value})} />
                
                <div className="modal-nav">
                  <div style={{flex: 0.3}}></div>
                  <button onClick={handleNext} disabled={!formData.twitterHandle} className="btn-modal-next">NEXT</button>
                </div>
              </div>
            )}

            {/* Step 2: Twitter Options */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-black mb-2">Twitter Collaboration Options</h3>
                <p className="text-zinc-500 text-sm mb-8">Select what you can provide.</p>
                
                <div className="check-grid">
                  {twitterOptions.map(opt => (
                    <div key={opt} onClick={() => toggleSelection('selectedTwitter', opt)} className={`check-card ${formData.selectedTwitter.includes(opt) ? 'active' : ''}`}>
                      <div className="check-circle">{formData.selectedTwitter.includes(opt) && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}</div>
                      <span className="text-[11px] font-bold uppercase">{opt}</span>
                    </div>
                  ))}
                </div>

                <div className="fee-input-wrap">
                  <label className="form-label-min">Fee Expectation (USDT - Optional)</label>
                  <input type="number" className="form-input-inf mb-0" placeholder="e.g., 250" value={formData.twitterFee} onChange={e=>setFormData({...formData, twitterFee: e.target.value})} />
                  <p className="text-[9px] text-zinc-500 mt-2 italic">Please enter numbers only. If left blank, budget will be discussed during the process.</p>
                </div>

                <div className="modal-nav">
                  <button onClick={handlePrev} className="btn-modal-prev">BACK</button>
                  <button onClick={handleNext} className="btn-modal-next">NEXT (TELEGRAM)</button>
                </div>
              </div>
            )}

            {/* Step 3: Telegram Options */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-black mb-2">Telegram Collaboration Options</h3>
                <p className="text-zinc-500 text-sm mb-8">Services you can offer on your channel.</p>
                
                <div className="check-grid">
                  {telegramOptions.map(opt => (
                    <div key={opt} onClick={() => toggleSelection('selectedTelegram', opt)} className={`check-card ${formData.selectedTelegram.includes(opt) ? 'active' : ''}`}>
                      <div className="check-circle">{formData.selectedTelegram.includes(opt) && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}</div>
                      <span className="text-[11px] font-bold uppercase">{opt}</span>
                    </div>
                  ))}
                </div>

                <div className="fee-input-wrap">
                  <label className="form-label-min">Fee Expectation (USDT - Optional)</label>
                  <input type="number" className="form-input-inf mb-0" placeholder="e.g., 150" value={formData.telegramFee} onChange={e=>setFormData({...formData, telegramFee: e.target.value})} />
                </div>

                <div className="modal-nav">
                  <button onClick={handlePrev} className="btn-modal-prev">BACK</button>
                  <button onClick={handleNext} className="btn-modal-next">NEXT (YOUTUBE)</button>
                </div>
              </div>
            )}

            {/* Step 4: YouTube Options */}
            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-black mb-2">YouTube Collaboration Options</h3>
                <p className="text-zinc-500 text-sm mb-8">Video and content production models.</p>
                
                <div className="check-grid">
                  {youtubeOptions.map(opt => (
                    <div key={opt} onClick={() => toggleSelection('selectedYoutube', opt)} className={`check-card ${formData.selectedYoutube.includes(opt) ? 'active' : ''}`}>
                      <div className="check-circle">{formData.selectedYoutube.includes(opt) && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}</div>
                      <span className="text-[11px] font-bold uppercase">{opt}</span>
                    </div>
                  ))}
                </div>

                <div className="fee-input-wrap">
                  <label className="form-label-min">Fee Expectation (USDT - Optional)</label>
                  <input type="number" className="form-input-inf mb-0" placeholder="e.g., 500" value={formData.youtubeFee} onChange={e=>setFormData({...formData, youtubeFee: e.target.value})} />
                </div>

                <div className="modal-nav">
                  <button onClick={handlePrev} className="btn-modal-prev">BACK</button>
                  <button onClick={handleNext} className="btn-modal-next">NEXT (OTHERS)</button>
                </div>
              </div>
            )}

            {/* Step 5: Other Platforms */}
            {step === 5 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-black mb-2">Other Platform Options</h3>
                <p className="text-zinc-500 text-sm mb-8">Areas where you can provide extra value.</p>
                
                <div className="check-grid no-scrollbar" style={{ maxHeight: '220px', overflowY: 'auto' }}>
                  {otherPlatformOptions.map(opt => (
                    <div key={opt} onClick={() => toggleSelection('selectedOthers', opt)} className={`check-card ${formData.selectedOthers.includes(opt) ? 'active' : ''}`}>
                      <div className="check-circle">{formData.selectedOthers.includes(opt) && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}</div>
                      <span className="text-[10px] font-bold uppercase">{opt}</span>
                    </div>
                  ))}
                </div>

                <label className="form-label-min">Platforms Not Listed (Optional)</label>
                <input type="text" className="form-input-inf" placeholder="e.g., Warpcast, Mastodon etc." value={formData.otherPlatformText} onChange={e=>setFormData({...formData, otherPlatformText: e.target.value})} />

                <div className="fee-input-wrap">
                  <label className="form-label-min">Fee Expectation for Other Jobs (USDT)</label>
                  <input type="number" className="form-input-inf mb-0" placeholder="e.g., 100" value={formData.othersFee} onChange={e=>setFormData({...formData, othersFee: e.target.value})} />
                </div>

                <div className="modal-nav">
                  <button onClick={handlePrev} className="btn-modal-prev">BACK</button>
                  <button onClick={handleNext} className="btn-modal-next">FINAL STEP</button>
                </div>
              </div>
            )}

            {/* Step 6: Final Details */}
            {step === 6 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-black mb-2">Collaboration Model</h3>
                <p className="text-zinc-500 text-sm mb-8">Let's clarify processes and budget.</p>
                
                <label className="form-label-min">Collaboration Duration*</label>
                <div className="check-grid">
                  {durationOptions.map(d => (
                    <div key={d} onClick={() => setFormData({...formData, duration: d})} className={`check-card ${formData.duration === d ? 'active' : ''}`}>
                      <div className="check-circle">{formData.duration === d && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}</div>
                      <span className="text-xs font-bold uppercase">{d}</span>
                    </div>
                  ))}
                </div>

                <div className="fee-input-wrap">
                  <label className="form-label-min">General Consultancy/Package Fee (USDT)</label>
                  <input type="number" className="form-input-inf mb-2" placeholder="e.g., 2000" value={formData.durationFee} onChange={e=>setFormData({...formData, durationFee: e.target.value})} />
                  <p className="text-[10px] text-zinc-400 italic leading-relaxed">
                    * Collaboration models are determined, and a single price single package is agreed upon with the influencer. You can think of this as a monthly consultancy fee or campaign management fee.
                  </p>
                </div>

                <label className="form-label-min mt-4">Extra Suggestions</label>
                <textarea className="form-input-inf h-20 resize-none" placeholder="Write any specific collaboration models you have..." value={formData.suggestions} onChange={e=>setFormData({...formData, suggestions: e.target.value})} />

                <div className="modal-nav">
                  <button onClick={handlePrev} className="btn-modal-prev">BACK</button>
                  <button onClick={handleSubmit} disabled={loading || !formData.duration} className="btn-modal-next">
                    {loading ? 'SENDING...' : 'COMPLETE APPLICATION'}
                  </button>
                </div>
              </div>
            )}

            {step === 'success' && (
              <div className="text-center py-10 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-cray-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,177,0,0.4)]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-3xl font-black mb-4">Great!</h3>
                <p className="text-zinc-400">All your data has been successfully saved and your Telegram connection has been verified. Our KOL department will contact you as soon as possible for budget and content planning.</p>
                <button onClick={closeModal} className="btn-modal-next mt-10 !w-fit !px-12 mx-auto">Close</button>
              </div>
            )}
          </div>
        </div>
      )}

      <div style={{ padding: '80px 0', textAlign: 'center', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 40px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 700, fontSize: '14px !important' }}>Return to Homepage</button>
      </div>
    </div>
  );
};

export default InfluencersView;