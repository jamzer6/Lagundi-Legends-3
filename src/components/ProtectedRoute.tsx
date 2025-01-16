import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/authContext'; // Import your authentication hook
import Appointment from './Appointment'; // Import Dashboard page

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth(); // Use the authentication hook

  return isAuthenticated ? <Appointment /> : <Navigate to="/login" />;
};

export default ProtectedRoute;