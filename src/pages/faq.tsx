import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    question: "How is the Auto Trading Bot monitored?",
    answer:
      "Every live strategy is supervised by Aegion Mountain strategists. We review signal health daily, publish weekly recaps, and adjust guardrails when market regimes change.",
  },
  {
    question: "Can I set my own risk parameters?",
    answer:
      "Yes. We calibrate max position size, drawdown limits, exchanges, and exposure bands to your preferences before going live, and you can request changes anytime.",
  },
  {
    question: "What assets can the bot trade?",
    answer:
      "We prioritize liquid pairs across equities, ETFs, and approved digital assets. Illiquid symbols and disallowed venues are filtered out at the rule level.",
  },
  {
    question: "How do I access reports?",
    answer:
      "You will receive execution logs, performance summaries, and exception notes in a reporting cadence that fits your team—weekly by default with dashboards on request.",
  },
  {
    question: "Is there a contract minimum?",
    answer:
      "Engagements are scoped to your objectives. We design lightweight pilots first, then expand only after the bot meets the thresholds you set.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ | Aegion Mountain</title>
        <meta
          name="description"
          content="Get answers about Aegion Mountain's auto trading bot, monitoring, reporting, and engagement model."
        />
      </Head>
      <div className="bg-brand-pearl text-ink">
        <Navbar />
        <main>
          <section className="bg-brand-blue py-20 text-white">
            <div className="mx-auto max-w-5xl px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold">FAQ</p>
              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">How Aegion automation works.</h1>
              <p className="mt-4 text-lg text-white/85">
                Straightforward answers about our Auto Trading Bot, oversight model, and how we keep you
                in control while the system executes.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full bg-white/10 px-4 py-2">Risk-first design</span>
                <span className="rounded-full bg-white/10 px-4 py-2">Human oversight</span>
                <span className="rounded-full bg-white/10 px-4 py-2">Transparent logs</span>
              </div>
            </div>
          </section>

          <section className="bg-white py-24">
            <div className="mx-auto max-w-5xl px-6">
              <SectionHeading
                eyebrow="Questions"
                title="Details that matter before you go live."
                description="If you need something not covered here, our team will respond within one business day."
                align="left"
              />
              <div className="mt-10 space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-3xl border border-brand-border bg-brand-pearl/70 p-6 shadow-card"
                  >
                    <h3 className="text-xl font-semibold text-brand-blue">{faq.question}</h3>
                    <p className="mt-3 text-sm text-brand-slate">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-brand-blue py-16 text-white">
            <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6">
              <h2 className="text-3xl font-semibold md:text-4xl">Still evaluating?</h2>
              <p className="text-lg text-white/85">
                Let&apos;s review your use case, compliance needs, and what a pilot could look like.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-gold hover:text-brand-navy"
                >
                  Connect with us
                </Link>
                <Link
                  href="/auto-trading-bot"
                  className="rounded-full border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  View the bot overview
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
