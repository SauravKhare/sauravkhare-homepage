import "./globals.css";
import "../styles/style.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import QueryProvider from "../context/query-context";

export const metadata: Metadata = {
	title: "Saurav Khare",
	description: "Frontend Engineer",
	icons:
		"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✌</text></svg>",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
			<body className="bg-[#111111] bg-[radial-gradient(circle,#222,#111)]">
				<div className="text-white mx-auto md:max-w-screen-xl px-8 lg:px-24">
					<QueryProvider>{children}</QueryProvider>
				</div>
			</body>
		</html>
	);
}
