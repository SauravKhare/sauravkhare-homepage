import Paragraph from "./Paragraph";
import { RichText } from "./RichText/RichText";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { getFooter } from "@/fetchers/globals";

export default async function Footer() {
  const footer = await getFooter();
  const footerHeading = footer?.[0].footerHeading;
  const footerDescription = footer?.[0].footerDescription;

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
        <div className="flex justify-center pb-24">
          <div className="flex flex-col gap-4">
            <Paragraph classname="text-sm font-heading text-accent font-bold text-center tracking-[0.2em] mb-16">
              {footerHeading}
            </Paragraph>
            <RichText data={footerDescription as SerializedEditorState} className="prose text-xs font-mono text-ink text-center prose-a:no-underline prose-a:text-ink prose-a:px-1 prose-a:-mx-1 prose-a:transition-none prose-a:hover:bg-ink prose-a:hover:text-canvas" />
          </div>
        </div>
      </footer>
    </>
  );
}
