import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LastSeen from "@/components/LastSeen";
import Paragraph from "@/components/Paragraph";
import SectionContainer from "@/components/SectionContainer";
import Showcase from "@/components/Showcase";
import { getExperiences } from "@/fetchers/experiences";
import { getProjects } from "@/fetchers/projects";
import { getHeader, getNow } from "@/fetchers/globals";
import { unstable_cache } from "next/cache";
import { Suspense } from "react";
import LastSeenLoader from "@/components/LastSeenLoader";
import { showProjects, showLastSeen } from "@/flags";

export default async function Home() {
  const projectsVisible = await showProjects();
  const lastSeenVisible = await showLastSeen();

  const [header, experience, projects, now] = await Promise.all([
    unstable_cache(getHeader, ["getHeader"], { tags: ["header"] })(),
    unstable_cache(getExperiences, ["getExperiences"], { tags: ["experiences"] })(),
    unstable_cache(getProjects, ["getProjects"], { tags: ["projects"] })(),
    unstable_cache(getNow, ["getNow"], { tags: ["now"] })(),
  ]);

  return (
    <div className="flex justify-between flex-col md:flex-row gap-10">
      <div className="md:sticky md:top-0 md:max-h-screen lg:w-1/2 md:flex-col md:pt-16">
        <Header data={header} />
      </div>
      <div className="md:w-1/2 pt-16">
        <SectionContainer title="Now">
          <Paragraph classname="font-inter font-normal text-primary-text">
            {now?.[0]?.nowCompanyDescription}{" "}
            <a href={now?.[0]?.nowCompanyLink ?? ""} className="duration-500 hover:text-yellow-500 underline" target="_blank" rel="noopener noreferrer">{now?.[0]?.nowCompanyName}</a>
          </Paragraph>
        </SectionContainer>
        <SectionContainer title="Experience">
          <Experience data={experience} />
        </SectionContainer>
        {
          projectsVisible ? (<SectionContainer title="Showcase">
            <Showcase data={projects} />
          </SectionContainer>) : <></>
        }
        {
          lastSeenVisible ? (<SectionContainer title="Last Seen">
            <Suspense fallback={<LastSeenLoader limit={4} />}>
              <LastSeen user="sauravkhare" type="movies" limit={4} />
            </Suspense>
          </SectionContainer>) : <></>
        }
        <Footer />
      </div>
    </div>
  );
}
