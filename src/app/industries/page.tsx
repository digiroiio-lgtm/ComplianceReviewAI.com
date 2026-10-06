import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Callout } from "@/components/Callout";
import { PageShell } from "@/components/PageShell";
import { INDUSTRIES_FAQS } from "@/content/faqs";
import { INDUSTRIES } from "@/content/industries";
import { pageMetadata } from "@/lib/seo";

const PATH = "/industries";
const TITLE = "Compliance Review by Industry";
const DESCRIPTION =
  "How compliance review applies across financial services, healthcare, SaaS, fintech, manufacturing, consumer products, e-commerce, insurance and professional services, and where expert review remains necessary.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const TOC = INDUSTRIES.map((i) => ({ id: i.id, label: i.name }));

export default function Page() {
  return (
    <PageShell
      path={PATH}
      crumb="Industries"
      title={TITLE}
      lead="A general, educational look at the compliance surface in nine sectors, what gets reviewed, and where automation can and cannot help."
      description={DESCRIPTION}
      toc={TOC}
      faqs={INDUSTRIES_FAQS}
      intro={
        <AnswerBox label="Scope of this guide">
          Every industry has its own rules, but the review method is similar: define scope, gather
          evidence, find gaps, decide and remediate. Automation can help with reading and organising
          documents in every sector. Interpreting requirements and making judgments remains with
          qualified experts.
        </AnswerBox>
      }
    >
      <Callout tone="caution" title="Not sector expertise">
        <p>
          ComplianceReviewAI.com is not a regulated entity and holds no certification or specialist
          expertise in any industry. The overviews below are general and non-exhaustive. Regulations
          named are examples only; what applies depends on jurisdiction, licensing, business model and
          facts, and should be confirmed with qualified advisers.
        </p>
      </Callout>
      <p>
        See <Link href="/use-cases">use cases</Link> for the review tasks that appear across sectors and{" "}
        <Link href="/what-is-compliance-review">What Is a Compliance Review?</Link> for the common
        method.
      </p>

      {INDUSTRIES.map((ind) => (
        <section key={ind.id} className="industry" aria-labelledby={ind.id}>
          <h2 id={ind.id}>{ind.name}</h2>
          <p>{ind.intro}</p>
          <div className="industry__grid">
            <div className="industry__box">
              <h3>Typical compliance surface</h3>
              <ul>
                {ind.surface.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="industry__box">
              <h3>Documents and data reviewed</h3>
              <ul>
                {ind.documents.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="industry__box industry__box--auto">
              <h3>Where automation may help</h3>
              <ul>
                {ind.automation.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="industry__box industry__box--expert">
              <h3>Where expert review remains necessary</h3>
              <ul>
                {ind.expert.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </PageShell>
  );
}
