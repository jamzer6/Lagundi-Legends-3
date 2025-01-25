import React, { createContext, useState, useContext, useEffect } from 'react';
import { User } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { registerUser, loginUser, logoutUser } from '../firebase/auth';

interface AuthContextType {
  currentUser: any;
  isAuthenticated: boolean;
  register: (user: { name: string; email: string; role: string }, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthenticated(!!user);
      
      // Check if user is admin based on email domain
      if (user?.email?.endsWith('@silandental.com')) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
    return unsubscribe;
  }, []);

  const register = (user: { name: string; email: string; role: string }, password: string) => {
    return registerUser(user, password);
  };

  const value = {
    currentUser,
    isAdmin,
    // ... other methods
  };

  const login = (email: string, password: string) => {
    return loginUser(email, password);
  };

  const logout = () => {
    return logoutUser();
  };

  return (
    <AuthContext.Provider 
      value={{ 
        currentUser, 
        isAuthenticated, 
        register, 
        login, 
        logout, 
        isAdmin // Make sure this is included in the context value
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};