import { getBlogConfig } from "@/fetchers/globals";
import { getPosts } from "@/fetchers/collections";
import { BlogArchive } from "@/components/BlogArchive";

export async function BlogArchiveSection() {
  const [config, posts] = await Promise.all([getBlogConfig(), getPosts()]);
  return <BlogArchive config={config} posts={posts} />;
}
