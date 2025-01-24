import { FirebaseApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore';
import { Auth } from 'firebase/auth';

declare const app: FirebaseApp;
declare const auth: Auth;
declare const db: Firestore;

export { app, auth, db };