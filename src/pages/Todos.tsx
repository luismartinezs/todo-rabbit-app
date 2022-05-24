import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "@/firebase/auth";
import Todo from "@/components/Todo";
import { subscribeGetTodos, createTodo } from "@/firebase/todos";

const Todos = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [todos, setTodos] = useState([] as Array<{ id: string }>);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");

    const unsubscribe = subscribeGetTodos(setTodos);
    return () => {
      unsubscribe();
    };
  }, [input, user, loading]);

  const addTodo = (e) => {
    e.preventDefault();
    try {
      createTodo({ title: input });
      setInput("");
    } catch (err) {
      throw new Error("Token error");
    }
  };

  return (
    <>
      <div className="">
        <div className="flex items-center space-x-2">
          <div>Logged in as {user?.email}</div>
          <button
            className="border border-primary-500 rounded py-1 px-2 hover:bg-primary-500 hover:text-white"
            onClick={logout}
          >
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
          className="uppercase bg-primary-500 text-white py-2 px-8 rounded font-semibold hover:bg-primary-600"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </form>
      <ul className="w-full md:max-w-xl">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
