
import React, { useState } from 'react';

interface LoginProps {
  setView: (view: string) => void;
}

const Login: React.FC<LoginProps> = ({ setView }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    refNumber: '',
    fullName: '',
    purpose: 'Admissions'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${isLogin ? 'Login' : 'Registration'} successful! Redirecting to dashboard...`);
    setView('global');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900 py-20 px-4">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
          alt="Office background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-slate-900/90"></div>
      </div>

      <div className="relative z-10 w-full max-w-xl">
        <div className="bg-white/95 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden border border-white/20">
          <div className="p-10 md:p-14">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-6" onClick={() => setView('global')}>
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg cursor-pointer">I</div>
                <span className="text-3xl font-black text-slate-900 cursor-pointer">Integrity Overseas</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-3">
                {isLogin ? 'Student Portal' : 'Join Integrity'}
              </h2>
              <p className="text-slate-500 font-medium">
                {isLogin 
                  ? 'Access your international education dashboard' 
                  : 'Start your journey with expert consultancy services'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="animate-fadeIn">
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Full Legal Name</label>
                  <div className="relative">
                    <i className="fa-solid fa-user absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                    <input 
                      type="text" 
                      required
                      className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                      placeholder="As per passport"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                <div className="relative">
                  <i className="fa-solid fa-envelope absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input 
                    type="email" 
                    required
                    className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all transform hover:scale-[1.02] active:scale-95"
              >
                {isLogin ? 'Sign In to Portal' : 'Register for Consultation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
