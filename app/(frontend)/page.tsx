import { Suspense } from "react";
import { Metadata } from "next";
import { getSeoData } from "@/fetchers/globals";

import { HeaderSection } from "@/sections/header-section";
import { HeroSection } from "@/sections/hero-section";
import { NowSection } from "@/sections/now-section";
import { CapabilitiesSection } from "@/sections/capabilities-section";
import { ExperienceSection } from "@/sections/experience-section";
import { ShowcaseSection } from "@/sections/showcase-section";
import { LastSeenSection } from "@/sections/last-seen-section";
import { ContactSection } from "@/sections/contact-section";
import { FooterSection } from "@/sections/footer-section";

import { HeroSkeleton } from "@/components/skeletons/hero-skeleton";
import { NowSkeleton } from "@/components/skeletons/now-skeleton";
import { CapabilitiesSkeleton } from "@/components/skeletons/capabilities-skeleton";
import { ExperienceSkeleton } from "@/components/skeletons/experience-skeleton";
import { ShowcaseSkeleton } from "@/components/skeletons/showcase-skeleton";
import { LastSeenSkeleton } from "@/components/skeletons/last-seen-skeleton";
import { ContactSkeleton } from "@/components/skeletons/contact-skeleton";

import { SectionErrorBoundary } from "@/components/section-error-boundary";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoData();
  const title = site?.title || "Saurav Khare";
  const description = site?.description || "Frontend Engineer";
  const ogTitle = site?.ogTitle || title;
  const ogDescription = site?.ogDescription || description;
  const ogImage =
    site?.ogImage && typeof site.ogImage === "object"
      ? site.ogImage.url
      : null;

  return {
    title,
    description,
    keywords: site?.keywords?.split(",")?.map((k) => k.trim()),

    openGraph: {
      type: "website",
      locale: "en_US",
      url: site?.canonicalUrl || "https://sauravkhare.com",
      siteName: title || "Saurav Khare",
      title: ogTitle,
      description: ogDescription,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: ogTitle,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      site: title || "Saurav Khare",
      creator: site?.twitterHandle || "",
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [ogImage] : [],
    },

    robots: {
      index: !site?.noIndex,
      follow: !site?.noFollow,
      googleBot: {
        index: !site?.noIndex,
        follow: !site?.noFollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: site?.canonicalUrl || "https://sauravkhare.com",
    },

    authors: [{ name: "Saurav Khare" }],
    creator: "Saurav Khare",
  };
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Suspense>
        <HeaderSection />
      </Suspense>
      <main className="mx-auto max-w-330 px-6 sm:px-10 lg:px-16">
        <SectionErrorBoundary section="hero">
          <Suspense fallback={<HeroSkeleton />}>
            <HeroSection />
          </Suspense>
        </SectionErrorBoundary>

        <SectionErrorBoundary section="now">
          <Suspense fallback={<NowSkeleton />}>
            <NowSection />
          </Suspense>
        </SectionErrorBoundary>

        <SectionErrorBoundary section="capabilities">
          <Suspense fallback={<CapabilitiesSkeleton />}>
            <CapabilitiesSection />
          </Suspense>
        </SectionErrorBoundary>

        <SectionErrorBoundary section="experience">
          <Suspense fallback={<ExperienceSkeleton />}>
            <ExperienceSection />
          </Suspense>
        </SectionErrorBoundary>

        <SectionErrorBoundary section="showcase">
          <Suspense fallback={<ShowcaseSkeleton />}>
            <ShowcaseSection />
          </Suspense>
        </SectionErrorBoundary>

        <SectionErrorBoundary section="last-seen">
          <Suspense fallback={<LastSeenSkeleton />}>
            <LastSeenSection />
          </Suspense>
        </SectionErrorBoundary>

        <SectionErrorBoundary section="contact">
          <Suspense fallback={<ContactSkeleton />}>
            <ContactSection />
          </Suspense>
        </SectionErrorBoundary>
      </main>
      <Suspense>
        <FooterSection />
      </Suspense>
    </div>
  );
}
