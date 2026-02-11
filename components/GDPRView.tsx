import React from 'react';

const GDPRView: React.FC = () => {
  return (
    <div className="legal-page bg-black text-white min-h-screen pt-32 pb-20">
      <style>{`
        .legal-container { max-width: 900px; margin: 0 auto; padding: 0 32px; }
        .legal-section { margin-bottom: 40px; }
        .gold-line { width: 60px; height: 3px; background: var(--cray-gold); margin-bottom: 20px; }
        .rights-grid { display: grid; grid-template-columns: 1fr; gap: 20px; margin-top: 30px; }
        @media (min-width: 768px) { .rights-grid { grid-template-columns: 1fr 1fr; } }
        .right-card { background: rgba(255,255,255,0.03); border-left: 4px solid var(--cray-gold); padding: 25px; border-radius: 0 16px 16px 0; }
        .right-card h4 { color: var(--cray-gold); margin-bottom: 10px; font-weight: bold; }
      `}</style>
      
      <div className="legal-container">
        <h1 className="h1-style mb-4">GDPR Compliance</h1>
        <div className="gold-line"></div>
        <p className="p-style text-zinc-400 mb-12 italic">General Data Protection Regulation (GDPR) Notice</p>

        <div className="legal-section">
          <h2 className="h3-style mb-4 uppercase tracking-wider">Overview</h2>
          <p className="p-style">CrayUp is committed to ensuring the security and protection of the personal information that we process, and to provide a compliant and consistent approach to data protection. We have always had a robust and effective data protection program in place which complies with existing law and abides by the data protection principles.</p>
        </div>

        <div className="legal-section">
          <h2 className="h3-style mb-4 uppercase tracking-wider">Your Rights Under GDPR</h2>
          <p className="p-style">If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR.</p>
          
          <div className="rights-grid">
            <div className="right-card">
              <h4>Right to Access</h4>
              <p className="text-sm text-zinc-400">The right to be provided with a copy of your personal data.</p>
            </div>
            <div className="right-card">
              <h4>Right to Rectification</h4>
              <p className="text-sm text-zinc-400">The right to require us to correct any mistakes in your personal data.</p>
            </div>
            <div className="right-card">
              <h4>Right to be Forgotten</h4>
              <p className="text-sm text-zinc-400">The right to require us to delete your personal data in certain situations.</p>
            </div>
            <div className="right-card">
              <h4>Right to Object</h4>
              <p className="text-sm text-zinc-400">The right to object to processing of your personal data for direct marketing.</p>
            </div>
          </div>
        </div>

        <div className="legal-section">
          <h2 className="h3-style mb-4 uppercase tracking-wider">Data Processing</h2>
          <p className="p-style">We process your information to provide and improve our specialized blockchain services. Our legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect it.</p>
        </div>

        <div className="legal-section">
          <h2 className="h3-style mb-4 uppercase tracking-wider">How to Exercise Your Rights</h2>
          <p className="p-style">To exercise any of these rights, please contact our Data Protection Officer at <span className="text-cray-gold">info@crayup.com</span>. We will respond to your request within 30 days.</p>
        </div>

        <div className="mt-20 pt-10 border-t border-zinc-800 text-center">
          <button onClick={() => window.location.hash = ''} className="cta-button !px-12">Back to Homepage</button>
        </div>
      </div>
    </div>
  );
};

export default GDPRView;