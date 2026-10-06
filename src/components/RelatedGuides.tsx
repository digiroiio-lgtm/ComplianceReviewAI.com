import Link from "next/link";
import { PILLARS } from "@/lib/pages";

export function RelatedGuides({ exclude, heading = "Continue exploring" }: { exclude?: string; heading?: string }) {
  const items = PILLARS.filter((p) => p.href !== exclude);
  return (
    <section aria-labelledby="related-heading" className="related">
      <h2 id="related-heading">{heading}</h2>
      <ul className="cards">
        {items.map((p) => (
          <li key={p.href} className="card">
            <h3>
              <Link href={p.href}>{p.title}</Link>
            </h3>
            <p>{p.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
