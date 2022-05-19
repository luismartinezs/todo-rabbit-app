import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: "todorabbit-1b25c",
  storageBucket: "todorabbit-1b25c.appspot.com",
  messagingSenderId: "308390139039",
  appId: "1:308390139039:web:e9fa624838b4e5d4513eaa",
  measurementId: "G-K6C0BFX6S2",
};

console.log(import.meta.env.FIREBASE_API_KEY);

const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

export { db };
