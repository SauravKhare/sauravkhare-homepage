import { getBlogConfig } from "@/fetchers/globals";
import { getPosts } from "@/fetchers/collections";
import { BlogPreview } from "@/components/BlogPreview";

export async function BlogPreviewSection() {
  const [config, posts] = await Promise.all([getBlogConfig(), getPosts()]);
  return <BlogPreview config={config} data={posts} />;
}
