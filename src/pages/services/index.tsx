import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Aegion Mountain | Services</title>
        <meta
          name="description"
          content="Explore IRA stewardship, 401(k) modernization, strategic insight, and risk mitigation services from Aegion Mountain."
        />
      </Head>
      <div className="bg-brand-pearl text-ink">
        <Navbar />
        <main>
        <section className="relative overflow-hidden bg-brand-blue/95 py-24 text-white">
          <Image
            src="/city-structure.jpg"
            alt="City skyline"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold">
              Aegion Mountain Services
            </p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Retirement strategy programs engineered for modern organizations.
            </h1>
            <p className="text-lg text-white/80">
              Every mandate pairs fiduciary expertise with empathetic participant experiences.
              Choose the service that matches your priorities or connect with us for a tailored blend.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#service-grid"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-gold hover:text-brand-navy"
              >
                Browse all services
              </a>
              <Link
                href="/#contact"
                className="rounded-full border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </section>

        <section id="service-grid" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Our catalog"
              title="Services built to move plans forward."
              description="Select any service to explore scope, sample deliverables, and how we partner with your teams."
              align="left"
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-brand-pearl/60 shadow-card"
                >
                  <div className="relative h-60 w-full">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold">
                      {service.category}
                    </p>
                    <h2 className="text-2xl font-semibold text-brand-blue">
                      {service.title}
                    </h2>
                    <p className="text-base text-brand-slate">{service.summary}</p>
                    <ul className="list-disc pl-5 text-sm text-brand-slate">
                      {service.highlights.slice(0, 3).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4">
                      <div className="flex gap-6 text-sm font-semibold text-brand-blue/70">
                        {service.stats.slice(0, 2).map((stat) => (
                          <div key={stat.label}>
                            <p className="text-lg text-brand-blue">{stat.value}</p>
                            <p className="text-xs uppercase tracking-wide">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/services/${service.slug}`}
                        className="rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white hover:bg-brand-navy"
                      >
                        {service.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </div>
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
