import React from 'react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';

const columns = [
  { header: 'S.ID', accessor: 'id' },
  { 
    header: 'Reported By', 
    render: (row) => (
      <div className="flex items-center gap-3">
        <img src={row.reporterAvatar} alt="" className="w-8 h-8 rounded-full" />
        <span className="font-medium text-slate-800">{row.reporterName}</span>
      </div>
    )
  },
  { header: 'Type', accessor: 'type' },
  { header: 'Reason', accessor: 'reason', render: (row) => <span className="truncate max-w-xs block">{row.reason}</span> },
  { header: 'Date', accessor: 'date' },
  { 
    header: 'Status', 
    render: (row) => (
      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
        row.status === 'Resolved' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
      }`}>
        {row.status}
      </span>
    )
  },
  { 
    header: 'Action', 
    render: () => (
      <button className="text-primary font-semibold hover:underline">
        Review
      </button>
    )
  },
];

const mockData = [
  { id: '01', reporterName: 'Jane Cooper', reporterAvatar: 'https://i.pravatar.cc/150?u=10', type: 'Profile', reason: 'Inappropriate content in bio', date: 'Oct 24, 2024', status: 'Pending' },
  { id: '02', reporterName: 'Wade Warren', reporterAvatar: 'https://i.pravatar.cc/150?u=11', type: 'Preset', reason: 'Misleading instructions', date: 'Oct 23, 2024', status: 'Resolved' },
  { id: '03', reporterName: 'Esther Howard', reporterAvatar: 'https://i.pravatar.cc/150?u=12', type: 'Comment', reason: 'Spamming', date: 'Oct 22, 2024', status: 'Pending' },
];

export default function ReportPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader 
        title="Reports" 
        searchPlaceholder="Search reports"
      />
      <DataTable 
        columns={columns} 
        data={mockData} 
        pagination={{ from: 1, to: 3, total: 15 }}
      />
    </div>
  );
}
