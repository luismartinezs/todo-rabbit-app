import { Routes, Route, Link } from "react-router-dom";
import Todos from "@/pages/Todos";
import Login from "@/pages/Login";

function App(): JSX.Element {
  return (
    <div className="App flex flex-col items-center w-full space-y-6  items-center">
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
