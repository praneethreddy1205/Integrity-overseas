
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import TestPrep from './components/TestPrep';
import UpcomingEvents from './components/UpcomingEvents';
import SuccessStories from './components/SuccessStories';
import PartnerLogos from './components/PartnerLogos';
import CountryDetailHub from './components/CountryDetailHub';
import UniversityList from './components/UniversityList';
import UniversitiesHub from './components/UniversitiesHub';
import CoursesHub from './components/CoursesHub';
import Login from './components/Login';
import globalVisaGuidance from './components/assets/global_visa_guidance.png';
import { universityData } from './components/UniversityList';

const destinationsList = ['UK', 'USA', 'Canada', 'Australia', 'Europe', 'New Zealand'];
const CONTACT_NUMBER = "917680976577";
const WHATSAPP_MESSAGE = "Hello Integrity Overseas, I am interested in your services and would like to speak with a counselor regarding my overseas education plans.";

// --- SHARED UI SECTIONS ---
const SectionHeader = ({ tag, title, desc, centered = true }: { tag?: string, title: string, desc?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    {tag && (
      <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 text-primary rounded-full text-[10px] font-black mb-6 uppercase tracking-[0.2em]">
        <i className="fa-solid fa-circle-notch animate-spin text-[8px]"></i> {tag}
      </div>
    )}
    <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">{title}</h2>
    {desc && <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">{desc}</p>}
  </div>
);

const PageHero = ({ title, subtitle, bgImg }: { title: string, subtitle: string, bgImg: string }) => (
  <section className="relative pt-32 pb-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={bgImg} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#1a212c]/80 backdrop-blur-sm"></div>
    </div>
    <div className="max-w-7xl mx-auto px-10 relative z-10 text-white text-center">
      <h1 className="text-6xl md:text-8xl font-black mb-8 animate-fadeIn uppercase tracking-tighter">{title}</h1>
      {subtitle && <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
    </div>
  </section>
);

const countryBgs: Record<string, string> = {
  UK: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80",
  USA: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80",
  Canada: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80",
  Australia: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80",
  Europe: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80",
  "New Zealand": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80"
};

const GlobalCTA = ({ onAction, country }: { onAction: (a: string) => void, country?: string }) => {
  const unis = country && universityData[country] ? universityData[country].slice(0, 4) : null;
  const bgImg = country && countryBgs[country] ? countryBgs[country] : null;

  return (
    <section className="py-32 bg-[#f4f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-[5rem] relative overflow-hidden shadow-2xl">
          {bgImg && (
            <img src={bgImg} alt={`${country} scenery`} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 grayscale-[0.3]" />
          )}

          <div className="relative z-10 p-20 md:p-32 text-center text-white">
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight drop-shadow-lg">Start Your Global <br />Legacy Today</h2>
            <p className="text-xl text-white/90 mb-16 max-w-2xl mx-auto font-bold leading-relaxed drop-shadow-md">Join thousands of students who achieved their dreams with Integrity Overseas. Expert counseling is just a click away.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button onClick={() => onAction('consultation')} className="bg-white text-primary px-16 py-6 rounded-[2rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl">Book Free Consultation</button>
              <button onClick={() => onAction('whatsapp')} className="bg-emerald-500 text-white px-16 py-6 rounded-[2rem] font-black text-2xl hover:bg-emerald-600 transition-all shadow-2xl flex items-center justify-center gap-3">
                <i className="fa-brands fa-whatsapp"></i> Chat Now
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

const StudyAbroadHeader = ({ setView }: { setView: (v: string) => void }) => (
  <>
    {/* DESKTOP: Sticky Vertical Left Sidebar */}
    <aside className="hidden lg:flex sticky top-[124px] z-40 w-[120px] h-[calc(100vh-124px)] hover:bg-slate-50/50 bg-white border-r border-slate-100 flex-col items-center pt-12 transition-all">
      <button
        onClick={() => {
          setView('global');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="w-14 h-14 bg-white text-slate-400 hover:bg-primary hover:text-white rounded-2xl flex items-center justify-center transition-all shadow-md border border-slate-100 group"
        title="Back to Global View"
      >
        <i className="fa-solid fa-arrow-left text-xl group-hover:-translate-x-1 transition-transform"></i>
      </button>
      <div className="mt-8 w-[1px] h-32 bg-gradient-to-b from-slate-200 to-transparent"></div>
    </aside>

    {/* MOBILE: Fixed Horizontal Top Bar */}
    <div className="lg:hidden fixed top-[80px] left-0 right-0 h-16 bg-white border-b border-slate-100 z-50 flex items-center px-6 shadow-sm">
      <button
        onClick={() => {
          setView('global');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="w-10 h-10 bg-slate-50 text-slate-500 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm border border-slate-200"
      >
        <i className="fa-solid fa-arrow-left text-sm"></i>
      </button>
      <span className="ml-4 text-xs font-bold uppercase tracking-widest text-slate-400">Return to Destinations</span>
    </div>
  </>
);

// --- FULL PAGE VIEWS ---

const ConsultationPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', country: 'UK' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Integrity Overseas, I'm ${form.name} from ${form.city}. I'd like a free counseling session for studying in ${form.country}. Email: ${form.email}, Phone: ${form.phone}`;
    window.open(`https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="animate-fadeIn">


      <section className="pt-10 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <SectionHeader tag="WHY COUNSELING?" title="Your Future Deserves More Than a Search Engine" centered={false} />
              <p className="text-xl text-slate-500 leading-relaxed">
                Choosing a university isn't just about rankings; it's about finding the environment where your specific skills will flourish. Our senior counselors provide deep insights that go beyond brochures.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { t: 'Profile Evaluation', d: 'Analyze your academic and personal background.', i: 'fa-user-astronaut' },
                  { t: 'Course Matching', d: 'Connect your passions with high-demand careers.', i: 'fa-bullseye' },
                  { t: 'Financial Planning', d: 'Optimizing costs and identifying scholarships.', i: 'fa-piggy-bank' },
                  { t: 'Visa Strategy', d: 'Customized prep for the highest success rates.', i: 'fa-shield-halved' },
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 group hover:bg-primary transition-all duration-500">
                    <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                      <i className={`fa-solid ${item.i}`}></i>
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-3 group-hover:text-white">{item.t}</h4>
                    <p className="text-slate-500 group-hover:text-white/80 text-sm leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sticky top-40 bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-100">
              <h3 className="text-3xl font-black text-slate-900 mb-8">Book Your Session</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input required type="text" placeholder="Full Name" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:border-primary font-bold" onChange={e => setForm({ ...form, name: e.target.value })} />
                <div className="grid grid-cols-2 gap-4">
                  <input required type="email" placeholder="Email" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:border-primary font-bold" onChange={e => setForm({ ...form, email: e.target.value })} />
                  <input required type="tel" placeholder="Phone" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:border-primary font-bold" onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <input required type="text" placeholder="Your City" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:border-primary font-bold" onChange={e => setForm({ ...form, city: e.target.value })} />
                <select className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:border-primary font-bold" onChange={e => setForm({ ...form, country: e.target.value })}>
                  <option value="UK">Preferred Country: UK</option>
                  <option value="USA">Preferred Country: USA</option>
                  <option value="Canada">Preferred Country: Canada</option>
                  <option value="Australia">Preferred Country: Australia</option>
                  <option value="Other">Other</option>
                </select>
                <button type="submit" className="w-full py-6 bg-primary text-white rounded-3xl font-black text-xl shadow-2xl shadow-primary/30 hover:bg-primary-dark transition-all transform hover:scale-[1.02]">Confirm via WhatsApp</button>
              </form>
              <p className="mt-8 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">Fastest response within 2 business hours</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <SectionHeader tag="THE EXPERIENCE" title="What to Expect in 30 Minutes" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
            {[
              { s: '01', t: 'Discovery', d: 'We listen to your ambitions, fears, and budget constraints.' },
              { s: '02', t: 'Selection', d: 'We shortlist 3-5 universities perfectly aligned with your profile.' },
              { s: '03', t: 'Roadmap', d: 'A detailed timeline of applications, tests, and visa filings.' }
            ].map((step, i) => (
              <div key={i} className="flex-1 bg-white p-12 rounded-[3.5rem] border border-slate-200 relative group">
                <span className="absolute -top-6 -right-6 w-16 h-16 bg-primary text-white flex items-center justify-center rounded-2xl font-black text-2xl shadow-xl">{step.s}</span>
                <h4 className="text-2xl font-black text-slate-900 mb-6">{step.t}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SuccessStories view="global" />
      <GlobalCTA onAction={() => { }} />
    </div>
  );
};

const AboutPage = ({ onAction }: { onAction: (a: string) => void }) => (
  <div className="animate-fadeIn">

    <section className="pt-10 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="relative -mt-32">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" className="rounded-[4rem] shadow-2xl relative z-10" alt="Consultation" />
            <div className="absolute -bottom-10 -right-10 bg-primary text-white p-12 rounded-[3rem] shadow-xl z-20">
              <p className="text-5xl font-black mb-2">30+</p>
              <p className="text-xs font-bold uppercase tracking-widest">Years of Trust</p>
            </div>
          </div>
          <div className="space-y-8">
            <SectionHeader tag="WHO WE ARE" title="Integrity is in Our DNA" centered={false} />
            <p className="text-xl text-slate-600 leading-relaxed">
              Integrity Overseas has been the standard-bearer for honest overseas education consultancy. We believe every student deserves a transparent path to their global aspirations. Our network spans 850+ direct university tie-ups globally.
            </p>
            <ul className="space-y-4">
              {['Certified AAERI & ICEF Member', '850+ Direct University Tie-ups', 'Dedicated Post-Landing Team', 'Free Career Psychometric Tests'].map(item => (
                <li key={item} className="flex items-center gap-4 text-slate-800 font-bold text-lg">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center"><i className="fa-solid fa-check"></i></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    <GlobalCTA onAction={onAction} />
  </div>
);

const ServicesPage = ({ onAction }: { onAction: (a: string) => void }) => {
  const services = [
    { t: 'Career Counseling', d: 'Identify your strengths and map your path with certified psychologists and career coaches.', i: 'fa-compass', img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800' },
    { t: 'Admission Assistance', d: 'Direct interaction with university delegates and error-free application processing for high acceptance.', i: 'fa-building-columns', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200' },
    { t: 'Visa Guidance', d: 'Expert documentation, financial vetting, and mock interview prep with a 99% success rate.', i: 'fa-passport', img: globalVisaGuidance },
    { t: 'Scholarship Aid', d: 'Comprehensive search for merit-based and need-based global funding to reduce your debt.', i: 'fa-award', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800' },
    { t: 'Pre-Departure Briefing', d: 'Essential cultural insights, travel logistics, and student networking sessions before you fly.', i: 'fa-plane-departure', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800' },
    { t: 'Test Preparation', d: 'IELTS, GRE, GMAT, and PTE coaching from the industry\'s top-rated expert trainers.', i: 'fa-book-open', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="animate-fadeIn">

      <section className="pt-10 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Comprehensive Solutions" desc="We manage every detail of your application journey to ensure a stress-free experience." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((s, idx) => (
              <div key={idx} className="group bg-white rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all overflow-hidden flex flex-col">
                <div className="h-72 relative overflow-hidden bg-slate-100">
                  <img src={s.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={s.t} />
                  <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-3xl shadow-2xl">
                    <i className={`fa-solid ${s.i}`}></i>
                  </div>
                </div>
                <div className="p-12 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black text-slate-900 mb-6">{s.t}</h3>
                  <p className="text-slate-500 mb-10 flex-1 leading-relaxed">{s.d}</p>
                  <button onClick={() => onAction('consultation')} className="w-full py-5 bg-slate-50 text-primary font-black rounded-[1.5rem] group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    Talk to an Expert
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestPrep onEnroll={() => onAction('consultation')} />
      <GlobalCTA onAction={onAction} />
    </div>
  );
};

const AdmissionsPage = ({ onAction }: { onAction: (a: string) => void }) => (
  <div className="animate-fadeIn">

    <section className="pt-10 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="PROCESS" title="6 Steps to Your Dream University" desc="Our streamlined admission process ensures zero errors and maximum success rates." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { s: '01', t: 'Personalized Profile Analysis', d: 'Identifying your goals and academic standing with a senior consultant.', i: 'fa-chart-simple' },
            { s: '02', t: 'Best-Fit Shortlisting', d: 'Filtering from 850+ universities to find your top 5 perfect matches.', i: 'fa-list-ol' },
            { s: '03', t: 'Winner Application Filing', d: 'Meticulous review of SOP, LOR, and Resume to stand out in the crowd.', i: 'fa-file-signature' },
            { s: '04', t: 'Direct Uni Interaction', d: 'Leveraging our direct tie-ups for faster processing and offer letters.', i: 'fa-handshake-simple' },
            { s: '05', t: 'Interview Preparation', d: 'One-on-one mock interview sessions to ace university-specific interviews.', i: 'fa-user-tie' },
            { s: '06', t: 'Final Offer Acceptance', d: 'Assisting with fee deposits, CAS requests, and I-20 documentation.', i: 'fa-circle-check' },
          ].map((item, i) => (
            <div key={i} className="p-12 bg-slate-50 rounded-[4rem] border border-slate-100 relative group hover:bg-white hover:shadow-2xl transition-all">
              <span className="absolute top-10 right-10 text-5xl font-black text-slate-100 group-hover:text-primary/10 transition-colors">{item.s}</span>
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-sm"><i className={`fa-solid ${item.i}`}></i></div>
              <h3 className="text-2xl font-black text-slate-900 mb-6">{item.t}</h3>
              <p className="text-slate-500 leading-relaxed">{item.d}</p>
              <button onClick={() => onAction('consultation')} className="mt-10 flex items-center gap-3 font-bold text-primary group-hover:gap-5 transition-all">Apply Now <i className="fa-solid fa-arrow-right"></i></button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <GlobalCTA onAction={onAction} />
  </div>
);

const VisaPage = ({ onAction }: { onAction: (a: string) => void }) => (
  <div className="animate-fadeIn">

    <section className="pt-10 pb-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <SectionHeader tag="VISA GUIDANCE" title="99% Approval Rate" centered={false} />
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">The visa process is complex and ever-changing. Our dedicated visa wing stays updated with daily policy changes to ensure your documentation is 100% compliant with the latest regulations in UK, USA, Canada, and beyond.</p>
            <div className="space-y-6">
              {[
                { t: 'Financial Vetting', d: 'Ensuring your funds meet strict consulate and bank standards for solvency.', i: 'fa-money-bill-transfer' },
                { t: 'Mock Interviews', d: 'Intensive sessions to prepare for F1, Tier 4, and other high-stakes interviews.', i: 'fa-comments' },
                { t: 'SOP & Motivation Review', d: 'Reviewing your intent statement for absolute clarity and legal compliance.', i: 'fa-feather' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0 text-xl"><i className={`fa-solid ${item.i}`}></i></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">{item.t}</h4>
                    <p className="text-slate-500 text-base leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <img
              src={globalVisaGuidance}
              className="w-full h-[700px] object-cover rounded-[5rem] shadow-2xl relative z-10 border-[12px] border-white"
              alt="Visa Guidance"
            />
          </div>
        </div>
      </div>
    </section>
    <GlobalCTA onAction={onAction} />
  </div>
);

const ContactPage = ({ onAction }: { onAction: (a: string) => void }) => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Integrity Overseas, I'm ${formState.name} (${formState.email}). My phone is ${formState.phone}. Message: ${formState.message}`;
    window.open(`https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="animate-fadeIn">

      <section className="pt-5 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="GET IN TOUCH" title="Connect with Experts" desc="Have a specific question? Our office is ready to help." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="bg-slate-900 p-16 rounded-[4rem] text-white space-y-12">
              <h3 className="text-4xl font-black mb-10 text-primary">Our Head Office</h3>
              <div className="space-y-10">
                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"><i className="fa-solid fa-location-dot"></i></div>
                  <div>
                    <p className="text-xl font-black">Hyderabad Head Office</p>
                    <p className="text-slate-400 text-lg leading-relaxed mt-1">Plot no 26, near Ganesh Temple Road, Phase-1, Phase I, Vanasthalipuram, Hyderabad, Telangana 500070</p>
                  </div>
                </div>
                <div className="flex gap-8 pt-6 border-t border-white/10">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"><i className="fa-solid fa-phone"></i></div>
                  <div><p className="text-xl font-black">Direct Support</p><p className="text-slate-400 text-lg">+{CONTACT_NUMBER}</p></div>
                </div>
                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"><i className="fa-solid fa-envelope"></i></div>
                  <div><p className="text-xl font-black">Counseling Support</p><p className="text-slate-400 text-lg">integrityoverseazz@gmail.com</p></div>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-50">
              <h3 className="text-3xl font-black mb-10 text-slate-900">Send an Inquiry</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <input required type="text" placeholder="Full Name" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary outline-none font-bold text-slate-700" onChange={e => setFormState({ ...formState, name: e.target.value })} />
                <input required type="email" placeholder="Email Address" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary outline-none font-bold text-slate-700" onChange={e => setFormState({ ...formState, email: e.target.value })} />
                <input required type="tel" placeholder="Mobile Number" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary outline-none font-bold text-slate-700" onChange={e => setFormState({ ...formState, phone: e.target.value })} />
                <textarea required placeholder="How can we help you?" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary outline-none min-h-[200px] font-bold text-slate-700" onChange={e => setFormState({ ...formState, message: e.target.value })}></textarea>
                <button type="submit" className="w-full py-6 bg-primary text-white rounded-2xl font-black text-2xl shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all transform hover:scale-[1.02]">Send via WhatsApp</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <GlobalCTA onAction={onAction} />
    </div>
  );
};

const FAQPage = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "Is studying abroad really expensive?", a: "It depends on the destination. Germany and many European countries offer free or low-cost tuition. We help you find a country that fits your budget perfectly." },
    { q: "Do you help with student loans?", a: "Yes! We have direct partnerships with leading banks to assist you with quick, low-interest education loans for tuition and living expenses." },
    { q: "What is the minimum IELTS score for top unis?", a: "Most top universities require an overall band of 6.5 or 7.0, with no individual band less than 6.0. We provide coaching to help you exceed this." },
    { q: "Can I work while studying?", a: "Yes, most major destinations like the UK, USA, Canada, and Australia allow international students to work up to 20 hours per week during terms." }
  ];
  return (
    <div className="pt-5 pb-20 bg-white animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="FAQS" title="Honest Answers to Your Doubts" />
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full p-8 flex justify-between items-center bg-white text-left hover:bg-slate-50 transition-all">
                <span className="text-xl font-black text-slate-900">{faq.q}</span>
                <i className={`fa-solid ${open === i ? 'fa-minus' : 'fa-plus'} text-primary`}></i>
              </button>
              {open === i && <div className="p-8 bg-slate-50 text-slate-600 border-t border-slate-100 animate-fadeIn font-medium text-lg leading-relaxed">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
const App: React.FC = () => {
  const coursesRef = useRef<HTMLDivElement>(null);
  const [currentView, setCurrentView] = useState<string>('global');
  const [toast, setToast] = useState<{ message: string, type: 'success' | 'info' } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAction = (action: string) => {
    if (action === 'consult' || action === 'book' || action === 'consultation') {
      setCurrentView('consultation');
    } else if (action === 'whatsapp') {
      window.open(`https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
    } else {
      showToast(`Action: ${action} initiated!`, 'info');
    }
  };

  if (currentView === 'login') {
    return <Login setView={setCurrentView} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'global':
        return (
          <div className="animate-fadeIn">
            <section className="py-24 bg-white text-center px-4">
              <SectionHeader tag="DESTINATIONS" title="Explore Your World" desc="Trusted institutions across 16 countries await your arrival." />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
                {destinationsList.map(c => (
                  <button key={c} onClick={() => setCurrentView(c)} className="p-12 rounded-[3.5rem] bg-slate-50 hover:bg-primary hover:text-white transition-all group border border-slate-100 shadow-sm hover:shadow-2xl">
                    <i className="fa-solid fa-graduation-cap text-4xl mb-4 text-primary group-hover:text-white transition-colors"></i>
                    <p className="font-black text-xl uppercase">{c}</p>
                  </button>
                ))}
              </div>
            </section>
            <SuccessStories view="global" />
            <AIAssistant />
          </div>
        );
      case 'about':
        return <AboutPage onAction={handleAction} />;
      case 'services':
        return <ServicesPage onAction={handleAction} />;
      case 'admissions':
        return <AdmissionsPage onAction={handleAction} />;
      case 'visa':
        return <VisaPage onAction={handleAction} />;
      case 'contact':
        return <ContactPage onAction={handleAction} />;
      case 'faqs':
        return <FAQPage />;
      case 'consultation':
        return <ConsultationPage />;
      default:
        if (destinationsList.includes(currentView)) {
          return (
            <div className="animate-fadeIn relative lg:flex lg:items-start min-h-screen bg-white">
              <StudyAbroadHeader setView={setCurrentView} />

              {/* Content Area - Flex Child */}
              <div className="relative z-0 flex-1 pt-16 lg:pt-0 min-w-0">
                <div className="p-0">
                  <CountryDetailHub country={currentView} onBook={() => handleAction('consultation')} />
                  <UniversityList country={currentView} onViewCourses={() => coursesRef.current?.scrollIntoView({ behavior: 'smooth' })} />
                  <div ref={coursesRef}>
                    <CoursesHub onApply={() => handleAction('consultation')} />
                  </div>
                  <SuccessStories view={currentView} />

                  <AIAssistant />
                  <GlobalCTA onAction={handleAction} country={currentView} />
                </div>
              </div>
            </div>
          );
        }
        return null;
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary font-sans scroll-smooth bg-white">
      <Navbar setView={setCurrentView} currentView={currentView} contactNumber={CONTACT_NUMBER} />

      {toast && (
        <div className="fixed top-28 right-8 z-[100] animate-bounceIn">
          <div className={`px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border ${toast.type === 'success' ? 'bg-emerald-600 border-emerald-500' : 'bg-primary border-primary/50'} text-white`}>
            <i className={`fa-solid ${toast.type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}`}></i>
            <span className="font-bold">{toast.message}</span>
          </div>
        </div>
      )}

      <a href={`https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-10 right-10 z-[90] w-16 h-16 bg-[#25D366] text-white rounded-full flex flex-col items-center justify-center text-3xl shadow-[0_10px_40px_-10px_rgba(37,211,102,0.8)] hover:scale-110 transition-transform">
        <i className="fa-brands fa-whatsapp drop-shadow-md"></i>
      </a>

      <main className="min-h-screen">
        <Hero view={currentView} onAction={handleAction} />
        {renderView()}
      </main>

      <Footer view={currentView} setView={setCurrentView} contactNumber={CONTACT_NUMBER} />
    </div>
  );
};

export default App;
