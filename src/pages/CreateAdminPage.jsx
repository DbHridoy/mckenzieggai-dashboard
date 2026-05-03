import React from 'react';
import { Eye, EyeOff, Upload } from 'lucide-react';

export default function CreateAdminPage() {
  const [showPass, setShowPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-primary text-white rounded-t-2xl p-6">
        <h2 className="text-2xl font-bold">Create Admin</h2>
      </div>
      
      <div className="bg-white rounded-b-2xl shadow-sm border border-slate-200 border-t-0 p-8">
        <form className="max-w-4xl space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Name</label>
            <input 
              type="text" 
              placeholder="jhon doe"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input 
              type="email" 
              placeholder="abc@gmail.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">New Password</label>
              <div className="relative">
                <input 
                  type={showPass ? "text" : "password"} 
                  placeholder="*********"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button 
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Confirm New Password</label>
              <div className="relative">
                <input 
                  type={showConfirmPass ? "text" : "password"} 
                  placeholder="*********"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button 
                  type="button"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showConfirmPass ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Profile Image</label>
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-12 flex flex-col items-center justify-center text-slate-400 hover:border-primary/50 transition-colors cursor-pointer">
              <Upload size={32} className="mb-2" />
              <span className="text-sm">Upload Image</span>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button className="bg-primary text-white px-12 py-3 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors w-full max-w-md">
              Create Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
