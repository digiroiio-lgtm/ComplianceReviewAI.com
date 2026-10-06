/** Registry of indexable pillar pages. Drives nav, footer, cards, sitemap and llms.txt. */
export type Pillar = {
  href: string;
  /** Short label for navigation. */
  nav: string;
  /** Page H1. */
  title: string;
  /** One-sentence description, used in cards and llms.txt. */
  summary: string;
};

export const PILLARS: Pillar[] = [
  {
    href: "/what-is-compliance-review",
    nav: "What Is It?",
    title: "What Is a Compliance Review?",
    summary:
      "Definition, purpose, triggers and process, plus how a compliance review differs from an audit or an assessment.",
  },
  {
    href: "/ai-compliance-review",
    nav: "AI Review",
    title: "AI Compliance Review",
    summary:
      "How AI can assist with extraction, classification, policy comparison, risk flagging and change detection, and where its limits are.",
  },
  {
    href: "/compliance-review-software",
    nav: "Software",
    title: "Compliance Review Software",
    summary:
      "What compliance review software should do, the security and governance questions to ask, and a framework for evaluating it.",
  },
  {
    href: "/use-cases",
    nav: "Use Cases",
    title: "AI Compliance Review Use Cases",
    summary:
      "Eleven review scenarios, each mapped from input to AI-assisted task to human decision to output.",
  },
  {
    href: "/industries",
    nav: "Industries",
    title: "Compliance Review by Industry",
    summary:
      "How compliance review looks in nine sectors, and where automation helps versus where expert review remains necessary.",
  },
];

/**
 * Phase 2 commercial-intent resources. Kept separate from PILLARS so the primary
 * navigation and footer are unchanged; linked contextually, from the sitemap and llms.txt.
 */
export const COMMERCIAL_PAGES: Pillar[] = [
  {
    href: "/ai-compliance-review-software",
    nav: "AI Compliance Review Software",
    title: "AI Compliance Review Software",
    summary:
      "What distinguishes AI-enabled compliance review software, and the AI-specific criteria for evaluating it.",
  },
  {
    href: "/automated-compliance-review",
    nav: "Automated Compliance Review",
    title: "Automated Compliance Review",
    summary:
      "Which compliance review tasks can be automated, which cannot, and where human decisions must stay.",
  },
  {
    href: "/compliance-review-automation",
    nav: "Compliance Review Automation",
    title: "Compliance Review Automation",
    summary:
      "How intake, routing, evidence requests and remediation tracking are automated, and how to implement it.",
  },
];
