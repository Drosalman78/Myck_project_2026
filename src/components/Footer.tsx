import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 md:py-20 px-[5%] bg-black/60 border-t border-white/5 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="text-3xl font-heading text-white mb-6">CK</div>
          <p className="text-text-secondary max-w-md mx-auto text-sm leading-relaxed mb-8">
            Натуральний стимулятор для чоловіків, створений для тих, хто обирає якість, безпеку та впевненість у кожному моменті.
          </p>
          <div className="flex justify-center gap-6 mb-10 flex-wrap">
            <a href="/privacy" className="text-text-secondary hover:text-accent text-sm transition-colors">Політика конфіденційності</a>
            <a href="/terms" className="text-text-secondary hover:text-accent text-sm transition-colors">Договір публічної оферти</a>
            <a href="#payment-modal" className="text-text-secondary hover:text-accent text-sm transition-colors">Оплата та доставка</a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <p className="text-[#666] text-xs mb-1">ФОП Лемента Тетяна Сергіївна</p>
            <p className="text-[#666] text-xs">ІПН: 3314500000 | Україна, м. Вінниця</p>
          </div>
          
          <div className="text-[#444] text-xs">
            © 2026 Секрет Казанови. Всі права захищено.
          </div>

          <div className="text-right">
            <p className="text-[#666] text-xs mb-1">Підтримка: +38 (098) 594-00-06</p>
            <p className="text-[#666] text-xs">Графік: Пн-Нд 09:00 - 21:00</p>
          </div>
        </div>

        <div className="mt-12 text-[10px] text-[#333] leading-tight max-w-3xl mx-auto">
          Дієтична добавка. Не є лікарським засобом. Перед застосуванням ознайомтеся з інструкцією та проконсультуйтеся з лікарем. Ефект може відрізнятися залежно від індивідуальних особливостей організму.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
