import GradualSpacing from "@/components/ui/gradual-spacing";
import TypingAnimation from "@/components/ui/typing-animation";
import Image from "next/image";
import DownIcon from "../_components/down-icon";
import { LinkCard } from "../_components/link-card";

const FriendLinkPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center w-full h-[50vh] border-b-4 border-gray-800">
        <Image
          src="/images/qaq.png"
          alt="HomeBackground"
          fill
          className="object-cover shadow-md z-[-1]"
        />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
        flex flex-col items-center justify-center flex-grow">
          <GradualSpacing
            text="Hello Friend"
            className="text-4xl md:text-5xl font-bold w-auto text-white text-center"
          />
          <TypingAnimation
            className="text-2xl md:text-3xl font-medium w-auto text-white/70 mt-2 text-center"
            duration={300}
            text="每次日落星烁，都会想起你"
          />
        </div>
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        >
          <DownIcon />
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center w-full min-h-screen bg-gradient-to-br from-gray-600 to-gray-800
      border-b-4 border-gray-800 shadow-md">
        <div className="flex flex-col gap-4 w-full md:w-1/2 bg-black/30 rounded-xl p-8 m-8">
          <div className="flex flex-col gap-4 items-start justify-start">
            <span className="text-white font-semibold text-2xl">
              1.技术支持
            </span>
            <p className="text-gray-400 text-xl">
              本网站的搭建由以下技术支持：
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
            <LinkCard
              LinkUrl="https://nextjs.org/"
              imageUrl="https://ts3.cn.mm.bing.net/th?id=ODLS.f3b8e2a7-85af-4417-a687-2b9f7a1b1a82&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"
              title="NextJS"
              description="The React Framework for the Web"
            />
            <LinkCard
              LinkUrl="https://www.tailwindcss.cn/"
              imageUrl="https://ts4.cn.mm.bing.net/th?id=ODLS.5cce154d-f541-452b-a7f7-38fe772b1482&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"
              title="Tailwindcss"
              description="good css tool"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-semibold text-2xl">
              2.友情链接
            </span>
            <p className="text-gray-400 text-xl">
              单方面认识的一些厉害的人：
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
            <LinkCard
              LinkUrl="https://www.qzq.at/"
              imageUrl="https://www.qzq.at/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-circle.c18e5fff.png&w=1200&q=75"
              title="数字游牧人"
              description="great remote worker"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendLinkPage;