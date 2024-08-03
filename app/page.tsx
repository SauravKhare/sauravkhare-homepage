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
			<section className="max-w-[50rem] md:mx-auto pl-8 pr-8 pb-10 pt-10 max-md:mx-3 mb-14 border-l border-r border-dark relative">
				<div className="intro__deskcription">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="absolute top-[-0.7rem] left-[-0.6rem]"
						width="20"
						height="21"
						viewBox="0 0 20 21"
						fill="none"
						stroke="currentColor"
					>
						<path d="M10 0.332031V20.332"></path>
						<path d="M0 10.332L20 10.332"></path>
					</svg>
					<Paragraph classname="text-lg mb-4 font-inter text-white/60">
						I&apos;m an experienced frontend developer with a specialization in
						React and its broad ecosystem. Possessing a sharp eye for design and
						a talent for creating smooth user experiences, I excel at bringing
						concepts to life.
					</Paragraph>
					<Paragraph classname="text-lg mb-4 font-inter text-white/60">
						Beyond my professional interests, I&apos;m a passionate movie buff.
						Discussing and dissecting films is a real joy for me, especially
						when it comes to exploring the artistry of visual storytelling.
					</Paragraph>
				</div>
			</section>

			<section className="max-w-[50rem] md:mx-auto max-md:mx-3 pl-8 pr-8 pb-10 pt-10 mb-14 border-l border-r border-dark relative">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute top-[-0.7rem] left-[-0.6rem]"
					width="20"
					height="21"
					viewBox="0 0 20 21"
					fill="none"
					stroke="currentColor"
				>
					<path d="M10 0.332031V20.332"></path>
					<path d="M0 10.332L20 10.332"></path>
				</svg>
				<div className="mb-4">
					<Heading
						headingType="h3"
						classname="font-normal text-base font-OPTI text-yellow-500"
					>
						Now
					</Heading>
				</div>
				<div className="">
					<Paragraph classname="text-lg font-inter font-normal text-white/60">
						Currently working as a Senior Experience Engineer at{" "}
						<a
							href="https://www.publicissapient.com/"
							className="duration-500 hover:text-yellow-500 underline"
						>
							Publicis Sapient
						</a>
						.
					</Paragraph>
				</div>
			</section>
			<section className="max-w-[50rem] md:mx-auto pl-8 pr-8 pb-10 pt-10 mb-14 max-md:mx-3 border-l border-dark relative">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute top-[-0.7rem] left-[-0.6rem]"
					width="20"
					height="21"
					viewBox="0 0 20 21"
					fill="none"
					stroke="currentColor"
				>
					<path d="M10 0.332031V20.332"></path>
					<path d="M0 10.332L20 10.332"></path>
				</svg>
				<div className="mb-4">
					<Heading
						headingType="h3"
						classname="font-normal text-base font-OPTI text-yellow-500 mb-12"
					>
						Experience
					</Heading>
				</div>
				<div className="">
					<Experience />
				</div>
			</section>
			<section className="max-w-[50rem] md:mx-auto max-md:mx-3 pl-8 pr-8 pb-10 pt-10 mb-14 border-l border-r border-dark relative">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute top-[-0.7rem] left-[-0.6rem]"
					width="20"
					height="21"
					viewBox="0 0 20 21"
					fill="none"
					stroke="currentColor"
				>
					<path d="M10 0.332031V20.332"></path>
					<path d="M0 10.332L20 10.332"></path>
				</svg>
				<div className="mb-4">
					<Heading
						headingType="h3"
						classname="font-normal text-base font-OPTI text-yellow-500 mb-12"
					>
						Showcase
					</Heading>
				</div>
				<div className="">
					<Showcase />
				</div>
			</section>
			<section className="max-w-[50rem] md:mx-auto max-md:mx-3 pl-8 pr-8 pb-10 pt-10 mb-14 border-l border-r border-dark relative">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute top-[-0.7rem] left-[-0.6rem]"
					width="20"
					height="21"
					viewBox="0 0 20 21"
					fill="none"
					stroke="currentColor"
				>
					<path d="M10 0.332031V20.332"></path>
					<path d="M0 10.332L20 10.332"></path>
				</svg>
				<div className="mb-4">
					<Heading
						headingType="h3"
						classname="font-normal text-base font-OPTI text-yellow-500"
					>
						Last Seen
					</Heading>
				</div>
				<div className="">
					<LastSeen user="sauravkhare" type="movies" limit={3} />
				</div>
			</section>
			<section className="max-w-[50rem] md:mx-auto max-md:mx-3 pl-8 pr-8 pt-10 pb-10 mb-10 border-l border-r border-dark relative">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute top-[-0.7rem] left-[-0.6rem]"
					width="20"
					height="21"
					viewBox="0 0 20 21"
					fill="none"
					stroke="currentColor"
				>
					<path d="M10 0.332031V20.332"></path>
					<path d="M0 10.332L20 10.332"></path>
				</svg>
				<div className="mb-4">
					<Heading headingType="h3" classname="font-OPTI text-yellow-500">
						Connect
					</Heading>
				</div>
				<div className="mb-8">
					<Paragraph classname="text-xl font-inter font-normal text-white/80">
						Feel free to reach out if you&apos;d like to chat, have a project in
						mind, or if you&apos;re simply curious about something. I&apos;m
						just a message away!
					</Paragraph>
				</div>
				<Socials />
			</section>
		</div>
	);
}
