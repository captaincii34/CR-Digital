import React from 'react';

const TermsOfServiceView: React.FC = () => {
  return (
    <div className="legal-page bg-black text-white min-h-screen pt-32 pb-20">
      <style>{`
        .legal-container { max-width: 900px; margin: 0 auto; padding: 0 32px; }
        .legal-section { margin-bottom: 40px; }
        .gold-line { width: 60px; height: 3px; background: var(--cray-gold); margin-bottom: 20px; }
        .legal-list { list-style: decimal; padding-left: 20px; }
        .legal-list li { margin-bottom: 12px; color: #ccc; }
      `}</style>
      
      <div className="legal-container">
        <h1 className="h1-style mb-4">Terms of Service</h1>
        <div className="gold-line"></div>
        <p className="p-style text-zinc-400 mb-12 italic">Last updated: May 20, 2024</p>

        <div className="legal-section">
          <h2 className="h3-style mb-4 text-cray-gold uppercase tracking-wider">1. Agreement to Terms</h2>
          <p className="p-style">By accessing our website at <span className="text-cray-gold">crayup.com</span> and using our Web3 consultancy services, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
        </div>

        <div className="legal-section">
          <h2 className="h3-style mb-4 text-cray-gold uppercase tracking-wider">2. Intellectual Property Rights</h2>
          <p className="p-style">Unless otherwise stated, CrayUp and/or its licensors own the intellectual property rights for all material on CrayUp. All intellectual property rights are reserved. You may access this from CrayUp for your own personal use subjected to restrictions set in these terms and conditions.</p>
        </div>

        <div className="legal-section">
          <h2 className="h3-style mb-4 text-cray-gold uppercase tracking-wider">3. Service Limitations</h2>
          <p className="p-style">Our services involve complex blockchain technologies. While we strive for excellence:</p>
          <ul className="legal-list p-style">
            <li>We do not guarantee specific financial returns on token launches.</li>
            <li>Clients are responsible for the legal compliance of their own tokens in their respective jurisdictions.</li>
            <li>Market conditions are volatile and beyond our direct control.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2 className="h3-style mb-4 text-cray-gold uppercase tracking-wider">4. Disclaimer</h2>
          <p className="p-style">The materials on CrayUp's website are provided on an 'as is' basis. CrayUp makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </div>

        <div className="legal-section">
          <h2 className="h3-style mb-4 text-cray-gold uppercase tracking-wider">5. Limitations of Liability</h2>
          <p className="p-style">In no event shall CrayUp or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CrayUp's website.</p>
        </div>

        <div className="mt-20 pt-10 border-t border-zinc-800 text-center">
          <button onClick={() => window.location.hash = ''} className="cta-button !px-12">Back to Homepage</button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceView;