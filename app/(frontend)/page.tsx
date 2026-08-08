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
import Hero from "@/components/Hero";
import { getTechnologies } from "@/fetchers/technologies";
import { SubContext } from "@/components/SubContext";

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
      <SubContext />
      {/* <div className="mb-32 max-xl:px-6">
        <Header data={header} />
      </div> */}
      <>
        {/* <section className="flex flex-col xl:flex-row justify-between bg-dark-primary px-6 md:px-16 py-20 md:max-w-360 md:mx-auto">
          <p className="text-sm text-teal-primary font-jakarta uppercase mb-4">03. NOW</p>
          <p className="text-light-primary text-[18px] font-jakarta">{now?.[0]?.nowCompanyDescription}{" "}
            <a href={now?.[0]?.nowCompanyLink ?? ""} className="f" target="_blank" rel="noopener noreferrer">{now?.[0]?.nowCompanyName}</a></p>
        </section> */}
        <Showcase data={projects ?? undefined} descriptionItalics />
        <Experience data={experience ?? undefined} technologies={tech ?? undefined} />
        {/* <Suspense fallback={<LastSeenLoader limit={4} />}>
          <LastSeen user="sauravkhare" type="movies" limit={4} />
        </Suspense> */}
        <Footer />
      </>
    </>
  );
}
