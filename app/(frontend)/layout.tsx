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
  style: ["normal", "italic"],
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${eBGaramond.variable} ${crimsonText.variable} ${courierPrime.variable}`} suppressHydrationWarning>
      <body className="bg-canvas text-ink font-body antialiased transition-colors duration-300 relative">
        <div
          className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-canvas bg-[url('/noice.png')] bg-repeat opacity-100"
          aria-hidden="true"
        />
        <main className="relative z-10 mx-auto min-h-screen max-w-3xl pt-12 md:pt-24 max-xl:px-6">
          <QueryProvider>
            {children}
          </QueryProvider>
        </main>
      </body>
    </html>
  );
}