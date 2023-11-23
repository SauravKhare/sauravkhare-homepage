import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { readTimeCalculator, dateFormatter } from "@/utils";

export default function Blog() {
	const blogDir = "posts";
	const files = fs.readdirSync(path.join(blogDir));
	const blogs = files.map((filename) => {
		const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
		const { data: frontMatter } = matter(fileContent);
		return {
			meta: frontMatter,
			slug: filename.replace(".mdx", ""),
			file: fileContent,
		};
	});

	const sortedBlogs = blogs.sort(
		(a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
	);

	return (
		<>
			{sortedBlogs.map((blog) => (
				<div key={blog.slug} className="max-md:mx-6 mb-20">
					<Heading
						headingType="h3"
						classname="font-geist-sans text-4xl font-bold mb-2 duration-500 hover:text-yellow-400"
					>
						<Link href={"/blog/" + blog.slug}>{blog.meta.title}</Link>
					</Heading>
					<Paragraph classname="font-geist-sans text-base mb-3">
						{blog.meta.description}
					</Paragraph>
					<div className="font-geist-mono text-sm">
						{dateFormatter(blog.meta.date)} · {readTimeCalculator(blog.file)}{" "}
						min read
					</div>
				</div>
			))}
		</>
	);
}
