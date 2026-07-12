import { Suspense } from "react";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LastSeen from "@/components/LastSeen";
import Showcase from "@/components/Showcase";
import LastSeenLoader from "@/components/LastSeenLoader";

import { getExperiences } from "@/fetchers/experiences";
import { getProjects } from "@/fetchers/projects";
import { getArchives, getHeader, getNow, getSeoData } from "@/fetchers/globals";
import { Metadata } from "next";
import TimeMachine from "@/components/TimeMachine";
import Hero from "@/components/Hero";
import { getTechnologies } from "@/fetchers/technologies";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoData();
  const title = site?.title || "Saurav Khare";
  const description = site?.description || "Frontend Engineer";
  const ogTitle = site?.ogTitle || title;
  const ogDescription = site?.ogDescription || description;
  const ogImage = site?.ogImage && typeof site.ogImage === "object"
    ? site.ogImage.url
    : null;

  return {
    title,
    description,
    keywords: site?.keywords?.split(",")?.map(k => k.trim()),

    openGraph: {
      type: "website",
      locale: "en_US",
      url: site?.canonicalUrl || "https://sauravkhare.com",
      siteName: title || "Saurav Khare",
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [{
        url: ogImage,
        width: 1200,
        height: 630,
        alt: ogTitle,
      }] : [],
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

export default async function Home() {

  const [header, experience, projects, now, tech, archives] = await Promise.all([
    getHeader(),
    getExperiences(),
    getProjects(),
    getNow(),
    getTechnologies(),
    getArchives(),
  ]);

  return (
    <>
      <Hero data={header} />
      {/* <section className="bg-dark-primary px-6 md:px-16 py-20 flex flex-col xl:flex-row justify-between items-start gap-8 md:max-w-360 md:mx-auto" id="phy">
        <div className=""><p className="text-sm text-teal-primary font-jakarta uppercase">01. PHILOSOPHY</p></div>
        <div>
          <p className="w-189.25 text-light-primary font-fraunces text-[40px] font-medium leading-12 mb-6">"Software is an editorial endeavor; every
            line of code is a choice in clarity, intent,
            and structural integrity."</p>
          <p className="w-174.75 text-light-primary font-jakarta text-[16px] mb-6 leading-6">I approach frontend engineering not just as a technical task, but as an exercise in design
            execution. With a deep appreciation for typography, whitespace, and subtle interactions,
            I build interfaces that feel luxurious, responsive, and timelessly polished.</p>
          <p className="w-174.75 text-light-primary font-jakarta mb-6 text-[16px] leading-6">Over the years, I've honed my craft across various stacks, always prioritizing user
            experience and architectural elegance over fleeting technological trends.</p>
        </div>

      </section> */}
      {/* <div className="mb-32 max-xl:px-6">
        <Header data={header} />
      </div> */}
      {/* <>
        <section className="flex justify-between bg-dark-primary px-6 md:px-16 py-20 md:max-w-360 md:mx-auto">
          <p className="text-sm text-teal-primary font-jakarta uppercase mb-4">03. NOW</p>
          <p className="text-light-primary text-[18px] font-jakarta">{now?.[0]?.nowCompanyDescription}{" "}
            <a href={now?.[0]?.nowCompanyLink ?? ""} className="f" target="_blank" rel="noopener noreferrer">{now?.[0]?.nowCompanyName}</a></p>
        </section>
        <Experience data={experience ?? undefined} technologies={tech ?? undefined} />
        <Showcase data={projects ?? undefined} descriptionItalics />
        <Suspense fallback={<LastSeenLoader limit={6} />}>
          <LastSeen user="sauravkhare" type="movies" limit={6} />
        </Suspense>

        <Footer />
      </> */}
    </>
  );
}
