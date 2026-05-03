import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Mon', value: 12000 },
  { name: 'Tue', value: 18000 },
  { name: 'Wed', value: 24000 },
  { name: 'Thu', value: 31000 },
  { name: 'Fri', value: 33000 },
  { name: 'Sat', value: 35000 },
  { name: 'Sun', value: 38600 },
];

export default function UserGrowthChart() {
  return (
    <div className="glass-card p-6 h-[400px]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-800">User Growth Trends</h3>
        <div className="flex gap-2">
          {['1W', '1M', '1Y'].map((t) => (
            <button 
              key={t}
              className={`px-3 py-1 rounded-full text-xs font-semibold ${t === '1W' ? 'bg-primary-light text-primary' : 'text-slate-500 hover:bg-slate-100'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F378B" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#4F378B" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94A3B8', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94A3B8', fontSize: 12 }}
              tickFormatter={(value) => `${value/1000}k`}
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#4F378B" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
