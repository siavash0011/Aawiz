import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aawiz – AI HR Platform",
    template: "%s | Aawiz"
  },
  description:
    "Aawiz is an AI-powered HR platform that helps teams manage hiring, employee performance, and daily workflows with simple, intuitive tools.",
  icons: {
    icon: "/aawiz_logo.jpg",
  },
  authors: [{ name: "Aawiz" }],
  creator: "Aawiz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aawiz.com",
    title: "Aawiz – AI HR Platform",
    description:
      "Aawiz provides smart tools for hiring, managing employees, and improving team productivity.",
    siteName: "Aawiz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aawiz – AI HR Platform",
    description:
      "Aawiz helps teams simplify hiring and employee management using AI.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
