
import React, { useState } from 'react';

const globalScholarships = [
  {
    name: 'Chevening Scholarships',
    provider: 'UK Government',
    country: 'United Kingdom',
    coverage: 'Fully Funded',
    value: 'Full Coverage',
    level: 'Masters',
    desc: 'Awarded to outstanding professionals with leadership potential to study in the UK.',
    tags: ['LEADERSHIP', 'PRESTIGIOUS']
  },
  {
    name: 'Fulbright Program',
    provider: 'US Department of State',
    country: 'United States',
    coverage: 'Fully Funded',
    value: 'Full Stipend',
    level: 'Postgraduate',
    desc: 'The most prestigious academic exchange program in the United States.',
    tags: ['RESEARCH', 'GLOBAL']
  }
];

const ScholarshipCard: React.FC<{ schol: typeof globalScholarships[0]; onApply?: () => void }> = ({ schol, onApply }) => {
  return (
    <div className="group bg-white rounded-[3rem] overflow-hidden border border-neutral-dark shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      <div className="h-60 relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent"></div>
        <div className="absolute top-4 left-6">
          <span className="bg-primary px-4 py-1.5 rounded-full text-[9px] font-black uppercase text-white shadow-lg">
            {schol.coverage}
          </span>
        </div>
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">{schol.country}</p>
          <h3 className="text-2xl font-black leading-tight">{schol.name}</h3>
        </div>
      </div>
      <div className="p-10 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-6">
          {schol.tags.map(tag => (
            <span key={tag} className="text-[9px] font-black bg-neutral text-slate-400 border border-neutral-dark px-3 py-1 rounded-full tracking-widest">{tag}</span>
          ))}
        </div>
        
        <p className="text-sm text-slate-500 mb-8 leading-relaxed">{schol.desc}</p>
        
        <div className="space-y-4 mb-8 flex-1">
          <div className="flex items-center gap-3 text-secondary">
             <i className="fa-solid fa-coins text-primary"></i>
             <p className="text-sm font-bold">{schol.value}</p>
          </div>
          <div className="flex items-center gap-3 text-secondary">
             <i className="fa-solid fa-user-graduate text-primary"></i>
             <p className="text-sm font-bold">{schol.level}</p>
          </div>
        </div>

        <button 
          onClick={onApply}
          className="w-full py-5 bg-neutral text-primary rounded-3xl font-black text-sm hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95 border border-neutral-dark">
          Application Details
        </button>
      </div>
    </div>
  );
};

interface ScholarshipsHubProps {
  onApply?: () => void;
}

const ScholarshipsHub: React.FC<ScholarshipsHubProps> = ({ onApply }) => {
  return (
    <div className="animate-fadeIn">
      <section className="py-24 bg-white border-b border-neutral-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary-light text-primary rounded-full text-[10px] font-black mb-6 uppercase tracking-widest">
              <i className="fa-solid fa-award"></i> $200M+ Funding Available
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-secondary mb-8 leading-tight">Global Education <br/><span className="text-primary">Funding Guide</span></h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12">Financial constraints shouldn't stop your dreams. We track the latest government grants.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {globalScholarships.map((schol, i) => (
              <ScholarshipCard key={i} schol={schol} onApply={onApply} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16">GlobalPath Success <br/>in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div>
                <p className="text-6xl font-black text-primary mb-4">$15M+</p>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Scholarships Secured</p>
             </div>
             <div className="md:border-x border-white/10 px-8">
                <p className="text-6xl font-black text-white mb-4">450+</p>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Prestigious Winners</p>
             </div>
             <div>
                <p className="text-6xl font-black text-primary mb-4">98%</p>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Visa Success Rate</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScholarshipsHub;
