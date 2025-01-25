import { auth } from './firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase.config';

export const seedAdminUser = async () => {
  try {
    // Create admin user with specified credentials
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      'admin@silandental.com',
      'adminsilan2025'
    );

    // Add admin user data to Firestore
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      name: 'Admin User',
      email: 'admin@silandental.com',
      role: 'admin'
    });

    console.log('Admin user created successfully');
  } catch (error: any) {
    // If error is because user already exists, that's fine
    if (error.code === 'auth/email-already-in-use') {
      console.log('Admin user already exists');
    } else {
      console.error('Error creating admin user:', error);
    }
  }
};