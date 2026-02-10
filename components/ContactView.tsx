import React, { useState } from 'react';

const ContactView: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <style>{`
        .contact-page { background: #000; color: #fff; min-height: 100vh; padding-top: 90px; }
        .container-xl { max-width: 1280px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 10; }
        
        /* Hero Section */
        .contact-hero { 
          position: relative; 
          padding: 140px 0 100px; 
          text-align: center; 
          overflow: hidden;
          background: linear-gradient(to bottom, rgba(255,177,0,0.05), transparent);
        }
        .hero-bg { 
          position: absolute; 
          inset: 0; 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          opacity: 0.3; 
          z-index: 0;
          filter: grayscale(1) brightness(0.5);
        }
        .h1-style { font-size: 64px !important; font-weight: 900 !important; letter-spacing: -2px; line-height: 1; margin-bottom: 25px; }
        .p-style { font-size: 20px !important; color: #888; max-width: 800px; margin: 0 auto; line-height: 1.6; font-weight: 300; }

        /* Content Section */
        .contact-content { padding: 100px 0; }
        .contact-grid { display: grid; grid-template-columns: 1fr; gap: 80px; }
        @media (min-width: 1024px) { .contact-grid { grid-template-columns: 0.8fr 1.2fr; } }

        /* Left Column: Info */
        .info-card { 
          background: rgba(255,255,255,0.02); 
          border: 1px solid rgba(255,255,255,0.05); 
          padding: 40px; 
          border-radius: 32px; 
          margin-bottom: 30px;
          transition: 0.3s;
        }
        .info-card:hover { border-color: var(--cray-gold); transform: translateX(10px); }
        .info-label { color: var(--cray-gold); font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px; display: block; }
        .info-value { font-size: 24px !important; font-weight: 700 !important; color: #fff; text-decoration: none; display: block; }
        .info-text { color: #888; font-size: 16px; margin-top: 10px; line-height: 1.5; }

        /* Right Column: Form */
        .contact-form-wrapper {
          background: #111;
          border: 1px solid rgba(255,177,0,0.1);
          padding: 60px;
          border-radius: 48px;
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.6);
        }
        .form-title { font-size: 32px; font-weight: 800; margin-bottom: 40px; }
        .input-group { margin-bottom: 25px; }
        .input-label { display: block; font-weight: 700; font-size: 13px; color: #666; margin-bottom: 10px; text-transform: uppercase; }
        .custom-input { 
          width: 100%; 
          background: #000; 
          border: 1px solid #222; 
          padding: 18px 24px; 
          border-radius: 16px; 
          color: #fff; 
          font-size: 15px; 
          transition: 0.3s;
        }
        .custom-input:focus { border-color: var(--cray-gold); outline: none; box-shadow: 0 0 20px rgba(255,177,0,0.1); }
        .custom-textarea { height: 160px; resize: none; }

        .submit-btn {
          width: 100%;
          background: var(--cray-gold);
          color: #000;
          padding: 22px;
          border-radius: 16px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: 0.3s;
          cursor: pointer;
          border: none;
          margin-top: 20px;
        }
        .submit-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(255,177,0,0.3); }
        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .success-box {
          text-align: center;
          padding: 40px;
          background: rgba(255,177,0,0.05);
          border-radius: 24px;
          border: 1px dashed var(--cray-gold);
        }
      `}</style>

      <section className="contact-hero">
        <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop" className="hero-bg" alt="Contact BG" />
        <div className="container-xl">
          <h1 className="h1-style">Get in Touch</h1>
          <p className="p-style">Ready to revolutionize the Web3 world? Whether you have a specific project in mind or just want to explore the possibilities, our expert team is here to guide you.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container-xl">
          <div className="contact-grid">
            {/* Info Column */}
            <div className="info-column">
              <div className="info-card">
                <span className="info-label">Direct Communication</span>
                <a href="mailto:info@craydigital.com" className="info-value">info@craydigital.com</a>
                <p className="info-text">Our average response time for new inquiries is 4 hours during business days.</p>
              </div>

              <div className="info-card">
                <span className="info-label">Global Headquarters</span>
                <span className="info-value">London, England</span>
                <p className="info-text">CRAY Digital operates on a 100% remote global scale, with our core team based in major blockchain hubs.</p>
              </div>

              <div className="info-card">
                <span className="info-label">Call Support</span>
                <span className="info-value">+44 20 7123 4567</span>
                <p className="info-text">Available Mon-Fri, 09:00 - 18:00 (GMT).</p>
              </div>
              
              <div className="mt-12">
                <h4 className="h4-style mb-6">Connect with us on Social</h4>
                <div className="flex gap-4">
                  {['𝕏', 'in', '✈'].map(s => (
                    <div key={s} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-cray-gold hover:text-black transition-all font-bold">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="form-column">
              <div className="contact-form-wrapper">
                {sent ? (
                  <div className="success-box animate-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-cray-gold rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                    <p className="text-zinc-400">Thank you! Our strategic team will review your inquiry and get back to you shortly.</p>
                    <button onClick={() => setSent(false)} className="text-cray-gold font-bold mt-8 underline">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="form-title">Start Your Journey</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="input-group">
                        <label className="input-label">Your Name</label>
                        <input type="text" className="custom-input" placeholder="Full Name" required />
                      </div>
                      <div className="input-group">
                        <label className="input-label">Email Address</label>
                        <input type="email" className="custom-input" placeholder="example@mail.com" required />
                      </div>
                    </div>

                    <div className="input-group">
                      <label className="input-label">Project Type</label>
                      <select className="custom-input">
                        <option value="token">Token Launch</option>
                        <option value="gamefi">GameFi / P2E</option>
                        <option value="consultancy">360° Consultancy</option>
                        <option value="software">Blockchain Software</option>
                        <option value="marketing">Web3 Marketing</option>
                      </select>
                    </div>

                    <div className="input-group">
                      <label className="input-label">Your Message</label>
                      <textarea className="custom-input custom-textarea" placeholder="Tell us about your project, goals, or questions..." required></textarea>
                    </div>

                    <button type="submit" disabled={loading} className="submit-btn">
                      {loading ? 'SENDING...' : 'TRANSMIT MESSAGE'}
                    </button>
                    <p className="text-[11px] text-zinc-500 mt-6 text-center">
                      By submitting this form, you agree to our <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Service</span>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="section-padding" style={{ background: '#0a0a0a', borderTop: '1px solid #111' }}>
        <div className="container-xl text-center">
          <h2 className="h2-style mb-8">Looking for a specific time?</h2>
          <a href="#booking-section" onClick={() => window.location.hash = 'booking-section'} className="cta-button" style={{ padding: '24px 60px' }}>Book a Discovery Call</a>
        </div>
      </section>

      <div style={{ padding: '60px 0', textAlign: 'center', background: '#000' }}>
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '14px 40px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '14px !important' }}>Back to Homepage</button>
      </div>
    </div>
  );
};

export default ContactView;