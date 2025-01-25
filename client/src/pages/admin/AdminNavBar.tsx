import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';

const AdminNavbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-green-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-600">
                Admin Dashboard
              </h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/admin/dashboard"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActiveRoute('/admin/dashboard')
                    ? 'border-b-2 border-green-500 text-green-900'
                    : 'text-gray-500 hover:text-green-700'
                }`}
              >
                Overview
              </Link>
              <Link
                to="/admin/patients"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActiveRoute('/admin/patients')
                    ? 'border-b-2 border-green-500 text-green-900'
                    : 'text-gray-500 hover:text-green-700'
                }`}
              >
                Patients
              </Link>
              <Link
                to="/admin/appointments"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActiveRoute('/admin/appointments')
                    ? 'border-b-2 border-green-500 text-green-900'
                    : 'text-gray-500 hover:text-green-700'
                }`}
              >
                Appointments
              </Link>
              <Link
                to="/admin/profile"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActiveRoute('/admin/profile')
                    ? 'border-b-2 border-green-500 text-green-900'
                    : 'text-gray-500 hover:text-green-700'
                }`}
              >
                Profile
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={handleLogout}
              className="group relative inline-block"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
              <span className="relative px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:bg-red-700">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/admin/dashboard"
            className={`block pl-3 pr-4 py-2 text-base font-medium ${
              isActiveRoute('/admin/dashboard')
                ? 'bg-green-50 border-l-4 border-green-500 text-green-700'
                : 'text-gray-500'
            }`}
          >
            Overview
          </Link>
          <Link
            to="/admin/patients"
            className={`block pl-3 pr-4 py-2 text-base font-medium ${
              isActiveRoute('/admin/patients')
                ? 'bg-green-50 border-l-4 border-green-500 text-green-700'
                : 'text-gray-500'
            }`}
          >
            Patients
          </Link>
          <Link
            to="/admin/appointments"
            className={`block pl-3 pr-4 py-2 text-base font-medium ${
              isActiveRoute('/admin/appointments')
                ? 'bg-green-50 border-l-4 border-green-500 text-green-700'
                : 'text-gray-500'
            }`}
          >
            Appointments
          </Link>
          <Link
            to="/admin/profile"
            className={`block pl-3 pr-4 py-2 text-base font-medium ${
              isActiveRoute('/admin/profile')
                ? 'bg-green-50 border-l-4 border-green-500 text-green-700'
                : 'text-gray-500'
            }`}
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;