
import React from 'react';

interface FooterProps {
  view?: string;
  setView?: (view: string) => void;
  contactNumber?: string;
}

const Footer: React.FC<FooterProps> = ({ view = 'global', setView, contactNumber = "917680976577" }) => {
  const whatsappMsg = encodeURIComponent("Hello Integrity Overseas, I am interested in your services and would like to speak with a counselor regarding my overseas education plans.");
  const instagramUrl = "https://www.instagram.com/io.expertz?igsh=MTAwcXl6bWZsNG51MA==";

  const handleLink = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (setView) {
      setView(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a212c] text-slate-300 pt-6 pb-4">
      <div className="max-w-[1600px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleLink(e, 'global')}>
              <div className="w-8 h-8 bg-transparent flex items-center justify-center p-0 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dfgbpeggd/image/upload/v1770095688/WhatsApp_Image_2026-01-30_at_10.53.08_AM_dkqpfe.jpg"
                  alt="Integrity Overseas Logo"
                  className="w-full h-full object-contain invert brightness-[2] mix-blend-screen"
                  style={{ mixBlendMode: 'screen' }}
                />
              </div>
              <span className="text-base font-black text-white">Integrity Overseas</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs font-medium">
              Empowering ambitious students with honest, transparent, and personalized guidance for over 30 years. Your global future is our integrity.
            </p>
            <div className="flex gap-2">
              {[
                { i: 'whatsapp', l: `https://wa.me/${contactNumber}?text=${whatsappMsg}` },
                { i: 'instagram', l: instagramUrl }
              ].map(s => (
                <a
                  key={s.i}
                  href={s.l}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-xs"
                >
                  <i className={`fa-brands fa-${s.i}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-black mb-2 uppercase tracking-widest">Study Abroad</h4>
            <ul className="space-y-1 font-bold text-[10px]">
              {['UK', 'USA', 'Canada', 'Australia', 'Europe'].map(c => (
                <li key={c}><a href="#" onClick={(e) => handleLink(e, c)} className="hover:text-primary transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[6px] text-primary"></i> Study in <span className="uppercase">{c}</span></a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-black mb-2 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-1 font-bold text-[10px]">
              <li><a href="#" onClick={(e) => handleLink(e, 'about')} className="hover:text-primary transition-colors">About Our Agency</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'services')} className="hover:text-primary transition-colors">Our Full Services</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'admissions')} className="hover:text-primary transition-colors">Admissions Process</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'visa')} className="hover:text-primary transition-colors">Visa Process Support</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'faqs')} className="hover:text-primary transition-colors">Help & FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-black mb-2 uppercase tracking-widest">Global Support</h4>
            <div className="space-y-3">
              <div className="flex gap-2">
                <i className="fa-solid fa-location-dot text-primary text-sm mt-0.5"></i>
                <div>
                  <p className="text-slate-300 font-bold mb-0.5 text-[10px]">Hyderabad Head Office</p>
                  <p className="text-slate-400 text-[9px] font-medium leading-tight">Plot no 26, near Ganesh Temple Road, Phase-1, Vanasthalipuram, Hyderabad, 500070</p>
                </div>
              </div>
              <div className="flex gap-2">
                <i className="fa-solid fa-location-dot text-primary text-sm mt-0.5"></i>
                <div>
                  <p className="text-slate-300 font-bold mb-0.5 text-[10px]">Nalgonda Branch</p>
                  <p className="text-slate-400 text-[9px] font-medium leading-tight">IT Tower, 1st Floor, Nalgonda, Telangana – 508001</p>
                </div>
              </div>
              <div className="flex gap-2">
                <i className="fa-solid fa-phone text-primary text-sm"></i>
                <p className="text-slate-400 font-medium text-[10px]">+{contactNumber.slice(0, 2)} {contactNumber.slice(2)}</p>
              </div>
              <div className="flex gap-2">
                <i className="fa-solid fa-envelope text-primary text-sm"></i>
                <p className="text-slate-400 font-medium text-[10px]">integrityoverseaz@gmail.com</p>
              </div>
              <button onClick={(e) => handleLink(e, 'contact')} className="w-full py-1.5 bg-white text-slate-900 rounded-[0.5rem] font-black hover:bg-primary hover:text-white transition-all text-[10px]">Visit Our Office</button>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold text-slate-500">
          <p>© 2026 Integrity Overseas Education Consultants. Licensed by Ministry of Education.</p>
          <div className="flex gap-4">
            <a href="#" onClick={(e) => handleLink(e, 'faqs')} className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" onClick={(e) => handleLink(e, 'faqs')} className="hover:text-slate-300">Terms of Use</a>
            <a href="#" onClick={(e) => handleLink(e, 'faqs')} className="hover:text-slate-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
