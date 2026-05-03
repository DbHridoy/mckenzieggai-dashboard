import React from 'react';
import { Eye, Ban } from 'lucide-react';

const users = [
  { id: '01', name: 'Robert Fox', email: 'fox@email', phone: '+123124', type: 'Client', date: '02-24-2024' },
  { id: '01', name: 'Robert Fox', email: 'fox@email', phone: '+123124', type: 'Client', date: '02-24-2024' },
  { id: '01', name: 'Robert Fox', email: 'fox@email', phone: '+123124', type: 'Client', date: '02-24-2024' },
  { id: '01', name: 'Robert Fox', email: 'fox@email', phone: '+123124', type: 'Client', date: '02-24-2024' },
  { id: '01', name: 'Robert Fox', email: 'fox@email', phone: '+123124', type: 'Client', date: '02-24-2024' },
  { id: '01', name: 'Robert Fox', email: 'fox@email', phone: '+123124', type: 'Client', date: '02-24-2024' },
];

export default function RecentUsersTable() {
  return (
    <div className="glass-card overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-800">Recent Users</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-primary text-white text-sm uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">S.ID</th>
              <th className="px-6 py-4 font-semibold">Full Name</th>
              <th className="px-6 py-4 font-semibold">Email</th>
              <th className="px-6 py-4 font-semibold">Phone No</th>
              <th className="px-6 py-4 font-semibold">User Type</th>
              <th className="px-6 py-4 font-semibold">Joined Date</th>
              <th className="px-6 py-4 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((user, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm text-slate-600">{user.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${user.name}`} alt={user.name} />
                    </div>
                    <span className="text-sm font-medium text-slate-800">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{user.email}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{user.phone}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{user.type}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{user.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <Ban size={18} />
                    </button>
                    <button className="p-2 text-primary hover:bg-primary-light rounded-lg transition-colors">
                      <Eye size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
