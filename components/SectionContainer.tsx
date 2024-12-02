import { cn } from "@/lib/utils";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

export default function SectionContainer({
	children,
	title,
	subtitle,
	classname,
}: any) {
	return (
		<section className={cn(`mb-16 ${classname}`)}>
			<Heading
				headingType="h4"
				classname="mb-1 font-normal text-lg font-OPTI text-yellow-500"
			>
				{title}
			</Heading>
			{subtitle && <Paragraph classname="mb-3">{subtitle}</Paragraph>}
			{children}
		</section>
	);
}
