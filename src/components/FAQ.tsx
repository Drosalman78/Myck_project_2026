'use client';

import React, { useState } from 'react';

const faqData = [
  {
    q: 'Через скільки починає діяти препарат?',
    a: 'Ефект починається через 30 хвилин після прийому. Оптимальний пік настає через 1–2 години.'
  },
  {
    q: 'Скільки триває ефект?',
    a: 'До 72 годин — три доби після одного прийому. Саме тому одного стіку вистачає на цілий романтичний вікенд.'
  },
  {
    q: 'Чи сумісний з алкоголем?',
    a: 'Так. Помірне вживання алкоголю не впливає на ефективність препарату і не викликає токсичних реакцій. Ваш романтичний вечір з келихом вина — цілком безпечний.'
  },
  {
    q: 'Чи викликає звикання?',
    a: 'Ні. Препарат діє ситуативно і не впливає на гормональну систему постійно. Ви самі вирішуєте, коли і як часто його приймати.'
  },
  {
    q: 'Як виглядає посилка?',
    a: 'Абсолютно нейтрально. Жодних логотипів, жодних написів на тему інтимних товарів. У накладній — нейтральний опис (наприклад, "Спортивне харчування"). Навіть кур\'єр не знає, що всередині.'
  },
  {
    q: 'Чи є протипоказання?',
    a: 'Препарат має натуральний склад і добре переноситься. Проте не рекомендується при індивідуальній непереносимості компонентів. Якщо маєте хронічні захворювання серця у гострій фазі — проконсультуйтеся з лікарем.'
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 px-[5%] bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-heading mb-6 text-white fade-up">
          Часті запитання
        </h2>
        <p className="text-text-secondary mb-16 fade-up">
          Відповідаємо чесно і по суті
        </p>

        <div className="space-y-4 text-left fade-up">
          {faqData.map((item, idx) => (
            <div 
              key={idx} 
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIdx === idx ? 'bg-white/5 border-white/20' : 'bg-transparent'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
              >
                <span className="text-white font-bold md:text-lg pr-8">{item.q}</span>
                <span className={`text-2xl text-accent transition-transform duration-300 ${openIdx === idx ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 md:px-8 pb-8 text-text-secondary leading-relaxed md:text-lg border-t border-white/5 pt-4">
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
