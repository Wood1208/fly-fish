import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/types/PostMetadata";

const removeMarkdownSyntax = (text: string): string => {
  // 去除标题（# 和 ## 等）
  text = text.replace(/^#{1,6}\s+/gm, '');
  // 去除加粗文本（** 或 __）
  text = text.replace(/\*\*(.*?)\*\*/g, '\$1');
  // 去除代码块标记(`)
  text = text.replace(/`([^`]+)`/g, '\$1');

  return text;
};

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");

    // 使用 gray-matter 解析 front matter 和主体内容
    const matterResult = matter(fileContents);

    // 截取内容前 n 个字符作为预览
    let preview = matterResult.content.slice(0, 100);
    preview = removeMarkdownSyntax(preview);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      cover: matterResult.data.cover,
      slug: fileName.replace(".md", ""),
      preview: preview,
    };
  });

  return posts;
};

export default getPostMetadata;
