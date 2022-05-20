import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import firebaseApp from "@/firebase/app";

const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");

const loginEmailPassword = async (email = "", password = "") => {
  if (!email || !password) return;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
  } catch (error) {
    console.error(error);
  }
};

const createAccount = async (email = "", password = "") => {
  if (!email || !password) return;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
  } catch (error) {
    console.error(error);
  }
};

const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user)
      // show app
    } else {
      // show login form
    }
  })
}

export { auth, loginEmailPassword, createAccount, monitorAuthState };
