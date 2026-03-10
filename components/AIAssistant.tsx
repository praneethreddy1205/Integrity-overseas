
import React, { useState } from 'react';
import { getEducationCounseling } from '../services/geminiService';
import { RecommendationResponse } from '../types';

const CONTACT_NUMBER = "919014614826";

const AIAssistant: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    background: '',
    interest: '',
    budget: '',
    preferredCountries: [] as string[]
  });
  const [recommendation, setRecommendation] = useState<RecommendationResponse | null>(null);

  const handleCountryToggle = (country: string) => {
    setFormData(prev => ({
      ...prev,
      preferredCountries: prev.preferredCountries.includes(country)
        ? prev.preferredCountries.filter(c => c !== country)
        : [...prev.preferredCountries, country]
    }));
  };

  const handleConsult = async () => {
    setLoading(true);
    try {
      const result = await getEducationCounseling(formData);
      setRecommendation(result);
      setStep(3);
    } catch (error) {
      alert("Something went wrong. Please check your data.");
    } finally {
      setLoading(false);
    }
  };

  const handleShareWithExpert = () => {
    if (!recommendation) return;
    const text = `Hi, I just used the Integrity Overseas AI counselor! \nMy Background: ${formData.background}\nAI Advice: ${recommendation.advice}`;
    window.open(`https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-24 bg-neutral relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <i className="fa-solid fa-robot text-[200px] text-primary"></i>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-neutral-dark">
          <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
            <div className="lg:col-span-2 bg-secondary p-12 text-white flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-3xl mb-8 text-white shadow-xl">
                  <i className="fa-solid fa-brain"></i>
                </div>
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Integrity SmartAI</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Our AI counselor analyzes your profile to suggest the perfect global education path.
                </p>
              </div>
              <div className="space-y-6 mt-12">
                {[
                  { n: 1, l: 'Analysis', active: step >= 1 },
                  { n: 2, l: 'Goal Matching', active: step >= 2 },
                  { n: 3, l: 'Personalized Advice', active: step >= 3 }
                ].map(s => (
                  <div key={s.n} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full ${s.active ? 'bg-primary' : 'bg-white/10'} flex items-center justify-center font-black transition-colors`}>{s.n}</div>
                    <span className={s.active ? 'text-white' : 'text-slate-500'}>{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 p-12 relative min-h-[500px]">
              {loading && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 border-4 border-primary-light border-t-primary rounded-full animate-spin"></div>
                  <p className="mt-4 font-black text-secondary">Gemini is analyzing your future...</p>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-8 animate-fadeIn">
                  <h3 className="text-2xl font-black text-secondary">Tell us about your background</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Academic Background</label>
                      <input 
                        value={formData.background}
                        onChange={(e) => setFormData({...formData, background: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl border border-neutral-dark focus:border-primary outline-none font-medium"
                        placeholder="e.g. BSc in Computer Science, 8.5 CGPA"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Budget Range</label>
                      <select 
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl border border-neutral-dark focus:border-primary outline-none font-bold text-secondary"
                      >
                        <option value="">Select Range</option>
                        <option value="Low">Under $15k</option>
                        <option value="Medium">$15k - $30k</option>
                        <option value="High">Over $30k</option>
                      </select>
                    </div>
                  </div>
                  <button 
                    onClick={() => setStep(2)}
                    disabled={!formData.background || !formData.budget}
                    className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-black shadow-xl shadow-primary/20 transition-all disabled:opacity-50"
                  >
                    Next Step
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 animate-fadeIn">
                  <h3 className="text-2xl font-black text-secondary">What are your interests?</h3>
                  <div className="space-y-6">
                    <input 
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl border border-neutral-dark focus:border-primary outline-none font-medium"
                      placeholder="e.g. Artificial Intelligence, Marketing"
                    />
                    <div className="flex flex-wrap gap-2">
                      {['USA', 'UK', 'Canada', 'Australia', 'Germany'].map(c => (
                        <button
                          key={c}
                          onClick={() => handleCountryToggle(c)}
                          className={`px-5 py-2 rounded-full border transition-all text-xs font-black uppercase tracking-widest ${formData.preferredCountries.includes(c) ? 'bg-primary text-white border-primary' : 'bg-neutral text-slate-400 border-neutral-dark hover:border-primary'}`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="flex-1 bg-neutral py-5 rounded-2xl font-black text-slate-500 border border-neutral-dark">Back</button>
                    <button 
                      onClick={handleConsult}
                      disabled={!formData.interest}
                      className="flex-[2] bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-black shadow-xl"
                    >
                      Analyze Profile
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && recommendation && (
                <div className="space-y-6 animate-fadeIn overflow-y-auto max-h-[600px] pr-2">
                  <div className="bg-primary-light p-8 rounded-3xl border border-primary/10">
                    <h4 className="font-black text-primary-dark mb-4 uppercase text-xs tracking-[0.2em]">SmartAI Analysis Result</h4>
                    <p className="text-secondary text-sm leading-relaxed font-medium">{recommendation.advice}</p>
                  </div>
                  <button onClick={handleShareWithExpert} className="w-full bg-secondary text-white py-5 rounded-2xl font-black flex items-center justify-center gap-4 hover:bg-secondary-light transition-all shadow-xl">
                     <i className="fa-brands fa-whatsapp text-primary"></i> Discuss with Senior Consultant
                  </button>
                  <button onClick={() => setStep(1)} className="w-full bg-neutral text-slate-500 py-4 rounded-2xl font-black border border-neutral-dark">Start Over</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
