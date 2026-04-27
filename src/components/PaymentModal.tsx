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
    if (digitsOnly.length < 12) setPhoneError('Перевірте кількість цифр');
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center md:p-6 overflow-y-auto">
      {/* Background Overlay - More Elegant Glass */}
      <div 
        className="fixed inset-0 bg-[#080a0c]/80 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      ></div>

      <div className="relative bg-[#111418] border border-white/5 md:rounded-[40px] w-full max-w-[900px] shadow-[0_40px_100px_rgba(0,0,0,0.6)] animate-scale-in z-10 overflow-hidden flex flex-col md:flex-row min-h-full md:min-h-[auto]">
        
        {/* Success Overlay */}
        <div className={`absolute inset-0 bg-[#111418] z-50 flex flex-col items-center justify-center p-10 text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isSuccess ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-8 animate-pulse shadow-[0_0_40px_rgba(0,210,255,0.2)]">
            <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-heading italic text-white mb-4">Майже готово!</h2>
          <p className="text-text-secondary mb-10 max-w-sm mx-auto leading-relaxed">
            Ми отримали ваше замовлення. Зараз ви будете перенаправлені на сторінку підтвердження...
          </p>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all z-20"
        >
          <span className="text-xl">✕</span>
        </button>

        {/* Left Side: Order Form */}
        <div className="flex-grow p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5">
          <header className="mb-10">
            <h2 className="text-3xl font-heading italic text-white mb-2">Оформлення</h2>
            <p className="text-text-secondary text-sm">Повна анонімність та безпека даних</p>
          </header>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Ваше ім'я" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4.5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all"
                />
              </div>

              <div className="relative group">
                <input 
                  type="tel" 
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+380" 
                  required 
                  className={`w-full bg-white/5 border ${phoneError ? 'border-red-500/30' : 'border-white/10'} rounded-2xl px-6 py-4.5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all`}
                />
                {phoneError && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-red-400 font-bold uppercase tracking-wider bg-red-400/10 px-2 py-1 rounded">
                    {phoneError}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Місто" 
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4.5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all"
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Відділення НП" 
                    required
                    value={formData.branch}
                    onChange={(e) => setFormData({...formData, branch: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4.5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#ff3b30]/10 text-[#ff3b30] text-[9px] font-black px-2 py-1 rounded border border-[#ff3b30]/20 uppercase">
                    NP
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Спосіб оплати</h4>
              <div className="grid grid-cols-1 gap-3">
                <label className={`flex items-center gap-4 p-5 rounded-2xl border transition-all cursor-pointer ${paymentType === 'cod' ? 'bg-accent/5 border-accent/40 shadow-[0_0_20px_rgba(0,210,255,0.05)]' : 'bg-white/5 border-white/5 hover:border-white/10'}`}>
                  <input type="radio" name="payment" checked={paymentType === 'cod'} onChange={() => setPaymentType('cod')} className="w-5 h-5 accent-accent" />
                  <div>
                    <div className="text-white font-bold text-sm">Оплата при отриманні</div>
                    <div className="text-[10px] text-text-secondary uppercase tracking-wider">Без ризиків, після огляду</div>
                  </div>
                </label>
                
                <label className={`flex items-center justify-between p-5 rounded-2xl border transition-all cursor-pointer ${paymentType === 'online' ? 'bg-accent/5 border-accent/40 shadow-[0_0_20px_rgba(0,210,255,0.05)]' : 'bg-white/5 border-white/5 hover:border-white/10'}`}>
                  <div className="flex items-center gap-4">
                    <input type="radio" name="payment" checked={paymentType === 'online'} onChange={() => setPaymentType('online')} className="w-5 h-5 accent-accent" />
                    <div>
                      <div className="text-white font-bold text-sm">Оплата онлайн</div>
                      <div className="text-[10px] text-green-400 font-bold uppercase tracking-wider">Безкоштовна доставка</div>
                    </div>
                  </div>
                  <div className="flex gap-1.5 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                    <div className="w-7 h-4 bg-white/10 rounded-[2px]"></div>
                    <div className="w-7 h-4 bg-white/10 rounded-[2px]"></div>
                  </div>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full mt-4 bg-accent text-black py-5 rounded-2xl font-black text-sm tracking-[0.2em] shadow-[0_15px_30px_rgba(0,210,255,0.2)] hover:shadow-[0_20px_40px_rgba(0,210,255,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
              ) : (
                'ПІДТВЕРДИТИ ЗАМОВЛЕННЯ'
              )}
            </button>
          </form>
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full md:w-[320px] bg-white/[0.02] p-8 md:p-10 flex flex-col">
          <h4 className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] mb-8">Ваше замовлення</h4>
          
          <div className="flex-grow">
            <div className="mb-6">
              <div className="text-white font-bold text-lg mb-1">{product}</div>
              <div className="text-accent font-black text-2xl tracking-tighter">{price} <span className="text-xs font-normal opacity-50">грн</span></div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/5">
              <div className="flex gap-3 text-xs text-text-secondary italic">
                <span className="text-accent">✓</span>
                <span>Анонімна упаковка</span>
              </div>
              <div className="flex gap-3 text-xs text-text-secondary italic">
                <span className="text-accent">✓</span>
                <span>Відправка сьогодні</span>
              </div>
              <div className="flex gap-3 text-xs text-text-secondary italic">
                <span className="text-accent">✓</span>
                <span>Оригінальна якість</span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
              <div className="text-[10px] text-white/40 uppercase tracking-widest mb-3">Підтримка 24/7</div>
              <a href="tel:+380985940006" className="text-white font-bold text-sm hover:text-accent transition-colors">+38 (098) 594-00-06</a>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4 opacity-20 grayscale">
            {/* Security Badges Placeholder */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z"/></svg>
            <div className="text-[9px] font-bold uppercase tracking-tighter">Secure Checkout</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PaymentModal;
