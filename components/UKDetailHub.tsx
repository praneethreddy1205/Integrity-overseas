
import React, { useState } from 'react';

const UKDetailHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState('admissions');

  const tabs = [
    { id: 'admissions', label: 'Admissions', icon: 'fa-university' },
    { id: 'visa', label: 'Visa & PSW', icon: 'fa-passport' },
    { id: 'costs', label: 'Cost of Study', icon: 'fa-wallet' },
    { id: 'scholarships', label: 'Scholarships', icon: 'fa-award' },
  ];

  return (
    <section className="py-24 bg-white scroll-mt-20" id="uk-details">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-black mb-4">
            <i className="fa-solid fa-crown"></i> TOTAL UK GUIDE
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Complete Guide to Studying in the UK</h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            Everything you need to know about navigating your educational journey in the United Kingdom, from application to your first job.
          </p>
        </div>

        {/* Interactive Hub */}
        <div className="bg-slate-50 rounded-[3rem] p-4 md:p-8 shadow-inner border border-slate-100">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <i className={`fa-solid ${tab.icon}`}></i>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm min-h-[400px]">
            {activeTab === 'admissions' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fadeIn">
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-slate-900">Intakes & Deadlines</h3>
                  <div className="space-y-4">
                    <div className="p-6 rounded-2xl border-l-4 border-blue-600 bg-blue-50">
                      <p className="font-black text-blue-900">September Intake (Primary)</p>
                      <p className="text-sm text-blue-800/70 mt-1">Deadlines: Jan to June. Largest selection of courses and scholarship opportunities.</p>
                    </div>
                    <div className="p-6 rounded-2xl border-l-4 border-indigo-600 bg-indigo-50">
                      <p className="font-black text-indigo-900">January Intake (Secondary)</p>
                      <p className="text-sm text-indigo-800/70 mt-1">Deadlines: Sept to Nov. Ideal for students who missed the autumn cycle.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900 rounded-3xl p-8 text-white">
                  <h4 className="font-bold mb-6 flex items-center gap-2">
                    <i className="fa-solid fa-list-check text-blue-400"></i> Requirements
                  </h4>
                  <ul className="space-y-4 text-sm text-slate-300">
                    <li className="flex items-center gap-3"><i className="fa-solid fa-circle-check text-emerald-400"></i> Academic Transcripts (Minimum 60%+)</li>
                    <li className="flex items-center gap-3"><i className="fa-solid fa-circle-check text-emerald-400"></i> English Proficiency (IELTS 6.5 / PTE 60+)</li>
                    <li className="flex items-center gap-3"><i className="fa-solid fa-circle-check text-emerald-400"></i> Statement of Purpose (SOP)</li>
                    <li className="flex items-center gap-3"><i className="fa-solid fa-circle-check text-emerald-400"></i> Letters of Recommendation (2-3)</li>
                    <li className="flex items-center gap-3"><i className="fa-solid fa-circle-check text-emerald-400"></i> CAS (Confirmation of Acceptance for Studies)</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'visa' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn">
                <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100">
                  <div className="text-3xl text-emerald-600 mb-4"><i className="fa-solid fa-id-card"></i></div>
                  <h4 className="font-black text-slate-900 mb-2">Student Route Visa</h4>
                  <p className="text-sm text-slate-600">The primary visa for long-term study. Requires 70 points under the points-based system.</p>
                </div>
                <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100">
                  <div className="text-3xl text-blue-600 mb-4"><i className="fa-solid fa-briefcase"></i></div>
                  <h4 className="font-black text-slate-900 mb-2">Graduate Route (PSW)</h4>
                  <p className="text-sm text-slate-600">Stay and work in the UK for 2 years after completing your degree (3 years for PhD).</p>
                </div>
                <div className="p-8 rounded-3xl bg-red-50 border border-red-100">
                  <div className="text-3xl text-red-600 mb-4"><i className="fa-solid fa-clock"></i></div>
                  <h4 className="font-black text-slate-900 mb-2">Part-Time Work</h4>
                  <p className="text-sm text-slate-600">Work up to 20 hours per week during term time and full-time during vacations.</p>
                </div>
              </div>
            )}

            {activeTab === 'costs' && (
              <div className="space-y-12 animate-fadeIn">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold">Tuition Fees (Annual)</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                        <span className="font-medium text-slate-700">Undergraduate</span>
                        <span className="font-black text-slate-900">£12,000 - £25,000</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                        <span className="font-medium text-slate-700">Postgraduate</span>
                        <span className="font-black text-slate-900">£14,000 - £30,000</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                        <span className="font-medium text-slate-700">MBA</span>
                        <span className="font-black text-slate-900">£18,000 - £45,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold">Living Expenses (Monthly)</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                        <span className="font-medium text-red-900">Inside London</span>
                        <span className="font-black text-red-900">£1,334 / mo</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                        <span className="font-medium text-blue-900">Outside London</span>
                        <span className="font-black text-blue-900">£1,023 / mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'scholarships' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
                <div className="group p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-2xl font-black mb-4">GREAT Scholarships</h4>
                    <p className="text-slate-400 text-sm mb-6">Offered by the UK government and participating universities for students across various disciplines.</p>
                    <div className="text-3xl font-black text-blue-400">£10,000 Value</div>
                  </div>
                  <i className="fa-solid fa-award absolute -right-4 -bottom-4 text-white/5 text-9xl group-hover:scale-110 transition-transform"></i>
                </div>
                <div className="group p-8 rounded-3xl bg-white border border-slate-200 relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-2xl font-black text-slate-900 mb-4">Chevening Awards</h4>
                    <p className="text-slate-500 text-sm mb-6">Fully-funded scholarship for a one-year Master’s degree in any subject at any UK university.</p>
                    <div className="text-3xl font-black text-indigo-600">Full Funding</div>
                  </div>
                  <i className="fa-solid fa-star absolute -right-4 -bottom-4 text-slate-100 text-9xl group-hover:scale-110 transition-transform"></i>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UKDetailHub;
