import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Callout } from "@/components/Callout";
import { PageShell } from "@/components/PageShell";
import { AI_FAQS } from "@/content/faqs";
import { pageMetadata } from "@/lib/seo";

const PATH = "/ai-compliance-review";
const TITLE = "AI Compliance Review: How Artificial Intelligence Can Assist Compliance Teams";
const DESCRIPTION =
  "How AI can assist compliance review through extraction, classification, policy comparison, risk flagging and change detection, and why it is not autonomous legal judgment.";

export const metadata = pageMetadata({
  title: "AI Compliance Review: How It Works and Its Limits",
  description: DESCRIPTION,
  path: PATH,
});

const TOC = [
  { id: "what-it-means", label: "What AI-assisted review means" },
  { id: "not-legal-judgment", label: "Not autonomous legal judgment" },
  { id: "technologies", label: "Technologies involved" },
  { id: "document-extraction", label: "Document extraction" },
  { id: "classification", label: "Classification" },
  { id: "policy-comparison", label: "Policy comparison" },
  { id: "rule-matching", label: "Rule matching" },
  { id: "risk-flagging", label: "Risk flagging" },
  { id: "evidence-collection", label: "Evidence collection" },
  { id: "change-detection", label: "Change detection" },
  { id: "human-in-the-loop", label: "Human-in-the-loop review" },
  { id: "limitations", label: "Limitations" },
  { id: "explainability", label: "Explainability" },
  { id: "hallucination-risk", label: "Hallucination risk" },
  { id: "data-privacy", label: "Data privacy" },
  { id: "regulatory-accountability", label: "Regulatory accountability" },
  { id: "readiness", label: "Readiness questions" },
];

export default function Page() {
  return (
    <PageShell
      path={PATH}
      crumb="AI Compliance Review"
      title={TITLE}
      lead="AI can speed up the reading-heavy parts of compliance work. This guide explains what it can do, what it cannot, and how to keep people accountable."
      description={DESCRIPTION}
      toc={TOC}
      faqs={AI_FAQS}
      intro={
        <AnswerBox>
          AI compliance review is the use of artificial intelligence to assist people who check documents,
          policies, vendors, products or workflows against compliance requirements. AI can extract,
          classify, compare and flag, producing candidate findings. A qualified person reviews each
          finding and makes the decision. It assists compliance judgment; it does not replace it.
        </AnswerBox>
      }
    >
      <section aria-labelledby="what-it-means">
        <h2 id="what-it-means">What AI-assisted compliance review means</h2>
        <p>
          Terms such as <em>automated compliance review</em>, <em>compliance AI</em>,{" "}
          <em>regulatory AI</em> and <em>AI compliance automation</em> describe tools that apply
          software intelligence to review work. In practice they cover a spectrum, from simple
          automation of repetitive steps to language models that read and summarise complex documents.
        </p>
        <p>
          This guide uses <strong>AI-assisted</strong> to describe the responsible end of that spectrum:
          the system prepares findings, and people check and decide. The foundations of the review
          itself, scope, evidence, gaps, remediation and monitoring, are covered in{" "}
          <Link href="/what-is-compliance-review">What Is a Compliance Review?</Link> Where review steps
          run without manual effort, see <Link href="/automated-compliance-review">automated compliance review</Link>.
        </p>
      </section>

      <section aria-labelledby="not-legal-judgment">
        <h2 id="not-legal-judgment">AI-assisted review is not autonomous legal judgment</h2>
        <Callout tone="caution" title="AI-assisted compliance review ≠ autonomous legal judgment">
          <p>
            Deciding whether an organisation complies with a rule requires interpreting the rule,
            understanding the facts, weighing risk and accepting accountability. These are professional
            responsibilities. AI output is input to that process, not the conclusion.
          </p>
        </Callout>
        <div className="table-wrap" role="region" aria-label="AI-assisted versus autonomous" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th scope="col">&nbsp;</th>
                <th scope="col">AI-assisted compliance review</th>
                <th scope="col">Autonomous legal judgment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Role of AI</th>
                <td>Prepares candidate findings and organises information</td>
                <td>Makes the final determination of compliance</td>
              </tr>
              <tr>
                <th scope="row">Final decision</th>
                <td>A named, qualified person</td>
                <td>The system</td>
              </tr>
              <tr>
                <th scope="row">Accountability</th>
                <td>Clear: the organisation and its approvers</td>
                <td>Unclear, and not transferable to software</td>
              </tr>
              <tr>
                <th scope="row">Appropriate for</th>
                <td>Triage, comparison, evidence organisation, monitoring</td>
                <td>Not an approach this site describes or endorses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="technologies">
        <h2 id="technologies">Technologies involved</h2>
        <p>&quot;AI&quot; in compliance tooling is not one technology. Common building blocks include:</p>
        <ul>
          <li>
            <strong>Rules engines and pattern matching</strong>: deterministic checks, such as a
            required clause being present. Predictable and easy to explain, but rigid.
          </li>
          <li>
            <strong>Machine-learning classifiers</strong>: models trained on labelled examples to sort
            documents or flag content. Their quality depends on the training data.
          </li>
          <li>
            <strong>Large language models (LLMs)</strong>: generative models that read, summarise and
            reason over text. Flexible, but they can produce errors that look convincing.
          </li>
          <li>
            <strong>Retrieval over trusted sources</strong>: techniques that ground model output in a
            defined library of documents so answers can cite where they came from.
          </li>
        </ul>
        <p>
          Many systems combine these, for example using a language model to read a document and a rules
          engine to check the result against a fixed requirement.
        </p>
      </section>

      <section aria-labelledby="document-extraction">
        <h2 id="document-extraction">Document extraction</h2>
        <p>
          Extraction pulls structured information out of unstructured documents: parties, dates,
          obligations, certificate scopes, product claims, thresholds. It turns a stack of PDFs into
          data a reviewer can sort and check.
        </p>
        <p>
          <strong>Human check:</strong> verify extracted values against the source text, particularly
          for scanned documents, tables and documents with unusual layouts, where errors are more
          likely.
        </p>
      </section>

      <section aria-labelledby="classification">
        <h2 id="classification">Classification</h2>
        <p>
          Classification assigns documents or passages to categories, such as contract type, topic,
          jurisdiction or sensitivity level, so they can be routed to the right reviewer or checked
          against the right requirements.
        </p>
        <p>
          <strong>Human check:</strong> sample the results, watch for categories where the system is
          unreliable, and review anything it labels as low confidence.
        </p>
      </section>

      <section aria-labelledby="policy-comparison">
        <h2 id="policy-comparison">Policy comparison</h2>
        <p>
          AI can compare a policy with a requirement set, with another policy, or with an earlier
          version, and point to places where topics are missing, conflicting or out of date.
        </p>
        <p>
          <strong>Human check:</strong> similar wording is not the same as meeting a requirement.
          Reviewers need to judge whether the text actually creates the obligation or control, and
          whether practice matches it.
        </p>
      </section>

      <section aria-labelledby="rule-matching">
        <h2 id="rule-matching">Rule matching</h2>
        <p>
          Rule matching tests content against explicit criteria: required disclosures, prohibited
          phrases, mandatory fields, or internal standards written as checks. It works best where the
          rule can be stated clearly.
        </p>
        <p>
          <strong>Human check:</strong> rules need an owner, a version history and periodic review.
          Many compliance questions depend on context and cannot be reduced to a simple rule.
        </p>
      </section>

      <section aria-labelledby="risk-flagging">
        <h2 id="risk-flagging">Risk flagging</h2>
        <p>
          Systems can highlight passages, documents or patterns that may indicate risk and rank them so
          reviewers look at the most important items first. Flags are leads, not conclusions.
        </p>
        <p>
          <strong>Human check:</strong> expect both false alarms and misses. Track both, and avoid
          treating the absence of a flag as proof that nothing is wrong.
        </p>
      </section>

      <section aria-labelledby="evidence-collection">
        <h2 id="evidence-collection">Evidence collection</h2>
        <p>
          AI can help match requirements to existing evidence, identify what is missing or stale, and
          organise artefacts into an index with their sources.
        </p>
        <p>
          <strong>Human check:</strong> evidence must be genuine and traceable. Tools should locate and
          organise it, never create or fill in missing records.
        </p>
      </section>

      <section aria-labelledby="change-detection">
        <h2 id="change-detection">Change detection</h2>
        <p>
          Change detection compares versions of documents, such as regulations, guidance, contracts or
          internal policies, and highlights what is new, removed or altered. It can also watch
          designated sources for updates.
        </p>
        <p>
          <strong>Human check:</strong> confirm what the change means for the organisation, its
          effective date and any transitional rules. Coverage depends on the sources being monitored.
        </p>
      </section>

      <section aria-labelledby="human-in-the-loop">
        <h2 id="human-in-the-loop">Human-in-the-loop review</h2>
        <p>
          Human-in-the-loop means a person reviews and approves AI-generated findings before they have
          any effect. Practical design patterns include:
        </p>
        <ul>
          <li>Requiring reviewer approval before a finding is closed or a document is cleared.</li>
          <li>Showing the source passage next to every finding so it can be verified quickly.</li>
          <li>Routing low-confidence or high-risk items to more senior reviewers.</li>
          <li>Sampling items the system marked as fine, to catch missed issues.</li>
          <li>Recording who reviewed what, when, and what they decided.</li>
        </ul>
        <p>
          The goal is not just to have a person nominally involved, but to make real review practical.
          Reviewers who are shown unsupported conclusions tend to accept them; reviewers who are shown
          evidence can challenge them.
        </p>
      </section>

      <section aria-labelledby="limitations">
        <h2 id="limitations">Limitations</h2>
        <p>Even well-designed tools have limits that anyone relying on them should understand:</p>
        <ul>
          <li>They work from the documents and rule libraries they are given, which may be incomplete or out of date.</li>
          <li>They may struggle with ambiguity, unusual wording, poor scans and implicit context.</li>
          <li>Requirements vary by jurisdiction and circumstance; generic output may not fit.</li>
          <li>Results can differ between runs and between model versions.</li>
          <li>They cannot verify that what a document says matches what happens in practice.</li>
        </ul>
      </section>

      <section aria-labelledby="explainability">
        <h2 id="explainability">Explainability</h2>
        <p>
          Explainability is the ability to show why a finding was produced. For compliance review, a
          useful explanation usually includes the source passage, the requirement it was compared with,
          and the reasoning that links them. Opaque scores with no supporting text are hard to defend to
          a regulator, an auditor or a colleague. When evaluating a tool, ask whether each finding can be
          traced and whether a reviewer can disagree with it and record why.
        </p>
      </section>

      <section aria-labelledby="hallucination-risk">
        <h2 id="hallucination-risk">Hallucination risk</h2>
        <p>
          Generative models can produce fluent text that is wrong: a requirement that does not exist, a
          misquoted clause, a citation to a source that cannot be found. In compliance this is serious
          because plausible errors are easy to accept.
        </p>
        <p>Common mitigations include:</p>
        <ul>
          <li>Grounding answers in a defined library of trusted source documents.</li>
          <li>Requiring citations to the exact source text and checking that the text says what is claimed.</li>
          <li>Testing on documents with known answers before relying on the tool.</li>
          <li>Keeping a person responsible for verifying anything that will be relied upon.</li>
        </ul>
        <p>These measures reduce the risk; they do not remove it.</p>
      </section>

      <section aria-labelledby="data-privacy">
        <h2 id="data-privacy">Data privacy</h2>
        <p>
          Compliance documents often contain confidential business information, personal data or
          privileged material. Before using an AI tool, organisations usually establish:
        </p>
        <ul>
          <li>Where data is stored and processed, including across borders.</li>
          <li>Who at the provider can access it, and under what conditions.</li>
          <li>Whether inputs or outputs are used to train or improve models.</li>
          <li>How long data is retained and how it can be deleted.</li>
          <li>What the contract says about confidentiality, security and incident notification.</li>
          <li>Whether sending particular data to the tool is permitted at all.</li>
        </ul>
        <p>
          Privacy, security and legal teams are normally involved in these decisions. See also{" "}
          <Link href="/compliance-review-software#security-governance">
            security and governance requirements for compliance review software
          </Link>
          .
        </p>
      </section>

      <section aria-labelledby="regulatory-accountability">
        <h2 id="regulatory-accountability">Regulatory accountability</h2>
        <p>
          Using an AI tool does not move responsibility for compliance to the tool or its vendor.
          Regulators generally expect the organisation to be able to explain how a decision was reached,
          who made it and what they relied on. Organisations typically document where AI is used in the
          review process, what human oversight applies, and how performance is checked.
        </p>
        <p>
          AI governance frameworks, such as the NIST AI Risk Management Framework and ISO/IEC 42001, are
          often used as reference points for managing AI use responsibly. Depending on the jurisdiction
          and use, AI-specific legislation, such as the EU AI Act, may also be relevant. Whether and how
          these apply to a given organisation is a question for qualified advisers.
        </p>
      </section>

      <section aria-labelledby="readiness">
        <h2 id="readiness">Questions to ask before using AI in a review</h2>
        <ol>
          <li>Which review tasks are we using it for, and what is the human&apos;s role in each?</li>
          <li>Can every finding be traced to a source passage and a requirement?</li>
          <li>How will we measure accuracy, missed issues and false alarms on our own documents?</li>
          <li>What data will be processed, and are we permitted to send it to this tool?</li>
          <li>Who owns the rule library and keeps it current?</li>
          <li>How will we record decisions so they stand up to later scrutiny?</li>
          <li>What will we do if the tool is wrong or unavailable?</li>
        </ol>
        <p>
          For a structured approach to tool selection, see{" "}
          <Link href="/compliance-review-software#how-to-evaluate">
            How to Evaluate Compliance Review Software
          </Link>
          , and <Link href="/ai-compliance-review-software">AI compliance review software</Link> for
          the AI-specific criteria. For concrete scenarios, see{" "}
          <Link href="/use-cases">AI compliance review use cases</Link>.
        </p>
      </section>
    </PageShell>
  );
}
