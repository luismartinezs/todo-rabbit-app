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
    <>
      <form className="flex flex-col space-y-4">
        <h2 className="font-bold">Login</h2>
        <input
          type="text"
          onChange={handleEmailChange}
          placeholder="email"
          value={email}
        />
        <input
          type="text"
          onChange={handlePasswordChange}
          placeholder="password"
          value={password}
        />
        <button
          className="border border-primary-500 hover:bg-primary-200"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="border border-primary-500 hover:bg-primary-200"
          type="button"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Login;
