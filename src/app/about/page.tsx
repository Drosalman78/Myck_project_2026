import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatFAB from '@/components/ChatFAB';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Brand Hero */}
      <section className="pt-40 pb-20 px-[5%] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.03)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-7xl font-heading mb-8 italic">Секрет, який об'єднує</h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-3xl mx-auto">
            Ми створили «Секрет Казанови» не просто як продукт, а як інструмент для кожного чоловіка, який цінує якість життя, впевненість та щирість у стосунках.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-[5%]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium Quality" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
          
          <div>
            <h2 className="text-3xl font-heading mb-8 italic">Наша філософія</h2>
            <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
              <p>
                У сучасному світі стрес та швидкий темп життя часто забирають у нас найцінніше — моменти справжньої близькості. Наша місія — повернути вам контроль над ситуацією за допомогою сили природи.
              </p>
              <p>
                Ми віримо, що чоловіча сила не повинна залежати від хімічних стимуляторів з їхніми побічними ефектами. Справжня впевненість приходить тоді, коли ваш організм працює в гармонії з натуральними компонентами.
              </p>
              <div className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-0.5 bg-accent"></div>
                  <span className="text-white font-bold tracking-widest uppercase text-sm">Тільки натурально</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-accent"></div>
                  <span className="text-white font-bold tracking-widest uppercase text-sm">Безпечно та анонімно</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 px-[5%] bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="glass-effect p-10 border-white/5">
              <div className="text-4xl mb-6">💎</div>
              <h4 className="text-xl font-bold mb-4">Безкомпромісна якість</h4>
              <p className="text-text-secondary text-sm leading-relaxed">Ми використовуємо лише сертифіковану сировину з екологічно чистих регіонів Азії та Амазонії.</p>
            </div>
            <div className="glass-effect p-10 border-white/5">
              <div className="text-4xl mb-6">🛡️</div>
              <h4 className="text-xl font-bold mb-4">Повна приватність</h4>
              <p className="text-text-secondary text-sm leading-relaxed">Ваша таємниця — наш пріоритет. Від упаковки до накладної — все максимально нейтрально.</p>
            </div>
            <div className="glass-effect p-10 border-white/5">
              <div className="text-4xl mb-6">🤝</div>
              <h4 className="text-xl font-bold mb-4">Довіра клієнтів</h4>
              <p className="text-text-secondary text-sm leading-relaxed">Понад 5000 постійних клієнтів в Україні обирають нас за стабільний результат та чесний сервіс.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 px-[5%] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading mb-8">Приєднуйтесь до клубу впевнених чоловіків</h2>
          <p className="text-text-secondary mb-12 text-lg">Спробуйте тестовий набір та переконайтеся самі.</p>
          <a href="/#pricing" className="inline-block bg-accent text-black px-12 py-5 rounded-2xl font-bold tracking-widest hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,210,255,0.3)]">
            ОБРАТИ СВІЙ ФОРМАТ
          </a>
        </div>
      </section>

      <Footer />
      <ChatFAB />
    </main>
  );
}
