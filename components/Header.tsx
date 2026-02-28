import Link from "next/link";

import Heading from "./Heading";
import Socials from "./Socials";
import { type Siteglobal } from "@/payload-types";
import HeaderBio from "./HeaderBio";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import SubHeading from "./SubHeading";
import ThemeToggle from "./ThemeToggle";

interface HeaderSectionProps {
  data: Siteglobal["header"];
}

export default async function Header({ data }: HeaderSectionProps) {
  return (
    <>
      <header className="flex items-center justify-between mb-16">
        <div className="flex-col">
          <Link href="/">
            <Heading
              headingLevel="h1"
              classname="font-heading font-bold leading-none text-6xl text-accent"
            >
              {data?.[0]?.heading}
            </Heading>
          </Link>
          <SubHeading data={data?.[0]?.subHeading} />
        </div>
        <ThemeToggle />
      </header>
      <HeaderBio bio={data?.[0].bio as SerializedEditorState} className="mb-4" />
      <Socials />
    </>
  );
}
