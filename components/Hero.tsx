
import React from 'react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  { number: '01', title: 'Fikir & Konsept\nAnalizi', pos: { left: '4%', top: '57%' } },
  { number: '02', title: 'Strateji &\nYol Haritası', pos: { left: '16.5%', top: '29%' } },
  { number: '03', title: 'Tokenomics &\nTeknik Altyapı', pos: { left: '29%', top: '58%' } },
  { number: '04', title: 'Yazılım & Ürün\nGeliştirme', pos: { left: '41.5%', top: '54%' } },
  { number: '05', title: 'Branding &\nPazarlama', pos: { left: '54%', top: '58%' } },
  { number: '06', title: 'Topluluk &\nGrowth', pos: { left: '66.5%', top: '29%' } },
  { number: '07', title: 'Launch &\nListing', pos: { left: '79%', top: '59%' } },
  { number: '08', title: 'Market Making\n& Likidite', pos: { left: '94.5%', top: '41%' } },
];

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-black text-white min-h-screen flex flex-col items-center">
      <img src="https://picsum.photos/id/180/1920/1080" alt="Process Background" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/65 z-[1]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black z-[2]"></div>

      <div className="relative z-10 w-full max-w-[1280px] px-8 pt-12">
        <div className="text-center mb-8 px-4 md:px-24">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Bir Kripto Projesini A'dan Z'ye Biz Yönetiyoruz</h1>
          <p className="text-lg md:text-xl font-light leading-snug mb-4">
            Fikir aşamasından teknik altyapıya, pazarlamadan listelemeye, yatırım sürecinden likidite yönetimine kadar tüm adımları sizin yerinize planlar, uygular ve yönetiriz.
          </p>
          <h3 className="text-cray-gold text-xl md:text-2xl font-semibold">
            Bu yaklaşım klasik "ajans hizmeti" değil, uçtan uca proje ortaklığıdır.
          </h3>
        </div>

        {/* Process Diagram */}
        <div className="relative h-[20rem] my-12 mx-auto max-w-[75rem] hidden lg:block">
          <svg className="absolute w-full h-full top-0 left-0 pointer-events-none" viewBox="0 0 1200 320" preserveAspectRatio="none">
            <path 
              d="M 50 160 Q 200 80, 350 160 T 650 160 T 950 160 Q 1050 80, 1150 160" 
              stroke="#ffb100" 
              strokeWidth="3" 
              fill="none" 
              strokeDasharray="10 8" 
            />
          </svg>

          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
              style={{ left: step.pos.left, top: step.pos.top }}
            >
              <div className="text-cray-gold text-[0.78rem] font-medium whitespace-pre-line text-center mb-4 line-height-[1rem]">
                {step.title}
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-cray-gold bg-white flex items-center justify-center font-bold text-black cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12px_rgba(255,177,0,0.5)]">
                {step.number}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#section1" className="bg-cray-gold text-black px-8 py-4 rounded-lg font-bold text-lg inline-block transition-all duration-300 hover:scale-105 shadow-[0_4px_12px_rgba(255,177,0,0.3)]">
            Projemi A'dan Z'ye Hayata Geçirmek İstiyorum
          </a>
        </div>

        <div 
          className="mt-12 text-center cursor-pointer animate-bounce"
          onClick={() => document.getElementById('section1')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg className="w-12 h-12 text-cray-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
