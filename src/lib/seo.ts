import type { Metadata } from "next";
import { CONTENT_UPDATED, SITE_NAME, SITE_URL } from "./config";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

type MetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use the title exactly as given instead of the "%s | site" template. */
  absoluteTitle?: boolean;
  noindex?: boolean;
};

// Page-level openGraph/twitter objects replace the file-based image, so reference it explicitly.
const SHARE_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME}: AI Compliance Review for Modern Businesses`,
};

export function pageMetadata({ title, description, path, absoluteTitle, noindex }: MetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: path,
      locale: "en_US",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}

export type Crumb = { name: string; path: string };
export type Faq = { q: string; a: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function faqLd(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

type GraphInput = {
  path: string;
  headline: string;
  description: string;
  crumbs: Crumb[];
  faqs?: Faq[];
  /** "Article" for guides, "WebPage" for the homepage. */
  type?: "Article" | "WebPage";
};

/** One @graph per page: the page itself, its breadcrumbs and (optionally) its FAQ. */
export function pageGraph({ path, headline, description, crumbs, faqs, type = "Article" }: GraphInput) {
  const url = absoluteUrl(path);
  const page: Record<string, unknown> = {
    "@type": type,
    "@id": `${url}#${type === "Article" ? "article" : "webpage"}`,
    url,
    name: headline,
    description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    dateModified: CONTENT_UPDATED,
    mainEntityOfPage: url,
  };
  if (type === "Article") {
    page.headline = headline;
    page.datePublished = CONTENT_UPDATED;
    page.author = { "@id": ORG_ID };
  }
  const graph: Record<string, unknown>[] = [page, breadcrumbLd(crumbs)];
  if (faqs?.length) graph.push(faqLd(faqs));
  return { "@context": "https://schema.org", "@graph": graph };
}
