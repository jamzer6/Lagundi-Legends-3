import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount = require("../service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore();

export { db };
