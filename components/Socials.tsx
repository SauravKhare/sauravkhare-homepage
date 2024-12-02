import { Connect } from "@/constants";
import Link from "next/link";
import Image from "next/image";

export default function Socials() {
	return (
		<div className="flex gap-5 align-middle flex-wrap">
			{Connect.map((item) => (
				<Link key={item.name} href={item.value} target="_blank">
					<Image src={item.image} width={28} height={28} alt={item.name} />
				</Link>
			))}
		</div>
	);
}
