import React from 'react';

const reasons = [
  {
    icon: <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>,
    title: 'Web3 & Crypto-Focused Expertise',
    desc: 'An experienced team focused exclusively on crypto and Web3 projects'
  },
  {
    icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>,
    title: "End-to-End Project Approach",
    desc: 'We stand by you at every step from ideation to launch'
  },
  {
    icon: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
    title: 'Single-Point Management',
    desc: 'An integrated team structure coordinating all processes'
  },
  {
    icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
    title: 'NDA & Confidentiality Priority',
    desc: 'Your project’s security is our top priority'
  },
  {
    icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    title: 'Data-Driven Decision Making',
    desc: 'Every decision we make is backed by analytical data'
  },
  {
    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    title: 'Processes at Global Standards',
    desc: 'We deliver services aligned with international quality standards'
  }
];

const WhyUsSection: React.FC = () => {
  return (
    <section id="section-why" className="why-us-section">
      <style>{`
        .why-us-section {
          position: relative;
          padding: 60px 0;
          background-color: #000;
          color: #fff;
          min-height: 600px;
          overflow: hidden;
        }

        .why-us-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%; object-fit: cover; z-index: 0; opacity: 0.4; }
        .why-us-overlay { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.75); z-index: 1; }
        .why-us-gradient { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent 40%, transparent 60%, #000); z-index: 2; }
        .why-us-container { position: relative; z-index: 10; max-width: 1280px; margin: 0 auto; padding: 0 32px; }
        .why-us-header { text-align: center; margin-bottom: 70px; }
        .why-us-title { margin-bottom: 16px; }
        .reasons-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
        @media (min-width: 768px) { .reasons-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .reasons-grid { grid-template-columns: repeat(3, 1fr); } }
        .reason-card { padding: 40px 32px; border-radius: 20px; text-align: center; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1); background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); }
        .reason-card:hover { background: rgba(255, 177, 0, 0.06); border-color: rgba(255, 177, 0, 0.3); transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4); }
        .reason-icon-box { width: 54px; height: 54px; background-color: var(--cray-gold); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; transition: 0.3s; box-shadow: 0 10px 20px rgba(255, 177, 0, 0.2); }
        .reason-card:hover .reason-icon-box { transform: rotate(10deg) scale(1.1); }
        .reason-title { margin-bottom: 16px; line-height: 1.3; }
        .reason-desc { color: #d1d5db; line-height: 1.6; }
        .why-us-footer { text-align: center; margin-top: 60px; }
        .btn-more {
          background: var(--cray-gold);
          color: #000;
          padding: 18px 36px;
          border-radius: 12px;
          font-weight: 700 !important;
          display: inline-block;
          text-decoration: none;
          transition: 0.3s;
          text-transform: capitalize;
          letter-spacing: 0px;
          font-size: 14px !important;
          box-shadow: 0 8px 25px rgba(255, 177, 0, 0.3);
        }
        .btn-more:hover { 
          transform: translateY(-3px); 
          box-shadow: 0 12px 35px rgba(255, 177, 0, 0.5);
        }
      `}</style>

      <img src="/gorsel/fh.jpg" alt="Why Us Background" className="why-us-bg" />
      <div className="why-us-overlay"></div>
      <div className="why-us-gradient"></div>

      <div className="why-us-container">
        <div className="why-us-header">
          <h2 className="why-us-title">Why Should You Work With Us?</h2>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, idx) => (
            <div key={idx} className="reason-card">
              <div className="reason-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {reason.icon}
                </svg>
              </div>
              <h4 className="reason-title">{reason.title}</h4>
              <p className="reason-desc">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="why-us-footer">
          <a href="#about-us" className="btn-more">
            Get More Information
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;