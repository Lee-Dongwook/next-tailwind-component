import React from "react";

interface BadgeProps {
  text: string;
  color?: "blue" | "green" | "red" | "yellow";
}

const Badge: React.FC<BadgeProps> = ({ text, color = "blue" }) => {
  const colors: Record<string, string> = {
    blue: "bg-blue 500 text-white",
    green: "bg-green-500 text-white",
    red: "bg-red-500 text-white",
    yellow: "bg-yellow-500 text-white",
  };

  return <span className={`px-2 py-1 rounded ${colors[color]}`}>{text}</span>;
};

export default Badge;
