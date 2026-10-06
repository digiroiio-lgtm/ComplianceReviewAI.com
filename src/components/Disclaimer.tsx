import { DISCLAIMER } from "@/lib/config";

export function Disclaimer() {
  return (
    <aside className="disclaimer" aria-label="Disclaimer">
      <p>
        <strong>Educational information only.</strong> {DISCLAIMER} Requirements vary by jurisdiction,
        industry and circumstance; consult a qualified professional for advice on your situation.
      </p>
    </aside>
  );
}
