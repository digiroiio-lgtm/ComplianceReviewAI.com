import Link from "next/link";
import { PILLARS } from "@/lib/pages";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="wordmark" aria-label="ComplianceReviewAI.com home">
          ComplianceReview<span>AI</span>.com
        </Link>
        <nav aria-label="Primary" className="primary-nav">
          <ul>
            {PILLARS.map((p) => (
              <li key={p.href}>
                <Link href={p.href}>{p.nav}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
