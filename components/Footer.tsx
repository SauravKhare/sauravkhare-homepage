import Link from "next/link";

import Paragraph from "./Paragraph";

export default function Footer() {
  return (
    <>
      <section className="">
        <div className="flex justify-center items-center text-center pb-20">
          <div className="w-0.5 h-0.5 mr-1.5 bg-gray-500"></div>
          <div className="w-0.5 h-0.5 mr-1.5 bg-gray-500"></div>
          <div className="w-0.5 h-0.5 mr-1.5 bg-gray-500"></div>
        </div>
      </section>
      <footer className="max-md:mx-6">
        <div className="flex justify-center pb-20">
          <div className="flex flex-col gap-4">
            <Paragraph classname="font-space-grotesk text-base font-normal text-gray-500 text-center">
              Code is Poetry.
            </Paragraph>
            <Paragraph classname="text-xs text-gray-700 text-center">
              Coded in
              {" "}
              <Link
                href="https://code.visualstudio.com/"
                className="hover:text-gray-400 duration-500"
                target="_blank"
              >
                Visual Studio Code
              </Link>
              . Built with
              {" "}
              <Link
                href="https://nextjs.org/"
                className="hover:text-gray-400 duration-500"
                target="_blank"
              >
                Next.js
              </Link>
              {" "}
              and
              {" "}
              <Link
                href="https://tailwindcss.com/"
                className="hover:text-gray-400 duration-500"
                target="_blank"
              >
                Tailwind CSS
              </Link>
              , deployed on
              {" "}
              <Link
                href="https://vercel.com/"
                className="hover:text-gray-400 duration-500"
                target="_blank"
              >
                Vercel
              </Link>
              .
            </Paragraph>
          </div>
        </div>
      </footer>
    </>
  );
}
