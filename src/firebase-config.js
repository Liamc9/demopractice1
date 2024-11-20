// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkJ2_l4hcn5cVXuEA6puDb_vC0mmNkmEA",
  authDomain: "demopractice1-421ad.firebaseapp.com",
  projectId: "demopractice1-421ad",
  storageBucket: "demopractice1-421ad.firebasestorage.app",
  messagingSenderId: "1029415245018",
  appId: "1:1029415245018:web:d132fdbba260410831c1e3"
};

// Initialize Firebase and export services
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);