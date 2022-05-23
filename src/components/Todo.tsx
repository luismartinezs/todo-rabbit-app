import IconTrashCanOutline from "~icons/mdi/trash-can-outline";
import { deleteTodo } from "@/firebase/todos";

const Todo = ({ todo }) => {
  const { title, description, id } = todo;

  return (
    <li className="mb-4 border border-primary-300 w-full px-8 py-4 flex justify-between">
      <div>
        <div className="text-lg font-semibold">{title}</div>
        {description && <div className="text-slate-500">{description}</div>}
      </div>

      <button onClick={() => deleteTodo(id)}>
        <IconTrashCanOutline className="w-8 h-8" />
        <span className="sr-only">Delete todo</span>
      </button>
    </li>
  );
};

export default Todo;
