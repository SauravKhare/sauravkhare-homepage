import Link from "next/link";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Socials from "./Socials";
import { calculateExperience } from "@/lib/utils";

export default function Header() {
	const startDate = new Date("2021-01-15");
	const { years, months } = calculateExperience(startDate);

	return (
		<>
			<header className="mb-6 md:mb-16">
				<Link href="/">
					<Heading
						classname="font-OPTI text-4xl text-red-700 mb-3"
						headingType="h1"
					>
						Saurav Khare
					</Heading>
				</Link>
				<Paragraph classname="text-base font-OPTI text-white mb-3">
					Frontend Engineer
				</Paragraph>
			</header>
			<Paragraph classname="text-lg mb-4 font-inter text-white/60">
				I&apos;m an experienced frontend developer with a specialization in
				React and its broad ecosystem, with a professional experience of{" "}
				<span>
					{years}
					{months <= 0 ? `+` : ``} {years === 1 ? `year` : `years`}
					{months > 0 && ` and ${months} ${months === 1 ? "month" : "months"}`}
				</span>
				. Possessing a sharp eye for design and a talent for creating smooth
				user experiences, I excel at bringing concepts to life.
			</Paragraph>
			<Paragraph classname="text-lg mb-4 font-inter text-white/60">
				Beyond my professional interests, I&apos;m a passionate movie buff.
				Discussing and dissecting films is a real joy for me, especially when it
				comes to exploring the artistry of visual storytelling.
			</Paragraph>
			<Socials />
		</>
	);
}

export async function getServerSideProps() {
	const startDate = new Date("2021-01-15");
	const { years, months } = calculateExperience(startDate);

	return {
		props: {
			experienceYears: years,
			experienceMonths: months,
		},
	};
}
