
import React from 'react';
import { CountryInfo } from '../types';

interface ExtendedCountryInfo extends CountryInfo {
  intro: string;
  benefits: string[];
  career: string;
}

const countryDataLookup: Record<string, ExtendedCountryInfo> = {
  UK: {
    intro: "The UK is a global leader in education, offering world-recognized degrees from historic institutions. With a 1-year Masters program and a 2-year Post-Study Work (PSW) visa, it's the most efficient path to a global career.",
    benefits: ["Fast-track 1-year Masters", "No GRE/GMAT required for most unis", "High-quality research-led teaching", "Rich cultural heritage"],
    career: "UK graduates are among the most employable in the world, with top recruiters in Finance, Tech, and Healthcare favoring Russell Group alumni.",
    admissions: {
      intakes: [
        { period: 'Sept Intake (Primary)', details: 'Largest selection of courses and funding.', color: 'primary' },
        { period: 'Jan Intake (Secondary)', details: 'Perfect for students who missed the autumn cycle.', color: 'secondary' }
      ],
      requirements: ['Min 60% Academics', 'IELTS 6.5 / PTE 60+', 'Statement of Purpose', 'Two LORs', 'CAS Receipt']
    },
    visa: {
      type: 'Student Route Visa',
      details: 'Requires 70 points under the points-based system.',
      psw: '2-Year Graduate Route (3 for PhD)',
      workRights: '20 hours/week term-time, full-time vacations'
    },
    costs: {
      tuition: [{ level: 'Bachelors', range: '£12k - £25k' }, { level: 'Masters', range: '£14k - £30k' }],
      living: [{ area: 'Inside London', amount: '£1,334 / mo', color: 'primary' }, { area: 'Outside London', amount: '£1,023 / mo', color: 'secondary' }]
    },
    scholarships: [
      { name: 'GREAT', desc: 'Govt funded merit awards.', value: '£10,000', bg: 'bg-secondary' },
      { name: 'Chevening', desc: 'Full funding for Masters.', value: '100% Covered', bg: 'bg-primary' }
    ]
  },
  USA: {
    intro: "Home to the world's most prestigious Ivy League universities, the USA offers unparalleled flexibility in curriculum and immense research opportunities in the heart of Silicon Valley.",
    benefits: ["World-class Research Facilities", "STEM OPT (3 years work permit)", "Flexible Major/Minor combinations", "Largest selection of Universities"],
    career: "The US market offers the highest entry-level salaries globally, particularly in STEM and Management sectors.",
    admissions: {
      intakes: [
        { period: 'Fall (August)', details: 'Major intake with most funding options.', color: 'primary' },
        { period: 'Spring (January)', details: 'Smaller intake but highly competitive.', color: 'secondary' }
      ],
      requirements: ['GPA 3.0+', 'GRE/GMAT (Select Unis)', 'IELTS 7.0 / TOEFL 90+', '3 LORs', 'Financial Documents']
    },
    visa: {
      type: 'F-1 Student Visa',
      details: 'Interview-based visa system.',
      psw: '1-Year OPT (3-Year for STEM)',
      workRights: 'On-campus only (20 hours)'
    },
    costs: {
      tuition: [{ level: 'State Unis', range: '$20k - $40k' }, { level: 'Private Unis', range: '$40k - $65k' }],
      living: [{ area: 'Metros', amount: '$2,000 / mo', color: 'primary' }, { area: 'Suburbs', amount: '$1,200 / mo', color: 'secondary' }]
    },
    scholarships: [
      { name: 'Fulbright', desc: 'Highly prestigious cultural exchange.', value: 'Full Tuition', bg: 'bg-secondary' },
      { name: 'Institutional', desc: 'Merit-based university grants.', value: 'Up to $20k', bg: 'bg-primary' }
    ]
  }
};

interface CountryDetailHubProps {
  country: string;
  onBook?: () => void;
}

const CountryDetailHub: React.FC<CountryDetailHubProps> = ({ country, onBook }) => {
  const data = countryDataLookup[country] || countryDataLookup.UK;

  return (
    <section className="bg-white">
      <div className="pt-24 pb-32 bg-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12">

          <div className="mb-16 md:mb-24 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-neutral text-slate-400 rounded-full text-[10px] font-black mb-6 uppercase tracking-[0.2em] border border-neutral-dark">
              <i className="fa-solid fa-earth-americas text-primary"></i> Study Abroad Guide
            </div>
            <h1 className="text-5xl md:text-9xl font-black text-secondary leading-none tracking-tighter max-w-5xl">
              Why Study in <span className="text-primary block sm:inline uppercase">{country}?</span>
            </h1>
            <div className="w-32 h-3 bg-primary rounded-full mt-10"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-light text-primary rounded-full text-xs font-black uppercase tracking-widest">
                <i className="fa-solid fa-star"></i> DESTINATION OVERVIEW
              </div>
              <p className="text-lg md:text-xl text-slate-500 leading-tight max-w-2xl font-bold">
                {data.intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-neutral rounded-[2.5rem] border border-neutral-dark shadow-sm hover:shadow-xl hover:bg-white transition-all group">
                    <div className="w-12 h-12 bg-primary-light text-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <i className="fa-solid fa-check text-base"></i>
                    </div>
                    <span className="font-bold text-secondary text-lg leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="bg-secondary rounded-[4.5rem] p-16 md:p-20 text-white relative z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden group border border-white/5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000"></div>
                <h3 className="text-4xl md:text-5xl font-black mb-10 tracking-tight">Career Outlook</h3>
                <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-16 font-medium">
                  {data.career}
                </p>
                <button onClick={onBook} className="w-full bg-primary text-white px-10 py-6 rounded-[2.5rem] font-black text-2xl shadow-2xl hover:bg-primary-dark hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-4">
                  Free Counseling Session <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
              <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-primary opacity-20 blur-[120px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 border-t border-neutral-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <h3 className="text-4xl font-black text-secondary uppercase tracking-tight flex items-center gap-6">
              <span className="w-16 h-16 bg-primary text-white rounded-3xl flex items-center justify-center shadow-xl"><i className="fa-solid fa-university"></i></span>
              Admissions & Intakes
            </h3>
            <div className="space-y-8">
              {data.admissions.intakes.map((it, idx) => (
                <div key={idx} className={`p-10 rounded-[3rem] border-l-[12px] ${it.color === 'primary' ? 'border-primary' : 'border-secondary'} bg-neutral hover:bg-white hover:shadow-2xl transition-all group`}>
                  <p className={`text-2xl font-black ${it.color === 'primary' ? 'text-primary' : 'text-secondary'} mb-3`}>{it.period}</p>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">{it.details}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-secondary rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-16 opacity-10"><i className="fa-solid fa-list-check text-[180px]"></i></div>
            <h4 className="text-3xl font-black mb-12 flex items-center gap-4">
              <i className="fa-solid fa-circle-check text-primary"></i> Requirements Checklist
            </h4>
            <ul className="space-y-8">
              {data.admissions.requirements.map((req, idx) => (
                <li key={idx} className="flex items-center gap-6 text-xl font-medium text-slate-300">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div> {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="py-32 bg-neutral">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <h3 className="text-4xl font-black text-secondary mb-20 uppercase tracking-tight flex items-center justify-center gap-6">
            <span className="w-16 h-16 bg-primary text-white rounded-3xl flex items-center justify-center shadow-xl"><i className="fa-solid fa-passport"></i></span>
            Visa & Post-Study Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: data.visa.type, d: data.visa.details, i: 'fa-id-card' },
              { t: 'Post-Study Work', d: data.visa.psw, i: 'fa-briefcase' },
              { t: 'Part-Time Rights', d: data.visa.workRights, i: 'fa-clock' }
            ].map((v, i) => (
              <div key={i} className="p-12 rounded-[4rem] bg-white border border-neutral-dark group hover:shadow-2xl transition-all text-left">
                <div className="w-20 h-20 bg-primary text-white rounded-[2.5rem] flex items-center justify-center text-4xl mb-10 group-hover:scale-110 transition-transform shadow-lg">
                  <i className={`fa-solid ${v.i}`}></i>
                </div>
                <h4 className="text-3xl font-black text-secondary mb-6">{v.t}</h4>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-32 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12">
        <h3 className="text-4xl font-black text-secondary mb-20 uppercase tracking-tight flex items-center gap-6">
          <span className="w-16 h-16 bg-primary text-white rounded-3xl flex items-center justify-center shadow-xl"><i className="fa-solid fa-wallet"></i></span>
          Financial Overview
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-10">
            <h4 className="text-3xl font-black text-secondary">Average Tuition Fees</h4>
            <div className="space-y-6">
              {data.costs.tuition.map((t, idx) => (
                <div key={idx} className="flex justify-between items-center p-8 bg-neutral rounded-[2.5rem] border border-neutral-dark hover:bg-white hover:shadow-xl transition-all">
                  <span className="font-bold text-slate-600 text-xl">{t.level}</span>
                  <span className="font-black text-secondary text-2xl">{t.range}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-10">
            <h4 className="text-3xl font-black text-secondary">Monthly Living Expenses</h4>
            <div className="space-y-6">
              {data.costs.living.map((l, idx) => (
                <div key={idx} className={`flex justify-between items-center p-8 ${l.color === 'primary' ? 'bg-primary-light' : 'bg-neutral'} rounded-[2.5rem] border border-neutral-dark hover:bg-white hover:shadow-xl transition-all`}>
                  <span className={`font-bold ${l.color === 'primary' ? 'text-primary-dark' : 'text-secondary'} text-xl`}>{l.area}</span>
                  <span className={`font-black ${l.color === 'primary' ? 'text-primary-dark' : 'text-secondary'} text-2xl`}>{l.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default CountryDetailHub;
