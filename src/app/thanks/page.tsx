import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatFAB from '@/components/ChatFAB';
import Link from 'next/link';

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <section className="flex-grow flex items-center justify-center pt-32 pb-20 px-[5%] text-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-2xl mx-auto relative z-10 animate-fade-in">
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(0,210,255,0.2)]">
            <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading mb-6 italic">Замовлення прийнято!</h1>
          <p className="text-text-secondary text-lg mb-10 leading-relaxed">
            Дякуємо за довіру. Наш менеджер зв'яжеться з вами протягом 15 хвилин для підтвердження деталей доставки.
          </p>
          
          <div className="glass-effect p-8 border-white/5 mb-12 text-left">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-accent">📦</span> Що далі?
            </h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                Ми надішлемо вам номер ТТН у SMS або Telegram після відправки.
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                Посилка буде упакована максимально анонімно (без написів).
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                Ви можете перевірити товар при отриманні на пошті.
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold tracking-widest transition-all">
              НА ГОЛОВНУ
            </Link>
            <Link href="/blog" className="bg-accent text-black px-8 py-4 rounded-2xl font-bold tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,210,255,0.3)]">
              ЧИТАТИ БЛОГ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatFAB />
    </main>
  );
}
