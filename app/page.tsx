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
		<div className="">
			<Header />
			<section className="pb-20 max-md:mx-6">
				<div className="intro__deskcription">
					<Paragraph classname="text-xl mb-4 font-geist-sans text-white">
						I&apos;m an experienced frontend developer with a specialization in
						React and its broad ecosystem. Possessing a sharp eye for design and
						a talent for creating smooth user experiences, I excel at bringing
						concepts to life.
					</Paragraph>
					<Paragraph classname="text-xl mb-4 font-geist-sans text-white">
						Beyond my professional interests, I&apos;m a passionate movie buff.
						Discussing and dissecting films is a real joy for me, especially
						when it comes to exploring the artistry of visual storytelling.
					</Paragraph>
				</div>
			</section>

			<section className="pb-20 max-md:mx-6">
				<div className="mb-4">
					<Heading
						headingType="h3"
						classname="font-normal text-base font-geist-sans text-gray-500"
					>
						Now
					</Heading>
				</div>
				<div className="">
					<Paragraph classname="text-xl font-geist-sans font-normal text-white">
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
			<section className="pb-20 max-md:mx-6">
				<div className="mb-4">
					<Heading
						headingType="h3"
						classname="font-normal text-base font-geist-sans text-gray-500"
					>
						Experience
					</Heading>
				</div>
				<div className="">
					<Experience />
				</div>
			</section>
			<section className="pb-20 max-md:mx-6">
				<div className="mb-4">
					<Heading
						headingType="h3"
						classname="font-normal text-base font-geist-sans text-gray-500"
					>
						Showcase
					</Heading>
				</div>
				<div className="">
					<Showcase />
				</div>
			</section>
			<section className="pb-20 max-md:mx-6">
				<div className="mb-4">
					<Heading
						headingType="h3"
						classname="font-normal text-base font-geist-sans text-gray-500"
					>
						Last Seen
					</Heading>
				</div>
				<div className="">
					<LastSeen user="sauravkhare" type="movies" limit={3} />
				</div>
			</section>
			<section className="pb-20 max-md:mx-6">
				<div className="mb-4">
					<Heading headingType="h3" classname="font-geist-sans text-gray-500">
						Connect
					</Heading>
				</div>
				<div className="mb-8">
					<Paragraph classname="text-xl font-geist-sans font-normal text-white">
						Feel free to reach out if you&apos;d like to chat, have a project in
						mind, or if you&apos;re simply curious about something. I&apos;m
						just a message away!
					</Paragraph>
				</div>
				<Socials />
			</section>
			<section className="">
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
