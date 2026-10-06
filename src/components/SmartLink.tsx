import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export function isExternalHref(href: string) {
  return /^(https?:)?\/\//i.test(href) || /^(mailto|tel):/i.test(href);
}

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

/** Internal paths use next/link; absolute URLs, mailto: and tel: render a plain anchor. */
export function SmartLink({ href, children, ...rest }: Props) {
  if (isExternalHref(href)) {
    const web = /^(https?:)?\/\//i.test(href);
    return (
      <a href={href} {...(web ? { rel: "noopener" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
