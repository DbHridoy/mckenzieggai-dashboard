import React, { useState } from 'react';
import { Search, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import CreatePlanModal from '../components/modals/CreatePlanModal';

export default function SubscriptionsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const PlanCard = ({ title, price, period, features, isMostPopular }) => (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 p-8 space-y-8 relative overflow-hidden">
      {isMostPopular && (
        <div className="absolute top-8 right-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Most Popular</span>
        </div>
      )}

      <div className="space-y-1">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Plan Name</p>
        <h3 className="text-3xl font-bold text-slate-800">{title}</h3>
      </div>

      <div className="p-6 bg-[#FEF9F6] rounded-2xl border border-[#FEE2E2]">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Pricing Configuration</p>
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-white border border-slate-100 rounded-xl px-4 py-3 flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-800">$</span>
            <input type="text" defaultValue={price} className="w-full bg-transparent text-2xl font-bold text-slate-800 focus:outline-none" />
          </div>
          <div className="bg-white border border-slate-100 rounded-xl px-4 py-3 min-w-[120px] text-center">
            <span className="text-sm font-bold text-slate-500">{period}</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h4 className="text-base font-bold text-slate-800">Included Services</h4>
          <span className="text-xs font-bold text-slate-400">{features.length} Features</span>
        </div>
        
        <div className="space-y-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-primary/20 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-slate-600">{feature}</span>
              </div>
              <button className="text-slate-300 hover:text-red-500 transition-colors border-none bg-transparent">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
          <div className="flex items-center justify-between p-4 bg-white border border-dashed border-slate-200 rounded-2xl">
            <input 
              type="text" 
              placeholder="Add new feature..." 
              className="bg-transparent text-sm font-medium text-slate-400 focus:outline-none w-full"
            />
            <button className="p-1 bg-slate-100 rounded-lg text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors border-none">
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button className="flex-1 py-4 bg-[#3A2A64] text-white rounded-2xl font-bold hover:bg-[#2D214D] transition-colors shadow-lg shadow-primary/20 border-none">
          Save Changes
        </button>
        <button className="flex-1 py-4 bg-slate-50 text-slate-400 rounded-2xl font-bold hover:bg-slate-100 transition-colors border-none">
          Cancel
        </button>
      </div>
    </div>
  );

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-[#4F378B] text-white rounded-t-2xl p-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Subscriptions</h2>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search User" 
              className="bg-white text-slate-800 pl-12 pr-6 py-2.5 rounded-xl text-sm w-72 focus:outline-none focus:ring-2 focus:ring-white/20 border-none"
            />
          </div>
          <button 
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-white text-[#4F378B] px-8 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors border-none"
          >
            Create New Plan
          </button>
        </div>
      </div>

      <div className="bg-white rounded-b-2xl shadow-sm border border-slate-200 border-t-0 p-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 max-w-7xl mx-auto">
          <PlanCard 
            title="Monthly Plan"
            price="30"
            period="per month"
            features={[
              'Unlimited menu scans',
              'Family allergy profiles',
              'Restaurant safety alerts'
            ]}
          />
          <PlanCard 
            title="Yearly Plan"
            price="300"
            period="per year"
            isMostPopular={true}
            features={[
              'All Monthly Plan features',
              'Priority human support',
              'Travel safety advisor'
            ]}
          />
        </div>
      </div>

      <CreatePlanModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
      />
    </div>
  );
}
