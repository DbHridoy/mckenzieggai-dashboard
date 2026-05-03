import React, { useState } from 'react';
import { Camera, Eye, EyeOff } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('edit'); // 'edit' or 'password'
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-primary text-white rounded-t-2xl p-6">
        <h2 className="text-2xl font-bold">Profile</h2>
      </div>

      <div className="bg-white rounded-b-2xl shadow-sm border border-slate-200 border-t-0 p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md text-primary hover:bg-slate-50 transition-colors border-none group-hover:scale-110">
              <Camera size={18} />
            </button>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mt-4">Mr. Admin</h3>
        </div>

        <div className="flex items-center justify-center gap-8 border-b border-slate-100 mb-8">
          <button 
            onClick={() => setActiveTab('edit')}
            className={`pb-4 px-4 font-semibold transition-colors border-none bg-transparent ${
              activeTab === 'edit' 
                ? 'text-primary border-b-2 border-primary !border-solid' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Edit Profile
          </button>
          <button 
            onClick={() => setActiveTab('password')}
            className={`pb-4 px-4 font-semibold transition-colors border-none bg-transparent ${
              activeTab === 'password' 
                ? 'text-primary border-b-2 border-primary !border-solid' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Change Password
          </button>
        </div>

        <div className="max-w-2xl mx-auto">
          {activeTab === 'edit' ? (
            <form className="space-y-6 animate-in slide-in-from-left-4 duration-300">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">User Name</label>
                <input 
                  type="text" 
                  defaultValue="userdemo"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input 
                  type="email" 
                  defaultValue="email@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Contact No</label>
                <input 
                  type="text" 
                  defaultValue="+1 222 333 4444"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors mt-4 border-none">
                Update Profile
              </button>
            </form>
          ) : (
            <form className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Current Password</label>
                <div className="relative">
                  <input 
                    type={showCurrentPass ? "text" : "password"} 
                    placeholder="********"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowCurrentPass(!showCurrentPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 border-none bg-transparent"
                  >
                    {showCurrentPass ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">New Password</label>
                <div className="relative">
                  <input 
                    type={showNewPass ? "text" : "password"} 
                    placeholder="********"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowNewPass(!showNewPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 border-none bg-transparent"
                  >
                    {showNewPass ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Confirm Password</label>
                <div className="relative">
                  <input 
                    type={showConfirmPass ? "text" : "password"} 
                    placeholder="********"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 border-none bg-transparent"
                  >
                    {showConfirmPass ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors mt-4 border-none">
                Update Password
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
