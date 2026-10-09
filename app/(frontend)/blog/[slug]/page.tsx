import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogConfig, getSiteData } from "@/fetchers/globals";
import { getPostBySlug } from "@/fetchers/collections";
import { getMediaUrl } from "@/lib/utils";
import { HeaderSection } from "@/sections/header-section";
import { FooterSection } from "@/sections/footer-section";
import { BlogPost } from "@/components/BlogPost";
import { BlogPostSkeleton } from "@/components/skeletons/blog-post-skeleton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [post, site, blog] = await Promise.all([
    getPostBySlug(slug),
    getSiteData(),
    getBlogConfig(),
  ]);

  if (!post) {
    return { title: "Note not found" };
  }

  const brandName = site?.brandName ?? "Saurav Khare";
  const ogImage =
    getMediaUrl(post.seo?.ogImage) ?? getMediaUrl(blog?.images?.ogImage);
  const description = post.seo?.description || post.excerpt;

  return {
    title: `${post.title} — ${brandName}`,
    description,
    openGraph: {
      type: "article",
      title: post.title,
      description,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: post.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: ogImage ? [ogImage] : [],
    },
    alternates: { canonical: `https://sauravkhare.com/blog/${post.slug}` },
  };
}

async function Note({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [post, config] = await Promise.all([
    getPostBySlug(slug),
    getBlogConfig(),
  ]);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} config={config} />;
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div className="min-h-screen overflow-hidden">
      <Suspense>
        <HeaderSection />
      </Suspense>
      <main className="mx-auto max-w-330 px-6 pb-28 pt-12 sm:px-10 lg:px-16 lg:pt-20">
        <Suspense fallback={<BlogPostSkeleton />}>
          <Note params={params} />
        </Suspense>
      </main>
      <Suspense>
        <FooterSection />
      </Suspense>
    </div>
  );
}
