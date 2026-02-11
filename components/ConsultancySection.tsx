import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';
import { startTelegramConnectWithForm, waitUntilConnected } from "../utils/telegramBridge";

const ConsultancySection: React.FC = () => {
  const [status, setStatus] = useState('');
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      // Teknik değerleri okunabilir etiketlere dönüştürelim
      const statusLabels: { [key: string]: string } = {
        'yeni': 'New Project',
        'mevcut': 'Existing Project',
        'yatirim': 'Investment Stage'
      };

      const formObj = {
        "Project Status": statusLabels[status] || status,
        "Brief Goal Description": goal,
        "Type": "Homepage Free Pre-Evaluation",
        "Sent At": new Date().toISOString(),
        "Page": window.location.href,
      };

      // 1) Formu backend'e ilet ve Telegram linkini aç
      const code = await startTelegramConnectWithForm(formObj);

      // 2) Kullanıcı Telegram'da botu başlatana kadar bekle
      const ok = await waitUntilConnected(code);
      if (!ok) {
        alert("Please open the bot in Telegram and press Start. Then you can try again.");
        setLoading(false);
        return;
      }

      // 3) Bağlantı kurulduysa Gemini AI analizini çalıştır
      const result = await evaluateProject(status, goal);
      setAiResult(result);
    } catch (err: any) {
      console.error(err);
      alert("Could not initiate Telegram connection. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="section1" className="consultancy-section">
      <style>{`
        .consultancy-section {
          position: relative;
          padding: 60px 0 0px;
          overflow: hidden;
          background-color: #000;
          color: #fff;
          min-height: 600px;
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .consultancy-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0.6;
        }

        .consultancy-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }

        .consultancy-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, #000, transparent 40%, transparent 60%, #000);
          z-index: 2;
        }

        .consultancy-container {
          position: relative;
          z-index: 10;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          width: 100%;
          flex-grow: 1;
          display: flex;
          align-items: center;
        }

        .consultancy-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .consultancy-grid {
            grid-template-columns: 2fr 1fr;
          }
        }

        .consultancy-title {
          font-size: 40px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 12px;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,1));
        }

        .consultancy-subtitle {
          color: var(--cray-gold);
          font-size: 30px;
          font-weight: 600;
          margin-bottom: 4px;
          filter: drop-shadow(0 2px 10px rgba(255,177,0,0.2));
        }

        .consultancy-desc {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.6;
          margin-top: 24px;
          margin-bottom: 24px;
          max-width: 700px;
          color: #e5e7eb;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }

        .consultancy-subdesc {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 700px;
          color: #fff;
          opacity: 0.9;
        }

        .consultancy-buttons {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }

        @media (min-width: 768px) {
          .consultancy-buttons {
            flex-direction: row;
          }
        }

        .btn-main {
          background-color: var(--cray-gold);
          color: #000;
          padding: 20px 28px;
          border-radius: 12px;
          font-weight: 700 !important;
          text-align: center;
          transition: 0.3s;
          box-shadow: 0 40px 80px rgba(0,0,0,0.7);
          text-decoration: none;
          text-transform: uppercase;
          font-size: 14px !important;
          letter-spacing: 0px;
        }

        .btn-main:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(255, 177, 0, 0.5); }

        .btn-outline {
          border: 1px solid rgba(255, 177, 0, 0.4);
          color: var(--cray-gold);
          padding: 20px 28px;
          border-radius: 12px;
          font-weight: 700 !important;
          text-align: center;
          transition: 0.3s;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 14px !important;
          letter-spacing: 0px;
        }

        .btn-outline:hover { background: rgba(255, 177, 0, 0.1); border-color: var(--cray-gold); }

        .consultancy-features {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          font-size: 13px;
          color: #9ca3af;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .feature-item { display: flex; align-items: center; gap: 8px; }
        .feature-check { color: var(--cray-gold); font-size: 18px; }

        .form-card-white {
          background-color: #f7f7f7;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.6);
          color: #000;
        }

        .form-title {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 24px;
          color: #000;
          text-align: center;
        }

        .form-label {
          display: block;
          font-size: 14px !important;
          font-weight: 700 !important;
          color: #000000;
          margin-bottom: 10px;
        }

        .form-field {
          width: 100%;
          background: #fff;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          padding: 14px 18px;
          color: #000;
          transition: 0.3s;
          margin-bottom: 20px;
          font-size: 15px;
        }

        .form-field:focus { outline: none; border-color: var(--cray-gold); box-shadow: 0 0 0 3px rgba(255,177,0,0.1); }

        .btn-submit {
          width: 100%;
          background: var(--cray-gold);
          color: #000;
          padding: 18px;
          border-radius: 10px;
          font-weight: 800;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          text-transform: uppercase;
          letter-spacing: 0px;
          font-size: 16px;
          margin-top: 0px;
        }

        .btn-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(255, 177, 0, 0.3); }
        .btn-submit:disabled { opacity: 0.5; cursor: not-allowed; }

        .ai-result-box { color: #000; }
        .ai-title { font-weight: 800; color: var(--cray-gold); margin-bottom: 12px; font-size: 18px; }
        .ai-summary { font-style: italic; margin-bottom: 20px; line-height: 1.5; color: #374151; }
        .ai-list { list-style: none; padding: 0; margin-bottom: 24px; }
        .ai-list li { margin-bottom: 10px; display: flex; align-items: flex-start; gap: 10px; font-size: 14px; font-weight: 500; }
        .ai-list li::before { content: '→'; color: var(--cray-gold); font-weight: 900; }
        .ai-next-step { background: rgba(255, 177, 0, 0.1); border-left: 4px solid var(--cray-gold); padding: 16px; border-radius: 4px; font-size: 14px; font-weight: 700; margin-bottom: 30px; }

        .consultancy-scroll-indicator {
          margin-top: 80px;
          margin-bottom: 0px;
          animation: consultancy-bounce 2s infinite;
          display: flex;
          justify-content: center;
          text-decoration: none;
          z-index: 10;
          position: relative;
        }

        .consultancy-scroll-indicator svg {
          color: var(--cray-gold);
          filter: drop-shadow(0 0 15px rgba(255, 177, 0, 0.8));
          opacity: 1 !important;
        }

        @keyframes consultancy-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-12px); }
          60% { transform: translateY(-6px); }
        }
      `}</style>

      <img src="/gorsel/c2.jpg" alt="Consultancy Background" className="consultancy-bg" />
      <div className="consultancy-overlay"></div>
      <div className="consultancy-gradient"></div>

      <div className="consultancy-container">
        <div className="consultancy-grid">
          <div>
            <h1 className="consultancy-title">End-to-End Consulting</h1>
            <h2 className="consultancy-subtitle">Professional Services</h2>
            <h2 className="consultancy-subtitle">Marketing & 360° Solutions</h2>

            <p className="consultancy-desc">
              We provide all the technical, strategic, and operational processes required to launch, grow, and sustain a crypto project under one roof. Or we take action based on your existing project’s needs and grow together.
            </p>
            <p className="consultancy-subdesc">
              Are you planning a new project? Or do you want to identify and improve your existing project’s needs?
            </p>

            <div className="consultancy-buttons">
              <a href="#services" className="btn-main">
                I Have a New Crypto Project
              </a>
              <a href="#services/end-to-end-crypto-project-consulting" className="btn-outline">
                I Want to Improve My Existing Project
              </a>
            </div>

            <div className="consultancy-features">
              <div className="feature-item">
                <span className="feature-check">✓</span> NDA & Confidentiality
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span> Web3-Focused Expertise
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span> Global Standards
              </div>
            </div>
          </div>

          <div className="form-card-white">
            <h3 className="form-title">Free Pre-Evaluation</h3>
            
            {aiResult ? (
              <div className="ai-result-box">
                <p className="ai-title">Analysis Result</p>
                <p className="ai-summary">"{aiResult.summary}"</p>
                <ul className="ai-list">
                  {aiResult.opportunities.map((o: string, i: number) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
                <div className="ai-next-step">
                  {aiResult.nextStep}
                </div>
                <button 
                  onClick={() => setAiResult(null)}
                  className="w-full border border-gray-300 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors uppercase text-xs tracking-widest"
                >
                  Analyze Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="form-label">Project Status</label>
                  <select 
                    className="form-field"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  >
                    <option value="">Select</option>
                    <option value="yeni">New Project</option>
                    <option value="mevcut">Existing Project</option>
                    <option value="yatirim">Investment Stage</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="form-label">Brief Goal Description</label>
                  <textarea 
                    className="form-field"
                    rows={4}
                    placeholder="What would you like to achieve?"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    required
                    style={{ resize: 'none' }}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-submit"
                >
                  {loading ? 'OPENING TELEGRAM...' : 'SEND'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <a href="#section-why" className="consultancy-scroll-indicator">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5" />
          <path d="M7 6l5 5 5-5" />
        </svg>
      </a>
    </section>
  );
};

export default ConsultancySection;