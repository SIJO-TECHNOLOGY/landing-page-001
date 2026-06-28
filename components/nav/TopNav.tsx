"use client";

import { motion } from "motion/react";
import { NAV, CTA, ANCHORS } from "@/lib/content";
import { EASE, INTRO } from "@/lib/anim";

/** Ultra-minimal nav that fades in once the cold open has resolved. */
export function TopNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: EASE, delay: INTRO.nav }}
      className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 sm:px-10"
    >
      <a
        href={ANCHORS.top}
        className="font-display text-sm font-semibold tracking-tight"
      >
        Ace<span className="text-accent-soft">Byte</span>
      </a>

      <nav className="hidden items-center gap-8 md:flex">
        {NAV.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors duration-200 hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-signal/80 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href={CTA.consultation.href}
        className="rounded-full border border-white/15 bg-white/[0.02] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-dim transition-all duration-300 hover:border-signal/50 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_10px_30px_-12px_rgba(56,189,248,0.55)] motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0"
      >
        Get in touch
      </a>
    </motion.header>
  );
}
