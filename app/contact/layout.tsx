import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our NYC Cleaning Service",
  description:
    "Contact MAIDS'4US about house cleaning services in Manhattan, Brooklyn, Queens, and the Bronx. Ask about scheduling, services, pricing, or an existing cleaning request.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact MAIDS'4US | NYC House Cleaning",
    description:
      "Contact MAIDS'4US for professional house cleaning services across New York City.",
    url: "https://maids4us.net/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}