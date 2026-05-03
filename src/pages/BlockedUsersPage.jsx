import React from 'react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';

const columns = [
  { header: 'S.ID', accessor: 'id' },
  { 
    header: 'User', 
    render: (row) => (
      <div className="flex items-center gap-3">
        <img src={row.avatar} alt="" className="w-8 h-8 rounded-full" />
        <span className="font-medium text-slate-800">{row.name}</span>
      </div>
    )
  },
  { header: 'Email', accessor: 'email' },
  { header: 'Gender', accessor: 'gender' },
  { header: 'Location', accessor: 'location' },
  { 
    header: 'Status', 
    render: (row) => (
      <span className="px-2 py-1 rounded-lg text-xs font-medium bg-red-100 text-red-600">
        {row.status}
      </span>
    )
  },
  { 
    header: 'Action', 
    render: () => (
      <button className="text-primary font-semibold hover:underline">
        Unblock
      </button>
    )
  },
];

const mockData = Array(4).fill(null).map((_, i) => ({
  id: `0${i + 1}`,
  name: 'Robert Fox',
  email: 'fox@email',
  gender: 'Male',
  location: 'USA',
  status: 'Blocked',
  avatar: `https://i.pravatar.cc/150?u=blocked-${i}`
}));

export default function BlockedUsersPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader 
        title="Blocked Users" 
        searchPlaceholder="Search Blocked User"
      />
      <DataTable 
        columns={columns} 
        data={mockData} 
        pagination={{ from: 1, to: 4, total: 12 }}
      />
    </div>
  );
}
