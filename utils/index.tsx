import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function readTimeCalculator(content: any) {
	const WPS = 275 / 60;
	let images = 0;
	const regex = /\w/;

	let words = content.split(" ").filter((word: any) => {
		if (word.includes("<img")) {
			images += 1;
		}
		return regex.test(word);
	}).length;

	let imageAdjust = images * 4;
	let imageSecs = 0;
	let imageFactor = 12;

	while (images) {
		imageSecs += imageFactor;
		if (imageFactor > 3) {
			imageFactor -= 1;
		}
		images -= 1;
	}

	const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);

	return minutes;
}

export function dateFormatter(date: number) {
	const dateObject = new Date(date);
	const options: Intl.DateTimeFormatOptions = {
		day: "numeric",
		month: "long",
		year: "numeric",
	};
	const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
		dateObject
	);

	return formattedDate;
}

export function getPost({ slug }: { slug: string }) {
	const markdownFile = fs.readFileSync(
		path.join("posts", slug + ".mdx"),
		"utf-8"
	);

	const { data: frontMatter, content } = matter(markdownFile);

	return {
		frontMatter,
		slug,
		content,
	};
}
