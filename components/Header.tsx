import Link from "next/link";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Socials from "./Socials";

export default function Header() {
	return (
		<>
			<header className="">
				<div className="max-w-[50rem] md:mx-auto  flex justify-between items-center">
					<div className="">
						<Link href="/">
							<div className="">
								<Heading
									classname="font-OPTI text-4xl text-red-700 mb-3"
									headingType="h1"
								>
									Saurav Khare
								</Heading>
							</div>
						</Link>
						<Paragraph classname="text-base font-OPTI text-white mb-3">
							Frontend Engineer.
						</Paragraph>
					</div>
				</div>
				<Paragraph classname="text-lg mb-4 font-inter text-white/60">
					I&apos;m an experienced frontend developer with a specialization in
					React and its broad ecosystem. Possessing a sharp eye for design and a
					talent for creating smooth user experiences, I excel at bringing
					concepts to life.
				</Paragraph>
				<Paragraph classname="text-lg mb-4 font-inter text-white/60">
					Beyond my professional interests, I&apos;m a passionate movie buff.
					Discussing and dissecting films is a real joy for me, especially when
					it comes to exploring the artistry of visual storytelling.
				</Paragraph>
				<Socials />
			</header>
		</>
	);
}
