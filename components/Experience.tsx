import { ExperienceItems } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/card";

export default function Experience() {
	return (
		<div className="flex flex-col mt-6">
			{ExperienceItems.map((item, i) => (
				<Card key={item.id} className="mb-12 bg-transparent border-none">
					<CardHeader className={`pl-0 ${i === 0 ? `pt-0` : ``} mb-3`}>
						<CardTitle className="font-OPTI text-white">
							{item.position} <p className="inline-block mx-1">•</p>
							<Link
								href={item.company_link}
								className=" hover:text-yellow-500 duration-500"
								target="_blank"
							>
								{item.company}
							</Link>
						</CardTitle>
						<CardDescription className="flex gap-2 items-center text-zinc-500">
							{item.start_date} – {item.isCurrent ? `Present` : item.end_date}
						</CardDescription>
					</CardHeader>
					{item.description && (
						<CardContent className="text-zinc-500">
							<p>{item.description}</p>
						</CardContent>
					)}

					<CardFooter className="flex flex-wrap gap-1 mt-3">
						{item.tech.map((techItem) => (
							<Badge
								key={techItem}
								variant="outline"
								className="text-white/40 font-geist-mono bg-zinc-800 px-3 border-zinc-900 border-2"
							>
								{techItem}
							</Badge>
						))}
					</CardFooter>
				</Card>
			))}
			<Link
				href="/Saurav_Khare_Resume_A.pdf"
				className="text-base font-geist-sans text-white/80 duration-500 hover:underline hover:text-yellow-400 flex hover:gap-2 items-center"
			>
				View full Résumé.
				<Image src="./arrow.svg" alt="arrow" width={20} height={20} />
			</Link>
		</div>
	);
}
