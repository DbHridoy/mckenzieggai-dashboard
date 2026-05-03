import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate API login
    login({ name: 'James', role: 'Admin', avatar: 'https://i.pravatar.cc/150?u=admin' });
    navigate('/dashboard');
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <form onSubmit={handleLogin} className="space-y-8">
        <div className="space-y-3">
          <label className="text-lg font-bold text-slate-800 block">Email</label>
          <input 
            type="email" 
            placeholder="mostain@gamil.com"
            className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg"
            required
          />
        </div>

        <div className="space-y-3">
          <label className="text-lg font-bold text-slate-800 block">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="****"
              className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg"
              required
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
            >
              {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="w-6 h-6 border-2 border-slate-200 rounded-lg flex items-center justify-center group-hover:border-primary transition-colors">
              <input type="checkbox" className="hidden peer" />
              <div className="w-3 h-3 bg-primary rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
            <span className="text-slate-600 font-medium">Remember password</span>
          </label>
          <Link to="/auth/forgot-password" title="Forgot password?" className="text-primary font-bold hover:underline">
            Forgot password?
          </Link>
        </div>

        <button 
          type="submit"
          className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
