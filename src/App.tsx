import { Routes, Route, Link } from "react-router-dom";
import Todos from "@/pages/Todos";
import Login from "@/pages/Login";

const navItems = [
  { path: "/", label: "Todos" },
  { path: "/login", label: "Login" },
].map(({ path, label }) => (
  <li key={path}>
    <Link to={path} className="hover:underline">
      {label}
    </Link>
  </li>
));

function App(): JSX.Element {
  return (
    <div className="App flex flex-col items-center w-full py-10 space-y-6  items-center">
      <nav className="py-4 px-6">
        <ul className="flex space-x-6">{navItems}</ul>
      </nav>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
