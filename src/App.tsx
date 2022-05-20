import Todos from "@/pages/Todos";
import Login from "@/pages/Login";

function App(): JSX.Element {

  return (
    <div className="App flex flex-col justify-center items-center w-full py-10 space-y-6  items-center">
      {/* <Todos /> */}
      <Login />
    </div>
  );
}

export default App;
