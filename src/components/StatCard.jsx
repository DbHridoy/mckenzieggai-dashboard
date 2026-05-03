import React from 'react';

export default function StatCard({ label, value, showBorder = true }) {
  return (
    <div className={`flex flex-col items-center justify-center p-6 flex-1 ${showBorder ? 'border-r border-slate-100' : ''}`}>
      <h3 className="text-3xl font-bold text-slate-900 mb-2">{value}</h3>
      <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</p>
    </div>
  );
}
