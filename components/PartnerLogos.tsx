
import React from 'react';

const partners = [
  { name: 'Ivy League', icon: 'fa-building-columns', color: 'text-red-800' },
  { name: 'Russell Group', icon: 'fa-graduation-cap', color: 'text-blue-900' },
  { name: 'Group of Eight', icon: 'fa-award', color: 'text-amber-700' },
  { name: 'U15 Canada', icon: 'fa-map-location-dot', color: 'text-red-600' },
  { name: 'EUA', icon: 'fa-earth-europe', color: 'text-indigo-800' },
  { name: 'ACU', icon: 'fa-globe', color: 'text-emerald-800' }
];

const PartnerLogos: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-16">
          Strategic Alliances with 850+ Global Institutions
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-items-center opacity-70 hover:opacity-100 transition-all duration-700">
          {partners.map((partner, i) => (
            <div key={i} className="flex flex-col items-center gap-3 group cursor-default">
              <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl ${partner.color} group-hover:scale-110 group-hover:bg-white group-hover:shadow-xl transition-all duration-500 border border-slate-100`}>
                <i className={`fa-solid ${partner.icon}`}></i>
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-3 bg-slate-50 rounded-full border border-slate-100">
            <p className="text-xs text-slate-500 font-bold italic">
              Directly representing <span className="text-primary font-black">Ivy League</span>, 
              <span className="text-primary font-black mx-1">Russell Group</span>, and 
              <span className="text-primary font-black">Group of Eight</span> institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
