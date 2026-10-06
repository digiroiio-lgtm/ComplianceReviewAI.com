import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { PageShell } from "@/components/PageShell";
import { UseCaseFlow } from "@/components/UseCaseFlow";
import { USE_CASES_FAQS } from "@/content/faqs";
import { USE_CASES } from "@/content/useCases";
import { pageMetadata } from "@/lib/seo";

const PATH = "/use-cases";
const TITLE = "AI Compliance Review Use Cases";
const DESCRIPTION =
  "Eleven AI compliance review use cases, from policy and vendor review to contract checks and regulatory change monitoring, each mapped from input to AI-assisted task to human decision to output.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const TOC = USE_CASES.map((u) => ({ id: u.id, label: u.title }));

export default function Page() {
  return (
    <PageShell
      path={PATH}
      crumb="Use Cases"
      title={TITLE}
      lead="Concrete review scenarios showing where AI assistance fits, where people decide, and what each review produces."
      description={DESCRIPTION}
      toc={TOC}
      faqs={USE_CASES_FAQS}
      intro={
        <AnswerBox label="How to read these use cases">
          Each use case follows the same pattern: an input is prepared, AI assists with a defined task,
          a person makes the decision, and the review produces a recorded output. AI output is always a
          draft for human review, never a final compliance determination.
        </AnswerBox>
      }
    >
      <p>
        These are illustrative patterns, not product features. Real implementations vary, and every
        organisation should confirm the approach with its own compliance and legal advisers. For
        background, see <Link href="/ai-compliance-review">AI compliance review</Link>, and for tooling
        considerations see <Link href="/compliance-review-software">compliance review software</Link>.
      </p>

      {USE_CASES.map((u) => (
        <section key={u.id} className="usecase" aria-labelledby={u.id}>
          <h2 id={u.id}>{u.title}</h2>
          <p>{u.summary}</p>
          <UseCaseFlow
            input={u.input}
            aiTask={u.aiTask}
            humanDecision={u.humanDecision}
            output={u.output}
          />
          <p className="usecase__watch">
            <strong>Watch for:</strong> {u.watchFor}
          </p>
        </section>
      ))}
    </PageShell>
  );
}
