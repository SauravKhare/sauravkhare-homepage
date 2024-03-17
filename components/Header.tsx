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
									classname="font-OPTI text-4xl mb-2 text-red-700"
									headingType="h1"
								>
									Saurav Khare
								</Heading>
							</div>
						</Link>
						<Paragraph classname="text-base font-OPTI text-white">
							Computer Engineer/Frontend Developer.
						</Paragraph>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
