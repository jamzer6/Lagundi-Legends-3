import * as admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import * as dotenv from "dotenv";

dotenv.config();

const serviceAccountPath = process.env.GOOGLE_CLOUD_KEY_FILE;

if (!serviceAccountPath) {
  throw new Error("Environment variable GOOGLE_CLOUD_KEY_FILE is not defined.");
}

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(require(serviceAccountPath)),
});

const db = getFirestore();

export { db };
