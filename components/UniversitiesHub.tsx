
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const globalUniversities = [
  { 
    name: 'University of Oxford', 
    country: 'UK', 
    rank: '1', 
    score: '98.5', 
    type: 'PUBLIC', 
    img: 'https://images.unsplash.com/photo-1543735206-a2a09886395b?auto=format&fit=crop&q=80&w=800',
    tags: ['ELITE', 'RESEARCH', 'HISTORIC']
  },
  { 
    name: 'Harvard University', 
    country: 'USA', 
    rank: '2', 
    score: '97.2', 
    type: 'PRIVATE', 
    img: 'https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80&w=800',
    tags: ['IVY LEAGUE', 'PRESTIGIOUS', 'GLOBAL']
  },
  { 
    name: 'University of Toronto', 
    country: 'Canada', 
    rank: '21', 
    score: '88.4', 
    type: 'PUBLIC', 
    img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800',
    tags: ['RESEARCH', 'DIVERSE', 'TOP-TIER']
  }
];

const subjectRankings = [
  { subject: 'Business & Management', topUni: 'Harvard University', score: '99.1', icon: 'fa-briefcase' },
  { subject: 'Engineering & Tech', topUni: 'MIT / Stanford', score: '98.5', icon: 'fa-microchip' },
  { subject: 'Life Sciences & Med', topUni: 'Oxford University', score: '97.8', icon: 'fa-dna' }
];

interface UniversityCardProps {
  uni: typeof globalUniversities[0];
  onProfile?: () => void;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ uni, onProfile }) => {
  const [imgSrc, setImgSrc] = useState(uni.img);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleImageError = () => {
    if (!isGenerating && !imgSrc.startsWith('data:')) {
      setImgSrc('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800');
    }
  };

  return (
    <div className="group bg-white rounded-[3rem] overflow-hidden border border-neutral-dark shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      <div className="h-72 relative overflow-hidden bg-neutral">
        <img 
          src={imgSrc} 
          alt={uni.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          onError={handleImageError}
        />
        <div className="absolute top-6 left-6 flex gap-3 z-10">
          <span className="bg-white px-5 py-2 rounded-full text-[10px] font-black uppercase text-primary shadow-lg border border-primary-light">
            RANK #{uni.rank}
          </span>
          <span className="bg-primary px-5 py-2 rounded-full text-[10px] font-black uppercase text-white shadow-lg">
            {uni.type}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/10 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white z-10">
          <p className="text-xs font-black uppercase tracking-widest opacity-90 mb-2">{uni.country}</p>
          <h3 className="text-3xl font-black leading-tight tracking-tight">{uni.name}</h3>
        </div>
      </div>

      <div className="p-10 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-wrap gap-2">
            {uni.tags.map(tag => (
              <span key={tag} className="text-[10px] font-black bg-neutral text-slate-400 border border-neutral-dark px-4 py-1.5 rounded-full tracking-widest">
                {tag}
              </span>
            ))}
          </div>
          <div className="text-right">
            <p className="text-3xl font-black text-secondary leading-none">{uni.score}</p>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Global Score</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="p-6 bg-neutral rounded-3xl border border-neutral-dark">
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2">Employability</p>
            <p className="text-xl font-black text-secondary">Top 1%</p>
          </div>
          <div className="p-6 bg-neutral rounded-3xl border border-neutral-dark">
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2">Research</p>
            <p className="text-xl font-black text-secondary">Very High</p>
          </div>
        </div>

        <button 
          onClick={onProfile}
          className="mt-auto w-full py-6 bg-primary-light text-primary rounded-3xl font-black text-sm hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary-light transition-all active:scale-95">
          Detailed University Profile
        </button>
      </div>
    </div>
  );
};

interface UniversitiesHubProps {
  onProfile?: () => void;
}

const UniversitiesHub: React.FC<UniversitiesHubProps> = ({ onProfile }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCountry, setFilterCountry] = useState('All');

  const filteredUnis = globalUniversities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = filterCountry === 'All' || uni.country === filterCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="animate-fadeIn">
      <section className="py-24 bg-white border-b border-neutral-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary-light text-primary rounded-full text-[10px] font-black mb-6 uppercase tracking-widest">
              <i className="fa-solid fa-earth-americas"></i> Explore Your Future Campus
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-secondary mb-8 leading-tight">Global University <br/><span className="text-primary">Smart Directory</span></h2>
            
            <div className="flex flex-col md:row gap-4 max-w-5xl mx-auto bg-neutral p-6 rounded-[3.5rem] border border-neutral-dark shadow-xl">
              <input 
                type="text" 
                placeholder="Search universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-[2] pl-6 pr-6 py-5 rounded-[2.5rem] border border-neutral-dark outline-none focus:border-primary transition-all text-lg font-medium"
              />
              <select 
                value={filterCountry}
                onChange={(e) => setFilterCountry(e.target.value)}
                className="flex-[1] px-8 py-5 rounded-[2.5rem] border border-neutral-dark outline-none bg-white text-secondary font-bold"
              >
                <option value="All">All Regions</option>
                <option value="UK">United Kingdom</option>
                <option value="USA">United States</option>
              </select>
              <button className="flex-1 bg-secondary text-white px-10 py-5 rounded-[2.5rem] font-black hover:bg-primary transition-all shadow-lg">
                Find Best Fit
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {filteredUnis.map((uni, idx) => (
              <UniversityCard key={idx} uni={uni} onProfile={onProfile} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8">Subject-Wise <br/>World Rankings</h2>
              <div className="space-y-4">
                {subjectRankings.map((rank, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-[2rem] border border-neutral-dark shadow-sm hover:border-primary transition-all group">
                    <div className="w-16 h-16 bg-primary-light text-primary rounded-2xl flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all">
                      <i className={`fa-solid ${rank.icon}`}></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">{rank.subject}</p>
                      <p className="text-xl font-black text-secondary">{rank.topUni}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-primary">{rank.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white p-12 rounded-[4rem] border border-neutral-dark shadow-2xl text-center">
                <h3 className="text-2xl font-black mb-10 text-secondary">Expert Consultation</h3>
                <p className="text-slate-500 mb-10">Unsure which university is right for your profile? Let our experts guide you.</p>
                <button className="w-full py-6 bg-primary text-white rounded-[2rem] font-black text-xl hover:bg-primary-dark transition-all">
                  Talk to a Counselor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniversitiesHub;
