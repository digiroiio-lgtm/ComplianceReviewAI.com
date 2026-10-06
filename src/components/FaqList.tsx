import type { Faq } from "@/lib/seo";

/** Answers are rendered as plain visible text (not collapsed) so they are fully crawlable. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq">
      {faqs.map((f) => (
        <div key={f.q} className="faq__item">
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
    </div>
  );
}
