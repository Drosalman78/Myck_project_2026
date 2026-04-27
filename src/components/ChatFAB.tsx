'use client';

import React, { useState, useEffect, useRef } from 'react';

const ChatFAB = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const fabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // "Mercedes" entrance logic: show after 400px scroll
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
      
      // Auto-close on scroll for clean UX
      if (isOpen) setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleCall = () => {
    if (window.innerWidth < 1024) {
      window.location.href = 'tel:+380985940006';
    } else {
      setShowQR(true);
    }
    setIsOpen(false);
  };

  const chatOptions = [
    { 
      name: 'Передзвонити', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      onClick: handleCall,
      bg: 'bg-white/10',
      border: 'border-white/40'
    },
    { 
      name: 'Viber', 
      icon: (
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path d="M19.4 14.4c-.2-.4-1.6-1.9-1.8-2.1-.2-.1-.4-.2-.6-.2-.5 0-1.7.7-2.1 1.3-.3.4-.4.5-.8.3-.4-.2-1.8-1-3.1-2.3-1.3-1.3-2.1-2.7-2.3-3.1-.2-.4-.1-.5.3-.8.6-.4 1.3-1.6 1.3-2.1 0-.2-.1-.4-.2-.6-.2-.4-1.6-1.9-2.1-2.1-.2-.1-.4-.1-.6.1-.2.2-1.3 1.3-1.3 2.3 0 1 .3 2.5 1.2 4.1.9 1.6 2.2 3.5 4.1 5.4 1.9 1.9 3.8 3.3 5.4 4.1 1.6.9 3.1 1.2 4.1 1.2 1 0 2.1-1.1 2.3-1.3.2-.2.3-.4.1-.7zm-4.9-12.3c2.2.2 4.3.9 6.1 2.2.2.1.2.4.1.6l-.6.8c-.1.2-.3.2-.5.1-1.5-1.1-3.2-1.7-5.1-1.8-.2 0-.4-.2-.4-.4v-1c.1-.2.2-.4.4-.3zm-.3 3.8c1.5.2 2.9.7 4 1.5.2.1.2.4.1.6l-.6.8c-.1.2-.3.2-.5.1-1-.7-2.2-1.2-3.4-1.3-.2 0-.4-.2-.4-.4v-1c0-.2.2-.4.4-.3h.3zm.3 3.6c.7.1 1.3.3 1.9.7.2.1.2.4.1.5l-.4.8c-.09.18-.31.25-.49.17-.46-.29-1.01-.48-1.59-.56-.2-.03-.35-.2-.35-.41v-1c0-.2.2-.4.4-.2z"/>
        </svg>
      ),
      href: 'viber://chat?number=%2B380985940006',
      bg: 'bg-[#7360f2]/10',
      border: 'border-[#7360f2]/40'
    },
    { 
      name: 'Telegram', 
      icon: (
        <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-[-2px]">
          <path d="M21.9 2.1L1.8 9.8c-1.4.5-1.4 1.3-.2 1.6l5.2 1.6 2 6.2c.2.6.1.9.8.9.5 0 .7-.2 1-1l2.9-4 6.1 4.5c1.1.6 1.9.3 2.2-1l4-18.9c.4-1.6-.6-2.3-1.6-1.9z"/>
        </svg>
      ),
      href: 'tg://resolve?domain=casanovasecret',
      bg: 'bg-[#0088cc]/10',
      border: 'border-[#0088cc]/40'
    },
    { 
      name: 'WhatsApp', 
      icon: (
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      href: 'https://wa.me/380985940006',
      bg: 'bg-[#25D366]/10',
      border: 'border-[#25D366]/40'
    },
    { 
      name: 'Messenger', 
      icon: (
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.908 1.464 5.501 3.753 7.234.197.148.318.384.322.637l.017 2.193c.004.538.56.883 1.041.642l2.455-1.23a.81.81 0 0 1 .59-.046c.582.164 1.196.251 1.822.251 5.523 0 10-4.145 10-9.258S17.523 2 12 2zm1 12.5l-2.5-2.5-4.5 2.5 5-5.5 2.5 2.5 4.5-2.5-5 5.5z"/>
        </svg>
      ),
      href: 'https://m.me/casanovasecret',
      bg: 'bg-[#006AFF]/10',
      border: 'border-[#006AFF]/40'
    }
  ];

  // Sizing constants
  const sizeClass = "w-[52px] h-[52px] md:w-[56px] md:h-[56px]";
  const toggleSizeClass = "w-[52px] h-[52px] md:w-[56px] md:h-[56px]";

  return (
    <div 
      ref={fabRef} 
      className={`fixed bottom-7 right-5 sm:bottom-10 sm:right-10 z-[2000] flex flex-col items-end gap-4 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-20 scale-75 blur-2xl pointer-events-none'}`}
    >
      {/* Menu Stack */}
      <div className={`flex flex-col gap-4 transition-all duration-500 ease-out ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-0 pointer-events-none'}`}>
        {chatOptions.map((opt, i) => (
          <div key={i} className="flex items-center justify-end group">
            <span className="mr-4 px-3 py-1.5 rounded-lg bg-black/60 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/5">
              {opt.name}
            </span>
            {opt.href ? (
              <a 
                href={opt.href} 
                className={`${sizeClass} rounded-full flex items-center justify-center shadow-xl backdrop-blur-md border ${opt.border} hover:scale-110 transition-transform ${opt.bg}`}
              >
                {opt.icon}
              </a>
            ) : (
              <button 
                onClick={opt.onClick}
                className={`${sizeClass} rounded-full flex items-center justify-center shadow-xl backdrop-blur-md border ${opt.border} hover:scale-110 transition-transform ${opt.bg}`}
              >
                {opt.icon}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Main Toggle Button - Mercedes Smoothness + Premium Flow */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`${toggleSizeClass} rounded-full flex items-center justify-center shadow-2xl backdrop-blur-xl border border-white/20 transition-all duration-500 relative group overflow-hidden ${isOpen ? 'bg-white/10' : 'bg-white/5'}`}
        aria-label="Зв'яжіться з нами"
      >
        {/* Premium Shimmer/Flow Layer */}
        <div className="absolute inset-0 animate-premium-flow pointer-events-none opacity-50"></div>
        <div className={`absolute inset-0 bg-accent/10 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}></div>
        
        {isOpen ? (
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6 text-white rotate-90 transition-transform duration-300 relative z-10">
             <line x1="18" y1="6" x2="6" y2="18"></line>
             <line x1="6" y1="6" x2="18" y2="18"></line>
           </svg>
        ) : (
          <div className="relative z-10">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-white">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
             </svg>
          </div>
        )}
      </button>

      {/* QR Modal */}
      {showQR && (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/80 backdrop-blur-xl px-4" onClick={() => setShowQR(false)}>
          <div className="bg-zinc-900/90 border border-white/10 p-10 rounded-[2.5rem] max-w-sm w-full text-center shadow-2xl scale-up" onClick={e => e.stopPropagation()}>
            <h3 className="text-white font-heading text-2xl mb-3">Швидкий дзвінок</h3>
            <p className="text-text-secondary text-base mb-8">Відскануйте код камерою смартфона</p>
            <div className="bg-white p-5 rounded-3xl mb-8 mx-auto w-fit shadow-2xl">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=tel:+380985940006&bgcolor=ffffff&color=000000" 
                alt="QR Code" 
                className="w-[200px] h-[200px]"
              />
            </div>
            <p className="text-accent text-xl font-bold mb-8 tracking-widest">+38 (098) 594-00-06</p>
            <button onClick={() => setShowQR(false)} className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-colors font-medium">Закрити</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatFAB;
