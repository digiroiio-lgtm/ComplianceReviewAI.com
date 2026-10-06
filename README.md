# ComplianceReviewAI.com

An educational resource site about **AI-powered compliance review**, built to earn organic and AI-search
visibility for the category while it is also listed for acquisition.

The site does **not** offer compliance services, legal advice, certifications or a product, and it contains
no customers, case studies, statistics or vendor rankings. Keep it that way when adding content.

## Stack

Next.js (App Router) · React · TypeScript · one plain CSS file · system fonts. Every page is statically
prerendered and ships no client-side JavaScript of its own.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run typecheck
```

## Configuration

Copy `.env.example` to `.env.local`. All values are optional and read in one place, `src/lib/config.ts`.

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for canonicals, sitemap, Open Graph, JSON-LD | `https://compliancereviewai.com` |
| `NEXT_PUBLIC_DOMAIN_SALE_URL` | Destination of the sitewide "domain for sale" banner and footer link | `/domain` |
| `NEXT_PUBLIC_DOMAIN_CONTACT_URL` | Target of the **Make an Inquiry** button on `/domain` (`mailto:` or a form URL) | `mailto:contact@example.com` (**placeholder, replace before launch**) |

`NEXT_PUBLIC_*` values are inlined at build time, so redeploy after changing them.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Category overview; links to every pillar page, use case and industry |
| `/what-is-compliance-review` | Definition, process, audit vs assessment vs review |
| `/ai-compliance-review` | How AI assists, limits, human-in-the-loop, governance |
| `/compliance-review-software` | Capabilities, security questions, evaluation scorecard |
| `/use-cases` | 11 use cases, each Input → AI task → Human decision → Output, with anchors |
| `/industries` | 9 sectors, each with surface, documents, automation, expert review, with anchors |
| `/domain` | Acquisition page. **`noindex`**, excluded from the sitemap |

Also generated: `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/opengraph-image`, `/icon.svg`.

## Structure

```
src/app/                 routes (one folder per page), sitemap, robots, llms.txt, OG image
src/components/          DomainSaleBanner, PageShell, AnswerBox, Callout, FaqList, UseCaseFlow, ...
src/content/             use cases, industries and FAQs as typed data
src/lib/config.ts        env-driven constants (site URL, sale URL, contact URL)
src/lib/pages.ts         registry of pillar pages (nav, footer, cards, llms.txt)
src/lib/seo.ts           metadata + JSON-LD helpers
```

### Domain-for-sale banner

`DomainSaleBanner` (`src/components/DomainSaleBanner.tsx`) renders in the root layout above the header. It is a
slim, non-sticky, server-rendered link. Desktop copy is *"ComplianceReviewAI.com is available for acquisition →
View Domain Details"*; below 640px it becomes *"This domain is for sale →"* (swapped with CSS only). The
destination is `DOMAIN_SALE_URL`, so changing `NEXT_PUBLIC_DOMAIN_SALE_URL` retargets the banner and the
footer link together. Pass an `href` prop to override it for one placement.

### Adding content

- **Use case or industry:** add an entry to `src/content/useCases.ts` or `src/content/industries.ts`. The page,
  table of contents, homepage links and `llms.txt` update automatically.
- **New indexable page:** add the route, then add it to `PILLARS` in `src/lib/pages.ts` so it appears in
  navigation, the footer, the sitemap and `llms.txt`.
- Bump `CONTENT_UPDATED` in `src/lib/config.ts` when content is materially revised.

## SEO and AI visibility

- One H1 per page, semantic headings, a concise "Short answer" block near the top of each guide.
- Per-page title, description, canonical, Open Graph and Twitter metadata.
- JSON-LD: `WebSite` + `Organization` sitewide; `Article`/`WebPage`, `BreadcrumbList` and `FAQPage` per page.
- FAQ answers are rendered as visible text, not collapsed.
- `/domain` is `noindex, follow`. It is deliberately **not** blocked in `robots.txt`, so crawlers can read the
  directive.
- `llms.txt` lists the guides, use cases and industries for LLM crawlers.

## Content rules

Every content page carries the disclaimer: *This website provides educational information and does not
constitute legal, regulatory or professional compliance advice.* Do not add invented customers, credentials,
certifications, partnerships, statistics or proprietary-technology claims, and do not rank or name vendors
without a deliberate decision to do so.

## Deployment

Deploys as a standard Next.js app (for example on Vercel). Set `NEXT_PUBLIC_SITE_URL` to the production origin
and `NEXT_PUBLIC_DOMAIN_CONTACT_URL` to the real contact method before launch.
