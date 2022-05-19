import React, { useState, useEffect } from "react";
import Todo from "@/components/Todo.tsx";
import { db } from "@/firebase.js";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));

function App(): JSX.Element {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, [input]);
  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App flex flex-col justify-center items-center w-full py-10 space-y-6  items-center">
      <h2 className="text-xl font-bold">TODO List App</h2>
      <form className="flex space-x-2 w-full md:max-w-xl justify-center">
        <input
          aria-label="Make Todo"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="p-2 border-2 border-primary-200 flex-1"
          placeholder="Make Todo"
        />
        <button
          className="uppercase bg-primary-500 text-white py-2 px-8 rounded font-semibold"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </form>
      <ul className="w-full md:max-w-xl">
        {todos.map((item) => (
          <Todo key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
