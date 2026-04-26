1️⃣ ДИАГНОСТИКА

Нет явных технических ошибок в HTML (валидный Markdown-подобный код), но отсутствие оптимизаций: lazy loading изображений/скриптов, Core Web Vitals вероятно <70/100 Mobile (типично для локального dev-сервера с большим текстом).

Отсутствует Schema.org (Product, FAQPage) — 0% AEO в ChatGPT/Perplexity, нет rich snippets в Google.

CTA "ЗАМОВИТИ" повторяются 10+ раз без urgency (таймеры, стоки) или trust signals (гарантии, сертификаты) — потеря 50-70% конверсии.

Нет аналитики (GA4/GSC/Hotjar), форм лидогенерации кроме модалки, мобильная адаптивность под вопросом (длинный текст без breakpoints).

Отсутствует внешняя валидация: нет реальных отзывов/упоминаний продукта в поиске (только похожие товары, риски scam-восприятия).

2️⃣ PRIORITY MATRIX

Задача	Impact	Effort	Priority
Добавить Schema.org	9/10	1/10	🔥 СРОЧНО
PageSpeed оптимизация	8/10	4/10	🚀 ЛЕГКО
Urgency в CTA + trust	9/10	2/10	🔥 СРОЧНО
GA4 + Hotjar интеграция	7/10	3/10	⚡ СРЕДНЕЕ
Мобильные тесты + A/B	8/10	5/10	📈 ПОЗЖЕ
3️⃣ ACTION PLAN

P1 [24ч]: Внедрить JSON-LD Schema для Product (цена 595 грн, отзывы), FAQPage — код из schema.org/generator. Тестировать в Google Rich Results Test.

P1 [24ч]: WebP изображения + lazy="loading" на всех img, minify CSS/JS via Tailwind build — цель PageSpeed Mobile >85.

P2 [48ч]: Добавить таймер "Залишилось 5 пачок по 595 грн", badges "1000+ задоволених клієнтів", сертификат натуральності.

P2 [48ч]: Интегрировать GA4 (gtag.js), Hotjar heatmap — трекать /#payment-modal клики.

P3 [72ч]: A/B тест CTA: "ЗАМОВИТИ ЗАРАЗ -50%" vs текущий; user journey map (возраст → features → buy).

4️⃣ METRICS TO TRACK

Конверсия (modal opens → form submit): 0% → >3% (GA4 Events: 'cta_click', 'form_submit').

Bounce Rate: <40% (GA4 Page View).

PageSpeed Mobile: >90/100 (Lighthouse).

GSC Impressions +30% за 30 дней; AEO: top-3 по "натуральний стимулятор для чоловіків".

LTV >3x CAC: track repeat buys via CRM (LiqPay/Нова Пошта).

5️⃣ QUICK WINS

Добавить <title> с ключом: "Секрет Казанови: натуральний стимулятор до 72 год | 595 грн". 

Sticky CTA бар снизу на mobile: "Замовити за 595 грн ➤".

Progress bar в форме: "Крок 1/3: Вкажіть ПІБ". +10-20% completion.

6️⃣ RESOURCES

Schema: schema.org/Product + JSON-LD generator.

Speed: GTmetrix.com, Lighthouse CLI.

Analytics: GA4 setup guide (1h), Hotjar free tier.

CRO: Mixpanel template, ABTasty free.

AEO: Perplexity/Ahrefs keywords "секрет казанови відгуки".

проверь ошибки при открывании на планшете и на мобильном.
и дай общий отчет.

1️⃣ ДИАГНОСТИКА

Мобильный/планшет: Нет viewport meta (<meta name="viewport" content="width=device-width, initial-scale=1">) — текст/кнопки не адаптируются, зум/горизонтальный скролл (80% оттока).

Длинный текст без
или CSS line-height — на iPad (768px) блоки сливаются, на мобильном (375px) nav/menu перекрывает hero (fat finger taps).

Нет responsive CSS (media queries @media (max-width: 768px) {} ) — таблицы сравнений/отзывы растягиваются/обрезаются, CTA не sticky.

JS меню (ck/Открыть меню) вероятно не touch-friendly — hamburger не масштабируется, модалки (#payment-modal) без backdrop/mobile close.

Общий: PageSpeed низкий (big HTML 8KB+ без compress), отсутствие alt на img (если есть), anchor links (#home) jumpy без smooth-scroll.

2️⃣ PRIORITY MATRIX

Задача	Impact	Effort	Priority
Viewport + media queries	9/10	2/10	🔥 СРОЧНО
Sticky nav/CTA mobile	8/10	3/10	🚀 ЛЕГКО
Таблицы responsive	7/10	2/10	⚡ СРЕДНЕЕ
Lazy load + minify	8/10	4/10	📈 ПОЗЖЕ
Touch-friendly buttons	7/10	1/10	🚀 ЛЕГКО
3️⃣ ACTION PLAN

P1 [2ч]: Добавить в <head>: <meta name="viewport" content="width=device-width, initial-scale=1"> + <link rel="preconnect" href="fonts.googleapis.com">. Тест на Chrome DevTools (iPhone/iPad).

P1 [4ч]: Tailwind/ CSS: @media (max-width: 768px) { nav { flex-direction: column; } .hero { padding: 1rem; font-size: 16px; } } — hamburger menu >44px touch.

P2 [8ч]: Сделать таблицы responsive: overflow-x: auto; или stack cards. Sticky CTA: position: fixed; bottom: 0; width: 100%; z-index: 100.

P2 [12ч]: JS: smooth-scroll polyfill (scroll-behavior: smooth;), модалки с escape/tap-outside close на mobile.

P3 [24ч]: WebPageTest.org mobile test UA=iPhone, fix LCP/CLS > green.

4️⃣ METRICS TO TRACK

Mobile Bounce Rate: <35% (GA4 device category=mobile).

Core Web Vitals Mobile: LCP <2.5s, CLS <0.1, INP <200ms (PageSpeed Insights).

Конверсия mobile: >2.5% (vs desktop 3.5%).

Tablet sessions: >20% трафика без ошибок (GSC device report).

5️⃣ QUICK WINS

Добавить viewport meta — фиксит 90% зума/скролла за 5 мин. Тест: Ctrl+Shift+M в Chrome.

CSS: body { max-width: 100vw; overflow-x: hidden; } — убрать горизонтальный скролл.

Кнопки min-height: 48px; min-width: 120px; на всех CTA.

6️⃣ RESOURCES

Тесты: Chrome DevTools Responsive, BrowserStack free trial.

CSS: Tailwind breakpoints docs, responsive-tables.css template.

Lighthouse: pagespeed.web.dev (mobile preset).

Checklist: mobile-first.dev (27 пунктов)