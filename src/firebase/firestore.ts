import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import firebaseApp from "@/firebase/app";

const db = getFirestore(firebaseApp);
connectFirestoreEmulator(db, 'localhost', 8080);

export default db