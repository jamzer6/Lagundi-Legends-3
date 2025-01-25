import { seedAdminUser } from './seedAdmin';

// Initialize admin user when the app starts
export const initializeApp = async () => {
  try {
    await seedAdminUser();
  } catch (error) {
    console.error('Error initializing app:', error);
  }
};