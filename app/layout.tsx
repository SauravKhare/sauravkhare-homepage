import "./globals.css";
import "../styles/style.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import QueryProvider from "../context/query-context";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
	title: "Saurav Khare",
	description: "Frontend Engineer",
	icons: "✌",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
			<body className="max-w-2xl md:mx-auto bg-zinc-900 text-white min-h-screen flex flex-col">
				<Header />
				<QueryProvider>
					<main>{children}</main>
				</QueryProvider>
				<Footer />
			</body>
		</html>
	);
}
