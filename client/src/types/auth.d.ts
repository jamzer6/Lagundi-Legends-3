import { User } from 'firebase/auth';

export interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  register: (user: { name: string; email: string; role: string }, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
}