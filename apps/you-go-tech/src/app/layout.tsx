import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "You Go Tech | Premium AI Automation & Enterprise Web Agency",
  description: "Accelerate your business with You Go Tech. We specialize in digital infrastructure, autonomous growth systems, and high-performance AI integrations for global enterprises.",
  keywords: ["AI Agency", "Digital Transformation", "Enterprise Software", "Automation", "KSA Tech", "Canada Tech", "Next.js Development"],
  authors: [{ name: "You Go Tech Team" }],
  openGraph: {
    title: "You Go Tech - Engineering the Age of AI",
    description: "Enterprise-grade AI automation and high-performance digital infrastructure.",
    url: "https://yougotech.com",
    siteName: "You Go Tech",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
