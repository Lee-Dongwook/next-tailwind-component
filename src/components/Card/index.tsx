/**
 * Card 컴포넌트
 *
 * @component
 * @example
 * <Card
 *   imageUrl="https://via.placeholder.com/150"
 *   title="Card Title"
 *   description="Sample Card"
 *   onClick={() => alert('Button Clicked')}
 *   label="Move"
 * />
 *
 * @param {CardProps} props
 * @returns  {JSX.Element}
 */

import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
  label?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  onClick,
  label = "More information",
}) => {
  const defaultImageUrl = "https://via.placeholder.com/150";

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* 이미지 */}
      <Image
        className="w-full h-48 object-cover"
        src={imageUrl || defaultImageUrl}
        alt="title"
        width={300}
        height={300}
        priority
      />

      {/* 카드 내용 */}

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      {/* 버튼*/}
      <div className="px-6 pt-4 pb-4">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          onClick={onClick}
          aria-label={label}
        >
          {label}
        </button>
      </div>
    </div>
  );
};

export default Card;
