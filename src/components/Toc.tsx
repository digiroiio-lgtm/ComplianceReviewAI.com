export type TocItem = { id: string; label: string };

export function Toc({ items }: { items: TocItem[] }) {
  return (
    <nav aria-label="On this page" className="toc">
      <p className="toc__title">On this page</p>
      <ol>
        {items.map((i) => (
          <li key={i.id}>
            <a href={`#${i.id}`}>{i.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
