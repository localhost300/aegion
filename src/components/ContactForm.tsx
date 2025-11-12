'use client';

import { FormEvent, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

type ContactFormShellProps = {
  hasRecaptcha: boolean;
  executeRecaptcha?: (action?: string) => Promise<string>;
};

function ContactFormShell({
  hasRecaptcha,
  executeRecaptcha,
}: ContactFormShellProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      organization: formData.get("organization")?.toString().trim(),
      topic: formData.get("topic")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setErrorMessage("Please complete the required fields.");
      setStatus("error");
      return;
    }

    let recaptchaToken: string | undefined;
    if (hasRecaptcha) {
      if (!executeRecaptcha) {
        setErrorMessage("Unable to load reCAPTCHA. Please reload and try again.");
        setStatus("error");
        return;
      }
      try {
        recaptchaToken = await executeRecaptcha("contact_form");
      } catch {
        setErrorMessage("reCAPTCHA validation failed. Please try again.");
        setStatus("error");
        return;
      }
    }

    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, recaptchaToken }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || "Unable to send message.");
      }

      form.reset();
      setStatus("success");
      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.location.reload();
        }
      }, 1500);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unexpected error.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="space-y-8 rounded-3xl border border-brand-border bg-brand-pearl/50 p-8 shadow-card">
            <SectionHeading
              align="left"
              eyebrow="Let's connect"
              title="Start your journey with Aegion Mountain."
              description="Share your priorities around IRA, 401(k), or governance programs and our team will reply within one business day."
            />
            <p className="text-sm text-brand-slate">
              We replay every note with a tailored agenda - please include timelines,
              mandates, or stakeholders we should prepare for.
            </p>
            <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* API endpoint wired via /api/contact. Ensure SMTP & reCAPTCHA env vars are set before deploying. */}
              <div>
                <label htmlFor="name" className="text-sm font-medium text-brand-blue">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-brand-blue focus:border-brand-blue focus:outline-none"
                  placeholder="Alex Morgan"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-brand-blue">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-brand-blue focus:border-brand-blue focus:outline-none"
                  placeholder="alex@yourcompany.com"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="organization" className="text-sm font-medium text-brand-blue">
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    className="mt-2 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-brand-blue focus:border-brand-blue focus:outline-none"
                    placeholder="Northwind Group"
                  />
                </div>
                <div>
                  <label htmlFor="topic" className="text-sm font-medium text-brand-blue">
                    Focus Area
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="mt-2 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-brand-blue focus:border-brand-blue focus:outline-none"
                  >
                    <option>IRA Programs</option>
                    <option>401(k) Modernization</option>
                    <option>Strategic Insight</option>
                    <option>Risk & Assurance</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-brand-blue">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-brand-blue focus:border-brand-blue focus:outline-none"
                  placeholder="Tell us about your current priorities..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-full bg-brand-blue px-8 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-navy disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>
              <div className="min-h-[1.5rem]" aria-live="polite">
                {status === "success" && (
                  <p className="text-sm font-semibold text-green-600">
                    Thank you. Your message is on its way—we&apos;ll respond shortly.
                  </p>
                )}
                {status === "error" && errorMessage && (
                  <p className="text-sm font-semibold text-red-600">{errorMessage}</p>
                )}
              </div>
              {!hasRecaptcha && (
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-slate">
                  reCAPTCHA not configured. Add NEXT_PUBLIC_RECAPTCHA_SITE_KEY for automated spam
                  protection.
                </p>
              )}
            </form>
          </div>
          <div className="overflow-hidden rounded-3xl border border-brand-border">
            <Image
              src="/contact-phone.jpg"
              alt="Vintage telephone representing concierge support"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactFormWithRecaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  return (
    <ContactFormShell
      hasRecaptcha
      executeRecaptcha={executeRecaptcha ?? undefined}
    />
  );
}

export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (siteKey) {
    return (
      <GoogleReCaptchaProvider
        reCaptchaKey={siteKey}
        scriptProps={{ async: true, defer: true }}
      >
        <ContactFormWithRecaptcha />
      </GoogleReCaptchaProvider>
    );
  }

  return <ContactFormShell hasRecaptcha={false} />;
}
