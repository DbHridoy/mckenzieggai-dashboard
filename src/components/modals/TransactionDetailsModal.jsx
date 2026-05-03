import React from 'react';
import Modal from '../Modal';

export default function TransactionDetailsModal({ isOpen, onClose, transaction }) {
  if (!transaction) return null;

  const detailRows = [
    { label: 'Transaction ID', value: transaction.trxId || '#12345678' },
    { label: 'Plans', value: transaction.plan || 'Monthly Subscription' },
    { label: 'Date', value: transaction.date || '02-24-2024' },
    { label: 'Name', value: transaction.name || 'John Doe.' },
    { label: 'A/C number', value: '**** **** **** *545' },
    { label: 'Email', value: transaction.email || 'john@email.com' },
    { label: 'Transaction amount', value: transaction.price || '$75' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-xl p-10">
      <h2 className="text-4xl font-bold text-[#3A2A64] text-center mb-10">
        Transaction Details
      </h2>

      <div className="space-y-6 mb-10">
        {detailRows.map((row, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <span className="text-xl font-bold text-slate-800">{row.label}</span>
            <span className="text-xl text-slate-500 font-medium">{row.value}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button 
          onClick={onClose}
          className="flex-1 py-4 border-2 border-[#3A2A64] rounded-2xl font-bold text-[#3A2A64] hover:bg-[#3A2A64]/5 transition-colors bg-transparent"
        >
          Cancel
        </button>
        <button 
          className="flex-1 py-4 bg-[#3A2A64] text-white rounded-2xl font-bold hover:bg-[#2D214D] transition-colors border-none"
        >
          Download Invoice
        </button>
      </div>
    </Modal>
  );
}
