import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Short-term savings APY", value: "4.00%" },
  { label: "Insurance coverage", value: "Up to $3M" },
  { label: "Account fees", value: "$0" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-brand-pearl via-white to-brand-pearl pb-24 pt-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="inline-flex items-center rounded-full bg-brand-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-blue">
            Aegion Mountain
          </p>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-brand-blue md:text-5xl lg:text-6xl">
              Easily increase your short-term savings returns and earn 4.00% APY.
            </h1>
            <p className="text-lg text-brand-slate">
              Unlock greater returns on idle cash through our partner banks. Accessing and
              allocating capital stays effortless—no hidden conditions, no surprise hold periods,
              just transparent earnings and liquidity.
            </p>
            <ul className="space-y-2 text-sm font-semibold text-brand-blue">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-gold" />
                No account fees ever.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-gold" />
                No minimum or maximum balance to earn 4.00% APY.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-gold" />
                Benefit from up to $3M of partner-bank insurance.
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="https://admin.aegionmountain.com/register"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-blue px-8 py-3 text-white transition hover:-translate-y-0.5 hover:bg-brand-navy"
            >
              Sign Up
            </Link>
            <Link
              href="#approach"
              className="rounded-full border border-brand-blue px-8 py-3 font-semibold text-brand-blue transition hover:-translate-y-0.5 hover:bg-brand-blue hover:text-white"
            >
              View Our Method
            </Link>
          </div>

          <div className="grid gap-6 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-card sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl font-semibold text-brand-blue">
                  {stat.value}
                </p>
                <p className="text-sm text-brand-slate">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden rounded-[36px] shadow-card"
        >
          <Image
            src="/workplace-team-cooperation-businesswoman-laptop-office.jpg"
            alt="Advisor helping client unlock short-term yield"
            width={900}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-3xl bg-white/85 p-5 backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold">
              Current Focus
            </p>
            <p className="mt-2 text-lg font-semibold text-brand-blue">
              Cash deployment windows under 24 hours
            </p>
            <p className="text-sm text-brand-slate">
              Seamlessly direct liquidity into insured accounts and move it back into operations
              without forfeiting the 4.00% yield.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
