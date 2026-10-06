export type Source = { label: string; href: string };

/** Primary sources behind factual or regulatory statements on a page. */
export function Sources({ items }: { items: Source[] }) {
  return (
    <section aria-labelledby="sources">
      <h2 id="sources">Sources</h2>
      <ul>
        {items.map((s) => (
          <li key={s.href}>
            <a href={s.href} rel="noopener">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
