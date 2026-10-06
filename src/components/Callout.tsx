import type { ReactNode } from "react";

export function Callout({
  title,
  tone = "note",
  children,
}: {
  title: string;
  tone?: "note" | "caution";
  children: ReactNode;
}) {
  return (
    <aside className={`callout callout--${tone}`}>
      <p className="callout__title">{title}</p>
      <div className="callout__body">{children}</div>
    </aside>
  );
}
