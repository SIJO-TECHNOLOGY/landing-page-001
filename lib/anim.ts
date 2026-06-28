/** Shared motion constants so easing/timing live in one place. */

/** Premium "out-expo"-style easing used by every entrance animation. */
export const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Cold-open choreography timings (seconds), tuned to the canvas ignition
 * (SystemCanvas INTRO_MS). Centralized so the text reveal and the canvas
 * stay in sync if the ignition length ever changes.
 */
export const INTRO = {
  eyebrow: 2.3,
  headingA: 2.55,
  headingB: 2.75,
  sub: 3.2,
  cta: 3.55,
  nav: 3.7,
} as const;
