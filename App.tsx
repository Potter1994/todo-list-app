import ConfirmPopup from "./components/todos/ConfirmPopup";
import TodoApp from "./components/todos/TodoApp";
import TodoCompleteCount from "./components/todos/TodoCompleteCount";
import TodoFeature from "./components/todos/TodoFeature";
import TodoHeader from "./components/todos/TodoHeader";
import TodoList from "./components/todos/TodoList";
import TodoOptions from "./components/todos/TodoOptions";
import { TodoProvider } from "./components/todos/TodoProvider";

function App() {
  return (
    <TodoApp>
      <TodoProvider>
        <ConfirmPopup />
        <TodoHeader />
        <TodoFeature />
        <TodoOptions />
        <TodoList />
        <TodoCompleteCount />
      </TodoProvider>
    </TodoApp>
  );
}

export default App;
