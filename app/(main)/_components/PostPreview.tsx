"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { format } from "date-fns";
import { PostMetadata } from "@/types/PostMetadata";

const PostPreview = (props: PostMetadata) => {
  const router = useRouter();
  const handleLink = () => {
    router.push(`/design/posts/${encodeURIComponent(props.slug)}`);
  }

  return (
    <div 
      key={props.slug} 
      className="flex flex-col md:flex-row md:h-[250px] h-[420px] w-full md:auto lg:w-2/3 bg-transparent/50
      rounded-lg"
    >
      <div className="overflow-hidden rounded-lg flex-shrink-0 md:w-2/5 w-full">
        <Image
          src={props.cover}
          alt="postImage"
          width={360}
          height={250}
          onClick={handleLink}
          className="object-cover h-full w-full cursor-pointer transition duration-1000 hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 p-6">
        <Link
          href={`/design/posts/${encodeURIComponent(props.slug)}`}
          className="text-2xl text-gray-100 font-bold hover:text-sky-200 flex"
        >
          {props.title}
        </Link>
        <p 
          className="text-base text-gray-300 font-semibold mt-1 flex items-start"
        >
          {format(new Date(props.date), 'yyyy-MM-dd')}
        </p>
        <div className="flex items-start w-auto text-base text-gray-400 mt-1">
          <div className="line-clamp-2">
            {props.preview}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;