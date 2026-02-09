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
      <h1 className="text-cray-gold mb-8">Hizmet Detayları</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-cray-gold/20">
          <h3 className="mb-4">Strateji Planlama</h3>
          <p className="text-gray-400">Projenizin token ekonomisinden pazarlama yol haritasına kadar her detayı uzman ekibimizle planlıyoruz.</p>
        </div>
        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-cray-gold/20">
          <h3 className="mb-4">Teknik Altyapı</h3>
          <p className="text-gray-400">Akıllı sözleşmelerden audit süreçlerine kadar güvenli ve ölçeklenebilir Web3 altyapısı sunuyoruz.</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <button onClick={() => window.location.hash = ''} className="bg-cray-gold text-black px-10 py-4 rounded-lg font-bold hover:scale-105 transition-all uppercase tracking-widest text-xs">
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  </div>
);

const AssetDebugger: React.FC = () => (
  <div className="min-h-screen bg-zinc-950 p-10 pt-32 text-white font-sans">
    <div className="max-w-4xl mx-auto">
      <h1 className="mb-8 text-cray-gold">Varlık ve Dosya Yapısı Kontrolü</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-zinc-900 p-6 rounded-xl border border-white/10">
          <h4 className="mb-4 text-green-400">Yol: /dist/gorsel/c1.jpg</h4>
          <div className="aspect-video bg-black rounded-lg overflow-hidden border border-white/5 flex items-center justify-center">
            <img src="/dist/gorsel/c1.jpg" alt="Dist Image" className="max-w-full max-h-full object-contain" onError={(e) => (e.currentTarget.parentElement!.innerHTML = '<span class="text-red-500 text-xs">404: Dist klasörü veya görsel yok</span>')} />
          </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-white/10">
          <h4 className="mb-4 text-blue-400">Dosya Sistemi Durumu</h4>
          <ul className="space-y-2 text-gray-400 p-0 list-none">
            <li className="flex justify-between"><span>/index.html</span> <span className="text-green-500">Aktif</span></li>
            <li className="flex justify-between"><span>/dist/</span> <span className="text-green-500">Servis Ediliyor</span></li>
            <li className="flex justify-between"><span>/public/</span> <span className="text-yellow-500">Yedek</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button onClick={() => window.location.hash = ''} className="bg-cray-gold text-black px-10 py-4 rounded-lg font-bold hover:scale-105 transition-all uppercase tracking-widest text-xs">
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

  // "Router" Mantığı
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
              title="Kripto Projenizi Bir Üst Seviyeye Taşıyalım"
              desc="Kripto projenizi; doğru strateji, pazarlama ve teknik optimizasyon ile buluşturarak ulaşmak istediği noktaya birlikte taşıyoruz."
              points={[
                "Projenizi analiz ederiz", 
                "Eksikleri tespit ederiz", 
                "Yeniden konumlandırır ve büyütürüz",
                "Gizlilik ana kuralımız!"
              ]}
              image="/gorsel/y.jpg"
              reverse
              cta="Projemi Değerlendirin"
            />
            <ServicesSection />
            <InfoSection 
              title="Yatırım Gücünüzü Doğru Strateji İle Kullanın, Büyüme Sağlayın!"
              desc="Web3 ve kripto dünyasında doğru yatırım, sadece sermaye değil doğru strateji gerektirir. Doğru strateji ve dijital pazarlama süreçleri ile hızlı ve daha az maaliyetle işi neticelendir!"
              points={[
                "Yatırım ve strateji fırsatlarını analiz eder", 
                "Riskleri değerlendirir", 
                "Size uygun Web3 modellerini belirleriz",
                "Size özel uçtan uca strateji danışmanlığı alın!"
              ]}
              image="/gorsel/z.jpg"
              cta="Strateji Danışmanlığı Al"
            />
            
            <section className="final-cta-section">
              <style>{`
                .final-cta-section {
                  padding: 60px 0;
                  border-top: 1px solid rgba(255, 177, 0, 0.1);
                  background: linear-gradient(to bottom, transparent, rgba(255, 177, 0, 0.05));
                  text-align: center;
                  position: relative;
                }
                .final-cta-container {
                  max-width: 1280px;
                  margin: 0 auto;
                  padding: 0 32px;
                }
                .final-cta-title {
                  margin-bottom: 40px;
                  color: #fff;
                  line-height: 1.3;
                }
                .btn-final-cta {
                  background-color: var(--cray-gold);
                  color: #000;
                  padding: 18px 36px;
                  border-radius: 12px;
                  font-weight: 700 !important;
                  display: inline-block;
                  text-decoration: none;
                  text-transform: uppercase;
                  letter-spacing: 0px;
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                  box-shadow: 0 8px 30px rgba(255, 177, 0, 0.4);
                  font-size: 14px !important;
                }
                .btn-final-cta:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 15px 45px rgba(255, 177, 0, 0.6);
                  background-color: #ffc233;
                }
                @media (max-width: 768px) {
                  .btn-final-cta { padding: 16px 40px; font-size: 16px !important; width: 100%; }
                }
              `}</style>
              <div className="final-cta-container">
                <h2 className="final-cta-title">Kripto Projenizi Bir Sonraki Seviyeye Taşımaya Hazır mısınız?</h2>
                <a href="#section1" className="btn-final-cta">
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