import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import LastSeen from "@/components/LastSeen";
import Paragraph from "@/components/Paragraph";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="bg-zinc-900 text-white font-inter">
      <Header />
      <section className="max-w-2xl mx-8 md:mx-auto pb-20">
        <div className="pb-6">
          <Heading
            classname="font-light italic text-2xl font-cormorant text-white"
            headingType="h1"
          >
            Saurav Khare
          </Heading>
        </div>
        <div className="intro__deskcription">
          <Paragraph classname="text-xl mb-4 md:w-55ch font-inter text-white">
            Computer Engineer/Frontend Developer. Primary tools are Javascript,
            ReactJS, and the React ecosystem.
          </Paragraph>
          <Paragraph classname="text-xl mb-4 md:w-55ch font-inter text-white">
            Also a cinephile who enjoys watching and analyzing films. Have a
            keen interest in cinema and love exploring the creative aspects of
            storytelling and visual art.
          </Paragraph>
          <Paragraph classname="text-xl mb-4 md:w-55ch font-inter text-white">
            Here is my{" "}
            <a
              href="/Saurav_Khare.pdf"
              className="text-yellow-100 duration-500 underline hover:text-yellow-400"
            >
              resume
            </a>{" "}
            if you want to read more.
          </Paragraph>
        </div>
      </section>

      <section className="pb-20 max-w-2xl mx-8 md:mx-auto">
        <div className="mb-4">
          <Heading
            headingType="h3"
            classname="font-normal text-base font-inter text-gray-500"
          >
            Now
          </Heading>
        </div>
        <div className="">
          <Paragraph classname="text-xl font-inter font-normal md:width-55ch text-white">
            Currently working as a Senior Systems Engineer at{" "}
            <a
              href="https://www.infosys.com"
              className="text-yellow-100 hover:text-yellow-400 underline"
            >
              Infosys
            </a>
            .
          </Paragraph>
        </div>
      </section>
      <section className="pb-20 max-w-2xl mx-8 md:mx-auto">
        <div className="mb-4">
          <Heading
            headingType="h3"
            classname="font-normal text-base font-inter text-gray-500"
          >
            Last Seen
          </Heading>
        </div>
        <div className="">
          <LastSeen />
        </div>
      </section>
      <section className="pb-20 max-w-2xl mx-8 md:mx-auto">
        <div className="mb-4">
          <Heading headingType="h3" classname="font-inter text-gray-500">
            Connect
          </Heading>
        </div>
        <div className="mb-12">
          <Paragraph classname="text-xl font-inter font-normal md:w-55ch text-white">
            Hey, if you want to chat, have a project or just curious about
            something I&apos;m just a ping away.
          </Paragraph>
        </div>
        <Socials />
      </section>
      <section className="max-w-2xl mx-8 md:mx-auto">
        <div className="flex justify-center items-center text-center pb-20">
          <div className="w-0.5 h-0.5 mr-1.5 bg-gray-500"></div>
          <div className="w-0.5 h-0.5 mr-1.5 bg-gray-500"></div>
          <div className="w-0.5 h-0.5 mr-1.5 bg-gray-500"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
