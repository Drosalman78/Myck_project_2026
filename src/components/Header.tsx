'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we are at the very top (Hero section)
      if (currentScrollY < 100) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        
        // Smart Sticky: Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true); // Scrolling up
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handlePhoneClick = (e: React.MouseEvent) => {
    if (window.innerWidth < 1024) return;
    e.preventDefault();
    setShowQR(true);
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full px-[5%] py-5 flex justify-between items-start z-[1000] transition-all duration-500 ease-in-out ${
          isAtTop ? 'bg-transparent pt-8' : 
          isVisible ? 'bg-black/60 backdrop-blur-md shadow-lg py-4 border-b border-white/5' : 
          '-translate-y-full'
        }`}
      >
        <Link href="/" className="transition-transform hover:scale-105">
          <img 
            src="/images/ck-logo.png" 
            alt="ck" 
            className="h-[5.5rem] md:h-24 w-auto object-contain brightness-[10] contrast-[0.8] opacity-85"
          />
        </Link>

        {/* Desktop Nav: Shown when scrolled up (expanded) or at top */}
        <nav className={`hidden lg:flex gap-10 items-center pt-2 transition-all duration-500 ${
          isAtTop ? 'opacity-100 translate-y-0' : 
          isVisible ? 'opacity-100 translate-y-0' : 
          'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          {['ГОЛОВНА', 'ПЕРЕВАГИ', 'ЯК ЦЕ ПРАЦЮЄ', 'ВІДГУКИ', 'МАГАЗИН', 'FAQ'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
              className="text-text-secondary text-[14.7px] hover:text-text-primary transition-colors tracking-widest font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 md:gap-12 pt-2">
          {/* Phone Number: Desktop (Always), Mobile (Hidden at top per 2.7) */}
          <a 
            href="tel:+380985940006" 
            onClick={handlePhoneClick}
            className={`text-text-primary text-[14.7px] items-center gap-2.5 group transition-all duration-500 ${
              isAtTop ? 'hidden lg:flex' : 'sm:flex'
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18.9px] h-[18.9px] text-text-secondary group-hover:text-white group-hover:scale-110 transition-all">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="hover-neon tracking-wider font-semibold">+38 (098) 594-00-06</span>
          </a>
          
          {/* Burger Button: Hidden at top per 1.1 */}
          <button 
            className={`flex flex-col gap-1.5 p-2 transition-all duration-500 ${
              isAtTop ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Відкрити меню"
          >
            <span className="w-7 h-0.5 bg-white"></span>
            <span className="w-5 h-0.5 bg-white ml-auto"></span>
            <span className="w-7 h-0.5 bg-white"></span>
          </button>
        </div>
      </header>

      {/* QR Modal */}
      {showQR && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 backdrop-blur-xl px-4" onClick={() => setShowQR(false)}>
          <div className="bg-zinc-900/90 border border-white/10 p-10 rounded-[2.5rem] max-w-sm w-full text-center shadow-2xl scale-up" onClick={e => e.stopPropagation()}>
            <h3 className="text-white font-heading text-2xl mb-3">Швидкий зв'язок</h3>
            <p className="text-text-secondary text-base mb-8">Відскануйте код для дзвінка</p>
            
            <div className="bg-white p-5 rounded-3xl mb-8 mx-auto w-fit shadow-2xl">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=tel:+380985940006&bgcolor=ffffff&color=000000" 
                alt="QR Code" 
                className="w-[200px] h-[200px]"
              />
            </div>

            <p className="text-accent text-xl font-bold mb-8 tracking-widest">+38 (098) 594-00-06</p>

            <button 
              onClick={() => setShowQR(false)}
              className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-colors font-medium"
            >
              Закрити
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
