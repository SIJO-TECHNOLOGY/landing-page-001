/**
 * Single source of truth for all SIJO landing-page copy.
 *
 * Every visible string on the page is defined here so components stay
 * presentation-only and copy never gets duplicated or hardcoded across files.
 *
 * Voice: SIJO est un cabinet de conseil en IT, pure player technologique et
 * digital en banque et finance — "Le cabinet qui pense à vous". Ton calme,
 * précis et humain : la force du collectif, l'accompagnement des consultants
 * et la confiance des grands comptes. Pas de superlatifs, pas de métriques
 * inventées.
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
  capabilities: "#valeurs",
  results: "#expertise",
  process: "#parcours",
  contact: "#contact",
} as const;

export const BRAND = {
  name: "SIJO",
  full: "SIJO",
  tagline: "Le cabinet qui pense à vous.",
} as const;

// Section anchors only — the contact CTA lives in the right-hand nav pill.
export const NAV: readonly NavLink[] = [
  { label: "Valeurs", href: ANCHORS.capabilities },
  { label: "Expertise", href: ANCHORS.results },
  { label: "Parcours", href: ANCHORS.process },
];

/** A calm, human CTA system — no pressure, no urgency language. */
export const CTA = {
  consultation: { label: "Nous contacter", href: ANCHORS.contact },
  schedule: { label: "Nous rejoindre", href: ANCHORS.contact },
  explore: { label: "Découvrir nos valeurs", href: ANCHORS.capabilities },
} as const;

export const HERO = {
  eyebrow: "SIJO · Conseil IT · Banque & Finance",
  headingTop: "Le cabinet de conseil en IT où",
  headingAccent: "intelligence et force collective façonnent l'avenir.",
  sub: "SIJO est un cabinet de conseil en IT, pure player technologique et digital en banque et finance. Nous accompagnons nos clients du CAC 40 dans la réalisation de leurs projets techniques, et nos consultants dans leurs projets de carrière.",
  primary: CTA.consultation,
  secondary: CTA.explore,
} as const;

/**
 * Proof points ancrés dans la réalité du cabinet.
 * Three items to match the existing three-column band.
 */
export const STATS: readonly Stat[] = [
  { value: "Banque & Finance", label: "Pure player des environnements financiers exigeants" },
  { value: "Grands comptes", label: "Aux côtés de clients du CAC 40 depuis 2017" },
  { value: "Great Place to Work", label: "Cabinet certifié — le bien-être comme fondation" },
];

/** Act I — la réalité opérationnelle que SIJO adresse. */
export const ACT_CHAOS = {
  caption: "des projets exigeants",
  heading: "Les projets IT en banque et finance sont complexes et fragmentés.",
  sub: "Systèmes critiques, contraintes réglementaires, équipes dispersées : sans un partenaire de confiance, l'expertise se dilue et les projets s'essoufflent.",
} as const;

/** Act II — la force du collectif (value proposition). */
export const ACT_AWAKENING = {
  caption: "la force du collectif",
  heading: "Un consultant ne devrait jamais avancer seul.",
  sub: "Chez SIJO, chaque mission s'appuie sur un collectif : un ingénieur d'affaires dédié, un référent technique sénior et un accès illimité à la formation — l'intelligence collective au service de chaque projet.",
} as const;

export const PILLARS_HEADING = "Nos valeurs";
export const PILLARS: readonly Pillar[] = [
  {
    title: "Transparence",
    body: "Un facteur clé au cœur de la vie du cabinet, pour de bonnes relations entre les collaborateurs.",
  },
  {
    title: "Expertise",
    body: "Un professionnalisme d'accompagnement de nos consultants et de nos projets.",
  },
  {
    title: "Accompagnement",
    body: "Un suivi régulier assuré par un ingénieur d'affaires, indispensable pour la montée en compétence.",
  },
  {
    title: "Proximité",
    body: "Une relation de confiance pour une bonne collaboration, au quotidien.",
  },
  {
    title: "Formation continue",
    body: "Un accès illimité à notre plateforme de formation et la préparation des certifications.",
  },
  {
    title: "Gestion de carrière",
    body: "Un onboarding complet, un suivi hebdomadaire et une évolution construite dans la durée.",
  },
];

/** Act III — l'accompagnement au quotidien. */
export const ACT_REASONING = {
  caption: "l'accompagnement",
  heading: "Un suivi continu, du premier jour à la réussite de la mission.",
  sub: "Chaque consultant est accompagné en continu : points réguliers avec son business manager, référent technique sénior sur la mission, et un parcours de formation aligné sur ses objectifs de carrière.",
} as const;

export const INTEGRATIONS_HEADING = "Ils nous font confiance";
export const INTEGRATIONS: readonly string[] = [
  "Société Générale",
  "BNP Paribas",
  "Crédit Agricole",
  "La Banque Postale",
  "Edmond de Rothschild",
  "BPCE",
  "Engie",
  "Amundi",
];

/** Act IV — notre histoire + points de confiance. */
export const RESULTS = {
  caption: "notre histoire",
  heading: "Un cabinet pensé pour ses clients et ses consultants.",
  sub: "Fondé en 2017 par deux amis passionnés de finance et d'entrepreneuriat, SIJO accompagne les grands comptes de la banque et de la finance avec une conviction : la réussite des projets passe par le bien-être de ceux qui les réalisent.",
  // Points de confiance ancrés dans les faits du cabinet.
  points: [
    { value: "Fondé en 2017", label: "Une croissance construite dans la durée" },
    { value: "Certifié Great Place to Work", label: "Le bien-être des consultants, reconnu" },
    { value: "Clients grands comptes", label: "Banque, finance et énergie" },
  ] as readonly Stat[],
  // Vision des fondateurs (un bloc philosophie, pas un témoignage).
  testimonial: {
    quote:
      "Une entreprise d'expertise en conseil, centrée sur le besoin de ses clients et le bien-être de ses consultants.",
    name: "Les fondateurs",
    role: "SIJO, depuis 2017",
  },
} as const;

/** Act V — le parcours avec SIJO. */
export const PROCESS_HEADING = "De la rencontre à la réussite de vos projets.";
export const PROCESS: readonly ProcessStep[] = [
  {
    step: "01",
    title: "Rencontre et écoute",
    body: "Nous prenons le temps de comprendre votre besoin — projet technique côté client, ou projet de carrière côté consultant.",
  },
  {
    step: "02",
    title: "Mission et intégration",
    body: "Nous alignons la bonne expertise sur le bon projet, avec un onboarding complet et un référent technique sénior sur chaque mission.",
  },
  {
    step: "03",
    title: "Accompagnement continu",
    body: "Suivi régulier par un ingénieur d'affaires, formation illimitée et gestion de carrière : un accompagnement qui s'inscrit dans la durée.",
  },
];

export const INVITATION = {
  caption: "nous contacter",
  headingTop: "Envie d'écrire la suite",
  headingAccent: "avec SIJO ?",
  sub: "Que vous soyez un grand compte avec un projet technique ou un consultant en quête d'un cabinet qui pense à vous, parlons-en.",
  primary: CTA.consultation,
  secondary: CTA.schedule,
} as const;

export const FOOTER = {
  company: "SIJO",
  address: "43 Rue Pierre Brossolette, 92300 Levallois-Perret, France",
  copyright: "© 2026 SIJO. Tous droits réservés.",
  legal: [
    { label: "Politique de confidentialité", href: "#" },
    { label: "Mentions légales", href: "#" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/sijoesn" },
  ] as readonly NavLink[],
} as const;
