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
        
        @media (max-width: 768px) {
          .container-xl { padding: 0 20px; }
        }

        /* Hero Section */
        .contact-hero { 
          position: relative; 
          padding: 100px 0 60px; 
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
          opacity: 0.2; 
          z-index: 0;
          filter: grayscale(1) brightness(0.5);
        }
        .h1-style { margin-bottom: 20px; }
        .p-style { color: #888; max-width: 800px; margin: 0 auto; line-height: 1.6; }

        @media (max-width: 768px) {
          .contact-hero { padding: 60px 0; 40px; }
          .h1-style { font-size: 32px !important; }
          .p-style { font-size: 15px !important; }
        }

        /* Content Section */
        .contact-content { padding: 60px 0 100px; }
        .contact-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        @media (min-width: 1024px) { 
          .contact-grid { grid-template-columns: 0.8fr 1.2fr; gap: 80px; } 
          .contact-content { padding: 100px 0; }
        }

        /* Left Column: Info */
        .info-card { 
          background: rgba(255,255,255,0.02); 
          border: 1px solid rgba(255,255,255,0.05); 
          padding: 30px; 
          border-radius: 24px; 
          margin-bottom: 20px;
          transition: 0.3s;
        }
        .info-card:hover { border-color: var(--cray-gold); transform: translateX(5px); }
        .info-label { color: var(--cray-gold); font-weight: 800; font-size: 11px !important; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; display: block; }
        .info-value { font-size: 20px !important; font-weight: 700 !important; color: #fff; text-decoration: none; display: block; }
        .info-text { color: #888; font-size: 14px !important; margin-top: 8px; line-height: 1.5; }

        /* Right Column: Form */
        .contact-form-wrapper {
          background: #111;
          border: 1px solid rgba(255,177,0,0.1);
          padding: 40px;
          border-radius: 32px;
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.6);
        }
        @media (max-width: 768px) {
          .contact-form-wrapper { padding: 30px 20px; border-radius: 24px; }
        }

        .form-title { font-size: 24px !important; font-weight: 800 !important; margin-bottom: 30px; }
        .input-group { margin-bottom: 20px; }
        .input-label { display: block; font-weight: 700; font-size: 12px !important; color: #666; margin-bottom: 8px; text-transform: uppercase; }
        .custom-input { 
          width: 100%; 
          background: #000; 
          border: 1px solid #222; 
          padding: 14px 20px; 
          border-radius: 12px; 
          color: #fff; 
          font-size: 14px !important; 
          transition: 0.3s;
        }
        .custom-input:focus { border-color: var(--cray-gold); outline: none; box-shadow: 0 0 15px rgba(255,177,0,0.1); }
        .custom-textarea { height: 120px; resize: none; }

        .submit-btn {
          width: 100%;
          background: var(--cray-gold);
          color: #000;
          padding: 18px;
          border-radius: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: 0.3s;
          cursor: pointer;
          border: none;
          margin-top: 10px;
          font-size: 14px !important;
        }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(255,177,0,0.2); }

        .success-box {
          text-align: center;
          padding: 30px;
          background: rgba(255,177,0,0.05);
          border-radius: 20px;
          border: 1px dashed var(--cray-gold);
        }
      `}</style>

      <section className="contact-hero">
        <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop" className="hero-bg" alt="Contact BG" />
        <div className="container-xl">
          <h1 className="h1-style">Get in Touch</h1>
          <p className="p-style">Ready to revolutionize the Web3 world? Our expert team is here to guide you through every stage of your project.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container-xl">
          <div className="contact-grid">
            <div className="info-column">
              <div className="info-card">
                <span className="info-label">Direct Communication</span>
                <a href="mailto:info@crayup.com" className="info-value">info@crayup.com</a>
                <p className="info-text">Average response time is 4 hours during business days.</p>
              </div>

              <div className="info-card">
                <span className="info-label">Global Headquarters</span>
                <span className="info-value">London, England</span>
                <p className="info-text">CrayUp operates on a 100% remote global scale.</p>
              </div>

              <div className="info-card">
                <span className="info-label">Call Support</span>
                <span className="info-value">+44 20 7123 4567</span>
                <p className="info-text">Available Mon-Fri, 09:00 - 18:00 (GMT).</p>
              </div>
            </div>

            <div className="form-column">
              <div className="contact-form-wrapper">
                {sent ? (
                  <div className="success-box animate-in zoom-in duration-500">
                    <div className="w-12 h-12 bg-cray-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Received</h3>
                    <p className="text-zinc-400 text-sm">Thank you! Our strategic team will get back to you shortly.</p>
                    <button onClick={() => setSent(false)} className="text-cray-gold font-bold mt-6 underline text-sm">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="form-title">Start Your Journey</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
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
                      <textarea className="custom-input custom-textarea" placeholder="Tell us about your project..." required></textarea>
                    </div>

                    <button type="submit" disabled={loading} className="submit-btn">
                      {loading ? 'SENDING...' : 'TRANSMIT MESSAGE'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ padding: '60px 0', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '14px !important' }}>Back to Homepage</button>
      </div>
    </div>
  );
};

export default ContactView;