
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const popularCourses = [
  { 
    title: 'MSc Data Science & AI', 
    level: 'Postgraduate', 
    duration: '1-2 Years', 
    country: 'UK, USA, Germany', 
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600',
    category: 'STEM'
  },
  { 
    title: 'MBA in Global Business', 
    level: 'Postgraduate', 
    duration: '12-18 Months', 
    country: 'USA, UK, Singapore', 
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600',
    category: 'BUSINESS'
  },
  { 
    title: 'BSc Computer Science', 
    level: 'Undergraduate', 
    duration: '3-4 Years', 
    country: 'USA, Canada, Australia', 
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
    category: 'STEM'
  },
  { 
    title: 'Masters in Public Health', 
    level: 'Postgraduate', 
    duration: '2 Years', 
    country: 'UK, Canada, Australia', 
    img: 'https://images.unsplash.com/photo-1505751172107-57325a3d3319?auto=format&fit=crop&q=80&w=600',
    category: 'HEALTHCARE'
  },
  { 
    title: 'Bachelor of Architecture', 
    level: 'Undergraduate', 
    duration: '5 Years', 
    country: 'UK, USA, UAE', 
    img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=600',
    category: 'ARTS & DESIGN'
  },
  { 
    title: 'MA in International Relations', 
    level: 'Postgraduate', 
    duration: '1-2 Years', 
    country: 'UK, Ireland, France', 
    img: 'https://images.unsplash.com/photo-1521791136064-7986c29596ba?auto=format&fit=crop&q=80&w=600',
    category: 'HUMANITIES'
  },
];

const courseCategories = [
  { name: 'BUSINESS', icon: 'fa-briefcase', count: '12k+ Courses' },
  { name: 'STEM', icon: 'fa-microchip', count: '15k+ Courses' },
  { name: 'HEALTHCARE', icon: 'fa-user-doctor', count: '8k+ Courses' },
  { name: 'ARTS & DESIGN', icon: 'fa-palette', count: '5k+ Courses' },
  { name: 'HUMANITIES', icon: 'fa-earth-americas', count: '7k+ Courses' },
  { name: 'LAW', icon: 'fa-gavel', count: '3k+ Courses' },
];

// Fixed: Added onApply to CourseCardProps to match App.tsx usage
interface CourseCardProps {
  course: typeof popularCourses[0];
  onApply?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onApply }) => {
  const [imgSrc, setImgSrc] = useState(course.img);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateSimilarImage = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `A professional, clean and high-quality stock photo representing a ${course.title} degree course. Educational setting, student studying, or relevant subject imagery. No text on image. Cinematic lighting.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: prompt }] },
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          setImgSrc(`data:image/png;base64,${base64Data}`);
          break;
        }
      }
    } catch (err) {
      console.error("Failed to generate course image:", err);
      // Final fallback
      setImgSrc('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleImageError = () => {
    if (!isGenerating && !imgSrc.startsWith('data:')) {
      generateSimilarImage();
    }
  };

  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      {/* Image Area - Precise Category Badge Layout */}
      <div className="h-60 relative overflow-hidden bg-slate-50">
        {isGenerating ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 z-10">
            <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-2"></div>
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Generating Visual...</p>
          </div>
        ) : (
          <img 
            src={imgSrc} 
            alt={course.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            onError={handleImageError}
          />
        )}
        <div className="absolute top-4 left-6">
          <div className="bg-white/95 backdrop-blur-md px-5 py-2 rounded-full shadow-lg border border-slate-100">
            <span className="text-[10px] font-black text-blue-600 tracking-[0.1em] uppercase">
              {course.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content Area - Matches Screenshot Typography and Spacing */}
      <div className="p-10 flex flex-col flex-1">
        <h3 className="text-2xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
          {course.title}
        </h3>
        
        <div className="space-y-5 mb-10 flex-1">
          <div className="flex items-center gap-4 text-slate-500">
            <div className="w-5 flex justify-center">
               <i className="fa-solid fa-graduation-cap text-blue-500 text-lg"></i>
            </div>
            <span className="text-lg font-medium">{course.level}</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <div className="w-5 flex justify-center">
              <i className="fa-solid fa-clock text-blue-500 text-lg"></i>
            </div>
            <span className="text-lg font-medium">{course.duration}</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <div className="w-5 flex justify-center">
              <i className="fa-solid fa-earth-americas text-blue-500 text-lg"></i>
            </div>
            <span className="text-lg font-medium">{course.country}</span>
          </div>
        </div>

        {/* Button - Outlined Rounded Style from Screenshot */}
        <button 
          onClick={onApply}
          className="w-full py-5 bg-white border border-slate-200 rounded-[1.5rem] font-black text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-xl hover:shadow-blue-100 transition-all active:scale-95 duration-300">
          View Universities
        </button>
      </div>
    </div>
  );
};

// Fixed: Added CoursesHubProps to match App.tsx usage
interface CoursesHubProps {
  onApply?: () => void;
}

const CoursesHub: React.FC<CoursesHubProps> = ({ onApply }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredCourses = popularCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'ALL' || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate-fadeIn">
      {/* Search Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black mb-6 uppercase tracking-widest">
              <i className="fa-solid fa-magnifying-glass"></i> Tailored Education Paths
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">Global Course <br/><span className="text-blue-600">Navigator</span></h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12">Search through 80,000+ courses across the globe. From Foundation to PhD.</p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto bg-slate-50 p-6 rounded-[3rem] border border-slate-100 shadow-xl shadow-blue-900/5">
              <div className="relative flex-[2]">
                <i className="fa-solid fa-magnifying-glass absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input 
                  type="text" 
                  placeholder="What do you want to study?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 rounded-[2.5rem] border border-slate-200 outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-lg font-medium"
                />
              </div>
              <button className="bg-blue-600 text-white px-10 py-5 rounded-[2.5rem] font-black hover:bg-blue-700 transition-all shadow-lg hover:scale-105 active:scale-95">
                Search Now
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-20">
            <button 
              onClick={() => setActiveCategory('ALL')}
              className={`p-6 rounded-[2.5rem] border transition-all text-center flex flex-col items-center justify-center gap-3 ${activeCategory === 'ALL' ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-200' : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-white hover:shadow-lg'}`}
            >
              <div className="text-2xl"><i className="fa-solid fa-layer-group"></i></div>
              <p className="font-black text-xs">ALL FIELDS</p>
            </button>
            {courseCategories.map((cat, i) => (
              <button 
                key={i}
                onClick={() => setActiveCategory(cat.name)}
                className={`p-6 rounded-[2.5rem] border transition-all text-center flex flex-col items-center justify-center gap-3 ${activeCategory === cat.name ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-200' : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-white hover:shadow-lg'}`}
              >
                <div className="text-2xl"><i className={`fa-solid ${cat.icon}`}></i></div>
                <div className="space-y-1">
                   <p className="font-black text-xs leading-none">{cat.name}</p>
                   <p className={`text-[8px] uppercase font-black tracking-widest ${activeCategory === cat.name ? 'text-blue-100' : 'text-slate-400'}`}>{cat.count}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Results Grid - Responsive Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {filteredCourses.length > 0 ? filteredCourses.map((course, i) => (
              <CourseCard key={i} course={course} onApply={onApply} />
            )) : (
              <div className="col-span-full py-32 text-center bg-slate-50 rounded-[4rem] border-2 border-dashed border-slate-200">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <i className="fa-solid fa-graduation-cap text-4xl text-slate-300"></i>
                </div>
                <h3 className="text-2xl font-black text-slate-400">No courses found</h3>
                <p className="text-slate-400 mt-2">Try searching with different keywords.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Feature Section - Career Future */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[4.5rem] p-16 lg:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Future-Proof <br/>Your Global Career</h2>
                <p className="text-xl text-slate-400 leading-relaxed mb-12">
                  Choosing the right course is as important as choosing the right university. GlobalPath's counselors analyze industry trends to ensure your degree has maximum ROI in tomorrow's economy.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-[2rem]">
                    <i className="fa-solid fa-shield-halved text-blue-400 text-xl"></i>
                    <span className="font-black uppercase text-sm tracking-widest">High ROI Focus</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-[2rem]">
                    <i className="fa-solid fa-bolt text-amber-400 text-xl"></i>
                    <span className="font-black uppercase text-sm tracking-widest">Fast-Track Paths</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-[4rem] p-12 border border-white/10 backdrop-blur-sm">
                <h4 className="text-2xl font-black mb-10">Application Timeline 2024</h4>
                <div className="space-y-10 relative before:absolute before:left-[23px] before:top-4 before:bottom-4 before:w-px before:bg-white/10">
                  {[
                    { step: '01', title: 'Smart Consultation', desc: 'Map your skills and professional goals.' },
                    { step: '02', title: 'Course Shortlisting', desc: 'Select top 10 relevant global programs.' },
                    { step: '03', title: 'Submission Cycle', desc: 'Managed application processing and SOP help.' },
                    { step: '04', title: 'Visa Approval', desc: 'Expert guidance for seamless departure.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 relative">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0 z-10 shadow-lg shadow-blue-500/30">{item.step}</div>
                      <div>
                        <p className="font-black text-xl mb-1">{item.title}</p>
                        <p className="text-base text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesHub;
