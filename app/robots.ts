import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/api",
        "/login",
        "/cleaner-login",
        "/cleaner-portal",
        "/cleaner-signup",
        "/cleaner-application/thank-you",
      ],
    },
    sitemap: "https://maids4us.net/sitemap.xml",
  };
}