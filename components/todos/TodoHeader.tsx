import { FormEvent, useRef } from "react";
import { buttonBase } from "../../utils/classnames";
import { TodoItemType, useTodoContext } from "./TodoProvider";

function TodoHeader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setTodos } = useTodoContext();

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current) {
      const text = inputRef.current.value;

      setTodos((prev) => {
        return [
          ...prev,
          { id: new Date().getTime(), text, complete: false } as TodoItemType,
        ];
      });

      inputRef.current.value = "";
    }
  };

  return (
    <div className='w-full flex flex-col'>
      <h1 className='text-center text-4xl font-bold mb-4'>Todo List</h1>
      <form className='wrapper flex m-auto w-full' onSubmit={handleAddTodo}>
        <input
          className='bg-white rounded-md px-2 border-2 border-transparent focus:border-gray-400 focus:outline-none mr-1 shadow flex-1'
          type='text'
          ref={inputRef}
        />
        <button className={buttonBase} type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoHeader;
