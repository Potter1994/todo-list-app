import { TodoItemType, useTodoContext } from "./TodoProvider";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, filterState } = useTodoContext();
  const displayTodos = () =>
    todos
      .filter((todo) => {
        if (filterState === "All") {
          return true;
        }

        if (filterState === "Undo") {
          return !todo.complete;
        }

        if (filterState === "Complete") {
          return todo.complete;
        }

        return false;
      })
      .map((todo: TodoItemType) => <TodoItem {...todo} key={todo.id} />);

  return (
    <div className='todo-list w-full mt-4 max-h-[500px] overflow-auto'>
      {displayTodos()}
    </div>
  );
}

export default TodoList;
