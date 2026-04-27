'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: string;
  price: number;
}

const PaymentModal = ({ isOpen, onClose, product, price }: PaymentModalProps) => {
  const router = useRouter();
  const [paymentType, setPaymentType] = useState('cod');
  const [phone, setPhone] = useState('+380');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    branch: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset success state when closing
      if (isSuccess) {
        setTimeout(() => setIsSuccess(false), 300);
      }
    }
  }, [isOpen, isSuccess]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('+380')) {
      if (val.startsWith('0')) val = '+38' + val;
      else if (val.startsWith('380')) val = '+' + val;
      else if (val === '' || val === '+' || val === '+3' || val === '+38') val = '+380';
      else val = '+380' + val.replace(/\D/g, '');
    }
    const digitsOnly = val.replace(/\D/g, '');
    if (digitsOnly.length > 12) return;
    setPhone(val);
    if (digitsOnly.length < 12) setPhoneError('Замало цифр у номері');
    else setPhoneError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneError || phone.replace(/\D/g, '').length < 12) {
      setPhoneError('Введіть коректний номер');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phone,
          product,
          price,
          paymentType
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        // Редирект через 2 секунди, щоб встигли побачити анімацію успіху
        setTimeout(() => {
          router.push('/thanks');
        }, 2000);
      } else {
        alert('Помилка при відправці. Спробуйте ще раз.');
      }
    } catch (err) {
      alert('Помилка з\'єднання.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      ></div>

      <div className="relative bg-[#0f0f0f] border border-white/10 rounded-[32px] w-full max-w-[500px] my-auto shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-scale-in z-10 overflow-hidden">
        
        {/* Success State Overlay */}
        <div className={`absolute inset-0 bg-[#0f0f0f] z-30 flex flex-col items-center justify-center p-10 text-center transition-all duration-500 ${isSuccess ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6 animate-bounce">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Дякуємо!</h2>
          <p className="text-text-secondary mb-10 leading-relaxed">
            Ваше замовлення прийнято. <br /> Менеджер зв'яжеться з вами найближчим часом для підтвердження.
          </p>
          <button 
            onClick={onClose}
            className="w-full bg-accent text-black py-4 rounded-2xl font-bold tracking-widest hover:scale-105 transition-all"
          >
            ЗАКРИТИ
          </button>
        </div>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors z-20"
        >
          <span className="text-2xl">✕</span>
        </button>

        <div className="p-6 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading">Оформлення замовлення</h2>
            <p className="text-text-secondary text-sm mb-4">Безпечна оплата та повна конфіденційність</p>
            <div className="inline-block bg-accent/10 border border-accent/20 px-4 py-2 rounded-xl">
              <span className="text-sm font-medium text-accent">{product} — {price} грн</span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <input 
                type="text" 
                placeholder="Ваше ім'я" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-colors"
                autoComplete="name"
              />
            </div>

            <div className="space-y-1 relative">
              <input 
                type="tel" 
                value={phone}
                onChange={handlePhoneChange}
                placeholder="+380939377523" 
                required 
                className={`w-full bg-white/5 border ${phoneError ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-colors`}
                autoComplete="tel"
              />
              {phoneError && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[0.7rem] text-red-500/80 font-medium bg-black/40 px-2 py-1 rounded-lg backdrop-blur-sm">
                  {phoneError}
                </span>
              )}
            </div>

            <div className="space-y-1 relative">
              <input 
                type="text" 
                placeholder="Місто доставки" 
                required
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-colors pr-12"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20">🔍</span>
            </div>

            <div className="space-y-1 relative">
              <input 
                type="text" 
                placeholder="Відділення (або адреса)" 
                required
                value={formData.branch}
                onChange={(e) => setFormData({...formData, branch: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-colors pr-16"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#ff3b30] text-white text-[0.65rem] font-bold px-2 py-1 rounded shadow-sm pointer-events-none uppercase">
                НП
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-sm font-semibold text-white/40 uppercase tracking-widest px-1">Оберіть спосіб оплати:</p>
              <div className="space-y-3">
                <label className={`block cursor-pointer p-5 rounded-2xl border transition-all ${paymentType === 'cod' ? 'bg-accent/5 border-accent shadow-[0_0_15px_rgba(0,210,255,0.1)]' : 'bg-white/5 border-white/10'}`}>
                  <div className="flex items-center gap-4">
                    <input type="radio" name="payment" checked={paymentType === 'cod'} onChange={() => setPaymentType('cod')} className="w-5 h-5 accent-accent" />
                    <span className="font-bold text-white text-base">📦 Оплата при отриманні</span>
                  </div>
                </label>
                <label className={`block cursor-pointer p-5 rounded-2xl border transition-all ${paymentType === 'online' ? 'bg-accent/5 border-accent shadow-[0_0_15px_rgba(0,210,255,0.1)]' : 'bg-white/5 border-white/10'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <input type="radio" name="payment" checked={paymentType === 'online'} onChange={() => setPaymentType('online')} className="w-5 h-5 accent-accent" />
                      <span className="font-bold text-white text-base">💳 Оплата онлайн</span>
                    </div>
                    <span className="bg-green-500/20 text-green-400 text-[0.65rem] font-bold px-2 py-1 rounded border border-green-500/20 uppercase tracking-wider">Доставка 0 грн</span>
                  </div>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full mt-6 bg-accent text-black py-5 rounded-2xl font-bold text-lg tracking-widest shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_40px_rgba(0,210,255,0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                  ОБРОБКА...
                </>
              ) : (
                'ПІДТВЕРДИТИ ЗАМОВЛЕННЯ'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
