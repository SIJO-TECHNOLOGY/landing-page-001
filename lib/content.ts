/**
 * Single source of truth for all AceByte landing-page copy.
 *
 * Every visible string on the page is defined here so components stay
 * presentation-only and copy never gets duplicated or hardcoded across files.
 * Content is adapted from acebyte-technology.com, lightly refined for a quiet,
 * credible, enterprise tone (no unsupported numbers, no invented services).
 */

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface Cta {
  readonly label: string;
  readonly href: string;
}

export interface Stat {
  readonly value: string;
  readonly label: string;
}

export interface Pillar {
  readonly title: string;
  readonly body: string;
}

export interface ProcessStep {
  readonly step: string;
  readonly title: string;
  readonly body: string;
}

/** In-page anchors — kept in one place so nav, CTAs and sections stay in sync. */
export const ANCHORS = {
  top: "#top",
  capabilities: "#capabilities",
  results: "#results",
  process: "#process",
  contact: "#contact",
} as const;

export const BRAND = {
  name: "AceByte",
  full: "AceByte Technology",
  tagline: "Engineering intelligence. Empowering business.",
} as const;

// Section anchors only — the contact CTA lives in the right-hand nav pill,
// so "Get in touch" is intentionally not duplicated here.
export const NAV: readonly NavLink[] = [
  { label: "Capabilities", href: ANCHORS.capabilities },
  { label: "Results", href: ANCHORS.results },
  { label: "Process", href: ANCHORS.process },
];

/** Primary + secondary calls to action, reused across the page. */
export const CTA = {
  readiness: { label: "Discover my AI readiness", href: ANCHORS.process },
  assessment: { label: "Start my assessment", href: ANCHORS.contact },
  consultation: { label: "Book a free consultation", href: ANCHORS.contact },
} as const;

export const HERO = {
  eyebrow: "AceByte Technology · Engineering intelligence",
  // Refined from "Turn Your Business Into a Profit Machine with AI" — same
  // intent (AI that drives profit), quieter and enterprise-credible.
  headingTop: "Purpose-built AI for the",
  headingAccent: "operations that run your business.",
  sub: "AceByte builds custom AI that automates and optimizes how your business runs — cutting costs, accelerating timelines, and surfacing the insights that keep you ahead.",
  primary: CTA.readiness,
  secondary: CTA.consultation,
} as const;

/**
 * Business-results stats. Replaces the original infrastructure-flavored band
 * (99.9% uptime / 85% downtime / 24-7 auto-recovery), which was off-positioning
 * for a business-optimization product. Numbers are AceByte's own published
 * results figures.
 */
export const STATS: readonly Stat[] = [
  { value: "€500K+", label: "average annual savings" },
  { value: "30%", label: "faster operations" },
  { value: "40%", label: "fewer operational inefficiencies" },
];

/** Act I — the problem AceByte addresses. */
export const ACT_CHAOS = {
  caption: "operations · fragmented",
  heading: "Your operations are scattered across disconnected systems.",
  sub: "Data lives in Salesforce, SAP, Oracle and a dozen other tools. The signal that matters is buried in the noise — and the cost of that compounds quietly, quarter after quarter.",
} as const;

/** Act II — purpose-built AI goes to work (intro to the capabilities block). */
export const ACT_AWAKENING = {
  caption: "purpose-built ai",
  heading: "So AceByte builds AI designed for how your business actually runs.",
  sub: "Custom models trained on your industry and your workflows — not a generic platform you have to bend your business to fit.",
} as const;

export const PILLARS_HEADING = "Unlock the power of purpose-built AI";
export const PILLARS: readonly Pillar[] = [
  {
    title: "Purpose-built for your business",
    body: "Custom AI models designed specifically for your industry and use cases.",
  },
  {
    title: "Proactive problem solving",
    body: "Predict issues before they happen and take corrective action automatically.",
  },
  {
    title: "Seamless system integration",
    body: "Works with your existing tools and workflows without disruption.",
  },
  {
    title: "Market intelligence",
    body: "Real-time insights and trends to keep you ahead of the competition.",
  },
];

/** Act III — reasoning across systems. */
export const ACT_REASONING = {
  caption: "predictive · data-driven",
  heading: "It reasons across every system at once — and turns data into decisions.",
  sub: "Evidence from each platform is normalized and cross-checked, so your teams act on a single trustworthy view instead of conflicting dashboards.",
} as const;

export const INTEGRATIONS_HEADING = "Seamless integration with your systems";
export const INTEGRATIONS: readonly string[] = [
  "Salesforce",
  "SAP",
  "Oracle",
  "Microsoft",
  "NetSuite",
  "Workday",
  "HubSpot",
  "Shopify",
];

/** Act IV — measurable results (Verdict card). */
export const RESULTS = {
  caption: "real business results",
  heading: "AI that delivers real, measurable results.",
  sub: "AceByte turns fragmented operations into a single optimized system — with outcomes you can put on a board slide.",
  // Original testimonial preserved; attribution kept as published. Not a
  // fabricated client — shown as a founder statement, not invented social proof.
  testimonial: {
    quote:
      "Working with AceByte Technology completely changed the way we manage our operations. Their AI-driven platform brought us clarity, efficiency and transparency — we cut operational costs by 35% and accelerated timelines by nearly a month.",
    name: "Austin ZHANG",
    role: "Founder",
  },
} as const;

/** Act V — process + invitation. */
export const PROCESS_HEADING = "Kickstart your business optimization in 3 steps";
export const PROCESS: readonly ProcessStep[] = [
  {
    step: "01",
    title: "Free assessment and discovery",
    body: "We assess your current operations, identify immediate opportunities, and show you exactly where you can reduce costs and improve efficiency.",
  },
  {
    step: "02",
    title: "Custom optimization roadmap",
    body: "Receive a tailored action plan with clear ROI projections, realistic timelines, and a zero-disruption implementation strategy.",
  },
  {
    step: "03",
    title: "Implementation and support",
    body: "We guide you through every step while you focus on running your business — with tangible improvements within weeks.",
  },
];

export const INVITATION = {
  caption: "get in touch",
  headingTop: "Stop optimizing in the dark.",
  headingAccent: "Start with an AI readiness assessment.",
  sub: "Purpose-built AI for the teams running mission-critical operations. See where AceByte can cut cost and accelerate your business — before you commit to anything.",
  primary: CTA.readiness,
  secondary: CTA.consultation,
} as const;

export const FOOTER = {
  company: "AceByte Technology Inc.",
  address: "77 Rue Henri Farman, 75015 Issy-les-Moulineaux, France",
  copyright: "© 2026 AceByte Technology Inc. All rights reserved.",
  legal: [
    { label: "Terms of service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ] as readonly NavLink[],
} as const;
