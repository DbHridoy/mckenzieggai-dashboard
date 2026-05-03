import React from 'react';
import Modal from '../Modal';
import { Plus } from 'lucide-react';

export default function CreatePlanModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-3xl p-10 overflow-y-auto max-h-[90vh]">
      <div className="space-y-10">
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wider">Plan Information</h3>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-lg font-bold text-slate-700">Plan Name</label>
              <input 
                type="text" 
                placeholder="e.g. Professional Plan"
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none bg-slate-50/30"
              />
            </div>
            <div className="space-y-3">
              <label className="text-lg font-bold text-slate-700">Plan Type</label>
              <select className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none bg-slate-50/30">
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wider">Pricing Configuration</h3>
          </div>
          <div className="space-y-3">
            <label className="text-lg font-bold text-slate-700">Price</label>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
              <input 
                type="text" 
                placeholder="0.00"
                className="w-full px-12 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none bg-slate-50/30"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wider">Free Trial</h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-500 font-medium">Enable Free Trial</span>
              <div className="w-12 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full translate-x-6" />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-lg font-bold text-slate-700">Free Trial Duration</label>
            <div className="flex gap-4">
              {['3 Days', '7 Days', '14 Days'].map((days) => (
                <button 
                  key={days}
                  className={`flex-1 py-4 rounded-2xl font-bold border-2 transition-all ${
                    days === '3 Days' ? 'bg-red-50 border-primary text-primary' : 'bg-white border-slate-100 text-slate-400 hover:border-primary/50 hover:text-primary/50'
                  }`}
                >
                  {days}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wider">Plan Features</h3>
            </div>
            <span className="text-slate-500 font-bold">2 Features Added</span>
          </div>
          <div className="flex gap-4 mb-6">
            <input 
              type="text" 
              placeholder="Add new feature..."
              className="flex-1 px-6 py-4 rounded-2xl border border-slate-200 outline-none"
            />
            <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-colors border-none">
              Add Feature
            </button>
          </div>
          <div className="space-y-3">
            {['All Monthly Plan features', 'Priority human support', 'Travel safety advisor'].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/30">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-lg font-medium text-slate-600">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="flex gap-4 pt-6">
          <button 
            onClick={onClose}
            className="flex-1 py-4 border-2 border-primary rounded-full font-bold text-primary hover:bg-slate-50 transition-colors bg-transparent"
          >
            Cancel
          </button>
          <button 
            className="flex-1 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors border-none"
          >
            Create Plan
          </button>
        </div>
      </div>
    </Modal>
  );
}
