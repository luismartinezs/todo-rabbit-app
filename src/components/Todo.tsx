import { db } from "@/firebase/index";
import { doc, deleteDoc } from "firebase/firestore";
import IconTrashCanOutline from "~icons/mdi/trash-can-outline";

const Todo = ({ item }) => {
  const {
    item: { todo },
    id,
  } = item;

  return (
    <li className="mb-4 border border-primary-300 w-full px-8 py-4 flex justify-between">
      <div>
        <div className="text-lg font-semibold">{todo}</div>
        <div className="text-slate-500">{todo}</div>
      </div>

      <button onClick={() => deleteDoc(doc(db, "todos", id))}>
        <IconTrashCanOutline className="w-8 h-8" />
        <span className="sr-only">Delete todo</span>
      </button>
    </li>
  );
};

export default Todo;
