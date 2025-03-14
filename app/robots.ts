import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base_url = process.env.VERCEL_URL || "http://localhost:3000";

  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: "/account/",
      },
    ],
    sitemap: `${base_url}/sitemap.xml`,
  };
}
