import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://maids4us.net"
  ),

  title: {
    default:
      "House Cleaning Services in NYC | MAIDS'4US",
    template:
      "%s | MAIDS'4US",
  },

  description:
    "Professional house cleaning services in New York City. MAIDS'4US serves Manhattan, Brooklyn, Queens, and the Bronx with regular cleaning, deep cleaning, same-day cleaning, and more.",

  applicationName: "MAIDS'4US",

  authors: [
    {
      name: "MAIDS'4US",
    },
  ],

  creator: "MAIDS'4US",
  publisher: "MAIDS'4US",

  keywords: [
    "house cleaning NYC",
    "cleaning services NYC",
    "house cleaning New York City",
    "maid service NYC",
    "home cleaning NYC",
    "apartment cleaning NYC",
    "professional cleaners NYC",
    "Brooklyn cleaning services",
    "Queens cleaning services",
    "Manhattan cleaning services",
    "Bronx cleaning services",
    "house cleaning Brooklyn",
    "house cleaning Queens",
    "house cleaning Manhattan",
    "house cleaning Bronx",
    "deep cleaning NYC",
    "same day cleaning NYC",
    "MAIDS4US",
    "MAIDS'4US",
  ],

 

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maids4us.net",
    siteName: "MAIDS'4US",
    title:
      "House Cleaning Services in NYC | MAIDS'4US",
    description:
      "Professional house cleaning services across Manhattan, Brooklyn, Queens, and the Bronx. Book your MAIDS'4US cleaning service online.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "House Cleaning Services in NYC | MAIDS'4US",
    description:
      "Professional house cleaning services across Manhattan, Brooklyn, Queens, and the Bronx.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "House Cleaning Services",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}