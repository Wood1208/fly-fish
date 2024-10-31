"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { Sidebar } from "./sidebar";
import { Logo } from "@/components/logo";

import { useIsMobile } from "@/hooks/is-mobile";
import useScrollDirection from "@/hooks/use-scroll-direction";
import { Box, Brush, Calendar1, House, LinkIcon, Menu } from "lucide-react";
import Link from "next/link";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useIsMobile();
  const { direction, isTop } = useScrollDirection();
  const isHidden = direction === "down";

  const handleCloseSidebar = () => {
    setIsOpen(false);
  }

  return (
    <div className={cn("fixed top-0 w-full h-14 px-2 z-10 shadow-sm flex items-center bg-black/50 transition duration-500",
      isHidden ? "-translate-y-full" : "translate-y-0",
      isTop ? "bg-transparent" : ""
    )}>
      <div className="md:max-w-screen-2xl mx-auto flex items-center
      w-full justify-between">
        <Logo height={25} width={25} />
        <div className="flex items-center md:hidden text-gray-200/80 font-semibold ml-auto">
        {/* phone */}
          <div
            className="flex items-center"
            onClick={() => setIsOpen(isOpen => !isOpen)} 
          >
              <Menu className="h-6 w-6 mr-2" />
          </div>
          <Sidebar isOpen={isOpen} onClosed={handleCloseSidebar}/>
        </div>
        <div className="flex items-center space-x-6 text-gray-200/80
        font-semibold">
          <Link
            href="/"
            className={`md:flex group items-center cursor-pointer hover:text-gray-200
            transition relative ${isMobile ? 'hidden' : 'block'}`}
          >
            <House className="h-5 w-5 mr-2" />
            <p>首页</p>
            <div className="absolute bottom-[-4px] left-0 h-[3px] bg-white
            duration-300 w-0 group-hover:w-full transition-all"/>
          </Link>
          <Link
            href="/Timeline"
            className={`md:flex group items-center cursor-pointer hover:text-gray-200
            transition relative ${isMobile ? 'hidden' : 'block'}`}
          >
            <Calendar1 className="h-5 w-5 mr-2" />
            <p>时间轴</p>
            <div className="absolute bottom-[-4px] left-0 h-[3px] bg-white
            duration-300 w-0 group-hover:w-full transition-all"/>
          </Link>
          <Link
            href="/products"
            className={`md:flex group items-center cursor-pointer hover:text-gray-200
            transition relative ${isMobile ? 'hidden' : 'block'}`}
          >
            <Box className="h-5 w-5 mr-2" />
            <p>产品</p>
            <div className="absolute bottom-[-4px] left-0 h-[3px] bg-white
            duration-300 w-0 group-hover:w-full transition-all"/>
          </Link>
          <Link
            href="/design"
            className={`md:flex group items-center cursor-pointer hover:text-gray-200
            transition relative ${isMobile ? 'hidden' : 'block'}`}
          >
            <Brush className="h-5 w-5 mr-2" />
            <p>设计</p>
            <div className="absolute bottom-[-4px] left-0 h-[3px] bg-white
            duration-300 w-0 group-hover:w-full transition-all"/>
          </Link>
          <Link 
            href="/friend-link"
            className={`md:flex group items-center cursor-pointer hover:text-gray-200
            transition relative ${isMobile ? 'hidden' : 'block'}`}
          >
            <LinkIcon className="h-5 w-5 mr-2" />
            <p>链接</p>
            <div className="absolute bottom-[-4px] left-0 h-[3px] bg-white
            duration-300 w-0 group-hover:w-full transition-all"/>
          </Link>
        </div>
      </div>
    </div>
  );
};