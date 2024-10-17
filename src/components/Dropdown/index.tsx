/**
 * Dropdown 컴포넌트
 *
 * @component
 * @example
 * ```tsx
 * <Dropdown options={['Option 1', 'Option 2']} onSelect={(option) => alert(option)} />
 * ```
 * @param {DropdownProps} props
 * @returns {JSX.Element}
 */

"use client";

import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleToggleButton = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-64">
      <button
        className="w-full px-4 py-2 bg-gray-200 text-left rounded"
        onClick={handleToggleButton}
      >
        {selectedOption || "Select an option"}
        <span className="float-right">{isOpen ? "▲" : "▼"}</span>
        {isOpen && (
          <ul className="absolute w-full bg-white shadow-lg rounded mt-2 z-10">
            {options.map((option) => (
              <li
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </button>
    </div>
  );
};

export default Dropdown;
