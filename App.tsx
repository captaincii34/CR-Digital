
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ConsultancySection from './components/ConsultancySection';
import WhyUsSection from './components/WhyUsSection';
import ServicesSection from './components/ServicesSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

// Ayrı bir HTML dosyasına ihtiyaç duymadan uygulama içinde çalışan Debugger
const AssetDebugger: React.FC = () => (
  <div className="min-h-screen bg-zinc-950 p-10 pt-32 text-white">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-cray-gold">Varlık Kontrol Paneli (React Modu)</h1>
      <div className="bg-zinc-900 p-6 rounded-xl border border-cray-gold/30 mb-10">
        <h2 className="text-xl font-bold mb-4">Sistem Bilgisi</h2>
        <p className="text-gray-300">Bu sayfa React içinden render ediliyor, yani sunucu taraflı 404 hatası almazsınız.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="font-bold">c1.jpg Testi</h3>
          <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center border border-white/10">
            <img 
              src="./c1.jpg" 
              alt="c1.jpg" 
              className="w-full h-full object-cover" 
              onError={(e) => (e.currentTarget.parentElement!.innerHTML = '<span class="text-red-500 p-4 text-center text-sm">c1.jpg bulunamadı.<br/>Lütfen GitHub reposunda ana dizinde olduğundan emin olun.</span>')}
            />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold">CDN Fallback Testi</h3>
          <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center border border-white/10">
            <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400" alt="CDN Test" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <button onClick={() => window.location.hash = ''} className="bg-cray-gold text-black px-8 py-3 rounded-lg font-bold transition-transform hover:scale-105">
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setView(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (view === '#assets') {
    return (
      <>
        <Header />
        <AssetDebugger />
        <Footer />
      </>
    );
  }

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
          image="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=2000"
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
          image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
          cta="Yatırım Danışmanlığı Al"
        />

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
