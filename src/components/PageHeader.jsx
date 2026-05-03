import React from 'react';
import { Search } from 'lucide-react';

export default function PageHeader({ title, actionButton, searchPlaceholder, onSearch }) {
  return (
    <div className="bg-primary text-white rounded-t-2xl p-6 flex justify-between items-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      
      <div className="flex gap-4 items-center">
        {searchPlaceholder && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="bg-white text-slate-800 pl-10 pr-4 py-2 rounded-xl text-sm w-64 focus:outline-none focus:ring-2 focus:ring-secondary/50"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        )}
        {actionButton}
      </div>
    </div>
  );
}
