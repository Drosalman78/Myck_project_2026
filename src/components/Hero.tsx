'use client';

import React from 'react';

interface HeroProps {
  onBuy: (product: string, price: number) => void;
}

const Hero = ({ onBuy }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-transparent" id="home">
      <div className="relative z-[2] flex justify-center items-center w-full px-5 fade-up">
        <div className="glass-effect p-8 md:p-12 max-w-[550px] w-full text-left relative z-10 before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:backdrop-blur-2xl before:[-webkit-mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_90%)] before:z-[-1]">
          {/* Logo in Hero */}
          <div className="flex justify-center items-center w-full mb-4 pb-4 border-b border-white/10">
            <img src="/images/ck-logo.png" alt="CK Секрет Казанови" className="h-[90px] w-auto object-contain brightness-[10] contrast-[0.8] opacity-85" />
          </div>

          <div className="flex justify-between items-center mb-8">
            <span className="bg-white/10 px-3 py-1.5 rounded-full text-[0.75rem] font-semibold tracking-wider flex items-center gap-2 border border-white/5">
              PRO <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_var(--accent-color)]"></span>
            </span>
          </div>

          <h1 className="text-[clamp(2.3rem,10vw,3.5rem)] font-extrabold leading-[1.1] mb-2 bg-gradient-to-br from-white to-accent bg-clip-text text-transparent">
            CASANOVA
          </h1>
          <p className="text-[0.9rem] font-medium text-text-secondary mb-6 tracking-[2px] uppercase">
            НАТУРАЛЬНИЙ СТИМУЛЯТОР ДЛЯ ЧОЛОВІКІВ
          </p>
          
          <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent mb-6"></div>

          <ul className="list-none mb-10">
            <li className="text-[0.95rem] text-white mb-3 flex items-center gap-3 opacity-90">
              <span className="bg-white/5 p-2 rounded-lg text-base">✨</span> Впевненість у собі
            </li>
            <li className="text-[0.95rem] text-white mb-3 flex items-center gap-3 opacity-90">
              <span className="bg-white/5 p-2 rounded-lg text-base">🔥</span> До 72 годин дії
            </li>
            <li className="text-[0.95rem] text-white mb-3 flex items-center gap-3 opacity-90">
              <span className="bg-white/5 p-2 rounded-lg text-base">🌿</span> Натуральні компоненти
            </li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onBuy('Золота середина (5 стіків)', 895)}
              className="flex-1 min-w-[150px] bg-white/90 text-black px-6 py-4 rounded-2xl text-[0.9rem] font-bold text-center hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] transition-all"
            >
              ЗАМОВИТИ ЗАРАЗ
            </button>
            <a href="#about" className="flex-1 min-w-[150px] bg-white/5 text-white border border-white/10 backdrop-blur-md px-6 py-4 rounded-2xl text-[0.9rem] font-bold text-center hover:bg-white/10 hover:border-white/20 transition-all">
              Детальніше ➔
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
