import React from 'react';
import { Bell, MessageSquare, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="h-20 bg-white border border-slate-100 rounded-2xl flex items-center justify-between px-8 shadow-sm mx-8 mt-6">
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-2 hover:bg-slate-100 rounded-lg">
          <Menu size={20} />
        </button>
        <div>
          <h2 className="text-xl font-semibold text-slate-800">Welcome, James</h2>
          <p className="text-sm text-slate-500">Have a nice day!</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Link to="/messages">
          <button className="p-3 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-600 transition-colors">
            <MessageSquare size={20} />
          </button>
        </Link>
        
        <Link to="/notifications">
          <button className="p-3 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-600 transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </Link>
        
        <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary ml-2 cursor-pointer border border-primary/10 overflow-hidden">
          <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}
