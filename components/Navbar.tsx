
import React, { useState, useEffect } from 'react';

const destinations = ['UK', 'USA', 'Canada', 'Australia', 'Europe', 'New Zealand'];

interface NavbarProps {
  setView: (view: string) => void;
  currentView: string;
  contactNumber?: string;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView, contactNumber = "917680976577" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (view: string) => {
    setView(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full z-50 flex flex-col transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''}`}>
        {/* Top Bar - Scrolling Marquee */}
        <div className="bg-[#1a212c] text-white h-11 border-b border-white/5 relative z-[52] overflow-hidden flex items-center">
          <div className="animate-marquee text-sm font-medium w-max">
            <div className="flex items-center gap-10 lg:gap-16 px-4 lg:px-10">
              <a href={`tel:+${contactNumber}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                <i className="fa-solid fa-phone text-primary justify-center text-xs"></i>
                <span className="tracking-wide">+{contactNumber.slice(0, 2)} {contactNumber.slice(2)}</span>
              </a>
              <span className="text-white/20 hidden sm:block">|</span>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-primary text-xs"></i>
                <span className="tracking-wide">Plot no 26, Phase-1, Vanasthalipuram, Hyderabad</span>
              </div>
              <span className="text-white/20 hidden sm:block">|</span>
              <a href="tel:+918333838252" className="flex items-center gap-3 hover:text-primary transition-colors">
                <i className="fa-solid fa-phone text-primary justify-center text-xs"></i>
                <span className="tracking-wide">+91 8333838252</span>
              </a>
              <span className="text-white/20 hidden sm:block">|</span>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-primary text-xs"></i>
                <span className="tracking-wide">Nalgonda Branch: IT Tower, 1st Floor, Nalgonda, Telangana - 508001</span>
              </div>
              <span className="text-white/20 hidden sm:block">|</span>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-primary text-xs"></i>
                <span className="tracking-wide">integrityoverseazz@gmail.com</span>
              </div>
              <span className="text-white/20 hidden lg:block">|</span>
              <div className="flex items-center gap-3 hidden lg:flex text-primary font-bold">
                <span className="tracking-wide">Your gateway to overseas education</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav - Fixed Below Top Bar */}
        <nav className="bg-white relative z-[51] h-20 border-b border-slate-100/50">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 h-full">
            <div className="flex justify-between items-center h-full">
              {/* Logo Section */}
              <div className="flex items-center h-full py-2">
                <div className="cursor-pointer group h-full flex items-center" onClick={() => handleNav('global')}>
                  <img
                    src="https://res.cloudinary.com/dfgbpeggd/image/upload/v1770095688/WhatsApp_Image_2026-01-30_at_10.53.08_AM_dkqpfe.jpg"
                    alt="Integrity Overseas Logo"
                    className="h-full w-auto object-contain mix-blend-multiply contrast-[1.2] brightness-[1.08]"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-8">
                <button onClick={() => handleNav('global')} className={`text-[13px] font-bold tracking-wider transition-all border-b-2 py-1 ${currentView === 'global' ? 'text-primary border-primary' : 'text-[#1a212c] border-transparent hover:text-primary'}`}>HOME</button>
                <button onClick={() => handleNav('about')} className={`text-[13px] font-bold tracking-wider transition-all border-b-2 py-1 ${currentView === 'about' ? 'text-primary border-primary' : 'text-[#1a212c] border-transparent hover:text-primary'}`}>ABOUT US</button>

                <div className="relative group h-full flex items-center">
                  <button className={`flex items-center gap-2 text-[13px] font-bold tracking-wider transition-all border-b-2 py-1 ${destinations.includes(currentView) ? 'text-primary border-primary' : 'text-[#1a212c] border-transparent hover:text-primary'}`}>
                    STUDY ABROAD <i className="fa-solid fa-chevron-down text-[10px] ml-1 opacity-50"></i>
                  </button>
                  <div className="absolute top-[60px] -left-10 w-[260px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 p-2 flex flex-col overflow-hidden">
                      {destinations.map(c => (
                        <button key={c} onClick={() => handleNav(c)} className={`text-left px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-between group/item ${currentView === c ? 'bg-primary/5 text-primary' : 'hover:bg-slate-50 text-slate-600 hover:text-primary'}`}>
                          Study in <span className="uppercase">{c}</span>
                          <i className="fa-solid fa-arrow-right text-[10px] opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all"></i>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button onClick={() => handleNav('services')} className={`text-[13px] font-bold tracking-wider transition-all border-b-2 py-1 ${currentView === 'services' ? 'text-primary border-primary' : 'text-[#1a212c] border-transparent hover:text-primary'}`}>SERVICES</button>
                <button onClick={() => handleNav('admissions')} className={`text-[13px] font-bold tracking-wider transition-all border-b-2 py-1 ${currentView === 'admissions' ? 'text-primary border-primary' : 'text-[#1a212c] border-transparent hover:text-primary'}`}>ADMISSIONS</button>
                <button onClick={() => handleNav('visa')} className={`text-[13px] font-bold tracking-wider transition-all border-b-2 py-1 ${currentView === 'visa' ? 'text-primary border-primary' : 'text-[#1a212c] border-transparent hover:text-primary'}`}>VISA</button>
                <button onClick={() => handleNav('contact')} className={`text-[13px] font-bold tracking-wider transition-all border-b-2 py-1 ${currentView === 'contact' ? 'text-primary border-primary' : 'text-[#1a212c] border-transparent hover:text-primary'}`}>CONTACT</button>
                <button onClick={() => handleNav('faqs')} className={`text-[13px] font-bold tracking-wider transition-all border-b-2 py-1 ${currentView === 'faqs' ? 'text-primary border-primary' : 'text-[#1a212c] border-transparent hover:text-primary'}`}>FAQ</button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-6">
                <button onClick={() => handleNav('consultation')} className="bg-primary hover:bg-[#00a693] text-white px-8 py-3 rounded-full font-black text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 hidden sm:block tracking-wide">
                  Free Counseling
                </button>
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#1a212c] text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50 transition-colors">
                  <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 border-t ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}`}>
            <div className="px-6 py-8 space-y-2 h-[calc(100vh-80px)] overflow-y-auto">
              {['Home:global', 'About Us:about', 'Services:services', 'Admissions:admissions', 'Visa:visa', 'Contact:contact', 'FAQ:faqs'].map((item) => {
                const [label, key] = item.split(':');
                return (
                  <button key={key} onClick={() => handleNav(key)} className="block w-full text-left py-4 font-black text-[#1a212c] border-b border-slate-50 text-lg hover:text-primary transition-colors">
                    {label}
                  </button>
                );
              })}
              <button onClick={() => handleNav('consultation')} className="block w-full text-center mt-8 py-5 rounded-2xl bg-primary text-white font-black shadow-lg text-lg">Free Counseling</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer to prevent content overlap - Height of Header (44px + 80px = 124px) */}
      <div className="h-[124px] hidden lg:block"></div>
      {/* Mobile Spacer (80px) */}
      <div className="h-[80px] lg:hidden"></div>
    </>
  );
};

export default Navbar;
