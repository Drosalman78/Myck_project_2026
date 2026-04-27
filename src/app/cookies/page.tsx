import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <section className="pt-40 pb-20 px-[5%]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading mb-12 italic">Політика файлів Cookie</h1>
          
          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">1. Що таке файли Cookie?</h2>
              <p>
                Cookie — це невеликі текстові файли, які зберігаються на вашому пристрої під час відвідування нашого сайту. Вони допомагають нам зробити вашу взаємодію з сайтом зручнішою та персоналізованою.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">2. Як ми їх використовуємо?</h2>
              <p>Ми використовуємо кукі для наступних цілей:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li><strong className="text-white">Аналітика:</strong> Розуміння того, як відвідувачі взаємодіють із сайтом (Google Analytics, Facebook Pixel).</li>
                <li><strong className="text-white">Функціональність:</strong> Запам'ятовування ваших налаштувань, наприклад, чи прийняли ви цей банер.</li>
                <li><strong className="text-white">Маркетинг:</strong> Показ релевантної реклами на основі ваших інтересів.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">3. Керування файлами Cookie</h2>
              <p>
                Ви можете змінити налаштування свого браузера, щоб заблокувати або видалити файли cookie. Однак зауважте, що це може вплинути на коректність роботи деяких функцій нашого сайту.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">4. Контактна інформація</h2>
              <p>
                Якщо у вас виникли питання щодо нашої політики використання файлів cookie, будь ласка, зв'яжіться з нами: <a href="tel:+380985940006" className="text-accent">+38 (098) 594-00-06</a>.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
