import React from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';

const columns = [
  { header: 'ID', accessor: 'id', render: (row) => `#${row.id}` },
  { header: 'Category Name', accessor: 'name' },
  { header: 'Presets Count', accessor: 'count' },
  { 
    header: 'Status', 
    render: (row) => (
      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
        row.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-600'
      }`}>
        {row.status}
      </span>
    )
  },
  {
    header: 'Actions',
    render: () => (
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-primary border-none bg-transparent">
          <Edit2 size={18} />
        </button>
        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-500 border-none bg-transparent">
          <Trash2 size={18} />
        </button>
      </div>
    )
  }
];

const mockCategories = [
  { id: 1, name: 'Bridal', count: 124, status: 'Active' },
  { id: 2, name: 'Party', count: 85, status: 'Active' },
  { id: 3, name: 'Casual', count: 210, status: 'Active' },
  { id: 4, name: 'Editorial', count: 42, status: 'Inactive' },
  { id: 5, name: 'Halloween', count: 15, status: 'Active' },
];

export default function CategoriesPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader 
        title="Categories" 
        searchPlaceholder="Search Categories"
        actionButton={
          <button className="bg-white text-primary px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors border-none">
            <Plus size={20} />
            Add Category
          </button>
        }
      />
      <DataTable 
        columns={columns} 
        data={mockCategories} 
        headerVariant="purple"
      />
    </div>
  );
}
