import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const registrationUrl = "https://admin.aegionmountain.com/register";

const steps = [
  {
    badge: "Step One",
    title: "Sign up | Enter Details",
    description:
      "The first requirement for this programme is to sign up, by entering all recommended information correctly.",
    cta: {
      label: "Take me there",
      href: registrationUrl,
    },
  },
  {
    badge: "Step Two",
    title: "Fund Your Portfolio | Any Amount",
    description:
      "Once logged in, you can commence by funding your account using any of our secured deposit options that suit you.",
  },
  {
    badge: "Step Three",
    title: "Invest | Choose a Plan",
    description:
      "We have lots of plans with various starting amounts. Based on your deposit, choose the plan that accommodates you and enroll immediately.",
  },
  {
    badge: "Step Four",
    title: "Withdraw | Or Rollover",
    description:
      "You can choose to withdraw at the end of the investment tenure, or roll over your investment to accumulate more.",
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
          eyebrow="How to get started"
          title="Follow four simple steps to begin."
          description="From registration to rollover, the process is clear and fast. Move through each milestone and you will be compounding in no time."
          theme="dark"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.badge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-white/20 bg-white/10 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
                {step.badge}
              </p>
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-base text-white/80">{step.description}</p>
              </div>
              {step.cta && (
                <Link
                  href={step.cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold underline underline-offset-4"
                >
                  {step.cta.label}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href={registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-10 py-3 text-sm font-semibold uppercase tracking-wide text-brand-blue transition hover:bg-brand-gold hover:text-brand-navy"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
