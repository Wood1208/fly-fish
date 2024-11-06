import { PostMetadata } from "@/types/PostMetadata";
import { format } from "date-fns";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
  return (
    <div key={props.slug} className="text-gray-200">
      {/* <Image
        src={post.cover}
        alt="postImage"
        fill
        className="object-cover"
      /> */}
      <div>
        <Link
          href={`/design/posts/${encodeURIComponent(props.slug)}`}
          className="text-2xl font-bold hover:text-sky-200"
        >
          {props.title}
        </Link>
        <p className="text-base font-semibold mt-1">
          {format(new Date(props.date), 'yyyy-MM-dd')}
        </p>
      </div>
    </div>
  );
};

export default PostPreview;