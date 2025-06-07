import Link from "next/link";

import { calculateExperience } from "@/lib/utils";

import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Socials from "./Socials";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function Header() {
  const payload = await getPayload({ config: configPromise });
  const headerData = (await payload.findGlobal({ slug: "siteglobal" })).header;


  const startDate = new Date("2021-01-15");
  const { years, months } = calculateExperience(startDate);

  return (
    <>
      <header className="mb-6 md:mb-11">
        <Link href="/">
          <Heading
            headingLevel="h1"
            classname="font-space-grotesk font-bold text-5xl text-accent-red"
          >
            {headerData && headerData[0].heading}
          </Heading>
        </Link>
        <Paragraph classname="font-space-grotesk text-xl text-accent-orange mb-3">
          {headerData && headerData[0].subHeading}
        </Paragraph>
      </header>
      <Paragraph classname="text-lg mb-4 font-inter text-primary-text">
        I&apos;m an experienced frontend developer with a specialization in
        React and its broad ecosystem, with a professional experience of{" "}
        <span>
          {years}
          {months <= 0 ? `+` : ``} {years === 1 ? `year` : `years`}
          {months > 0 && ` and ${months} ${months === 1 ? "month" : "months"}`}
        </span>
        . Possessing a sharp eye for design and a talent for creating smooth
        user experiences, I excel at bringing concepts to life.
      </Paragraph>
      <Paragraph classname="text-lg mb-4 font-inter text-primary-text">
        Beyond my professional interests, I&apos;m a passionate movie buff.
        Discussing and dissecting films is a real joy for me, especially when it
        comes to exploring the artistry of visual storytelling.
      </Paragraph>
      <Socials />
    </>
  );
}

export async function getServerSideProps() {
  const startDate = new Date("2021-01-15");
  const { years, months } = calculateExperience(startDate);

  return {
    props: {
      experienceYears: years,
      experienceMonths: months,
    },
  };
}
