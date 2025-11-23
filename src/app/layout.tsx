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
    default: "Dashboard App - Next.js 14",
    template: "%s | Dashboard App"
  },
    icons: {
    icon: "/aawiz_logo.jpg",
  },
  description: "A modern dashboard application built with Next.js 14, featuring authentication, data visualization, and dark mode support.",
  keywords: ["Next.js", "React", "Dashboard", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Dashboard App" }],
  creator: "Dashboard App",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: "Dashboard App - Next.js 14",
    description: "A modern dashboard application built with Next.js 14",
    siteName: "Dashboard App",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard App - Next.js 14",
    description: "A modern dashboard application built with Next.js 14",
    creator: "@dashboardapp",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
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
