import type { Metadata } from "next";

import { Courier_Prime, Crimson_Text, EB_Garamond } from "next/font/google";

import QueryProvider from "@/context/query-context";
import "./globals.css";
import "@/styles/style.css";

const eBGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif-heading",
  display: "swap",
  weight: ["700", "400"],
  style: ["normal", "italic"],
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-serif-body",
  display: "swap",
  weight: ["400"],
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Saurav Khare",
  description: "Frontend Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${eBGaramond.variable} ${crimsonText.variable} ${courierPrime.variable}`} suppressHydrationWarning>
      <body className="bg-canvas text-ink font-body antialiased transition-colors duration-300">
        <div className="mx-auto min-h-screen max-w-2xl pt-24">
          <QueryProvider>
            {children}
          </QueryProvider>
        </div>
      </body>
    </html>
  );
}
