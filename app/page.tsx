import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

// SEO WRAPPER: MAIDS4US HOME
export const metadata: Metadata = {
  title: "House Cleaning Services in NYC",
  description:
    "MAIDS'4US provides professional house cleaning services across Manhattan, Brooklyn, Queens, and the Bronx, including regular cleaning, deep cleaning, same-day cleaning, and specialty cleaning.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "House Cleaning Services in NYC | MAIDS'4US",
    description:
      "Professional house cleaning for homes and apartments across Manhattan, Brooklyn, Queens, and the Bronx.",
    url: "https://maids4us.net",
    type: "website",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}