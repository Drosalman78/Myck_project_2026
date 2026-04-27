import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatFAB from '@/components/ChatFAB';
import Link from 'next/link';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // В майбутньому ми будемо тягнути статтю з Firebase за допомогою params.slug
  const post = {
    title: 'Як підвищити рівень тестостерону природним шляхом?',
    category: 'Здоров\'я',
    date: '24 Квітня, 2026',
    image: 'https://images.unsplash.com/photo-1552196564-97284b9fc575?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>Тестостерон — це головний чоловічий гормон, який впливає не тільки на сексуальну енергію, а й на настрій, обмін речовин та силу м'язів. З віком його рівень природним чином знижується, але існують перевірені способи підтримати його в нормі без хімічних препаратів.</p>
      
      <h2>1. Якість сну</h2>
      <p>Сон — це час, коли ваш організм виробляє найбільшу кількість гормонів. Дослідження показують, що лише один тиждень недосипу (менше 5 годин на добу) знижує рівень тестостерону на 15%. Прагніть до 7-8 годин якісного сну.</p>

      <h2>2. Силові тренування</h2>
      <p>Вправи з вагами, особливо багатосуглобові (присідання, станова тяга), є потужним стимулом для гормональної системи. Головне — не перетренуватися, щоб не підвищувати рівень кортизолу, який пригнічує тестостерон.</p>

      <h2>3. Раціон та натуральні компоненти</h2>
      <p>Цинк, Магній та вітамін D — фундамент чоловічого здоров'я. Крім того, природа подарувала нам унікальні рослини, такі як Женьшень та Кора Катуаби, які допомагають організму краще використовувати власний гормональний ресурс.</p>
      
      <p>Саме тому ми об'єднали 9 таких компонентів у «Секрет Казанови», щоб ви могли отримувати результат без побічних ефектів.</p>
    `
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <article className="pt-40 pb-20 px-[5%]">
        <div className="max-w-3xl mx-auto">
          {/* Article Header */}
          <div className="mb-12">
            <Link href="/blog" className="text-accent text-[0.7rem] font-bold tracking-widest uppercase mb-8 inline-block hover:gap-3 transition-all flex items-center gap-2">
              <span>←</span> НАЗАД ДО БЛОГУ
            </Link>
            <div className="flex items-center gap-4 text-[0.7rem] text-text-secondary mb-6 uppercase tracking-widest">
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">{post.category}</span>
              <span>{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading mb-10 leading-tight">
              {post.title}
            </h1>
            <div className="aspect-video w-full rounded-[32px] overflow-hidden mb-12 border border-white/10">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-invert prose-p:text-text-secondary prose-p:leading-relaxed prose-h2:text-2xl prose-h2:font-heading prose-h2:italic prose-h2:mt-12 prose-h2:mb-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Product CTA inside article */}
          <div className="mt-20 p-8 md:p-12 glass-effect border-accent/20 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            <h3 className="text-2xl font-bold mb-4 italic">Готові до змін сьогодні?</h3>
            <p className="text-text-secondary mb-8 max-w-md mx-auto">
              Отримайте гарантований результат вже через 30 хвилин після прийому. Повністю натурально, без побічних ефектів.
            </p>
            <Link 
              href="/#pricing" 
              className="inline-block bg-accent text-black px-12 py-4 rounded-2xl font-bold tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,210,255,0.2)]"
            >
              СПРОБУВАТИ СЕКРЕТ КАЗАНОВИ
            </Link>
          </div>
        </div>
      </article>

      <Footer />
      <ChatFAB />
    </main>
  );
}
