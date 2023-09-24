import './globals.css'
import '../styles/style.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saurav Khare',
  description: 'Frontend Engineer',
  icons: "✌",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
