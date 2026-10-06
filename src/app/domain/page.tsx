import { DOMAIN_CONTACT_URL, SITE_NAME } from "@/lib/config";
import { Disclaimer } from "@/components/Disclaimer";
import { SmartLink } from "@/components/SmartLink";
import { pageMetadata } from "@/lib/seo";

// Kept out of the search index so the site's content architecture stays focused.
export const metadata = pageMetadata({
  title: "Acquire ComplianceReviewAI.com",
  absoluteTitle: true,
  description: "ComplianceReviewAI.com is available for acquisition. The sale covers the domain name only.",
  path: "/domain",
  noindex: true,
});

export default function DomainPage() {
  return (
    <article>
      <div className="page-header">
        <div className="container">
          <h1>Acquire {SITE_NAME}</h1>
          <p className="lead">
            A descriptive, category-defining domain name for AI-powered compliance review, available for
            acquisition.
          </p>
          <div className="btn-row">
            <SmartLink href={DOMAIN_CONTACT_URL} className="btn">
              Make an Inquiry
            </SmartLink>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBlock: "40px 24px" }}>
        <div className="prose">
          <h2>What is being offered</h2>
          <p>
            The buyer would acquire the <strong>domain name {SITE_NAME}</strong>. The domain describes a
            commercial category: reviewing documents, policies, vendors, products and workflows for
            compliance with the help of AI.
          </p>

          <div className="domain-grid">
            <div className="industry__box industry__box--auto">
              <h3>What an acquisition covers</h3>
              <ul>
                <li>The domain name {SITE_NAME}</li>
                <li>Transfer of registrar control, on terms agreed with the buyer</li>
              </ul>
            </div>
            <div className="industry__box industry__box--expert">
              <h3>What it does not include</h3>
              <ul>
                <li>Legal, regulatory or compliance services</li>
                <li>An operating company, customers or revenue</li>
                <li>Certifications, licences or regulatory approvals</li>
                <li>Software or proprietary technology</li>
              </ul>
            </div>
          </div>

          <p>
            The current website is an independent educational resource. Its content and code are not
            assumed to be part of a sale unless agreed in writing.
          </p>

          <h2>Why buyers consider a domain like this</h2>
          <ul>
            <li>It states the category in plain language, which can help recall and trust.</li>
            <li>
              It combines the terms &quot;compliance review&quot; and &quot;AI&quot;, the language
              buyers and search engines already use for this topic.
            </li>
            <li>It is short enough to say aloud and to type from memory.</li>
          </ul>
          <p>
            No traffic, ranking, revenue or valuation claims are made on this page. Prospective buyers
            should carry out their own due diligence.
          </p>

          <h2>How an acquisition typically works</h2>
          <ol>
            <li>You make an inquiry through the contact method below.</li>
            <li>Price and terms are discussed and agreed in writing.</li>
            <li>
              Payment and transfer are commonly completed through a registrar-to-registrar transfer,
              often using a third-party escrow service.
            </li>
          </ol>

          <h2>Using the domain responsibly</h2>
          <p>
            Anyone operating a compliance-related service under this name is responsible for meeting the
            legal, regulatory and professional requirements that apply to that service, including
            accurate marketing claims. Nothing on this site is legal advice.
          </p>

          <div className="btn-row">
            <SmartLink href={DOMAIN_CONTACT_URL} className="btn">
              Make an Inquiry
            </SmartLink>
          </div>

          <Disclaimer />
        </div>
      </div>
    </article>
  );
}
