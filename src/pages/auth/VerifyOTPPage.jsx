import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState(['8', '0', '', '']);
  const navigate = useNavigate();
  const inputs = useRef([]);

  const handleChange = (index, value) => {
    if (value.length > 1) value = value[value.length - 1];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/auth/reset-password');
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">One Time Passcode</h2>
      <p className="text-slate-500 mb-10">Please check your email. We have sent a code to contact @gmail.com</p>
      
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="flex justify-between gap-4">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={el => inputs.current[i] = el}
              type="text"
              value={digit}
              onChange={e => handleChange(i, e.target.value)}
              onKeyDown={e => handleKeyDown(i, e)}
              className="w-16 h-20 md:w-20 md:h-24 text-center text-4xl font-bold rounded-2xl border-2 border-slate-100 focus:border-primary focus:outline-none transition-all"
            />
          ))}
        </div>

        <div className="flex justify-between items-center text-lg">
          <span className="text-slate-500">Didn't receive code?</span>
          <button type="button" className="text-primary font-bold hover:underline">Resend</button>
        </div>

        <button 
          type="submit"
          className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]"
        >
          Verify
        </button>
      </form>
    </div>
  );
}
