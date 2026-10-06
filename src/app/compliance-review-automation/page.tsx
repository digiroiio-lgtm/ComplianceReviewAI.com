import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Callout } from "@/components/Callout";
import { PageShell } from "@/components/PageShell";
import { RelatedResources } from "@/components/RelatedResources";
import { Sources } from "@/components/Sources";
import type { Faq } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";

const PATH = "/compliance-review-automation";
const TITLE = "Compliance Review Automation: Workflows, Capabilities and Implementation";
const DESCRIPTION =
  "How intake, routing, evidence requests, approvals and remediation tracking are automated in compliance review, and how to implement it.";

export const metadata = pageMetadata({
  title: "Compliance Review Automation Guide",
  description: DESCRIPTION,
  path: PATH,
});

const TOC = [
  { id: "definition", label: "Definition" },
  { id: "capabilities", label: "Workflow capabilities" },
  { id: "workflow", label: "Automated review workflow" },
  { id: "manual-vs-automated", label: "Manual vs automated workflow" },
  { id: "implementation", label: "Implementation approach" },
  { id: "evaluation-criteria", label: "Evaluation criteria" },
  { id: "use-cases", label: "Common use cases" },
  { id: "limitations", label: "Limitations" },
  { id: "human-oversight", label: "Human oversight" },
  { id: "sources", label: "Sources" },
];

const FAQS: Faq[] = [
  {
    q: "What is the difference between compliance review automation and automated compliance review?",
    a: "Automated compliance review concerns software performing the analysis, such as checks and comparisons. Compliance review automation concerns the surrounding workflow: intake, assignment, reminders, evidence requests, approvals and tracking. Most programmes need both.",
  },
  {
    q: "Where should a team start?",
    a: "Usually with a repetitive, well-understood process that already has a documented owner, such as recurring evidence requests, and with measures in place so that results can be compared before and after.",
  },
];

const SOURCES = [
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
      crumb="Compliance Review Automation"
      title={TITLE}
      lead="Much of the time in a compliance review goes on coordination rather than analysis. This guide covers automating that workflow and keeping it governable."
      description={DESCRIPTION}
      toc={TOC}
      faqs={FAQS}
      assetCategory="compliance review automation"
      intro={
        <AnswerBox>
          Compliance review automation applies software to the workflow around a review: intake of
          requests, routing to owners, scheduled reviews, evidence requests, reminders, approvals,
          remediation tracking and reporting. It reduces manual coordination and improves traceability.
          It complements, rather than replaces, the professional judgment involved in deciding whether
          requirements are met.
        </AnswerBox>
      }
    >
      <section aria-labelledby="definition">
        <h2 id="definition">Definition</h2>
        <p>
          <strong>Compliance review automation</strong> is the use of workflow software, integrations
          and, where appropriate, AI components to run the repeatable operational steps of a compliance
          review. The category is related to, but distinct from, automating the analysis itself, which is
          described in <Link href="/automated-compliance-review">automated compliance review</Link>.
        </p>
        <p>
          Teams typically look to automate workflow when reviews recur, involve many contributors or must
          produce a consistent record. The review process being automated is outlined in{" "}
          <Link href="/what-is-compliance-review#process">the compliance review process</Link>.
        </p>
      </section>

      <section aria-labelledby="capabilities">
        <h2 id="capabilities">Workflow capabilities</h2>
        <ul>
          <li>
            <strong>Intake and triage</strong>: capturing review requests and classifying them by type,
            risk and owner.
          </li>
          <li>
            <strong>Routing and assignment</strong>: sending tasks to the right reviewer with due dates
            and escalation.
          </li>
          <li>
            <strong>Scheduling</strong>: generating recurring reviews from templates.
          </li>
          <li>
            <strong>Evidence requests</strong>: asking control owners for artefacts, tracking responses
            and flagging stale items.
          </li>
          <li>
            <strong>Approvals</strong>: enforcing required sign-offs and separating preparer from
            approver.
          </li>
          <li>
            <strong>Remediation tracking</strong>: assigning findings, monitoring deadlines and
            verifying closure.
          </li>
          <li>
            <strong>Integrations</strong>: connecting document stores, ticketing, identity and
            messaging systems.
          </li>
          <li>
            <strong>Reporting and audit trail</strong>: recording who did what and when, and summarising
            status.
          </li>
        </ul>
        <p>
          Where analysis steps use AI, the additional questions are covered in{" "}
          <Link href="/ai-compliance-review-software">AI compliance review software</Link>.
        </p>
      </section>

      <section aria-labelledby="workflow">
        <h2 id="workflow">Automated review workflow</h2>
        <ol>
          <li>
            <strong>Trigger.</strong> A schedule, a new vendor, a product change or a regulatory update
            opens a review from a template.
          </li>
          <li>
            <strong>Assign.</strong> Tasks and evidence requests go to named owners with deadlines.
          </li>
          <li>
            <strong>Collect.</strong> Artefacts are gathered and indexed; missing or expired items are
            chased automatically.
          </li>
          <li>
            <strong>Analyse.</strong> Checks and comparisons run, producing candidate findings.
          </li>
          <li>
            <strong>Decide.</strong> A reviewer evaluates findings and an approver signs off.
          </li>
          <li>
            <strong>Remediate.</strong> Actions are assigned, tracked and verified.
          </li>
          <li>
            <strong>Report and monitor.</strong> Status is reported and the next review is scheduled.
          </li>
        </ol>
      </section>

      <section aria-labelledby="manual-vs-automated">
        <h2 id="manual-vs-automated">Manual vs automated workflow</h2>
        <div className="table-wrap" role="region" aria-label="Manual versus automated workflow" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th scope="col">Aspect</th>
                <th scope="col">Manual coordination</th>
                <th scope="col">Automated workflow</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Assignments</th>
                <td>Email and spreadsheets</td>
                <td>Rule-based routing with deadlines</td>
              </tr>
              <tr>
                <th scope="row">Follow-up</th>
                <td>Depends on someone remembering</td>
                <td>Automatic reminders and escalation</td>
              </tr>
              <tr>
                <th scope="row">Evidence</th>
                <td>Scattered across inboxes and drives</td>
                <td>Indexed with source and date</td>
              </tr>
              <tr>
                <th scope="row">Visibility</th>
                <td>Status assembled by hand</td>
                <td>Live view of open items</td>
              </tr>
              <tr>
                <th scope="row">Poor process</th>
                <td>Slow and inconsistent</td>
                <td>Faster, but the same problems at greater scale</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="implementation">
        <h2 id="implementation">Implementation approach</h2>
        <ol>
          <li>
            <strong>Map the current process.</strong> Document who does what, in which system, and where
            time is lost.
          </li>
          <li>
            <strong>Standardise first.</strong> Agree templates, ownership and definitions of done.
            Automating an inconsistent process fixes nothing.
          </li>
          <li>
            <strong>Pick a contained starting point.</strong> A recurring, low-risk process makes
            results easy to compare.
          </li>
          <li>
            <strong>Set measures.</strong> Examples include cycle time, overdue items and evidence
            completeness, tracked before and after.
          </li>
          <li>
            <strong>Define governance.</strong> Assign an owner for workflow rules and a change process
            for editing them.
          </li>
          <li>
            <strong>Expand deliberately.</strong> Add processes once the first is stable and reviewed.
          </li>
        </ol>
        <p>
          ISO 37301, the standard for compliance management systems, treats monitoring, documented
          information and continual improvement as parts of a managed system; automation can support
          each but does not substitute for assigning responsibility.
        </p>
      </section>

      <section aria-labelledby="evaluation-criteria">
        <h2 id="evaluation-criteria">Evaluation criteria</h2>
        <ul>
          <li>
            <strong>Configurability.</strong> Can workflows and templates be changed by compliance staff
            without development work?
          </li>
          <li>
            <strong>Integrations.</strong> Does it connect to the systems where evidence and tasks
            already live?
          </li>
          <li>
            <strong>Permissions.</strong> Can access be limited by role, business unit or review?
          </li>
          <li>
            <strong>Audit trail.</strong> Are actions and approvals recorded and exportable?
          </li>
          <li>
            <strong>Exit.</strong> Can records be exported in open formats?
          </li>
        </ul>
        <p>
          A fuller scorecard is in{" "}
          <Link href="/compliance-review-software#how-to-evaluate">How to Evaluate Compliance Review Software</Link>.
        </p>
      </section>

      <section aria-labelledby="use-cases">
        <h2 id="use-cases">Common use cases</h2>
        <ul>
          <li>
            <Link href="/use-cases#evidence-collection">Evidence collection</Link> for recurring audits
            and reviews.
          </li>
          <li>
            <Link href="/use-cases#vendor-compliance-review">Vendor compliance review</Link> onboarding
            and renewal cycles.
          </li>
          <li>
            <Link href="/use-cases#internal-control-review">Internal control review</Link> testing
            schedules.
          </li>
          <li>
            <Link href="/use-cases#regulatory-change-monitoring">Regulatory change monitoring</Link>{" "}
            action plans.
          </li>
          <li>
            <Link href="/use-cases#marketing-advertising-review">Marketing and advertising review</Link>{" "}
            approval queues.
          </li>
        </ul>
        <p>
          Sector variations are summarised in <Link href="/industries">compliance review by industry</Link>.
        </p>
      </section>

      <section aria-labelledby="limitations">
        <h2 id="limitations">Limitations</h2>
        <ul>
          <li>Automation speeds up a process; it does not make a flawed process correct.</li>
          <li>Reminders and routing do not guarantee that evidence is accurate or sufficient.</li>
          <li>Integrations need maintenance when connected systems change.</li>
          <li>Over-automation can create a record that looks complete while review quality declines.</li>
          <li>Workflow tools do not interpret requirements or advise on how they apply.</li>
        </ul>
      </section>

      <section aria-labelledby="human-oversight">
        <h2 id="human-oversight">Human oversight</h2>
        <Callout title="Where people stay in control">
          <p>
            Owners confirm that evidence is accurate, reviewers judge sufficiency, and approvers accept
            outcomes and residual risk. Where AI components feed the workflow, the NIST AI Risk
            Management Framework offers voluntary guidance for governing them. This site provides
            educational information only and does not advise on how any rule applies to a specific
            organisation.
          </p>
        </Callout>
      </section>

      <Sources items={SOURCES} />
      <RelatedResources exclude={PATH} />
    </PageShell>
  );
}
