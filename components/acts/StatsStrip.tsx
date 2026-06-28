"use client";

import { motion } from "motion/react";
import { STATS } from "@/lib/content";
import { EASE, INTRO } from "@/lib/anim";

/** Business-results proof points, revealed just after the hero CTAs. */
export function StatsStrip() {
  return (
    <motion.dl
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: EASE, delay: INTRO.cta + 0.25 }}
      className="mt-9 grid w-full max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:mt-10 sm:grid-cols-3"
    >
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center gap-1 bg-surface/30 px-5 py-5 text-center"
        >
          <dt className="order-2 text-xs leading-snug text-faint">
            {stat.label}
          </dt>
          <dd className="order-1 font-display text-3xl font-medium tracking-tight text-white">
            {stat.value}
          </dd>
        </div>
      ))}
    </motion.dl>
  );
}
