import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { insights } from "@/data/insights";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

export default function InsightsPage() {
  return (
    <>
      <Head>
        <title>Aegion Mountain | Insights</title>
        <meta
          name="description"
          content="Browse the latest thought leadership from Aegion Mountain across IRA readiness, 401(k) modernization, and fiduciary governance."
        />
      </Head>
      <div className="bg-brand-pearl text-ink">
        <Navbar />
        <main>
          <section className="relative overflow-hidden bg-brand-blue py-24 text-white">
            <Image
              src="/strategy-discussion.jpg"
              alt="Aegion Mountain insights hero"
              fill
              priority
              className="object-cover opacity-40"
            />
            <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold">
                Insights
              </p>
              <h1 className="text-4xl font-semibold md:text-5xl">
                Field notes and playbooks for confident retirement leadership.
              </h1>
              <p className="text-lg text-white/85">
                Brief, data-backed guidance for plan sponsors, committees, and executives navigating
                IRA, 401(k), and strategic governance decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-gold hover:text-brand-navy"
                >
                  Talk with our strategists
                </Link>
                <a
                  href="#articles"
                  className="rounded-full border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Browse articles
                </a>
              </div>
            </div>
          </section>

          <section id="articles" className="bg-white py-24">
            <div className="mx-auto max-w-6xl px-6">
              <SectionHeading
                eyebrow="Latest thinking"
                title="Ideas shaping the future of retirement programs."
                description="Share these briefings with your committees, CFO office, or people leaders to spark action."
                align="left"
              />
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                {insights.map((article) => (
                  <article
                    key={article.slug}
                    className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border bg-brand-pearl/70 shadow-card"
                  >
                    <div className="relative h-56 w-full">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold">
                        {article.tag}
                      </p>
                      <h2 className="text-2xl font-semibold text-brand-blue">{article.title}</h2>
                      <p className="text-sm text-brand-slate">{article.excerpt}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue/60">
                        {article.date} • {article.readingTime}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-4">
                        <span className="text-sm font-semibold text-brand-blue/70">
                          Full article coming soon
                        </span>
                        <Link
                          href="/#contact"
                          className="text-sm font-semibold text-brand-blue underline-offset-4 hover:text-brand-gold hover:underline"
                        >
                          Request briefing
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
