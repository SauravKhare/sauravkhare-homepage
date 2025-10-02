import Link from "next/link";

import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Socials from "./Socials";
import { type Siteglobal } from "@/payload-types";
import HeaderBio from "./HeaderBio";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

interface HeaderSectionProps {
  data: Siteglobal["header"];
}

export default async function Header({ data }: HeaderSectionProps) {
  return (
    <>
      <header className="mb-6 md:mb-11">
        <Link href="/">
          <Heading
            headingLevel="h1"
            classname="font-space-grotesk font-bold text-5xl text-accent-red"
          >
            {data?.[0]?.heading}
          </Heading>
        </Link>
        <Paragraph classname="font-space-grotesk text-xl text-accent-yellow mb-3">
          {data?.[0]?.subHeading}
        </Paragraph>
      </header>
      <HeaderBio bio={data?.[0].bio as SerializedEditorState} />
      <Socials />
    </>
  );
}
