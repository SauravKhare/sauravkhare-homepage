import { Suspense } from "react";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LastSeen from "@/components/LastSeen";
import Paragraph from "@/components/Paragraph";
import SectionContainer from "@/components/SectionContainer";
import Showcase from "@/components/Showcase";
import LastSeenLoader from "@/components/LastSeenLoader";

import { getExperiences } from "@/fetchers/experiences";
import { getProjects } from "@/fetchers/projects";
import { getArchives, getHeader, getNow, getSeoData } from "@/fetchers/globals";
import { showProjects, showLastSeen, showArchiveTimeMachineButton } from "@/flags";
import { Metadata } from "next";
import TimeMachine from "@/components/TimeMachine";

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
    keywords: site?.keywords?.split(",").map(k => k.trim()),

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
  const projectsVisible = await showProjects();
  const lastSeenVisible = await showLastSeen();
  const archiveButtonVisible = await showArchiveTimeMachineButton();

  const [header, experience, projects, now, archives] = await Promise.all([
    getHeader(),
    getExperiences(),
    getProjects(),
    getNow(),
    getArchives(),
  ]);

  return (
    <>
      <div className="mb-32 max-xl:px-6">
        <Header data={header} />
      </div>
      <>
        <SectionContainer title="Now" className="max-xl:px-6">
          <Paragraph classname="font-body text-lg text-ink">
            {now?.[0]?.nowCompanyDescription}{" "}
            <a href={now?.[0]?.nowCompanyLink ?? ""} className="font-body italic link-wet-ink" target="_blank" rel="noopener noreferrer">{now?.[0]?.nowCompanyName}</a>
          </Paragraph>
        </SectionContainer>
        <SectionContainer title="Experience" className="max-xl:px-6">
          <Experience data={experience ?? undefined} />
        </SectionContainer>
        {projectsVisible && (
          <SectionContainer title="Showcase" className="max-xl:px-6">
            <Showcase data={projects ?? undefined} descriptionItalics />
          </SectionContainer>
        )}
        {lastSeenVisible && (
          <SectionContainer title="Last Seen" className="max-xl:px-6">
            <Suspense fallback={<LastSeenLoader limit={4} />}>
              <LastSeen user="sauravkhare" type="movies" limit={4} />
            </Suspense>
          </SectionContainer>
        )}
        <div className="max-xl:px-6">
          <Footer />
          {
            archiveButtonVisible && <TimeMachine records={archives} />
          }
        </div>
      </>
    </>
  );
}
