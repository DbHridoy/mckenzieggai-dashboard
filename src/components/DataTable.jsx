import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function DataTable({ columns, data, pagination, headerVariant = 'default' }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className={cn(
            headerVariant === 'purple' ? 'bg-primary text-white' : 'border-b border-slate-100 bg-white text-slate-600'
          )}>
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-slate-50 transition-colors">
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="px-6 py-4 text-sm text-slate-600 font-medium">
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {pagination && (
        <div className="px-6 py-4 flex items-center justify-between border-t border-slate-100 bg-white">
          <span className="text-sm text-slate-500 font-bold">
            SHOWING {pagination.from}-{pagination.to} OF {pagination.total}
          </span>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 border-none bg-transparent">
              <ChevronLeft size={20} />
            </button>
            {[1, 2, 3, '...', 30, 60, 120].map((page, idx) => (
              <button
                key={idx}
                className={cn(
                  "w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold border-none transition-colors",
                  page === 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-100 bg-transparent'
                )}
              >
                {page}
              </button>
            ))}
            <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 border-none bg-transparent">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
