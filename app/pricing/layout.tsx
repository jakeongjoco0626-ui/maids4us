import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "House Cleaning Prices in NYC",
  description:
    "View MAIDS'4US hourly house cleaning prices in New York City, with options for customer-supplied materials, full-service supplies, same-day cleaning, and specialty cleaning across Manhattan, Brooklyn, Queens, and the Bronx.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "House Cleaning Prices in NYC | MAIDS'4US",
    description:
      "View MAIDS'4US hourly house cleaning rates for Manhattan, Brooklyn, Queens, and the Bronx.",
    url: "https://maids4us.net/pricing",
    type: "website",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}