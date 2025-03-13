import { useRef, useState } from "react";
import { buttonBase, checkboxBase } from "../../utils/classnames";
import { TodoItemType, useTodoContext } from "./TodoProvider";

function TodoItem({ id, complete, text }: TodoItemType) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { setTodos } = useTodoContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheckboxChange = () => {
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        complete: todo.id === id ? !todo.complete : todo.complete,
      }))
    );
  };

  const handleDeleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = () => {
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        text: todo.id === id ? inputRef.current!.value : todo.text,
      }))
    );
    setIsEdit(false);
  };

  return (
    <div className='todo flex w-full mb-2 p-2 bg-white'>
      <input
        type='checkbox'
        className={`checkbox m-auto ${checkboxBase}`}
        checked={complete}
        onChange={handleCheckboxChange}
      />

      {!isEdit && (
        <p
          className={`text flex-1 my-auto mx-2 truncate ${
            complete ? "line-through text-gray-400" : ""
          }`}
          onDoubleClick={() => {
            setIsEdit(true);
          }}
          title={text}>
          {text}
        </p>
      )}
      {isEdit && (
        <input
          ref={inputRef}
          type='text'
          className='flex-1 mx-2 border-1 p-2 rounded border-gray-400'
          defaultValue={text}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleUpdateTodo();
            }
          }}
        />
      )}

      {!isEdit && (
        <div className='button-wrapper flex'>
          <button
            className={`edit mr-1 ${buttonBase}`}
            onClick={() => {
              setIsEdit(!isEdit);
            }}>
            Edit
          </button>
          <button
            className={`delete bg-red-500 hover:bg-red-600 active:bg-red-500 ${buttonBase}`}
            onClick={handleDeleteTodo}>
            Delete
          </button>
        </div>
      )}

      {isEdit && (
        <div className='button-wrapper flex'>
          <button
            className={`edit mr-1 ${buttonBase}`}
            onClick={handleUpdateTodo}>
            Update
          </button>
          <button
            className={`delete bg-red-500 hover:bg-red-600 active:bg-red-500 ${buttonBase}`}
            onClick={() => {
              setIsEdit(false);
            }}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
