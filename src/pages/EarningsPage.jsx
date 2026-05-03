import React, { useState } from 'react';
import { Download, Eye } from 'lucide-react';
import DataTable from '../components/DataTable';
import TransactionDetailsModal from '../components/modals/TransactionDetailsModal';

export default function EarningsPage() {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const columns = [
    { header: 'S.ID', accessor: 'id' },
    { 
      header: 'Full Name', 
      render: (row) => (
        <div className="flex items-center gap-3">
          <img src={row.avatar} alt="" className="w-8 h-8 rounded-full object-cover border border-slate-100" />
          <span className="font-medium text-slate-800">{row.name}</span>
        </div>
      )
    },
    { header: 'Trx ID', accessor: 'trxId' },
    { header: 'Plans', accessor: 'plan' },
    { header: 'Price', accessor: 'price' },
    { header: 'Date', accessor: 'date' },
    {
      header: 'Action',
      render: (row) => (
        <div className="flex items-center gap-3">
          <button className="p-1.5 text-slate-400 hover:text-primary transition-colors border-none bg-transparent" title="Download">
            <Download size={18} />
          </button>
          <button 
            onClick={() => {
              setSelectedTransaction(row);
              setIsDetailsOpen(true);
            }}
            className="p-1.5 text-slate-400 hover:text-primary transition-colors border-none bg-transparent" 
            title="View Details"
          >
            <Eye size={18} />
          </button>
        </div>
      )
    }
  ];

  const mockData = Array(9).fill(null).map((_, i) => ({
    id: '01',
    name: 'Robert Fox',
    trxId: '#12345678',
    plan: i < 3 ? 'Monthly' : i < 6 ? '6 Months' : 'Yearly',
    price: i < 3 ? '$75' : i < 6 ? '$405' : '$705',
    date: '02-24-2024',
    email: 'fox@email.com',
    avatar: `https://i.pravatar.cc/150?u=${i}`
  }));

  return (
    <div className="animate-in fade-in duration-500 space-y-8">
      {/* Stats Cards */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 grid grid-cols-3 divide-x divide-slate-100">
        <div className="text-center px-4">
          <h3 className="text-4xl font-bold text-slate-800 mb-2">1.2k</h3>
          <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">Today</p>
        </div>
        <div className="text-center px-4">
          <h3 className="text-4xl font-bold text-slate-800 mb-2">18.6K</h3>
          <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">This Month</p>
        </div>
        <div className="text-center px-4">
          <h3 className="text-4xl font-bold text-slate-800 mb-2">4.9M</h3>
          <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">Total Revenue</p>
        </div>
      </div>

      {/* Transactions Table */}
      <DataTable 
        columns={columns} 
        data={mockData} 
        pagination={{ from: 1, to: 8, total: 250 }}
        headerVariant="purple"
      />

      <TransactionDetailsModal 
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)} 
        transaction={selectedTransaction}
      />
    </div>
  );
}
