
import React, { useState } from 'react';

const AboutUsView: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '', purpose: '', privacy: false });

  const stats = [
    { value: '40+', label: 'Ödüllü Kampanya', desc: "Stratejik mükemmelliğimiz, 40'tan fazla prestijli sektör ödülüyle tescillendi." },
    { value: '%98', label: 'Müşteri Memnuniyeti', desc: "Müşterilerimizin neredeyse tamamının yüksek düzeyde memnuniyet bildirmesiyle gurur duyuyoruz." },
    { value: '500+', label: 'Başarılı Proje', desc: "Dünya çapında 500'den fazla farklı projeyi başarıyla tamamladık ve hedefleri aştık." },
    { value: '30+', label: 'Ülke', desc: "Küresel erişimimiz 30'dan fazla ülkeye yayılmakta olup, uluslararası çözümler sunmaktayız." }
  ];

  const team = [
    { name: 'Arda Yılmaz', title: 'CEO & Founder', desc: '10 yıllık blockchain strateji deneyimiyle 200+ projenin mimarlığını üstlendi.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Selin Demir', title: 'CMO', desc: 'Global borsalarda 50+ token lansmanının pazarlama operasyonunu yönetti.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
    { name: 'Marcus Chen', title: 'Head of Tech', desc: 'EVM ve Rust mimarilerinde uzman, siber güvenlik odaklı baş mühendis.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Elena Petrova', title: 'Art Director', desc: 'Web3 görsel dilini modern sanatla birleştiren ödüllü tasarımcı.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
    { name: 'Canberk Öz', title: 'Lead Designer', desc: 'Kullanıcı odaklı Web3 UI/UX kurgularında sektör lideri.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
    { name: 'Sophia Loren', title: 'PR Lead', desc: 'Global medya ağları ve Tier-1 haber mecraları arasındaki köprü.', img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2a04?auto=format&fit=crop&q=80&w=400' },
    { name: 'David Smith', title: 'Blockchain Dev', desc: 'Audit standartlarında akıllı kontrat geliştirme uzmanı.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Merve Aktaş', title: 'Community Lead', desc: '500k+ üyeli Telegram/Discord topluluklarının yönetim tecrübesi.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' }
  ];

  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
    "https://cryptologos.cc/logos/polygon-matic-logo.png",
    "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    "https://cryptologos.cc/logos/chainlink-link-logo.png",
    "https://cryptologos.cc/logos/avalanche-avax-logo.png",
    "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    "https://cryptologos.cc/logos/tron-trx-logo.png",
    "https://cryptologos.cc/logos/cardano-ada-logo.png"
  ];

  return (
    <div className="about-page">
      <style>{`
        .about-page { background: #000; color: #fff; width: 100%; min-height: 100vh; position: relative; z-index: 1; }
        .section-padding { padding: 80px 0; }
        .container-xl { max-width: 1280px; margin: 0 auto; padding: 0 40px; width: 100%; position: relative; z-index: 10; }
        
        .h1-style { font-size: 40px !important; font-weight: 700 !important; line-height: 1.2; }
        .h2-style { font-size: 32px !important; font-weight: 700 !important; }
        .h3-style { font-size: 24px !important; font-weight: 600 !important; }
        .h4-style { font-size: 18px !important; font-weight: 600 !important; }
        .p-style { font-size: 16px !important; font-weight: 300 !important; line-height: 1.8; }

        /* 1. Hero */
        .hero-about { position: relative; padding: 200px 0 100px; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; opacity: 0.25; object-fit: cover; z-index: 0; }
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 80px; align-items: center; }
        @media (min-width: 1024px) { .hero-grid { grid-template-columns: 1.2fr 0.8fr; } }
        .hero-bullets { list-style: none; padding: 0; margin: 30px 0; }
        .hero-bullet { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; font-weight: 600 !important; font-size: 15px !important; color: #fff; }
        .hero-bullet span.icon { color: var(--cray-gold); font-size: 20px; }
        .hero-vector { width: 100%; border-radius: 40px; box-shadow: 0 30px 60px rgba(0,0,0,0.8); border: 1px solid rgba(255,177,0,0.15); }

        /* Logo Ticker */
        .ticker-section { padding: 40px 0; background: rgba(255,255,255,0.02); border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); overflow: hidden; white-space: nowrap; position: relative; }
        .ticker-container { display: flex; width: max-content; animation: scroll-right 40s linear infinite; }
        .ticker-logo { height: 40px; margin: 0 50px; filter: grayscale(1) brightness(0.7); opacity: 0.6; transition: 0.3s; object-fit: contain; }
        .ticker-logo:hover { filter: none; opacity: 1; transform: scale(1.1); }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* 2. Mission Vision Section */
        .mv-section { position: relative; background: #000; overflow: hidden; }
        .mv-bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.15; z-index: 0; }
        .mv-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, #000, transparent, #000); z-index: 1; }
        .mv-grid { display: grid; grid-template-columns: 1fr; gap: 40px; margin-top: 50px; max-width: 1000px; margin-left: auto; margin-right: auto; }
        @media (min-width: 768px) { .mv-grid { grid-template-columns: 1fr 1fr; } }
        .mv-card { padding: 50px; border: 1px solid rgba(255,177,0,0.1); border-radius: 30px; background: rgba(10,10,10,0.8); backdrop-filter: blur(10px); text-align: center; }
        .mv-card h3 { color: var(--cray-gold); margin-bottom: 25px; }

        /* 3. Milestones with Visible BG */
        .milestones-section { position: relative; overflow: hidden; background: #000; }
        .milestones-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.25; z-index: 0; }
        .stat-card { background: rgba(10,10,10,0.85); border: 1px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 30px; transition: 0.4s; text-align: center; backdrop-filter: blur(12px); }
        .stat-card:hover { transform: translateY(-10px); border-color: var(--cray-gold); background: rgba(255,177,0,0.05); }
        .stat-val { font-size: 48px !important; font-weight: 800 !important; color: var(--cray-gold); margin-bottom: 10px; display: block; }
        .stat-label { font-size: 18px !important; font-weight: 700 !important; margin-bottom: 15px; display: block; }
        .stat-desc { color: #888; font-size: 14px !important; }

        /* 4. Awards - Clean Black */
        .awards-section { background: #000; }
        .awards-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 40px; }
        @media (max-width: 1024px) { .awards-grid { grid-template-columns: repeat(2, 1fr); } }
        .award-box { background: rgba(15,15,15,1); padding: 30px 15px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05); text-align: center; transition: 0.3s; }
        .award-box:hover { border-color: var(--cray-gold); transform: scale(1.05); }
        .award-title { font-weight: 800 !important; font-size: 14px !important; color: var(--cray-gold); margin-bottom: 5px; display: block; letter-spacing: 1px; }

        /* 5. Conferences Metro Grid */
        .metro-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 160px; gap: 12px; }
        .metro-item { position: relative; overflow: hidden; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); }
        .metro-item img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; }
        .metro-item:hover img { transform: scale(1.1) rotate(1deg); }
        .metro-item:nth-child(1) { grid-column: span 2; grid-row: span 2; }
        .metro-item:nth-child(4) { grid-row: span 2; }

        /* 6. Team Flip Card */
        .team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
        @media (max-width: 1024px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
        .team-card { height: 350px; perspective: 1000px; cursor: pointer; }
        .team-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.8s; transform-style: preserve-3d; }
        .team-card:hover .team-card-inner { transform: rotateY(180deg); }
        .team-front, .team-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 30px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; }
        .team-front { background: #050505; }
        .team-front img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(0.5); transition: 0.5s; }
        .team-card:hover .team-front img { filter: none; }
        .team-back { background: #111; transform: rotateY(180deg); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 25px; text-align: center; border-color: var(--cray-gold); }
        .team-info-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; background: linear-gradient(transparent, rgba(0,0,0,0.9)); }

        /* 7. Global 9-Grid */
        .flag-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr); gap: 15px; height: 100%; }
        .flag-item { border-radius: 15px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); aspect-ratio: 1; }
        .flag-item img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(0.2) brightness(0.9); transition: 0.4s; }
        .flag-item:hover img { filter: none; transform: scale(1.1); }
        .country-dot .dot { width: 10px; height: 10px; border-radius: 50%; }

        /* 8. Form Alignment */
        .form-card-light { background-color: #f7f7f7; border-radius: 40px; padding: 40px; color: #000; box-shadow: 0 40px 80px rgba(0,0,0,0.5); }
        .form-input-about { width: 100%; background: #fff; border: 1px solid #ddd; padding: 14px 18px; border-radius: 12px; color: #000; margin-bottom: 20px; outline: none; transition: 0.3s; }
        .form-input-about:focus { border-color: var(--cray-gold); box-shadow: 0 0 0 4px rgba(255,177,0,0.1); }
      `}</style>

      {/* 1. Hero Section */}
      <section className="hero-about">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" className="hero-bg" alt="About Hero" />
        <div className="container-xl">
          <div className="hero-grid">
            <div>
              <h1 className="h1-style mb-6">Dijital Geleceği Tutkuyla Şekillendiriyoruz</h1>
              <p className="p-style text-zinc-400 mb-8">CRAY Digital, Web3 ve blockchain dünyasında projelerin sadece teknik altyapısını değil, vizyonunu ve topluluk bağını da inşa eden hibrit bir güç merkezidir. Bizim için her proje, dijital dünyada yeni bir dönüm noktasıdır.</p>
              <ul className="hero-bullets">
                <li className="hero-bullet"><span className="icon">✓</span> %100 Uzaktan & Küresel Operasyon Gücü</li>
                <li className="hero-bullet"><span className="icon">✓</span> Web3 Odaklı Stratejik Bakış Açısı</li>
                <li className="hero-bullet"><span className="icon">✓</span> Yaratıcılığı Veriyle Birleştiren Yaklaşım</li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000" className="hero-vector" alt="Web3 Vision" />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Ticker Band */}
      <div className="ticker-section">
        <div className="ticker-container">
          {/* Duplicate for seamless loop */}
          {[...partners, ...partners].map((url, idx) => (
            <img key={idx} src={url} className="ticker-logo" alt={`Partner ${idx + 1}`} />
          ))}
        </div>
      </div>

      {/* 2. Mission & Vision Section */}
      <section className="section-padding mv-section">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" className="mv-bg-img" alt="Network Background" />
        <div className="mv-overlay"></div>
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="h2-style mb-4">Dijital Dünyaya Kişisel Bir Dokunuş</h2>
            <p className="p-style text-zinc-400 max-w-2xl mx-auto">Teknolojinin ruhu olmadığına inanmıyoruz. Bizimle her kod satırı, bir hikayenin parçası haline gelir.</p>
          </div>
          <div className="mv-grid">
            <div className="mv-card">
              <h3 className="h3-style">Misyonumuz</h3>
              <p className="p-style text-zinc-300">Blokzincir teknolojisini ve Web3 vizyonunu erişilebilir kılmak, projelere sadece pazarlama desteği değil, uzun ömürlü bir ekosistem ruhu aşılamak.</p>
            </div>
            <div className="mv-card">
              <h3 className="h3-style">Vizyonumuz</h3>
              <p className="p-style text-zinc-300">Dünyanın en yenilikçi Web3 projelerinin arkasındaki gizli güç olmak ve merkeziyetsiz geleceğin standartlarını bugün belirlemek.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Milestones with BG */}
      <section className="section-padding milestones-section">
        <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2000&auto=format&fit=crop" className="milestones-bg" alt="Data Milestones" />
        <div className="mv-overlay" style={{opacity: 0.85}}></div>
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="h2-style mb-4">Başarımızın Dönüm Noktaları</h2>
            <p className="p-style text-zinc-300">Rakamlar sadece hacmimizi değil, projenize katacağımız disiplini de gösterir.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <span className="stat-val">{s.value}</span>
                <span className="stat-label">{s.label}</span>
                <p className="stat-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Award Winning - Clean Black */}
      <section className="section-padding awards-section">
        <div className="container-xl text-center">
          <h2 className="h2-style mb-4">Küresel Otoriteler Tarafından Onaylı</h2>
          <p className="p-style text-zinc-500 mb-10">Sektörün en prestijli platformları başarımızı tescilledi.</p>
          <div className="awards-grid">
            {['Clutch', 'Hostinger', 'Roundbound', 'DigitalAgencyNet', 'FintechInsider'].map((a, i) => (
              <div key={i} className="award-box">
                <span className="award-title">{a}</span>
                <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">TOP RATED</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Conferences with Metro Grid */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="metro-grid">
              <div className="metro-item"><img src="https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?q=80&w=800" alt="GITEX Global" /></div>
              <div className="metro-item"><img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" alt="Dubai Fintech" /></div>
              <div className="metro-item"><img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800" alt="Crypto Conference" /></div>
              <div className="metro-item"><img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800" alt="Web3 Summit" /></div>
              <div className="metro-item"><img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800" alt="Token 2049" /></div>
              <div className="metro-item"><img src="https://images.unsplash.com/photo-1591115765373-520b7a3d72a6?q=80&w=800" alt="Blockchain Nashville" /></div>
            </div>
            <div>
              <h2 className="h2-style mb-8">Dünya Standartlarında Konferanslarda Aktifiz</h2>
              <p className="p-style text-zinc-400 mb-8">Teknolojinin kalbinin attığı her yerdeyiz. Dubai'den Londra'ya, en prestijli teknoloji zirvelerinde projelerimizi ve vizyonumuzu paylaşıyoruz. Ekibimiz her yıl düzenlenen Token2049, Gitex Global ve Bitcoin Conference gibi dev etkinliklerde aktif rol almaktadır. Projelerimizin başarısını global sahnede perçinliyoruz.</p>
              <div className="space-y-4 mb-10">
                <div className="grid grid-cols-2 gap-4">
                  {['Dubai Fintech Zirvesi', 'Gitex Global', 'Seamless Middle East', 'Token 2049', 'EthCC Paris', 'Bitcoin Nashville'].map(c => (
                    <div key={c} className="flex items-center gap-3 font-bold text-xs text-zinc-300">
                      <div className="w-2 h-2 bg-cray-gold rounded-full"></div> {c}
                    </div>
                  ))}
                </div>
              </div>
              <a href="#booking-section" className="cta-button">Etkinliklerimize Göz Atın</a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Team Section with Flip Cards */}
      <section className="section-padding bg-[#050505]">
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="h2-style mb-4">Başarımızın Arkasındaki Beyin Takımı</h2>
            <p className="p-style text-zinc-500">Blokzincir dünyasında her uzmanlık ayrı bir sanattır. Biz bu sanatçıları tek bir çatı altında topladık.</p>
          </div>
          <div className="team-grid">
            {team.map((t, i) => (
              <div key={i} className="team-card">
                <div className="team-card-inner">
                  <div className="team-front">
                    <img src={t.img} alt={t.name} />
                    <div className="team-info-overlay">
                      <h4 className="h4-style text-white mb-1">{t.name}</h4>
                      <span className="text-cray-gold font-black uppercase text-[10px] tracking-widest">{t.title}</span>
                    </div>
                  </div>
                  <div className="team-back">
                    <h4 className="h4-style text-cray-gold mb-4">{t.name}</h4>
                    <p className="text-white text-xs font-semibold leading-relaxed">{t.desc}</p>
                    <div className="mt-6 flex gap-3">
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs">𝕏</div>
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs">in</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Global Presence with 9 Flags Grid */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="h2-style mb-8">Dünyanın Her Yerinde Çalışıyoruz</h2>
              <p className="p-style text-zinc-400 mb-12">Ekibimiz tamamen uzaktan çalışıyor, bu sayede dünyanın her yerinden en iyi uzmanları işe alabiliyoruz. Fiziksel sınırlara inanmıyoruz; vizyonumuz küresel, operasyonumuz ise sınırsızdır.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <div className="country-dot flex items-center gap-3 mb-6"><div className="dot" style={{background: '#ff0055', boxShadow: '0 0 15px #ff0055'}}></div> <span className="font-bold text-xs uppercase text-white">Dubai</span></div>
                  <div className="country-dot flex items-center gap-3 mb-6"><div className="dot" style={{background: '#00d4ff', boxShadow: '0 0 15px #00d4ff'}}></div> <span className="font-bold text-xs uppercase text-white">Londra</span></div>
                  <div className="country-dot flex items-center gap-3 mb-6"><div className="dot" style={{background: '#77ff00', boxShadow: '0 0 15px #77ff00'}}></div> <span className="font-bold text-xs uppercase text-white">Singapur</span></div>
                </div>
                <div>
                  <div className="country-dot flex items-center gap-3 mb-6"><div className="dot" style={{background: '#ffaa00', boxShadow: '0 0 15px #ffaa00'}}></div> <span className="font-bold text-xs uppercase text-white">İstanbul</span></div>
                  <div className="country-dot flex items-center gap-3 mb-6"><div className="dot" style={{background: '#ff00ff', boxShadow: '0 0 15px #ff00ff'}}></div> <span className="font-bold text-xs uppercase text-white">Berlin</span></div>
                  <div className="country-dot flex items-center gap-3 mb-6"><div className="dot" style={{background: '#00ffcc', boxShadow: '0 0 15px #00ffcc'}}></div> <span className="font-bold text-xs uppercase text-white">New York</span></div>
                </div>
                <div>
                  <div className="country-dot flex items-center gap-3 mb-6"><div className="dot" style={{background: '#ffcc00', boxShadow: '0 0 15px #ffcc00'}}></div> <span className="font-bold text-xs uppercase text-white">Tokyo</span></div>
                  <div className="country-dot flex items-center gap-3 mb-6"><div className="dot" style={{background: '#ffffff', boxShadow: '0 0 15px #ffffff'}}></div> <span className="font-bold text-xs uppercase text-white">Lizbon</span></div>
                  <div className="country-dot flex items-center gap-3 mb-6"><div className="dot" style={{background: '#ff5500', boxShadow: '0 0 15px #ff5500'}}></div> <span className="font-bold text-xs uppercase text-white">Sidney</span></div>
                </div>
              </div>
            </div>
            <div className="relative h-[480px]">
              <div className="flag-grid" style={{ gridTemplateRows: 'repeat(3, 1fr)', gap: '15px' }}>
                {[
                  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=400",
                  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=400",
                  "https://images.unsplash.com/photo-1525625239513-99733141b2c6?q=80&w=400",
                  "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=400",
                  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=400",
                  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=400",
                  "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=400",
                  "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=400",
                  "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=400"
                ].map((img, idx) => (
                  <div key={idx} className="flag-item">
                    <img src={img} alt="Global Presence" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact & Form Section - Vertically Centered */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col justify-center">
              <h2 className="h2-style mb-8">Pazarlama Stratejilerinizi Bir Üst Seviyeye Taşımaya Hazır Mısınız?</h2>
              <p className="p-style text-zinc-400 mb-8">CRAY Digital ile çalışmaya başlamak, projenizin büyüme hızını 15 kat artırabilir. Web3 ekosistemindeki derin tecrübemizi projeniz için bir kaldıraç etkisine dönüştürüyoruz.</p>
              <p className="p-style text-zinc-400 mb-12">Her proje için özel bir büyüme mühendisi, içerik stratejisti ve topluluk yöneticisinden oluşan bir "Büyüme Timi" atıyoruz. Bu sayede sadece reklam değil, bütünsel bir başarı mimarisi inşa ediyoruz. On-chain verilerle desteklenen stratejilerimizle bütçenizi en verimli şekilde kullanarak holder tabanınızı genişletiyoruz.</p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-cray-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">🚀</div>
                  <div>
                    <h4 className="h4-style text-white mb-2">CRAY Nasıl Çalışır?</h4>
                    <p className="text-sm text-zinc-500">Veriye dayalı, çevik ve sonuç odaklı bir operasyonel süreç yürütüyoruz. Her adımımız on-chain verilerle doğrulanır ve raporlanır.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-cray-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">💎</div>
                  <div>
                    <h4 className="h4-style text-white mb-2">Maksimum Verimlilik</h4>
                    <p className="text-sm text-zinc-500">Geleneksel ajans modellerinden 15 kat daha hızlı işe alım ve uygulama yaparak bütçenizi koruyoruz.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-cray-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">📈</div>
                  <div>
                    <h4 className="h4-style text-white mb-2">Esnek Çözümler</h4>
                    <p className="text-sm text-zinc-500">İhtiyacınıza en uygun bütçeyle en yüksek verimi almanızı sağlayan modüler abonelik planlarımızla büyümenizi yönetiyoruz.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-card-light">
              <h3 className="h3-style mb-8 text-center" style={{ color: '#000' }}>Bizimle Bir Görüşme Ayarlayın</h3>
              <form onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label-about">Adınız*</label>
                    <input type="text" className="form-input-about" required />
                  </div>
                  <div>
                    <label className="form-label-about">Soyadınız</label>
                    <input type="text" className="form-input-about" />
                  </div>
                </div>
                <div>
                  <label className="form-label-about">E-Mail Adresiniz*</label>
                  <input type="email" className="form-input-about" required />
                </div>
                <div>
                  <label className="form-label-about">Telefon Numaranız</label>
                  <div className="flex gap-2">
                    <span className="bg-white border border-ddd p-4 rounded-xl text-zinc-500 font-bold mb-5">+90</span>
                    <input type="tel" className="form-input-about" />
                  </div>
                </div>
                <div>
                  <label className="form-label-about">Mesajınız</label>
                  <textarea placeholder="Görüşme amacımız hakkında bilgi veriniz?" className="form-input-about h-32 resize-none"></textarea>
                </div>
                
                <label className="flex gap-3 cursor-pointer items-start mb-10 group">
                  <input type="checkbox" className="mt-1 accent-cray-gold w-4 h-4 flex-shrink-0" required />
                  <span className="text-[11px] text-zinc-500 leading-tight">
                    Bu kutucuğu tıklayarak, Gizlilik Politikamıza uygun olarak Cray'dan iletişim almayı kabul ediyorsunuz.
                  </span>
                </label>

                <button type="submit" className="cta-button w-full py-6 text-sm font-black tracking-widest">HEMEN GÖRÜŞME BAŞLAT</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div style={{ padding: '60px 0', textAlign: 'center', borderTop: '1px solid #111' }}>
        <button onClick={() => window.location.hash = ''} className="p-style" style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '12px 40px', borderRadius: '15px', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 700 }}>Ana Sayfaya Dön</button>
      </div>
    </div>
  );
};

export default AboutUsView;
