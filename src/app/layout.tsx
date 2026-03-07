import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Serujan Satkunanathan — Flutter Developer",
  description:
    "Passionate Flutter Developer crafting scalable, high-performance mobile applications. Experienced with Firebase, REST APIs, Provider, Google Maps, and real-time data systems.",
  keywords: [
    "Flutter Developer",
    "Mobile App Developer",
    "Serujan Satkunanathan",
    "Dart",
    "Firebase",
    "Cross-platform",
    "Sri Lanka",
  ],
  authors: [{ name: "Serujan Satkunanathan" }],
  openGraph: {
    title: "Serujan Satkunanathan — Flutter Developer",
    description:
      "Passionate Flutter Developer crafting scalable, high-performance mobile applications with real-world impact.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serujan Satkunanathan — Flutter Developer",
    description:
      "Passionate Flutter Developer crafting scalable, high-performance mobile applications with real-world impact.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
