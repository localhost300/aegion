import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    description:
      "Plan health assessments, fiduciary file reviews, and participant journey mapping.",
  },
  {
    title: "Design",
    description:
      "Modeling of plan provisions, contribution policies, and benefit communications.",
  },
  {
    title: "Activation",
    description:
      "Change orchestration, vendor coordination, and guided enrollment experiences.",
  },
  {
    title: "Assurance",
    description:
      "Ongoing monitoring, board-ready reporting, and regulator-aligned documentation.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="bg-brand-blue py-24 text-white"
      style={{ backgroundImage: "linear-gradient(120deg,#0b162f,#0f3f7f)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our approach"
          title="A precise rhythm from insight to assurance."
          description="Every Aegion Mountain engagement moves through four disciplined phases - keeping sponsors aligned and participants informed."
          theme="dark"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative rounded-3xl border border-white/20 bg-white/10 p-6"
            >
              <div className="absolute inset-x-6 top-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
                <span>0{index + 1}</span>
                {step.title}
              </div>
              <div className="pt-16">
                <p className="text-base text-white/80">{step.description}</p>
              </div>
              <ArrowUpRight className="mt-6 text-brand-gold" size={20} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
