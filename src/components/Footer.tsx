import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-20 px-[5%] border-t border-white/5 bg-black/40">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <Link href="/" className="mb-8">
          <img 
            src="/images/ck-logo.png" 
            alt="ck" 
            className="h-16 md:h-20 w-auto object-contain brightness-[10] contrast-[0.8] opacity-50"
          />
        </Link>
        
        <a 
          href="tel:+380985940006" 
          className="text-white/60 hover:text-accent transition-colors text-lg font-bold mb-10 tracking-widest"
        >
          +38 (098) 594-00-06
        </a>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12">
          <Link href="/terms" className="text-[#444] hover:text-[#666] text-xs uppercase tracking-widest transition-colors">
            Договір оферти
          </Link>
          <Link href="/privacy" className="text-[#444] hover:text-[#666] text-xs uppercase tracking-widest transition-colors">
            Політика конфіденційності
          </Link>
        </div>

        <div className="pt-8 border-t border-white/5 w-full">
          <p className="text-[0.65rem] text-[#333] mb-2 uppercase tracking-widest">
            ФОП Лемента Тетяна Сергіївна
          </p>
          <p className="text-[0.6rem] text-[#222]">
            © 2026 Секрет Казанови. Всі права захищено. <br />
            Дієтична добавка. Не є лікарським засобом. Перед вживанням проконсультуйтеся з лікарем.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
