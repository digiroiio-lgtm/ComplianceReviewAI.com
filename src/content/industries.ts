export type Industry = {
  id: string;
  name: string;
  intro: string;
  surface: string[];
  documents: string[];
  automation: string[];
  expert: string[];
};

/**
 * Educational overviews only. Named regimes are examples of the kind of rule that may apply;
 * applicability depends on jurisdiction, licensing, business model and facts.
 */
export const INDUSTRIES: Industry[] = [
  {
    id: "financial-services",
    name: "Financial services",
    intro:
      "Banks, lenders, asset managers and brokers typically operate under licensing and conduct regimes that vary widely by country and by type of activity.",
    surface: [
      "Licensing and conduct-of-business requirements",
      "Anti-money-laundering, sanctions and customer due diligence",
      "Consumer disclosures and fair-treatment expectations",
      "Marketing and financial promotions",
      "Record-keeping, complaints handling and outsourcing oversight",
    ],
    documents: [
      "Policies, procedures and board or committee papers",
      "Customer communications, disclosures and marketing materials",
      "Onboarding and due diligence files",
      "Complaint logs and outsourcing or vendor contracts",
    ],
    automation: [
      "Comparing policy text with a requirements checklist",
      "Flagging pre-defined terms and missing disclosures in communications",
      "Assembling evidence for periodic reviews",
      "Tracking changes in regulator publications",
    ],
    expert: [
      "Interpreting rules and deciding how they apply to the firm's activities",
      "Deciding whether activity is suspicious and whether to report it",
      "Approving risk acceptance and engaging with supervisors",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    intro:
      "Healthcare organisations handle sensitive health information and, depending on the setting, are subject to privacy, quality, billing and professional regulation.",
    surface: [
      "Health-data privacy and security (for example, HIPAA in the United States or GDPR rules on health data in the EU)",
      "Facility and professional licensing and accreditation",
      "Billing, coding and reimbursement rules",
      "Patient-facing communications and consent",
      "Medical-device and clinical-research requirements where relevant",
    ],
    documents: [
      "Privacy and security policies and risk analyses",
      "Business associate or data-processing agreements",
      "Access logs, training records and incident reports",
      "Patient-facing forms, notices and marketing",
    ],
    automation: [
      "Identifying documents that contain regulated health information",
      "Checking vendor agreements for required clauses",
      "Comparing policies with a control framework",
      "Organising training and access-review evidence",
    ],
    expert: [
      "Clinical and patient-safety judgment",
      "Deciding whether an incident is a reportable breach",
      "Coding, billing and medical-necessity determinations",
      "Medical-device classification and clinical-research oversight",
    ],
  },
  {
    id: "saas",
    name: "SaaS",
    intro:
      "Software-as-a-service companies are usually reviewed less by a single sector regulator and more by their customers, through contracts, security reviews and privacy law.",
    surface: [
      "Customer security and privacy requirements",
      "Data-protection law (for example, GDPR and US state privacy laws)",
      "Assurance frameworks customers often request, such as SOC 2 or ISO/IEC 27001",
      "Contractual commitments: data-processing terms, service levels, subprocessors",
      "Accessibility and responsible-AI expectations for AI-enabled features",
    ],
    documents: [
      "Security questionnaires and customer audit requests",
      "Data-processing agreements and subprocessor lists",
      "Security policies, access reviews and change records",
      "Product and marketing claims about security and privacy",
    ],
    automation: [
      "Drafting questionnaire answers from an approved knowledge base",
      "Mapping controls and evidence to framework requirements",
      "Comparing customer contracts with a standard clause playbook",
      "Detecting stale or expiring evidence",
    ],
    expert: [
      "Attesting that controls operate as described",
      "Interpreting data-transfer and cross-border requirements",
      "Deciding which commitments the company can truthfully make",
      "Working with external auditors",
    ],
  },
  {
    id: "fintech",
    name: "Fintech",
    intro:
      "Fintech companies combine software with regulated financial activity. Their obligations depend heavily on the licences they hold or the partners they rely on.",
    surface: [
      "Licensing or partner-bank requirements for payments, lending or banking-like services",
      "Customer identification, anti-money-laundering and sanctions programmes",
      "Consumer-protection and fair-marketing expectations",
      "Payment-security standards such as PCI DSS where card data is involved",
      "Oversight of banking partners and technology vendors",
    ],
    documents: [
      "Compliance programme policies and procedures",
      "Partner and sponsor-bank requirements and reports",
      "Onboarding flows, disclosures, terms and marketing copy",
      "Complaint records and transaction-monitoring rule documentation",
    ],
    automation: [
      "Checking marketing and disclosure copy against internal rules",
      "Monitoring regulator and partner-requirement changes",
      "Collecting evidence for partner or regulator reviews",
      "Comparing product flows with documented policies",
    ],
    expert: [
      "Licensing and regulatory-perimeter analysis",
      "Reviewing and deciding on suspicious activity",
      "Negotiating with partners and regulators",
      "Designing the compliance programme itself",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    intro:
      "Manufacturers face product, workplace, environmental and supply-chain requirements, often with extensive technical documentation.",
    surface: [
      "Product safety, quality and conformity requirements",
      "Workplace health and safety and environmental permits",
      "Restricted-substance and materials rules (for example, RoHS or REACH in the EU)",
      "Supply-chain due diligence and export controls",
      "Quality management systems such as ISO 9001",
    ],
    documents: [
      "Safety data sheets, supplier declarations and certificates",
      "Test reports, technical files and labels",
      "Standard operating procedures and corrective-action records",
      "Permits, inspection records and training logs",
    ],
    automation: [
      "Extracting certificate dates and scopes",
      "Comparing supplier declarations with restricted-substance lists",
      "Detecting changes between procedure versions",
      "Finding missing documents in a technical file",
    ],
    expert: [
      "Engineering and safety sign-off",
      "Selecting and interpreting testing and certification",
      "Environmental, health and safety professional judgment",
      "Export-classification decisions",
    ],
  },
  {
    id: "consumer-products",
    name: "Consumer products",
    intro:
      "Companies selling goods to consumers deal with product safety, labelling, claims and import rules that differ by product type and market.",
    surface: [
      "General and category-specific product safety rules",
      "Labelling, packaging and warnings",
      "Advertising and product-claim substantiation",
      "Restricted substances and import requirements",
      "Incident reporting and recall obligations",
    ],
    documents: [
      "Labels, packaging artwork and instructions",
      "Test reports and certificates",
      "Claim substantiation files and marketing copy",
      "Retailer requirements and complaint or incident logs",
    ],
    automation: [
      "Checking label text against a market-specific checklist",
      "Flagging unsupported or absolute claims for review",
      "Tracking certificate expiry",
      "Cross-checking claims against substantiation files",
    ],
    expert: [
      "Safety testing and risk assessment",
      "Legal assessment of claims and warnings",
      "Deciding whether to report an incident or recall a product",
      "Classifying the product for each market",
    ],
  },
  {
    id: "e-commerce",
    name: "E-commerce",
    intro:
      "Online sellers and marketplaces work across many jurisdictions at once, which makes consistency and change tracking particularly demanding.",
    surface: [
      "Consumer-protection rules on pricing, returns and reviews",
      "Privacy, cookies and tracking consent",
      "Marketplace seller policies and restricted-item rules",
      "Advertising and influencer disclosure requirements",
      "Cross-border sales, tax, import and accessibility obligations",
    ],
    documents: [
      "Product listings and descriptions",
      "Terms and conditions, return and privacy policies",
      "Cookie and consent-tool configurations",
      "Advertising creative and marketplace policy updates",
    ],
    automation: [
      "Scanning listings for restricted terms or missing information",
      "Comparing policy versions across markets",
      "Monitoring marketplace policy changes",
      "Flagging missing advertising disclosures",
    ],
    expert: [
      "Interpreting consumer and privacy law by jurisdiction",
      "Deciding whether an item is restricted or prohibited",
      "Handling disputes and regulator contact",
      "Tax and customs determinations",
    ],
  },
  {
    id: "insurance",
    name: "Insurance",
    intro:
      "Insurers and intermediaries are typically licensed and supervised closely, with rules that differ by jurisdiction and line of business.",
    surface: [
      "Licensing and solvency or capital requirements",
      "Policy-form, rate and product filing rules where they apply",
      "Market-conduct, sales and claims-handling standards",
      "Advertising and distribution (including producer licensing)",
      "Privacy, complaint handling and oversight of third-party administrators",
    ],
    documents: [
      "Policy forms, endorsements and regulatory filings",
      "Producer and third-party-administrator agreements",
      "Claims files and complaint logs",
      "Marketing and customer communications",
    ],
    automation: [
      "Comparing policy language with a filing or requirement checklist",
      "Checking claims files for completeness",
      "Categorising complaints",
      "Tracking changes in state or national requirements",
    ],
    expert: [
      "Filing strategy and regulator engagement",
      "Actuarial and underwriting judgment",
      "Interpreting rules for specific lines of business",
      "Discretionary claims decisions",
    ],
  },
  {
    id: "professional-services",
    name: "Professional services",
    intro:
      "Law, accounting, consulting and similar firms are shaped by professional-conduct rules and by the confidentiality expectations of their clients.",
    surface: [
      "Professional-conduct, ethics and licensing rules",
      "Client confidentiality and data-protection duties",
      "Conflict-of-interest and (where relevant) independence requirements",
      "Engagement terms and advertising rules",
      "Anti-money-laundering duties for certain professions",
    ],
    documents: [
      "Engagement letters and client terms",
      "Conflict-check records",
      "Firm policies and training records",
      "Client due diligence files",
    ],
    automation: [
      "Checking engagement letters for standard clauses",
      "Matching names in conflict-check data",
      "Tracking training completion",
      "Organising due-diligence documents",
    ],
    expert: [
      "Professional and ethical judgment",
      "Deciding whether a conflict exists and how to manage it",
      "Interpreting rules issued by professional bodies",
      "Exercising independence and quality-control responsibilities",
    ],
  },
];
