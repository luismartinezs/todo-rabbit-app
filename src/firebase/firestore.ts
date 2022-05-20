import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import firebaseApp from "@/firebase/app";

const db = getFirestore(firebaseApp);
import.meta.env.VITE_FIREBASE_EMULATOR && connectFirestoreEmulator(db, 'localhost', 8080);

export default db