function updatePaymentUI(radioInput) {
    // Всі картки робимо неактивними
    document.querySelectorAll('.payment-option').forEach(opt => {
        opt.classList.remove('active-opt');
    });

    // Робимо вибрану картку активною
    const selectedOptionEl = radioInput.closest('.payment-option');
    selectedOptionEl.classList.add('active-opt');

    // Керуємо видимістю платіжних систем і текстом кнопки
    const onlineGateways = document.getElementById('online-gateways');
    const submitBtn = document.getElementById('submit-order-btn');

    if (radioInput.value === 'online') {
        onlineGateways.style.display = 'block';
        submitBtn.textContent = 'Перейти до оплати';
    } else {
        onlineGateways.style.display = 'none';
        submitBtn.textContent = 'Оформити замовлення';
    }
}

// Gateway Cards Logic
const gtCards = document.querySelectorAll('.gt-card');
gtCards.forEach(card => {
    card.addEventListener('click', () => {
        gtCards.forEach(c => c.classList.remove('active-gt'));
        card.classList.add('active-gt');
        card.querySelector('input').checked = true;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up, .slow-appear').forEach((el) => {
        observer.observe(el);
    });

    // Відео продовжує залишатися фіксованим за допомогою CSS. 
    // Жодних 3D трансформацій більше не потрібно, бо CSS mix-blend-mode 
    // сам робить прозорий трафарет на скролі.

    // FAB Scroll Visibility & Toggle Logic
    const fabToggleBtn = document.getElementById('fab-toggle-btn');
    const fabContainer = document.getElementById('fab');

    if (fabContainer) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                fabContainer.classList.add('is-visible');
            } else {
                fabContainer.classList.remove('is-visible');
                fabContainer.classList.remove('active'); // Close menu on top
            }
        });
    }

    if (fabToggleBtn) {
        fabToggleBtn.addEventListener('click', () => {
            fabContainer.classList.toggle('active');
        });

        // Close when clicking outside
        document.addEventListener('click', (event) => {
            if (!fabContainer.contains(event.target) && event.target !== fabToggleBtn && !fabToggleBtn.contains(event.target)) {
                fabContainer.classList.remove('active');
            }
        });
    }

    // Age Switcher Logic & Dynamic Colors
    const ageColors = {
        young:  '#00d2ff', // Ice Blue   — Енергія, технології, нічне життя
        mid:    '#c9a227', // Luxury Gold — Статус, Rolex, преміальність
        senior: '#10b981'  // Emerald Green — Безпека, природа, медицина
    };

    document.querySelectorAll('.age-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // 1. Оновлення активної кнопки
            document.querySelectorAll('.age-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const ageCategory = this.getAttribute('data-age');

            // 2. Плавна зміна кольору через CSS-змінну (@property забезпечує анімацію)
            document.documentElement.style.setProperty('--accent-color', ageColors[ageCategory]);

            // 3. Приховати поточну активну групу
            const currentGroup = document.querySelector('.age-group.active-group');
            if (currentGroup) {
                currentGroup.style.opacity = '0';
                currentGroup.style.transform = 'translateY(-8px)';
                currentGroup.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
            }

            // 4. Показати нову групу після короткої паузи (iOS-ефект)
            setTimeout(() => {
                document.querySelectorAll('.age-group').forEach(g => {
                    g.classList.remove('active-group');
                    g.style.opacity = '';
                    g.style.transform = '';
                    g.style.transition = '';
                });
                const newGroup = document.getElementById('cards-' + ageCategory);
                if (newGroup) newGroup.classList.add('active-group');
            }, 200);
        });
    });

    // ============================================
    // BURGER MENU LOGIC
    // ============================================
    const burgerBtn = document.getElementById('burgerToggle');
    const overlayMenu = document.getElementById('glassOverlay');
    const overlayLinks = document.querySelectorAll('.overlay-link, .overlay-btn-order');
    const closeBtn = document.getElementById('overlayCloseBtn');
    const body = document.body;

    function closeOverlay() {
        burgerBtn.classList.remove('active');
        overlayMenu.classList.remove('active');
        body.style.overflow = '';
    }

    if (burgerBtn && overlayMenu) {
        burgerBtn.addEventListener('click', () => {
            if (overlayMenu.classList.contains('active')) {
                closeOverlay();
            } else {
                burgerBtn.classList.add('active');
                overlayMenu.classList.add('active');
                body.style.overflow = 'hidden';
            }
        });

        overlayLinks.forEach(link => link.addEventListener('click', closeOverlay));
        if (closeBtn) closeBtn.addEventListener('click', closeOverlay);

        // Клік по порожньому фону
        overlayMenu.addEventListener('click', (e) => {
            if (e.target === overlayMenu || e.target.classList.contains('overlay-nav')) {
                closeOverlay();
            }
        });
    }

    // Modal Logic
    const paymentModal = document.getElementById('payment-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const buyButtons = document.querySelectorAll('.btn-primary');
    
    if (paymentModal) {
        // Open modal on any primary buy button click
        buyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if(btn.getAttribute('href') && btn.getAttribute('href').startsWith('#')) {
                    // if it's an anchor link, don't open modal, let it scroll
                    if(btn.getAttribute('href') === '#pricing') return;
                }
                e.preventDefault();
                paymentModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Stop background scrolling
            });
        });

        // Close modal logic
        const closeModal = () => {
            paymentModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        modalCloseBtn.addEventListener('click', closeModal);

        // Close on backdrop click
        paymentModal.addEventListener('click', (event) => {
            if (event.target === paymentModal) {
                closeModal();
            }
        });
        
        // Checkout Form Validation & Sanitization
        const checkoutForm = document.getElementById('checkout-form');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => {
                const nameInput = document.getElementById('buyer-name');
                const phoneInput = document.getElementById('buyer-phone');
                
                // Sanitize input (basic XSS prevention and unwanted characters strip)
                const sanitize = (str) => {
                    return str.replace(/[<>="']/g, "").trim();
                };
                
                const sanitizedName = sanitize(nameInput.value);
                const sanitizedPhone = sanitize(phoneInput.value);
                
                nameInput.value = sanitizedName;
                phoneInput.value = sanitizedPhone;
                
                // Frontend phone checking
                const phoneRegex = /^\+?[0-9]{10,14}$/;
                if(!phoneRegex.test(sanitizedPhone)) {
                    e.preventDefault();
                    alert("Перевірте номер телефону. Дозволені лише цифри (від 10 до 14 символів) та знак + на початку.");
                    phoneInput.focus();
                    return false;
                }
                
                // If everything is OK, standard submit takes over (the inline one currently stops default for demo)
            });
        }
    }
});
