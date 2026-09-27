import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our NYC House Cleaning Service",
  description:
    "Learn about MAIDS'4US and our professional house cleaning services for homes and apartments across Manhattan, Brooklyn, Queens, and the Bronx.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About MAIDS'4US | NYC House Cleaning Service",
    description:
      "Learn about MAIDS'4US and our professional cleaning services across New York City.",
    url: "https://maids4us.net/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}