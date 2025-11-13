import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Shield, Landmark, Target, Sparkles } from "lucide-react";

const props = [
  {
    title: "Liquid Yield Accounts",
    description:
      "Earn 4.00% APY on short-term savings with no account fees, balance minimums, or lockups—while keeping cash accessible whenever opportunity knocks.",
    Icon: Landmark,
  },
  {
    title: "Automated Growth Portfolios",
    description:
      "Our 4.50% APY foundation pairs low-risk bond ETFs with curated alternatives and automation that rebalances, harvests, and reinvests daily.",
    Icon: Sparkles,
  },
  {
    title: "Retirement Intelligence",
    description:
      "Unified visibility into every IRA, 401(k), and taxable account—complete with proactive nudges, strategy tracking, and regulatory confidence.",
    Icon: Shield,
  },
  {
    title: "Integrated FP&A",
    description:
      "Financial planning & analysis services that connect treasury, payroll, and personal finance so leaders can make fast, well-informed decisions.",
    Icon: Target,
  },
];

export default function ValueProps() {
  return (
    <section id="value" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why partners choose us"
          title="Retirement strategy, delivered with precision."
          description="Aegion Mountain combines actuarial depth with empathetic delivery - aligning fiduciary obligations with participant ambitions."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {props.map(({ title, description, Icon }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-brand-border bg-white/80 p-8 shadow-card"
            >
              <div className="inline-flex rounded-2xl bg-brand-blue/10 p-3 text-brand-blue">
                <Icon size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-brand-blue">
                {title}
              </h3>
              <p className="mt-3 text-base text-brand-slate">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
