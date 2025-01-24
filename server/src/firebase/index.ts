import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import * as serviceAccount from '../../service-account.json';

initializeApp({
  credential: cert(serviceAccount as any)
});

export const db = getFirestore();