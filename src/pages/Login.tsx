import { useState, useEffect } from "react";
import {
  auth,
  loginEmailPassword,
  createAccount,
  signInWithGoogle,
} from "@/firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("saito200@gmail.com");
  const [password, setPassword] = useState("admin1234");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    // if (user) navigate("/");
  }, [user, loading]);

  const handleLogin = (event) => {
    loginEmailPassword(email, password);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    createAccount(email, password);
  };

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="font-bold text-2xl">Login</h2>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        value={email}
        className="py-2 px-3 rounded border border-primary-300"
      />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        value={password}
        className="py-2 px-3 rounded border border-primary-300"
      />
      <button
        className="py-2 px-3 bg-gray-800 rounded text-white text-xl font-bold hover:bg-black"
        type="button"
        onClick={() => loginEmailPassword(email, password)}
      >
        Login
      </button>
      <button
        className="py-2 px-3 bg-primary-500 rounded text-white text-xl font-bold hover:bg-primary-600"
        type="button"
        onClick={signInWithGoogle}
      >
        Login with Google
      </button>
      <button
        className="py-2 px-3 bg-primary-500 rounded text-white text-xl font-bold hover:bg-primary-600"
        type="button"
        onClick={() => createAccount(email, password)}
      >
        Register
      </button>
      <div>
        <Link to="/reset">Forgot Password</Link>
      </div>
    </div>
  );
};

export default Login;
