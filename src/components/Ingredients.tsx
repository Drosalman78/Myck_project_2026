import React from 'react';

const ingredients = [
  { name: 'Елеутерокок', icon: '🌱', desc: 'Природний адаптоген. Підвищує витривалість, знижує втому, посилює тонус організму.' },
  { name: 'Тибетський женьшень', icon: '🏔️', desc: '«Корінь безсмертя». Стимулює вироблення тестостерону, підвищує лібідо та сексуальну активність.' },
  { name: 'Сабаль пильчастий', icon: '🌴', desc: 'Екстракт плодів пальми. Покращує кровообіг у малому тазу, підтримує здоров\'я простати.' },
  { name: 'Гінкго білоба', icon: '🍃', desc: 'Підвищує мікроциркуляцію крові, прискорює передачу нервових імпульсів — ефект відчувається швидше.' },
  { name: 'Червоний женьшень', icon: '🌿', desc: 'Класика традиційної медицини Азії. Підвищує потенцію, покращує якість та тривалість ерекції.' },
  { name: 'Кора катуаби', icon: '🌳', desc: 'Бразильський афродизіак. Посилює чутливість, збуджує ЦНС і значно підвищує сексуальний потяг.' },
  { name: 'Горянка стрілолиста', icon: '🌾', desc: 'Азійська рослина, використовувана тисячоліттями. Стимулює приплив крові так само ефективно, як синтетичні аналоги.' },
  { name: 'Насіння повилки', icon: '🫘', desc: 'Підвищує кількість та якість сперматозоїдів, стимулює чоловічу фертильність і гормональний фон.' },
  { name: 'Муіра паума', icon: '🌵', desc: '«Дерево потенції» Амазонії. Усуває психологічні блоки, підвищує лібідо та інтенсивність відчуттів.' },
];

const Ingredients = () => {
  return (
    <section id="ingredients" className="py-20 md:py-32 px-[5%] bg-black/40 backdrop-blur-sm section-anchor">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading mb-4 text-white fade-up">
          100% натуральний склад
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto mb-16 fade-up">
          Дев'ять цілющих компонентів, відібраних за тисячоліттями народної та наукової медицини
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ing, idx) => (
            <div 
              key={idx} 
              className="glass-effect p-8 text-left hover:bg-white/[0.07] transition-all duration-300 group"
            >
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {ing.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-wide">
                {ing.name}
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
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
