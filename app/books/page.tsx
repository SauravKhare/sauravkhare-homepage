import Paragraph from "@/components/Paragraph";
import BooksRack from "@/components/BooksRack";

export default function Books() {
	return (
		<section className="max-w-[50rem] md:mx-auto pb-20">
			<Paragraph classname="text-lg mt-12 mb-4 font-inter text-white/60 pb-20">
				Below is a list of all the books I have read so far. I will update this
				list as soon as I finish reading my next book.
			</Paragraph>
			<BooksRack />
		</section>
	);
}
