import type { Faq } from "@/lib/seo";

export const HOME_FAQS: Faq[] = [
  {
    q: "What is AI compliance review?",
    a: "AI compliance review is the use of artificial intelligence, such as language models, classifiers and rules engines, to assist people who check documents, policies, vendors, products or workflows against compliance requirements. The AI helps with reading, sorting, comparing and flagging. People remain responsible for interpreting requirements and making decisions.",
  },
  {
    q: "Can AI replace a compliance officer or lawyer?",
    a: "No. AI can speed up repetitive review tasks, but it cannot be held accountable, may produce confident but wrong output, and does not exercise professional judgment. Regulators and courts expect accountable people to make compliance decisions.",
  },
  {
    q: "What kinds of things can be reviewed with AI assistance?",
    a: "Common examples include policies, contracts, regulatory documents, vendor questionnaires and certificates, product labels and test reports, marketing copy, internal control evidence and data-room documents.",
  },
  {
    q: "What is the difference between automated compliance review and AI-assisted compliance review?",
    a: "The terms are often used interchangeably, but 'AI-assisted' is more precise: software prepares findings and a person reviews and approves them. Fully automated approaches that make final compliance decisions without human review carry significantly more risk and are not what this site describes.",
  },
  {
    q: "What are the main risks of using AI for compliance review?",
    a: "The main risks are incorrect or fabricated output (hallucination), limited explainability, exposure of confidential or personal data, outdated or incomplete rule sources, and unclear accountability. Each can be reduced with human review, source citations, access controls and clear governance, but not eliminated.",
  },
  {
    q: "Does ComplianceReviewAI.com provide compliance services?",
    a: "No. This website is an educational resource. It does not review your documents, provide legal or compliance advice, or offer a compliance product. The domain itself is available for acquisition.",
  },
];

export const WHAT_IS_FAQS: Faq[] = [
  {
    q: "What is a compliance review in simple terms?",
    a: "A compliance review is a structured check of whether an organisation, process, document or product meets the rules that apply to it, followed by a record of the findings and the actions needed to close any gaps.",
  },
  {
    q: "How often should a compliance review be done?",
    a: "There is no single answer. Frequency depends on the regulatory requirements that apply, the level of risk, and how quickly the business or the rules change. Many organisations combine a regular schedule with reviews triggered by specific events, such as a new product, a new vendor or a regulatory change.",
  },
  {
    q: "Who performs a compliance review?",
    a: "It is usually led by a compliance function or an equivalent role, with input from legal, the business owners of the area under review, and sometimes internal audit, security or outside advisers. Small organisations may rely heavily on external specialists.",
  },
  {
    q: "Is a compliance review the same as an audit?",
    a: "Not exactly. An audit is typically a more formal and independent examination against defined criteria, often producing an opinion or report. A compliance review is usually broader and more flexible, and can be carried out internally as part of ongoing management. Terminology varies between organisations and professions.",
  },
  {
    q: "What happens after a compliance review finds a gap?",
    a: "The gap is documented, assessed for severity, assigned an owner and a deadline, and tracked through remediation. After the fix, the change is verified and the evidence is retained. Significant gaps may also need escalation to senior management or consideration of regulatory notification, which is a decision for qualified professionals.",
  },
];

export const AI_FAQS: Faq[] = [
  {
    q: "What can AI do in a compliance review?",
    a: "AI can extract information from documents, classify them, compare policies with requirements, match text against rules, flag potential risks, help organise evidence and detect changes between document versions. It produces candidate findings for a person to confirm.",
  },
  {
    q: "Is AI compliance review the same as legal advice?",
    a: "No. AI-assisted compliance review is a way of preparing and organising information. Legal judgment, interpreting how a rule applies to specific facts, remains the job of qualified people.",
  },
  {
    q: "What is hallucination and why does it matter in compliance?",
    a: "Hallucination is when a generative AI model produces plausible but false content, such as a citation that does not exist or a requirement that is not in the source text. In compliance work, a fabricated or misquoted requirement can lead to wrong decisions, so outputs should be tied to citations in the source and checked by a person.",
  },
  {
    q: "Is it safe to upload confidential documents to an AI compliance tool?",
    a: "It depends on the tool and its contract terms. Questions to ask include where data is stored and processed, who can access it, whether it is used to train models, how long it is retained and how it can be deleted. Organisations usually involve their security, privacy and legal teams before uploading sensitive material.",
  },
  {
    q: "Who is accountable when an AI-assisted review gets something wrong?",
    a: "Generally the organisation and the people who approved the decision remain accountable. Using a tool does not transfer regulatory responsibility to the software or its vendor, which is why human approval and clear records matter.",
  },
];

export const SOFTWARE_FAQS: Faq[] = [
  {
    q: "What is compliance review software?",
    a: "Compliance review software is a category of tools that help teams ingest documents, compare them with requirements, record findings, route them for approval and keep an audit trail. Some products are specialised for review, while others are modules of broader governance, risk and compliance (GRC) platforms.",
  },
  {
    q: "What features should compliance review software have?",
    a: "Common core features are document ingestion, a maintainable library of rules or requirements, workflow management, human approval steps, audit trails, version history, reporting, integrations and role-based permissions. For AI-enabled tools, explainability and source citations are especially important.",
  },
  {
    q: "How is compliance review software different from GRC software?",
    a: "GRC platforms tend to cover a broad programme, including risk registers, policy management, controls and audits. Compliance review software usually concentrates on examining specific documents or processes against requirements. The categories overlap, and many products span both.",
  },
  {
    q: "How should I test compliance review software before buying?",
    a: "Run a structured pilot on a representative sample of your own documents, with known answers where possible. Measure accuracy, missed issues and false alarms, check that findings are traceable to sources, and involve security, privacy and legal review of the vendor in parallel.",
  },
  {
    q: "Does this site recommend or rank vendors?",
    a: "No. This site does not rank, review or recommend any vendors. The evaluation criteria are meant to help you assess any product against your own requirements.",
  },
];

export const USE_CASES_FAQS: Faq[] = [
  {
    q: "Which compliance review use cases suit AI assistance best?",
    a: "Tasks that involve reading large volumes of text against a defined checklist, such as policy comparison, clause checking, document classification, evidence matching and change monitoring, tend to benefit most. Tasks that depend on judgment, negotiation or discretion benefit less.",
  },
  {
    q: "Why does every use case include a human decision?",
    a: "Because accountability for compliance decisions rests with people and organisations. AI output is treated as a draft finding that someone reviews, accepts or rejects and records.",
  },
  {
    q: "How do I choose a first use case?",
    a: "Many teams start with a contained, high-volume, low-risk task where correct answers are easy to check, for example comparing a policy set with a requirements checklist, and expand once they have measured accuracy and refined their review process.",
  },
];

export const INDUSTRIES_FAQS: Faq[] = [
  {
    q: "Do compliance review needs differ by industry?",
    a: "Yes. The rules, the documents involved and the consequences of getting things wrong vary considerably. The review method (scope, evidence, findings, remediation) is similar across sectors, but the requirement sources and expert input are sector-specific.",
  },
  {
    q: "Can the same AI compliance review approach be used across industries?",
    a: "The general approach can be reused, but requirement libraries, terminology and review criteria need to be adapted and validated for each sector and jurisdiction by people who know the area.",
  },
  {
    q: "Does this site have expertise in any regulated industry?",
    a: "No. The industry descriptions are general educational overviews. This site is not a regulated entity, holds no certifications and does not provide advice for any sector.",
  },
];
