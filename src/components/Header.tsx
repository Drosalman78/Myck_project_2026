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
      
      if (currentScrollY < 80) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [isMenuOpen]);

  const navItems = [
    { name: 'ГОЛОВНА', href: '/' },
    { name: 'ПРО НАС', href: '/about' },
    { name: 'ІНГРЕДІЄНТИ', href: '/#ingredients' },
    { name: 'ВІДГУКИ', href: '/#reviews' },
    { name: 'БЛОГ', href: '/blog' },
    { name: 'ІНСТРУКЦІЯ', href: '/guide' },
    { name: 'МАГАЗИН', href: '/#pricing', isButton: true },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full px-[5%] py-4 flex justify-between items-center z-[1000] transition-all duration-500 ease-in-out ${
          isAtTop ? 'bg-transparent pt-8' : 
          isVisible ? 'bg-black/80 backdrop-blur-xl shadow-2xl py-3 border-b border-white/5' : 
          '-translate-y-full'
        }`}
      >
        <Link href="/" className="transition-transform hover:scale-105 relative z-[1100]">
          <img 
            src="/images/ck-logo.png" 
            alt="ck" 
            className={`${isAtTop ? 'h-20 md:h-24' : 'h-14 md:h-16'} w-auto object-contain brightness-[10] contrast-[0.8] opacity-90 transition-all duration-500`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={item.isButton ? 
                "bg-accent text-black px-6 py-2.5 rounded-full text-[13px] font-bold tracking-widest hover:scale-105 hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all" :
                "text-text-secondary text-[13px] hover:text-white transition-colors tracking-widest font-medium"
              }
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6 relative z-[1100]">
          <a 
            href="tel:+380985940006" 
            className={`hidden sm:flex text-text-primary text-[14px] items-center gap-2.5 group transition-all duration-500 ${isAtTop ? 'opacity-100' : 'opacity-80'}`}
          >
            <span className="hover-neon tracking-wider font-semibold">+38 (098) 594-00-06</span>
          </a>
          
          {/* Burger Button */}
          <button 
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <div className={`w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-white ml-auto transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[1050] bg-black transition-all duration-500 flex flex-col justify-center px-[10%] ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.1)_0%,transparent_70%)] opacity-50"></div>
        
        <nav className="flex flex-col gap-8 relative z-10">
          {navItems.map((item, idx) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionDelay: `${idx * 0.05}s` }}
              className={`text-3xl md:text-5xl font-heading transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${item.isButton ? 'text-accent italic' : 'text-white'}`}
            >
              {item.name}
            </Link>
          ))}
          
          <div className={`mt-12 pt-12 border-t border-white/10 transition-all duration-700 delay-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-text-secondary text-sm mb-4 uppercase tracking-widest">Зв'язатися з нами</p>
            <a href="tel:+380985940006" className="text-2xl font-bold text-white">+38 (098) 594-00-06</a>
          </div>
        </nav>
      </div>

      {/* QR Modal (Desktop Only) */}
      {showQR && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 backdrop-blur-xl px-4" onClick={() => setShowQR(false)}>
          <div className="bg-zinc-900/90 border border-white/10 p-10 rounded-[2.5rem] max-w-sm w-full text-center shadow-2xl scale-up" onClick={e => e.stopPropagation()}>
            <h3 className="text-white font-heading text-2xl mb-3">Швидкий зв'язок</h3>
            <p className="text-text-secondary text-base mb-8">Відскануйте код для дзвінка</p>
            <div className="bg-white p-5 rounded-3xl mb-8 mx-auto w-fit">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=tel:+380985940006" alt="QR" className="w-[200px] h-[200px]" />
            </div>
            <button onClick={() => setShowQR(false)} className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-white">Закрити</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
