"use client";
import Image from "next/image";
import GradualSpacing from "@/components/ui/gradual-spacing";
import TypingAnimation from "@/components/ui/typing-animation";
import DownIcon from "../_components/down-icon";
import { Card } from "../_components/card";

const ProductsPage = () => {
  const handleClickP1 = () => {};

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center w-full h-[50vh]">
        <Image
          src="/images/qaq.png"
          alt="HomeBackground"
          fill
          className="object-cover shadow-md z-[-1]"
        />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
        flex flex-col items-center justify-center flex-grow">
          <GradualSpacing
            text="Advanced Software"
            className="text-3xl md:text-5xl font-bold w-auto text-white text-center"
          />
          <TypingAnimation
            className="text-2xl md:text-3xl font-medium w-auto text-white/70 mt-2 text-center"
            duration={300}
            text="太阳发出了光芒，从此世界有了生命"
          />
        </div>
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        >
          <DownIcon />
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen
      bg-gradient-to-br from-gray-600 to-gray-800 border-b-4 border-gray-800 shadow-md">
        <div className="md:w-1/2 w-full h-full my-4 flex flex-col gap-2 bg-black/20 rounded-3xl">
          <p className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-200
          flex items-start ml-8 mt-6">
            软件工具：
          </p>
          <div className="max-w-4xl h-auto w-auto grid grid-cols-1
          gap-6 overflow-hidden p-8">
            <Card
              imageUrl="/images/genshan.png"
              title="原神第一生产力"
              description="不为愚蠢的枷锁束缚，软件可以自行完成每日的打卡跑步任务，如果对此感兴趣的话，可以点击此页面查看详细内容~(声明一下我不玩原神)"
              handleClick={handleClickP1}
            />
            <Card
              imageUrl="/images/genshan.png"
              title="原神第一生产力"
              description="不为愚蠢的枷锁束缚，软件可以自行完成每日的打卡跑步任务，如果对此感兴趣的话，可以点击此页面查看详细内容~(声明一下我不玩原神)"
              handleClick={handleClickP1}
            />
            <Card
              imageUrl="/images/genshan.png"
              title="原神第一生产力"
              description="不为愚蠢的枷锁束缚，软件可以自行完成每日的打卡跑步任务，如果对此感兴趣的话，可以点击此页面查看详细内容~(声明一下我不玩原神)"
              handleClick={handleClickP1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;