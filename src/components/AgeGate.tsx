'use client';

import React, { useState, useEffect } from 'react';

const AgeGate = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const hasConfirmedAge = localStorage.getItem('ck_age_v2') === '1';
    if (!hasConfirmedAge) {
      // Show age gate with a slight delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Bug #2 Fix: Lock scroll when age gate is visible
        document.body.style.overflow = 'hidden';
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleYes = () => {
    localStorage.setItem('ck_age_v2', '1');
    setIsClosing(true);
    // Bug #2 Fix: Unlock scroll when age gate is closed
    document.body.style.overflow = '';
    
    setTimeout(() => {
      setIsVisible(false);
    }, 600);
  };

  const handleNo = () => {
    window.location.href = 'https://www.google.com.ua/';
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[2000] flex items-center justify-center bg-black/60 backdrop-blur-xl transition-opacity duration-500 ${isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className={`bg-black/55 border border-white/15 rounded-[24px] p-8 md:p-11 max-w-[460px] w-full text-center relative z-1 backdrop-blur-[24px] shadow-[0_0_60px_rgba(255,20,20,0.15),0_24px_64px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.07)] transition-transform duration-[550ms] cubic-bezier(0.2,0.8,0.2,1) ${isClosing ? 'translate-y-6 scale-[0.97]' : 'translate-y-0 scale-100'}`}>
        
        {/* CSS Stamp 18+ ONLY */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-1.5 border-2 border-accent rounded-lg py-1.5 px-3.5 pr-2 opacity-90 shadow-[0_0_8px_var(--accent-color),inset_0_0_6px_rgba(0,0,0,0.3)] -rotate-2 tracking-widest relative after:absolute after:inset-0 after:rounded-inherit after:bg-[repeating-linear-gradient(45deg,transparent,transparent_3px,rgba(0,0,0,0.04)_3px,rgba(0,0,0,0.04)_4px)]">
            <span className="font-heading text-2xl font-bold text-accent border-r-2 border-accent pr-2 leading-none">18+</span>
            <span className="font-heading text-[0.9rem] font-semibold text-accent tracking-[0.12em] uppercase leading-none">ONLY</span>
          </div>
        </div>

        <p className="text-base text-[#ccc] leading-[1.7] mb-9">
          <strong className="block font-heading text-[1.35rem] font-semibold text-white mb-3">Підтвердження віку</strong>
          Цей сайт містить інформацію для дорослих.<br />
          Вам виповнилось <strong>18 років</strong>?
        </p>

        <div className="flex gap-3 justify-center mb-6 flex-wrap sm:flex-nowrap">
          <button 
            onClick={handleYes}
            className="bg-white/95 text-black border-none py-3.5 px-9 rounded-xl text-[0.95rem] font-extrabold cursor-pointer transition-all hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,255,255,0.25)] font-body tracking-[0.02em] w-full sm:w-auto"
          >
            Так, мені 18+
          </button>
          <button 
            onClick={handleNo}
            className="bg-transparent text-[#666] border border-white/10 py-3.5 px-6 rounded-xl text-[0.9rem] cursor-pointer transition-all hover:text-[#aaa] hover:border-white/20 font-body w-full sm:w-auto"
          >
            Ні, я молодший
          </button>
        </div>

        <p className="text-[0.78rem] text-[#555] leading-[1.5] text-center">
          Продовжуючи, ви підтверджуєте повноліття та ознайомились з{' '}
          <a href="/privacy" className="text-accent no-underline">Політикою конфіденційності</a>.
        </p>
      </div>
    </div>
  );
};

export default AgeGate;
