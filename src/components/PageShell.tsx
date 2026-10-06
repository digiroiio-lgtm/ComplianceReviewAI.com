import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Disclaimer } from "./Disclaimer";
import { FaqList } from "./FaqList";
import { JsonLd } from "./JsonLd";
import { RelatedGuides } from "./RelatedGuides";
import { Toc, type TocItem } from "./Toc";
import { pageGraph, type Faq } from "@/lib/seo";

type Props = {
  path: string;
  /** The page's H1. */
  title: string;
  lead: ReactNode;
  /** Meta description reused in structured data. */
  description: string;
  /** Short label for the breadcrumb trail. */
  crumb: string;
  toc: TocItem[];
  faqs?: Faq[];
  /** Rendered between the header and the main column (e.g. the short answer). */
  intro?: ReactNode;
  children: ReactNode;
};

/** Shared frame for the five pillar pages: header, TOC, FAQ, disclaimer, related guides, JSON-LD. */
export function PageShell({ path, title, lead, description, crumb, toc, faqs, intro, children }: Props) {
  const tocItems = faqs?.length ? [...toc, { id: "faq", label: "Frequently asked questions" }] : toc;
  return (
    <>
      <JsonLd
        data={pageGraph({
          path,
          headline: title,
          description,
          crumbs: [
            { name: "Home", path: "/" },
            { name: crumb, path },
          ],
          faqs,
        })}
      />
      <article>
        <div className="page-header">
          <div className="container">
            <Breadcrumbs current={crumb} />
            <h1>{title}</h1>
            <p className="lead">{lead}</p>
            {intro}
          </div>
        </div>
        <div className="container page-layout">
          <aside className="page-layout__toc">
            <Toc items={tocItems} />
          </aside>
          <div className="prose">
            {children}
            {faqs?.length ? (
              <section aria-labelledby="faq">
                <h2 id="faq">Frequently asked questions</h2>
                <FaqList faqs={faqs} />
              </section>
            ) : null}
            <Disclaimer />
          </div>
        </div>
        <div className="container">
          <RelatedGuides exclude={path} />
        </div>
      </article>
    </>
  );
}
