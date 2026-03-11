
import React from 'react';

import canterburyImg from './assets/canterbury.jpeg';
import uclImg from './assets/collegeoflondon.jpeg';
import harvardImg from './assets/harvardimage.jpeg';
import nyuImg from './assets/newyorkuniversity.jpeg';
import oxfordImg from './assets/oxford.jpeg';

export const universityData: Record<string, { name: string; rank: string; location: string; img: string; desc: string }[]> = {
  UK: [
    { name: 'University of Oxford', rank: '#1 World', location: 'Oxford, England', img: oxfordImg, desc: 'The oldest university in the English-speaking world.' },
    { name: 'University of Cambridge', rank: '#2 World', location: 'Cambridge, England', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600', desc: 'A global leader in research and innovation.' },
    { name: 'Imperial College London', rank: '#6 World', location: 'London, England', img: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=600', desc: 'World-class science, engineering, and medicine.' },
    { name: 'University College London', rank: '#9 World', location: 'London, England', img: uclImg, desc: 'Londons Global University.' }
  ],
  USA: [
    { name: 'Harvard University', rank: '#1 US', location: 'Cambridge, MA', img: harvardImg, desc: 'The benchmark for academic excellence globally.' },
    { name: 'Stanford University', rank: '#2 US', location: 'Stanford, CA', img: 'https://images.unsplash.com/photo-1583373834259-46cc92173cb7?auto=format&fit=crop&q=80&w=600', desc: 'The hub of innovation and entrepreneurial spirit.' },
    { name: 'MIT', rank: '#1 World (QS)', location: 'Cambridge, MA', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600', desc: 'Advancing knowledge in science and technology.' },
    { name: 'New York University', rank: '#30 World', location: 'New York, NY', img: nyuImg, desc: 'Education in the heart of NYC.' }
  ],
  Canada: [
    { name: 'University of Toronto', rank: '#1 Canada', location: 'Toronto, Ontario', img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&get=80&w=600', desc: 'Canadas top research university.' },
    { name: 'UBC', rank: '#2 Canada', location: 'Vancouver, BC', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600', desc: 'Stunning campus and world-class academics.' },
    { name: 'McGill University', rank: '#3 Canada', location: 'Montreal, Quebec', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=600', desc: 'Distinguished history of academic achievement.' }
  ],
  Australia: [
    { name: 'University of Melbourne', rank: '#1 Australia', location: 'Melbourne, Victoria', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=600', desc: 'Leading research and teaching excellence.' },
    { name: 'University of Sydney', rank: '#2 Australia', location: 'Sydney, NSW', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=600', desc: 'Oldest and most prestigious in Australia.' },
    { name: 'UNSW Sydney', rank: '#3 Australia', location: 'Sydney, NSW', img: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&q=80&w=600', desc: 'Global impact through innovation.' }
  ],
  Europe: [
    { name: 'TU Munich', rank: '#1 Germany', location: 'Munich, Germany', img: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80&w=600', desc: 'Top technical university in Europe.' },
    { name: 'Heidelberg University', rank: '#2 Germany', location: 'Heidelberg, Germany', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=600', desc: 'Traditional excellence in medicine and law.' },
    { name: 'Sorbonne University', rank: '#1 France', location: 'Paris, France', img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=600', desc: 'The heart of French academic excellence.' },
    { name: 'Trinity College Dublin', rank: '#1 Ireland', location: 'Dublin, Ireland', img: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=600', desc: 'Irelands premier research-led university.' }
  ],
  "New Zealand": [
    { name: 'University of Auckland', rank: '#1 NZ', location: 'Auckland', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600', desc: 'New Zealands highest ranked university.' },
    { name: 'University of Otago', rank: '#2 NZ', location: 'Dunedin', img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=600', desc: 'World-renowned for medicine and social sciences.' },
    { name: 'University of Canterbury', rank: '#3 NZ', location: 'Christchurch', img: canterburyImg, desc: 'Leading the way in engineering and business.' }
  ]
};

interface UniversityListProps {
  country: string;
  onViewCourses?: () => void;
}

const UniversityList: React.FC<UniversityListProps> = ({ country, onViewCourses }) => {
  const universities = universityData[country] || universityData.UK;

  return (
    <section className="py-24 bg-white" id="universities-list">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Top Universities in {country}</h2>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            Choose from the most prestigious institutions in {country}, hand-picked for international students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {universities.map((uni, idx) => (
            <div key={idx} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img src={uni.img} alt={uni.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black shadow-sm uppercase tracking-widest text-primary">
                  {uni.rank}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{uni.name}</h3>
                <p className="text-xs text-slate-50 font-semibold bg-slate-400/20 text-slate-500 px-2 py-1 rounded-md inline-block mb-4">
                  <i className="fa-solid fa-location-dot mr-1"></i> {uni.location}
                </p>
                <p className="text-sm text-slate-500 line-clamp-2">{uni.desc}</p>
                <button
                  onClick={onViewCourses}
                  className="mt-6 w-full py-3 border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-900 hover:text-white transition-all">
                  View Courses
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityList;
