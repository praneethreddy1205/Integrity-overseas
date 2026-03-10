
import React from 'react';

interface TestPrepProps {
  onEnroll?: () => void;
}

const TestPrep: React.FC<TestPrepProps> = ({ onEnroll }) => {
  const tests = [
    { name: 'IELTS', score: '7.5+', desc: 'Master reading, writing, speaking, and listening with our certified trainers.', icon: 'fa-book-open', color: 'blue' },
    { name: 'GRE', score: '320+', desc: 'In-depth quant and verbal training with real-time adaptive mock tests.', icon: 'fa-calculator', color: 'indigo' },
    { name: 'GMAT', score: '700+', desc: 'Expert strategies for the Integrated Reasoning and Quantitative sections.', icon: 'fa-chart-line', color: 'emerald' },
    { name: 'TOEFL', score: '100+', desc: 'Comprehensive coaching focused on academic English proficiency.', icon: 'fa-microphone', color: 'orange' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Ace Your Tests</h2>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            Our specialized coaching programs ensure you hit your target score on the first attempt.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tests.map((test) => (
            <div key={test.name} className="relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-200/50 transition-all group overflow-hidden">
              <div className={`absolute -right-8 -top-8 w-24 h-24 bg-${test.color}-100/50 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
              <div className={`w-14 h-14 bg-white text-${test.color}-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm border border-slate-50 relative z-10`}>
                <i className={`fa-solid ${test.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 relative z-10">{test.name}</h3>
              <p className={`text-sm font-bold text-${test.color}-600 mb-4 bg-${test.color}-50 inline-block px-3 py-1 rounded-full`}>Avg. Target: {test.score}</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 relative z-10">{test.desc}</p>
              <button 
                onClick={onEnroll}
                className="flex items-center gap-2 text-slate-900 font-bold hover:gap-4 transition-all group-hover:text-blue-600"
              >
                Enroll Now <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestPrep;
