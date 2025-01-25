import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

import * as serviceAccount from '../../service-account.json';

initializeApp({
  credential: cert(serviceAccount as any)
});

const auth = getAuth();
const db = getFirestore();

export { auth, db };