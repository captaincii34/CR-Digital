import React, { useState } from 'react';

type PricingStep = 'initial' | 'services' | 'company' | 'description' | 'goals' | 'budget' | 'email' | 'permission' | 'success';

const servicesOptions = [
  "End-to-End Crypto Project Consulting",
  "Token & Blockchain Development",
  "Blockchain & Software Development",
  "Token Launch & Listing Services",
  "Crypto & Web3 Marketing Services",
  "Social Media & Community Management",
  "Content Production (Video & Design)",
  "Market Making & Liquidity Solutions",
  "Investment Consulting & Fundraising",
  "Partnerships & Business Development"
];

const goalOptions = [
  "Launch something new",
  "Change agencies",
  "Add to my current marketing plan",
  "Explore new methods of growth",
  "Get a comprehensive, \"hand-holding\" marketing partner",
  "Increase ROI",
  "Other"
];

const budgetOptions = [
  "<$5k",
  "$5k-10k",
  "$10k-20k",
  "$20k-50k",
  "$50k-100k",
  "$100k-250k",
  "More than $250k"
];

const PricingView: React.FC = () => {
  const [step, setStep] = useState<PricingStep>('initial');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [otherGoal, setOtherGoal] = useState('');
  const [budget, setBudget] = useState('');
  const [email, setEmail] = useState('');
  const [permission, setPermission] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleNext = () => {
    if (step === 'initial') setStep('services');
    else if (step === 'services') setStep('company');
    else if (step === 'company') setStep('description');
    else if (step === 'description') setStep('goals');
    else if (step === 'goals') setStep('budget');
    else if (step === 'budget') setStep('email');
    else if (step === 'email') setStep('permission');
  };

  const handleBack = () => {
    if (step === 'services') setStep('initial');
    else if (step === 'company') setStep('services');
    else if (step === 'description') setStep('company');
    else if (step === 'goals') setStep('description');
    else if (step === 'budget') setStep('goals');
    else if (step === 'email') setStep('budget');
    else if (step === 'permission') setStep('email');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating email send to info@craydigital.com
    const finalData = {
      services: selectedServices,
      company,
      description,
      goal: goal === 'Other' ? otherGoal : goal,
      budget,
      email,
      permission
    };
    
    console.log("Form submitted to info@craydigital.com:", finalData);

    setTimeout(() => {
      setLoading(false);
      setStep('success');
    }, 1500);
  };

  const renderContent = () => {
    switch (step) {
      case 'initial':
        return (
          <div className="text-center animate-in fade-in duration-700">
            <h1 className="h1-style mb-6 text-5xl !font-black">Get a Customized Quote in Under a Minute</h1>
            <p className="p-style text-zinc-400 mb-10 max-w-2xl mx-auto text-xl">Predict your marketing budget & get a plan based on the data of 100+ successful campaigns.</p>
            <button onClick={() => setStep('services')} className="cta-button !px-12 !py-6 text-base font-black">Start Free Marketing Plan</button>
          </div>
        );

      case 'services':
        return (
          <div className="w-full max-w-4xl animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="h2-style mb-2 text-3xl">Which services are you interested in?*</h2>
            <p className="p-style text-zinc-500 mb-8 font-bold">Choose as many as you like</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {servicesOptions.map(s => (
                <div 
                  key={s} 
                  onClick={() => toggleService(s)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                    selectedServices.includes(s) 
                    ? 'border-cray-gold bg-cray-gold/10 text-white' 
                    : 'border-white/10 bg-white/5 text-zinc-400 hover:border-white/20'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${selectedServices.includes(s) ? 'bg-cray-gold border-cray-gold' : 'border-zinc-700'}`}>
                    {selectedServices.includes(s) && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}
                  </div>
                  <span className="font-bold text-sm">{s}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <button onClick={handleBack} className="btn-outline !py-4 !px-10">Back</button>
              <button 
                onClick={handleNext} 
                disabled={selectedServices.length === 0} 
                className="cta-button !py-4 !px-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        );

      case 'company':
        return (
          <div className="w-full max-w-2xl animate-in slide-in-from-right-4 duration-500">
            <h2 className="h2-style mb-8 text-3xl">What is your company name or website?*</h2>
            <input 
              type="text" 
              className="w-full bg-zinc-900 border-b-2 border-zinc-800 focus:border-cray-gold outline-none p-4 text-2xl font-bold transition-colors mb-12"
              placeholder="Your answer..."
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              autoFocus
            />
            <div className="flex justify-between">
              <button onClick={handleBack} className="btn-outline !py-4 !px-10">Back</button>
              <button onClick={handleNext} disabled={!company} className="cta-button !py-4 !px-10 disabled:opacity-50">Next</button>
            </div>
          </div>
        );

      case 'description':
        return (
          <div className="w-full max-w-2xl animate-in slide-in-from-right-4 duration-500">
            <h2 className="h2-style mb-8 text-3xl">Almost there! Could you tell us a bit about your company, please?*</h2>
            <textarea 
              className="w-full bg-zinc-900 border-2 border-zinc-800 focus:border-cray-gold outline-none p-6 text-lg font-medium rounded-2xl transition-colors mb-12 h-48 resize-none"
              placeholder="Your answer..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              autoFocus
            />
            <div className="flex justify-between">
              <button onClick={handleBack} className="btn-outline !py-4 !px-10">Back</button>
              <button onClick={handleNext} disabled={!description} className="cta-button !py-4 !px-10 disabled:opacity-50">Next</button>
            </div>
          </div>
        );

      case 'goals':
        return (
          <div className="w-full max-w-2xl animate-in slide-in-from-right-4 duration-500">
            <h2 className="h2-style mb-8 text-3xl">Thanks. Now, which of these best describes your goals?*</h2>
            <div className="space-y-4 mb-10">
              {goalOptions.map(g => (
                <div 
                  key={g} 
                  onClick={() => setGoal(g)}
                  className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                    goal === g ? 'border-cray-gold bg-cray-gold/5' : 'border-zinc-800 bg-zinc-900 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${goal === g ? 'border-cray-gold' : 'border-zinc-600'}`}>
                      {goal === g && <div className="w-2.5 h-2.5 bg-cray-gold rounded-full"></div>}
                    </div>
                    <span className="font-bold text-base">{g}</span>
                  </div>
                </div>
              ))}
            </div>
            {goal === 'Other' && (
              <textarea 
                className="w-full bg-zinc-900 border-2 border-zinc-800 focus:border-cray-gold outline-none p-5 text-lg rounded-xl mb-10 h-32 animate-in zoom-in-95 duration-300"
                placeholder="Please specify your goal..."
                value={otherGoal}
                onChange={(e) => setOtherGoal(e.target.value)}
              />
            )}
            <div className="flex justify-between">
              <button onClick={handleBack} className="btn-outline !py-4 !px-10">Back</button>
              <button 
                onClick={handleNext} 
                disabled={!goal || (goal === 'Other' && !otherGoal)} 
                className="cta-button !py-4 !px-10 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        );

      case 'budget':
        return (
          <div className="w-full max-w-2xl animate-in slide-in-from-right-4 duration-500">
            <h2 className="h2-style mb-8 text-3xl">How much do you expect to spend with an agency on a monthly basis?*</h2>
            <div className="grid grid-cols-1 gap-4 mb-12">
              {budgetOptions.map(b => (
                <div 
                  key={b} 
                  onClick={() => setBudget(b)}
                  className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                    budget === b ? 'border-cray-gold bg-cray-gold/5' : 'border-zinc-800 bg-zinc-900 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${budget === b ? 'border-cray-gold' : 'border-zinc-600'}`}>
                      {budget === b && <div className="w-2.5 h-2.5 bg-cray-gold rounded-full"></div>}
                    </div>
                    <span className="font-bold text-base">{b}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <button onClick={handleBack} className="btn-outline !py-4 !px-10">Back</button>
              <button onClick={handleNext} disabled={!budget} className="cta-button !py-4 !px-10 disabled:opacity-50">Next</button>
            </div>
          </div>
        );

      case 'email':
        return (
          <div className="w-full max-w-2xl animate-in slide-in-from-right-4 duration-500">
            <h2 className="h2-style mb-8 text-3xl">Where can we send your personalized plan?*</h2>
            <input 
              type="email" 
              className="w-full bg-zinc-900 border-b-2 border-zinc-800 focus:border-cray-gold outline-none p-4 text-2xl font-bold transition-colors mb-12"
              placeholder="email@address.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <div className="flex justify-between">
              <button onClick={handleBack} className="btn-outline !py-4 !px-10">Back</button>
              <button onClick={handleNext} disabled={!email || !email.includes('@')} className="cta-button !py-4 !px-10 disabled:opacity-50">Next</button>
            </div>
          </div>
        );

      case 'permission':
        return (
          <div className="w-full max-w-2xl animate-in slide-in-from-right-4 duration-500">
            <h2 className="h2-style mb-2 text-3xl">Almost there! Do we have your permission to contact you by email and occasionally send you content we think you'll love? *</h2>
            <p className="p-style text-zinc-500 mb-8 font-bold">You must accept to receive your quote</p>
            
            <div className="space-y-4 mb-10">
              <div 
                onClick={() => setPermission(true)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                  permission === true ? 'border-cray-gold bg-cray-gold/5' : 'border-zinc-800 bg-zinc-900 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${permission === true ? 'border-cray-gold' : 'border-zinc-600'}`}>
                    {permission === true && <div className="w-2.5 h-2.5 bg-cray-gold rounded-full"></div>}
                  </div>
                  <span className="font-bold text-lg">I accept</span>
                </div>
              </div>
              <div 
                onClick={() => setPermission(false)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                  permission === false ? 'border-[#ef4444] bg-red-500/5' : 'border-zinc-800 bg-zinc-900 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${permission === false ? 'border-[#ef4444]' : 'border-zinc-600'}`}>
                    {permission === false && <div className="w-2.5 h-2.5 bg-[#ef4444] rounded-full"></div>}
                  </div>
                  <span className="font-bold text-lg">I don't accept</span>
                </div>
              </div>
            </div>

            {permission === false && (
              <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl text-red-500 font-bold mb-8 animate-in shake duration-500">
                Please agree to the terms & conditions
              </div>
            )}

            <div className="flex justify-between">
              <button onClick={handleBack} className="btn-outline !py-4 !px-10">Back</button>
              {permission === true && (
                <button 
                  onClick={handleSubmit} 
                  disabled={loading}
                  className="cta-button !py-4 !px-10 flex items-center gap-3"
                >
                  {loading ? 'SENDING...' : 'SUBMIT'}
                  {!loading && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7-7"/></svg>}
                </button>
              )}
            </div>
          </div>
        );

      case 'success':
        return (
          <div className="text-center animate-in zoom-in duration-500 max-w-3xl">
            <div className="w-24 h-24 bg-cray-gold rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(255,177,0,0.4)]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h1 className="h1-style text-6xl mb-6">Great!</h1>
            <p className="p-style text-2xl mb-4 font-bold text-white">We're very excited to send you your personalized working document.</p>
            <p className="p-style text-zinc-400 text-lg mb-12">If you wish, you can choose a time slot and create a calendar. We're ready to meet with you.</p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="#booking-section" className="cta-button !px-12 !py-5 text-base font-black">Grab a Time</a>
              <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} className="btn-outline !px-12 !py-5 text-base font-black">Homepage</a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pricing-page">
      <style>{`
        .pricing-page {
          background-color: #000;
          color: #fff;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 40px;
          position: relative;
          overflow: hidden;
        }

        .pricing-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(255, 177, 0, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .progress-bar-container {
          position: fixed;
          top: 90px;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.05);
          z-index: 1000;
        }

        .progress-bar-fill {
          height: 100%;
          background: var(--cray-gold);
          transition: width 0.4s ease;
          box-shadow: 0 0 10px var(--cray-gold);
        }

        .btn-outline {
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 700 !important;
          transition: 0.3s;
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>

      <div className="pricing-bg-gradient"></div>

      {step !== 'initial' && step !== 'success' && (
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ 
              width: `${
                step === 'services' ? 14 : 
                step === 'company' ? 28 : 
                step === 'description' ? 42 : 
                step === 'goals' ? 56 : 
                step === 'budget' ? 70 : 
                step === 'email' ? 84 : 
                step === 'permission' ? 100 : 0
              }%` 
            }}
          ></div>
        </div>
      )}

      {renderContent()}
    </div>
  );
};

export default PricingView;