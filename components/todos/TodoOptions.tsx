import { buttonBase } from "../../utils/classnames";
import { useTodoContext } from "./TodoProvider";

const optionClassNames = `option flex-1 mr-1 text-center bg-gray-400 hover:bg-gray-700 active:bg-gray-400 ${buttonBase}`;

const optionList: string[] = ["All", "Undo", "Complete"];

function TodoOptions() {
  const { filterState, setFilterState } = useTodoContext();

  const isActive = (currentOption: string) => {
    if (currentOption === filterState) {
      return "bg-gray-700";
    }
  };

  const handleChangeOption = (currentOption: string) => {
    if (currentOption === filterState) return;
    setFilterState(currentOption);
  };

  return (
    <ul className='options flex mt-4 w-full justify-around'>
      {optionList.map((option) => (
        <li
          className={`${optionClassNames} ${isActive(option)}`}
          key={option}
          onClick={() => {
            handleChangeOption(option);
          }}>
          {option}
        </li>
      ))}
    </ul>
  );
}

export default TodoOptions;
