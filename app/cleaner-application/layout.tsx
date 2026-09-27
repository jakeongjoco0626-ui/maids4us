import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Cleaning Jobs in NYC",
  description:
    "Apply to work with MAIDS'4US as a cleaner serving homes and apartments across Manhattan, Brooklyn, Queens, and the Bronx.",
  alternates: {
    canonical: "/cleaner-application",
  },
  openGraph: {
    title: "Apply for Cleaning Jobs in NYC | MAIDS'4US",
    description:
      "Apply to join the MAIDS'4US cleaning team serving New York City.",
    url: "https://maids4us.net/cleaner-application",
    type: "website",
  },
};

export default function CleanerApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}