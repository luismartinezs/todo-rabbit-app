import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "@/firebase/auth";
import Todo from "@/components/Todo";
import { db } from "@/firebase/index";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  where,
  getDocs,
} from "firebase/firestore";

const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));

const Todos = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [todos, setTodos] = useState([] as Array<{ id: string }>);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");

    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, [input, user, loading]);
  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <>
      <div className="">
        <div className="flex items-center space-x-2">
          <div>Logged in as {user?.email}</div>
          <button className="border border-primary-500 rounded py-1 px-2" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
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
    </>
  );
};

export default Todos;
