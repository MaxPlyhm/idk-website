import type { Metadata } from "next"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/home/Footer"

export const metadata: Metadata = {
  title: "IDK",
  description: "From popular to personal food recommendations.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#FEF9F2] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}