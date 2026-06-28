import { SystemCanvas } from "@/components/system/SystemCanvas";
import { TopNav } from "@/components/nav/TopNav";
import { ColdOpen } from "@/components/acts/ColdOpen";
import { ScrollAct } from "@/components/acts/ScrollAct";
import { Capabilities } from "@/components/acts/Capabilities";
import { Verdict } from "@/components/acts/Verdict";
import { Process } from "@/components/acts/Process";
import { Invitation } from "@/components/acts/Invitation";
import { ACT_CHAOS, ACT_REASONING } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* The protagonist — one persistent living system behind every act. */}
      <SystemCanvas />
      <TopNav />

      <main className="relative">
        {/* Act 0 — Cold open: hero + business-results proof */}
        <ColdOpen />

        {/* Act I — Fragmented operations (the problem) */}
        <ScrollAct
          caption={ACT_CHAOS.caption}
          heading={ACT_CHAOS.heading}
          sub={ACT_CHAOS.sub}
          align="left"
        />

        {/* Act II — Purpose-built AI: capabilities + integrations */}
        <Capabilities />

        {/* Act III — Reasoning: predictive, data-driven insight */}
        <ScrollAct
          caption={ACT_REASONING.caption}
          heading={ACT_REASONING.heading}
          sub={ACT_REASONING.sub}
          align="right"
        />

        {/* Act IV — Measurable results */}
        <Verdict />

        {/* Act V — Engagement model */}
        <Process />

        {/* Act VI — Invitation / CTA + footer */}
        <Invitation />
      </main>
    </>
  );
}
