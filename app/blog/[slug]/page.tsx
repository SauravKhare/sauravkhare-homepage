import fs from "fs";
import path from "path";
import { getPost, dateFormatter } from "@/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
	const files = fs.readdirSync(path.join("posts"));
	const paths = files.map((filename) => ({
		slug: filename.replace(".mdx", ""),
	}));

	return paths;
}

export async function generateMetadata({ params }: any) {
	const blog = getPost(params);
	return {
		title: blog.frontMatter.title,
		description: blog.frontMatter.description,
	};
}

export default function Post({ params }: any) {
	const props = getPost(params);

	return (
		<article className="max-md:mx-6 font-geist-sans prose !prose-invert prose-xl mb-10">
			<h1 className="text-5xl -mb-1">{props.frontMatter.title}</h1>
			<div className="mt-2">
				<span className="font-geist-mono text-sm">
					{props.frontMatter.author}
				</span>{" "}
				-{" "}
				<span className="font-geist-mono text-sm">
					{dateFormatter(props.frontMatter.date)}
				</span>
			</div>
			<MDXRemote source={props.content} />
		</article>
	);
}
