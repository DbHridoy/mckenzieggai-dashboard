import React from 'react';
import { Bell, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const notifications = [
  { id: 1, title: 'Profile report!', time: 'Fri, 12:30pm' },
  { id: 2, title: 'A new Verification request!', time: 'Fri, 12:30pm' },
  { id: 3, title: 'Profile report!', time: 'Fri, 12:30pm' },
  { id: 4, title: 'Profile report!', time: 'Fri, 12:30pm' },
  { id: 5, title: 'A new user join in your app.', time: 'Fri, 12:30pm' },
  { id: 6, title: 'A new user join in your app.', time: 'Fri, 12:30pm' },
  { id: 7, title: 'A new user join in your app.', time: 'Fri, 12:30pm' },
  { id: 8, title: 'A new user join in your app.', time: 'Fri, 12:30pm' },
];

export default function NotificationsPage() {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-primary text-white rounded-t-2xl p-6 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="hover:bg-white/10 p-1 rounded-lg">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-2xl font-bold">All Notifications</h2>
      </div>

      <div className="bg-white rounded-b-2xl shadow-sm border border-slate-200 border-t-0 p-4">
        <div className="space-y-1">
          {notifications.map((notif) => (
            <div key={notif.id} className="flex items-center gap-6 p-6 hover:bg-slate-50 transition-colors rounded-xl group cursor-pointer">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <Bell size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-slate-800">{notif.title}</h4>
                <p className="text-sm text-slate-500">{notif.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
