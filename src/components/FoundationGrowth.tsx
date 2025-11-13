import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export default function FoundationGrowth() {
  return (
    <section id="growth" className="bg-brand-pearl py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.85fr]">
        <div className="space-y-6">
          <SectionHeading
            align="left"
            eyebrow="Wealth Accumulation"
            title="Build a solid foundation for all of your financial assets to grow."
            description="Earning 4.50% APY on cash shouldn’t require hoops. We combine low-risk bond ETF exposure, long-term automation, and curated alternatives so every dollar compounds with intention."
          />
          <p className="text-base text-brand-slate">
            You care about investing, saving, and maximising profits; we supply the discipline
            behind effortless wealth accumulation. Dividends from our carefully curated portfolio
            of low-risk bond ETFs flow alongside a rotation of future-ready themes—so you capture
            dependable income while positioning for tomorrow.
          </p>
          <ul className="space-y-3 text-sm text-brand-blue">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
              Exceptional 4.50% annual percentage yield on capital without complicated lockups.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
              Dividends sourced from diversified, low-volatility bond ETFs.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
              Long-term investing strategies guided by our renowned automation.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
              Explore a range of alternatives to optimise your allocation without adding busywork.
            </li>
          </ul>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-3xl">
            <Image
              src="/macro-shot-financial-mortgage-concept.jpg"
              alt="Macro shot of financial planning documents"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl">
            <Image
              src="/authentic-small-youthful-marketing-agency.jpg"
              alt="Team reviewing diversified wealth strategies"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
