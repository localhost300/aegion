import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Shield, Landmark, Target, Sparkles } from "lucide-react";

const props = [
  {
    title: "IRA Stewardship",
    description:
      "Purpose-built rollover playbooks, compliant onboarding, and proactive communication journeys for every participant segment.",
    Icon: Shield,
  },
  {
    title: "401(k) Modernization",
    description:
      "Plan diagnostics, fee benchmarking, and investment-menu architecture that keep sponsors confident and regulators satisfied.",
    Icon: Landmark,
  },
  {
    title: "Holistic Wealth Design",
    description:
      "Coordinated retirement, equity, and insurance strategies that give executives a unified lens on their long-term capital.",
    Icon: Target,
  },
  {
    title: "Experience Leadership",
    description:
      "Participant storytelling, education pulses, and digital tools that turn complex decisions into simple, human conversations.",
    Icon: Sparkles,
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
