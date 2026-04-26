'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <a href="tel:+380985940006" className="text-text-primary text-sm hidden sm:block">+38 (098) 594-00-06</a>
        
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
    </header>
  );
};

export default Header;
