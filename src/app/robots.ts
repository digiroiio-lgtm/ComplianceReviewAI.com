import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

// /domain is kept out of the index with a noindex meta tag, not a Disallow rule,
// so crawlers can still fetch it and see the directive.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
