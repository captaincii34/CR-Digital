import React, { useState } from 'react';

type WorkCategory = 'All' | 'AI' | 'Token' | 'Gaming' | 'NFT' | 'Blockchain' | 'Crypto' | 'News';

interface WorkItem {
  id: number;
  slug: string;
  title: string;
  categories: WorkCategory[];
  image: string;
  desc: string;
}

const WorksView: React.FC = () => {
  const [filter, setFilter] = useState<WorkCategory>('All');

  const works: WorkItem[] = [
    { 
      id: 1, 
      slug: 'aixovia',
      title: 'AIXOVIA', 
      categories: ['AI', 'Token'], 
      image: '/gorsel/0.png', 
      desc: 'Dünyanın ilk tam otonom AI agent mining altyapısı ve token ekosistemi.' 
    },
    { 
      id: 2, 
      slug: 'aixovia-play',
      title: 'AIXOVIA Play', 
      categories: ['AI', 'Gaming'], 
      image: '/gorsel/1.png', 
      desc: 'AI destekli oyun deneyimi ve on-chain oyun mekanikleri.' 
    },
    { 
      id: 3, 
      slug: 'bccoin',
      title: 'BCCOIN', 
      categories: ['AI', 'Crypto'], 
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000', 
      desc: 'Yüksek performanslı kripto ekosistemi için stratejik marka yükseltmesi.' 
    },
    { 
      id: 4, 
      slug: 'curva-nft',
      title: 'Curva NFT', 
      categories: ['NFT'], 
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000', 
      desc: 'Küresel spor taraftarları için özel dijital koleksiyon serisi.' 
    },
    { 
      id: 5, 
      slug: 'ecom',
      title: 'eCOM', 
      categories: ['Gaming'], 
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000', 
      desc: 'Birleşik oyun merkezi ve topluluk büyüme stratejisi.' 
    },
    { 
      id: 6, 
      slug: 'ftn',
      title: 'FTN', 
      categories: ['Token'], 
      image: 'https://images.unsplash.com/photo-1621416848440-276911c47f35?q=80&w=2000', 
      desc: 'Fast Token ekosistemi lansmanı ve küresel pazarlama erişimi.' 
    },
    { 
      id: 7, 
      slug: 'helpsteps',
      title: 'HelpSteps', 
      categories: ['Token'], 
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000', 
      desc: 'Sosyal etkinin ve hareket odaklı ödüllerin tokenizasyonu.' 
    },
    { 
      id: 8, 
      slug: 'nexum',
      title: 'Nexum', 
      categories: ['Token'], 
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000', 
      desc: 'Yeni nesil denizcilik ve lojistik finansmanı token stratejisi.' 
    },
    { 
      id: 9, 
      slug: 'nova',
      title: 'Nova', 
      categories: ['Blockchain'], 
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000', 
      desc: 'Çekirdek blokzincir altyapısı ve teknik veri yönetimi.' 
    },
    { 
      id: 10, 
      slug: 'snapmuse',
      title: 'Snapmuse', 
      categories: ['Token'], 
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000', 
      desc: 'Platform tokenomics ve içerik üreticisi ekonomisi entegrasyonu.' 
    },
    { 
      id: 11, 
      slug: 'refplus',
      title: 'RefPlus', 
      categories: ['Blockchain'], 
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000', 
      desc: 'Referans tabanlı blokzincir ölçeklendirme ve node büyüme protokolleri.' 
    },
    { 
      id: 12, 
      slug: 'the-crypt',
      title: 'The Crypt', 
      categories: ['News'], 
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000', 
      desc: 'Premium kripto haber merkezi ve piyasa duyarlılık analizi.' 
    }
  ];

  const filteredWorks = filter === 'All' 
    ? works 
    : works.filter(w => w.categories.includes(filter));

  const filterCategories: WorkCategory[] = ['All', 'AI', 'Token', 'Gaming', 'NFT', 'Blockchain', 'Crypto', 'News'];

  const handleWorkClick = (slug: string) => {
    window.location.hash = `works/${slug}`;
  };

  return (
    <div className="works-page">
      <style>{`
        .works-page { background: #000; color: #fff; min-height: 100vh; padding-top: 160px; padding-bottom: 100px; }
        .container-xl { max-width: 1400px; margin: 0 auto; padding: 0 40px; }
        
        .filter-bar { display: flex; justify-content: center; gap: 8px; margin-bottom: 60px; flex-wrap: wrap; }
        .filter-btn { 
          padding: 10px 20px; 
          border-radius: 12px; 
          border: 1px solid rgba(255,255,255,0.08); 
          background: rgba(255,255,255,0.03); 
          color: #777; 
          font-weight: 700 !important; 
          font-size: 11px !important; 
          text-transform: uppercase; 
          letter-spacing: 1px; 
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
          cursor: pointer;
        }
        .filter-btn:hover, .filter-btn.active { border-color: var(--cray-gold); color: var(--cray-gold); background: rgba(255,177,0,0.1); transform: translateY(-2px); }

        .works-grid { 
          display: grid; 
          grid-template-columns: repeat(1, 1fr); 
          gap: 30px; 
        }
        @media (min-width: 768px) { .works-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1200px) { .works-grid { grid-template-columns: repeat(3, 1fr); } }

        .work-card { 
          position: relative; 
          border-radius: 32px; 
          overflow: hidden; 
          height: 480px; 
          background: #0a0a0a; 
          border: 1px solid rgba(255,255,255,0.05);
          cursor: pointer;
          transition: transform 0.3s;
        }
        .work-card:hover { transform: translateY(-5px); }
        .work-card img { width: 100%; height: 100%; object-fit: cover; transition: 0.8s cubic-bezier(0.4, 0, 0.2, 1); filter: brightness(0.7); }
        .work-card:hover img { transform: scale(1.08); filter: brightness(0.9); }

        .work-overlay { 
          position: absolute; 
          inset: 0; 
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 100%); 
          display: flex; 
          flex-direction: column; 
          justify-content: flex-end; 
          padding: 40px; 
          opacity: 1;
          transition: 0.4s;
        }

        .tag-group { display: flex; gap: 8px; margin-bottom: 12px; }
        .work-tag { 
          color: var(--cray-gold); 
          font-weight: 800 !important; 
          font-size: 9px !important; 
          text-transform: uppercase; 
          letter-spacing: 1.