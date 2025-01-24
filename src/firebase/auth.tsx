import { auth, db } from '../../firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

interface UserInfos {
  name: string;
  email: string;
  role?: string; // Optional role property
}

export const registerUser = async (user: UserInfos, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, user.email, password);
    const userId = userCredential.user.uid;

    await setDoc(doc(db, 'users', userId), {
      name: user.name,
      email: user.email,
      role: user.role // Include role if provided
    });

    return userCredential.user;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userId = userCredential.user.uid;

    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      throw new Error('No such user!');
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error logging out user:', error);
    throw error;
  }
};