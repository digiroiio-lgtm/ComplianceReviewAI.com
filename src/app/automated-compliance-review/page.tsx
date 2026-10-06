import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Callout } from "@/components/Callout";
import { PageShell } from "@/components/PageShell";
import { RelatedResources } from "@/components/RelatedResources";
import { Sources } from "@/components/Sources";
import type { Faq } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";

const PATH = "/automated-compliance-review";
const TITLE = "Automated Compliance Review: What Can Be Automated and What Cannot";
const DESCRIPTION =
  "Which compliance review tasks can be automated, the spectrum from manual to automated, and where human decisions must remain.";

export const metadata = pageMetadata({
  title: "Automated Compliance Review Guide",
  description: DESCRIPTION,
  path: PATH,
});

const TOC = [
  { id: "definition", label: "Definition" },
  { id: "spectrum", label: "The automation spectrum" },
  { id: "what-can-be-automated", label: "What can be automated" },
  { id: "automated-vs-manual", label: "Automated vs manual review" },
  { id: "workflow", label: "How an automated review runs" },
  { id: "evaluation-criteria", label: "Evaluation criteria" },
  { id: "use-cases", label: "Common use cases" },
  { id: "limitations", label: "Limitations" },
  { id: "human-oversight", label: "Human oversight" },
  { id: "sources", label: "Sources" },
];

const FAQS: Faq[] = [
  {
    q: "Is automated compliance review the same as AI compliance review?",
    a: "Not necessarily. Automation can be fully deterministic, such as scheduled rule checks, with no AI involved. AI techniques add the ability to read unstructured text. Many tools combine both.",
  },
  {
    q: "Can compliance review be fully automated?",
    a: "Individual checks can be, particularly clear-cut ones. Interpreting requirements, weighing risk and accepting accountability are not tasks that responsible organisations hand to software, and some laws restrict solely automated decisions that significantly affect individuals.",
  },
];

const SOURCES = [
  {
    label: "Regulation (EU) 2016/679 (GDPR), Article 22, EUR-Lex",
    href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
  },
  {
    label: "ISO 37301:2021, Compliance management systems",
    href: "https://www.iso.org/standard/75080.html",
  },
  {
    label: "NIST, AI Risk Management Framework",
    href: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
];

export default function Page() {
  return (
    <PageShell
      path={PATH}
      crumb="Automated Compliance Review"
      title={TITLE}
      lead="Automation is a spectrum, not a switch. This guide separates the review tasks that automate well from the ones that need a person."
      description={DESCRIPTION}
      toc={TOC}
      faqs={FAQS}
      assetCategory="compliance review automation"
      intro={
        <AnswerBox>
          Automated compliance review means using software to carry out parts of a compliance review
          without manual effort, such as scheduled rule checks, document comparison, evidence matching
          and alerts. Clear-cut, repeatable checks automate well. Interpreting requirements, weighing
          risk and approving outcomes remain human decisions, so most responsible approaches automate
          the preparation of a review rather than its conclusion.
        </AnswerBox>
      }
    >
      <section aria-labelledby="definition">
        <h2 id="definition">Definition</h2>
        <p>
          <strong>Automated compliance review</strong> is the performance of review steps by software
          rather than by a person working manually. It overlaps with, but is broader than,{" "}
          <Link href="/ai-compliance-review">AI compliance review</Link>: a scheduled check that a
          required clause exists is automation without AI, whereas reading free-text policy language to
          judge whether it addresses a requirement typically involves AI techniques.
        </p>
        <p>
          The underlying activity is described in{" "}
          <Link href="/what-is-compliance-review">What Is a Compliance Review?</Link> Automation changes
          how steps such as evidence gathering and gap identification are performed, not what a review
          is for.
        </p>
      </section>

      <section aria-labelledby="spectrum">
        <h2 id="spectrum">The automation spectrum</h2>
        <div className="table-wrap" role="region" aria-label="Spectrum of automation" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th scope="col">Level</th>
                <th scope="col">What software does</th>
                <th scope="col">What people do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Manual</th>
                <td>Nothing beyond storage</td>
                <td>Read, compare, record and decide</td>
              </tr>
              <tr>
                <th scope="row">Assisted</th>
                <td>Extracts, classifies and flags on request</td>
                <td>Verify each result and decide</td>
              </tr>
              <tr>
                <th scope="row">Automated checks</th>
                <td>Runs defined checks on a schedule or trigger and logs results</td>
                <td>Maintain the checks, investigate exceptions, decide</td>
              </tr>
              <tr>
                <th scope="row">Exception-based review</th>
                <td>Clears clear-cut items and escalates the rest</td>
                <td>Review escalations, sample cleared items, own the rules</td>
              </tr>
              <tr>
                <th scope="row">Fully autonomous decision</th>
                <td>Reaches and acts on conclusions alone</td>
                <td>Not a pattern this site describes or endorses</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Most organisations operate in the middle rows. Moving right on the table increases speed but
          also the cost of a mistake, so it usually requires stronger testing, monitoring and governance.
        </p>
      </section>

      <section aria-labelledby="what-can-be-automated">
        <h2 id="what-can-be-automated">What can be automated</h2>
        <h3>Tasks that suit automation</h3>
        <ul>
          <li>Checking that required fields, clauses or disclosures are present.</li>
          <li>Extracting dates, parties, certificate scopes and key terms.</li>
          <li>Comparing document versions and flagging differences.</li>
          <li>Matching evidence to requirements and spotting expired items.</li>
          <li>Scheduling reviews and reminding owners.</li>
          <li>Monitoring designated sources for new or changed publications.</li>
        </ul>
        <h3>Tasks that need a person</h3>
        <ul>
          <li>Deciding how a requirement applies to specific facts.</li>
          <li>Judging whether wording creates a real control or only resembles one.</li>
          <li>Assessing materiality and setting risk appetite.</li>
          <li>Approving exceptions, remediation and sign-off.</li>
          <li>Communicating with regulators, auditors and counterparties.</li>
        </ul>
      </section>

      <section aria-labelledby="automated-vs-manual">
        <h2 id="automated-vs-manual">Automated vs manual review</h2>
        <div className="table-wrap" role="region" aria-label="Automated versus manual review" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th scope="col">Aspect</th>
                <th scope="col">Manual review</th>
                <th scope="col">Automated review</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Volume</th>
                <td>Limited by reviewer time</td>
                <td>Scales across many documents and runs on schedule</td>
              </tr>
              <tr>
                <th scope="row">Repeatability</th>
                <td>Depends on the individual reviewer</td>
                <td>Same logic every run, once the rules are right</td>
              </tr>
              <tr>
                <th scope="row">Handling ambiguity</th>
                <td>Strong, using experience</td>
                <td>Weak; ambiguous items need escalation</td>
              </tr>
              <tr>
                <th scope="row">Failure mode</th>
                <td>Fatigue and inconsistency</td>
                <td>Systematic error from a faulty rule, applied at scale</td>
              </tr>
              <tr>
                <th scope="row">Evidence trail</th>
                <td>Manual notes</td>
                <td>Logs of every check, if designed in</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="workflow">
        <h2 id="workflow">How an automated review runs</h2>
        <ol>
          <li>
            <strong>Define the checks.</strong> Express each requirement as a rule or comparison, with an
            owner and a source reference.
          </li>
          <li>
            <strong>Trigger.</strong> A schedule, a new document or an upstream event starts the run.
          </li>
          <li>
            <strong>Execute.</strong> The software extracts content and applies the checks.
          </li>
          <li>
            <strong>Triage.</strong> Passed items are logged; failures and uncertain items are escalated.
          </li>
          <li>
            <strong>Human decision.</strong> Reviewers resolve escalations and sample passed items.
          </li>
          <li>
            <strong>Record and improve.</strong> Results are retained, and rules are corrected where
            errors were found.
          </li>
        </ol>
        <p>
          The operational side, routing, reminders and remediation tracking, is covered in{" "}
          <Link href="/compliance-review-automation">compliance review automation</Link>.
        </p>
      </section>

      <section aria-labelledby="evaluation-criteria">
        <h2 id="evaluation-criteria">Evaluation criteria</h2>
        <ul>
          <li>
            <strong>Testability.</strong> Can you test each check against known cases before relying on
            it?
          </li>
          <li>
            <strong>Transparency.</strong> Can you see which rule produced a result and which source
            text it used?
          </li>
          <li>
            <strong>Exception handling.</strong> What happens to items the system cannot classify with
            confidence?
          </li>
          <li>
            <strong>Rule governance.</strong> Are rules versioned, owned and reviewed when requirements
            change?
          </li>
          <li>
            <strong>Logging.</strong> Is every run, result and override recorded and exportable?
          </li>
          <li>
            <strong>Override.</strong> Can a reviewer disagree with a result and record the reason?
          </li>
        </ul>
        <p>
          Product-level criteria are in{" "}
          <Link href="/compliance-review-software#how-to-evaluate">How to Evaluate Compliance Review Software</Link>{" "}
          and <Link href="/ai-compliance-review-software#evaluation-criteria">AI-specific criteria</Link>.
        </p>
      </section>

      <section aria-labelledby="use-cases">
        <h2 id="use-cases">Common use cases</h2>
        <ul>
          <li>
            <Link href="/use-cases#evidence-collection">Evidence collection</Link> for recurring audits.
          </li>
          <li>
            <Link href="/use-cases#regulatory-change-monitoring">Regulatory change monitoring</Link>.
          </li>
          <li>
            <Link href="/use-cases#contract-compliance-checks">Contract compliance checks</Link> against
            a clause playbook.
          </li>
          <li>
            <Link href="/use-cases#third-party-risk">Third-party risk</Link> monitoring for lapsed
            certificates.
          </li>
          <li>
            <Link href="/use-cases#policy-review">Policy review</Link> against requirement checklists.
          </li>
        </ul>
        <p>
          How these look in specific sectors is covered in{" "}
          <Link href="/industries">compliance review by industry</Link>.
        </p>
      </section>

      <section aria-labelledby="limitations">
        <h2 id="limitations">Limitations</h2>
        <ul>
          <li>
            <strong>Rules are only as good as their authors.</strong> A flawed rule fails the same way on
            every document.
          </li>
          <li>
            <strong>False confidence.</strong> A clean automated result can be mistaken for assurance when
            the checks cover only part of the requirement.
          </li>
          <li>
            <strong>Context.</strong> Many compliance questions depend on facts that are not in the
            documents.
          </li>
          <li>
            <strong>Maintenance.</strong> Rules and libraries need updating as requirements change.
          </li>
        </ul>
      </section>

      <section aria-labelledby="human-oversight">
        <h2 id="human-oversight">Human oversight</h2>
        <Callout tone="caution" title="Automation of review is not automation of accountability">
          <p>
            Compliance decisions remain the responsibility of the organisation. Where individuals are
            affected, laws may also limit decisions made solely by automated means. For example, Article
            22 of the GDPR gives individuals rights in relation to solely automated decisions that
            produce legal or similarly significant effects. Whether such rules apply to a given process
            is a question for qualified advisers.
          </p>
        </Callout>
        <p>
          Compliance management standards such as ISO 37301 emphasise defined responsibilities,
          monitoring and continual improvement, and those expectations apply equally to automated
          steps. For AI components, the NIST AI Risk Management Framework offers voluntary guidance on
          governing and measuring risk.
        </p>
      </section>

      <Sources items={SOURCES} />
      <RelatedResources exclude={PATH} />
    </PageShell>
  );
}
