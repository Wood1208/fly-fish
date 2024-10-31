"use client";
import Image from "next/image";
import GradualSpacing from "@/components/ui/gradual-spacing";
import TypingAnimation from "@/components/ui/typing-animation";

import DownIcon from "./_components/down-icon";
import BoxReveal from "@/components/ui/box-reveal";
import { ChevronRight } from "lucide-react";
import { Card } from "./_components/card";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleScrollDown = () => {
    const screenHeight = window.innerHeight;

    window.scrollTo({
      top: window.scrollY + screenHeight,
      behavior: 'smooth',
    });
  }

  const handleClickP1 = () => {
    router.push("/Timeline")
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full h-[100vh]">
        <Image
          src="/images/qaq.png"
          alt="HomeBackground"
          fill
          className="object-cover shadow-md z-[-1]"
        />
        <div className="flex flex-col items-center justify-center flex-grow">
          <GradualSpacing
            text="Change the world"
            className="text-3xl md:text-5xl font-bold w-auto text-white"
          />
          <TypingAnimation
            className="text-2xl md:text-3xl font-medium w-auto text-white/70 mt-2"
            duration={300}
            text="为了改变不理想的一切!"
          />
        </div>
        <div
          role="button"
          onClick={handleScrollDown}
        >
          <DownIcon />
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full
      bg-gradient-to-br from-gray-500 to-gray-700 border-b-4 border-gray-800 shadow-md">
        <div className="md:w-2/3 w-full h-full my-4 flex flex-col gap-4 bg-black/40 rounded-3xl">
          <div className="h-auto w-auto items-center justify-center
          p-12 border-b-2 border-gray-500">
            <p className="text-[2rem] md:text-[2.5rem] font-semibold
            text-gray-200 mb-2 flex">
              欢迎来到wood：
            </p>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p className="text-[1.5rem] md:text-[2rem] text-white">
                前路漫漫，求知音而不遇，见歧路而难择<span className="text-[#5046e6]">.</span>
              </p>
            </BoxReveal>
      
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1.5rem] md:text-[2rem] text-white">
                事物芸芸，光阴匆匆，{" "}
                <span className="text-[#7f78e7]">欲急行却迷惘路中</span>
              </h2>
            </BoxReveal>
      
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <div className="mt-6 text-gray-200">
                <p className="flex flex-col space-y-1">
                  <span className="flex items-center text-[1.5rem] md:text-[2rem]">
                    <ChevronRight className="w-5 h-5 mr-2" />
                    梦中化蝶翩翩，于绚烂之春夏起舞
                  </span>
                  <span className="flex items-center text-[1.5rem] md:text-[2rem]">
                    <ChevronRight className="w-5 h-5 mr-2" />
                    梦醒画碎，仍是淤泥沼泽深陷，曳曳而行. <br />
                  </span>
                </p>
              </div>
            </BoxReveal>
          </div>
          <p className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-200
            flex ml-10">
              软件工具：
          </p>
          <div className="max-w-4xl h-auto w-auto grid grid-cols-1 md:grid-cols-2
          gap-6 overflow-hidden p-4 md:ml-6">
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

export default HomePage;