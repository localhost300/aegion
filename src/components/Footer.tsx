import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

const links = [
  { label: "ABOUT US", href: "/#about" },
  { label: "SERVICES", href: "/services" },
  { label: "Auto Trading Bot", href: "/auto-trading-bot" },
  { label: "FAQ", href: "/faq" },
  { label: "BLOG", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="relative flex h-24 w-80 items-center md:h-28 md:w-[28rem]"
        >
          <Image
            src="/aegion-logo.png"
            alt="Aegion Mountain"
            fill
            className="object-contain"
            priority={false}
          />
        </Link>

        <div className="flex flex-wrap gap-6 text-sm font-semibold text-white">
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

        <div className="flex gap-4 text-white">
          <Link
            href="https://www.linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            className="rounded-full border border-white/30 p-2 transition hover:border-white hover:text-brand-gold"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="https://www.twitter.com"
            aria-label="Twitter"
            target="_blank"
            className="rounded-full border border-white/30 p-2 transition hover:border-white hover:text-brand-gold"
          >
            <Twitter size={18} />
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl space-y-4 px-6 text-xs text-white/70">
        <p>
          Review Aegion Mountain Cap a subsidiary of Mountain Cap Partners with FINRA&apos;s BrokerCheck{" "}
          <Link
            href="https://adviserinfo.sec.gov/firm/summary/281465"
            target="_blank"
            className="text-white underline underline-offset-2 hover:text-brand-gold"
          >
            here
          </Link>
          .
        </p>
        <p>
          By using this website, you understand the information being presented is provided for informational purposes
          only and agree to our Terms of Use and Privacy Policy. Aegion Mountain Cap Advisers relies on information from
          various sources believed to be reliable, including clients and third parties, but cannot guarantee the
          accuracy and completeness of that information. Nothing in this communication should be construed as an offer,
          recommendation, or solicitation to buy or sell any security. Additionally, Aegion Mountain Cap Advisers or its
          affiliates do not provide tax advice and investors are encouraged to consult with their personal tax advisors.
        </p>
        <p>
          Insurance coverage is limited to $250,000 per qualified customer account per banking institution. Aegion
          Mountain Cap uses more than one program bank to ensure insurance coverage of up to $3 million for your deposits.
        </p>
        <p>
          Cash Account is offered by Mountain Cap LLC ("Mountain Cap"), a Member of FINRA / SIPC. Neither Mountain Cap
          nor any of its affiliates are a bank, and Cash Account is not a checking or savings account. We convey funds to
          partner banks who accept and maintain deposits and provide the interest rate. Investment management and
          advisory services, which are not FDIC insured, are provided by Aegion Mountain Cap Advisers LLC ("Aegion
          Mountain Cap Advisers"), an SEC-registered investment adviser, and financial planning tools are provided by
          Aegion Mountain Cap Software LLC ("Cresthanx Software"). The Stock Investing Account is a limited-discretion
          investment product offered by Aegion Mountain Cap Advisers LLC.
        </p>
      </div>
      <p className="mt-6 text-center text-xs text-white/70">
        Copyright {new Date().getFullYear()} Aegion Mountain. All rights reserved.
      </p>
    </footer>
  );
}
