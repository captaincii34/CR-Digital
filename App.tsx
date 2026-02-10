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
import AixoviaPlayWorkDetailView from './components/AixoviaPlayWorkDetailView';
import ContactView from './components/ContactView';

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

    if (normalizedView === '#about-us') {
      return <AboutUsView />;
    }

    if (normalizedView === '#works') {
      return <WorksView />;
    }

    if (normalizedView === '#works/aixovia') {
      return <AixoviaWorkDetailView />;
    }

    if (normalizedView === '#works/aixovia-play') {
      return <AixoviaPlayWorkDetailView />;
    }

    if (normalizedView === '#contact') {
      return <ContactView />;
    }

    switch(normalizedView) {
      // Group A
      case '#services/end-to-end-crypto-project-consulting': return <ConsultancyDetailView />;
      case '#services/end-to-end-crypto-project-consulting/crypto-project-consulting': return <CryptoProjectConsultancySubDetailView />;
      case '#services/end-to-end-crypto-project-consulting/idea-and-concept': return <CryptoIdeaConceptConsultancySubDetailView />;
      case '#services/end-to-end-crypto-project-consulting/business-model-and-strategy': return <CryptoBusinessModelStrategySubDetailView />;
      case '#services/end-to-end-crypto-project-consulting/roadmap-and-tokenomics': return <CryptoRoadmapTokenomicsSubDetailView />;
      case '#services/end-to-end-crypto-project-consulting/budget-oriented': return <BudgetOrientedConsultancySubDetailView />;
      case '#services/end-to-end-crypto-project-consulting/management-consulting': return <EndToEndManagementSubDetailView />;
      case '#services/end-to-end-crypto-project-consulting/launch-and-growth': return <LaunchGrowthSubDetailView />;
      case '#services/end-to-end-crypto-project-consulting/digital-marketing': return <DigitalMarketingPromotionSubDetailView />;

      // Group B
      case '#services/token-and-blockchain-development': return <TokenBlockchainDetailView />;
      case '#services/token-and-blockchain-development/token-consulting': return <TokenProjectConsultancySubDetailView />;
      case '#services/token-and-blockchain-development/network-selection': return <BlockchainNetworkSelectionSubDetailView />;
      case '#services/token-and-blockchain-development/smart-contract': return <SmartContractDevelopmentSubDetailView />;
      case '#services/token-and-blockchain-development/tokenomics-design': return <TokenomicsDesignSubDetailView />;
      case '#services/token-and-blockchain-development/whitepaper': return <WhitepaperPreparationSubDetailView />;
      case '#services/token-and-blockchain-development/pitch-deck': return <PitchDeckPreparationSubDetailView />;
      case '#services/token-and-blockchain-development/gtm-planning': return <GtmRoadmapSubDetailView />;
      case '#services/token-and-blockchain-development/audit-preparation': return <AuditPreparationSubDetailView />;

      // Group C
      case '#services/blockchain-and-software-development': return <BlockchainSoftwareDetailView />;
      case '#services/blockchain-development': return <BlockchainDevHeaderDetailView />;
      case '#services/blockchain-and-software-development/smart-contract-dev': return <SmartContractDevV2SubDetailView />;
      case '#services/blockchain-and-software-development/token-nft-contracts': return <TokenNFTContractsSubDetailView />;
      case '#services/blockchain-and-software-development/dapp-development': return <DAppDevelopmentSubDetailView />;
      case '#services/blockchain-and-software-development/dao-infrastructure': return <DAOInfrastructureSubDetailView />;
      case '#services/blockchain-and-software-development/wallet-integration': return <WalletIntegrationSubDetailView />;
      case '#services/web3-platform-software': return <Web3PlatformHeaderDetailView />;
      case '#services/web3-platform-software/website-development': return <Web3WebsiteDevSubDetailView />;
      case '#services/web3-platform-software/custom-dashboards': return <CustomDashboardSubDetailView />;
      case '#services/web3-platform-software/analytics-reporting': return <AnalyticsReportingSubDetailView />;
      case '#services/web3-platform-software/backend-api': return <BackendApiDevSubDetailView />;
      case '#services/app-game-development': return <AppGameHeaderDetailView />;
      case '#services/app-game-development/mobile-app': return <Web3MobileAppSubDetailView />;
      case '#services/app-game-development/telegram-mini-app': return <TelegramBotMiniAppSubDetailView />;
      case '#services/app-game-development/game-development': return <BlockchainGameDevSubDetailView />;
      case '#services/app-game-development/gamefi-p2e': return <GameFiP2ESystemsSubDetailView />;
      case '#services/app-game-development/server-infrastructure': return <ServerInfrastructureSubDetailView />;

      // Group D
      case '#services/token-launch-and-listing': return <TokenListingDetailView />;
      case '#services/token-launch-and-listing/strategy': return <TokenLaunchStrategySubDetailView />;
      case '#services/token-launch-and-listing/dex': return <DexLaunchManagementSubDetailView />;
      case '#services/token-launch-and-listing/cex': return <CexListingConsultancySubDetailView />;
      case '#services/token-launch-and-listing/launchpad': return <LaunchpadPreparationSubDetailView />;
      case '#services/token-launch-and-listing/pre-list-marketing': return <PreListingMarketingSubDetailView />;
      case '#services/token-launch-and-listing/post-list-growth': return <PostListingGrowthSubDetailView />;
      case '#services/token-launch-and-listing/exchange-comm': return <ExchangeCommunicationSubDetailView />;
      case '#services/token-launch-and-listing/docs': return <ListingDocumentationSubDetailView />;

      // Group E
      case '#services/crypto-marketing': return <KriptoMarketingDetailView />;
      case '#services/crypto-marketing/growth': return <Web3GrowthStrategySubDetailView />;
      case '#services/crypto-marketing/performance': return <CryptoPerformanceMarketingSubDetailView />;
      case '#services/crypto-marketing/influencer': return <InfluencerKolMarketingSubDetailView />;
      case '#services/crypto-marketing/pr': return <PrMediaPublicationsSubDetailView />;
      case '#services/crypto-marketing/hype': return <CampaignHypeManagementSubDetailView />;
      case '#services/crypto-marketing/funnel': return <LandingPageFunnelSubDetailView />;
      case '#services/crypto-marketing/analytics': return <AnalyticsKpiReportingSubDetailView />;
      case '#services/crypto-marketing/automation': return <Web3MarketingAutomationSubDetailView />;

      // Group F
      case '#services/community-management': return <SocialCommunityDetailView />;
      case '#services/community-management/twitter': return <XTwitterGrowthSubDetailView />;
      case '#services/community-management/telegram': return <TelegramCommunitySubDetailView />;
      case '#services/community-management/discord': return <DiscordCommunitySubDetailView />;
      case '#services/community-management/mod': return <ModerationSubDetailView />;
      case '#services/community-management/ambassador': return <AmbassadorProgramSubDetailView />;
      case '#services/community-management/engagement': return <EngagementCampaignsSubDetailView />;
      case '#services/community-management/crisis': return <FudCrisisManagementSubDetailView />;
      case '#services/community-management/analytics': return <CommunityAnalyticsSubDetailView />;

      // Group G
      case '#services/content-production': return <ContentProductionDetailView />;
      case '#services/content-production/brand': return <BrandIdentityDesignSubDetailView />;
      case '#services/content-production/ui-ux': return <Web3UiUxDesignSubDetailView />;
      case '#services/content-production/motion': return <MotionExplainerVideoSubDetailView />;
      case '#services/content-production/shorts': return <ShortFormatVideoSubDetailView />;
      case '#services/content-production/meme': return <MemeTrendContentSubDetailView />;
      case '#services/content-production/announcement': return <AnnouncementListingKitsSubDetailView />;
      case '#services/content-production/social-kits': return <SocialMediaVisualPackagesSubDetailView />;

      // Group H
      case '#services/market-making': return <MarketMakingDetailView />;
      case '#services/market-making/strategy': return <MarketMakingStrategySubDetailView />;
      case '#services/market-making/planning': return <LiquidityPlanningSubDetailView />;
      case '#services/market-making/mm-selection': return <MmSelectionSubDetailView />;
      case '#services/market-making/consultancy': return <MmSystemConsultancySubDetailView />;
      case '#services/market-making/bot': return <BotInfrastructureSubDetailView />;
      case '#services/market-making/optim': return <SpreadVolatilitySubDetailView />;
      case '#services/market-making/liquidity': return <CrossPlatformLiquiditySubDetailView />;
      case '#services/market-making/perf': return <MmPerformanceReportingSubDetailView />;

      // Group I
      case '#services/investment-consulting': return <InvestmentFundingDetailView />;
      case '#services/investment-consulting/audit': return <InvestmentReadinessSubDetailView />;
      case '#services/investment-consulting/funding-strategy': return <FundingStrategySubDetailView />;
      case '#services/investment-consulting/tours': return <InvestmentRoundsSubDetailView />;
      case '#services/investment-consulting/research': return <InvestorResearchSubDetailView />;
      case '#services/investment-consulting/deck': return <DataRoomPreparationSubDetailView />;
      case '#services/investment-consulting/valuation': return <ValuationAllocationSubDetailView />;
      case '#services/investment-consulting/network': return <InvestorNetworkSubDetailView />;
      case '#services/investment-consulting/syndicate': return <SyndicateStructuringSubDetailView />;
      case '#services/investment-consulting/relations': return <InvestorRelationsSubDetailView />;

      // Group J
      case '#services/partnerships': return <PartnershipBusinessDetailView />;
      case '#services/partnerships/partners': return <StrategicPartnershipsSubDetailView />;
      case '#services/partnerships/ecosystem': return <EcosystemCollaborationsSubDetailView />;
      case '#services/partnerships/cross': return <CrossMarketingPlanningSubDetailView />;
      case '#services/partnerships/corporate': return <CorporateBusinessDevSubDetailView />;

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