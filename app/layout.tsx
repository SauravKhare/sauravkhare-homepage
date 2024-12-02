import "./globals.css";
import "../styles/style.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import QueryProvider from "../context/query-context";
import TickerBar from "@/components/TickerBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundGradient from "@/components/BackgroundGradient";

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
			<body className="bg-[#111111] bg-[radial-gradient(circle,#222,#111)]">
				{/* <TickerBar /> */}
				<div className="text-white mx-auto md:max-w-screen-xl px-8 lg:px-24">
					<QueryProvider>{children}</QueryProvider>
				</div>
			</body>
		</html>
	);
}
