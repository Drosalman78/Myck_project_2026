'use client';

import React from 'react';

const pricingOptions = [
  {
    title: 'ТЕСТОВИЙ',
    quantity: '3 стіки',
    price: 595,
    description: 'Ідеально для першого знайомства та яскравих вихідних.',
    isFeatured: false,
    buttonText: 'ЗАМОВИТИ'
  },
  {
    title: 'ЗОЛОТА СЕРЕДИНА',
    quantity: '5 стіків',
    price: 895,
    description: 'Оптимальний вибір для міцного тривалого результату.',
    isFeatured: true,
    buttonText: 'ОБРАТИ ЦЕЙ ФОРМАТ'
  },
  {
    title: 'МАКСИМУМ',
    quantity: '10 стіків',
    price: 1595,
    description: 'Повний контроль ситуації + Безкоштовна доставка.',
    isFeatured: false,
    buttonText: 'ЗАМОВИТИ'
  }
];

interface PricingProps {
  onBuy: (product: string, price: number) => void;
}

const Pricing = ({ onBuy }: PricingProps) => {
  return (
    <section id="pricing" className="py-20 md:py-32 px-[5%] bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-heading mb-16 text-white animate-fade-in">
          Оберіть свій запас впевненості
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingOptions.map((option, idx) => (
            <div 
              key={idx}
              className="relative flex flex-col group/item"
            >
              <div 
                className={`glass-effect p-8 md:p-10 flex flex-col items-center h-full relative transition-all duration-500 will-change-transform ${
                  option.isFeatured 
                    ? 'border-accent shadow-[0_0_40px_rgba(0,210,255,0.15)] md:scale-105 z-10 hover:scale-[1.1] hover:z-30' 
                    : 'border-white/10 hover:scale-[1.05] hover:z-20'
                } hover:shadow-[0_20px_50px_rgba(0,210,255,0.25)]`}
              >
                {option.isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black text-[0.7rem] font-bold px-4 py-1 rounded-full shadow-[0_0_15px_rgba(0,210,255,0.4)] z-20">
                    ХІТ ПРОДАЖУ
                  </div>
                )}
                
                <h3 className={`text-xl font-heading mb-2 ${option.isFeatured ? 'text-accent' : 'text-white'}`}>
                  {option.title}
                </h3>
                <p className="text-text-secondary text-sm mb-6">{option.quantity}</p>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-baseline gap-2">
                  {option.price} <span className="text-lg font-normal opacity-60 uppercase">грн</span>
                </div>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-10 flex-grow">
                  {option.description}
                </p>
                
                <button 
                  onClick={() => onBuy(`${option.title} (${option.quantity})`, option.price)}
                  className={`w-full py-4 rounded-2xl font-bold text-sm tracking-widest transition-all ${
                    option.isFeatured 
                      ? 'bg-accent text-black shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)]' 
                      : 'bg-transparent text-white border border-white/20 hover:border-accent hover:text-accent'
                  }`}
                >
                  {option.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits text below pricing */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <span>📦</span> Без маркувань
            </h4>
            <p className="text-text-secondary text-sm">На посилці абсолютно немає жодних логотипів чи інтимних написів.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <span>📝</span> Нейтральний опис
            </h4>
            <p className="text-text-secondary text-sm">У накладній Нової пошти / Укрпошти буде вказано «Спортивне харчування».</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <span>💳</span> Зручна оплата
            </h4>
            <p className="text-text-secondary text-sm">Платіть лише після отримання (Накладений платіж) або безпечно онлайн.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
