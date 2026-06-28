"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Caption } from "@/components/ui/Caption";
import { Button } from "@/components/ui/Button";
import { INVITATION, FOOTER, ANCHORS } from "@/lib/content";

/** The final calm — invitation / CTA + company footer. */
export function Invitation() {
  return (
    <section
      id={ANCHORS.contact.slice(1)}
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <Reveal className="flex flex-col items-center gap-7">
        <Caption>{INVITATION.caption}</Caption>
        <h2 className="max-w-3xl font-display text-[clamp(2.2rem,6vw,4.4rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          {INVITATION.headingTop}
          <br />
          <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            {INVITATION.headingAccent}
          </span>
        </h2>
        <p className="max-w-md text-base leading-relaxed text-dim">
          {INVITATION.sub}
        </p>
        <div className="mt-3 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Button href={INVITATION.primary.href}>{INVITATION.primary.label}</Button>
          <Button href={INVITATION.secondary.href} variant="ghost">
            {INVITATION.secondary.label}
          </Button>
        </div>
      </Reveal>

      <footer className="absolute bottom-6 flex w-full flex-col items-center gap-4 px-6 text-center sm:bottom-8 sm:px-12">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {FOOTER.legal.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.24em] text-faint transition-colors hover:text-dim"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-[0.22em] text-faint sm:flex-row sm:justify-between sm:gap-0 sm:self-stretch">
          <span className="normal-case tracking-normal text-faint/90">
            {FOOTER.company} · {FOOTER.address}
          </span>
          <span>{FOOTER.copyright}</span>
        </div>
      </footer>
    </section>
  );
}
