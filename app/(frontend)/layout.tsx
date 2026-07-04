import { Courier_Prime, Crimson_Text, EB_Garamond, Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import QueryProvider from "@/context/query-context";
import "@/app/(frontend)/globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import HeaderTopNavigation from "@/components/HeaderTopNavigation";
import Hero from "@/components/Hero";

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
  variable: "--font-serif-mono",
  display: "swap",
  weight: ["400"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["500", "600", "400"],
  style: ["normal", "italic"]
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "400"],
  style: ["normal", "italic"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${eBGaramond.variable} ${crimsonText.variable} ${courierPrime.variable} ${fraunces.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className="bg-dark-primary text-light-primary font-body antialiased transition-colors duration-300 relative">
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <HeaderTopNavigation />
          <main className="relative z-10 mx-auto min-h-screen">
            <QueryProvider>
              {children}
            </QueryProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}