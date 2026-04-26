🔍 1️⃣ ДІАГНОСТИКА — 7 КРИТИЧНИХ ПРОБЛЕМ
Технічні проблеми
❌ КРИТИЧНО #1: Дублювання footer-контенту
На сторінці є два окремих блоки footer — один з посиланнями # (пусті), другий з реальними посиланнями на privacy.html та terms.html. Це заплутує пошукових роботів, дає duplicate content і виглядає непрофесійно.

❌ КРИТИЧНО #2: Пусті посилання у першому footer
<a href="#">Договір оферти</a> та <a href="#">Політика конфіденційності</a> ведуть нікуди. Це пряме порушення вимог платіжних систем (LiqPay, WayForPay) та Google Merchant. Без цих документів — жодна платіжна система не підключиться повністю.

❌ КРИТИЧНО #3: Немає Schema.org розмітки
Нульова видимість в AEO (ChatGPT, Perplexity, Google AI Overviews). Product Schema, FAQ Schema, Review Schema — все відсутнє. Конкуренти з розміткою будуть отримувати трафік замість тебе.

⚠️ ВАЖЛИВО #4: Відсутній Open Graph / Twitter Cards
Коли хтось ділиться посиланням в Telegram, Viber, Facebook — відображається голий URL без картинки та опису. Для продукту з «сарафанним радіо» як каналом — це втрата 30-40% потенційних переходів.

⚠️ ВАЖЛИВО #5: Немає Google Analytics 4 / Meta Pixel
Неможливо відстежувати конверсії, будувати аудиторії для ретаргетингу, рахувати реальний CAC. Гроші на трафік = в темряві.

⚠️ #6: Payment Modal — невидимий баг
CTA кнопки ведуть на #payment-modal, але в коді сторінки цей модуль не видно у статичному HTML. Якщо він завантажується через JS, то на повільному мобільному (3G) або при заблокованому скрипті — замовлення неможливе взагалі. Це найбільша дірка у воронці.

⚠️ #7: Лінки "Договір оферти" і "Зв'язатися з нами" в footer
Зв'язатися з нами нікуди не веде (немає href або форми). Відсутній Viber/Telegram CTA поряд з телефоном — для українського ринку 2026 це критично.

🎯 2️⃣ PRIORITY MATRIX
Задача	Impact	Effort	Пріоритет
Виправити payment modal (перевірити JS)	10/10	2/10	🔥 СРОЧНО
Видалити дублікат footer	9/10	1/10	🔥 СРОЧНО
Виправити пусті href="#" → реальні URL	9/10	1/10	🔥 СРОЧНО
Додати FAQ Schema.org (JSON-LD)	8/10	2/10	🚀 ЛЕГКО
Додати Product Schema.org	8/10	3/10	🚀 ЛЕГКО
Open Graph / Social Share Meta теги	7/10	1/10	🚀 ЛЕГКО
GA4 + Meta Pixel	8/10	3/10	⏰ 48 годин
Viber/Telegram CTA поряд з номером	6/10	1/10	⏰ 48 годин
Sticky CTA на мобільних	7/10	3/10	📅 72 години
A/B тест: ціна vs цінність на хіт-картці	7/10	4/10	📅 Наступний тиждень
📱 3️⃣ CROSS-DEVICE / CROSS-BROWSER АУДИТ
Viewport розміри цільових пристроїв
Пристрій	CSS Viewport	Pixel Ratio	Особливості
Samsung Galaxy A3 (A32)	360 × 800 px	3.0x	Старіший чіп, повільне завантаження критичне
Samsung Note 10+	412 × 869 px 
3.5x	Великий екран, горизонтальна орієнтація часто
iPhone 13 Pro	390 × 844 px 
3.0x	Safari WebKit, нестандартний CSS рендеринг
Потенційні проблеми по пристроях
Samsung Galaxy A3 (360px viewport):

Навігаційне меню з [ГОЛОВНА][ПЕРЕВАГИ][ЯК ЦЕ ПРАЦЮЄ]... — на 360px горизонтальний скрол гарантований якщо немає overflow: hidden

Таблиця порівняння "Натуральний vs Синтетична хімія" — 8-колонкова таблиця на 360px ЗЛАМАЄТЬСЯ без CSS overflow-x: scroll або конвертації в картки

Вибір віку 20–35 / 35–50 / 50+ — три кнопки в ряд на 360px можуть накладатись

Samsung Note 10+ (412px, Note 10 має 412×869px):

Загалом достатньо місця, але Samsung Internet Browser має специфічний рендеринг тіней та градієнтів

Перевір position: sticky для CTA — Samsung Internet іноді ігнорує sticky в старих версіях

iPhone 13 Pro (390px, Safari):

Safari не підтримує деякі CSS властивості без префіксів: backdrop-filter потребує -webkit-backdrop-filter

position: fixed на Safari iOS "тремтить" при скролі — якщо є sticky header, перевір -webkit-overflow-scrolling: touch

Age gate (модальне вікно підтвердження 18+) — на iOS Safari overflow: hidden на body не завжди блокує скрол фону

Браузери:

Firefox — CSS Grid та Flexbox рендеряться злегка інакше, особливо gap у старіших версіях

Samsung Internet Browser — власний рушій, часто відстає від Chrome на 1-2 версії

Safari macOS/iOS — найпроблемніший: немає підтримки деяких JS API, інакше рендерить шрифти

📋 4️⃣ ACTION PLAN
[Сьогодні — 0-4 години]

Відкрий DevTools → перевір чи відкривається #payment-modal — якщо JS помилка в консолі, знайди її і виправ ПЕРШОЧЕРГОВО

Видали перший (дублікатний) footer з пустими href="#" — залиш тільки нижній з реальними посиланнями

Переконайся, що privacy.html і terms.html реально доступні (HTTP 200)

[24 години]

Додай Open Graph meta теги в <head>:

xml
<meta property="og:title" content="Секрет Казанови — Натуральний стимулятор | До 72 годин дії">
<meta property="og:description" content="Ефект з 30 хвилин. До 72 годин дії. Анонімна доставка по Україні.">
<meta property="og:image" content="https://yourdomain.ua/og-image.jpg">
<meta property="og:type" content="product">
Додай FAQ Schema (JSON-LD) — вже є готовий FAQ контент на сторінці, достатньо обернути в schema

[48 годин]

Встанови GA4 + Meta Pixel — без цього будь-який трафік = гроші на вітер

Додай Viber/Telegram посилання поряд з телефонним номером +38 (098) 594-00-06

Тестуй таблицю порівняння на 360px — переробери в cards або додай overflow-x: auto

[72 години]

Sticky "ЗАМОВИТИ" кнопка внизу екрану на мобільних (fixed, z-index 999)

Перевір age gate на iOS Safari — протестуй що body scroll блокується

📊 5️⃣ METRICS TO TRACK (KPI + Цілі)
Метрика	Поточний стан	Ціль 30 днів
Конверсія (замовлення/відвідувачі)	Невідомо (немає GA4)	3–5%
Bounce Rate	Невідомо	< 45%
PageSpeed Mobile	Не виміряно (localhost)	> 75/100
Scroll depth до секції pricing	Невідомо	> 60%
CTR кнопок "ЗАМОВИТИ"	Невідомо	> 15%
AEO видимість (FAQ Schema)	0%	Top-5 у Perplexity/ChatGPT
⚡ 6️⃣ QUICK WINS — ЩО ЗРОБИТИ ЗА 24 ГОДИНИ
[10 хв] — Видали дублікат footer, виправи пусті href="#"

[15 хв] — Додай Open Graph теги → перевір через opengraph.xyz

[20 хв] — Додай FAQ Schema JSON-LD (6 питань вже є — просто обгорни в schema)

[10 хв] — Встав Viber deeplink: viber://chat?number=+380985940006

[30 хв] — Підключи GA4 (безкоштовно, 5 хвилин на реєстрацію)

[5 хв] — Перевір консоль браузера на localhost:3000 — чи є JS-помилки при кліку на #payment-modal

🛠️ 7️⃣ РЕСУРСИ
Інструмент	Задача	Ціна
PageSpeed Insights	Core Web Vitals після деплою	Безкоштовно
schema.org/Product	Product + FAQ розмітка	Безкоштовно
Meta Business Suite	Meta Pixel + аудиторії	Безкоштовно
Google Analytics 4	Конверсії та воронка	Безкоштовно
Hotjar (Free tier)	Heatmaps + session recordings	Безкоштовно
opengraph.xyz	Перевірка соцмережевих прев'ю	Безкоштовно
BrowserStack	Реальне тестування на Samsung A3, Note 10+, iPhone 13 Pro	$29/міс або trial
Responsively App	Локальне тестування мультидевайс	Безкоштовно
