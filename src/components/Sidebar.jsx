import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Sparkles, 
  DollarSign, 
  CreditCard, 
  BarChart3, 
  BookOpen, 
  UserPlus, 
  Flag, 
  Mail, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useAuth } from '../context/AuthContext';
import LogoutModal from './modals/LogoutModal';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Users, label: 'Users', path: '/users' },
  { icon: Sparkles, label: 'Makeup Presets', path: '/presets' },
  { icon: DollarSign, label: 'Earnings', path: '/earnings' },
  { icon: CreditCard, label: 'Subscriptions', path: '/subscriptions' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: BookOpen, label: 'Guided Steps', path: '/steps' },
  { icon: UserPlus, label: 'Create Admin', path: '/admin' },
  { icon: Flag, label: 'Report', path: '/report' },
  { icon: Mail, label: 'Bulk Email', path: '/email' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogoutConfirm = () => {
    logout();
    navigate('/auth/login');
    setIsLogoutModalOpen(false);
  };

  return (
    <>
      <div className="w-64 h-screen bg-white border-r border-slate-200 flex flex-col fixed left-0 top-0 overflow-y-auto">
        <div className="p-8 flex flex-col items-center">
          <img src="/logo.svg" alt="GlamGuide AI" className="w-16 h-16 mb-2" />
          <h1 className="text-xl font-bold text-primary">GlamGuide AI</h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/');
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "sidebar-item rounded-xl no-underline",
                  isActive && "active"
                )}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 mt-auto">
          <button 
            onClick={() => setIsLogoutModalOpen(true)}
            className="w-full sidebar-item rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600 border-none bg-transparent"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      <LogoutModal 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        onConfirm={handleLogoutConfirm} 
      />
    </>
  );
}
