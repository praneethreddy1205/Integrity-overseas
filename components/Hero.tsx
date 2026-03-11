
import React from 'react';

interface HeroProps {
  view: string;
  onAction?: (action: string) => void;
}

const Hero: React.FC<HeroProps> = ({ view, onAction }) => {
  if (view !== 'global') return null;

  return (
    <section className="relative pt-5 pb-5 lg:pt-5 lg:pb-5 overflow-hidden bg-[#f4f9f9]">

      <div className="absolute top-5 left-5 text-primary opacity-20">
        <svg width="90" height="90" viewBox="0 0 90 90">
          <path d="M10,10 Q50,0 90,10 Q100,50 90,90 Q50,100 10,90 Q0,50 10,10 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="max-w-6x600l mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h1 className="text-4xl lg:text-6xl font-black text-[#1a212c] leading-[1.1] animate-fadeIn">
              Study Abroad <br />
              with <span className="text-primary">Integrity</span> <br />
              & Excellence
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed max-w-xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Experience transparent guidance, personalized university selection, and an industry-leading 99% visa success rate. Your future starts with honesty.
            </p>

            <div className="flex flex-wrap items-center gap-8 pt-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <button onClick={() => onAction?.('consult')} className="bg-primary text-white px-12 py-6 rounded-full font-black text-xl shadow-2xl shadow-primary/30 hover:bg-[#00a693] hover:scale-105 transition-all">
                Book Free Counseling
              </button>
            </div>
          </div>

          <div className="relative animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            {/* The image container is now straight (no rotate-3) and doesn't scroll/tilt on hover */}
            <div className="relative z-10 w-full aspect-square rounded-[5rem] overflow-hidden border-[20px] border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
                alt="Student Graduation"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary opacity-5 blur-3xl rounded-full"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary opacity-5 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
