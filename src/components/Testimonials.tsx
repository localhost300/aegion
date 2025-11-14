import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Aegion Mountain transformed how our board understands retirement readiness. Their detail and empathy show up in every interaction.",
    author: "Elena Park",
    role: "Chief Strategy Officer · Aegion Mountain client",
  },
  {
    quote:
      "They deliver clarity in the room, alignment after the meeting, and measurable lift in plan outcomes within weeks.",
    author: "Marcus Flynn",
    role: "Managing Partner · Aegion Mountain client",
  },
  {
    quote:
      "A trusted guide for structuring bold growth agendas - decisive, data-rich, and deeply collaborative.",
    author: "Priya Raman",
    role: "Board Chair · Aegion Mountain client",
  },
];

const partners = [
  "Sterling Ridge",
  "Northwind Group",
  "Helios Partners",
  "Lattice Industries",
  "Axiom Bridge",
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-pearl py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Trust"
          title="Relationships anchored in delivery."
          description="We champion discretion and reliability - earning mandates from Fortune 200 boards, growth-stage disruptors, and mission-driven institutions."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex h-full flex-col justify-between rounded-3xl border border-brand-border bg-white/90 p-8"
            >
              <Quote className="text-brand-gold" />
              <p className="mt-6 text-lg text-brand-blue">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-semibold text-brand-blue">{testimonial.author}</p>
                <p className="text-sm text-brand-slate">{testimonial.role}</p>
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
