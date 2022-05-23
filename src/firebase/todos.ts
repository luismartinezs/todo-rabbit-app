import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebase/index";
import type { Todo } from "@/types";
import { auth } from "@/firebase/auth";

const todosQuery = query(collection(db, "todos"), orderBy("timestamp", "desc"));

const subscribeGetTodos = (setter) => {
  const handleSnapshot = (snapshot) => {
    setter(
      snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
    );
  };

  const handleError = (error) => {
    console.error(error);
  };

  return onSnapshot(todosQuery, handleSnapshot, handleError);
};

const createTodo = (todo) => {
  if (auth.currentUser === null) {
    return null;
  }

  const _todo: Todo = {
    ...todo,
    timestamp: serverTimestamp(),
    user_uid: auth.currentUser.uid,
  };

  addDoc(collection(db, "todos"), _todo);
};

const deleteTodo = (id) => {
  deleteDoc(doc(db, "todos", id));
};

export { subscribeGetTodos, createTodo, deleteTodo };
