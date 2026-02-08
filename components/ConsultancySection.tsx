
import React, { useState } from 'react';
import { evaluateProject } from '../services/geminiService';

const ConsultancySection: React.FC = () => {
  const [status, setStatus] = useState('');
  const [goal, setGoal] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await evaluateProject(status, goal);
    setAiResult(result);
    setLoading(false);
  };

  return (
    <section id="section1" className="relative py-20 overflow-hidden bg-black text-white min-h-[600px]">
      <img src="https://picsum.photos/id/183/1920/1080" alt="Consultancy Background" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/65 z-[1]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black z-[2]"></div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              A'dan Z'ye Danışmanlık
            </h1>
            <h2 className="text-cray-gold text-3xl font-semibold mb-2">Marketing ve Büyüme</h2>
            <h2 className="text-cray-gold text-3xl font-semibold mb-6">ve 360° Çözümler</h2>

            <p className="text-lg md:text-xl font-light mb-8 max-w-2xl">
              Bir kripto projesini hayata geçirmek, büyütmek ve sürdürülebilir hale getirmek için ihtiyacınız olan tüm teknik, stratejik ve operasyonel süreçleri tek çatı altında sunuyoruz.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <a href="#" className="bg-cray-gold text-black px-8 py-4 rounded-lg font-bold text-center transition-all duration-300 hover:scale-105 shadow-[0_4px_12px_rgba(255,177,0,0.3)] md:w-fit">
                Yeni Kripto Projesi Başlatmak İstiyorum
              </a>
              <a href="#" className="border border-cray-gold/30 text-cray-gold px-8 py-4 rounded-lg font-bold text-center transition-all duration-300 hover:bg-cray-gold/10 md:w-fit">
                Mevcut Projem Var, Geliştirmek İstiyorum
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-cray-gold">✓</span> NDA & Gizlilik
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cray-gold">✓</span> Web3 Odaklı Uzmanlık
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cray-gold">✓</span> Global Standartlarda Süreçler
              </div>
            </div>
          </div>

          <div className="bg-[#f7f7f7] rounded-xl p-8 shadow-2xl">
            <h2 className="text-black text-2xl font-bold mb-6 whitespace-nowrap">Ücretsiz Ön Değerlendirme Al</h2>
            
            {aiResult ? (
              <div className="text-black animate-fade-in">
                <p className="font-bold text-cray-gold mb-2">Yapay Zeka Analizi:</p>
                <p className="mb-4 italic">"{aiResult.summary}"</p>
                <ul className="list-disc pl-5 mb-4 text-sm">
                  {aiResult.opportunities.map((o: string, i: number) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
                <div className="bg-cray-gold/20 p-3 rounded text-sm font-medium mb-6">
                  {aiResult.nextStep}
                </div>
                <button 
                  onClick={() => setAiResult(null)}
                  className="w-full border border-gray-300 py-2 rounded font-bold hover:bg-gray-100 transition-colors"
                >
                  Yeniden Analiz Et
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Proje Durumu</label>
                  <select 
                    className="w-full bg-white border border-gray-300 rounded-lg text-black px-4 py-3 focus:outline-none focus:border-cray-gold"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  >
                    <option value="">Seçiniz</option>
                    <option value="yeni">Yeni proje</option>
                    <option value="mevcut">Mevcut proje</option>
                    <option value="yatirim">Yatırım aşaması</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kısa Hedef Açıklaması</label>
                  <textarea 
                    className="w-full bg-white border border-gray-300 rounded-lg text-black px-4 py-3 focus:outline-none focus:border-cray-gold resize-none"
                    rows={3}
                    placeholder="Ne yapmak istiyorsunuz?"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-posta / Telegram</label>
                  <input 
                    type="text"
                    className="w-full bg-white border border-gray-300 rounded-lg text-black px-4 py-3 focus:outline-none focus:border-cray-gold"
                    placeholder="İletişim bilginiz"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-cray-gold text-black py-4 rounded-lg font-bold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
                >
                  {loading ? 'ANALİZ EDİLİYOR...' : 'GÖNDER'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultancySection;
