import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";	

const firebaseConfig = {
  apiKey: "AIzaSyDdaQ7JBLnZ1IdSyhNTCEIQozOkW03kdqw",
  authDomain: "silan-dental-clinic-bd2c0.firebaseapp.com",
  projectId: "silan-dental-clinic-bd2c0",
  storageBucket: "silan-dental-clinic-bd2c0.firebasestorage.app",
  messagingSenderId: "856461441219",
  appId: "1:856461441219:web:5a9171c21a906c11a74a76",
  measurementId: "G-JJZ7P6WEJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db};