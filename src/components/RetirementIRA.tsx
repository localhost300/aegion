import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export default function RetirementIRA() {
  return (
    <section id="retirement-iras" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <SectionHeading
            align="left"
            eyebrow="Retirement IRAs"
            title="The retirement of your dreams starts with the retirement account of your dreams."
            description="Our Automated Investing Account helps you save for retirement with clever algorithms and curated opportunities in technology, renewable energy, cannabis, and hundreds of other configurable alternatives."
          />
          <p className="text-base text-brand-slate">
            Retirement is about you not working. Seeing every asset on and off Aegion Mountain
            makes it simple to monitor your progress, while our automation ensures each portfolio
            follows the exact strategy you designed. We handle the trades, rebalance accounts, and
            return time back to you.
          </p>
          <blockquote className="rounded-3xl bg-brand-pearl/80 p-6 text-brand-blue">
            “Retirement accounts are where many people start investing, but it shouldn’t be where you
            stop. A taxable Automated Investing Account can help you do much, much more with your
            investments—and you don’t have to wait until you’re 65.”
          </blockquote>
          <div className="space-y-4">
            <p className="text-sm text-brand-blue">
              By utilising your current tax band and paying taxes on investments now, you can reduce
              retirement taxes later. Establish tax-deductible retirement plans for yourself or your
              employees—even if you’re self-employed. Only your withdrawals will be taxed.
            </p>
            <p className="text-sm text-brand-blue">
              Enjoy today’s tax benefits and deductions, knowing that automation is keeping your
              portfolio aligned, your contributions optimised, and your documentation ready for any
              compliance review.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative h-[32rem] overflow-hidden rounded-3xl md:row-span-2">
            <Image
              src="/retirement-joy.jpg"
              alt="Happy retiree enjoying the future she planned"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 overflow-hidden rounded-3xl">
            <Image
              src="/life-style.jpg"
              alt="Family enjoying lifestyle goals"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 overflow-hidden rounded-3xl">
            <Image
              src="/lifestyle-people-office.jpg"
              alt="Team configuring retirement automation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
