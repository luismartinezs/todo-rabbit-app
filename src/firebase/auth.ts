import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseApp from "@/firebase/app";

const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:9099");

const loginEmailPassword = async (email = "", password = "") => {
  if (!email || !password) return;

  console.log(email, password)

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  console.log(userCredential.user);
};

export { auth, loginEmailPassword };
