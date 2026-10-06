import type { MetadataRoute } from "next";
import { CONTENT_UPDATED } from "@/lib/config";
import { PILLARS } from "@/lib/pages";
import { absoluteUrl } from "@/lib/seo";

// /domain is intentionally excluded: it is noindex.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_UPDATED);
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    ...PILLARS.map((p) => ({
      url: absoluteUrl(p.href),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
