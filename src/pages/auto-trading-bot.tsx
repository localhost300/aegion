import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Gauge, LineChart, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const capabilities = [
  {
    title: "Signal engine",
    description:
      "Multi-factor models that blend momentum, volatility regimes, and macro cues to stage trades with discipline.",
    icon: LineChart,
  },
  {
    title: "Automated execution",
    description:
      "Pre-checked orders, staged entries, and bracketed exits keep emotion out of every click and protect the downside.",
    icon: Gauge,
  },
  {
    title: "Human-in-the-loop",
    description:
      "Aegion strategists supervise the bot, tune guardrails, and publish weekly notes so you always know what is running.",
    icon: ShieldCheck,
  },
];

const safeguards = [
  "Capital limits, max drawdown controls, and pause thresholds tuned to your risk band.",
  "Audit-ready logs for every signal, fill, and exception routed to your inbox or data room.",
  "Exchange and asset filters to avoid illiquid pairs and protect compliance coverage.",
  "Scenario testing across bull, bear, and sideways regimes before any strategy goes live.",
];

const launchSteps = [
  {
    title: "Diagnostic",
    copy: "We map your objectives, timelines, and preferred venues to align automation with your roadmap.",
  },
  {
    title: "Model calibration",
    copy: "Paper trade to validate hit rates, then lock position sizing, stops, and rebalance cadence.",
  },
  {
    title: "Go live with guardrails",
    copy: "Deploy with 24/7 monitoring, weekly reporting, and a dedicated Aegion channel for tweaks.",
  },
];

export default function AutoTradingBotPage() {
  return (
    <>
      <Head>
        <title>Auto Trading Bot | Aegion Mountain</title>
        <meta
          name="description"
          content="Deploy Aegion Mountain's auto trading bot for disciplined, risk-aware execution with human oversight and clear reporting."
        />
      </Head>
      <div className="bg-brand-pearl text-ink">
        <Navbar />
        <main>
          <section className="relative overflow-hidden bg-brand-blue py-24 text-white">
            <Image
              src="/hero.jpg"
              alt="Auto trading bot dashboard"
              fill
              priority
              className="object-cover opacity-40"
            />
            <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold">
                Automation
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Auto Trading Bot built for disciplined entries, exits, and oversight.
              </h1>
              <p className="text-lg text-white/85">
                Combine Aegion Mountain strategy with machine-speed execution. Every move is
                pre-checked, risk-scored, and reported so you can focus on vision while the bot
                handles the cadence.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-semibold">
                <span className="rounded-full bg-white/15 px-5 py-2">Live supervision</span>
                <span className="rounded-full bg-white/15 px-5 py-2">Compliance-ready logs</span>
                <span className="rounded-full bg-white/15 px-5 py-2">Drawdown controls</span>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="#capabilities"
                  className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-gold hover:text-brand-navy"
                >
                  Explore the bot
                </Link>
                <Link
                  href="/#contact"
                  className="rounded-full border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </section>

          <section id="capabilities" className="bg-white py-24">
            <div className="mx-auto max-w-6xl px-6">
              <SectionHeading
                eyebrow="What powers it"
                title="A bot that keeps human intent and machine consistency aligned."
                description="Engineered for founders, operators, and family offices who want automation without losing control."
                align="left"
              />
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {capabilities.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-4 rounded-3xl border border-brand-border bg-brand-pearl/70 p-6 shadow-card"
                  >
                    <item.icon className="h-10 w-10 text-brand-blue" />
                    <h3 className="text-xl font-semibold text-brand-blue">{item.title}</h3>
                    <p className="text-sm text-brand-slate">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-brand-blue py-24 text-white">
            <div className="mx-auto max-w-6xl px-6">
              <SectionHeading
                eyebrow="Guardrails"
                title="Risk-first automation with transparent controls."
                description="Every automation ships with the same governance rigor we apply to plan strategies."
                align="left"
                theme="dark"
              />
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {safeguards.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-3xl border border-white/15 bg-white/10 p-6"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 text-brand-gold" />
                    <p className="text-base text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white py-24">
            <div className="mx-auto max-w-5xl px-6">
              <SectionHeading
                eyebrow="How we launch"
                title="From discovery to live trading in three guided steps."
                description="Clear timelines and checkpoints keep everyone aligned."
                align="left"
              />
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {launchSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-3xl border border-brand-border bg-brand-pearl/70 p-6 shadow-card"
                  >
                    <div className="flex items-center justify-between text-brand-blue">
                      <p className="text-xs font-semibold uppercase tracking-wide">Step {index + 1}</p>
                      <ShieldCheck className="h-5 w-5 text-brand-gold" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-brand-blue">{step.title}</h3>
                    <p className="mt-3 text-sm text-brand-slate">{step.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-brand-blue py-20 text-white">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl border border-white/15 bg-white/5 px-8 py-10">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Ready to see the Auto Trading Bot tuned for your playbook?
              </h2>
              <p className="text-lg text-white/85">
                We will share live dashboards, recent performance notes, and the guardrails we put in
                place for Aegion clients across North America and EMEA.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-gold hover:text-brand-navy"
                >
                  Talk with our team
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Explore other services
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
