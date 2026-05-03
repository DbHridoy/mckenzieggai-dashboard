import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';
import { AuthProvider, useAuth } from './context/AuthContext';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import VerifyOTPPage from './pages/auth/VerifyOTPPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';

// Dashboard Pages
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import MakeupPresetsPage from './pages/MakeupPresetsPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import SettingsPage from './pages/SettingsPage';
import PlaceholderPage from './pages/PlaceholderPage';
import GuidedStepsListPage from './pages/GuidedStepsListPage';
import CreateGuidedStepPage from './pages/CreateGuidedStepPage';
import CreateAdminPage from './pages/CreateAdminPage';
import EarningsPage from './pages/EarningsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import BlockedUsersPage from './pages/BlockedUsersPage';
import NotificationsPage from './pages/NotificationsPage';
import MessagesPage from './pages/MessagesPage';
import ReportPage from './pages/ReportPage';
import BulkEmailPage from './pages/BulkEmailPage';
import CategoriesPage from './pages/CategoriesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import ProfilePage from './pages/ProfilePage';
import CreatePresetPage from './pages/CreatePresetPage';

const DashboardRoutes = () => {
  const { user, loading } = useAuth();
  
  if (loading) return <div className="h-screen w-screen flex items-center justify-center font-bold text-primary">Loading...</div>;
  if (!user) return <Navigate to="/auth/login" replace />;

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

const AuthRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (user) return <Navigate to="/dashboard" replace />;

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route element={<AuthRoutes />}>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/auth/verify-otp" element={<VerifyOTPPage />} />
            <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
          </Route>

          {/* Dashboard Routes */}
          <Route element={<DashboardRoutes />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/blocked" element={<BlockedUsersPage />} />
            <Route path="/presets" element={<MakeupPresetsPage />} />
            <Route path="/presets/create" element={<CreatePresetPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/settings/profile" element={<ProfilePage />} />
            <Route path="/settings/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/settings/terms" element={<TermsConditionsPage />} />
            <Route path="/settings/about" element={<PrivacyPolicyPage />} />
            <Route path="/earnings" element={<EarningsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/steps" element={<GuidedStepsListPage />} />
            <Route path="/steps/create" element={<CreateGuidedStepPage />} />
            <Route path="/admin" element={<CreateAdminPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/email" element={<BulkEmailPage />} />
          </Route>

          {/* Redirect unknown to dashboard (which will then redirect to login if not auth) */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
