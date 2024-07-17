import { BooksData } from "@/constants";
import Book from "@/components/Book";

export default function Books() {
	return (
		<div className="flex flex-wrap justify-center content-center md:justify-normal md:items-baseline gap-9 pb-20">
			{BooksData.map((book) => (
				<Book
					key={book.name}
					name={book.name}
					image={book.image}
					affiliateLink={book.affiliateLink}
				/>
			))}
		</div>
	);
}
