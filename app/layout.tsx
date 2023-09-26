import "./globals.css";
import "../styles/style.css";
import type { Metadata } from "next";
import QueryProvider from "../context/query-context";

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
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
