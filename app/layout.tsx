import "./globals.css";
import "../styles/style.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import QueryProvider from "../context/query-context";
import TickerBar from "@/components/TickerBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
			<body className="bg-black">
				{/* <TickerBar /> */}
				<div className="max-w-2xl md:mx-auto text-white">
					<Header />
					<QueryProvider>{children}</QueryProvider>
					<Footer />
				</div>
			</body>
		</html>
	);
}
