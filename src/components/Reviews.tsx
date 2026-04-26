import React from 'react';

const reviews = [
  {
    name: 'Олександр',
    city: 'Київ',
    text: 'Замовляв для експерименту, але ефект перевершив очікування. Діє м\'яко, голова не болить як від аптечних таблеток. Жінка в захваті, я теж.',
    rating: 5,
    date: '2 тижні тому'
  },
  {
    name: 'Дмитро',
    city: 'Львів',
    text: 'Найбільше сподобалося, що ефект триває реально пару днів. Випив у п\'ятницю ввечері — і весь вікенд на висоті. Дуже зручно.',
    rating: 5,
    date: '1 місяць тому'
  },
  {
    name: 'Андрій',
    city: 'Одеса',
    text: 'Дякую за швидку доставку і анонімність. Коробка була без жодних написів, що для мене важливо. Результатом задоволений на всі 100%.',
    rating: 5,
    date: '3 тижні тому'
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 px-[5%] section-anchor">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading mb-4 text-white">
            Відгуки наших клієнтів
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Справжні історії чоловіків, які обрали впевненість без компромісів
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="glass-effect p-8 flex flex-col h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              
              <p className="text-white italic mb-8 flex-grow">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{review.name}</h4>
                  <p className="text-text-secondary text-xs">{review.city} • {review.date}</p>
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
