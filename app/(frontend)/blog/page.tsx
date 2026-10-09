import { Suspense } from "react";
import type { Metadata } from "next";
import { getSiteData } from "@/fetchers/globals";
import { siteToMetadata } from "@/lib/site-metadata";
import { renderSection } from "@/lib/render-section";
import { HeaderSection } from "@/sections/header-section";
import { FooterSection } from "@/sections/footer-section";
import { BlogArchiveSection } from "@/sections/blog-archive-section";
import { BlogArchiveSkeleton } from "@/components/skeletons/blog-archive-skeleton";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteData();
  const base = siteToMetadata(site);
  return {
    ...base,
    title: `Notes — ${site?.brandName ?? "Saurav Khare"}`,
    alternates: { canonical: "https://sauravkhare.com/blog" },
  };
}

export default function BlogPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Suspense>
        <HeaderSection />
      </Suspense>
      <main className="mx-auto max-w-330 px-6 pb-28 pt-16 sm:px-10 lg:px-16 lg:pt-24">
        {renderSection(
          "notes-archive",
          <BlogArchiveSkeleton />,
          <BlogArchiveSection />,
        )}
      </main>
      <Suspense>
        <FooterSection />
      </Suspense>
    </div>
  );
}
