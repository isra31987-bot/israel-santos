type ProcessStep = { number: string; label: string };

// Visual del método: nodos unidos por un "spine"; un punto LED recorre el flujo.
export default function ProcessFlow({
  steps,
  ariaLabel,
}: {
  steps: ProcessStep[];
  ariaLabel: string;
}) {
  return (
    <div
      className="process-flow relative mx-auto w-full max-w-xs lg:max-w-none"
      aria-label={ariaLabel}
    >
      {/* Atmósfera orgánica detrás del proceso — casi imperceptible */}
      <div className="process-atmosphere" aria-hidden="true" />
      <div className="process-rail" aria-hidden="true" />
      <span className="process-dot" aria-hidden="true" />

      <ol className="process-stages relative">
        {steps.map((step) => (
          <li key={step.number} className="process-stage">
            <span className="process-node">{step.number}</span>
            <span className="process-label">{step.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
