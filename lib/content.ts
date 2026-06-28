/**
 * Single source of truth for all AceByte landing-page copy.
 *
 * Every visible string on the page is defined here so components stay
 * presentation-only and copy never gets duplicated or hardcoded across files.
 *
 * Voice: AceByte is an AI engineering and intelligent-automation company —
 * a technical partner that designs, integrates and deploys production-ready
 * systems. Tone is confident, precise, technical and calm. No hype, no
 * absolute claims, no invented metrics or clients.
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

// Section anchors only — the consultation CTA lives in the right-hand nav pill.
export const NAV: readonly NavLink[] = [
  { label: "Capabilities", href: ANCHORS.capabilities },
  { label: "Approach", href: ANCHORS.results },
  { label: "Process", href: ANCHORS.process },
];

/** A calm, consultative CTA system — no pressure, no urgency language. */
export const CTA = {
  consultation: { label: "Book a Consultation", href: ANCHORS.contact },
  schedule: { label: "Schedule a Consultation", href: ANCHORS.contact },
  explore: { label: "Explore Your AI Opportunities", href: ANCHORS.capabilities },
} as const;

export const HERO = {
  eyebrow: "AceByte Technology · AI Systems Engineering",
  headingTop: "Intelligent systems engineered for",
  headingAccent: "real business operations.",
  sub: "We design and deploy AI systems that automate complex workflows, optimize operational efficiency, and create measurable, long-term business value.",
  primary: CTA.consultation,
  secondary: CTA.explore,
} as const;

/**
 * Capability-focused proof points (replaces invented performance metrics).
 * Three items to match the existing three-column band.
 */
export const STATS: readonly Stat[] = [
  { value: "Workflow Automation", label: "Reduce repetitive manual execution" },
  { value: "Systems Integration", label: "Connect AI into existing business systems" },
  { value: "Operational Efficiency", label: "Optimize internal process execution" },
];

/** Act I — the operational reality AceByte addresses. */
export const ACT_CHAOS = {
  caption: "operational complexity",
  heading: "Operational complexity is spread across disconnected systems.",
  sub: "Critical data lives in Salesforce, SAP, Oracle and dozens of other tools. Without a connected view, manual effort accumulates and operational efficiency erodes.",
} as const;

/** Act II — custom AI engineering (value proposition / why custom). */
export const ACT_AWAKENING = {
  caption: "custom ai engineering",
  heading: "Off-the-shelf AI rarely solves real operational challenges.",
  sub: "We engineer intelligent systems around your workflows, infrastructure and operational constraints — custom architectures designed for your operational reality, not generic templates you adapt to.",
} as const;

export const PILLARS_HEADING = "Core capabilities";
export const PILLARS: readonly Pillar[] = [
  {
    title: "Intelligent Workflow Automation",
    body: "Automate repetitive operational processes with AI systems built for real business environments.",
  },
  {
    title: "Predictive Decision Intelligence",
    body: "Turn operational data into actionable insight that strengthens day-to-day decision-making.",
  },
  {
    title: "AI System Integration",
    body: "Embed intelligent capabilities directly into your existing software ecosystem.",
  },
  {
    title: "Autonomous Operational Monitoring",
    body: "Continuously monitor business workflows and reduce manual operational intervention.",
  },
  {
    title: "Process Optimization Architecture",
    body: "Design scalable automation architectures that improve long-term operational efficiency.",
  },
  {
    title: "Custom AI Engineering",
    body: "Build purpose-specific AI systems tailored to your organization and technical environment.",
  },
];

/** Act III — decision intelligence / automated response. */
export const ACT_REASONING = {
  caption: "decision intelligence",
  heading: "Detect operational anomalies early and automate intelligent response.",
  sub: "Operational data from each system is normalized and correlated, so teams act on a single reliable view — and emerging risks trigger automated response workflows instead of manual escalation.",
} as const;

export const INTEGRATIONS_HEADING = "Integrated with your existing stack";
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

/** Act IV — engineering philosophy + capability trust points. */
export const RESULTS = {
  caption: "engineering philosophy",
  heading: "Engineered for real operational complexity, not demos.",
  sub: "AceByte builds production-ready intelligent systems that integrate with your enterprise environment and are designed to deliver measurable, long-term value.",
  // Capability-focused trust points (replaces invented business metrics).
  points: [
    { value: "Complex environments", label: "Built for real operational complexity" },
    { value: "Scalable deployment", label: "Designed for production growth" },
    { value: "Enterprise integration", label: "Connected to your existing systems" },
  ] as readonly Stat[],
  // Founder vision statement (a philosophy block, not a testimonial).
  testimonial: {
    quote:
      "Artificial intelligence should not remain experimental. It should integrate directly into real operational workflows and generate measurable business impact.",
    name: "Austin Zhang",
    role: "Founder, AceByte Technology",
  },
} as const;

/** Act V — engagement model. */
export const PROCESS_HEADING = "From operational assessment to production deployment.";
export const PROCESS: readonly ProcessStep[] = [
  {
    step: "01",
    title: "Discovery and assessment",
    body: "We map your operational workflows, systems and constraints to identify where intelligent automation can create measurable value.",
  },
  {
    step: "02",
    title: "Architecture and roadmap",
    body: "You receive a technical roadmap with a scoped implementation plan, integration approach and the expected operational outcomes.",
  },
  {
    step: "03",
    title: "Engineering and deployment",
    body: "We build, integrate and deploy production-ready systems into your environment, with ongoing support and continuous improvement.",
  },
];

export const INVITATION = {
  caption: "get in touch",
  headingTop: "Ready to explore practical AI opportunities",
  headingAccent: "for your business?",
  sub: "Let's identify where intelligent automation can create measurable operational value inside your organization.",
  primary: CTA.schedule,
  secondary: CTA.explore,
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
