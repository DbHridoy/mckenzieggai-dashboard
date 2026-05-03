import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import { Edit2, Trash2 } from 'lucide-react';

const columns = [
  { header: 'S.ID', accessor: 'id' },
  { 
    header: 'Presets Name', 
    render: (row) => (
      <div className="flex items-center gap-3">
        <img src={row.avatar} alt="" className="w-8 h-8 rounded-full" />
        <span className="font-medium text-slate-800">{row.name}</span>
      </div>
    )
  },
  { 
    header: 'Presets Type', 
    render: (row) => (
      <span className={`px-4 py-1 rounded-lg text-xs font-medium ${
        row.type === 'Full Look' ? 'bg-slate-100 text-slate-600' : 
        row.type === 'Lips' ? 'bg-[#8B4513] text-white' : 'bg-slate-200 text-slate-600'
      }`}>
        {row.type}
      </span>
    )
  },
  { 
    header: 'Status', 
    render: (row) => (
      <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${row.active ? 'bg-primary' : 'bg-slate-200'}`}>
        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${row.active ? 'translate-x-6' : 'translate-x-0'}`} />
      </div>
    )
  },
  { header: 'Created Date', accessor: 'createdDate' },
  { 
    header: 'Action', 
    render: () => (
      <div className="flex gap-2">
        <button className="p-2 text-slate-400 hover:text-primary transition-colors border-none bg-transparent">
          <Edit2 size={18} />
        </button>
        <button className="p-2 text-slate-400 hover:text-red-500 transition-colors border-none bg-transparent">
          <Trash2 size={18} />
        </button>
      </div>
    )
  },
];

const mockData = [
  { id: '01', name: 'Robert Fox', type: 'Full Look', active: true, createdDate: '02-24-2024', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: '02', name: 'Robert Fox', type: 'Lips', active: false, createdDate: '02-24-2024', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: '03', name: 'Robert Fox', type: 'Eyes', active: true, createdDate: '02-24-2024', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: '04', name: 'Robert Fox', type: 'Full Look', active: true, createdDate: '02-24-2024', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: '05', name: 'Robert Fox', type: 'Lips', active: false, createdDate: '02-24-2024', avatar: 'https://i.pravatar.cc/150?u=5' },
  { id: '06', name: 'Robert Fox', type: 'Eyes', active: false, createdDate: '02-24-2024', avatar: 'https://i.pravatar.cc/150?u=6' },
];

export default function MakeupPresetsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader 
        title="Makeup Presets" 
        actionButton={
          <Link to="/presets/create">
            <button className="bg-white text-primary px-4 py-2 rounded-xl font-semibold text-sm hover:bg-slate-100 transition-colors flex items-center gap-2 border-none">
              <span className="text-lg">+</span> Create Preset
            </button>
          </Link>
        }
      />
      <DataTable 
        columns={columns} 
        data={mockData} 
        pagination={{ from: 1, to: 8, total: 250 }}
        headerVariant="purple"
      />
    </div>
  );
}
