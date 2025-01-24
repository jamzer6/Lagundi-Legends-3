import { User } from 'firebase/auth';

export interface AppUser extends User {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  uid: string;
}

export interface AuthState {
  currentUser: AppUser | null;
  isAuthenticated: boolean;
}