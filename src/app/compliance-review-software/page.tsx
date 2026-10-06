import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Callout } from "@/components/Callout";
import { PageShell } from "@/components/PageShell";
import { SOFTWARE_FAQS } from "@/content/faqs";
import { pageMetadata } from "@/lib/seo";

const PATH = "/compliance-review-software";
const TITLE = "Compliance Review Software: Features, Workflows and Evaluation Criteria";
const DESCRIPTION =
  "What compliance review software should do, the security and governance questions to ask, and a practical framework for evaluating AI compliance software. No vendor rankings.";

export const metadata = pageMetadata({
  title: "Compliance Review Software: Evaluation Guide",
  description: DESCRIPTION,
  path: PATH,
});

const TOC = [
  { id: "what-it-is", label: "What it is" },
  { id: "what-it-should-do", label: "What it should do" },
  { id: "document-ingestion", label: "Document ingestion" },
  { id: "rule-libraries", label: "Rule libraries" },
  { id: "risk-scoring", label: "Risk scoring" },
  { id: "workflow-management", label: "Workflow management" },
  { id: "human-approval", label: "Human approval" },
  { id: "audit-trails", label: "Audit trails & version history" },
  { id: "explainability", label: "Explainability" },
  { id: "integrations", label: "Integrations" },
  { id: "reporting", label: "Reporting" },
  { id: "security-governance", label: "Security & governance" },
  { id: "how-to-evaluate", label: "How to evaluate" },
  { id: "red-flags", label: "Red flags" },
  { id: "build-or-buy", label: "Build, buy or combine" },
];

const SCORECARD: { area: string; ask: string; look: string }[] = [
  {
    area: "Fit to use case",
    ask: "Does it support the specific reviews we do (for example, policy, vendor or marketing review)?",
    look: "A demo using your own documents and requirements, not only sample data.",
  },
  {
    area: "Accuracy",
    ask: "How does it perform on a sample where we already know the answers?",
    look: "Measured results from a pilot: issues found, issues missed, false alarms.",
  },
  {
    area: "Traceability",
    ask: "Can every finding be traced to a source passage and a requirement?",
    look: "Citations that open the exact source text.",
  },
  {
    area: "Human control",
    ask: "Can we require approval before findings are closed or documents cleared?",
    look: "Configurable approval steps and reviewer roles.",
  },
  {
    area: "Audit trail",
    ask: "Is every action, edit and decision recorded and exportable?",
    look: "Immutable or tamper-evident logs with user, time and version.",
  },
  {
    area: "Rule library control",
    ask: "Who maintains the requirement content, and can we add and version our own?",
    look: "Clear ownership, update process, version history and source references.",
  },
  {
    area: "Security",
    ask: "How is data protected, and what independent assurance exists?",
    look: "Current independent assurance reports and a security review of the provider.",
  },
  {
    area: "Data handling & residency",
    ask: "Where is data stored and processed, and is it used for model training?",
    look: "Written commitments in the contract on location, use, retention and deletion.",
  },
  {
    area: "Permissions",
    ask: "Can we restrict access by role, matter or business unit?",
    look: "Role-based access control, single sign-on and access logs.",
  },
  {
    area: "Integrations",
    ask: "Does it connect to where our documents and tasks already live?",
    look: "Supported connectors and a documented API, tested in the pilot.",
  },
  {
    area: "Reporting",
    ask: "Can we get the reports management, auditors and regulators ask for?",
    look: "Configurable reports and data export.",
  },
  {
    area: "Vendor viability & exit",
    ask: "What happens to our data and records if we leave?",
    look: "Data export in open formats and contractual deletion terms.",
  },
];

export default function Page() {
  return (
    <PageShell
      path={PATH}
      crumb="Compliance Review Software"
      title={TITLE}
      lead="A neutral buyer's guide. It explains what compliance review software should do and how to evaluate any product against your own requirements."
      description={DESCRIPTION}
      toc={TOC}
      faqs={SOFTWARE_FAQS}
      intro={
        <AnswerBox>
          Compliance review software helps teams ingest documents, compare them with requirements, record
          findings, route them for human approval and keep an audit trail. Whether a product is a good
          fit depends on your use cases, your documents, your risk tolerance and your security
          requirements, so it should be evaluated using your own materials rather than demonstrations.
        </AnswerBox>
      }
    >
      <section aria-labelledby="what-it-is">
        <h2 id="what-it-is">What compliance review software is</h2>
        <p>
          <strong>Compliance review software</strong> is a broad label. It is used for tools that
          support examining documents, policies, vendors, products or processes against requirements.
          Related terms include <em>compliance software</em>, <em>compliance review tools</em>,{" "}
          <em>compliance automation software</em> and <em>AI compliance software</em>.
        </p>
        <p>The category overlaps with several others:</p>
        <ul>
          <li>
            <strong>Governance, risk and compliance (GRC) platforms</strong>, which typically manage
            risk registers, policies, controls and audits across a programme.
          </li>
          <li>
            <strong>Contract-analysis tools</strong>, which focus on clauses and obligations.
          </li>
          <li>
            <strong>Vendor-risk tools</strong>, which focus on third-party assessments.
          </li>
          <li>
            <strong>Regulatory-change tools</strong>, which track and summarise new requirements.
          </li>
        </ul>
        <p>
          Some products are specialised; others combine several of these. Software can support a
          review but does not make an organisation compliant; that depends on people, processes and
          decisions. For the underlying concept, see{" "}
          <Link href="/what-is-compliance-review">What Is a Compliance Review?</Link> Products that use
          AI components are covered in{" "}
          <Link href="/ai-compliance-review-software">AI compliance review software</Link>.
        </p>
        <Callout title="No vendor rankings">
          <p>
            This page does not list, rank or recommend vendors. The criteria below are intended to help
            you evaluate any product against your own needs.
          </p>
        </Callout>
      </section>

      <section aria-labelledby="what-it-should-do">
        <h2 id="what-it-should-do">What should compliance review software do?</h2>
        <p>
          At minimum, it should help a reviewer get from raw material to a well-supported, recorded
          decision faster and more consistently. The capabilities below are the ones buyers most often
          ask about. If the product uses AI, read{" "}
          <Link href="/ai-compliance-review">AI compliance review</Link> for the additional risks to
          probe.
        </p>

        <h3 id="document-ingestion">Document ingestion</h3>
        <p>
          The tool should accept the formats you actually use (PDF, Word, spreadsheets, email, web
          pages), handle scanned documents with acceptable accuracy, preserve structure such as tables
          and headings, and keep a link from every extracted item back to its place in the original.
        </p>

        <h3 id="rule-libraries">Rule libraries</h3>
        <p>
          A rule or requirement library holds what documents are checked against. Ask whether it comes
          with content, who maintains it, how it is kept current, whether you can add your own
          requirements and internal standards, and whether each requirement records its source and
          version. A library that cannot be inspected or controlled is difficult to rely on.
        </p>

        <h3 id="risk-scoring">Risk scoring</h3>
        <p>
          Scoring helps prioritise review. Look for transparent criteria that you can adjust to your own
          risk appetite, and avoid black-box scores that cannot be explained. A score should guide
          attention, not replace judgment.
        </p>

        <h3 id="workflow-management">Workflow management</h3>
        <p>
          Reviews involve multiple people. Useful workflow features include assignments and deadlines,
          escalation, status tracking, comments, reminders and templates for recurring reviews.
        </p>

        <h3 id="human-approval">Human approval</h3>
        <p>
          The software should make it easy to require a named person to approve, edit or reject
          findings before anything is final. Look for configurable approval steps, role separation (for
          example, preparer and approver) and a record of every decision.
        </p>

        <h3 id="audit-trails">Audit trails and version history</h3>
        <p>
          An audit trail records who did what and when. Version history preserves prior states of
          documents, rules and findings, so you can show what was reviewed, against which version of the
          requirements and with what result. Both should be exportable and protected against alteration.
        </p>

        <h3 id="explainability">Explainability</h3>
        <p>
          Each finding should show the source text, the requirement it was compared with and the reason
          the two were linked. This allows reviewers to verify and challenge results, and allows the
          organisation to explain them later.
        </p>

        <h3 id="integrations">Integrations</h3>
        <p>
          Check how the tool connects to document repositories, ticketing and workflow tools, identity
          providers, e-signature and contract systems, and data warehouses. Ask for a documented API and
          confirm that the integrations you need are supported rather than planned.
        </p>

        <h3 id="reporting">Reporting</h3>
        <p>
          Reports should answer the questions that management, auditors and regulators ask: what was
          reviewed, what was found, what is open, who owns it and how long it has been open. Look for
          configurable reports and an export option that does not lock your records inside the product.
        </p>
      </section>

      <section aria-labelledby="security-governance">
        <h2 id="security-governance">Security, data residency and permissions</h2>
        <p>
          Compliance documents are often among an organisation&apos;s most sensitive. Security and
          governance questions usually carry as much weight as features:
        </p>
        <ul>
          <li>
            <strong>Security</strong>: encryption in transit and at rest, vulnerability management,
            incident response and independent assurance such as a SOC 2 report or ISO/IEC 27001
            certification. Check the scope covers the service you would use.
          </li>
          <li>
            <strong>Data residency</strong>: where data is stored and processed, whether you can choose a
            region, and which sub-processors are involved.
          </li>
          <li>
            <strong>Permissions</strong>: role-based access control, single sign-on, restrictions by
            matter or business unit, and logs of who accessed what.
          </li>
          <li>
            <strong>AI data use</strong>: whether your content is used to train models, whether
            third-party model providers receive it, and how long it is retained.
          </li>
          <li>
            <strong>Retention and deletion</strong>: your ability to set retention periods and to
            delete data on request and on exit.
          </li>
        </ul>
        <p>
          Your security, privacy and legal teams will normally need to review the vendor in parallel with
          any functional evaluation.
        </p>
      </section>

      <section aria-labelledby="how-to-evaluate">
        <h2 id="how-to-evaluate">How to Evaluate Compliance Review Software</h2>
        <p>A structured process reduces the risk of choosing on the strength of a demonstration.</p>
        <ol>
          <li>
            <strong>Define the use case.</strong> State what reviews the tool will support, how many
            documents and users are involved, and what a good outcome looks like.
          </li>
          <li>
            <strong>Write your requirements.</strong> Separate must-haves (for example, a required audit
            trail or data region) from nice-to-haves.
          </li>
          <li>
            <strong>Shortlist using your criteria.</strong> Use the scorecard below and consider
            published documentation, independent assurance reports and references that you verify
            yourself.
          </li>
          <li>
            <strong>Run a pilot on your own documents.</strong> Use a representative sample with
            answers you already know. Measure issues found, issues missed and false alarms, and how long
            reviewers spend.
          </li>
          <li>
            <strong>Test the human workflow.</strong> Check that reviewers can see sources, disagree,
            record reasons and obtain approval.
          </li>
          <li>
            <strong>Run due diligence on the vendor.</strong> Security, privacy, legal and procurement
            review, including contract terms on data use, liability, change notices and exit.
          </li>
          <li>
            <strong>Plan adoption and governance.</strong> Decide who owns the rule library, how
            performance will be monitored over time and what happens when the tool is wrong.
          </li>
        </ol>

        <h3>Evaluation scorecard</h3>
        <div className="table-wrap" role="region" aria-label="Evaluation scorecard" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th scope="col">Area</th>
                <th scope="col">Question to ask</th>
                <th scope="col">Evidence to look for</th>
              </tr>
            </thead>
            <tbody>
              {SCORECARD.map((r) => (
                <tr key={r.area}>
                  <th scope="row">{r.area}</th>
                  <td>{r.ask}</td>
                  <td>{r.look}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="red-flags">
        <h2 id="red-flags">Red flags to watch for</h2>
        <ul>
          <li>Claims that the tool &quot;guarantees compliance&quot; or replaces legal or compliance professionals.</li>
          <li>Findings with no citations or way to trace them to the source.</li>
          <li>Reluctance to run a pilot on your own documents.</li>
          <li>Vague answers about data location, sub-processors or use of your data for model training.</li>
          <li>No version history or audit trail for rules and findings.</li>
          <li>Accuracy claims with no description of how they were measured.</li>
          <li>Difficulty exporting your data.</li>
        </ul>
      </section>

      <section aria-labelledby="build-or-buy">
        <h2 id="build-or-buy">Build, buy or combine</h2>
        <p>
          Some organisations build their own review workflows on general-purpose AI services; others buy
          specialised products; many combine the two. Building offers control and fit but requires
          engineering, ongoing maintenance and the same governance as a purchased tool. Buying shifts
          some of that work to a vendor but requires vendor due diligence and acceptance of a
          roadmap you do not control. Either way, the evaluation questions above apply. Workflow
          tooling is covered in{" "}
          <Link href="/compliance-review-automation">compliance review automation</Link>. See{" "}
          <Link href="/use-cases">use cases</Link> to match the tool to the task and{" "}
          <Link href="/industries">industries</Link> for sector-specific considerations.
        </p>
      </section>
    </PageShell>
  );
}
