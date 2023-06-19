import React, { useState, useEffect, useRef } from "react";

interface DropdownProps {
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  index: number; // determines which item in countries array to refer to and change
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOptions,
  setSelectedOptions,
  index,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(options[index]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);

    // update dropdown with new options
    const newOptions = [...selectedOptions]; // create copy of selectedOptions array
    newOptions[index] = item;
    setSelectedOptions(newOptions);

    setIsDropdownOpen(false);
  };

  useEffect(() => {
    // close dropdown if user clicks outside the expanded menu area
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const buttonWidth = "w-[110px]";

  return (
    <div className="min-w-screen flex flex-row justify-center ">
      <div className="relative py-2 pr-3 md:pl-2" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className={`flex ${buttonWidth} flex-row justify-between rounded-2xl border-2 border-white bg-white px-2 py-3 text-blue-900 
          focus:outline-none`}
        >
          <span className="select-none truncate">{selectedItem}</span>

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
          <div
            className={`absolute z-10 mt-2 ${buttonWidth} rounded-2xl bg-white py-2 shadow-xl`}
          >
            {options.map((option) => (
              <button
                key={option}
                className={`block w-full px-4 py-3 text-left ${
                  selectedItem === option
                    ? "rounded-xl bg-blue-900 text-white"
                    : "rounded-xl text-blue-900 hover:bg-blue-900 hover:text-white"
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
