import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F9F9FB] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-sm border border-slate-100 p-12 md:p-20">
        <div className="flex flex-col items-center mb-12">
          <img src="/logo.svg" alt="GlamGuide AI" className="w-24 h-24 mb-4" />
          <h1 className="text-4xl font-bold text-primary">GlamGuide AI</h1>
        </div>
        {children}
      </div>
    </div>
  );
}
