import { useState } from "react";
import { loginEmailPassword } from "@/firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("saito200@gmail.com");
  const [password, setPassword] = useState("admin1234");

  const handleLoginEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleLoginPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRegisterEmailChange = (event) => {
    console.log(event.target.value);
  };
  const handleRegisterPasswordChange = (event) => {
    console.log(event.target.value);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    loginEmailPassword(email, password);
  };
  return (
    <>
      <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
        <h2 className="font-bold">Login</h2>
        <input
          type="text"
          onChange={handleLoginEmailChange}
          placeholder="email"
          value={email}
        />
        <input
          type="text"
          onChange={handleLoginPasswordChange}
          placeholder="password"
          value={password}
        />
        <button
          className="border border-primary-500 hover:bg-primary-200"
          type="submit"
        >
          Login
        </button>
      </form>
      <form className="flex flex-col space-y-4">
        <h2>Register</h2>
        <input
          type="text"
          onChange={handleRegisterEmailChange}
          placeholder="email"
        />
        <input
          type="text"
          onChange={handleRegisterPasswordChange}
          placeholder="password"
        />
      </form>
    </>
  );
};

export default Login;
