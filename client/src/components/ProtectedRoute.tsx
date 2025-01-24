import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/authContext'; // Import your authentication hook
import Appointment from '../pages/appointment'; // Import Appointment page

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth(); // Use the authentication hook

  return isAuthenticated ? <Appointment /> : <Navigate to="../pagelogin" />;
};

export default ProtectedRoute;