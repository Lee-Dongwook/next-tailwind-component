import React from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
