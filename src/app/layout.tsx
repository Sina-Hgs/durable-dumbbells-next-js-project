import "./globals.css";
import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const BarlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Durable Dumbbells",
  description: "A Next JS Product Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${BarlowCondensed.className} bg-neutral-200 scroll-smooth h-full`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
