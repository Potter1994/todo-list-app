import { buttonBase } from "../../utils/classnames";
import { useTodoContext } from "./TodoProvider";

function ConfirmPopup() {
  const { isPopup, setIsPopup, handleConfirm } = useTodoContext();

  if (!isPopup) return null;

  return (
    <div className='w-full absolute top-0 bg-[rgba(0,0,0,.15)] h-full flex items-center justify-center'>
      <div className='w-[300px] bg-white rounded p-8'>
        <h2 className='text-red-500 mb-4 text-2xl text-center'>
          Are you sure?
        </h2>
        <div className='button-wrapper flex justify-between mt-8'>
          <button
            className={buttonBase}
            onClick={() => {
              handleConfirm();
              setIsPopup(false);
            }}>
            Confirm
          </button>
          <button
            className={buttonBase}
            onClick={() => {
              setIsPopup(false);
            }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPopup;
