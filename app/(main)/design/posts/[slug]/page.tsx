import fs from "fs";
import Link from "next/link";
import Image from "next/image";

import DownIcon from "@/app/(main)/_components/down-icon";
import GradualSpacing from "@/components/ui/gradual-spacing";
import TypingAnimation from "@/components/ui/typing-animation";

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Undo2Icon } from "lucide-react";

interface PostPageProps {
  params: {
    slug: string;
  };
}

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${decodeURIComponent(slug)}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}

const PostPage:React.FC<PostPageProps> = async ({
  params
}) => {
  const { slug } = await params;
  const post = getPostContent(slug);
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
        <div className="flex flex-col gap-4 w-full md:w-2/3 bg-black/30 rounded-xl p-8 m-8">
          <div  className="text-white">
            <Link
              href="/design"
              className="flex items-start hover:text-sky-200"
            >
              <Undo2Icon className="w-8 h-8 ml-2" />
            </Link>
            <article className="markdown overflow-auto p-4 text-gray-200 
            prose-slate lg:prose-xl">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ inline, className, children } : any) {
                    // 检查是否为代码块
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter style={solarizedlight} language={match[1]}>
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      // 对于内联代码，直接渲染code标签
                      <code className="bg-slate-400/50 text-orange-600">
                        {children}
                      </code>
                    );
                  }
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;