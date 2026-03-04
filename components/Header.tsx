import Link from "next/link";

import { type Siteglobal } from "@/payload-types";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import Heading from "@/components/Heading";
import Socials from "@/components/Socials";
import SubHeading from "@/components/SubHeading";
import HeaderBio from "@/components/HeaderBio";
interface HeaderSectionProps {
  data: Siteglobal["header"];
}

export default async function Header({ data }: HeaderSectionProps) {
  return (
    <section className="">
      <header className="flex items-center justify-between mb-16">
        <div className="flex-col">
          <Link href="/">
            <Heading
              headingLevel="h1"
              classname="font-heading font-bold leading-none text-5xl md:text-6xl text-accent"
            >
              {data?.[0]?.heading}
            </Heading>
          </Link>
          <SubHeading data={data?.[0]?.subHeading} />
        </div>
      </header>
      <HeaderBio bio={data?.[0].bio as SerializedEditorState} className="mb-4" />
      <Socials />
    </section>
  );
}
