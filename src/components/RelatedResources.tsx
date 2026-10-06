import Link from "next/link";
import { COMMERCIAL_PAGES } from "@/lib/pages";

/** Cards linking to the other commercial-intent resources (excludes the current page). */
export function RelatedResources({ exclude }: { exclude: string }) {
  const items = COMMERCIAL_PAGES.filter((p) => p.href !== exclude);
  return (
    <section aria-labelledby="related-buyer-resources">
      <h2 id="related-buyer-resources">Related buyer resources</h2>
      <ul className="cards">
        {items.map((p) => (
          <li key={p.href} className="card card--link">
            <h3>
              <Link href={p.href}>{p.title}</Link>
            </h3>
            <p>{p.summary}</p>
          </li>
        ))}
        <li className="card card--link">
          <h3>
            <Link href="/compliance-review-software">Compliance Review Software</Link>
          </h3>
          <p>The general buyer&apos;s guide: capabilities, security questions and an evaluation scorecard.</p>
        </li>
      </ul>
    </section>
  );
}
