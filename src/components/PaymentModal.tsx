'use client';

import React, { useState, useEffect } from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: string;
  price: number;
}

const PaymentModal = ({ isOpen, onClose, product, price }: PaymentModalProps) => {
  const [paymentType, setPaymentType] = useState('cod');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-[#1a1a1a] border border-white/10 rounded-[32px] w-full max-w-[500px] max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-colors z-10"
        >
          ✕
        </button>

        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Оформлення замовлення</h2>
            <div className="inline-block bg-accent/10 border border-accent/20 px-4 py-2 rounded-xl">
              <span className="text-sm font-medium text-accent">{product} — {price} грн</span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Bug #3 Fix: Added autocomplete="name" */}
            <div className="space-y-1">
              <input 
                type="text" 
                placeholder="Ваше ім'я" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-colors"
                autoComplete="name"
              />
            </div>

            {/* Bug #3 Fix: Added autocomplete="tel" */}
            <div className="space-y-1">
              <input 
                type="tel" 
                placeholder="Ваш телефон (+380...)" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-colors"
                autoComplete="tel"
                maxLength={15}
              />
            </div>

            <div className="space-y-1">
              <input 
                type="text" 
                placeholder="Місто доставки" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="space-y-1">
              <input 
                type="text" 
                placeholder="Відділення Нової Пошти" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-sm font-semibold text-white/40 uppercase tracking-widest px-1">Спосіб оплати</p>
              
              <div className="space-y-3">
                <label className={`block cursor-pointer p-4 rounded-2xl border transition-all ${paymentType === 'cod' ? 'bg-accent/5 border-accent shadow-[0_0_15px_rgba(0,210,255,0.1)]' : 'bg-white/5 border-white/10'}`}>
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentType === 'cod'} 
                      onChange={() => setPaymentType('cod')}
                      className="accent-accent"
                    />
                    <span className="font-bold text-white text-sm">📦 Оплата при отриманні</span>
                  </div>
                  <p className="text-[0.7rem] text-text-secondary mt-2 ml-7">
                    Безпечно: оплата після огляду товару на пошті.
                  </p>
                </label>

                <label className={`block cursor-pointer p-4 rounded-2xl border transition-all ${paymentType === 'online' ? 'bg-accent/5 border-accent shadow-[0_0_15px_rgba(0,210,255,0.1)]' : 'bg-white/5 border-white/10'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentType === 'online'} 
                        onChange={() => setPaymentType('online')}
                        className="accent-accent"
                      />
                      <span className="font-bold text-white text-sm">💳 Оплата онлайн</span>
                    </div>
                    <span className="bg-green-500/10 text-green-500 text-[0.6rem] font-bold px-2 py-0.5 rounded border border-green-500/20 uppercase">Безкоштовна доставка</span>
                  </div>
                  <div className="flex gap-2 mt-3 ml-7 opacity-50 grayscale hover:grayscale-0 transition-all">
                    <div className="bg-white/10 px-2 py-1 rounded text-[0.6rem] font-bold text-white">VISA</div>
                    <div className="bg-white/10 px-2 py-1 rounded text-[0.6rem] font-bold text-white">mastercard</div>
                    <div className="bg-white/10 px-2 py-1 rounded text-[0.6rem] font-bold text-white"> Pay</div>
                  </div>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full mt-6 bg-accent text-black py-5 rounded-2xl font-bold text-base tracking-widest shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] active:scale-[0.98] transition-all"
            >
              ПІДТВЕРДИТИ ЗАМОВЛЕННЯ
            </button>

            <p className="text-[0.65rem] text-white/30 text-center leading-relaxed mt-4">
              🛡️ <b>Цілком анонімно:</b> упакування без логотипів.<br />
              💊 <b>Увага:</b> дієтична добавка, не є лікарським засобом.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
