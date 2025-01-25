import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/authContext'; // Import your authentication hook
 // Import Appointment page

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the authentication hook

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: window.location.pathname }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;