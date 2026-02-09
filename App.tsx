import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ConsultancySection from './components/ConsultancySection';
import WhyUsSection from './components/WhyUsSection';
import ServicesSection from './components/ServicesSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import ConsultancyDetailView from './components/ConsultancyDetailView';
import TokenBlockchainDetailView from './components/TokenBlockchainDetailView';
import BlockchainSoftwareDetailView from './components/BlockchainSoftwareDetailView';
import TokenListingDetailView from './components/TokenListingDetailView';
import KriptoMarketingDetailView from './components/KriptoMarketingDetailView';
import SocialCommunityDetailView from './components/SocialCommunityDetailView';
import ContentProductionDetailView from './components/ContentProductionDetailView';
import MarketMakingDetailView from './components/MarketMakingDetailView';
import InvestmentFundingDetailView from './components/InvestmentFundingDetailView';
import PartnershipBusinessDetailView from './components/PartnershipBusinessDetailView';
import CryptoProjectConsultancySubDetailView from './components/CryptoProjectConsultancySubDetailView';
import CryptoIdeaConceptConsultancySubDetailView from './components/CryptoIdeaConceptConsultancySubDetailView';
import CryptoBusinessModelStrategySubDetailView from './components/CryptoBusinessModelStrategySubDetailView';
import CryptoRoadmapTokenomicsSubDetailView from './components/CryptoRoadmapTokenomicsSubDetailView';
import BudgetOrientedConsultancySubDetailView from './components/BudgetOrientedConsultancySubDetailView';
import EndToEndManagementSubDetailView from './components/EndToEndManagementSubDetailView';
import LaunchGrowthSubDetailView from './components/LaunchGrowthSubDetailView';
import DigitalMarketingPromotionSubDetailView from './components/DigitalMarketingPromotionSubDetailView';

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
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderView = () => {
    switch(view) {
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi': 
        return <ConsultancyDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-proje-danismanligi': 
        return <CryptoProjectConsultancySubDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-fikir-ve-konsept-danismanligi': 
        return <CryptoIdeaConceptConsultancySubDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-is-modeli-ve-strateji-danismanligi': 
        return <CryptoBusinessModelStrategySubDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-yol-haritasi-ve-tocenomics-danismanligi': 
        return <CryptoRoadmapTokenomicsSubDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/butce-odakli-kripto-proje-danismanligi': 
        return <BudgetOrientedConsultancySubDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/uctan-uca-kripto-proje-yonetim-danismanligi': 
        return <EndToEndManagementSubDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/lansman-ve-buyume-danismanligi': 
        return <LaunchGrowthSubDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/dijital-pazarlama-ve-tanitim-danismanligi': 
        return <DigitalMarketingPromotionSubDetailView />;
      case '#hizmetler/token-ve-blokzincir-gelistirme': 
        return <TokenBlockchainDetailView />;
      case '#hizmetler/blokzincir-ve-yazilim-gelistirme':
      case '#hizmetler/blokzincir-gelistirme':
      case '#hizmetler/web3-ve-platform-yazilimlari':
      case '#hizmetler/uygulama-ve-oyun-gelistirme': 
        return <BlockchainSoftwareDetailView />;
      case '#hizmetler/token-lansman-ve-listeleme': 
        return <TokenListingDetailView />;
      case '#hizmetler/kripto-ve-web3-pazarlama': 
        return <KriptoMarketingDetailView />;
      case '#hizmetler/sosyal-medya-ve-topluluk-yonetimi': 
        return <SocialCommunityDetailView />;
      case '#hizmetler/icerik-uretimi': 
        return <ContentProductionDetailView />;
      case '#hizmetler/piyasa-yapiciligi-ve-likidite': 
        return <MarketMakingDetailView />;
      case '#hizmetler/yatirim-danismanligi': 
        return <InvestmentFundingDetailView />;
      case '#hizmetler/is-ortakliklari-ve-is-gelistirme': 
        return <PartnershipBusinessDetailView />;
      case '#assets': 
        return <AssetDebugger />;
      default:
        return (
          <main>
            <Hero />
            <ConsultancySection />
            <WhyUsSection />
            <InfoSection id="info-section-left" className="info-section-left" title="Kripto Projenizi Bir Üst Seviyeye Taşıyalım" desc="Kripto projenizi; doğru strateji, pazarlama ve teknik optimizasyon ile buluşturarak ulaşmak istediği noktaya birlikte taşıyoruz." points={["Projenizi analiz ederiz", "Eksikleri tespit ederiz", "Yeniden konumlandırır ve büyütürüz", "Gizlilik ana kuralımız!"]} image="/gorsel/y.jpg" reverse cta="Projemi Değerlendirin" />
            <ServicesSection />
            <InfoSection id="info-section-right" className="info-section-right" title="Yatırım Gücünüzü Doğru Strateji İle Kullanın, Büyüme Sağlayın!" desc="Web3 ve kripto dünyasında doğru yatırım, sadece sermaye değil doğru strateji gerektirir." points={["Yatırım fırsatlarını analiz ederiz", "Riskleri değerlendiririz", "Uygun modelleri belirleriz", "Uçtan uca danışmanlık alın!"]} image="/gorsel/z.jpg" cta="Strateji Danışmanlığı Al" />
            <section className="final-cta-section" style={{padding: '60px 0', textAlign: 'center', background: 'rgba(255, 177, 0, 0.05)'}}>
              <div className="container-xl">
                <h2 className="h2-style" style={{marginBottom: '40px'}}>Kripto Projenizi Bir Sonraki Seviyeye Taşımaya Hazır mısınız?</h2>
                <a href="#section1" className="cta-button" style={{padding: '20px 40px'}}>Ücretsiz Ön Değerlendirme Al</a>
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