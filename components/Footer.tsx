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
        <div className="flex justify-center items-center text-center pb-20">
          <div className="w-0.5 h-0.5 mr-1.5 bg-gray-500"></div>
          <div className="w-0.5 h-0.5 mr-1.5 bg-gray-500"></div>
          <div className="w-0.5 h-0.5 mr-1.5 bg-gray-500"></div>
        </div>
      </section>
      <footer className="max-md:mx-6 font-inter">
        <div className="flex justify-center pb-20">
          <div className="flex flex-col gap-4">
            <Paragraph classname="font-space-grotesk text-base font-normal text-gray-500 text-center">
              {footerHeading}
            </Paragraph>
            <RichText data={footerDescription as SerializedEditorState} className="prose text-xs text-gray-700 text-center prose-a:no-underline prose-a:text-gray-700 prose-a:hover:text-gray-400 prose-a:duration-500" />
          </div>
        </div>
      </footer>
    </>
  );
}
