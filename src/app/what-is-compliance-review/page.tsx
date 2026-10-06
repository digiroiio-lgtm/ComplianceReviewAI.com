import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Callout } from "@/components/Callout";
import { PageShell } from "@/components/PageShell";
import { WHAT_IS_FAQS } from "@/content/faqs";
import { pageMetadata } from "@/lib/seo";

const PATH = "/what-is-compliance-review";
const DESCRIPTION =
  "A compliance review is a structured check of whether an organisation, process or document meets the rules that apply to it. Learn the purpose, triggers, process and how it differs from an audit.";

export const metadata = pageMetadata({
  title: "What Is Compliance Review? A Clear Guide",
  description: DESCRIPTION,
  path: PATH,
});

const TOC = [
  { id: "definition", label: "Definition" },
  { id: "purpose", label: "Purpose" },
  { id: "triggers", label: "Common triggers" },
  { id: "process", label: "The review process" },
  { id: "evidence-gathering", label: "Evidence gathering" },
  { id: "gap-identification", label: "Gap identification" },
  { id: "remediation", label: "Remediation" },
  { id: "documentation", label: "Documentation" },
  { id: "monitoring", label: "Monitoring" },
  { id: "audit-assessment-review", label: "Audit vs assessment vs review" },
  { id: "who-is-involved", label: "Who is involved" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "where-ai-helps", label: "Where AI can help" },
];

export default function Page() {
  return (
    <PageShell
      path={PATH}
      crumb="What Is Compliance Review?"
      title="What Is a Compliance Review?"
      lead="A plain-language guide to what a compliance review is, why organisations do it, and how the process works from scoping to monitoring."
      description={DESCRIPTION}
      toc={TOC}
      faqs={WHAT_IS_FAQS}
      intro={
        <AnswerBox>
          A compliance review is a structured examination of whether an organisation, process, document
          or product meets the laws, regulations, standards and internal policies that apply to it. It
          involves gathering evidence, identifying gaps against requirements, assigning remediation,
          documenting the outcome and monitoring whether the fixes hold.
        </AnswerBox>
      }
    >
      <section aria-labelledby="definition">
        <h2 id="definition">Definition</h2>
        <p>
          A <strong>compliance review</strong> compares what an organisation does, or what its documents
          say, with what it is required to do. The requirements can come from several places:
        </p>
        <ul>
          <li>
            <strong>External rules</strong>: laws, regulations and regulator guidance.
          </li>
          <li>
            <strong>Standards and frameworks</strong> the organisation has chosen to follow or been
            asked to follow, such as industry standards or customer requirements.
          </li>
          <li>
            <strong>Contractual obligations</strong> to customers, partners or lenders.
          </li>
          <li>
            <strong>Internal policies and procedures</strong> the organisation has set for itself.
          </li>
        </ul>
        <p>
          The result is a documented conclusion about where the organisation meets the requirements,
          where it does not, and what should be done about it. The term is used across industries, and
          the exact scope varies. Some teams use it for a single document review, others for a
          programme-level examination of a business area.
        </p>
      </section>

      <section aria-labelledby="purpose">
        <h2 id="purpose">Purpose</h2>
        <p>Organisations carry out compliance reviews to:</p>
        <ul>
          <li>Find gaps and weaknesses before a regulator, customer or auditor does.</li>
          <li>Confirm that policies are current and reflect the requirements they are meant to address.</li>
          <li>Show that management has taken reasonable steps to oversee compliance.</li>
          <li>Prioritise limited compliance resources toward the areas of greatest risk.</li>
          <li>Support decisions, such as launching a product, entering a market or onboarding a vendor.</li>
        </ul>
      </section>

      <section aria-labelledby="triggers">
        <h2 id="triggers">Common triggers</h2>
        <p>A review may be scheduled or may be prompted by an event. Typical triggers include:</p>
        <ul>
          <li>A regular schedule set by policy, regulation or contract.</li>
          <li>A new or changed law, regulation or regulator expectation.</li>
          <li>A new product, service, market or business model.</li>
          <li>Onboarding a vendor or other third party, or a material change in one.</li>
          <li>A merger, acquisition or investment.</li>
          <li>An incident, complaint, near miss or prior audit finding.</li>
          <li>A customer, partner or regulator request for assurance.</li>
        </ul>
      </section>

      <section aria-labelledby="process">
        <h2 id="process">The compliance review process</h2>
        <p>
          Exact steps vary by organisation, but most reviews follow the same sequence. The sections
          below look at the stages that are most often under-specified.
        </p>
        <ol>
          <li>
            <strong>Define scope and criteria.</strong> Decide what is being reviewed, which
            requirements apply, the period covered and who is responsible.
          </li>
          <li>
            <strong>Plan and risk-rank.</strong> Focus effort where the potential impact or likelihood
            of non-compliance is highest.
          </li>
          <li>
            <strong>Gather evidence.</strong> Collect documents, records, system data and interview
            input.
          </li>
          <li>
            <strong>Assess against requirements.</strong> Compare the evidence with each requirement and
            identify gaps.
          </li>
          <li>
            <strong>Report findings.</strong> Document conclusions, severity and recommended actions.
          </li>
          <li>
            <strong>Remediate.</strong> Assign owners and deadlines and fix the gaps.
          </li>
          <li>
            <strong>Verify and monitor.</strong> Confirm fixes worked and watch for recurrence or
            change.
          </li>
        </ol>
      </section>

      <section aria-labelledby="evidence-gathering">
        <h2 id="evidence-gathering">Evidence gathering</h2>
        <p>
          Evidence is what turns an opinion into a supportable conclusion. Reviewers typically look for
          several types:
        </p>
        <ul>
          <li>
            <strong>Documents</strong>: policies, procedures, contracts, training materials, minutes.
          </li>
          <li>
            <strong>Records</strong>: logs, approvals, tickets, attendance and test results showing
            that a control actually operated.
          </li>
          <li>
            <strong>System data</strong>: configurations, reports and samples drawn from systems.
          </li>
          <li>
            <strong>Testimony</strong>: interviews and walkthroughs that explain how work is really
            done.
          </li>
        </ul>
        <p>
          Good evidence is relevant, current, traceable to its source, and sufficient in quantity. A
          policy shows what the organisation says it does; operating records show what it actually did.
        </p>
      </section>

      <section aria-labelledby="gap-identification">
        <h2 id="gap-identification">Gap identification</h2>
        <p>
          A gap is a difference between a requirement and current practice or documentation. Reviewers
          commonly distinguish between:
        </p>
        <ul>
          <li>
            <strong>Design gaps</strong>: the requirement is not addressed by any policy or control.
          </li>
          <li>
            <strong>Operating gaps</strong>: a control exists but is not performed consistently.
          </li>
          <li>
            <strong>Evidence gaps</strong>: the control may operate, but there is no record to show it.
          </li>
        </ul>
        <p>
          Each gap is usually rated for severity based on the potential impact, how likely it is to lead
          to harm or a breach, and whether other controls compensate for it.
        </p>
      </section>

      <section aria-labelledby="remediation">
        <h2 id="remediation">Remediation</h2>
        <p>
          Remediation turns findings into action. A workable remediation plan names an owner for each
          finding, describes the corrective step, sets a realistic deadline, and says how completion
          will be verified. Some findings are fixed by updating a document; others need process,
          training, system or contract changes. Where a gap cannot be fixed quickly, organisations
          sometimes record a temporary compensating control or a formally approved risk acceptance.
        </p>
      </section>

      <section aria-labelledby="documentation">
        <h2 id="documentation">Documentation</h2>
        <p>
          A review is only as useful as its record. Typical documentation covers the scope and criteria,
          the evidence examined, the findings and their ratings, the decisions made and by whom, the
          remediation plan, and the final status. This record supports management oversight, makes the
          next review easier, and helps the organisation explain its position if questioned by a
          regulator, auditor or customer.
        </p>
      </section>

      <section aria-labelledby="monitoring">
        <h2 id="monitoring">Monitoring</h2>
        <p>
          <strong>Compliance monitoring</strong> is the ongoing activity that follows a review. It checks
          that fixes remain effective and watches for new risks, including changes to the rules, the
          business or its vendors. Monitoring can be periodic (for example, quarterly control checks) or
          continuous (for example, alerts on key indicators). A review is a point-in-time assessment;
          monitoring helps keep its conclusions true between reviews.
        </p>
      </section>

      <section aria-labelledby="audit-assessment-review">
        <h2 id="audit-assessment-review">Compliance review vs audit vs assessment</h2>
        <p>
          These terms overlap and are used differently across organisations and professions. The
          comparison below reflects common usage rather than a universal definition.
        </p>
        <div className="table-wrap" role="region" aria-label="Comparison of audit, assessment and compliance review" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th scope="col">&nbsp;</th>
                <th scope="col">Compliance review</th>
                <th scope="col">Compliance assessment</th>
                <th scope="col">Audit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Typical aim</th>
                <td>Check whether requirements are being met and identify gaps</td>
                <td>Evaluate the level of risk or maturity against a framework</td>
                <td>Provide formal, evidence-based verification against defined criteria</td>
              </tr>
              <tr>
                <th scope="row">Who performs it</th>
                <td>Compliance, legal or business teams, sometimes with advisers</td>
                <td>Compliance or risk teams, often with external input</td>
                <td>Internal audit or an independent external auditor</td>
              </tr>
              <tr>
                <th scope="row">Independence</th>
                <td>Often internal; independence varies</td>
                <td>Internal or external</td>
                <td>Independence is a defining feature</td>
              </tr>
              <tr>
                <th scope="row">Formality</th>
                <td>Flexible; scope set by need</td>
                <td>Structured, often scoring-based</td>
                <td>Highly formal, with prescribed methods and reporting</td>
              </tr>
              <tr>
                <th scope="row">Typical output</th>
                <td>Findings and remediation plan</td>
                <td>Risk ratings or maturity view with recommendations</td>
                <td>Audit report, opinion or attestation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          In practice the three feed one another. An assessment can help decide where to focus reviews,
          reviews can generate evidence that auditors later rely on, and audit findings often trigger
          further reviews.
        </p>
      </section>

      <section aria-labelledby="who-is-involved">
        <h2 id="who-is-involved">Who is involved</h2>
        <ul>
          <li>
            <strong>Compliance function</strong>: designs and often leads the review.
          </li>
          <li>
            <strong>Legal</strong>: interprets requirements and advises on obligations.
          </li>
          <li>
            <strong>Business and process owners</strong>: supply evidence and own remediation.
          </li>
          <li>
            <strong>Security, privacy and IT</strong>: provide technical evidence and controls.
          </li>
          <li>
            <strong>Internal audit or external advisers</strong>: provide independent challenge and
            specialist expertise.
          </li>
          <li>
            <strong>Senior management and the board</strong>: oversee, resource and accept residual
            risk.
          </li>
        </ul>
      </section>

      <section aria-labelledby="common-mistakes">
        <h2 id="common-mistakes">Common mistakes</h2>
        <ul>
          <li>Reviewing documents only and never checking that practice matches them.</li>
          <li>Treating the review as a one-time exercise with no monitoring afterwards.</li>
          <li>Leaving the scope vague, so important areas are missed.</li>
          <li>Recording findings without owners, deadlines or verification.</li>
          <li>Relying on outdated requirements or sources.</li>
          <li>Keeping poor records of decisions and evidence.</li>
        </ul>
      </section>

      <section aria-labelledby="where-ai-helps">
        <h2 id="where-ai-helps">Where AI can help</h2>
        <p>
          Much of a compliance review involves reading, comparing and organising large amounts of text.
          That is where AI can assist: extracting key terms, classifying documents, comparing policies
          with requirements, and flagging items for a person to examine. It does not remove the need for
          professional judgment about what requirements mean or whether the organisation is compliant.
        </p>
        <Callout title="Related guides">
          <p>
            See <Link href="/ai-compliance-review">AI compliance review</Link> for how AI assists, and{" "}
            <Link href="/use-cases">use cases</Link> for concrete review scenarios. To see which review
            steps can be handled by software, read{" "}
            <Link href="/automated-compliance-review">automated compliance review</Link>.
          </p>
        </Callout>
      </section>
    </PageShell>
  );
}
