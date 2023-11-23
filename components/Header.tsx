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
					<nav className="font-geist-sans text-base text-white/80">
						<Link
							href="/blog"
							className="duration-500 hover:text-yellow-400 border-b-2 border-white hover:border-yellow-400"
						>
							/Blog
						</Link>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
