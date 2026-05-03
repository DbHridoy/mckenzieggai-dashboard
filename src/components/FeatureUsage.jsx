import React from 'react';

const features = [
  { name: 'AR Try-On', percentage: 84 },
  { name: 'Custom Palettes', percentage: 62 },
  { name: 'Guided Tutorials', percentage: 45 },
  { name: 'Social Sharing', percentage: 28 },
  { name: 'Subscription Mgmt', percentage: 15 },
];

export default function FeatureUsage() {
  return (
    <div className="glass-card p-6 h-[400px]">
      <h3 className="text-lg font-semibold text-slate-800 mb-6">Feature Usage</h3>
      
      <div className="space-y-6">
        {features.map((feature) => (
          <div key={feature.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-600">{feature.name}</span>
              <span className="text-xs font-semibold text-slate-400">{feature.percentage}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-1000"
                style={{ width: `${feature.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
