/** Minimal inline icon set (sized by font-size via 1em). */
type P = { className?: string };

export const LeafSpark = ({ className }: P) => (
  <svg viewBox="0 0 16 16" className={className} width="1em" height="1em" fill="none" aria-hidden>
    <path d="M14 2C8 2 4 5 4 10c0 .6.1 1.1.2 1.6C6 8 9 6 12 5c-3 2-5 4-6.4 7.4.8.4 1.6.6 2.4.6 4 0 6-4 6-11Z" fill="currentColor" />
  </svg>
);

export const ChevronDown = ({ className }: P) => (
  <svg viewBox="0 0 16 16" className={className} width="1em" height="1em" fill="none" aria-hidden>
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Instagram = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} width="1em" height="1em" fill="none" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export const Facebook = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} width="1em" height="1em" fill="none" aria-hidden>
    <path d="M14 8.5V7c0-.8.5-1 1-1h1.5V3H14c-2 0-3.5 1.3-3.5 3.6V8.5H8V11.5h2.5V21H14v-9.5h2.3l.4-3H14Z" fill="currentColor" />
  </svg>
);

export const Heart = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} width="1em" height="1em" fill="none" aria-hidden>
    <path d="M12 20S4 14.5 4 9.2A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 8 2.2C20 14.5 12 20 12 20Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const Menu = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} width="1em" height="1em" fill="none" aria-hidden>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// two-leaf sprout / seedling (matches the value-pillar icon in 1.png)
export const Leaf = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} width="1em" height="1em" fill="none" aria-hidden>
    <path d="M12 21V11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    {/* left leaf */}
    <path d="M11 13C10 9 7 6.5 3 6.5c0 4 3 6.8 8 6.8Z" fill="currentColor" opacity="0.8" />
    {/* right leaf */}
    <path d="M13 12C13 8 16 5.5 21 5.5c0 4-3 6.8-8 6.8Z" fill="currentColor" />
  </svg>
);

// lotus — centre petal + two side petals each way, fanning up (matches 1.png)
export const Lotus = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} width="1em" height="1em" fill="none" aria-hidden>
    <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none">
      <path d="M12 4c1.8 2.6 1.8 6.4 0 9-1.8-2.6-1.8-6.4 0-9Z" />
      <path d="M12 13c-1-3-3.8-5-7-4.6.2 3.4 2.6 5.6 7 5.6" />
      <path d="M12 13c1-3 3.8-5 7-4.6-.2 3.4-2.6 5.6-7 5.6" />
      <path d="M12 13C9.5 11.6 6 12 4 14c1.6 2.6 5 3.4 8 1.6" />
      <path d="M12 13c2.5-1.4 6-1 8 1-1.6 2.6-5 3.4-8 1.6" />
    </g>
  </svg>
);

export const Sun = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} width="1em" height="1em" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const Laptop = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} width="1em" height="1em" fill="none" aria-hidden>
    <rect x="5" y="5" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 18h18l-1.5-2H4.5L3 18Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const Clock = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} width="1em" height="1em" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const People = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} width="1em" height="1em" fill="none" aria-hidden>
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="16" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5M15 14c2.5 0 4.5 2 4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const ArrowRight = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} width="1em" height="1em" fill="none" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Close = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} width="1em" height="1em" fill="none" aria-hidden>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
