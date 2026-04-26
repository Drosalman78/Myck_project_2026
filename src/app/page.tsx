'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AgeSwitcher from '@/components/AgeSwitcher';
import ComparisonTable from '@/components/ComparisonTable';
import Pricing from '@/components/Pricing';
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
      <Pricing onBuy={handleOpenModal} />
      
      {/* Остальні секції будуть додані далі (Ingredients, Reviews, FAQ) */}
      
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
