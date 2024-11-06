---
title: markdown文本使用
date: 2024-11-02 19:59:49
tags: markdown
categories: 编程
cover: https://haowallpaper.com/link/common/file/getCroppingImg/918f0510b0b71fcca23f7a1f0f7ca1de918f0510b0b71fcca23f7a1f0f7ca1de
---

## 读取文件

首先，我们创建一个`posts`文件夹，在里面创建`.md`后缀的markdown文本作为例子。

然后可以使用`fs`函数读取文件

```tsx
import fs from "fs";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};
```

之后可以在对应的`page.tsx`文件中使用

```tsx
const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <div key={slug} className="text-white">
      <Link href={`/design/posts/${encodeURIComponent(slug)}`}>
        {slug}
      </Link>
    </div>
  ));
```

之后直接在`div`中包裹`{postPreviews}`即可

fs函数使用的是同步处理没有使用异步，如果需要处理大型文件还是需要使用异步处理。

（PS：这里注意一个点是我使用了encodeURIComponent()，这个函数的作用是用于解码，如果你的某些地方使用中文出现乱码的话需要使用这个函数进行解码）

因为使用Nextjs，所以我们使用动态路由就创建文件夹`posts/[slug]/`即可。

```tsx
interface PostPageProps {
  params: {
    slug: string;
  };
}

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${decodeURIComponent(slug)}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
}

const PostPage:React.FC<PostPageProps> = async ({
  params
}) => {
  const { slug } = await params;
  const content = getPostContent(slug);
```

这是一段示例代码（PS：Nextjs15中动态路由都设置为异步处理了，所以这里必须使用异步，如果使用的是14或之前版本则无此要求）

同理之后也是直接渲染即可

```tsx
<div className="text-white">
    This is Post: {decodeURIComponent(slug)}
    <Markdown>{content}</Markdown>
</div>
```

***

## 解析markdow文本

可以使用第三方库来帮助解析

我随便使用了一个`react-markdown`

使用起来非常简单，只需要包裹即可

```tsx
import Markdown from "react-markdown";

<article className="markdown">
  <Markdown>{post.content}</Markdown>
</article>
```

1. **Markdown 转换**：

   - `react-markdown` 将 Markdown 文本转换为 React 可以渲染的真实 HTML 元素，例如 `<h1>`、`<p>`、`<ul>` 等。

2. **Tailwind CSS 的影响**：

   - Tailwind CSS 会使用 `@apply`、`@tailwind` 等指令来设置各种样式，但它不会提供默认的标题、段落或列表的样式。因此，使用 Tailwind CSS 后，Markdown 转换后的文本元素可能会看起来很平淡或缺少样式。

3. **解决方案**：

   - 为了解决这个问题，建议创建一个名为 `.markdown` 的 CSS 类，并在你的 `index.css` 文件中添加如下样式：

     ```css
     css.markdown > * {
       all: revert;
     }
     ```

   - 这段 CSS 的作用是将所有 `.markdown` 类下的直接子元素的样式恢复为浏览器的默认样式。通过使用 `all: revert;`，可以让这些元素恢复到没有被 Tailwind CSS 改变的状态。

4. **实施步骤**：

   - 创建该 CSS 类后，在使用 `ReactMarkdown` 组件的地方，将该类添加到组件中，如下所示：

     ```tsx
     jsx<ReactMarkdown className="markdown">{content}</ReactMarkdown>
     ```

***

