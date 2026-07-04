import Paragraph from "@/components/Paragraph";
import { RichText } from "@/components/RichText/RichText";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { getFooter, getSocials } from "@/fetchers/globals";
import { showThemeToggleButton } from "@/flags";
import ThemeToggle from "@/components/ThemeToggle";
import SocialIcon from "./SocialIcon";
import Link from "next/link";

export default async function Footer() {
  const footer = await getFooter();
  const footerEntry = footer?.[0];
  const footerHeading = footerEntry?.footerHeading;
  const footerDescription = footerEntry?.footerDescription;
  const themeToggleButtonVisible = await showThemeToggleButton();

  const socialPlatforms = await getSocials();

  return (
    <footer className="px-5 py-10 md:px-16 md:py-10 bg-dark-primary text-light-primary">
      <div className="bg-dark-primary text-center flex flex-col items-center mb-16">
        <p className="font-fraunces text-7xl mb-8 leading-28 font-medium tracking-[8px]">{footerHeading}</p>
        <span className="block bg-teal-primary/30 w-24 h-0.5"></span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div><p className="font-fraunces text-[40px] uppercase">Saurav Khare</p></div>
        <div>
          <ul className="flex gap-8">
            {socialPlatforms?.map((item) => (
              <Link
                key={item.id}
                href={item.platformUrl}
                target="_blank"
                className="text-light-primary transition-all duration-300 hover:-translate-y-1"
              >
                <SocialIcon
                  iconName={item.platformIcon || undefined}
                  size={20}
                  color="text-light-primary"
                />
              </Link>
            ))}
          </ul>
        </div>
        <p>{
          footerDescription && (<RichText data={footerDescription as SerializedEditorState} className="prose text-xs font-jakarta prose:text-dark-primary prose-a:no-underline prose-a:text-teal-primary prose-a:px-1 prose-a:-mx-1 prose-a:transition-none" />)
        }</p>
      </div>
    </footer>
  );
}
