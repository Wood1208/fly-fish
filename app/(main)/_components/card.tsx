import Image from "next/image"
import { motion } from "framer-motion";
import ShimmerButton from "@/components/ui/shimmer-button";


interface CardProps {
  imageUrl: string,
  title: string,
  description: string,
  handleClick: () => void;
}

export const Card = ({
  imageUrl,
  title,
  description,
  handleClick,
}: CardProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="p-10 bg-transparent/30 rounded-lg
      shadow-lg flex flex-col hover:bg-transparent/40"
    >
      <div className="flex items-center space-x-4 mb-4 pb-4 border-b-2 border-gray-400">
        <Image
          src={imageUrl}
          alt={title}
          width={60}
          height={60}
          className="rounded-xl object-cover"
        />
        <h2 className="text-2xl font-semibold text-gray-200">
          {title}
        </h2>
      </div>
      <p className="flex text-xl text-gray-200">
        {description}
      </p>
      <ShimmerButton
        shimmerSize="0.1em"
        background="linear-gradient(to right, rgba(135, 206, 250, 1), rgba(70, 130, 180, 1))"
        className="flex items-center mt-3"
        type="button"
        onClick={handleClick}
      >
        <span
          className="whitespace-pre-wrap text-center text-base font-semibold leading-none 
          tracking-tight text-white lg:text-lg transition active:scale-105"
        >
        了解更多
        </span>
      </ShimmerButton>
    </motion.div>
  )
}