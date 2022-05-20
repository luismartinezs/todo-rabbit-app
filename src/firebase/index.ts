// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "@/firebase/app";

// const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

export { db };
