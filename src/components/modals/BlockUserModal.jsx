import React from 'react';
import Modal from '../Modal';

export default function BlockUserModal({ isOpen, onClose, onConfirm }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md p-12 text-center">
      <h2 className="text-4xl font-bold text-slate-800 mb-8 leading-tight">
        Do you want to Block this user?
      </h2>
      <div className="flex gap-4">
        <button 
          onClick={onClose}
          className="flex-1 py-4 border-2 border-primary rounded-2xl font-bold text-primary hover:bg-primary/5 transition-colors bg-transparent"
        >
          Cancel
        </button>
        <button 
          onClick={onConfirm}
          className="flex-1 py-4 bg-red-500 text-white rounded-2xl font-bold hover:bg-red-600 transition-colors border-none"
        >
          Yes, Confirm
        </button>
      </div>
    </Modal>
  );
}
