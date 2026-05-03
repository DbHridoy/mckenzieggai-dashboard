import React from 'react';
import Modal from '../Modal';
import { LogOut } from 'lucide-react';

export default function LogoutModal({ isOpen, onClose, onConfirm }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md p-10 text-center">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-500">
          <LogOut size={40} />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-slate-800 mb-4">
        Logout Confirmation
      </h2>
      <p className="text-slate-500 font-medium mb-8">
        Are you sure you want to log out of your account? You will need to sign in again to access your dashboard.
      </p>

      <div className="flex gap-4">
        <button 
          onClick={onClose}
          className="flex-1 py-4 border-2 border-slate-100 rounded-2xl font-bold text-slate-400 hover:bg-slate-50 transition-colors bg-transparent"
        >
          Cancel
        </button>
        <button 
          onClick={onConfirm}
          className="flex-1 py-4 bg-red-500 text-white rounded-2xl font-bold hover:bg-red-600 transition-colors shadow-lg shadow-red-200 border-none"
        >
          Logout
        </button>
      </div>
    </Modal>
  );
}
