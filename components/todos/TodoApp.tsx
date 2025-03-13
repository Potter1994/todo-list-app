import { ReactNode } from "react";

function TodoApp({ children }: { children: ReactNode }) {
  return (
    <div className='flex justify-center items-center w-[500px] flex-col bg-blue-100 m-auto mt-20 p-4'>
      {children}
    </div>
  );
}

export default TodoApp;
