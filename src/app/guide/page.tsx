import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatFAB from '@/components/ChatFAB';

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section for Guide */}
      <section className="pt-40 pb-20 px-[5%] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[0.7rem] font-bold tracking-widest mb-6 animate-fade-in">
            ПІДТВЕРДЖЕНО ОРИГІНАЛ
          </div>
          <h1 className="text-4xl md:text-6xl font-heading mb-6 animate-fade-in">
            Ваш путівник у світ <br /><span className="text-accent italic">нової впевненості</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto animate-fade-in delay-100">
            Вітаємо! Ви тримаєте в руках ключ до яскравих відчуттів. Дотримуйтесь цих простих кроків, щоб отримати 100% результату.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-[5%] bg-white/5 backdrop-blur-3xl border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="relative group">
              <div className="text-8xl font-bold text-white/5 absolute -top-10 -left-4 group-hover:text-accent/10 transition-colors">01</div>
              <div className="relative z-10">
                <div className="text-3xl mb-6">💧</div>
                <h3 className="text-xl font-bold mb-4">Як приймати?</h3>
                <p className="text-text-secondary leading-relaxed">
                  Вміст одного стіку розчиніть у 150-200 мл чистої води або соку. Також можна покласти вміст під язик до повного розчинення для швидшого всмоктування.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="text-8xl font-bold text-white/5 absolute -top-10 -left-4 group-hover:text-accent/10 transition-colors">02</div>
              <div className="relative z-10">
                <div className="text-3xl mb-6">⏱️</div>
                <h3 className="text-xl font-bold mb-4">Коли очікувати?</h3>
                <p className="text-text-secondary leading-relaxed">
                  Перші відчуття з'являться через 20-40 хвилин. Пікова концентрація та максимальна впевненість настають через 1.5 години після прийому.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="text-8xl font-bold text-white/5 absolute -top-10 -left-4 group-hover:text-accent/10 transition-colors">03</div>
              <div className="relative z-10">
                <div className="text-3xl mb-6">⏳</div>
                <h3 className="text-xl font-bold mb-4">Тривалість</h3>
                <p className="text-text-secondary leading-relaxed">
                  Ефект одного стіку триває до 72 годин. Вам не потрібно приймати препарат повторно наступного дня — ви залишаєтесь у формі весь вікенд.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="py-32 px-[5%]">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-8 md:p-12 border-accent/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors"></div>
            
            <h2 className="text-3xl font-heading mb-10 text-center md:text-left italic">Поради для "Профі"</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent font-bold">!</div>
                <div>
                  <h4 className="font-bold text-white mb-2">Сумісність з алкоголем</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">Препарат сумісний з невеликою кількістю алкоголю, але пам'ятайте: надмірний алкоголь може сповільнювати природні реакції організму.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent font-bold">!</div>
                <div>
                  <h4 className="font-bold text-white mb-2">Легка їжа</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">Для максимально швидкого ефекту рекомендуємо приймати стік через 1-2 години після їжі або за 30 хвилин до.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent font-bold">!</div>
                <div>
                  <h4 className="font-bold text-white mb-2">Настрій має значення</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">«Секрет Казанови» працює з вашим природним збудженням, підсилюючи його. Налаштуйтесь на романтичну хвилю!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reorder CTA */}
      <section className="py-20 px-[5%] text-center bg-accent/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-heading mb-6">Сподобався ефект?</h2>
          <p className="text-text-secondary mb-10">
            Замовляйте повний курс та отримуйте гарантовану знижку <span className="text-accent font-bold">10%</span> за промокодом <span className="text-white font-mono bg-white/10 px-3 py-1 rounded">REORDER10</span>
          </p>
          <a href="/#pricing" className="inline-block bg-accent text-black px-10 py-4 rounded-2xl font-bold tracking-widest shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:scale-105 transition-all">
            ПЕРЕЙТИ ДО МАГАЗИНУ
          </a>
        </div>
      </section>

      <Footer />
      <ChatFAB />
    </main>
  );
}
