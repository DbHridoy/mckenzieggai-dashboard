import React from 'react';
import PageHeader from '../components/PageHeader';

export default function PlaceholderPage({ title }) {
  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader title={title} />
      <div className="bg-white rounded-b-2xl shadow-sm border border-slate-200 border-t-0 p-12 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl text-slate-400">?</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">{title} Content</h3>
        <p className="text-slate-500 max-w-md">
          This page is currently under development. Please check back later for updates and new features.
        </p>
      </div>
    </div>
  );
}
