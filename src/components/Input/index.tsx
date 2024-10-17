/**
 * Input 컴포넌트
 *
 * @component
 * @example
 * <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder />
 *
 * @param {InputProps} props
 * @returns { JSX.Element }
 */

import React from "react";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  disabled?: boolean;
  className?: string;
}

const defaultInputStyle =
  "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed";

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  name,
  placeholder,
  type = "text",
  disabled,
  className,
}) => {
  return (
    <input
      className={`${defaultInputStyle} ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default Input;
