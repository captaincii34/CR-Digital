import React, { useState } from 'react';

type Step = 'calendar' | 'time' | 'form';

const monthsTR = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

const timeZones = [
  "Türkiye Saati (GMT+3)",
  "Batı Avrupa Saati (GMT+0)",
  "Merkezi Avrupa Saati (GMT+1)",
  "Doğu Avrupa Saati (GMT+2)",
  "Doğu Standart Saati (EST, GMT-5)",
  "Pasifik Standart Saati (PST, GMT-8)"
];

const BookingSection: React.FC = () => {
  const [step, setStep] = useState<Step>('calendar');
  const [selectedDate, setSelectedDate] = useState<{day: number, month: number, year: number} | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Takvim Navigasyonu
  const [currMonth, setCurrMonth] = useState(new Date().getMonth());
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  
  // Saat Dilimi Accordion
  const [tzOpen, setTzOpen] = useState(false);
  const [selectedTz, setSelectedTz] = useState(timeZones[0]);

  const times = ["09:00", "09:30", "10:00", "10:30", "11:00", "14:00", "14:30", "15:00", "16:00", "17:30"];

  // Ayın gün sayısını ve başlangıç gününü hesapla
  const daysInMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(); // 0: Paz, 1: Pzt...
  const emptyDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Pazartesi başlangıçlı grid için

  const handleDateSelect = (day: number) => {
    // Örnek kısıtlama: Sadece bugünden sonrasını seçtir (basitleştirilmiş)
    setSelectedDate({ day, month: currMonth, year: currYear });
    setStep('time');
  };

  const nextMonth = () => {
    if (currYear === 2025 && currMonth === 11) return; // 2025 sonu sınırı
    if (currMonth === 11) {
      setCurrMonth(0);
      setCurrYear(currYear + 1);
    } else {
      setCurrMonth(currMonth + 1);
    }
  };

  const prevMonth = () => {
    const now = new Date();
    if (currYear === now.getFullYear() && currMonth === now.getMonth()) return; // Geçmişe gitme
    if (currMonth === 0) {
      setCurrMonth(11);
      setCurrYear(currYear - 1);
    } else {
      setCurrMonth(currMonth - 1);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('form');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  const SummaryContent = () => (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <p className="text-zinc-500 font-bold text-sm mb-1">Joseph A.</p>
        <h2 className="text-2xl font-extrabold text-white leading-tight">20 Dakikalık Keşif Görüşmesi</h2>
      </div>
      
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3 text-zinc-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span className="text-sm font-semibold">20 dk</span>
        </div>
        <div className="flex items-center gap-3 text-zinc-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
          <span className="text-sm font-semibold">Konferans detayları onay sonrası iletilecektir.</span>
        </div>
        {(selectedDate && selectedTime) && (
          <div className="flex items-center gap-3 text-cray-gold animate-in fade-in slide-in-from-left-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span className="text-sm font-bold">{selectedTime}, {selectedDate.day} {monthsTR[selectedDate.month]} {selectedDate.year}</span>
          </div>
        )}
        <div className="flex items-center gap-3 text-zinc-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          <span className="text-sm font-semibold">{selectedTz}</span>
        </div>
      </div>

      <div className="text-zinc-400 text-sm leading-relaxed mb-auto">
        CRAY Digital ile yapacağınız bu kısa tanıtım görüşmesinde, hedeflerinize ve amaçlarınıza dayanarak işletmeniz için doğru ortak olup olmadığımızı belirleyeceğiz. Hızlı bir soru-cevap süreciyle işinizi ve vizyonunuzu anlayacağız. Görüşme sonunda, hedefleriniz uzmanlık alanımıza giriyorsa en iyi ilerleme yolunu birlikte netleştireceğiz.
      </div>

      <div className="mt-8 pt-6 border-t border-white/5">
        <button className="text-cray-gold text-xs font-bold hover:underline">Çerez ayarları</button>
      </div>
    </div>
  );

  if (submitted) {
    return (
      <section className="section-padding bg-[#0a0a0a] text-center">
        <div className="container-xl">
          <div className="p-16 rounded-[40px] border border-cray-gold/20 bg-zinc-900/40 backdrop-blur-2xl max-w-2xl mx-auto shadow-2xl">
            <div className="w-20 h-20 bg-cray-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,177,0,0.3)]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <h2 className="text-3xl font-black text-white mb-4">Harika! Randevunuz Alındı.</h2>
            <p className="text-zinc-400 mb-10">Toplantı davetiyesi ve takvim kaydı e-posta adresinize gönderildi. Sizinle tanışmayı dört gözle bekliyoruz.</p>
            <button onClick={() => { setStep('calendar'); setSelectedDate(null); setSelectedTime(null); setSubmitted(false); }} className="cta-button">Başka Bir Randevu Al</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking-section" className="section-padding bg-[#0a0a0a]">
      <style>{`
        .booking-card { 
          background: #111113; 
          border: 1px solid rgba(255,255,255,0.06); 
          border-radius: 24px; 
          overflow: hidden; 
          display: flex;
          min-height: 600px;
          max-width: 1060px;
          margin: 60px auto;
          box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5);
        }
        
        .card-left { width: 400px; padding: 48px; border-right: 1px solid rgba(255,255,255,0.06); background: #111113; }
        .card-right { flex: 1; padding: 48px; background: #161618; position: relative; }
        
        @media (max-width: 1024px) {
          .booking-card { flex-direction: column; max-width: 600px; }
          .card-left { width: 100%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 32px; }
          .card-right { padding: 32px; }
        }

        .calendar-nav { display: flex; align-items: center; justify-content: center; gap: 24px; margin-bottom: 30px; }
        .nav-arrow { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid #333; color: #888; transition: 0.2s; }
        .nav-arrow:hover:not(:disabled) { border-color: var(--cray-gold); color: #fff; background: rgba(255,177,0,0.1); }
        .nav-arrow:disabled { opacity: 0.2; cursor: default; }

        .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
        .weekday-header { text-align: center; font-size: 11px; font-weight: 800; color: #555; text-transform: uppercase; padding-bottom: 15px; letter-spacing: 1px; }
        .day-cell { 
          aspect-ratio: 1; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          border-radius: 50%; 
          cursor: pointer; 
          font-weight: 700; 
          font-size: 14px;
          transition: 0.2s;
          color: #fff;
        }
        .day-cell:hover:not(.disabled) { background: rgba(255,177,0,0.15); color: var(--cray-gold); }
        .day-cell.active { background: var(--cray-gold) !important; color: #000 !important; }
        .day-cell.disabled { color: #333; cursor: default; }
        .day-cell.available { color: #4da6ff; background: rgba(77,166,255,0.05); }

        .time-selector { display: flex; flex-direction: column; gap: 10px; max-height: 400px; overflow-y: auto; padding-right: 10px; }
        .time-btn { width: 100%; padding: 16px; border: 1px solid rgba(77,166,255,0.3); border-radius: 8px; color: #4da6ff; font-weight: 800; transition: 0.2s; background: transparent; }
        .time-btn:hover { background: #4da6ff; color: #fff; border-color: #4da6ff; }

        .form-label { display: block; font-size: 14px !important; font-weight: 700 !important; color: #fff; margin-bottom: 10px; }
        .form-label span { color: #ef4444; margin-left: 2px; }
        .form-input-custom { width: 100%; background: #000; border: 1px solid #333; border-radius: 12px; padding: 14px 18px; color: #fff; transition: 0.3s; margin-bottom: 20px; }
        .form-input-custom:focus { border-color: var(--cray-gold); outline: none; }
        
        .tz-accordion { border: 1px solid #333; border-radius: 12px; margin-top: 10px; overflow: hidden; background: #111; }
        .tz-item { padding: 12px 16px; font-size: 13px; font-weight: 600; cursor: pointer; border-bottom: 1px solid #222; }
        .tz-item:hover { background: rgba(255,177,0,0.1); color: var(--cray-gold); }
        
        .powered-by { position: absolute; top: 0; right: 0; background: #333; color: #fff; font-size: 9px; padding: 4px 15px; transform: rotate(45deg) translate(25px, -15px); width: 120px; text-align: center; font-weight: 800; }
      `}</style>

      <div className="container-xl">
        <div className="text-center mb-16">
          <h2 className="h2-style mb-4">Başarıya Birlikte Ulaşalım</h2>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Joseph İle 20 Dakikalık Ücretsiz Görüşme</p>
        </div>

        <div className="booking-card">
          {/* Sol Panel */}
          <div className="card-left">
            {step === 'form' && (
              <button onClick={() => setStep('calendar')} className="text-cray-gold mb-8 flex items-center gap-2 font-bold hover:opacity-80 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
                Geri Dön
              </button>
            )}
            <SummaryContent />
          </div>

          {/* Sağ Panel */}
          <div className="card-right">
            <div className="powered-by">POWERED BY CRAY</div>
            
            {step === 'calendar' || step === 'time' ? (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-xl font-black text-white mb-10">Bir Tarih ve Saat Seçin</h3>
                
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="flex-1">
                    <div className="calendar-nav">
                      <button onClick={prevMonth} className="nav-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg></button>
                      <span className="text-lg font-extrabold text-white min-w-[140px] text-center">{monthsTR[currMonth]} {currYear}</span>
                      <button onClick={nextMonth} className="nav-arrow" disabled={currYear === 2025 && currMonth === 11}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg></button>
                    </div>

                    <div className="calendar-grid">
                      {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map(w => (
                        <div key={w} className="weekday-header">{w}</div>
                      ))}
                      {Array.from({ length: emptyDays }).map((_, i) => (
                        <div key={`empty-${i}`} className="day-cell disabled" />
                      ))}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const d = i + 1;
                        const isAvailable = true; // Dinamik müsaitlik kurgulanabilir
                        const isActive = selectedDate?.day === d && selectedDate?.month === currMonth && selectedDate?.year === currYear;
                        return (
                          <div 
                            key={d} 
                            onClick={() => isAvailable && handleDateSelect(d)}
                            className={`day-cell ${isAvailable ? 'available' : 'disabled'} ${isActive ? 'active' : ''}`}
                          >
                            {d}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-12 relative">
                      <p className="text-xs font-bold text-zinc-500 mb-2">Saat Dilimi</p>
                      <div 
                        onClick={() => setTzOpen(!tzOpen)}
                        className="flex items-center justify-between gap-2 text-white font-bold text-sm cursor-pointer hover:text-cray-gold transition-colors p-3 border border-zinc-800 rounded-xl bg-black/30"
                      >
                        <div className="flex items-center gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                          {selectedTz}
                        </div>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ transform: tzOpen ? 'rotate(180deg)' : '' }}><path d="M6 9l6 6 6-6"/></svg>
                      </div>
                      
                      {tzOpen && (
                        <div className="tz-accordion animate-in slide-in-from-top-2 fade-in duration-200">
                          {timeZones.map(tz => (
                            <div key={tz} onClick={() => { setSelectedTz(tz); setTzOpen(false); }} className="tz-item">
                              {tz}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {step === 'time' && (
                    <div className="w-full md:w-48 animate-in slide-in-from-right-4 fade-in duration-300">
                      <p className="text-zinc-400 font-bold text-sm mb-6">{selectedDate?.day} {monthsTR[selectedDate!.month]}</p>
                      <div className="time-selector no-scrollbar">
                        {times.map(t => (
                          <button key={t} onClick={() => handleTimeSelect(t)} className="time-btn">
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full overflow-y-auto pr-4 no-scrollbar">
                <h3 className="text-xl font-black text-white mb-8">Detayları Girin</h3>
                <form onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <div>
                      <label className="form-label">İsim <span>*</span></label>
                      <input type="text" className="form-input-custom" placeholder="Adınız Soyadınız" required />
                    </div>
                    <div>
                      <label className="form-label">E-posta <span>*</span></label>
                      <input type="email" className="form-input-custom" placeholder="ornek@mail.com" required />
                    </div>
                  </div>

                  <div className="mb-8">
                    <button type="button" className="text-cray-gold text-xs font-black border border-cray-gold/30 px-5 py-2.5 rounded-full hover:bg-cray-gold/10 transition-colors">+ Misafir Ekle</button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <div>
                      <label className="form-label">Proje Adı Nedir? <span>*</span></label>
                      <input type="text" className="form-input-custom" required />
                    </div>
                    <div>
                      <label className="form-label">Resmi Proje Web Sitesi Linki <span>*</span></label>
                      <input type="url" className="form-input-custom" placeholder="https://..." required />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="form-label">Telegram Kullanıcı Adınız <span>*</span></label>
                    <input type="text" className="form-input-custom" placeholder="@kullaniciadi" required />
                  </div>

                  <div className="mb-6">
                    <label className="form-label">Projedeki Rolünüz Nedir? <span>*</span></label>
                    <select className="form-input-custom" required>
                      <option value="">Seçiniz</option>
                      <option value="founder">Kurucu / CEO</option>
                      <option value="marketing">Pazarlama Ekibi</option>
                      <option value="agency">Ajans / Yüklenici</option>
                      <option value="community">Topluluk Üyesi</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="form-label">Pazarlama Hedefinizi En İyi Hangisi Tanımlar? <span>*</span></label>
                    <select className="form-input-custom" required>
                      <option value="">Seçiniz</option>
                      <option value="launch">Token Lansmanı</option>
                      <option value="kol">Yatırımcı / KOL Toplama</option>
                      <option value="social">Sosyal Medya İvmesi</option>
                      <option value="brand">Marka İnşası</option>
                      <option value="strategy">Strateji Oluşturma</option>
                      <option value="user">Kullanıcı Edinimi</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="form-label">Projeniz Nasıl Fonlanıyor? <span>*</span></label>
                    <select className="form-input-custom" required>
                      <option value="">Seçiniz</option>
                      <option value="private">Özel Yatırımcılar</option>
                      <option value="fundraising">Token Satışı (Fundraising)</option>
                      <option value="public">Halka Açık / Borsada İşlem Görüyor</option>
                      <option value="bootstrapped">Özsermaye (Bootstrapped)</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="form-label">Aylık Pazarlama Bütçeniz Nedir? <span>*</span></label>
                    <select className="form-input-custom" required>
                      <option value="">Seçiniz</option>
                      <option value="u5">5.000$ Altı</option>
                      <option value="5-15">5.000$ - 15.000$</option>
                      <option value="15-25">15.000$ - 25.000$</option>
                      <option value="25-50">25.000$ - 50.000$</option>
                      <option value="50-100">50.000$ - 100.000$</option>
                      <option value="o100">100.000$ Üstü</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="form-label">CRAY Digital'i Nasıl Buldunuz? <span>*</span></label>
                    <select className="form-input-custom" required>
                      <option value="">Seçiniz</option>
                      <option value="referral">Referans</option>
                      <option value="google">Google</option>
                      <option value="social">Sosyal Medya</option>
                      <option value="clutch">Clutch</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>

                  <div className="mt-8 p-6 border border-zinc-800 rounded-2xl bg-black/40">
                    <label className="flex gap-4 cursor-pointer group">
                      <input type="checkbox" className="mt-1 accent-cray-gold w-5 h-5 flex-shrink-0" required />
                      <span className="text-sm text-zinc-300 leading-relaxed font-bold group-hover:text-white transition-colors">
                        Görüşmede proje için karar verici (Decision Maker) bir yetkilinin hazır bulunacağını onaylıyorum. Karar verici biri olmadan bu görüşmenin gerçekleştirilemeyeceğini anlıyorum. *
                      </span>
                    </label>
                  </div>

                  <button type="submit" disabled={loading} className="cta-button w-full mt-10 py-6 text-lg tracking-wider">
                    {loading ? 'GÖNDERİLİYOR...' : 'RANDEVUYU TAMAMLA'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;