
import React, { useState } from 'react';

const allStories = [
  {
    name: 'K.Sowjanya Reddy',
    university: 'Imperial College London',
    country: 'UK',
    quote: "The guidance from Integrity Overseas was instrumental in my journey to Imperial College. Their transparent approach and step-by-step visa support were exceptional. I highly recommend them to any serious student."
  },
  {
    name: 'M.Bhanu',
    university: 'University of Melbourne',
    country: 'Australia',
    quote: "Securing my Australian visa was seamless thanks to the expert team at Integrity. They helped me shortlist the right courses and prepared me for my interview with incredible precision."
  },
  {
    name: 'T.Ramu',
    university: 'University of Toronto',
    country: 'Canada',
    quote: "From SOP to Visa, they handled everything for my Canada application. The counselors are extremely knowledgeable about current immigration rules, which gave me immense confidence throughout the process."
  },
  {
    name: 'K.Achyuth Reddy',
    university: 'Stanford University',
    country: 'USA',
    quote: "The mock interviews were the key to my success in the USA. Integrity Overseas doesn't just process papers; they build your profile and prepare you for the cultural shift of studying at a top-tier Ivy League school."
  },
  {
    name: 'R.Srikar',
    university: 'University of Manchester',
    country: 'UK',
    quote: "Integrity helped me get a £5,000 scholarship for my Masters. Their database of global funding opportunities is vast, and they know exactly how to tailor an application to win these grants."
  },
  {
    name: 'J.Lokesh',
    university: 'University of Edinburgh',
    country: 'UK',
    quote: "Highly recommended for UK education counseling. They know the process inside out, especially the new Graduate Route policies. Their post-landing support also helped me find accommodation quickly."
  },
  {
    name: 'M.Charithan',
    university: 'University of British Columbia',
    country: 'Canada',
    quote: "UBC was my dream, and Integrity made it possible with the perfect study plan. Their attention to detail in the GIC and financial documentation process is unmatched in the industry."
  },
  {
    name: 'A.Srinidhi',
    university: 'TU Munich',
    country: 'Germany',
    quote: "Getting into TU Munich required precise documentation, which the team handled perfectly. Their expertise in European public universities saved me thousands in tuition fees."
  },
  {
    name: 'P. Anjali',
    university: 'University of Sydney',
    country: 'Australia',
    quote: "Living in Sydney has been a dream come true. Integrity Overseas helped me navigate the complex visa process and find accommodation near campus."
  },
  {
    name: 'V. Rahul',
    university: 'Monash University',
    country: 'Australia',
    quote: "The team was incredible in helping me choose the best course for my career goals. Their support didn't stop at the visa; they kept in touch even after I landed."
  },
  {
    name: 'S. Karthik',
    university: 'McGill University',
    country: 'Canada',
    quote: "Canada's friendly environment is amazing. Integrity's guidance on the study permit and PGWP was clear and accurate. I'm so glad I chose them."
  },
  {
    name: 'L. Priya',
    university: 'New York University',
    country: 'USA',
    quote: "Studying at NYU is intense but rewarding. The counselors helped me Polish my essay and resume to stand out in the application pool."
  },
  {
    name: 'D. Arvind',
    university: 'University of Texas at Austin',
    country: 'USA',
    quote: "I was worried about the interview, but the mock sessions built my confidence. Now I'm pursuing my Masters in Computer Science at my dream university."
  },
  {
    name: 'R. Meera',
    university: 'RWTH Aachen University',
    country: 'Germany',
    quote: "Germany offered the best engineering programs. Integrity Overseas helped me with the language requirements and blocked account setup."
  },
  {
    name: 'A. Vikram',
    university: 'Technical University of Berlin',
    country: 'Germany',
    quote: "Tuition-free education was my goal, and they made it happen. Their knowledge of the German education system is top-notch."
  },
  {
    name: 'A. Verma',
    university: 'ETH Zurich',
    country: 'Europe',
    quote: "Studying in Switzerland has been a life-changing experience. The research facilities at ETH are world-class, and Integrity assisted me with every step of the visa process."
  },
  {
    name: 'S. Gupta',
    university: 'University of Amsterdam',
    country: 'Europe',
    quote: "The Netherlands is so welcoming to international students. Integrity Overseas helped me find a program that was taught entirely in English and matched my career goals."
  },
  {
    name: 'R. Sharma',
    university: 'Trinity College Dublin',
    country: 'Europe',
    quote: "Ireland's education system is fantastic. The team at Integrity helped me secure a scholarship that made studying here affordable."
  },
  {
    name: 'K. Reddy',
    university: 'University of Auckland',
    country: 'New Zealand',
    quote: "New Zealand is beautiful and the education is top-tier. Integrity Overseas made the application process stress-free and helped me understand the post-study work rights."
  },
  {
    name: 'M. Kumar',
    university: 'University of Otago',
    country: 'New Zealand',
    quote: "I love the student lifestyle here. The counselors at Integrity were very knowledgeable about the different universities and helped me choose the best one for my course."
  },
  {
    name: 'P. Singh',
    university: 'Victoria University of Wellington',
    country: 'New Zealand',
    quote: "Wellington is a vibrant city. Integrity's guidance on the visa documentation was perfect, and I got my visa approval much faster than expected."
  }
];

interface SuccessStoriesProps {
  view?: string;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ view = 'global' }) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredStories = view === 'global'
    ? allStories
    : allStories.filter(s => s.country.toLowerCase() === view.toLowerCase());

  const displayedStories = filteredStories.slice(0, visibleCount);

  if (filteredStories.length === 0 && view !== 'global') return null;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 text-primary rounded-full text-[10px] font-black mb-6 uppercase tracking-[0.2em]">
            <i className="fa-solid fa-star"></i> TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            {view === 'global' ? '1,000+ Success Stories' : `${view.toUpperCase()} Success Stories`}
          </h2>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            {view === 'global'
              ? 'Real reviews from students who achieved their dreams with Integrity Overseas.'
              : <span>Honest reviews from students who started their career in <span className="uppercase">{view}</span>.</span>}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedStories.map((story, i) => (
            <div key={i} className="group relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full animate-fadeIn">
              {/* Quote Icon */}
              <div className="w-14 h-14 bg-slate-50 text-primary/20 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <i className="fa-solid fa-quote-left"></i>
              </div>

              {/* Review Text */}
              <div className="flex-1 mb-10">
                <p className="text-lg text-slate-600 font-medium leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>

              {/* Student Info */}
              <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-primary transition-colors">
                    {story.name}
                  </h3>
                  <p className="text-sm text-slate-400 font-bold">
                    {story.university}
                  </p>
                </div>
                <div className="px-4 py-1.5 bg-primary/5 text-primary text-[9px] font-black uppercase rounded-full tracking-widest border border-primary/10">
                  {story.country}
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-10 transition-opacity">
                <i className="fa-solid fa-graduation-cap text-6xl"></i>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredStories.length && (
          <div className="mt-16 text-center animate-fadeIn">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-8 py-4 bg-white text-primary border border-slate-200 rounded-full font-bold shadow-sm hover:bg-slate-50 hover:shadow-md transition-all active:scale-95 text-lg"
            >
              See More Stories <i className="fa-solid fa-arrow-down ml-2"></i>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default SuccessStories;
