import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/authContext';
import AdminPanel from '../pages/AdminDashboard';

const ProtectedAdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, isAuthenticated, isAdmin } = useAuth();
  
  // Check authentication status
  if (!isAuthenticated || !currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Check admin status using context
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedAdminRoute;