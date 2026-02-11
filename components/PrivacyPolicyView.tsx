import React from 'react';

const PrivacyPolicyView: React.FC = () => {
  return (
    <div className="legal-page bg-black text-white min-h-screen pt-32 pb-20">
      <style>{`
        .legal-container { max-width: 900px; margin: 0 auto; padding: 0 32px; }
        .legal-section { margin-bottom: 40px; }
        .gold-line { width: 60px; height: 3px; background: var(--cray-gold); margin-bottom: 20px; }
        .legal-list { list-style: none; padding: 0; }
        .legal-list li { margin-bottom: 12px; display: flex; gap: 10px; }
        .legal-list li::before { content: "•"; color: var(--cray-gold); font-weight: bold; }
      `}</style>
      
      <div className="legal-container">
        <h1 className="h1-style mb-4">Privacy Policy</h1>
        <div className="gold-line"></div>
        <p className="p-style text-zinc-400 mb-12 italic">Last updated: May 20, 2024</p>

        <div className="legal-section">
          <h2 className="h3-style mb-4 text-cray-gold uppercase tracking-wider">1. Introduction</h2>
          <p className="p-style">Welcome to CrayUp. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
        </div>

        <div className="legal-section">
          <h2 className="h3-style mb-4 text-cray-gold uppercase tracking-wider">2. The Data We Collect</h2>
          <p className="p-style">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="legal-list p-style">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers, Telegram usernames.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, and browser plug-in types.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2 className="h3-style mb-4 text-cray-gold uppercase tracking-wider">3. How We Use Your Data</h2>
          <p className="p-style">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="legal-list p-style">
            <li>To register you as a new client or contact.</li>
            <li>To process and deliver our specialized Web3 services.</li>
            <li>To manage our relationship with you.</li>
            <li>To improve our website, services, and community engagement.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2 className="h3-style mb-4 text-cray-gold uppercase tracking-wider">4. Data Security</h2>
          <p className="p-style">We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
        </div>

        <div className="legal-section">
          <h2 className="h3-style mb-4 text-cray-gold uppercase tracking-wider">5. Contact Information</h2>
          <p className="p-style">If you have any questions about this privacy policy or our privacy practices, please contact us at: <span className="text-cray-gold">info@crayup.com</span></p>
        </div>

        <div className="mt-20 pt-10 border-t border-zinc-800 text-center">
          <button onClick={() => window.location.hash = ''} className="cta-button !px-12">Back to Homepage</button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyView;