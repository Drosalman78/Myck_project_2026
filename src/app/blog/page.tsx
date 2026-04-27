import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatFAB from '@/components/ChatFAB';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Як підвищити рівень тестостерону природним шляхом?',
    excerpt: 'Дізнайтеся про 5 ключових звичок та інгредієнтів, які допоможуть вам відчувати себе впевненіше щодня.',
    image: 'https://images.unsplash.com/photo-1552196564-97284b9fc575?auto=format&fit=crop&q=80&w=800',
    category: 'Здоров\'я',
    date: '24 Квітня, 2026',
    readTime: '5 хв',
    slug: 'how-to-boost-testosterone'
  },
  {
    title: 'Секрети тривалої близькості: Поради експертів',
    excerpt: 'Чому психологічний настрій важливіший за фізичну підготовку, і як «Секрет Казанови» допомагає подолати бар\'єри.',
    image: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&q=80&w=800',
    category: 'Близькість',
    date: '20 Квітня, 2026',
    readTime: '7 хв',
    slug: 'secrets-of-long-intimacy'
  },
  {
    title: 'Натуральні афродизіаки: Від Амазонії до Тибету',
    excerpt: 'Повна подорож по інгредієнтах нашого продукту. Чому ми обрали саме ці 9 компонентів.',
    image: 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?auto=format&fit=crop&q=80&w=800',
    category: 'Інгредієнти',
    date: '15 Квітня, 2026',
    readTime: '10 хв',
    slug: 'natural-aphrodisiacs'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Blog Hero */}
      <section className="pt-40 pb-20 px-[5%] text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,210,255,0.05)_0%,transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading mb-6">Блог впевненості</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Наукові факти, поради експертів та секрети чоловічого здоров'я у нашому щотижневому дайджесті.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-[5%] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {blogPosts.map((post, idx) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={idx}
                className="group flex flex-col h-full glass-effect hover:border-accent/40 transition-all duration-500 overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[0.6rem] font-bold tracking-widest text-accent uppercase">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[0.65rem] text-text-secondary mb-4 uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="text-accent text-xs font-bold tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    ЧИТАТИ ПОВНІСТЮ <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-[5%] bg-accent/5">
        <div className="max-w-4xl mx-auto text-center glass-effect p-12 border-accent/20">
          <h2 className="text-3xl font-heading mb-4 italic">Будьте в темі</h2>
          <p className="text-text-secondary mb-8">Підпишіться на розсилку нових статей та закритих акцій.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Ваш Email" 
              className="flex-grow bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
            />
            <button className="bg-accent text-black px-8 py-4 rounded-2xl font-bold tracking-widest hover:scale-105 transition-all">
              ПІДПИСАТИСЬ
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <ChatFAB />
    </main>
  );
}
