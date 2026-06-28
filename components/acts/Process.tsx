"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";
import { Caption } from "@/components/ui/Caption";
import { Button } from "@/components/ui/Button";
import { PROCESS, PROCESS_HEADING, CTA, ANCHORS } from "@/lib/content";
import { EASE } from "@/lib/anim";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** The 3-step engagement model, leading into the final invitation. */
export function Process() {
  return (
    <section
      id={ANCHORS.process.slice(1)}
      className="relative z-10 flex min-h-screen flex-col justify-center gap-14 px-6 py-28 sm:px-12 lg:px-20"
    >
      <Reveal className="flex max-w-2xl flex-col gap-5">
        <Caption>how it works</Caption>
        <h2 className="font-display text-[clamp(2rem,4.6vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.03em] text-balance">
          {PROCESS_HEADING}
        </h2>
      </Reveal>

      <motion.ol
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {PROCESS.map((step) => (
          <motion.li
            key={step.step}
            variants={item}
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-surface/30 p-7"
          >
            <span className="font-mono text-sm tracking-[0.3em] text-signal/70">
              {step.step}
            </span>
            <h3 className="font-display text-xl font-medium tracking-tight text-white">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-dim">{step.body}</p>
          </motion.li>
        ))}
      </motion.ol>

      <Reveal>
        <Button href={CTA.assessment.href}>{CTA.assessment.label}</Button>
      </Reveal>
    </section>
  );
}
