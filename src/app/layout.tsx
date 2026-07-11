import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junk Mob | We Make Your Junk Disappear",
  description:
    "Professional junk removal services for residential and commercial properties. Fast, affordable, and eco-friendly. Serving Pierce County, Tacoma, and Lakewood.",
  openGraph: {
    title: "Junk Mob | We Make Your Junk Disappear",
    description:
      "Professional junk removal services. Fast, affordable, eco-friendly.",
    images: ["/junkmob.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
