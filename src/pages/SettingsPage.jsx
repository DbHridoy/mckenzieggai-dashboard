import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const settingsItems = [
  { label: 'Edit Profile', path: '/settings/profile' },
  { label: 'Privacy Policy', path: '/settings/privacy' },
  { label: 'Terms & Conditions', path: '/settings/terms' },
  { label: 'About Us', path: '/settings/about' },
];

export default function SettingsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-primary text-white rounded-t-2xl p-6">
        <h2 className="text-2xl font-bold">Settings</h2>
      </div>
      <div className="bg-white rounded-b-2xl shadow-sm border border-slate-200 border-t-0 p-4">
        <div className="divide-y divide-slate-100">
          {settingsItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors group first:rounded-t-xl last:rounded-b-xl no-underline"
            >
              <span className="text-xl font-medium text-slate-800">{item.label}</span>
              <ChevronRight size={24} className="text-slate-400 group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
