import React from 'react';

const comparisonData = [
  { label: 'Склад', us: '100% натуральний', them: 'Синтетичні хімічні сполуки', win: true },
  { label: 'Тривалість дії', us: 'До 72 годин', them: '4–6 годин', win: true },
  { label: 'Вплив на серце', us: 'Безпечний', them: 'Протипоказаний при ССЗ', win: true },
  { label: 'З алкоголем', us: 'Сумісний', them: 'Небезпечно', win: true },
  { label: 'Звикання', us: 'Відсутнє', them: 'Психологічна залежність', win: true },
  { label: 'Потрібен рецепт', us: 'Ні', them: 'Так', win: true },
  { label: 'Побічні ефекти', us: 'Мінімальні', them: 'Головний біль, припливи, нудота', win: true },
];

const ComparisonTable = () => {
  return (
    <section id="comparison" className="py-20 md:py-32 px-[5%] text-center bg-transparent">
      <h2 className="text-3xl md:text-4xl font-heading mb-4 text-white">
        Натуральний стимулятор vs Синтетична хімія
      </h2>
      <p className="text-text-secondary max-w-2xl mx-auto mb-14">
        Синтетичні інгібітори ФДЕ-5 (клас препаратів на основі силденафілу/тадалафілу) ефективні, але мають суттєві обмеження
      </p>

      <div className="overflow-x-auto pb-4 -mx-5 px-5 md:mx-0 md:px-0">
        <div className="min-w-[600px] max-w-5xl mx-auto border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl shadow-2xl">
          {/* Table Header */}
          <div className="flex bg-white/5 border-b border-white/10">
            <div className="flex-[1.5] p-6"></div>
            <div className="flex-1 p-6 text-accent font-bold text-lg border-x border-white/10">
              🌿 Секрет Казанови
            </div>
            <div className="flex-1 p-6 text-[#666] font-bold text-lg">
              💊 Синтетичні ФДЕ-5
            </div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, idx) => (
            <div key={idx} className={`flex border-b border-white/10 last:border-b-0 hover:bg-white/[0.02] transition-colors`}>
              <div className="flex-[1.5] p-5 text-left text-sm font-semibold text-text-secondary flex items-center">
                {row.label}
              </div>
              <div className="flex-1 p-5 text-white font-medium border-x border-white/10 flex items-center justify-center bg-accent/5">
                <span className="relative">
                  {row.us}
                  <span className="absolute -left-6 top-1 text-accent">✓</span>
                </span>
              </div>
              <div className="flex-1 p-5 text-[#888] text-sm flex items-center justify-center">
                {row.them}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
