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
        <svg viewBox="0 0 512 512" fill="white" className="w-6 h-6 scale-110">
          <path d="M444.17 32.702c-46.19-11.754-94.593-9.735-139.757 5.827-41.13 14.174-77.25 40.24-104.42 75.364-27.17 35.124-43.91 76.844-48.4 120.574-2.02 19.65-.94 39.46 3.19 58.91 4.13 19.45 10.74 38.3 19.64 56.02l-37.11 110.3c-2.47 7.33-1.04 15.42 3.84 21.6 4.88 6.18 12.39 9.38 20.01 8.52l114.71-12.94c16.35 6.77 33.45 11.64 50.93 14.52 17.48 2.88 35.2 3.96 52.88 3.2 43.7-.72 86.41-11.83 124.08-32.28 37.67-20.45 69.31-50.53 91.95-87.41 22.64-36.88 35.53-79.35 37.45-123.41 1.92-44.06-7.23-87.89-26.58-127.35-19.35-39.46-49.03-72.93-86.2-97.16-37.17-24.23-81.08-37.44-125.86-38.39l-4.22-.05zM228.01 190.502c4.47 0 8.09 3.62 8.09 8.09s-3.62 8.09-8.09 8.09-8.09-3.62-8.09-8.09 3.62-8.09 8.09-8.09zm22.42 1.62c4.34.62 7.37 4.64 6.75 8.98s-4.64 7.37-8.98 6.75-7.37-4.64-6.75-8.98 4.64-7.37 8.98-6.75zm19.47 5.75c3.84 1.25 5.92 5.41 4.67 9.25s-5.41 5.92-9.25 4.67-5.92-5.41-4.67-9.25 5.41-5.92 9.25-4.67zm15.48 9.53c3.08 1.83 4.09 5.8 2.26 8.88s-5.8 4.09-8.88 2.26-4.09-5.8-2.26-8.88 5.8-4.09 8.88-2.26zm31.78-45.71c45.41 13.9 81.39 49.88 95.29 95.29.62 2.03.31 4.14-.88 5.89s-3.08 2.87-5.18 3.12l-10.15 1.18c-2.47.29-4.88-.93-6.19-3.13s-1.31-4.9.01-7.1c-12.01-34.91-39.69-62.59-74.6-74.6-2.2-0.75-3.86-2.58-4.47-4.83s-0.03-4.69 1.13-6.57l5.96-9.61c1.23-1.99 3.39-3.14 5.71-3.04 1.34.06 2.65.43 3.82 1.11zm17.65 31.96c23.01 10.63 41.34 28.96 51.97 51.97.43 1.39.31 2.86-.33 4.14s-1.74 2.22-3.08 2.58l-10.11 2.7c-2.46.66-5.02-.39-6.38-2.61s-1.28-5 0.22-7.14c-8.4-15.53-20.9-28.03-36.43-36.43-2.14-1.15-3.3-3.6-2.88-6.04s2.21-4.31 4.54-4.68l9.87-1.58c1.55-.25 3.14.21 4.34 1.25s1.95 2.53 2.19 4.12l.08.74zm14.59 40.54c1.17 6.47 2.06 13.01 2.68 19.59.18 1.94-.31 3.86-1.39 5.43s-2.73 2.59-4.6 2.85l-10.23 1.45c-2.43.34-4.82-.93-6.03-3.13s-1.18-4.86.13-7.01c-0.25-3.13-.64-6.26-1.16-9.37-.36-2.16.14-4.38 1.41-6.14s3.23-2.78 5.4-2.85l10.37-0.3c1.9.01 3.7.83 5.02 2.26s1.91 3.3 1.63 5.22l.07-.04zM321.36 341.252c-23.75 22.84-59.51 32.96-92.48 26.15-32.97-6.81-61.9-28.18-74.6-55.15-4.26-9.05-5.91-18.99-4.85-28.9s4.23-19.34 9.4-27.81c1.92-3.14 5.37-4.99 9.03-4.83 1.83.08 3.6.83 4.9 2.1l23.51 23.01c2.47 2.42 3.32 6.04 2.15 9.24s-4.34 5.36-7.72 5.24l-11.41-.4c-2.44-.09-4.72 1.05-6.14 3.06s-1.63 4.59-.57 6.94c12.28 27.24 34.39 49.35 61.63 61.63 2.35 1.06 4.93.85 7.1-.57s3.47-3.7 3.4-6.14l-.4-11.41c-.12-3.38 1.97-6.52 5.14-7.74s6.83-.34 9.27 2.11l23.41 23.6c2.59 2.61 3.39 6.55 2.01 9.97-1.38 3.42-4.66 5.65-8.31 5.65l-.47-.04z"/>
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
