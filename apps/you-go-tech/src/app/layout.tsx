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
  title: "You Go Tech | Rapid AI Engineering & Agentic Workflows",
  description: "Enterprise-grade AI automation, autonomous agentic workflows, and high-performance digital systems. Scale your business with precision AI engineering in KSA and Canada.",
  keywords: ["Rapid AI Engineering", "Agentic Workflows", "AI Automation Agency", "Autonomous AI Agents", "Enterprise AI Solutions", "AI Development KSA", "AI Development Canada"],
  authors: [{ name: "You Go Tech" }],
  openGraph: {
    title: "You Go Tech | Rapid AI Engineering & Agentic Workflows",
    description: "Scale your operations with autonomous AI agents and precision engineering. Delivering 10x speed and accuracy.",
    url: "https://yougotek.com",
    siteName: "You Go Tech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "You Go Tech | Rapid AI Engineering & Agentic Workflows",
    description: "Scale your operations with autonomous AI agents and precision engineering.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "You Go Tech",
    "url": "https://yougotek.com",
    "logo": "https://yougotek.com/icon.png",
    "description": "Rapid AI Engineering and Agentic Workflow agency providing autonomous digital systems for enterprise.",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Riyadh",
        "addressCountry": "KSA"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressCountry": "CA"
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/you-go-tech",
      "https://twitter.com/yougotek"
    ]
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
