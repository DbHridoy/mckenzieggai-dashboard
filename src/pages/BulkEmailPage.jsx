import React from 'react';
import { Send, Users, Filter } from 'lucide-react';

export default function BulkEmailPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-primary text-white rounded-t-2xl p-6">
        <h2 className="text-2xl font-bold">Bulk Email Campaign</h2>
      </div>
      
      <div className="bg-white rounded-b-2xl shadow-sm border border-slate-200 border-t-0 p-8">
        <div className="max-w-4xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Target Audience</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none bg-white">
                  <option>All Users (2,450)</option>
                  <option>Active Subscribers (850)</option>
                  <option>Free Users (1,600)</option>
                  <option>New Users - Last 30 Days (120)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email Template</label>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none bg-white">
                  <option>None (Custom Message)</option>
                  <option>Welcome Series</option>
                  <option>Subscription Offer</option>
                  <option>New Feature Announcement</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Subject Line</label>
            <input 
              type="text" 
              placeholder="e.g. Exciting New Makeup Presets Just Arrived!"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Message Content</label>
            <textarea 
              rows={12}
              placeholder="Write your email content here..."
              className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-slate-100">
            <button className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors">
              Save as Draft
            </button>
            <button className="bg-primary text-white px-10 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center gap-2">
              <Send size={18} />
              Send Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
