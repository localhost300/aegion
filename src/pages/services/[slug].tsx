import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services, getService, type Service } from "@/data/services";

type ServicePageProps = {
  service: Service;
};

export default function ServiceDetail({ service }: ServicePageProps) {
  return (
    <>
      <Head>
        <title>{service.title} | Aegion Mountain</title>
        <meta name="description" content={service.summary} />
      </Head>
      <article className="bg-brand-pearl text-ink">
        <Navbar />
        <main>
        <section className="relative overflow-hidden bg-brand-blue/95 py-24 text-white">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold">
              {service.category}
            </p>
            <h1 className="text-4xl font-semibold md:text-5xl">{service.title}</h1>
            <p className="text-lg text-white/80">{service.summary}</p>
            <div className="flex flex-wrap gap-6 text-sm font-semibold text-brand-gold">
              {service.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact-service"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-gold hover:text-brand-navy"
              >
                {service.ctaLabel}
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Back to services
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Service pillars"
              title="What we deliver"
              description="Frameworks, rituals, and outcomes aligned to your governance expectations."
              align="left"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {service.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-brand-border bg-brand-pearl/70 p-6 shadow-card"
                >
                  <h3 className="text-xl font-semibold text-brand-blue">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-brand-slate">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-blue py-24 text-white">
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeading
              eyebrow="Highlights"
              title="How this service shows up for your teams."
              description="Sample deliverables, cadences, and advantages."
              align="left"
              theme="dark"
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {service.highlights.map((item) => (
                <div key={item} className="rounded-3xl border border-white/20 bg-white/10 p-6">
                  <p className="text-base text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact-service" className="bg-white py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-brand-border bg-brand-pearl/70 p-8 shadow-card">
            <SectionHeading
              eyebrow="Partner with us"
              title={`Ready to discuss ${service.title.toLowerCase()}?`}
              description="Share a few details and we will schedule a working session."
              align="left"
            />
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center rounded-full bg-brand-blue px-8 py-3 text-sm font-semibold text-white hover:bg-brand-navy"
            >
              Contact Aegion Mountain
            </Link>
          </div>
        </section>
        </main>
        <Footer />
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: services.map((service) => ({ params: { slug: service.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ServicePageProps> = ({ params }) => {
  const slug = params?.slug as string;
  const service = getService(slug);

  if (!service) {
    return { notFound: true };
  }

  return {
    props: { service },
  };
};
