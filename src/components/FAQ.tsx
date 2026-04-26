'use client';

import React, { useState } from 'react';

const faqItems = [
  {
    q: 'Як приймати "Секрет Казанови"?',
    a: 'Достатньо прийняти 1 стік за 30-40 хвилин до планованої близькості. Запивати можна водою або будь-яким напоєм. Не рекомендується перевищувати дозу 1 стік на добу.'
  },
  {
    q: 'Чи сумісний засіб з алкоголем?',
    a: 'Так, на відміну від більшості синтетичних препаратів, "Секрет Казанови" на 100% сумісний з помірними дозами алкоголю. Він не створює додаткового навантаження на серце.'
  },
  {
    q: 'Яка тривалість дії одного стіка?',
    a: 'Ефект індивідуальний, але більшість чоловіків відчувають підвищений тонус та готовність протягом 48-72 годин після прийому.'
  },
  {
    q: 'Чи є побічні ефекти?',
    a: 'Засіб повністю натуральний і зазвичай переноситься дуже добре. У поодиноких випадках можлива індивідуальна чутливість до окремих трав. Якщо ви маєте серйозні хронічні захворювання, проконсультуйтеся з лікарем.'
  },
  {
    q: 'Як виглядає упаковка при доставці?',
    a: 'Ми гарантуємо повну анонімність. Замовлення пакується в звичайний кур\'єрський пакет або коробку без будь-яких маркувань, логотипів чи назв товару. Навіть працівник пошти не знатиме, що всередині.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 px-[5%] section-anchor">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading mb-4 text-white">
            Часті запитання
          </h2>
          <p className="text-text-secondary">
            Відповідаємо на найпопулярніші запитання про наш продукт
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div key={idx} className="glass-effect overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.03] transition-colors"
              >
                <span className="text-white font-bold text-lg md:text-xl pr-4">{item.q}</span>
                <span className={`text-accent text-2xl transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-white/5">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
