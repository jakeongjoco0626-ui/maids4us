import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "House Cleaning Services in NYC",
  description:
    "Explore MAIDS'4US house cleaning services in New York City, including regular cleaning, deep cleaning, same-day cleaning, emergency cleaning, and specialty cleaning across Manhattan, Brooklyn, Queens, and the Bronx.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "House Cleaning Services in NYC | MAIDS'4US",
    description:
      "Professional house cleaning services throughout Manhattan, Brooklyn, Queens, and the Bronx.",
    url: "https://maids4us.net/services",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}