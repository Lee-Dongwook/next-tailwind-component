/**
 * Accordion 컴포넌트
 *
 * @component
 * @example
 * ```tsx
 * <Accordion title="Section 1" content="This is the content of section 1" />
 * ```
 * @param {AccordionProps} props
 * @returns {JSX.Element}
 */
"use client";

import React, { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        className="w-full text-left py-4 px-6 font-bold flex justify-between items-center"
        onClick={handleToggleButton}
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="px-6 py-4 text-gray-700">{content}</div>}
    </div>
  );
};

export default Accordion;
