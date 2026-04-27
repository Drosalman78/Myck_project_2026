'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-sm z-[2000] animate-fade-in-up">
      <div className="glass-effect p-6 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden group">
        {/* Subtle accent line */}
        <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-50"></div>
        
        <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
          <span>🍪</span> Ми використовуємо кукі
        </h4>
        <p className="text-text-secondary text-xs leading-relaxed mb-6">
          Цей сайт використовує файли cookie для покращення вашого досвіду та аналітики. Продовжуючи використання, ви погоджуєтесь з нашою <Link href="/cookies" className="text-white hover:text-accent underline transition-colors">Політикою конфіденційності</Link>.
        </p>
        
        <div className="flex gap-3">
          <button 
            onClick={acceptCookies}
            className="flex-grow bg-white/10 hover:bg-accent hover:text-black text-white text-[10px] font-black tracking-widest py-3 rounded-xl transition-all uppercase"
          >
            ЗРОЗУМІЛО
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
