"use client";
import Image from "next/image"

interface LinkCardProps {
  LinkUrl: string,
  imageUrl: string,
  title: string,
  description: string,
}

export const LinkCard = ({
  imageUrl,
  LinkUrl,
  title,
  description,
}: LinkCardProps) => {
  const handleClick = () => {
    window.open(`${LinkUrl}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <div
      onClick={handleClick}
      className="link-card h-[90px] w-full md:w-[240px] bg-transparent flex items-center
      rounded-lg p-2 cursor-pointer"
    >
      <div className="flex-shrink-0">
        <Image
          src={imageUrl}
          alt="icon"
          height={50}
          width={50}
          className="object-cover m-2"
        />
      </div>
      <div className="flex flex-col items-start ml-2 truncate">
        <span className="text-gray-200 text-xl font-semibold mb-2">
          {title}
        </span>
        <p className="text-gray-400 text-base">
          {description}
        </p>
      </div>
    </div>
  ) 
}