import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4iC69_Ykryd1tSE89wht7hGrHv52WKqU",
  authDomain: "infercheap-saas.firebaseapp.com",
  projectId: "infercheap-saas",
  storageBucket: "infercheap-saas.firebasestorage.app",
  messagingSenderId: "409219395975",
  appId: "1:409219395975:web:82eef7189e68c70b626322"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;
