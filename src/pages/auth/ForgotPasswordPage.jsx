import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/auth/verify-otp');
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Forgot Password</h2>
      <p className="text-slate-500 mb-10">Enter your email address to get a verification code for resetting your password.</p>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-3">
          <input 
            type="email" 
            placeholder="mostain@gamil.com"
            className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg"
            required
          />
          <p className="text-red-500 text-sm font-medium">Email is Required</p>
        </div>

        <button 
          type="submit"
          className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]"
        >
          Send Code
        </button>
      </form>

      <div className="mt-8 text-center">
        <Link to="/auth/login" className="text-slate-500 font-medium hover:text-primary transition-colors flex items-center justify-center gap-2">
          <span>Back to login</span>
        </Link>
      </div>
    </div>
  );
}
