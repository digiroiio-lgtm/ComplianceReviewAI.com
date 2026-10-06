import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Callout } from "@/components/Callout";
import { PageShell } from "@/components/PageShell";
import { RelatedResources } from "@/components/RelatedResources";
import { Sources } from "@/components/Sources";
import type { Faq } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";

const PATH = "/ai-compliance-review-software";
const TITLE = "AI Compliance Review Software: What It Is and How to Evaluate It";
const DESCRIPTION =
  "What AI compliance review software does, how it differs from rules-based tools, and the AI-specific criteria for evaluating it. No vendor rankings.";

export const metadata = pageMetadata({
  title: "AI Compliance Review Software Guide",
  description: DESCRIPTION,
  path: PATH,
});

const TOC = [
  { id: "definition", label: "Definition" },
  { id: "how-it-differs", label: "How it differs from other tools" },
  { id: "capabilities", label: "Capabilities buyers evaluate" },
  { id: "workflow", label: "Typical workflow" },
  { id: "ai-vs-manual", label: "AI-assisted vs manual review" },
  { id: "evaluation-criteria", label: "AI-specific evaluation criteria" },
  { id: "use-cases", label: "Common use cases" },
  { id: "limitations", label: "Limitations" },
  { id: "human-oversight", label: "Human oversight" },
  { id: "sources", label: "Sources" },
];

const FAQS: Faq[] = [
  {
    q: "What makes compliance review software 'AI' software?",
    a: "It uses machine-learning or language-model components, for example to read unstructured documents, classify them or compare their meaning with requirements, rather than only applying fixed rules or keyword searches. Many products combine both approaches.",
  },
  {
    q: "Can AI compliance review software certify that a document is compliant?",
    a: "No. It can produce draft findings and highlight possible gaps. Whether a document or process complies is a judgment that qualified people make and remain accountable for.",
  },
  {
    q: "How should accuracy be tested?",
    a: "By running the software on a representative sample of your own documents where the correct answers are already known, then measuring issues found, issues missed and false alarms, and repeating the test when the model or rule library changes.",
  },
];

const SOURCES = [
  {
    label: "NIST, AI Risk Management Framework (AI RMF 1.0) and Generative AI Profile",
    href: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
  {
    label: "ISO/IEC 42001:2023, Artificial intelligence management system",
    href: "https://www.iso.org/standard/81230.html",
  },
  {
    label: "Regulation (EU) 2024/1689 (EU Artificial Intelligence Act), EUR-Lex",
    href: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
  },
];

export default function Page() {
  return (
    <PageShell
      path={PATH}
      crumb="AI Compliance Review Software"
      title={TITLE}
      lead="A category guide for teams comparing AI-enabled tools for compliance review: what the software does, how to test it, and where it stops."
      description={DESCRIPTION}
      toc={TOC}
      faqs={FAQS}
      assetCategory="AI compliance review software"
      intro={
        <AnswerBox>
          AI compliance review software applies machine learning and language models to the
          reading-heavy parts of compliance review: extracting terms from documents, comparing them with
          requirements, flagging possible gaps and organising evidence. It produces draft findings with
          source citations for qualified people to approve. It supports compliance teams; it does not
          decide whether an organisation complies.
        </AnswerBox>
      }
    >
      <section aria-labelledby="definition">
        <h2 id="definition">Definition</h2>
        <p>
          <strong>AI compliance review software</strong> is a segment of compliance software whose core
          function is to examine documents, policies, contracts, vendor materials or records against a
          set of requirements, using AI techniques to do the reading and comparison. The output is a set
          of candidate findings that a reviewer confirms, edits or rejects.
        </p>
        <p>
          The segment sits within the wider category covered in{" "}
          <Link href="/compliance-review-software">compliance review software</Link>. This page focuses
          on what the AI component adds, and on the extra questions it raises. For the underlying
          activity, see <Link href="/what-is-compliance-review">what a compliance review is</Link>.
        </p>
      </section>

      <section aria-labelledby="how-it-differs">
        <h2 id="how-it-differs">How it differs from other tools</h2>
        <ul>
          <li>
            <strong>Rules-based compliance tools</strong> apply fixed checks, such as a required field or
            clause being present. They are predictable but struggle with varied wording. AI-enabled
            tools aim to handle that variation, at the cost of less predictable behaviour.
          </li>
          <li>
            <strong>Governance, risk and compliance (GRC) platforms</strong> manage risk registers,
            policies, controls and audits across a programme. AI review software concentrates on
            analysing content, and may feed findings into a GRC platform.
          </li>
          <li>
            <strong>General-purpose AI assistants</strong> can summarise a document, but typically lack a
            controlled requirement library, approval workflow, audit trail and permissions. Those
            features are what make an output usable as a compliance record.
          </li>
        </ul>
      </section>

      <section aria-labelledby="capabilities">
        <h2 id="capabilities">Capabilities buyers evaluate</h2>
        <p>
          The capabilities below are the ones most often assessed. Each is described in more depth in{" "}
          <Link href="/ai-compliance-review">AI compliance review</Link>.
        </p>
        <ul>
          <li>
            <strong>Document extraction</strong>: pulling parties, dates, obligations, claims and
            certificate scopes from unstructured files, including scans and tables.
          </li>
          <li>
            <strong>Classification</strong>: sorting documents and passages by type, topic, jurisdiction
            or sensitivity.
          </li>
          <li>
            <strong>Policy and requirement comparison</strong>: identifying missing, conflicting or
            outdated content against a requirement set.
          </li>
          <li>
            <strong>Risk flagging and prioritisation</strong>: highlighting items likely to need
            attention first.
          </li>
          <li>
            <strong>Evidence matching</strong>: linking requirements to existing artefacts and spotting
            stale or missing ones.
          </li>
          <li>
            <strong>Change detection</strong>: comparing document versions and monitored sources.
          </li>
          <li>
            <strong>Review controls</strong>: citations, approval steps, audit trail, version history,
            permissions and reporting.
          </li>
        </ul>
      </section>

      <section aria-labelledby="workflow">
        <h2 id="workflow">Typical workflow</h2>
        <ol>
          <li>
            <strong>Ingest</strong> documents from uploads or connected repositories.
          </li>
          <li>
            <strong>Extract and classify</strong> content, retaining a link to the source passage.
          </li>
          <li>
            <strong>Compare</strong> the content with the selected requirement or rule library.
          </li>
          <li>
            <strong>Flag</strong> candidate findings, ranked by potential risk.
          </li>
          <li>
            <strong>Review</strong>: a person confirms, edits or rejects each finding and records why.
          </li>
          <li>
            <strong>Approve and report</strong>, retaining the decision, the evidence and the versions
            used.
          </li>
        </ol>
        <p>
          The stages are the same as in a manual review; the software changes who does the first pass.
          Concrete scenarios are mapped in <Link href="/use-cases">use cases</Link>.
        </p>
      </section>

      <section aria-labelledby="ai-vs-manual">
        <h2 id="ai-vs-manual">AI-assisted vs manual review</h2>
        <div className="table-wrap" role="region" aria-label="AI-assisted versus manual review" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th scope="col">Aspect</th>
                <th scope="col">Manual review</th>
                <th scope="col">AI-assisted review</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">First pass</th>
                <td>Reviewer reads every document in full</td>
                <td>Software reads, extracts and flags; reviewer verifies</td>
              </tr>
              <tr>
                <th scope="row">Consistency</th>
                <td>Varies between reviewers</td>
                <td>Same checks each run, though results can change between model versions</td>
              </tr>
              <tr>
                <th scope="row">Error profile</th>
                <td>Fatigue, oversight</td>
                <td>Misreadings and fabricated output</td>
              </tr>
              <tr>
                <th scope="row">Record of work</th>
                <td>Notes and spreadsheets</td>
                <td>Structured findings with citations, if the tool provides them</td>
              </tr>
              <tr>
                <th scope="row">Accountability</th>
                <td>Named reviewer</td>
                <td>Unchanged: named reviewer and approver</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="evaluation-criteria">
        <h2 id="evaluation-criteria">AI-specific evaluation criteria</h2>
        <p>
          General criteria such as security, integrations and reporting are covered in the{" "}
          <Link href="/compliance-review-software#how-to-evaluate">evaluation scorecard</Link>. The
          AI component adds the following questions:
        </p>
        <ul>
          <li>
            <strong>Grounding and citations.</strong> Does every finding link to the exact source text
            and the requirement, so a reviewer can check it quickly?
          </li>
          <li>
            <strong>Measured accuracy.</strong> Can the provider describe how accuracy was measured, and
            will it support a pilot on your own documents?
          </li>
          <li>
            <strong>Model change management.</strong> Are you told when underlying models change, and
            can you re-test before the change affects live reviews?
          </li>
          <li>
            <strong>Data use.</strong> Are your documents used to train models, and which third-party
            model providers process them?
          </li>
          <li>
            <strong>Requirement library control.</strong> Who maintains the content, and are versions
            and sources recorded?
          </li>
          <li>
            <strong>Explainability.</strong> Can a reviewer see why a finding was raised and record
            disagreement?
          </li>
          <li>
            <strong>AI governance alignment.</strong> Does the provider document its approach against
            recognised frameworks such as the NIST AI Risk Management Framework or ISO/IEC 42001?
          </li>
        </ul>
        <p>
          The NIST framework is voluntary guidance for managing AI risk, and ISO/IEC 42001 specifies
          requirements for an AI management system; neither certifies that a particular product is
          accurate or compliant.
        </p>
      </section>

      <section aria-labelledby="use-cases">
        <h2 id="use-cases">Common use cases</h2>
        <ul>
          <li>
            <Link href="/use-cases#policy-review">Policy review</Link> against a requirement checklist.
          </li>
          <li>
            <Link href="/use-cases#vendor-compliance-review">Vendor compliance review</Link> from
            questionnaires, certificates and contracts.
          </li>
          <li>
            <Link href="/use-cases#contract-compliance-checks">Contract compliance checks</Link> against
            a clause playbook.
          </li>
          <li>
            <Link href="/use-cases#marketing-advertising-review">Marketing and advertising review</Link>{" "}
            for claims and disclosures.
          </li>
          <li>
            <Link href="/use-cases#regulatory-change-monitoring">Regulatory change monitoring</Link>.
          </li>
        </ul>
        <p>
          Sector considerations are described in <Link href="/industries">compliance review by industry</Link>.
        </p>
      </section>

      <section aria-labelledby="limitations">
        <h2 id="limitations">Limitations</h2>
        <ul>
          <li>
            <strong>Hallucination.</strong> Generative models can produce plausible but false statements,
            including requirements that do not exist.
          </li>
          <li>
            <strong>Scope.</strong> Software reads what it is given; it cannot confirm that practice
            matches paperwork.
          </li>
          <li>
            <strong>Currency.</strong> Requirement libraries can lag behind changes in the rules.
          </li>
          <li>
            <strong>Jurisdiction.</strong> Requirements depend on where and how an organisation operates.
          </li>
          <li>
            <strong>Regulatory context.</strong> Depending on its use, an AI system may itself be subject
            to rules such as the EU AI Act. Applicability is a question for qualified advisers.
          </li>
        </ul>
      </section>

      <section aria-labelledby="human-oversight">
        <h2 id="human-oversight">Human oversight</h2>
        <Callout tone="caution" title="Assistance, not judgment">
          <p>
            The responsible pattern is that software prepares findings and a named person approves them.
            Responsibility for compliance decisions stays with the organisation and cannot be delegated
            to a tool or its provider.
          </p>
        </Callout>
        <p>
          Practical controls include required approval before closing findings, sampling of items the
          software marked as fine, escalation of low-confidence results, and records of who decided what.
        </p>
      </section>

      <Sources items={SOURCES} />
      <RelatedResources exclude={PATH} />
    </PageShell>
  );
}
