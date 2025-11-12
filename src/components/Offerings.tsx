import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";

export default function Offerings() {
  return (
    <section id="solutions" className="bg-brand-pearl py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Core services"
          title="Comprehensive retirement solutions."
          description="From IRA transitions to 401(k) modernization and strategic governance, Aegion Mountain delivers specialist teams for every mandate."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="overflow-hidden rounded-3xl border border-brand-border bg-white shadow-card"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={service.cardImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-brand-blue">
                  {service.category}
                </div>
              </div>
              <div className="flex flex-col gap-4 p-8">
                <h3 className="text-2xl font-semibold text-brand-blue">
                  {service.title}
                </h3>
                <p className="text-base text-brand-slate">{service.summary}</p>
                <ul className="space-y-2 text-sm text-brand-slate">
                  {service.pillars.slice(0, 2).map((pillar) => (
                    <li key={pillar.title} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
                      <span>{pillar.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 text-sm font-semibold text-brand-blue/70">
                  {service.stats.slice(0, 2).map((stat) => (
                    <div key={stat.label}>
                      <p className="text-lg text-brand-blue">{stat.value}</p>
                      <p className="text-xs uppercase tracking-wide">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm font-semibold text-brand-blue underline-offset-4 hover:text-brand-gold hover:underline"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/services/${service.slug}`}
                    className="rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white hover:bg-brand-navy"
                  >
                    {service.ctaLabel}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-white/80 p-6 shadow-card">
          <p className="text-lg font-semibold text-brand-blue">
            Need a bespoke retirement solution?
          </p>
          <Link
            href="/services"
            className="rounded-full border border-brand-blue px-6 py-2 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
