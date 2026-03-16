import Paragraph from "@/components/Paragraph";
import { RichText } from "@/components/RichText/RichText";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { getFooter } from "@/fetchers/globals";
import { showThemeToggleButton } from "@/flags";
import ThemeToggle from "@/components/ThemeToggle";

export default async function Footer() {
  const footer = await getFooter();
  const footerEntry = footer?.[0];
  const footerHeading = footerEntry?.footerHeading;
  const footerDescription = footerEntry?.footerDescription;
  const themeToggleButtonVisible = await showThemeToggleButton();

  return (
    <>
      <section className="">
        <div className="flex justify-center items-center text-center pb-6">
          <div className="text-accent tracking-[1em]">*</div>
          <div className="text-accent tracking-[1em]">*</div>
          <div className="text-accent tracking-[1em]">*</div>
        </div>
      </section>
      <footer className="max-md:mx-6">
        <div className="flex justify-center flex-col items-center pb-24">
          <div className="flex flex-col gap-4 mb-4">
            {
              footerHeading && (<Paragraph classname="text-sm font-heading text-accent font-bold text-center tracking-[0.2em] mb-16">{footerHeading}</Paragraph>)
            }
            {
              footerDescription && (<RichText data={footerDescription as SerializedEditorState} className="prose text-xs font-mono text-ink text-center prose-a:no-underline prose-a:text-ink prose-a:px-1 prose-a:-mx-1 prose-a:transition-none prose-a:hover:bg-ink prose-a:hover:text-canvas" />)
            }
          </div>
          {themeToggleButtonVisible && <ThemeToggle />}
        </div>
      </footer>
    </>
  );
}
