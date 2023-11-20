import Link from "next/link";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Header = (): React.ReactElement => {
	return (
		<>
			<header className="py-11 max-md:mx-6">
				<div className="flex justify-between items-center">
					<div className="">
						<Link href="/">
							<div className="">
								<Heading
									classname="font-light italic text-4xl font-cormorant text-white mb-2"
									headingType="h1"
								>
									Saurav Khare
								</Heading>
							</div>
						</Link>
						<Paragraph classname="text-base font-geist-sans text-white/80">
							Computer Engineer/Frontend Developer.
						</Paragraph>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
