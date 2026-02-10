import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ConsultancySection from './components/ConsultancySection';
import WhyUsSection from './components/WhyUsSection';
import ServicesSection from './components/ServicesSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import BookingSection from './components/BookingSection';
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
import AboutUsView from './components/AboutUsView';
import WorksView from './components/WorksView';
import AixoviaWorkDetailView from './components/AixoviaWorkDetailView';

// Alt Sayfalar - Grup A
import CryptoProjectConsultancySubDetailView from './components/CryptoProjectConsultancySubDetailView';
import CryptoIdeaConceptConsultancySubDetailView from './components/CryptoIdeaConceptConsultancySubDetailView';
import CryptoBusinessModelStrategySubDetailView from './components/CryptoBusinessModelStrategySubDetailView';
import CryptoRoadmapTokenomicsSubDetailView from './components/CryptoRoadmapTokenomicsSubDetailView';
import BudgetOrientedConsultancySubDetailView from './components/BudgetOrientedConsultancySubDetailView';
import EndToEndManagementSubDetailView from './components/EndToEndManagementSubDetailView';
import LaunchGrowthSubDetailView from './components/LaunchGrowthSubDetailView';
import DigitalMarketingPromotionSubDetailView from './components/DigitalMarketingPromotionSubDetailView';

// Alt Sayfalar - Grup B
import TokenProjectConsultancySubDetailView from './components/TokenProjectConsultancySubDetailView';
import BlockchainNetworkSelectionSubDetailView from './components/BlockchainNetworkSelectionSubDetailView';
import SmartContractDevelopmentSubDetailView from './components/SmartContractDevelopmentSubDetailView';
import TokenomicsDesignSubDetailView from './components/TokenomicsDesignSubDetailView';
import WhitepaperPreparationSubDetailView from './components/WhitepaperPreparationSubDetailView';
import PitchDeckPreparationSubDetailView from './components/PitchDeckPreparationSubDetailView';
import GtmRoadmapSubDetailView from './components/GtmRoadmapSubDetailView';
import AuditPreparationSubDetailView from './components/AuditPreparationSubDetailView';

// Alt Sayfalar - Grup C
import BlockchainDevHeaderDetailView from './components/BlockchainDevHeaderDetailView';
import SmartContractDevV2SubDetailView from './components/SmartContractDevV2SubDetailView';
import TokenNFTContractsSubDetailView from './components/TokenNFTContractsSubDetailView';
import DAppDevelopmentSubDetailView from './components/DAppDevelopmentSubDetailView';
import DAOInfrastructureSubDetailView from './components/DAOInfrastructureSubDetailView';
import WalletIntegrationSubDetailView from './components/WalletIntegrationSubDetailView';
import Web3PlatformHeaderDetailView from './components/Web3PlatformHeaderDetailView';
import Web3WebsiteDevSubDetailView from './components/Web3WebsiteDevSubDetailView';
import CustomDashboardSubDetailView from './components/CustomDashboardSubDetailView';
import AnalyticsReportingSubDetailView from './components/AnalyticsReportingSubDetailView';
import BackendApiDevSubDetailView from './components/BackendApiDevSubDetailView';
import AppGameHeaderDetailView from './components/AppGameHeaderDetailView';
import Web3MobileAppSubDetailView from './components/Web3MobileAppSubDetailView';
import TelegramBotMiniAppSubDetailView from './components/TelegramBotMiniAppSubDetailView';
import BlockchainGameDevSubDetailView from './components/BlockchainGameDevSubDetailView';
import GameFiP2ESystemsSubDetailView from './components/GameFiP2ESystemsSubDetailView';
import ServerInfrastructureSubDetailView from './components/ServerInfrastructureSubDetailView';

// Alt Sayfalar - Grup D
import TokenLaunchStrategySubDetailView from './components/TokenLaunchStrategySubDetailView';
import DexLaunchManagementSubDetailView from './components/DexLaunchManagementSubDetailView';
import CexListingConsultancySubDetailView from './components/CexListingConsultancySubDetailView';
import LaunchpadPreparationSubDetailView from './components/LaunchpadPreparationSubDetailView';
import PreListingMarketingSubDetailView from './components/PreListingMarketingSubDetailView';
import PostListingGrowthSubDetailView from './components/PostListingGrowthSubDetailView';
import ExchangeCommunicationSubDetailView from './components/ExchangeCommunicationSubDetailView';
import ListingDocumentationSubDetailView from './components/ListingDocumentationSubDetailView';

// Alt Sayfalar - Grup E
import Web3GrowthStrategySubDetailView from './components/Web3GrowthStrategySubDetailView';
import CryptoPerformanceMarketingSubDetailView from './components/CryptoPerformanceMarketingSubDetailView';
import InfluencerKolMarketingSubDetailView from './components/InfluencerKolMarketingSubDetailView';
import PrMediaPublicationsSubDetailView from './components/PrMediaPublicationsSubDetailView';
import CampaignHypeManagementSubDetailView from './components/CampaignHypeManagementSubDetailView';
import LandingPageFunnelSubDetailView from './components/LandingPageFunnelSubDetailView';
import AnalyticsKpiReportingSubDetailView from './components/AnalyticsKpiReportingSubDetailView';
import Web3MarketingAutomationSubDetailView from './components/Web3MarketingAutomationSubDetailView';

// Alt Sayfalar - Grup F
import XTwitterGrowthSubDetailView from './components/XTwitterGrowthSubDetailView';
import TelegramCommunitySubDetailView from './components/TelegramCommunitySubDetailView';
import DiscordCommunitySubDetailView from './components/DiscordCommunitySubDetailView';
import ModerationSubDetailView from './components/ModerationSubDetailView';
import AmbassadorProgramSubDetailView from './components/AmbassadorProgramSubDetailView';
import EngagementCampaignsSubDetailView from './components/EngagementCampaignsSubDetailView';
import FudCrisisManagementSubDetailView from './components/FudCrisisManagementSubDetailView';
import CommunityAnalyticsSubDetailView from './components/CommunityAnalyticsSubDetailView';

// Alt Sayfalar - Grup G
import BrandIdentityDesignSubDetailView from './components/BrandIdentityDesignSubDetailView';
import Web3UiUxDesignSubDetailView from './components/Web3UiUxDesignSubDetailView';
import MotionExplainerVideoSubDetailView from './components/MotionExplainerVideoSubDetailView';
import ShortFormatVideoSubDetailView from './components/ShortFormatVideoSubDetailView';
import MemeTrendContentSubDetailView from './components/MemeTrendContentSubDetailView';
import AnnouncementListingKitsSubDetailView from './components/AnnouncementListingKitsSubDetailView';
import SocialMediaVisualPackagesSubDetailView from './components/SocialMediaVisualPackagesSubDetailView';

// Alt Sayfalar - Grup H
import MarketMakingStrategySubDetailView from './components/MarketMakingStrategySubDetailView';
import LiquidityPlanningSubDetailView from './components/LiquidityPlanningSubDetailView';
import MmSelectionSubDetailView from './components/MmSelectionSubDetailView';
import MmSystemConsultancySubDetailView from './components/MmSystemConsultancySubDetailView';
import BotInfrastructureSubDetailView from './components/BotInfrastructureSubDetailView';
import SpreadVolatilitySubDetailView from './components/SpreadVolatilitySubDetailView';
import CrossPlatformLiquiditySubDetailView from './components/CrossPlatformLiquiditySubDetailView';
import MmPerformanceReportingSubDetailView from './components/MmPerformanceReportingSubDetailView';

// Alt Sayfalar - Grup I
import InvestmentReadinessSubDetailView from './components/InvestmentReadinessSubDetailView';
import FundingStrategySubDetailView from './components/FundingStrategySubDetailView';
import InvestmentRoundsSubDetailView from './components/InvestmentRoundsSubDetailView';
import InvestorResearchSubDetailView from './components/InvestorResearchSubDetailView';
import DataRoomPreparationSubDetailView from './components/DataRoomPreparationSubDetailView';
import ValuationAllocationSubDetailView from './components/ValuationAllocationSubDetailView';
import InvestorNetworkSubDetailView from './components/InvestorNetworkSubDetailView';
import SyndicateStructuringSubDetailView from './components/SyndicateStructuringSubDetailView';
import InvestorRelationsSubDetailView from './components/InvestorRelationsSubDetailView';

// Alt Sayfalar - Grup J
import StrategicPartnershipsSubDetailView from './components/StrategicPartnershipsSubDetailView';
import EcosystemCollaborationsSubDetailView from './components/EcosystemCollaborationsSubDetailView';
import CrossMarketingPlanningSubDetailView from './components/CrossMarketingPlanningSubDetailView';
import CorporateBusinessDevSubDetailView from './components/CorporateBusinessDevSubDetailView';

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
    const normalizedView = decodeURIComponent(view.toLowerCase().replace(/\/$/, ''));

    if (normalizedView === '#hakkimizda' || normalizedView === '#hakkımızda') {
      return <AboutUsView />;
    }

    if (normalizedView === '#works') {
      return <WorksView />;
    }

    if (normalizedView === '#works/aixovia') {
      return <AixoviaWorkDetailView />;
    }

    switch(normalizedView) {
      // Grup A
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi': return <ConsultancyDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-proje-danismanligi': return <CryptoProjectConsultancySubDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-fikir-ve-konsept-danismanligi': return <CryptoIdeaConceptConsultancySubDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-is-modeli-ve-strateji-danismanligi': return <CryptoBusinessModelStrategySubDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/kripto-yol-haritasi-ve-tocenomics-danismanligi': return <CryptoRoadmapTokenomicsSubDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/butce-odakli-kripto-proje-danismanligi': return <BudgetOrientedConsultancySubDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/uctan-uca-kripto-proje-yonetim-danismanligi': return <EndToEndManagementSubDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/lansman-ve-buyume-danismanligi': return <LaunchGrowthSubDetailView />;
      case '#hizmetler/a-dan-z-ye-kripto-proje-danismanligi/dijital-pazarlama-ve-tanitim-danismanligi': return <DigitalMarketingPromotionSubDetailView />;

      // Grup B
      case '#hizmetler/token-ve-blokzincir-gelistirme': return <TokenBlockchainDetailView />;
      case '#hizmetler/token-ve-blokzincir-gelistirme/token-proje-danismanligi': return <TokenProjectConsultancySubDetailView />;
      case '#hizmetler/token-ve-blokzincir-gelistirme/blokzincir-ve-ag-secimi': return <BlockchainNetworkSelectionSubDetailView />;
      case '#hizmetler/token-ve-blokzincir-gelistirme/akilli-kontrat-gelistirme': return <SmartContractDevelopmentSubDetailView />;
      case '#hizmetler/token-ve-blokzincir-gelistirme/tokenomics-tasarimi': return <TokenomicsDesignSubDetailView />;
      case '#hizmetler/token-ve-blokzincir-gelistirme/whitepaper-hazirligi': return <WhitepaperPreparationSubDetailView />;
      case '#hizmetler/token-ve-blokzincir-gelistirme/pitch-deck-ve-sunum-hazirligi': return <PitchDeckPreparationSubDetailView />;
      case '#hizmetler/token-ve-blokzincir-gelistirme/roadmap-ve-gtm-planlamasi': return <GtmRoadmapSubDetailView />;
      case '#hizmetler/token-ve-blokzincir-gelistirme/audit-hazirlik-surecleri': return <AuditPreparationSubDetailView />;

      // Grup C
      case '#hizmetler/blokzincir-ve-yazilim-gelistirme': return <BlockchainSoftwareDetailView />;
      case '#hizmetler/blokzincir-gelistirme': return <BlockchainDevHeaderDetailView />;
      case '#hizmetler/blokzincir-ve-yazilim-gelistirme/akilli-kontrat-gelistirme': return <SmartContractDevV2SubDetailView />;
      case '#hizmetler/blokzincir-ve-yazilim-gelistirme/token-nft-kontratlari': return <TokenNFTContractsSubDetailView />;
      case '#hizmetler/blokzincir-ve-yazilim-gelistirme/dapp-gelistirme': return <DAppDevelopmentSubDetailView />;
      case '#hizmetler/blokzincir-ve-yazilim-gelistirme/dao-altyapi': return <DAOInfrastructureSubDetailView />;
      case '#hizmetler/blokzincir-ve-yazilim-gelistirme/cuzdan-entegrasyonu': return <WalletIntegrationSubDetailView />;
      case '#hizmetler/web3-ve-platform-yazilimlari': return <Web3PlatformHeaderDetailView />;
      case '#hizmetler/web3-ve-platform-yazilimlari/website-gelistirme': return <Web3WebsiteDevSubDetailView />;
      case '#hizmetler/web3-ve-platform-yazilimlari/ozel-paneller': return <CustomDashboardSubDetailView />;
      case '#hizmetler/web3-ve-platform-yazilimlari/analitik-raporlama': return <AnalyticsReportingSubDetailView />;
      case '#hizmetler/web3-ve-platform-yazilimlari/backend-api': return <BackendApiDevSubDetailView />;
      case '#hizmetler/uygulama-ve-oyun-gelistirme': return <AppGameHeaderDetailView />;
      case '#hizmetler/uygulama-ve-oyun-gelistirme/mobil-uygulama': return <Web3MobileAppSubDetailView />;
      case '#hizmetler/uygulama-ve-oyun-gelistirme/telegram-bot': return <TelegramBotMiniAppSubDetailView />;
      case '#hizmetler/uygulama-ve-oyun-gelistirme/oyun-gelistirme': return <BlockchainGameDevSubDetailView />;
      case '#hizmetler/uygulama-ve-oyun-gelistirme/gamefi-p2e': return <GameFiP2ESystemsSubDetailView />;
      case '#hizmetler/uygulama-ve-oyun-gelistirme/sunucu-altyapi': return <ServerInfrastructureSubDetailView />;

      // Grup D
      case '#hizmetler/token-lansman-ve-listeleme': return <TokenListingDetailView />;
      case '#hizmetler/token-lansman-ve-listeleme/strateji': return <TokenLaunchStrategySubDetailView />;
      case '#hizmetler/token-lansman-ve-listeleme/dex': return <DexLaunchManagementSubDetailView />;
      case '#hizmetler/token-lansman-ve-listeleme/cex': return <CexListingConsultancySubDetailView />;
      case '#hizmetler/token-lansman-ve-listeleme/launchpad': return <LaunchpadPreparationSubDetailView />;
      case '#hizmetler/token-lansman-ve-listeleme/pre-list-marketing': return <PreListingMarketingSubDetailView />;
      case '#hizmetler/token-lansman-ve-listeleme/post-list-growth': return <PostListingGrowthSubDetailView />;
      case '#hizmetler/token-lansman-ve-listeleme/exchange-comm': return <ExchangeCommunicationSubDetailView />;
      case '#hizmetler/token-lansman-ve-listeleme/docs': return <ListingDocumentationSubDetailView />;

      // Grup E
      case '#hizmetler/kripto-ve-web3-pazarlama': return <KriptoMarketingDetailView />;
      case '#hizmetler/kripto-ve-web3-pazarlama/growth': return <Web3GrowthStrategySubDetailView />;
      case '#hizmetler/kripto-ve-web3-pazarlama/performance': return <CryptoPerformanceMarketingSubDetailView />;
      case '#hizmetler/kripto-ve-web3-pazarlama/influencer': return <InfluencerKolMarketingSubDetailView />;
      case '#hizmetler/kripto-ve-web3-pazarlama/pr': return <PrMediaPublicationsSubDetailView />;
      case '#hizmetler/kripto-ve-web3-pazarlama/hype': return <CampaignHypeManagementSubDetailView />;
      case '#hizmetler/kripto-ve-web3-pazarlama/funnel': return <LandingPageFunnelSubDetailView />;
      case '#hizmetler/kripto-ve-web3-pazarlama/analytics': return <AnalyticsKpiReportingSubDetailView />;
      case '#hizmetler/kripto-ve-web3-pazarlama/automation': return <Web3MarketingAutomationSubDetailView />;

      // Grup F
      case '#hizmetler/sosyal-medya-ve-topluluk-yonetimi': return <SocialCommunityDetailView />;
      case '#hizmetler/sosyal-medya-ve-topluluk-yonetimi/twitter': return <XTwitterGrowthSubDetailView />;
      case '#hizmetler/sosyal-medya-ve-topluluk-yonetimi/telegram': return <TelegramCommunitySubDetailView />;
      case '#hizmetler/sosyal-medya-ve-topluluk-yonetimi/discord': return <DiscordCommunitySubDetailView />;
      case '#hizmetler/sosyal-medya-ve-topluluk-yonetimi/mod': return <ModerationSubDetailView />;
      case '#hizmetler/sosyal-medya-ve-topluluk-yonetimi/ambassador': return <AmbassadorProgramSubDetailView />;
      case '#hizmetler/sosyal-medya-ve-topluluk-yonetimi/engagement': return <EngagementCampaignsSubDetailView />;
      case '#hizmetler/sosyal-medya-ve-topluluk-yonetimi/crisis': return <FudCrisisManagementSubDetailView />;
      case '#hizmetler/sosyal-medya-ve-topluluk-yonetimi/analytics': return <CommunityAnalyticsSubDetailView />;

      // Grup G
      case '#hizmetler/icerik-uretimi': return <ContentProductionDetailView />;
      case '#hizmetler/icerik-uretimi/brand': return <BrandIdentityDesignSubDetailView />;
      case '#hizmetler/icerik-uretimi/ui-ux': return <Web3UiUxDesignSubDetailView />;
      case '#hizmetler/icerik-uretimi/motion': return <MotionExplainerVideoSubDetailView />;
      case '#hizmetler/icerik-uretimi/shorts': return <ShortFormatVideoSubDetailView />;
      case '#hizmetler/icerik-uretimi/meme': return <MemeTrendContentSubDetailView />;
      case '#hizmetler/icerik-uretimi/announcement': return <AnnouncementListingKitsSubDetailView />;
      case '#hizmetler/icerik-uretimi/social-kits': return <SocialMediaVisualPackagesSubDetailView />;

      // Grup H
      case '#hizmetler/piyasa-yapiciligi-ve-likidite': return <MarketMakingDetailView />;
      case '#hizmetler/piyasa-yapiciligi-ve-likidite/strategy': return <MarketMakingStrategySubDetailView />;
      case '#hizmetler/piyasa-yapiciligi-ve-likidite/planning': return <LiquidityPlanningSubDetailView />;
      case '#hizmetler/piyasa-yapiciligi-ve-likidite/mm-selection': return <MmSelectionSubDetailView />;
      case '#hizmetler/piyasa-yapiciligi-ve-likidite/consultancy': return <MmSystemConsultancySubDetailView />;
      case '#hizmetler/piyasa-yapiciligi-ve-likidite/bot': return <BotInfrastructureSubDetailView />;
      case '#hizmetler/piyasa-yapiciligi-ve-likidite/optim': return <SpreadVolatilitySubDetailView />;
      case '#hizmetler/piyasa-yapiciligi-ve-likidite/liquidity': return <CrossPlatformLiquiditySubDetailView />;
      case '#hizmetler/piyasa-yapiciligi-ve-likidite/perf': return <MmPerformanceReportingSubDetailView />;

      // Grup I
      case '#hizmetler/yatirim-danismanligi': return <InvestmentFundingDetailView />;
      case '#hizmetler/yatirim-danismanligi/audit': return <InvestmentReadinessSubDetailView />;
      case '#hizmetler/yatirim-danismanligi/funding-strategy': return <FundingStrategySubDetailView />;
      case '#hizmetler/yatirim-danismanligi/tours': return <InvestmentRoundsSubDetailView />;
      case '#hizmetler/yatirim-danismanligi/research': return <InvestorResearchSubDetailView />;
      case '#hizmetler/yatirim-danismanligi/deck': return <DataRoomPreparationSubDetailView />;
      case '#hizmetler/yatirim-danismanligi/valuation': return <ValuationAllocationSubDetailView />;
      case '#hizmetler/yatirim-danismanligi/network': return <InvestorNetworkSubDetailView />;
      case '#hizmetler/yatirim-danismanligi/syndicate': return <SyndicateStructuringSubDetailView />;
      case '#hizmetler/yatirim-danismanligi/relations': return <InvestorRelationsSubDetailView />;

      // Grup J
      case '#hizmetler/is-ortakliklari-ve-is-gelistirme': return <PartnershipBusinessDetailView />;
      case '#hizmetler/is-ortakliklari-ve-is-gelistirme/partners': return <StrategicPartnershipsSubDetailView />;
      case '#hizmetler/is-ortakliklari-ve-is-gelistirme/ecosystem': return <EcosystemCollaborationsSubDetailView />;
      case '#hizmetler/is-ortakliklari-ve-is-gelistirme/cross': return <CrossMarketingPlanningSubDetailView />;
      case '#hizmetler/is-ortakliklari-ve-is-gelistirme/corporate': return <CorporateBusinessDevSubDetailView />;

      default:
        return (
          <main>
            <Hero />
            <ConsultancySection />
            <WhyUsSection />
            <InfoSection 
              id="info-section-left" 
              className="info-section-left" 
              title="Let’s Take Your Crypto Project to the Next Level" 
              desc="We combine your crypto project with the right strategy, marketing, and technical optimization to reach its full potential together." 
              points={["We analyze your project", "We identify the gaps", "We reposition and scale it", "Confidentiality is our core principle!"]} 
              image="/gorsel/y.jpg" 
              reverse 
              cta="Evaluate My Project" 
            />
            <ServicesSection />
            <InfoSection 
              id="info-section-right" 
              className="info-section-right" 
              title="Use Your Investment Power with the Right Strategy and Achieve Growth!" 
              desc="Web3 and the crypto world, a right investment requires not just capital but the right strategy." 
              points={["We analyze investment opportunities", "We evaluate risks", "We determine suitable models", "Get end-to-end consulting!"]} 
              image="/gorsel/z.jpg" 
              cta="Get Strategy Consulting" 
            />
            <BookingSection />
            <section className="final-cta-section" style={{padding: '60px 0', textAlign: 'center', background: 'rgba(255, 177, 0, 0.05)'}}>
              <div className="container-xl">
                <h2 className="h2-style" style={{marginBottom: '40px'}}>Are You Ready to Take Your Crypto Project to the Next Level?</h2>
                <a href="#section1" className="cta-button" style={{padding: '20px 40px'}}>Get a Free Pre-Evaluation</a>
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