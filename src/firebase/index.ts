// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "@/firebase/app";
import { auth } from "@/firebase/auth";

// const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

export { db, auth };
