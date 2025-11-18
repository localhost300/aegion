import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Aegion Mountain tuned our automation to the West Coast liquidity windows and documented every guardrail for our auditors.",
    author: "Dana Chen, Chief Investment Officer",
    region: "San Francisco, CA",
  },
  {
    quote:
      "Their team blends governance rigor with fast execution. EMEA desks finally have a playbook that keeps compliance comfortable.",
    author: "Marcus Flynn, VP Global Markets",
    region: "London, UK",
  },
  {
    quote:
      "Aegion strategists stay on-call, recalibrating signals for Toronto and NYC hours so our coverage never sleeps.",
    author: "Priya Raman, Portfolio Lead",
    region: "Toronto, ON",
  },
];

const partners = ["Sierra Crest (US West)", "Northwind Group (UK)", "Helios Partners (Gulf)", "Lattice Industries (Canada)", "Axiom Bridge (Midwest)"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-pearl py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Trust"
          title="Aegion relationships across North America and EMEA."
          description="Automation, advisory, and oversight tailored to regional hours, liquidity profiles, and governance standards."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex h-full flex-col justify-between rounded-3xl border border-brand-border bg-white p-8 shadow-card"
            >
              <Quote className="text-brand-gold" />
              <p className="mt-6 text-lg text-brand-blue">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-semibold text-brand-blue">{testimonial.author}</p>
                <p className="text-sm text-brand-slate">{testimonial.region}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-brand-border bg-white/70 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-slate">
            Partners & Alliances
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-6 text-brand-blue/70">
            {partners.map((partner) => (
              <span key={partner} className="text-sm font-semibold uppercase tracking-wide">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
