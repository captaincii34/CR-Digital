
import React from 'react';

const InfoSection: React.FC<{
  title: string;
  desc: string;
  points: string[];
  image: string;
  reverse?: boolean;
  cta: string;
}> = ({ title, desc, points, image, reverse, cta }) => {
  return (
    <section className={`py-20 bg-black text-white ${reverse ? 'border-t border-cray-gold/10 bg-gradient-to-b from-cray-gold/5 to-transparent' : ''}`}>
      <div className="max-w-[1280px] mx-auto px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? '' : 'lg:flex-row-reverse'}`}>
          <div className={reverse ? 'order-2 lg:order-1' : 'order-2'}>
            <h1 className="text-4xl font-bold leading-tight mb-4">{title}</h1>
            <p className="text-lg font-light mb-8 text-gray-300">{desc}</p>
            <ul className="mb-8 space-y-3">
              {points.map((p, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-cray-gold text-xl font-bold">✓</span>
                  <span className="text-gray-300">{p}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="bg-cray-gold text-black px-8 py-4 rounded-lg font-bold inline-block transition-all duration-300 hover:scale-105">
              {cta}
            </a>
          </div>

          <div className={`relative h-[24rem] rounded-lg overflow-hidden border border-cray-gold/20 ${reverse ? 'order-1 lg:order-2' : 'order-1'}`}>
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
