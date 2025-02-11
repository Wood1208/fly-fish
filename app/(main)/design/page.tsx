import Image from "next/image";
import GradualSpacing from "@/components/ui/gradual-spacing";
import TypingAnimation from "@/components/ui/typing-animation";
import DownIcon from "../_components/down-icon";

import getPostMetadata from "@/helper/getPostMetadata";
import PostPreview from "../_components/PostPreview";

const DesignPage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

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
            text="Bottom Design"
            className="text-3xl md:text-5xl font-bold w-auto text-white text-center"
          />
          <TypingAnimation
            className="text-2xl md:text-3xl font-medium w-auto text-white/70 mt-2 text-center"
            duration={300}
            text="欲知深渊，须临深渊"
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
        <div className="flex flex-col gap-4 w-full md:w-auto lg:w-2/3 bg-black/30 rounded-xl p-1 md:p-8 m-8">
          {postPreviews}
        </div>
      </div>
    </div>
  )
};

export default DesignPage;