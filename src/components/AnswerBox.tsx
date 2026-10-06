import type { ReactNode } from "react";

/** Concise, self-contained answer placed near the top of a page for snippets and AI retrieval. */
export function AnswerBox({ label = "Short answer", children }: { label?: string; children: ReactNode }) {
  return (
    <section className="answer-box" aria-label={label}>
      <p className="answer-box__label">{label}</p>
      <p className="answer-box__body">{children}</p>
    </section>
  );
}
