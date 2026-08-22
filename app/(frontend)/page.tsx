import { Suspense } from "react";
import { Metadata } from "next";
import { getSiteData } from "@/fetchers/globals";
import { renderSection } from "@/lib/render-section";
import { siteToMetadata } from "@/lib/site-metadata";

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

export async function generateMetadata(): Promise<Metadata> {
  const siteData = await getSiteData();
  return siteToMetadata(siteData);
}

export default async function Home() {
  const siteData = await getSiteData();
  const vis = siteData?.sectionVisibility;

  return (
    <div className="min-h-screen overflow-hidden">
      <Suspense>
        <HeaderSection archivesVisible={vis?.archives !== false} />
      </Suspense>
      <main className="mx-auto max-w-330 px-6 sm:px-10 lg:px-16">
        {vis?.hero !== false &&
          renderSection("hero", <HeroSkeleton />, <HeroSection />)}
        {vis?.now !== false &&
          renderSection("now", <NowSkeleton />, <NowSection />)}
        {vis?.capabilities !== false &&
          renderSection(
            "capabilities",
            <CapabilitiesSkeleton />,
            <CapabilitiesSection />,
          )}
        {vis?.experience !== false &&
          renderSection(
            "experience",
            <ExperienceSkeleton />,
            <ExperienceSection />,
          )}
        {vis?.showcase !== false &&
          renderSection("showcase", <ShowcaseSkeleton />, <ShowcaseSection />)}
        {vis?.lastSeen !== false &&
          renderSection(
            "last-seen",
            <LastSeenSkeleton />,
            <LastSeenSection />,
          )}
        {vis?.contact !== false &&
          renderSection("contact", <ContactSkeleton />, <ContactSection />)}
      </main>
      <Suspense>
        <FooterSection />
      </Suspense>
    </div>
  );
}
