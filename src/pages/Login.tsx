import { useState } from "react";
import { loginEmailPassword, createAccount } from "@/firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("saito200@gmail.com");
  const [password, setPassword] = useState("admin1234");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = (event) => {
    event.preventDefault();
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
        onChange={handleEmailChange}
        placeholder="email"
        value={email}
        className="py-2 px-3 rounded border border-primary-300"
      />
      <input
        type="text"
        onChange={handlePasswordChange}
        placeholder="password"
        value={password}
        className="py-2 px-3 rounded border border-primary-300"
      />
      <button
        className="py-2 px-3 bg-primary-500 rounded text-white text-xl font-bold hover:bg-primary-600"
        type="button"
        onClick={handleLogin}
      >
        Login
      </button>
      <button
        className="py-2 px-3 bg-primary-500 rounded text-white text-xl font-bold hover:bg-primary-600"
        type="button"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
};

export default Login;
