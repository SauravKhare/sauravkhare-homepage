import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import LastSeen from "@/components/LastSeen";
import Paragraph from "@/components/Paragraph";
import Showcase from "@/components/Showcase";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="bg-zinc-900 text-white font-inter">
      <Header />
      <section className="max-w-2xl mx-8 md:mx-auto pb-20">
        <div className="pb-2">
          <Heading
            classname="font-light italic text-2xl font-cormorant text-white"
            headingType="h1"
          >
            Saurav Khare
          </Heading>
        </div>
        <div className="intro__deskcription">
          <Paragraph classname="text-xl mb-6 md:w-55ch font-inter text-white">
            Computer Engineer/Frontend Developer.
          </Paragraph>
          <Paragraph classname="text-xl mb-4 md:w-55ch font-inter text-white">
            A seasoned frontend developer specializing in the React framework
            and its extensive ecosystem. With a keen eye for design and a knack
            for crafting seamless user experiences, I effortlessly bring
            concepts to life.
          </Paragraph>
          <Paragraph classname="text-xl mb-4 md:w-55ch font-inter text-white">
            Also a cinema enthusiast who likes to see and discuss movies as
            well. enjoy studying the artistic elements of visual art and
            storytelling, and I have a deep passion for movies.
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
              className="text-yellow-100 duration-500 hover:text-yellow-400 underline"
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
            Experience
          </Heading>
        </div>
        <div className="">
          <Experience />
        </div>
      </section>
      <section className="pb-20 max-w-2xl mx-8 md:mx-auto">
        <div className="mb-4">
          <Heading
            headingType="h3"
            classname="font-normal text-base font-inter text-gray-500"
          >
            Showcase
          </Heading>
        </div>
        <div className="">
          <Showcase />
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
          <LastSeen user="sauravkhare" type="movies" limit={3} />
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
