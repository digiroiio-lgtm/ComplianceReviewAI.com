import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PILLARS } from "@/lib/pages";
import { pageGraph, pageMetadata } from "@/lib/seo";
import { HOME_FAQS } from "@/content/faqs";
import { INDUSTRIES } from "@/content/industries";
import { USE_CASES } from "@/content/useCases";

const TITLE = "AI Compliance Review for Modern Businesses";
const DESCRIPTION =
  "Understand how AI can help businesses review documents, policies, vendors, products and workflows for compliance risks. Educational guides, not legal advice.";

export const metadata = pageMetadata({
  title: `${TITLE} | ComplianceReviewAI.com`,
  description: DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

const REVIEWABLE = [
  {
    title: "Documents",
    text: "Contracts, regulatory texts, filings and records, read and compared at scale.",
  },
  {
    title: "Policies",
    text: "Internal policies checked for gaps, contradictions and outdated references.",
  },
  {
    title: "Vendors",
    text: "Questionnaires, certificates and contracts reviewed before and during a relationship.",
  },
  {
    title: "Products",
    text: "Labels, claims, test reports and technical files checked against market requirements.",
  },
  {
    title: "Workflows",
    text: "Processes and controls mapped to requirements, with evidence collected along the way.",
  },
  {
    title: "Marketing and claims",
    text: "Copy and campaigns screened for claims and disclosures before publication.",
  },
];

const WORKFLOW = [
  {
    title: "Define scope",
    text: "Decide what is being reviewed, against which requirements, and why now.",
  },
  {
    title: "Gather material",
    text: "Collect the documents, records and system evidence the review needs.",
  },
  {
    title: "Extract and classify",
    text: "AI can read, sort and pull out key terms, with citations back to the source.",
  },
  {
    title: "Match to requirements",
    text: "Compare content with rules or checklists and identify possible gaps.",
  },
  {
    title: "Flag and prioritise",
    text: "Surface candidate issues ranked by potential risk, as drafts for review.",
  },
  {
    title: "Human decision",
    text: "A qualified person confirms, rejects or refines each finding and decides what to do.",
  },
  {
    title: "Remediate and record",
    text: "Assign owners, fix the gaps, and keep an auditable record of what was decided and why.",
  },
  {
    title: "Monitor",
    text: "Watch for changes in rules, documents or operations that call for a new review.",
  },
];

const LIMITS = [
  "AI can be confidently wrong, including inventing requirements or citations.",
  "Many models cannot fully explain how they reached a result.",
  "Uploading confidential or personal data creates privacy and security obligations.",
  "Rule libraries and models can be out of date or incomplete.",
  "Accountability stays with the organisation and its people, not the tool.",
  "Requirements differ by jurisdiction, sector and facts; generic output may not fit.",
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/",
          headline: TITLE,
          description: DESCRIPTION,
          crumbs: [{ name: "Home", path: "/" }],
          faqs: HOME_FAQS,
          type: "WebPage",
        })}
      />

      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <p className="hero__eyebrow">Educational resource</p>
          <h1 id="hero-title">AI Compliance Review for Modern Businesses</h1>
          <p className="lead">
            Understand how AI can help businesses review documents, policies, vendors, products and
            workflows for compliance risks, and where human judgment still has to lead.
          </p>
          <div className="btn-row">
            <Link href="/ai-compliance-review" className="btn">
              How AI compliance review works
            </Link>
            <Link href="/what-is-compliance-review" className="btn btn--ghost">
              What is a compliance review?
            </Link>
          </div>
          <p className="hero__note">
            This website provides educational information and does not constitute legal, regulatory or
            professional compliance advice.
          </p>
        </div>
      </section>

      <section className="home-section" id="what-is-compliance-review" aria-labelledby="h-what">
        <div className="container two-col">
          <div>
            <h2 id="h-what">What Is Compliance Review?</h2>
          </div>
          <div>
            <p>
              A compliance review is a structured examination of whether an organisation, process,
              document or product meets the laws, regulations, standards and internal policies that
              apply to it. It gathers evidence, identifies gaps, and results in documented actions to
              close them.
            </p>
            <p>
              It is related to, but distinct from, audits and assessments, and it is an ongoing
              discipline rather than a one-off event.{" "}
              <Link href="/what-is-compliance-review">Read the full guide to compliance review</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section home-section--alt" id="where-ai-fits" aria-labelledby="h-ai">
        <div className="container">
          <div className="home-section__head">
            <h2 id="h-ai">Where AI Fits</h2>
            <p>
              AI is best understood as an assistant for the reading-heavy parts of review. It does not
              decide what the rules mean or whether an organisation is compliant.
            </p>
          </div>
          <div className="two-col">
            <div>
              <h3>What AI can help with</h3>
              <ul className="check-list">
                <li>Extracting key terms and obligations from documents</li>
                <li>Classifying and routing documents</li>
                <li>Comparing policies with requirements</li>
                <li>Flagging potential risks for review</li>
                <li>Collecting and organising evidence</li>
                <li>Detecting changes between document versions</li>
              </ul>
            </div>
            <div>
              <h3>What stays with people</h3>
              <ul className="check-list check-list--warn">
                <li>Interpreting how a rule applies to specific facts</li>
                <li>Deciding what level of risk is acceptable</li>
                <li>Approving findings and remediation</li>
                <li>Communicating with regulators</li>
                <li>Being accountable for the outcome</li>
              </ul>
            </div>
          </div>
          <p>
            <Link href="/ai-compliance-review">
              Explore AI compliance review in depth, including its limitations
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="home-section" id="what-can-be-reviewed" aria-labelledby="h-reviewed">
        <div className="container">
          <div className="home-section__head">
            <h2 id="h-reviewed">What Can Be Reviewed?</h2>
            <p>
              Almost anything that can be compared with a requirement can be reviewed. These are the
              most common subjects of AI-assisted review.
            </p>
          </div>
          <ul className="cards">
            {REVIEWABLE.map((r) => (
              <li key={r.title} className="card">
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-section home-section--alt" id="key-use-cases" aria-labelledby="h-uc">
        <div className="container">
          <div className="home-section__head">
            <h2 id="h-uc">Key Use Cases</h2>
            <p>
              Each use case maps the path from input, to an AI-assisted task, to a human decision, to a
              recorded output.
            </p>
          </div>
          <ul className="pill-list">
            {USE_CASES.map((u) => (
              <li key={u.id}>
                <Link href={`/use-cases#${u.id}`}>{u.title}</Link>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "1.2rem" }}>
            <Link href="/use-cases">See all AI compliance review use cases</Link>
          </p>
        </div>
      </section>

      <section className="home-section" id="human-vs-ai" aria-labelledby="h-vs">
        <div className="container">
          <div className="home-section__head">
            <h2 id="h-vs">Human Review vs AI-Assisted Review</h2>
            <p>
              The aim is not to choose one over the other. AI-assisted review combines machine speed
              and consistency with human judgment and accountability.
            </p>
          </div>
          <div className="table-wrap" role="region" aria-label="Comparison table" tabIndex={0}>
            <table>
              <thead>
                <tr>
                  <th scope="col">Aspect</th>
                  <th scope="col">Human-only review</th>
                  <th scope="col">AI-assisted review</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Speed on large volumes</th>
                  <td>Limited by reviewer time</td>
                  <td>Fast first pass across many documents</td>
                </tr>
                <tr>
                  <th scope="row">Consistency</th>
                  <td>Can vary between reviewers and over time</td>
                  <td>Applies the same checks every time, but may share the same blind spots</td>
                </tr>
                <tr>
                  <th scope="row">Judgment and context</th>
                  <td>Strong, with professional experience</td>
                  <td>Limited; needs a human to interpret and decide</td>
                </tr>
                <tr>
                  <th scope="row">Risk of errors</th>
                  <td>Fatigue and oversight on repetitive work</td>
                  <td>Misreadings and fabricated output; requires verification</td>
                </tr>
                <tr>
                  <th scope="row">Accountability</th>
                  <td>Clear: named reviewer and approver</td>
                  <td>Unchanged: the named human approver remains accountable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="home-section home-section--alt" id="workflow" aria-labelledby="h-flow">
        <div className="container">
          <div className="home-section__head">
            <h2 id="h-flow">Compliance Review Workflow</h2>
            <p>
              A typical AI-assisted review follows the same stages as any compliance review, with AI
              supporting some of them and a person owning the decisions.
            </p>
          </div>
          <ol className="steps">
            {WORKFLOW.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-section" id="industries" aria-labelledby="h-ind">
        <div className="container">
          <div className="home-section__head">
            <h2 id="h-ind">Industries</h2>
            <p>
              Compliance requirements, documents and expert input differ by sector. The industry guide
              covers each at a general, educational level.
            </p>
          </div>
          <ul className="pill-list">
            {INDUSTRIES.map((i) => (
              <li key={i.id}>
                <Link href={`/industries#${i.id}`}>{i.name}</Link>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "1.2rem" }}>
            <Link href="/industries">Read compliance review by industry</Link>
          </p>
        </div>
      </section>

      <section className="home-section home-section--alt" id="risks-limitations" aria-labelledby="h-risk">
        <div className="container two-col">
          <div>
            <h2 id="h-risk">Key Risks &amp; Limitations</h2>
            <p>
              AI-assisted review is useful when its limits are understood and managed. It is not
              autonomous legal judgment.
            </p>
          </div>
          <ul className="check-list check-list--warn">
            {LIMITS.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-section" id="faq" aria-labelledby="h-faq">
        <div className="container">
          <div className="home-section__head">
            <h2 id="h-faq">Frequently Asked Questions</h2>
          </div>
          <div className="prose">
            <FaqList faqs={HOME_FAQS} />
          </div>
        </div>
      </section>

      <section className="home-section home-section--alt" id="guides" aria-labelledby="h-guides">
        <div className="container">
          <div className="home-section__head">
            <h2 id="h-guides">Explore the Guides</h2>
            <p>Five guides cover the topic from definition to evaluation to application.</p>
          </div>
          <ul className="cards">
            {PILLARS.map((p) => (
              <li key={p.href} className="card card--link">
                <h3>
                  <Link href={p.href}>{p.title}</Link>
                </h3>
                <p>{p.summary}</p>
              </li>
            ))}
          </ul>
          <div className="prose" style={{ maxWidth: "none" }}>
            <Disclaimer />
          </div>
        </div>
      </section>
    </>
  );
}
