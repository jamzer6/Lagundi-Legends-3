import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import useAdminAuth from '../hooks/useAdminAuth';
import AdminDashboard from '../pages/admin/Dashboard';
import PatientManagement from '../pages/admin/PatientManagement';
import AppointmentManagement from '../pages/admin/AppointmentManagement';
import AdminProfile from '../pages/admin/AdminProfile';
import AdminNavbar from '../pages/admin/AdminNavBar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAdmin, loading } = useAdminAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <AdminNavbar />
      <div className="pt-16">
        {children}
      </div>
    </>
  );
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        }
      />
      <Route
        path="/patients"
        element={
          <AdminLayout>
            <PatientManagement />
          </AdminLayout>
        }
      />
      <Route
        path="/appointments"
        element={
          <AdminLayout>
            <AppointmentManagement />
          </AdminLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <AdminLayout>
            <AdminProfile />
          </AdminLayout>
        }
      />
    </Routes>
  );
};

export default AdminRoutes;