import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { insights } from "@/data/insights";

export default function Insights() {
  return (
    <section id="insights" className="bg-brand-blue py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Insights"
          title="Always-on perspective for your leadership team."
          description="Our research arm publishes concise, actionable briefings that help directors and operators stay ahead."
          theme="dark"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {insights.slice(0, 3).map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="flex flex-col rounded-3xl border border-white/20 bg-white/10 p-4 text-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold">
                  {article.tag}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-white/80">
                  {article.excerpt}
                </p>
                <Link
                  href="#"
                  className="mt-4 text-sm font-semibold text-brand-gold underline-offset-4 hover:text-white hover:underline"
                >
                  Read the briefing
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
