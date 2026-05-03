import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, MoreVertical, Clock, Layers } from 'lucide-react';

const mockFlows = [
  {
    id: 1,
    title: 'Everyday Natural Look',
    description: 'A quick 5-step process for a fresh, natural appearance perfect for daily wear.',
    steps: 5,
    updated: 'Oct 12',
    status: 'Active'
  },
  {
    id: 2,
    title: 'Evening Glamour',
    description: 'Detailed walkthrough for a striking evening makeup look with bold eyes.',
    steps: 8,
    updated: 'Sep 28',
    status: 'Active'
  },
  {
    id: 3,
    title: 'Bridal Glow',
    description: 'Comprehensive long-wear makeup steps specifically designed for wedding days.',
    steps: 12,
    updated: 'Oct 24',
    status: 'Draft'
  }
];

export default function GuidedStepsListPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-slate-800">Guided Steps</h2>
        <Link to="/steps/create">
          <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors flex items-center gap-2 border-none">
            <Plus size={18} /> Add Step Flow
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockFlows.map((flow) => (
          <div key={flow.id} className="bg-white rounded-3xl border border-slate-100 p-6 space-y-6 hover:shadow-xl hover:shadow-slate-100/50 transition-all group">
            <div className="flex justify-between items-start">
              <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                flow.status === 'Active' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'
              }`}>
                {flow.status}
              </span>
              <button className="text-slate-300 hover:text-slate-600 border-none bg-transparent">
                <MoreVertical size={20} />
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-800">{flow.title}</h3>
              <p className="text-sm font-medium text-slate-400 leading-relaxed line-clamp-2">
                {flow.description}
              </p>
            </div>

            <div className="flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Layers size={16} />
                <span className="text-xs font-bold">{flow.steps} Steps</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span className="text-xs font-bold text-slate-400/70 italic">Updated {flow.updated}</span>
              </div>
            </div>

            <Link to="/steps/create">
              <button className="w-full py-3 mt-4 border border-primary text-primary rounded-2xl font-bold text-sm hover:bg-primary/5 transition-colors bg-transparent">
                Edit Flow
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
