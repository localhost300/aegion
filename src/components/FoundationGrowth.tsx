import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export default function FoundationGrowth() {
  return (
    <section id="cash" className="bg-brand-pearl py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.9fr]">
        <div className="space-y-6">
          <SectionHeading
            align="left"
            eyebrow="Short-term savings"
            title="Easily increase your short-term savings returns while keeping cash within reach."
            description="Earn an enticing 4.00% APY through our partner banks. Accessing and investing your cash stays effortless with no hidden conditions or obligations."
          />
          <p className="text-base text-brand-slate">
            Unlock greater returns on idle cash while preserving complete liquidity. We choreograph
            cash sweeps, provide transparent dashboards, and alert you before key funding windows
            so you never sacrifice flexibility for yield.
          </p>
          <ul className="space-y-3 text-sm text-brand-blue">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
              No account fees or surprise lockups.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
              No minimum or maximum balance required to earn 4.00% APY.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
              Up to $3M of partner-bank insurance on deposits.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
              Daily liquidity so you can redeploy capital whenever opportunity knocks.
            </li>
          </ul>
          <div className="rounded-3xl border border-brand-border bg-white/80 p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
              Extra assurance
            </p>
            <p className="mt-3 text-base text-brand-slate">
              Statements consolidate every partner bank, making compliance reviews and treasury
              reporting as simple as exporting a single file.
            </p>
          </div>
        </div>
        <div className="relative h-[26rem] overflow-hidden rounded-3xl shadow-card">
          <Image
            src="/macro-shot-financial-mortgage-concept.jpg"
            alt="Short-term savings represented by a structure made of cash"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
