import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { Users, Sparkles, TrendingUp } from 'lucide-react';

const barData = [
  { name: 'Mon', users: 400 },
  { name: 'Tue', users: 300 },
  { name: 'Wed', users: 500 },
  { name: 'Thu', users: 280 },
  { name: 'Fri', users: 590 },
  { name: 'Sat', users: 320 },
  { name: 'Sun', users: 410 },
];

const pieData = [
  { name: 'Full Look', value: 400 },
  { name: 'Eyes', value: 300 },
  { name: 'Lips', value: 300 },
  { name: 'Face', value: 200 },
];

const COLORS = ['#4F378B', '#7C5CC4', '#A68FE0', '#D1C4F2'];

export default function AnalyticsPage() {
  return (
    <div className="animate-in fade-in duration-500 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">Advanced Analytics</h2>
        <div className="flex gap-4">
          <div className="flex bg-white rounded-xl p-1 border border-slate-200">
            <button className="px-4 py-1.5 rounded-lg text-sm font-medium bg-primary text-white">Daily</button>
            <button className="px-4 py-1.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50">Weekly</button>
            <button className="px-4 py-1.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50">Monthly</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-800">User Activity</h3>
            <Users size={20} className="text-primary" />
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94A3B8', fontSize: 12}}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94A3B8', fontSize: 12}}
                />
                <Tooltip 
                  cursor={{fill: '#F8FAFC'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="users" fill="#4F378B" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-800">Preset Popularity</h3>
            <Sparkles size={20} className="text-primary" />
          </div>
          <div className="h-[300px] flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3 pr-8">
              {pieData.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[i % COLORS.length]}} />
                  <span className="text-sm font-medium text-slate-600">{item.name}</span>
                  <span className="text-sm font-bold text-slate-800 ml-auto">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Retention Rate', value: '85%', color: 'text-blue-500' },
          { label: 'Conversion Rate', value: '12.4%', color: 'text-purple-500' },
          { label: 'Churn Rate', value: '2.1%', color: 'text-red-500' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
              <TrendingUp size={24} className={item.color} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">{item.label}</p>
              <h4 className="text-xl font-bold text-slate-800">{item.value}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
