import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book House Cleaning in NYC",
  description:
    "Book professional house cleaning with MAIDS'4US in Manhattan, Brooklyn, Queens, or the Bronx. Request regular, deep, same-day, emergency, or specialty cleaning.",
  alternates: {
    canonical: "/booking",
  },
  openGraph: {
    title: "Book House Cleaning in NYC | MAIDS'4US",
    description:
      "Request professional house cleaning service in Manhattan, Brooklyn, Queens, or the Bronx.",
    url: "https://maids4us.net/booking",
    type: "website",
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}