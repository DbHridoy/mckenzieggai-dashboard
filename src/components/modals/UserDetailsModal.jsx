import React from 'react';
import Modal from '../Modal';

export default function UserDetailsModal({ isOpen, onClose, user, onBlock }) {
  if (!user) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-xl p-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-primary mb-2">User Details</h2>
        <p className="text-slate-400">See all details about {user.name}</p>
      </div>

      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-6 self-start mb-10">
          <img 
            src={user.avatar || `https://i.pravatar.cc/150?u=${user.id}`} 
            alt={user.name} 
            className="w-24 h-24 rounded-2xl object-cover shadow-lg"
          />
          <h3 className="text-4xl font-bold text-primary">{user.name}</h3>
        </div>

        <div className="w-full space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-slate-800">Name</span>
            <span className="text-2xl text-slate-600 font-medium">{user.name}.</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-slate-800">Email</span>
            <span className="text-2xl text-slate-600 font-medium">{user.email || 'user@email.com'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-slate-800">Phone</span>
            <span className="text-2xl text-slate-600 font-medium">{user.phone || '+12313412'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-slate-800">Joining Date</span>
            <span className="text-2xl text-slate-600 font-medium">{user.joiningDate || '02-24-2024'}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button 
          onClick={onClose}
          className="flex-1 py-4 border-2 border-primary rounded-2xl font-bold text-primary hover:bg-primary/5 transition-colors bg-transparent"
        >
          Cancel
        </button>
        <button 
          onClick={() => onBlock(user)}
          className="flex-1 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-colors border-none"
        >
          Block
        </button>
      </div>
    </Modal>
  );
}
