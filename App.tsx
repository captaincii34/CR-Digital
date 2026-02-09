
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ConsultancySection from './components/ConsultancySection';
import WhyUsSection from './components/WhyUsSection';
import ServicesSection from './components/ServicesSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import ConsultancyDetailView from './components/ConsultancyDetailView';

// Örnek bir "Yeni Sayfa" bileşeni (Detay Sayfası)
const ServiceDetailView: React.FC = () => (
  <div className="min-h-screen bg-black pt-32 pb-20 px-8 text-white">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-cray-gold mb-8">Hizmet Detayları</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-cray-gold/20">
          <h2 className="text-2xl font-bold mb-4">Strateji Planlama</h2>
          <p className="text-gray-400">Projenizin token ekonomisinden pazarlama yol haritasına kadar her detayı uzman ekibimizle planlıyoruz.</p>
        </div>
        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-cray-gold/20">
          <h2 className="text-2xl font-bold mb-4">Teknik Altyapı</h2>
          <p className="text-gray-400">Akıllı sözleşmelerden audit süreçlerine kadar güvenli ve ölçeklenebilir Web3 altyapısı sunuyoruz.</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <button onClick={() => window.location.hash = ''} className="bg-cray-gold text-black px-10 py-4 rounded-lg font-bold hover:scale-105 transition-all">
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  </div>
);

const AssetDebugger: React.FC = () => (
  <div className="min-h-screen bg-zinc-950 p-10 pt-32 text-white font-sans">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-cray-gold">Varlık ve Dosya Yapısı Kontrolü</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-zinc-900 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-green-400">Yol: /dist/gorsel/c1.jpg</h2>
          <div className="aspect-video bg-black rounded-lg overflow-hidden border border-white/5 flex items-center justify-center">
            <img src="/dist/gorsel/c1.jpg" alt="Dist Image" className="max-w-full max-h-full object-contain" onError={(e) => (e.currentTarget.parentElement!.innerHTML = '<span class="text-red-500 text-xs">404: Dist klasörü veya görsel yok</span>')} />
          </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-blue-400">Dosya Sistemi Durumu</h2>
          <ul className="text-sm space-y-2 text-gray-400">
            <li className="flex justify-between"><span>/index.html</span> <span className="text-green-500">Aktif</span></li>
            <li className="flex justify-between"><span>/dist/</span> <span className="text-green-500">Servis Ediliyor</span></li>
            <li className="flex justify-between"><span>/public/</span> <span className="text-yellow-500">Yedek</span></li>
          </ul>
        </div>
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
    const handleHashChange = () => {
      setView(window.location.hash);
      window.scrollTo(0, 0); // Sayfa değiştiğinde en üste çık
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // "Router" Mantığı: URL hash'ine göre farklı "Sayfalar" render edilir
  const renderView = () => {
    switch(view) {
      case '#assets':
        return <AssetDebugger />;
      case '#hizmet-detay':
        return <ServiceDetailView />;
      case '#danismanlik':
        return <ConsultancyDetailView />;
      default:
        return (
          <main>
            <Hero />
            <ConsultancySection />
            <WhyUsSection />
            <InfoSection 
              title="Mevcut Kripto Projenizi Bir Üst Seviyeye Taşıyalım"
              desc="Birçok proje doğru strateji, pazarlama ve teknik optimizasyon eksikliği nedeniyle potansiyelini kullanamıyor."
              points={["Projenizi analiz ederiz", "Eksikleri tespit ederiz", "Yeniden konumlandırır ve büyütürüz"]}
              image="/gorsel/y.jpg"
              reverse
              cta="Projemi Değerlendirin"
            />
            <ServicesSection />
            <InfoSection 
              title="Yatırım Gücünüz Var Ama Ne Yapacağınıza Karar Veremediniz mi?"
              desc="Web3 ve kripto dünyasında doğru yatırım, sadece sermaye değil doğru strateji gerektirir."
              points={["Yatırım fırsatlarını analiz eder", "Riskleri değerlendirir", "Size uygun Web3 modellerini belirleriz"]}
              image="/gorsel/z.jpg"
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
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      {renderView()}
      <Footer />
    </div>
  );
};

export default App;
