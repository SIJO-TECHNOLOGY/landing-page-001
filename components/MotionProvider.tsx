"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Makes every Motion animation on the page honor the user's
 * `prefers-reduced-motion` setting automatically. Without this, only the
 * canvas respected the setting while the text animations always ran.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
