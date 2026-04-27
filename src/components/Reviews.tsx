import React from 'react';

const reviews = [
  {
    stars: '★★★★★',
    text: '«Замовляв скептично — думав, черговий маркетинг. Але ефект відчув вже через пів години. Жінка здивована. Буду брати знову, однозначно.»',
    name: 'Андрій М.',
    city: 'Київ',
    age: 38,
    avatar: 'АМ'
  },
  {
    stars: '★★★★★',
    text: '«Брав "максимум" — вистачило на весь місяць. Зручна доставка, посилка без жодних написів. Ніхто нічого не запитував на пошті.»',
    name: 'Олег С.',
    city: 'Харків',
    age: 45,
    avatar: 'ОС'
  },
  {
    stars: '★★★★★',
    text: '«Пробував різне — хімічні таблетки давали головний біль і серцебиття. Тут нічого з цього. Натуральний склад — це відчувається.»',
    name: 'Василь К.',
    city: 'Львів',
    age: 52,
    avatar: 'ВК'
  },
  {
    stars: '★★★★☆',
    text: '«Чесно — не чекав такого результату від рослинного засобу. Ефект тримається реально довго. Дружина помітила зміни навіть у настрої.»',
    name: 'Дмитро Л.',
    city: 'Дніпро',
    age: 41,
    avatar: 'ДЛ'
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 px-[5%] bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-heading mb-6 text-white fade-up">
          Що кажуть наші клієнти
        </h2>
        <p className="text-text-secondary max-w-md mx-auto mb-16 fade-up">
          Реальні відгуки — без фільтрів і редагування
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className="glass-effect p-8 md:p-10 text-left border-white/5 hover:border-white/10 transition-all duration-500 fade-up"
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="text-accent mb-4 tracking-widest">{rev.stars}</div>
              <p className="text-white text-lg font-light leading-relaxed mb-8 italic">
                {rev.text}
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                  {rev.avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{rev.name}</div>
                  <div className="text-text-secondary text-xs">{rev.city} · {rev.age} років</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
