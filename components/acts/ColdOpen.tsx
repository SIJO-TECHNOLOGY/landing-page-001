"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { StatsStrip } from "@/components/acts/StatsStrip";
import { HERO, ANCHORS } from "@/lib/content";
import { EASE, INTRO } from "@/lib/anim";

/** Orchestrated load reveal, timed to the canvas ignition (~2.4s). */
export function ColdOpen() {
  return (
    <section
      id={ANCHORS.top.slice(1)}
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-28 text-center sm:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: INTRO.eyebrow }}
        className="mb-6 font-mono text-[10px] uppercase tracking-[0.4em] text-signal/70 sm:text-[11px]"
      >
        {HERO.eyebrow}
      </motion.div>

      <h1 className="max-w-4xl font-display text-[clamp(2.3rem,5.4vw,4.6rem)] font-medium leading-[1.04] tracking-[-0.03em]">
        <motion.span
          className="block"
          initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: EASE, delay: INTRO.headingA }}
        >
          {HERO.headingTop}
        </motion.span>
        <motion.span
          className="block bg-gradient-to-b from-white to-white/55 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: EASE, delay: INTRO.headingB }}
        >
          {HERO.headingAccent}
        </motion.span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: INTRO.sub }}
        className="mt-6 max-w-xl text-balance text-base leading-relaxed text-dim"
      >
        {HERO.sub}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: INTRO.cta }}
        className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4"
      >
        <Button href={HERO.primary.href}>{HERO.primary.label}</Button>
        <Button href={HERO.secondary.href} variant="ghost">
          {HERO.secondary.label}
        </Button>
      </motion.div>

      <StatsStrip />
    </section>
  );
}
