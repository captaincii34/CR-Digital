import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const ConsultancySection: React.FC = () => {
  const [status, setStatus] = useState('');
  const [goal, setGoal] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await evaluateProject(status, goal);
    setAiResult(result);
    setLoading(false);
  };

  return (
    <section id="section1" className="consultancy-section">
      <style>{`
        .consultancy-section {
          position: relative;
          padding: 80px 0 60px;
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
          background: linear-gradient(to bottom, #000, transparent, #000);
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
          box-shadow: 0 4px 15px rgba(255, 177, 0, 0.4);
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
          font-size: 12px;
          font-weight: 700;
          color: #4b5563;
          margin-bottom: 6px;
          text-transform: capitalize;
          letter-spacing: 0px;
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
          margin-top: 60px;
          margin-bottom: 20px;
          animation: consultancy-bounce 2s infinite;
          display: flex;
          justify-content: center;
          text-decoration: none;
          z-index: 100;
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
            <h1 className="consultancy-title">A'dan Z'ye Danışmanlık</h1>
            <h2 className="consultancy-subtitle">Profesyonel Hizmet</h2>
            <h2 className="consultancy-subtitle">Marketing ve 360 Çözümler</h2>

            <p className="consultancy-desc">
              Bir kripto projesini hayata geçirmek, büyütmek ve sürdürülebilir hale getirmek için ihtiyacınız olan tüm teknik, stratejik ve operasyonel süreçleri tek çatı altında sunuyoruz. Ya da mevcut olan projenin ihtiyaçlarına göre aksiyon alarak beraber büyüme sağlıyoruz.
            </p>
            <p className="consultancy-subdesc">
              Yeni bir proje yapmayı mı düşünüyorsunuz? Yoksa mevcut projenizi ihtiyaçlarınızı belirleyip geliştirmeyi mi amaçlıyorsunuz?
            </p>

            <div className="consultancy-buttons">
              <a href="#" className="btn-main">
                Yeni Bir Crypto Projem Var
              </a>
              <a href="#" className="btn-outline">
                Mevcut Projemi Geliştirmek İstiyorum
              </a>
            </div>

            <div className="consultancy-features">
              <div className="feature-item">
                <span className="feature-check">✓</span> NDA & Gizlilik
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span> Web3 Odaklı Uzmanlık
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span> Global Standartlar
              </div>
            </div>
          </div>

          <div className="form-card-white">
            <h3 className="form-title">Ücretsiz Ön Değerlendirme</h3>
            
            {aiResult ? (
              <div className="ai-result-box">
                <p className="ai-title">Analiz Sonucu</p>
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
                  Yeniden Analiz Et
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="form-label">Proje Durumu</label>
                  <select 
                    className="form-field"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  >
                    <option value="">Seçiniz</option>
                    <option value="yeni">Yeni proje</option>
                    <option value="mevcut">Mevcut proje</option>
                    <option value="yatirim">Yatırım aşaması</option>
                  </select>
                </div>

                <div className="mb-2">
                  <label className="form-label">Kısa Hedef Açıklaması</label>
                  <textarea 
                    className="form-field"
                    rows={3}
                    placeholder="Ne yapmak istiyorsunuz?"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    required
                    style={{ resize: 'none' }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">E-posta / Telegram</label>
                  <input 
                    type="text"
                    className="form-field"
                    placeholder="İletişim bilginiz"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-submit"
                >
                  {loading ? 'ANALİZ EDİLİYOR...' : 'GÖNDER'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <a href="#section-why-us" className="consultancy-scroll-indicator">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5" />
          <path d="M7 6l5 5 5-5" />
        </svg>
      </a>
    </section>
  );
};

export default ConsultancySection;