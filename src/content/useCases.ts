export type UseCase = {
  id: string;
  title: string;
  summary: string;
  input: string;
  aiTask: string;
  humanDecision: string;
  output: string;
  watchFor: string;
};

/** Anchor ids here are linked from the homepage, the pillar pages and the use-cases page. */
export const USE_CASES: UseCase[] = [
  {
    id: "policy-review",
    title: "Policy review",
    summary:
      "Checking internal policies for completeness, internal consistency and alignment with the requirements and standards they are meant to reflect.",
    input:
      "Draft or existing policies, plus the external requirements or internal standards they must address.",
    aiTask:
      "Extract obligations from the policy text, compare them with a requirement checklist, flag missing topics, outdated references and contradictions between documents.",
    humanDecision:
      "The policy owner and compliance reviewer decide whether each flagged gap is real, how to fix it, and whether the policy is approved.",
    output:
      "A gap list citing the relevant passages, reviewer-edited changes, and an approved policy version with a change log.",
    watchFor:
      "Similar wording can make a tool mark a requirement as covered when the policy does not actually create the control. A well-written policy also does not prove that practice follows it.",
  },
  {
    id: "regulatory-document-review",
    title: "Regulatory document review",
    summary:
      "Reading regulations, regulator guidance, supervisory letters and consultation papers to identify obligations that may apply to the organisation.",
    input: "Regulatory text, official guidance, supervisory correspondence and consultation papers.",
    aiTask:
      "Summarise sections, extract obligation statements, tag them by topic and jurisdiction, and link them to existing policies or controls.",
    humanDecision:
      "Legal and compliance professionals decide whether a requirement applies, how it should be interpreted, and what the organisation will do about it.",
    output:
      "Obligations-register entries with source citations and a recorded applicability decision.",
    watchFor:
      "Summaries can drop qualifiers, exceptions and defined terms. Anything the organisation relies on should be checked against the primary source, and jurisdictional scope confirmed.",
  },
  {
    id: "vendor-compliance-review",
    title: "Vendor compliance review",
    summary:
      "Assessing whether a supplier meets the organisation's compliance, security and privacy requirements before onboarding and during the relationship.",
    input:
      "Vendor questionnaires, independent assurance reports and certificates, contracts, and the vendor's published policies.",
    aiTask:
      "Extract answers, certificate scopes and dates, compare them with a requirement baseline, and flag missing or expired evidence and inconsistencies between answers and documents.",
    humanDecision:
      "The risk owner decides whether the vendor is acceptable, and which compensating controls or contract terms are required.",
    output:
      "A vendor review summary, an open-issues list, and a recorded approve, conditional or decline decision.",
    watchFor:
      "A certificate or report only helps if its scope covers the service actually being used. Carve-outs and exclusions need a human reader.",
  },
  {
    id: "third-party-risk",
    title: "Third-party risk",
    summary:
      "Maintaining an ongoing view of risk across the whole supplier, partner and service-provider population, not just at onboarding.",
    input:
      "A vendor inventory, screening results from licensed data sources, incident and performance records, and contract terms.",
    aiTask:
      "Group and tier third parties by agreed criteria, summarise screening results, watch for changes such as new incidents or lapsed certifications, and prioritise reviews.",
    humanDecision:
      "Compliance and business owners set the tiering rules, accept or reject residual risk, escalate concerns, and decide on remediation or exit.",
    output:
      "A risk-tiered register, change alerts, a review schedule and documented escalations.",
    watchFor:
      "Name matching produces both false positives and misses. Subcontractor (fourth-party) risk and concentration risk often do not appear in the documents a tool can read.",
  },
  {
    id: "product-compliance-review",
    title: "Product compliance review",
    summary:
      "Checking that a product, its labelling and its supporting documentation meet the requirements of each market where it is sold.",
    input:
      "Product specifications, labels and packaging artwork, test reports, certificates, safety data and the list of intended markets.",
    aiTask:
      "Extract claims and values from labels and test reports, compare them with market-specific requirement checklists, and flag missing documents or inconsistent claims.",
    humanDecision:
      "Qualified product-compliance or safety staff determine which requirements apply, whether testing is sufficient, and whether the product is released.",
    output:
      "A product compliance file index, a gap list and a recorded release or hold decision.",
    watchFor:
      "Requirements depend on how the product is classified and where it is sold; a wrong classification undermines everything after it. A tool cannot confirm the physical product matches its paperwork.",
  },
  {
    id: "marketing-advertising-review",
    title: "Marketing and advertising review",
    summary:
      "Reviewing campaigns, web copy and social content for claims, disclosures and channel rules before they are published.",
    input:
      "Ad copy, landing pages, social posts, influencer briefs and the files that substantiate claims.",
    aiTask:
      "Flag absolute or comparative claims, missing disclosures and restricted terms, and check copy against an approved-claims library.",
    humanDecision:
      "A legal or compliance reviewer judges context, substantiation and overall impression, then approves, edits or rejects.",
    output:
      "Annotated copy, an approved-claims log, and an approval record stored with the exact asset version.",
    watchFor:
      "Imagery, context and channel all matter. Term-based flagging creates false positives and can miss subtle implied claims.",
  },
  {
    id: "contract-compliance-checks",
    title: "Contract compliance checks",
    summary:
      "Comparing contracts against a playbook of required, preferred and prohibited clauses, including clauses that regulations or internal policy require.",
    input:
      "Contracts and templates, a clause playbook, and the contractual requirements that apply (for example, data-processing terms).",
    aiTask:
      "Identify clause types, compare them with the playbook, flag missing or deviating clauses, and extract key dates and obligations.",
    humanDecision:
      "Legal counsel decides which deviations are acceptable, negotiates changes and approves the contract.",
    output:
      "A clause comparison report, a negotiation issues list and an obligations calendar.",
    watchFor:
      "This is a consistency check, not an assessment of enforceability. Cross-references and defined terms are commonly misread.",
  },
  {
    id: "internal-control-review",
    title: "Internal control review",
    summary:
      "Examining whether internal controls are designed appropriately and operating as intended.",
    input:
      "Control descriptions, procedures, system-generated logs and reports, prior test results and ownership records.",
    aiTask:
      "Map controls to requirements, match evidence to controls, identify gaps and duplicates, and highlight exceptions in logs or populations.",
    humanDecision:
      "Control owners and reviewers (such as internal audit) assess design and operating effectiveness and conclude on any deficiency.",
    output:
      "A control-to-requirement matrix, test workpapers and a deficiency log with remediation owners.",
    watchFor:
      "Where a tool selects samples or flags exceptions, the method should be documented and understood. Conclusions about effectiveness belong to accountable people.",
  },
  {
    id: "due-diligence",
    title: "Due diligence",
    summary:
      "Reviewing a counterparty, investment or acquisition target's documents for compliance issues before a decision is made.",
    input:
      "Data-room documents such as contracts, policies, licences, filings and litigation summaries, plus the diligence request list.",
    aiTask:
      "Classify documents, extract key terms (for example change-of-control and assignment clauses), compare the data room with the request list, and surface anomalies.",
    humanDecision:
      "Deal counsel and compliance advisers judge materiality, ask follow-up questions and decide how findings affect terms or whether to proceed.",
    output:
      "A diligence issues list, a red-flag summary and follow-up request lists.",
    watchFor:
      "Confidential and privileged material needs careful handling in any AI system. Findings are only as complete as the documents provided.",
  },
  {
    id: "evidence-collection",
    title: "Evidence collection",
    summary:
      "Gathering, organising and checking the artefacts that show a requirement was met, for internal reviews, external audits and regulator requests.",
    input:
      "A control list or evidence request list, plus connected document repositories, ticketing systems and logs.",
    aiTask:
      "Match requests to existing evidence, find stale or missing items, draft requests to owners, check dates, scope and sign-offs, and build an index.",
    humanDecision:
      "Control owners confirm the evidence is accurate and representative; the reviewer decides whether it is sufficient.",
    output:
      "An indexed evidence package with provenance for each item and a tracker of open requests.",
    watchFor:
      "Evidence must be genuine and traceable to its source. Tools should locate and organise artefacts, never generate or back-fill them.",
  },
  {
    id: "regulatory-change-monitoring",
    title: "Regulatory change monitoring",
    summary:
      "Tracking new and changing laws, regulator guidance and enforcement activity, and working out what it means for the organisation.",
    input:
      "Regulator publications, legislative trackers, official notices, enforcement announcements and the internal obligations register.",
    aiTask:
      "Detect new or changed documents in monitored sources, summarise differences, tag by topic and jurisdiction, and suggest which policies or controls may be affected.",
    humanDecision:
      "Compliance and legal professionals assess relevance and impact, assign actions and set timelines.",
    output:
      "A change alert linked to the source, an impact assessment and an action plan with owners and due dates.",
    watchFor:
      "Coverage depends on which sources are monitored. Tool summaries are not official, and effective dates and transitional provisions need careful reading.",
  },
];
