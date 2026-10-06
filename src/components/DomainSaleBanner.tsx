import { DOMAIN_SALE_URL, SITE_NAME } from "@/lib/config";
import { SmartLink } from "./SmartLink";

/**
 * Slim, non-sticky sitewide banner. The destination comes from one constant
 * (NEXT_PUBLIC_DOMAIN_SALE_URL, defaulting to /domain); pass `href` to override.
 * Desktop and mobile copy are swapped with CSS only, so no client JS is shipped
 * and only one variant is exposed to assistive tech.
 */
export function DomainSaleBanner({ href = DOMAIN_SALE_URL }: { href?: string }) {
  return (
    <aside className="sale-banner" aria-label="Domain availability">
      <div className="container">
        <SmartLink href={href} className="sale-banner__link">
          <span className="sale-banner__long">
            {SITE_NAME} is available for acquisition{" "}
            <span className="sale-banner__cta">
              <span aria-hidden="true">→ </span>View Domain Details
            </span>
          </span>
          <span className="sale-banner__short">
            This domain is for sale <span aria-hidden="true">→</span>
          </span>
        </SmartLink>
      </div>
    </aside>
  );
}
