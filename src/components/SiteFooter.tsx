import Link from "next/link";
import { DISCLAIMER, DOMAIN_SALE_URL, SITE_NAME } from "@/lib/config";
import { PILLARS } from "@/lib/pages";
import { SmartLink } from "./SmartLink";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{SITE_NAME}</p>
          <p className="footer-note">
            An independent educational resource about AI-powered compliance review.
          </p>
          <p className="footer-note">{DISCLAIMER}</p>
          <p className="footer-note">
            It does not provide compliance services, certifications or automated legal advice.
          </p>
        </div>
        <nav aria-label="Guides">
          <p className="footer-heading">Guides</p>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            {PILLARS.map((p) => (
              <li key={p.href}>
                <Link href={p.href}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer-heading">Domain</p>
          <ul>
            <li>
              <SmartLink href={DOMAIN_SALE_URL}>This domain is available for acquisition</SmartLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-legal">
        <p>© {new Date().getFullYear()} {SITE_NAME}</p>
      </div>
    </footer>
  );
}
