'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AgeSwitcher from '@/components/AgeSwitcher';
import ComparisonTable from '@/components/ComparisonTable';
import Pricing from '@/components/Pricing';
import Ingredients from '@/components/Ingredients';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import AgeGate from '@/components/AgeGate';
import PaymentModal from '@/components/PaymentModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ name: '', price: 0 });

  const handleOpenModal = (name: string, price: number) => {
    setSelectedProduct({ name, price });
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Header />
      <Hero onBuy={handleOpenModal} />
      <AgeSwitcher />
      <ComparisonTable />
      <Ingredients />
      <Pricing onBuy={handleOpenModal} />
      <Reviews />
      <FAQ />
      <Footer />
      
      <StickyCTA onBuy={handleOpenModal} />
      <AgeGate />
      
      <PaymentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={selectedProduct.name}
        price={selectedProduct.price}
      />
    </main>
  );
}
