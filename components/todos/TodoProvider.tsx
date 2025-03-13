import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type TodoItemType = {
  id?: number;
  text?: string;
  complete?: boolean;
};

type TodoProviderData = {
  todos: TodoItemType[];
  filterState: string;
  isPopup: boolean;
  handleConfirm: () => void;
  setTodos: React.Dispatch<React.SetStateAction<TodoItemType[] | []>>;
  setFilterState: React.Dispatch<React.SetStateAction<string>>;
  setIsPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setHandleConfirm: React.Dispatch<React.SetStateAction<() => void>>;
};

const jsonString = localStorage.getItem("potter-todo-list");
const defaultTodoData = JSON.parse(jsonString || "[]");

const TodoContext = createContext<TodoProviderData | undefined>(
  defaultTodoData
);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [filterState, setFilterState] = useState<string>("All");
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [handleConfirm, setHandleConfirm] = useState<() => void>(() => {});

  useEffect(() => {
    localStorage.setItem("potter-todo-list", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        filterState,
        isPopup,
        handleConfirm,
        setFilterState,
        setTodos,
        setIsPopup,
        setHandleConfirm,
      }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  const todoContextData = useContext(TodoContext);

  if (todoContextData === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }

  return todoContextData;
}
