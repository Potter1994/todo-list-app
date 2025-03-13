import { buttonBase } from "../../utils/classnames";
import { useTodoContext } from "./TodoProvider";

function TodoFeature() {
  const { setTodos, setHandleConfirm, setIsPopup } = useTodoContext();

  const clearTodos = () => {
    setTodos([]);
  };

  const deleteCompleteTodos = () => {
    setTodos((prev) => prev.filter((todo) => !todo.complete));
  };

  return (
    <div className='mt-2 flex w-full justify-end'>
      <button
        className={`mr-1 ${buttonBase}`}
        onClick={() => {
          setIsPopup(true);
          setHandleConfirm(() => clearTodos);
        }}>
        Clear All
      </button>
      <button
        className={`${buttonBase}`}
        onClick={() => {
          setIsPopup(true);
          setHandleConfirm(() => deleteCompleteTodos);
        }}>
        Delete Complete
      </button>
    </div>
  );
}

export default TodoFeature;
