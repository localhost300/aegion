import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

const links = [
  { label: "About", href: "#hero" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="relative flex h-20 w-72 items-center">
          <Image
            src="/aegion-logo.png"
            alt="Aegion Mountain"
            fill
            className="object-contain"
            priority={false}
          />
        </Link>

        <div className="flex flex-wrap gap-6 text-sm font-semibold text-brand-blue">
          {links.map((link) =>
            link.href.startsWith("#") ? (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="flex gap-4 text-brand-blue">
          <Link
            href="https://www.linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            className="rounded-full border border-brand-border p-2 transition hover:border-brand-blue hover:text-brand-blue"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="https://www.twitter.com"
            aria-label="Twitter"
            target="_blank"
            className="rounded-full border border-brand-border p-2 transition hover:border-brand-blue hover:text-brand-blue"
          >
            <Twitter size={18} />
          </Link>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-brand-slate">
        Copyright {new Date().getFullYear()} Aegion Mountain. All rights reserved.
      </p>
    </footer>
  );
}
