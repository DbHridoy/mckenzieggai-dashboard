import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Slash } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import UserDetailsModal from '../components/modals/UserDetailsModal';
import BlockUserModal from '../components/modals/BlockUserModal';

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isBlockOpen, setIsBlockOpen] = useState(false);

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
    { header: 'Email', accessor: 'email' },
    { header: 'Phone No', accessor: 'phone' },
    { header: 'Joined Date', accessor: 'joinDate' },
    {
      header: 'Action',
      render: (row) => (
        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              setSelectedUser(row);
              setIsBlockOpen(true);
            }}
            className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors border-none bg-transparent"
            title="Block User"
          >
            <Slash size={18} />
          </button>
          <button 
            onClick={() => {
              setSelectedUser(row);
              setIsDetailsOpen(true);
            }}
            className="p-1.5 text-primary hover:bg-primary/5 rounded-lg transition-colors border-none bg-transparent"
            title="View Details"
          >
            <Eye size={18} />
          </button>
        </div>
      )
    }
  ];

  const mockData = Array(8).fill(null).map((_, i) => ({
    id: `0${i + 1}`,
    name: 'Robert Fox',
    email: 'fox@email',
    phone: '+123124',
    joinDate: '02-24-2024',
    avatar: `https://i.pravatar.cc/150?u=${i}`,
    joiningDate: '02-24-2024'
  }));

  const handleBlockClickFromDetails = (user) => {
    setIsDetailsOpen(false);
    setIsBlockOpen(true);
  };

  const handleConfirmBlock = () => {
    console.log('Blocking user:', selectedUser);
    setIsBlockOpen(false);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader 
        title="User List" 
        searchPlaceholder="Search User"
        actionButton={
          <Link to="/users/blocked">
            <button className="bg-white text-primary px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors border-none">
              Blocked Users
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

      <UserDetailsModal 
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)} 
        user={selectedUser}
        onBlock={handleBlockClickFromDetails}
      />

      <BlockUserModal 
        isOpen={isBlockOpen} 
        onClose={() => setIsBlockOpen(false)} 
        onConfirm={handleConfirmBlock}
      />
    </div>
  );
}
