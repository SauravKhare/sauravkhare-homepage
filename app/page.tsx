import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LastSeen from "@/components/LastSeen";
import Paragraph from "@/components/Paragraph";
import SectionContainer from "@/components/SectionContainer";
import Showcase from "@/components/Showcase";

export default function Home() {
	return (
		<div className="flex justify-between flex-col md:flex-row">
			<div className="md:sticky md:top-0 md:flex md:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between pt-16">
				<Header />
			</div>
			<div className="md:w-1/2 pt-16 md:pl-8">
				<SectionContainer title="Now">
					<Paragraph classname="font-inter font-normal text-white/60">
						Currently working as a Senior Experience Engineer at{" "}
						<a
							href="https://www.publicissapient.com/"
							className="duration-500 hover:text-yellow-500 underline"
						>
							Publicis Sapient
						</a>
					</Paragraph>
				</SectionContainer>
				<SectionContainer title="Experience">
					<Experience />
				</SectionContainer>
				<SectionContainer title="Showcase">
					<Showcase />
				</SectionContainer>
				<SectionContainer title="Last Seen">
					<LastSeen user="sauravkhare" type="movies" limit={3} />
				</SectionContainer>
				<Footer />
			</div>
		</div>
	);
}
