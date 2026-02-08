
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ConsultancySection from './components/ConsultancySection';
import WhyUsSection from './components/WhyUsSection';
import ServicesSection from './components/ServicesSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

const AssetDebugger: React.FC = () => (
  <div className="min-h-screen bg-zinc-950 p-10 pt-32 text-white font-sans">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-cray-gold">Cloud Run /public Klasör Testi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-zinc-900 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-green-400">Yol 1: public/gorsel/c1.jpg</h2>
          <p className="text-sm text-gray-400 mb-4">Kod içi erişim: <code className="text-white">/gorsel/c1.jpg</code></p>
          <div className="aspect-video bg-black rounded-lg overflow-hidden border border-white/5 flex items-center justify-center">
            <img src="/gorsel/c1.jpg" alt="Public Gorsel Path" className="max-w-full max-h-full object-contain" onError={(e) => (e.currentTarget.parentElement!.innerHTML = '<span class="text-red-500 text-xs">404: /gorsel/c1.jpg Bulunamadı</span>')} />
          </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-blue-400">Yol 2: public/c1.jpg</h2>
          <p className="text-sm text-gray-400 mb-4">Kod içi erişim: <code className="text-white">/c1.jpg</code></p>
          <div className="aspect-video bg-black rounded-lg overflow-hidden border border-white/5 flex items-center justify-center">
            <img src="/c1.jpg" alt="Public Root Path" className="max-w-full max-h-full object-contain" onError={(e) => (e.currentTarget.parentElement!.innerHTML = '<span class="text-red-500 text-xs">404: /c1.jpg Bulunamadı</span>')} />
          </div>
        </div>
      </div>

      <div className="bg-zinc-900/50 p-6 rounded-xl border border-cray-gold/20 text-sm">
        <p className="text-gray-400">
          <strong>Not:</strong> Cloud Run deploy aldığında, <code className="text-white">public</code> klasörünün içeriği uygulamanızın kök dizinine taşınır. 
          Eğer GitHub'da dosyaları doğru klasöre (public/gorsel/c1.jpg) koyduysanız, deploy sonrası görselleriniz yukarıdaki test alanlarında belirecektir.
        </p>
      </div>

      <div className="mt-12 text-center">
        <button onClick={() => window.location.hash = ''} className="bg-cray-gold text-black px-10 py-4 rounded-lg font-bold hover:scale-105 transition-all">
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
          points={["Projenizi analiz ederiz", "Eksikleri tespit ederiz", "Yeniden konumlandırır ve büyütürüz"]}
          image="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=2000"
          reverse
          cta="Projemi Değerlendirin"
        />
        <ServicesSection />
        <InfoSection 
          title="Yatırım Gücünüz Var Ama Ne Yapacağınıza Karar Veremediniz mi?"
          desc="Web3 ve kripto dünyasında doğru yatırım, sadece sermaye değil doğru strateji gerektirir."
          points={["Yatırım fırsatlarını analiz eder", "Riskleri değerlendirir", "Size uygun Web3 modellerini belirleriz"]}
          image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
          cta="Yatırım Danışmanlığı Al"
        />
        <section className="py-20 border-t border-cray-gold/10 bg-gradient-to-b from-transparent to-cray-gold/5 text-center text-white">
          <div className="max-w-[1280px] mx-auto px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kripto Projenizi Bir Sonraki Seviyeye Taşımaya Hazır mısınız?</h1>
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
