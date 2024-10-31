
import { useEffect } from "react"
import Image from "next/image";
import { Box, Brush, Calendar1, House, LinkIcon, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean,
  onClosed: () => void,
}

export const Sidebar = ({
  isOpen,
  onClosed
}:SidebarProps) => {

  useEffect(() => {
    if(isOpen) {
      //禁止滚动
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    //清理函数
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div>
      <div
        className={cn("fixed top-0 left-0 w-full h-screen bg-black/50 z-20",
        isOpen ? "block" : "hidden"
        )}
        onClick={onClosed}  
      />
      <div className={cn("fixed top-0 right-0 w-3/4 h-screen bg-gradient-to-br from-gray-700 to-gray-600 z-20 shadow-lg transition-transform duration-500",
        isOpen ? "translate-x-0" : "translate-x-full",
      )}>
        <div className="flex flex-col">
          {/* 图片 */}
          <div className="flex items-center justify-center h-1/4 w-full">
            <Image 
              src="/images/mushishi.jpg"
              alt="logo"
              height={125}
              width={125}
              className="rounded-full mt-6"
            />
          </div>
          {/* 三 */}
          <div className="flex items-center justify-center gap-x-10 mt-8">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl">
                文章
              </span>
              <span className="text-xl">
                14
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl">
                标签
              </span>
              <span className="text-xl">
                8
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl">
                分类
              </span>
              <span className="text-xl">
                3
              </span>
            </div>
          </div>
          {/* 分割 */}
          <div className="relative flex items-center w-full mt-4">
            <Scissors className="absolute left-5 w-7 h-7" />
            <hr className="border-t-4 border-dashed border-gray-600 flex-grow" />
          </div>
          {/* 按钮 */}
          <div className="flex flex-col items-start justify-start mt-6">
            <Link
              href="/"
              onClick={onClosed}
              className="flex items-center w-full h-10 mt-2 ml-6"
            >
              <House className="w-7 h-7 mr-4" />
              <span className="text-xl">
                首页
              </span>
            </Link>
            <Link
              href="/Timeline"
              onClick={onClosed}
              className="flex items-center w-full h-10 mt-2 ml-6"
            >
              <Calendar1 className="w-7 h-7 mr-4" />
              <span className="text-xl">
                时间轴
              </span>
            </Link>
            <Link 
              href="/products"
              onClick={onClosed}
              className="flex items-center w-full h-10 mt-2 ml-6"
            >
              <Box className="w-7 h-7 mr-4" />
              <span className="text-xl">
                产品
              </span>
            </Link>
            <Link 
              href="/design"
              onClick={onClosed}
              className="flex items-center w-full h-10 mt-2 ml-6"
            >
              <Brush className="w-7 h-7 mr-4" />
              <span className="text-xl">
                设计
              </span>
            </Link>
            <Link 
              href="/friend-link"
              onClick={onClosed}
              className="flex items-center w-full h-10 mt-2 ml-6"
            >
              <LinkIcon className="w-7 h-7 mr-4" />
              <span className="text-xl">
                链接
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}