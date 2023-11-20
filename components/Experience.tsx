import { ExperienceItems } from "@/constants";
import Paragraph from "./Paragraph";
import Link from "next/link";
import Image from "next/image";

export default function Experience() {
	return (
		<div className="flex flex-col">
			{ExperienceItems.map((item) => (
				<div
					key={item.id}
					className="flex flex-col w-full min-h-60 bg-zinc-800 rounded-xl p-5 shrink-0 shadow-xl mb-4"
				>
					<div className="flex flex-col">
						<h4 className="text-lg font-semibold duration-500 flex items-center gap-2">
							{item.position} <span className="text-xs">•</span>{" "}
							<Link
								href={item.company_link}
								className="hover:text-yellow-400 duration-500"
								target="_blank"
							>
								{item.company}
							</Link>
						</h4>
						<p className="text-sm text-zinc-500 md:w-3/12 block">
							{item.start_date} – {item.isCurrent ? `Present` : item.end_date}
						</p>
						<p className="text-zinc-400 mb-8 mt-4">{item.description}</p>
						<div className="flex flex-wrap gap-2">
							{item.tech.map((techItem) => (
								<span
									key={techItem}
									className="rounded-full bg-zinc-700 px-3 border-gray-600 border"
								>
									{techItem}
								</span>
							))}
						</div>
					</div>
				</div>
			))}
			<Link
				href="/Saurav_Khare_Resume.pdf"
				className="text-base mb-4 font-geist-sans text-white duration-500 hover:underline hover:text-yellow-400 flex hover:gap-2 items-center"
			>
				View full Résumé.
				<Image src="./arrow.svg" alt="arrow" width={20} height={20} />
			</Link>
		</div>
	);
}
