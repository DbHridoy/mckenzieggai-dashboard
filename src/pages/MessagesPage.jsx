import React from 'react';
import { Send, Image as ImageIcon, Search } from 'lucide-react';

const users = [
  { id: 1, name: 'Ellie smith', role: 'Handyman, Phoenix', time: '11:04', avatar: 'https://i.pravatar.cc/150?u=1', active: true },
  { id: 2, name: 'Ellie smith', role: 'Handyman, Phoenix', time: '11:04', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Ellie smith', role: 'Handyman, Phoenix', time: '11:04', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Ellie smith', role: 'Handyman, Phoenix', time: '11:04', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'Ellie smith', role: 'Handyman, Phoenix', time: '11:04', avatar: 'https://i.pravatar.cc/150?u=5' },
];

export default function MessagesPage() {
  return (
    <div className="animate-in fade-in duration-500 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex h-[calc(100vh-180px)]">
      {/* Sidebar */}
      <div className="w-80 border-r border-slate-100 flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search chats..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-xl text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {users.map((user) => (
            <div 
              key={user.id} 
              className={`p-4 flex items-center gap-3 cursor-pointer hover:bg-slate-50 transition-colors ${user.active ? 'bg-primary-light border-r-2 border-primary' : ''}`}
            >
              <img src={user.avatar} alt="" className="w-12 h-12 rounded-full" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <h4 className="font-bold text-slate-800 truncate">{user.name}</h4>
                  <span className="text-[10px] text-slate-400 font-medium">{user.time}</span>
                </div>
                <p className="text-xs text-slate-500 truncate">{user.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-slate-50/30">
        <div className="p-4 border-b border-slate-100 bg-white flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <h3 className="font-bold text-slate-800">Alexandra Broke</h3>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Incoming */}
          <div className="flex gap-3 max-w-[80%]">
            <img src="https://i.pravatar.cc/150?u=9" alt="" className="w-8 h-8 rounded-full self-end" />
            <div>
              <span className="text-[10px] text-slate-400 font-medium ml-1">10:16</span>
              <div className="bg-primary text-white p-4 rounded-2xl rounded-bl-none shadow-sm">
                <p className="text-sm leading-relaxed">
                  Vel et commodo et scelerisque aliquam. Sed libero, non praesent felis, sem eget venenatis neque. Massa tincidunt tempor a nisl eu mauris lectus.
                </p>
              </div>
            </div>
          </div>

          {/* Incoming Image */}
          <div className="flex gap-3 max-w-[80%] ml-11">
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=250&fit=crop" 
                alt="" 
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>

          {/* Outgoing */}
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] text-slate-400 font-medium mr-1">12:37</span>
            <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-br-none shadow-sm max-w-[80%]">
              <p className="text-sm text-slate-700 leading-relaxed">
                Donec lobortis mattis pellentesque nisl nibh eu.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border-t border-slate-100">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-200">
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <ImageIcon size={20} />
            </button>
            <input 
              type="text" 
              placeholder="Type a message..."
              className="flex-1 bg-transparent border-none focus:outline-none text-sm px-2"
            />
            <button className="p-2 bg-primary text-white rounded-xl shadow-md hover:bg-primary/90 transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
