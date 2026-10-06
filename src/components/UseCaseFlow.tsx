type Flow = { input: string; aiTask: string; humanDecision: string; output: string };

const STEPS: { key: keyof Flow; label: string; who: string }[] = [
  { key: "input", label: "Input", who: "What goes in" },
  { key: "aiTask", label: "AI-assisted task", who: "Machine support" },
  { key: "humanDecision", label: "Human decision", who: "Accountable person" },
  { key: "output", label: "Output", who: "What comes out" },
];

/** Input → AI-assisted task → Human decision → Output. */
export function UseCaseFlow(flow: Flow) {
  return (
    <ol className="flow">
      {STEPS.map((s) => (
        <li key={s.key} className={`flow__step flow__step--${s.key}`}>
          <p className="flow__label">{s.label}</p>
          <p className="flow__text">{flow[s.key]}</p>
        </li>
      ))}
    </ol>
  );
}
