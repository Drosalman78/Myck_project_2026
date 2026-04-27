import React from 'react';

const ingredients = [
  { icon: '🌱', name: 'Елеутерокок', desc: 'Природний адаптоген. Підвищує витривалість, знижує втому, посилює тонус організму.' },
  { icon: '🏔️', name: 'Тибетський женьшень', desc: '«Корінь безсмертя». Стимулює вироблення тестостерону, підвищує лібідо та сексуальну активність.' },
  { icon: '🌴', name: 'Сабаль пильчастий', desc: 'Екстракт плодів пальми. Покращує кровообіг у малому тазу, підтримує здоров\'я простати.' },
  { icon: '🍃', name: 'Гінкго білоба', desc: 'Підвищує мікроциркуляцію крові, прискорює передачу нервових імпульсів — ефект відчувається швидше.' },
  { icon: '🌿', name: 'Червоний женьшень', desc: 'Класика традиційної медицини Азії. Підвищує потенцію, покращує якість та тривалість ерекції.' },
  { icon: '🌳', name: 'Кора катуаби', desc: 'Бразильський афродизіак. Посилює чутливість, збуджує ЦНС і значно підвищує сексуальний потяг.' },
  { icon: '🌾', name: 'Горянка стрілолиста', desc: 'Азійська рослина, використовувана тисячоліттями. Стимулює приплив крові так само ефективно, як синтетичні аналоги.' },
  { icon: '🫘', name: 'Насіння повилки', desc: 'Підвищує кількість та якість сперматозоїдів, стимулює чоловічу фертильність і гормональний фон.' },
  { icon: '🌵', name: 'Муіра паума', desc: '«Дерево потенції» Амазонії. Усуває психологічні блоки, підвищує лібідо та інтенсивність відчуттів.' }
];

const Ingredients = () => {
  return (
    <section id="ingredients" className="py-24 md:py-32 px-[5%] bg-black/40">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-heading mb-6 text-white fade-up">
          100% натуральний склад
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-16 fade-up">
          Дев'ять цілющих компонентів, відібраних за тисячоліттями народної та наукової медицини
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ingredients.map((ing, idx) => (
            <div 
              key={idx} 
              className="glass-effect p-8 text-left hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 group fade-up"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">{ing.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3">{ing.name}</h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {ing.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
