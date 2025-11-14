import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function RetirementIRA() {
  return (
    <section id="foundation" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative order-2 h-[28rem] overflow-hidden rounded-3xl shadow-card lg:order-1">
          <Image
            src="/family-finance.jpg"
            alt="Family reviewing wealth plans together"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Wealth Accumulation"
            title="Build a solid foundation for all of your financial assets to grow."
            description="You care about investing, saving, or maximizing profits; we provide the discipline and automation behind effortless wealth building."
          />
          <p className="text-base text-brand-slate">
            Benefit from an exceptional 4.50% annual percentage yield on capital without complicated
            lockups. Dividends from our carefully curated portfolio of low-risk bond ETFs flow
            alongside future-ready themes so you capture dependable income while positioning for
            tomorrow.
          </p>
          <p className="text-base text-brand-slate">
            Explore a wide range of alternative allocations, tax-aware strategies, and retirement
            account structures without adding busywork to your day. Automation keeps the strategy
            in sync; your only job is to choose where to celebrate the progress.
          </p>
          <Link
            href="https://admin.aegionmountain.com/register"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-brand-blue px-8 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-navy"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
