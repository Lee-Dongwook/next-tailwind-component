/**
 * Button 컴포넌트
 *
 * @component
 * @example
 * <Button label="click me" onClick={() => alert('Button clicked')} />
 *
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */

import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const defaultButtonStyle =
  "px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className = "bg-blue-500 hover:bg-blue-600 text-white",
}) => {
  return (
    <button
      className={`${defaultButtonStyle} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
