import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Landmark, Sparkles, Target } from "lucide-react";

const props = [
  {
    title: "Financial Mastery",
    description:
      "Create revenue streams intentionally and steadily. We harmonize short-term cash goals with long-term compounding so every decision feeds a healthier balance sheet.",
    Icon: Landmark,
  },
  {
    title: "Strategic Transformation",
    description:
      "Encourage constructive change that leads to a prosperous future. Our analysts translate complex market signals into action steps your team can actually run.",
    Icon: Sparkles,
  },
  {
    title: "Collective Ingenuity",
    description:
      "Build creative solutions that unite operations, HR, and finance. Shared rituals and transparent reporting keep everyone marching toward the same summit.",
    Icon: Target,
  },
];

export default function ValueProps() {
  return (
    <section id="value" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Reach higher"
          title="Reach new heights in your life."
          description="Aegion Mountain is a leading partner for modern financial programs, offering individualized playbooks for sustained prosperity and thoughtful wealth stewardship."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
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
              <h3 className="mt-6 text-2xl font-semibold text-brand-blue">{title}</h3>
              <p className="mt-3 text-base text-brand-slate">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
