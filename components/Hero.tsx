import React, { useState } from 'react';
import { ProcessStep } from '../types';

interface HeroStep extends ProcessStep {
  desc: string;
}

const steps: HeroStep[] = [
  { number: '01', title: 'Idea & Concept\nAnalysis', desc: "Comprehensive review of your project's unique value proposition, market viability, and technical feasibility.", pos: { left: '4%', top: '57%' } },
  { number: '02', title: 'Strategy &\nRoadmap', desc: "Designing a precise strategic path from early development to global launch milestones and long-term targets.", pos: { left: '16.5%', top: '29%' } },
  { number: '03', title: 'Tokenomics &\nTechnical Infrastructure', desc: "Engineering sustainable economic models, supply mechanisms, and robust, secure blockchain foundations.", pos: { left: '29%', top: '43%' } },
  { number: '04', title: 'Software & Product\nDevelopment', desc: "Full-stack engineering of dApps, platforms, and custom Web3 solutions built to institutional standards.", pos: { left: '41.5%', top: '54%' } },
  { number: '05', title: 'Branding &\nMarketing', desc: "Crafting a premium visual identity and ROI-driven marketing campaigns that resonate with global audiences.", pos: { left: '54%', top: '43%' } },
  { number: '06', title: 'Community &\nGrowth', desc: "Building and moderating a loyal, active, and viral community base through 24/7 engagement and growth hacking.", pos: { left: '66.5%', top: '29%' } },
  { number: '07', title: 'Launch &\nListing', desc: "Strategic execution of IDO/IEOs and comprehensive management of Tier-1 exchange listing processes.", pos: { left: '79%', top: '43%' } },
  { number: '08', title: 'Market Making\n& Liquidity', desc: "Algorithmic liquidity management to ensure order book health, price stability, and a reliable trading chart.", pos: { left: '94.5%', top: '41%' } },
];

const Hero: React.FC = () => {
  const [activeStep, setActiveStep] = useState<HeroStep | null>(null);

  const distPath = "/dist/gorsel/c1.jpg";
  const publicPath = "/gorsel/c1.jpg";
  const fallbackBg = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop";

  return (
    <section id="hero-container" className="hero-container">
      <style>{`
        .hero-container {
          position: relative;
          padding-top: 160px;
          padding-bottom: 25px;
          overflow: hidden;
          background-color: #000;
          color: #fff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0.5;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, #000, transparent, #000);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1280px;
          padding: 32px 32px;
        }

        .hero-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .hero-title {
          line-height: 1.2;
          margin-bottom: 24px;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,1));
        }

        .hero-description {
          line-height: 1.6;
          margin-bottom: 20px;
          color: #e5e7eb;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }

        .hero-highlight {
          color: var(--cray-gold);
          margin-top: 10px;
          filter: drop-shadow(0 2px 10px rgba(255,177,0,0.3));
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 32px !important; }
        }

        .roadmap-visual {
          position: relative;
          height: 20rem;
          margin: 60px auto;
          max-width: 75rem;
          display: none;
        }

        @media (min-width: 1024px) {
          .roadmap-visual { display: block; }
        }

        .roadmap-path {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        .step-item {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: translate(-50%, -50%);
        }

        .step-title {
          color: var(--cray-gold);
          font-size: 12px !important;
          font-weight: 600 !important;
          white-space: pre-line;
          text-align: center;
          margin-bottom: 12px;
          line-height: 1.3;
          text-transform: capitalize;
          letter-spacing: 0px;
        }

        .step-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid var(--cray-gold);
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800 !important;
          color: #000;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 15px rgba(255, 177, 0, 0.2);
          position: relative;
        }

        .step-circle:hover {
          transform: scale(1.15);
          box-shadow: 0 0 30px rgba(255, 177, 0, 0.6);
          background-color: var(--cray-gold);
        }

        .hero-cta-container {
          text-align: center;
          margin-top: 60px;
          margin-bottom: 40px;
        }

        .hero-cta-button {
          background-color: var(--cray-gold);
          color: #000;
          padding: 20px 20px;
          border-radius: 12px;
          font-weight: 700 !important;
          display: inline-block;
          transition: all 0.3s;
          box-shadow: 0 8px 30px rgba(255, 177, 0, 0.4);
          text-decoration: none;
          text-transform: capitalize;
          letter-spacing: 0px;
          font-size: 14px !important;
        }

        .hero-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(255, 177, 0, 0.6);
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          animation: hero-bounce 2s infinite;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          text-decoration: none;
          transition: 0.3s;
        }

        .hero-scroll-indicator svg {
          color: var(--cray-gold);
          filter: drop-shadow(0 0 12px rgba(255, 177, 0, 0.6));
          opacity: 1;
        }

        @keyframes hero-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
          40% { transform: translate(-50%, -12px); }
          60% { transform: translate(-50%, -6px); }
        }

        /* Modal / Description Box */
        .step-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .step-modal-content {
          background: #111;
          border: 1px solid var(--cray-gold);
          border-radius: 32px;
          padding: 40px;
          max-width: 500px;
          width: 100%;
          position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(255, 177, 0, 0.1);
          animation: modalAppear 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes modalAppear {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: #555;
          cursor: pointer;
          transition: 0.2s;
        }
        .modal-close:hover { color: var(--cray-gold); }

        .modal-step-num {
          font-size: 12px !important;
          font-weight: 800 !important;
          color: var(--cray-gold);
          text-transform: uppercase;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 10px;
        }

        .modal-step-title {
          font-size: 24px !important;
          font-weight: 800 !important;
          color: #fff;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .modal-step-desc {
          color: #9ca3af;
          font-size: 16px !important;
          line-height: 1.6;
        }
      `}</style>

      <img 
        src={distPath}
        alt="CRAY Digital Background" 
        className="hero-bg-image"
        loading="eager"
        onError={(e) => {
          const img = e.currentTarget;
          if (img.src.includes("/dist/")) {
            img.src = publicPath;
          } else if (!img.src.includes("unsplash")) {
            img.src = fallbackBg;
          }
        }}
      />
      
      <div className="hero-overlay"></div>
      <div className="hero-gradient"></div>

      <div className="hero-content">
        <div className="hero-header">
          <h1 className="hero-title">
            Get Professional Service to Reach Your Dreams
          </h1>
          <p className="hero-description">
            We plan, implement, and manage all the processes you need from the idea stage to technical infrastructure, marketing techniques to listing processes, and investment processes to liquidity management, all within confidentiality.
          </p>
          <h3 className="hero-highlight">
            This approach is not a classic "agency service," but an end-to-end project partnership. The entire process is conducted in confidentiality.
          </h3>
        </div>

        <div className="roadmap-visual">
          <svg className="roadmap-path" viewBox="0 0 1200 320" preserveAspectRatio="none">
            <path 
              d="M 50 160 Q 200 80, 350 160 T 650 160 T 950 160 Q 1050 80, 1150 160" 
              stroke="#ffb100" 
              strokeWidth="3" 
              fill="none" 
              strokeDasharray="10 8" 
              style={{ opacity: 0.3 }}
            />
          </svg>

          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="step-item"
              style={{ left: step.pos.left, top: step.pos.top }}
            >
              <div className="step-title">
                {step.title}
              </div>
              <div 
                className="step-circle"
                onClick={() => setActiveStep(step)}
              >
                {step.number}
              </div>
            </div>
          ))}
        </div>

        <div className="hero-cta-container">
          <a href="#services" className="hero-cta-button">
            Define Your Needs, Get Closer to Your Dreams
          </a>
        </div>
      </div>

      <a href="#section1" className="hero-scroll-indicator">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5" />
          <path d="M7 6l5 5 5-5" />
        </svg>
      </a>

      {/* Modal / Description Box Overlay */}
      {activeStep && (
        <div className="step-modal-overlay" onClick={() => setActiveStep(null)}>
          <div className="step-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveStep(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <span className="modal-step-num">Step {activeStep.number}</span>
            <h2 className="modal-step-title">{activeStep.title.replace('\n', ' ')}</h2>
            <p className="modal-step-desc">{activeStep.desc}</p>
            <div style={{ marginTop: '30px' }}>
              <button 
                onClick={() => { window.location.hash = 'services'; setActiveStep(null); }}
                className="cta-button" 
                style={{ padding: '12px 25px', fontSize: '12px !important' }}
              >
                Explore This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;