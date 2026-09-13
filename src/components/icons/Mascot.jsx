// Mascota: una ventana de navegador contenta, después de ser arreglada.
export default function Mascot({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <rect x="6" y="6" width="108" height="108" rx="16" fill="var(--color-tag)" stroke="var(--color-ink)" strokeWidth="4" />
      <path d="M6 34h108" stroke="var(--color-ink)" strokeWidth="4" />
      <rect x="6" y="6" width="108" height="28" rx="16" fill="var(--color-accent)" />
      <path d="M6 20h108" stroke="var(--color-ink)" strokeWidth="0" opacity="0" />
      <circle cx="22" cy="20" r="4.5" fill="var(--color-ink)" />
      <circle cx="36" cy="20" r="4.5" fill="var(--color-ink)" />
      <circle cx="50" cy="20" r="4.5" fill="var(--color-ink)" />

      <circle cx="40" cy="70" r="8" fill="var(--color-ink)" />
      <circle cx="80" cy="70" r="8" fill="var(--color-ink)" />
      <circle cx="42.5" cy="67.5" r="2.4" fill="#fff" />
      <circle cx="82.5" cy="67.5" r="2.4" fill="#fff" />

      <path d="M38 90c6 8 38 8 44 0" stroke="var(--color-ink)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="26" cy="86" r="6" fill="var(--color-accent)" opacity="0.55" />
      <circle cx="94" cy="86" r="6" fill="var(--color-accent)" opacity="0.55" />
    </svg>
  );
}
