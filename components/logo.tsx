import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  height: number,
  width: number,
};

export const Logo = ({
  height,
  width
}: LogoProps) => {
  return (
    <Link 
      href="/"
      className="flex space-x-4 cursor-pointer"
    >
      <Image 
        src="/favicon.ico"
        alt="logo"
        height={height}
        width={width}
        className="hidden md:block"
      />
      <p className="text-2xl font-bold text-gray-200/80
      hover:text-gray-200 transition">
        羽鱼
      </p>
    </Link>
  )
}