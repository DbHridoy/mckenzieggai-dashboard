import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F9F9FB]">
      <Sidebar />
      <main className="flex-1 ml-64 pb-12">
        <Header />
        <div className="px-8 mt-8">
          {children}
        </div>
      </main>
    </div>
  );
}
