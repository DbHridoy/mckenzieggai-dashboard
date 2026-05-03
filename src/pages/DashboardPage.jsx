import React from 'react';
import StatCard from '../components/StatCard';
import UserGrowthChart from '../components/UserGrowthChart';
import FeatureUsage from '../components/FeatureUsage';
import RecentUsersTable from '../components/RecentUsersTable';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Section */}
      <div className="glass-card flex items-center shadow-sm">
        <StatCard label="Total Users" value="38.6K" />
        <StatCard label="Active User" value="250" />
        <StatCard label="Monthly Revenue" value="$12.6K" />
        <StatCard label="Active Subscriptions" value="21" showBorder={false} />
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <UserGrowthChart />
        </div>
        <div className="lg:col-span-1">
          <FeatureUsage />
        </div>
      </div>
      
      {/* Table Section */}
      <RecentUsersTable />
    </div>
  );
}
