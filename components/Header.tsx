import Link from "next/link";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

export default function Header() {
	return (
		<>
			<header className="py-5 max-md:px-8 max-md:pl-8 border-b border-dark">
				<div className="max-w-[50rem] md:mx-auto  flex justify-between items-center">
					<div className="">
						<Link href="/">
							<div className="">
								<Heading
									classname="font-OPTI text-4xl text-red-700"
									headingType="h1"
								>
									Saurav Khare
								</Heading>
							</div>
						</Link>
						{/* <Paragraph classname="text-base font-OPTI text-white">
							Computer Engineer/Frontend Developer.
						</Paragraph> */}
					</div>
				</div>
			</header>
		</>
	);
}
