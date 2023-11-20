"use client";

import { useRef, useState } from "react";
import Paragraph from "./Paragraph";
import Link from "next/link";
import { Projects } from "@/constants";

export default function Showcase() {
	const containerDiv = useRef<HTMLDivElement>(null);

	const [isDown, setIsDown] = useState(false);
	const mouseCords = useRef({
		startX: 0,
		scrollLeft: 0,
	});

	const handleDragStart = (e: React.MouseEvent) => {
		if (!containerDiv.current) return;
		const startX = e.pageX - containerDiv.current["offsetLeft"];
		const scrollLeft = containerDiv.current["scrollLeft"];
		mouseCords.current = { startX, scrollLeft };
		setIsDown(true);
	};

	const handleDrag = (e: React.MouseEvent) => {
		if (!isDown || !containerDiv.current) return;
		e.preventDefault();
		const x = e.pageX - containerDiv.current["offsetLeft"];
		const walkX = (x - mouseCords.current.startX) * 1.5;
		containerDiv.current["scrollLeft"] =
			mouseCords.current["scrollLeft"] - walkX;
	};
	const handleDragEnd = () => {
		setIsDown(false);
		if (!containerDiv.current) return;
	};

	return (
		<div
			ref={containerDiv}
			onMouseDown={handleDragStart}
			onMouseUp={handleDragEnd}
			onMouseMove={handleDrag}
			className="flex gap-4 no-scrollbar overflow-auto cursor-grab"
		>
			{Projects.map((item) => (
				<div
					className="flex flex-col w-3/4 h-60 bg-zinc-800 rounded-xl p-5 shrink-0 shadow-xl"
					key={item.name}
				>
					<Link
						href={item.link}
						target="_blank"
						className="font-semibold duration-500 hover:text-yellow-400"
					>
						{item.name}
					</Link>
					<Paragraph classname="font-geist-sans font-normal text-zinc-500 mt-5">
						{item.description}
					</Paragraph>
					<div className="font-geist-sans mt-auto flex flex-wrap">
						{item.tech.map((a) => (
							<span
								key={a}
								className="rounded-full bg-zinc-700 px-3 mx-1 border-gray-600 border font-normal text-xs"
							>
								{a}
							</span>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
