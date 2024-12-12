import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const List = () => {
  const array = ["India", "America", "Thailand"];
  const [updatedArray, setUpdatedArray] = useState(array);

  const [visibleDelete, setVisibleDelete] = useState(
    new Array(array.length).fill(false)
  );
  const [checkboxState, setCheckboxState] = useState(
    new Array(array.length).fill(false)
  );

  const handleClick = (index) => {
    // Toggle visibility of the delete button for the clicked item
    const updatedVisibility = [...visibleDelete];
    updatedVisibility[index] = !updatedVisibility[index];
    setVisibleDelete(updatedVisibility);

    // Toggle checkbox state
    const updatedCheckboxState = [...checkboxState];
    updatedCheckboxState[index] = !updatedCheckboxState[index];
    setCheckboxState(updatedCheckboxState);
  };

  const handleRemoveItem = (index) => {
    const newArray = updatedArray.filter((_, i) => i !== index);
    const newVisibility = visibleDelete.filter((_, i) => i !== index); // Remove visibility state
    const newCheckboxState = checkboxState.filter((_, i) => i !== index); // Remove checkbox state

    setUpdatedArray(newArray);
    setVisibleDelete(newVisibility); // Update visibility after removal
    setCheckboxState(newCheckboxState); // Update checkbox state after removal
  };

  return (
    <div className="List w-screen h-screen text-black">
      <ul>
        {updatedArray.map((x, index) => (
          <li className="flex justify-center items-center" key={index}>
            <input
              type="checkbox"
              className="border"
              checked={checkboxState[index]} // Bind checkbox state to `checkboxState`
              onChange={() => handleClick(index)} // Handle checkbox change
            />
            <label>{x}</label>
            {visibleDelete[index] && (
              <div
                className="delete-button"
                onClick={() => handleRemoveItem(index)} // Remove item
              >
                <RxCross1 />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
