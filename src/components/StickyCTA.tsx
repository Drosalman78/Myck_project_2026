'use client';

import React from 'react';

interface StickyCTAProps {
  onBuy: (product: string, price: number) => void;
}

const StickyCTA = ({ onBuy }: StickyCTAProps) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-[900] bg-black/80 backdrop-blur-lg border-t border-white/10 px-4 py-3 flex items-center justify-between animate-fade-in-up">
      <div className="flex flex-col">
        <span className="text-[0.7rem] text-text-secondary uppercase tracking-widest">Ціна від</span>
        <span className="text-xl font-bold text-accent">595 грн</span>
      </div>
      <button 
        onClick={() => onBuy('Золота середина (5 стіків)', 895)}
        className="bg-accent text-black px-8 py-3 rounded-xl font-bold text-sm shadow-[0_0_15px_rgba(0,210,255,0.4)] active:scale-95 transition-transform"
      >
        ЗАМОВИТИ
      </button>
    </div>
  );
};

export default StickyCTA;
