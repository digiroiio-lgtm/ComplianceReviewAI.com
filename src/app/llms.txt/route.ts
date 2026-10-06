import { DISCLAIMER, SITE_DESCRIPTION, SITE_NAME } from "@/lib/config";
import { PILLARS } from "@/lib/pages";
import { absoluteUrl } from "@/lib/seo";
import { INDUSTRIES } from "@/content/industries";
import { USE_CASES } from "@/content/useCases";

export const dynamic = "force-static";

// llms.txt: a plain-text map of the site for LLM-based crawlers and assistants.
export function GET() {
  const body = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    DISCLAIMER,
    "This site does not provide compliance services, certifications or automated legal advice.",
    "",
    "## Guides",
    ...PILLARS.map((p) => `- [${p.title}](${absoluteUrl(p.href)}): ${p.summary}`),
    "",
    "## Use cases",
    ...USE_CASES.map((u) => `- [${u.title}](${absoluteUrl(`/use-cases#${u.id}`)})`),
    "",
    "## Industries",
    ...INDUSTRIES.map((i) => `- [${i.name}](${absoluteUrl(`/industries#${i.id}`)})`),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
