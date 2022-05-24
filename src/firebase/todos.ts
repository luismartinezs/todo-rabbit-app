import {
  collection,
  query,
  orderBy,
  where,
  onSnapshot,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebase/index";
import type { Todo } from "@/types";
import { auth } from "@/firebase/auth";

/**
 *
 * @param setter Setter function that sets snapshot values every time they change in firestore
 * @returns Unsubscribe function to be called on unmount
 */
const subscribeGetTodos = (setter) => {
  const todosQuery = query(
    collection(db, "todos"),
    where("user_uid", "==", auth.currentUser?.uid),
    orderBy("timestamp", "desc")
  );

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
