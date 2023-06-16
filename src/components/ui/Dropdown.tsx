import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  initialSelectedItemIndex?: number;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  initialSelectedItemIndex = 0,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(options[initialSelectedItemIndex]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-w-screen flex flex-row justify-center bg-gray-100 pt-4">
      <div className="relative p-2">
        <button
          onClick={toggleDropdown}
          className={`flex w-48 flex-row justify-between rounded-md border-2 border-white bg-white px-2 py-2 text-blue-900 
          focus:outline-none`}
        >
          <span className="select-none">{selectedItem}</span>

          {isDropdownOpen ? (
            <svg
              id="arrow-up"
              className="h-6 w-6 stroke-current text-blue-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              id="arrow-down"
              className="h-6 w-6 stroke-current text-blue-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        {isDropdownOpen && (
          <div className="absolute z-10 mt-2 w-48 rounded-lg bg-white py-2 shadow-xl">
            {options.map((option, index) => (
              <button
                key={option}
                className={`block w-full px-4 py-2 text-left ${
                  selectedItem === option
                    ? "bg-blue-900 text-white"
                    : "hover:bg-blue-900 text-blue-900 hover:text-white"
                }`}
                onClick={() => handleItemClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
