"use client";

import { motion } from "motion/react";
import { Caption } from "@/components/ui/Caption";
import { RESULTS, STATS, ANCHORS } from "@/lib/content";
import { EASE } from "@/lib/anim";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** The resolution beat — measurable business results + customer proof. */
export function Verdict() {
  return (
    <section
      id={ANCHORS.results.slice(1)}
      className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        className="w-full max-w-2xl rounded-2xl border border-white/10 bg-surface/60 p-7 backdrop-blur-md sm:p-9"
      >
        <motion.div variants={item}>
          <Caption>{RESULTS.caption}</Caption>
        </motion.div>

        <motion.h2
          variants={item}
          className="mt-6 font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-medium leading-[1.1] tracking-[-0.02em]"
        >
          {RESULTS.heading}
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-4 text-base leading-relaxed text-dim"
        >
          {RESULTS.sub}
        </motion.p>

        <motion.dl
          variants={item}
          className="mt-7 grid grid-cols-3 gap-3 border-y border-white/10 py-6"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 text-center">
              <dd className="font-display text-2xl font-medium tracking-tight text-ok sm:text-3xl">
                {stat.value}
              </dd>
              <dt className="text-[11px] leading-snug text-faint">
                {stat.label}
              </dt>
            </div>
          ))}
        </motion.dl>

        <motion.figure variants={item} className="mt-7">
          <blockquote className="text-base leading-relaxed text-text/90">
            “{RESULTS.testimonial.quote}”
          </blockquote>
          <figcaption className="mt-4 flex items-center gap-3">
            <span
              aria-hidden
              className="h-2 w-2 shrink-0 rounded-full bg-ok shadow-[0_0_12px] shadow-ok"
            />
            <span className="font-mono text-[11px] uppercase tracking-widest text-dim">
              {RESULTS.testimonial.name}
              <span className="text-faint"> · {RESULTS.testimonial.role}</span>
            </span>
          </figcaption>
        </motion.figure>
      </motion.div>
    </section>
  );
}
