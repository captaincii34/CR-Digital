
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ConsultancySection from './components/ConsultancySection';
import WhyUsSection from './components/WhyUsSection';
import ServicesSection from './components/ServicesSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <ConsultancySection />
        
        <WhyUsSection />
        
        <InfoSection 
          title="Mevcut Kripto Projenizi Bir Üst Seviyeye Taşıyalım"
          desc="Birçok proje doğru strateji, pazarlama ve teknik optimizasyon eksikliği nedeniyle potansiyelini kullanamıyor."
          points={[
            "Projenizi analiz ederiz",
            "Eksikleri tespit ederiz",
            "Yeniden konumlandırır ve büyütürüz"
          ]}
          image="mobile-bg.jpg"
          reverse
          cta="Projemi Değerlendirin"
        />

        <ServicesSection />

        <InfoSection 
          title="Yatırım Gücünüz Var Ama Ne Yapacağınıza Karar Veremediniz mi?"
          desc="Web3 ve kripto dünyasında doğru yatırım, sadece sermaye değil doğru strateji gerektirir."
          points={[
            "Yatırım fırsatlarını analiz eder",
            "Riskleri değerlendirir",
            "Size uygun Web3 modellerini belirleriz"
          ]}
          image="path-bg.jpg"
          cta="Yatırım Danışmanlığı Al"
        />

        {/* CTA Section */}
        <section className="py-20 border-t border-cray-gold/10 bg-gradient-to-b from-transparent to-cray-gold/5 text-center text-white">
          <div className="max-w-[1280px] mx-auto px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kripto Projenizi Bir Sonraki Seviyeye Taşımaya Hazır mısınız?</h1>
            <p className="text-xl font-light mb-12 text-gray-300">
              İster yeni bir fikir, ister mevcut bir proje, ister sadece yatırım gücü…<br/>
              <span className="block mt-2 text-white font-medium">Doğru yol haritasını birlikte oluşturalım.</span>
            </p>
            <a href="#section1" className="bg-cray-gold text-black px-12 py-6 rounded-lg font-bold text-xl inline-block transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(255,177,0,0.4)]">
              Ücretsiz Ön Değerlendirme Al
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
