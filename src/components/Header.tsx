'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handlePhoneClick = (e: React.MouseEvent) => {
    // If it's a mobile device, let the default tel: behavior work
    if (window.innerWidth < 1024) return;
    
    // On desktop, show QR modal instead of trying to call
    e.preventDefault();
    setShowQR(true);
  };

  return (
    <header className="fixed top-0 w-full px-[5%] py-5 flex justify-between items-start z-[1000] bg-transparent">
      <Link href="/">
        <img 
          src="/images/ck-logo.png" 
          alt="ck" 
          className="h-[5.5rem] md:h-24 w-auto object-contain brightness-[10] contrast-[0.8] opacity-85"
        />
      </Link>

      <nav className="hidden md:flex gap-8 items-center pt-2">
        <Link href="#home" className="text-text-secondary text-sm hover:text-text-primary transition-colors">ГОЛОВНА</Link>
        <Link href="#features" className="text-text-secondary text-sm hover:text-text-primary transition-colors">ПЕРЕВАГИ</Link>
        <Link href="#how-it-works" className="text-text-secondary text-sm hover:text-text-primary transition-colors">ЯК ЦЕ ПРАЦЮЄ</Link>
        <Link href="#reviews" className="text-text-secondary text-sm hover:text-text-primary transition-colors">ВІДГУКИ</Link>
        <Link href="#pricing" className="text-text-secondary text-sm hover:text-text-primary transition-colors">МАГАЗИН</Link>
        <Link href="#faq" className="text-text-secondary text-sm hover:text-text-primary transition-colors">FAQ</Link>
      </nav>

      <div className="flex items-center gap-5 md:gap-20 pt-2">
        <a 
          href="tel:+380985940006" 
          onClick={handlePhoneClick}
          className="text-text-primary text-sm hidden sm:flex items-center gap-2 group transition-all"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent group-hover:scale-110 transition-transform">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span className="group-hover:text-accent transition-colors">+38 (098) 594-00-06</span>
        </a>
        
        {/* Burger Button */}
        <button 
          className="flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Відкрити меню"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* QR Modal */}
      {showQR && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60 backdrop-blur-md px-4" onClick={() => setShowQR(false)}>
          <div className="bg-zinc-900 border border-white/10 p-8 rounded-3xl max-w-xs w-full text-center shadow-2xl scale-up" onClick={e => e.stopPropagation()}>
            <h3 className="text-white font-heading text-xl mb-2">Швидкий дзвінок</h3>
            <p className="text-text-secondary text-sm mb-6">Відскануйте код камерою смартфона, щоб зателефонувати нам</p>
            
            <div className="bg-white p-4 rounded-2xl mb-6 mx-auto w-fit shadow-inner">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=tel:+380985940006&bgcolor=ffffff&color=000000" 
                alt="QR Code" 
                className="w-[180px] h-[180px]"
              />
            </div>

            <p className="text-accent font-bold mb-6">+38 (098) 594-00-06</p>

            <button 
              onClick={() => setShowQR(false)}
              className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors"
            >
              Закрити
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
