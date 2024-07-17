import Image from "next/image";

export default function Book({
	name,
	image,
	affiliateLink,
}: {
	name: string;
	image: string;
	affiliateLink: string;
}) {
	return (
		<a
			href={affiliateLink}
			target="_blank"
			className="w-[200px] h-[270px] flex flex-col justify-center items-center gap-2.5 rounded-md cursor-pointer"
		>
			<div className="">
				<Image
					src={image}
					width={200}
					height={270}
					style={{
						width: "200px",
						height: "270px",
						borderRadius: "5px",
					}}
					loading="lazy"
					alt={name}
					className="duration-300 ease-in-out hover:scale-105"
				/>
			</div>
		</a>
	);
}
