import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export default function ResetPasswordPage() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/auth/login');
  };

  const PasswordField = ({ label, show, setShow, placeholder }) => (
    <div className="space-y-3">
      <label className="text-lg font-bold text-slate-800 block">{label}</label>
      <div className="relative">
        <input 
          type={show ? "text" : "password"} 
          placeholder={placeholder}
          className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg"
          required
        />
        <button 
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
        >
          {show ? <EyeOff size={24} /> : <Eye size={24} />}
        </button>
      </div>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-bold text-slate-800 mb-10">Set new password</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <PasswordField 
          label="Current Password" 
          show={showCurrent} 
          setShow={setShowCurrent} 
          placeholder="*********" 
        />
        <PasswordField 
          label="New Password" 
          show={showNew} 
          setShow={setShowNew} 
          placeholder="*********" 
        />
        <PasswordField 
          label="Confirm New Password" 
          show={showConfirm} 
          setShow={setShowConfirm} 
          placeholder="*********" 
        />

        <button 
          type="submit"
          className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
