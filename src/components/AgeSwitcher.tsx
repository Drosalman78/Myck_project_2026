'use client';

import React, { useState, useEffect } from 'react';

const ageGroups = [
  {
    id: 'young',
    label: '18–35 років',
    color: '#00d2ff',
    cards: [
      { icon: '⚡', title: 'Миттєва готовність', text: 'Ефект вже через 30 хвилин після прийому. Нічна вечірка, клуб або спонтанний вечір — ти завжди в ресурсі, коли це потрібно.' },
      { icon: '🔥', title: 'Шалена витривалість', text: "Забудь про «ранній фініш». 72 години дії у поєднанні зі справжньою витривалістю — це зовсім інший рівень гри, який вона запам'ятає." },
      { icon: '🍸', title: 'Сумісний з алкоголем', text: 'Бокал вина, пиво чи коктейль — не перешкода. Препарат зберігає 100% ефективності навіть на вечірці або романтичній вечері.' },
      { icon: '🎯', title: 'Повна присутність', text: 'Нуль тривоги, нуль невпевненості. Ти максимально сконцентрований і повністю в процесі — рівно тоді, коли це найважливіше.' },
      { icon: '🥷', title: 'Анонімна доставка', text: 'Замовляєш онлайн — отримуєш як звичайний товар. Посилка без написів. Ніхто нічого не дізнається — навіть сусіди по під\'їзду.' },
      { icon: '💎', title: 'Без звикання', text: 'Береш лише тоді, коли сам хочеш. Жодної залежності — ані фізичної, ані психологічної. Повний контроль завжди у твоїх руках.' },
    ]
  },
  {
    id: 'mid',
    label: '35–50 років',
    color: '#c9a227',
    cards: [
      { icon: '🌅', title: 'Скинь тягар втоми', text: 'Важкий робочий день, дедлайни, хронічний стрес — і все одно вдома як у 25. Навіть після виснажливого дня ти знову в грі.' },
      { icon: '✨', title: 'Відчуття молодості — назад', text: 'Те, що поступово зникало — повертається. Яскравість бажання, гострота відчуттів і пристрасть — все знову з тобою.' },
      { icon: '💪', title: 'Стабільна міцна ерекція', text: 'Жодних «сюрпризів у найважливіший момент». Надійно, стабільно, тривало — рівно тоді і стільки, скільки тобі і їй потрібно.' },
      { icon: '🌿', title: 'Без таблеток і рецептів', text: '100% натуральний рослинний склад замість синтетичної хімії. Жодного сорому в аптеці — і жодних токсичних побічних ефектів.' },
      { icon: '⏳', title: 'Ефект — цілий вікенд', text: 'Один прийом у п\'ятницю — і пристрасний вікенд без повторного прийому. До 72 годин повного контролю, бажання та впевненості.' },
      { icon: '🏆', title: 'Впевненість і спокій', text: 'Повертається не лише фізичний ефект — але й та внутрішня спокійна впевненість у собі, яку ти пам\'ятаєш ще з молодості.' },
    ]
  },
  {
    id: 'senior',
    label: '50+ років',
    color: '#10b981',
    cards: [
      { icon: '💚', title: 'Безпечно для серця', text: 'Натуральний рослинний склад не навантажує серцево-судинну систему. Жодного ризику — підтверджено 9 компонентами органічного складу.' },
      { icon: '🩺', title: 'Не впливає на тиск', text: 'На відміну від синтетичних ФДЕ-5 препаратів — не підвищує і не знижує артеріальний тиск. Безпечно навіть при наявній гіпертонії.' },
      { icon: '🌱', title: 'М\'яка органічна дія', text: 'Жодного «удару» по організму. Препарат діє поступово і плавно — природньо, так як мали б діяти всі засоби для чоловічого здоров\'я.' },
      { icon: '🛡️', title: 'Профілактика простати', text: 'Сабаль пильчастий та гінкго білоба — природня підтримка здоров\'я простати у чоловіків після 50. Не лише ефект, а й довгострокова турбота.' },
      { icon: '🏥', title: 'Без рецепту лікаря', text: 'Натуральна харчова добавка, не ліки. Не потребує рецепту та консультацій. Безпечний і самостійний вибір зрілого чоловіка для свого здоров\'я.' },
      { icon: '🔄', title: 'Після 50, 60, 70+', text: 'Формула адаптована для чоловічого організму будь-якого зрілого віку. Ефективна та безпечна як у 50, так і у 70, і у 80 років.' },
    ]
  }
];

const AgeSwitcher = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Update global accent color variable
    document.documentElement.style.setProperty('--accent-color', ageGroups[activeTab].color);
  }, [activeTab]);

  return (
    <section id="features" className="py-20 md:py-32 bg-transparent text-center">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-heading mb-6 tracking-wide">
          Обери свій вік
        </h2>
        <div className="inline-flex bg-white/5 border border-white/10 rounded-[40px] p-1.5 backdrop-blur-2xl shadow-2xl">
          {ageGroups.map((group, index) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-[30px] text-sm md:text-base font-semibold cursor-pointer transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-gradient-to-br from-white to-[#d4d4d4] text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                  : 'text-text-secondary hover:text-white bg-transparent'
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ageGroups[activeTab].cards.map((card, idx) => (
            <div 
              key={`${activeTab}-${idx}`}
              className="glass-effect p-8 md:p-10 text-left relative flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl mb-5 inline-block bg-gradient-to-br from-white to-[var(--accent-color)] bg-clip-text text-transparent filter drop-shadow-[0_0_10px_var(--accent-color)] transition-all duration-500">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wider text-white">
                {card.title}
              </h3>
              <p className="text-[0.95rem] text-text-secondary leading-relaxed mb-8 flex-grow">
                {card.text}
              </p>
              <a 
                href="#payment-modal" 
                className="w-full py-3 bg-white/90 text-black rounded-2xl text-sm font-bold text-center hover:bg-white hover:-translate-y-0.5 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                ЗАМОВИТИ
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeSwitcher;
