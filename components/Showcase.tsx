import Paragraph from "./Paragraph";
import Link from "next/link";
import { Projects } from "@/constants";
import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/card";
import { Badge } from "@/components/badge";

export default function Showcase() {
	return (
		<Carousel opts={{ align: "start" }}>
			<CarouselContent>
				{Projects.map((item) => (
					<CarouselItem key={item.name} className="basis-10/12">
						<Card className="bg-zinc-800/50 h-full border-none shadow-xl">
							<CardHeader>
								<CardTitle>
									<Link
										href={item.link}
										target="_blank"
										className="font-OPTI text-white duration-500 hover:text-yellow-500"
									>
										{item.name}
									</Link>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<Paragraph classname="font-geist-sans font-normal text-zinc-500 mt-5">
									{item.description}
								</Paragraph>
							</CardContent>
							<CardFooter className="mt-auto flex flex-wrap">
								{item.tech.map((a) => (
									<Badge
										key={a}
										className="text-white/40 font-geist-mono bg-zinc-800 px-3 border-zinc-900 border-2 mr-1"
									>
										{a}
									</Badge>
								))}
							</CardFooter>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
