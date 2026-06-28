"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";
import { Caption } from "@/components/ui/Caption";
import {
  ACT_AWAKENING,
  PILLARS,
  PILLARS_HEADING,
  INTEGRATIONS,
  INTEGRATIONS_HEADING,
  ANCHORS,
} from "@/lib/content";
import { EASE } from "@/lib/anim";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/**
 * Act II — purpose-built AI. The narrative beat (agents "wake up" on the canvas)
 * plus the four capability pillars and the integration band.
 */
export function Capabilities() {
  return (
    <section
      id={ANCHORS.capabilities.slice(1)}
      className="relative z-10 flex min-h-screen flex-col justify-center gap-16 px-6 py-28 sm:px-12 lg:px-20"
    >
      <Reveal className="flex max-w-2xl flex-col gap-5">
        <Caption>{ACT_AWAKENING.caption}</Caption>
        <h2 className="font-display text-[clamp(2rem,4.6vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.03em] text-balance">
          {ACT_AWAKENING.heading}
        </h2>
        <p className="max-w-md text-base leading-relaxed text-dim">
          {ACT_AWAKENING.sub}
        </p>
      </Reveal>

      <div className="flex flex-col gap-7">
        <Reveal>
          <Caption>{PILLARS_HEADING}</Caption>
        </Reveal>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-2"
        >
          {PILLARS.map((pillar) => (
            <motion.li
              key={pillar.title}
              variants={item}
              className="flex flex-col gap-2 bg-surface/30 p-7 transition-colors hover:bg-surface/50"
            >
              <h3 className="font-display text-lg font-medium tracking-tight text-white">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-dim">{pillar.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <Reveal className="flex flex-col gap-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-faint">
          {INTEGRATIONS_HEADING}
        </p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {INTEGRATIONS.map((name) => (
            <li
              key={name}
              className="font-display text-lg font-medium tracking-tight text-dim/80 transition-colors hover:text-white sm:text-xl"
            >
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
