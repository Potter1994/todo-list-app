import { useTodoContext } from "./TodoProvider";

function TodoCompleteCount() {
  const { todos } = useTodoContext();
  const count = todos.filter((todo) => todo.complete).length;
  const syntax =
    todos.length === 0
      ? "Add something todo..."
      : `Complete item${count > 1 ? "s" : ""} : ${count}`;

  return <p className='self-baseline'>{syntax}</p>;
}

export default TodoCompleteCount;
