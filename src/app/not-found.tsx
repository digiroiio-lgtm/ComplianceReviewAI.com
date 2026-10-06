import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container not-found">
      <h1>Page not found</h1>
      <p>The page you were looking for doesn&apos;t exist. Try one of the guides below.</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/what-is-compliance-review">What is a compliance review?</Link>
        </li>
        <li>
          <Link href="/ai-compliance-review">AI compliance review</Link>
        </li>
        <li>
          <Link href="/compliance-review-software">Compliance review software</Link>
        </li>
      </ul>
    </div>
  );
}
