/** Centralized site copy & navigation (single source for header/footer/pages). */

export const site = {
  name: "Havenora Care",
  tagline: "A safe place to heal, grow & thrive",
  blurb:
    "Compassionate support for your mind, heart and personal growth. You don't have to do it alone.",
  email: "hello@havenora.care",
  phone: "+1 (000) 000-0000",
  ribbon: "A gentle space · Real conversations · Meaningful change",
} as const;

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "For You",
    href: "/for-you",
    children: [
      { label: "A Gentle Path", href: "/for-you" },
      { label: "Our Approaches", href: "/for-you#approaches" },
    ],
  },
  { label: "Resources", href: "/voices" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Approach", href: "/for-you" },
      { label: "Our Team", href: "/about#team" },
      { label: "Careers", href: "/about#careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Individual Therapy", href: "/services#individual" },
      { label: "Couples Therapy", href: "/services#couples" },
      { label: "Teen Therapy", href: "/services#teen" },
      { label: "Group Therapy", href: "/services#group" },
      { label: "Workshops", href: "/services#workshops" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Voices of Healing", href: "/voices" },
      { label: "Journal", href: "/voices#journal" },
      { label: "FAQs", href: "/contact#faq" },
      { label: "Self-Care", href: "/voices#self-care" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Book a Session", href: "/contact" },
      { label: "hello@havenora.care", href: "mailto:hello@havenora.care" },
      { label: "Online & In-person", href: "/contact" },
    ],
  },
];

export const newsletter = {
  title: "Stay Connected",
  blurb: "Thoughtful tips, gentle reminders and resources — straight to your inbox.",
} as const;

/* ---------------- Home ---------------- */

export const hero = {
  eyebrow: "A safe space to heal, grow & thrive",
  titleLead: "Therapy that feels",
  titleAccent: "safe, real & supportive.",
  blurb:
    "Compassionate support for your mind, heart and personal growth. You don't have to do it alone.",
  quote: {
    lead: "A space to be",
    accent: "yourself — fully.",
    body: "Honesty, lightness and even your humor have a place here.",
  },
} as const;

export const valueProps: { icon: "heart" | "leaf" | "lotus" | "sun"; title: string }[] = [
  { icon: "heart", title: "Safe & Confidential" },
  { icon: "leaf", title: "Personalized Care" },
  { icon: "lotus", title: "Holistic Approach" },
  { icon: "sun", title: "Growth & Healing" },
];

export const infoBar: { icon: "laptop" | "clock" | "people"; label: string; meta?: string; note: string }[] = [
  { icon: "laptop", label: "Online Sessions", meta: "Available", note: "Join from the comfort of your space." },
  { icon: "clock", label: "Individual Sessions", meta: "60 minutes · ₹1500 / session", note: "A focused hour just for you." },
  { icon: "people", label: "Couples Sessions", meta: "75–90 minutes · ₹3000 / session", note: "Stronger together, supported as one." },
];

export const services: {
  id: string;
  title: string;
  blurb: string;
  duration: string;
  price: string;
}[] = [
  { id: "individual", title: "Individual Therapy", blurb: "One-on-one support tailored to your unique needs and goals.", duration: "60 min", price: "₹1500" },
  { id: "couples", title: "Couples Therapy", blurb: "Strengthen your bond, improve communication, and reconnect.", duration: "75–90 min", price: "₹3000" },
  { id: "teen", title: "Teen Therapy", blurb: "A safe space for teens to express, explore and build confidence.", duration: "50 min", price: "₹1200" },
  { id: "group", title: "Group Therapy", blurb: "Heal alongside others in a supportive and guided community.", duration: "90 min", price: "₹800" },
];

export const approachSteps: { step: string; title: string; blurb: string }[] = [
  { step: "01", title: "Reach Out", blurb: "Take the first step. No pressure, just a gentle hello." },
  { step: "02", title: "Connect", blurb: "We'll match you with a therapist who truly fits." },
  { step: "03", title: "Heal", blurb: "Explore, process and grow at a pace that feels right." },
  { step: "04", title: "Grow", blurb: "Build lasting tools and a life that feels like yours." },
];

export const modalities: { abbr: string; name: string; description: string }[] = [
  { abbr: "CBT", name: "Cognitive Behavioral", description: "Reframe unhelpful thought patterns and build practical, everyday coping skills." },
  { abbr: "DBT", name: "Dialectical Behavior", description: "Balance acceptance and change with tools for emotion regulation and distress tolerance." },
  { abbr: "EFT", name: "Emotion Focused", description: "Understand and gently transform difficult emotions to deepen connection with yourself and others." },
  { abbr: "ACT", name: "Acceptance & Commitment", description: "Make room for hard feelings while committing to actions aligned with your values." },
  { abbr: "IFS", name: "Internal Family Systems", description: "Meet and heal the different 'parts' of you with curiosity and compassion." },
  { abbr: "SFBT", name: "Solution Focused", description: "Build on your existing strengths to move toward the future you want, step by step." },
  { abbr: "Psychodynamic", name: "Insight-Oriented", description: "Explore how past experiences and patterns quietly shape your present." },
  { abbr: "Trauma-Informed", name: "Safety-First Care", description: "Paced, grounded work that honors your nervous system and your story." },
];

export const aboutValues: { title: string; blurb: string }[] = [
  { title: "Compassion first", blurb: "You're met with warmth and zero judgment — always." },
  { title: "Real & human", blurb: "Honest conversations, lightness, and even your humor belong here." },
  { title: "Evidence-based", blurb: "Proven, thoughtful approaches tailored to you." },
  { title: "Your pace", blurb: "We move gently, one step at a time, together." },
];

export const testimonials: { quote: string; name: string; tag: string }[] = [
  { quote: "I didn't think healing was possible for me. Therapy helped me find that softness again — slowly, gently.", name: "Aaratrika", tag: "Individual Therapy" },
  { quote: "For the first time, I felt heard, understood and truly supported. This space gave me back to myself.", name: "Ayesha", tag: "Couples Therapy" },
  { quote: "I used to feel so alone with my thoughts. Now I have tools, and a voice that finally feels like mine.", name: "Rohan", tag: "Teen Therapy" },
  { quote: "It never felt clinical. It felt like sitting with someone who genuinely cared whether I was okay.", name: "Meera", tag: "Individual Therapy" },
  { quote: "We learned to actually hear each other again. The change at home has been quiet but enormous.", name: "Dev & Sana", tag: "Couples Therapy" },
  { quote: "I came in exhausted and guarded. I'm leaving lighter, kinder to myself, and finally hopeful.", name: "Kabir", tag: "Group Therapy" },
];
