/** Heart outline sprouting two leaves — divider motif. Inherits `currentColor`. */
export default function HeartLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 64"
      className={className}
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 26 C 36 16 24 16 24 27 C 24 36 36 42 40 48 C 44 42 56 36 56 27 C 56 16 44 16 40 26 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M40 48 C 30 50 22 46 16 38 C 26 36 35 40 40 48 Z" fill="currentColor" opacity="0.55" />
      <path d="M40 48 C 50 50 58 46 64 38 C 54 36 45 40 40 48 Z" fill="currentColor" opacity="0.85" />
    </svg>
  );
}
