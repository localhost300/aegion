"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "ABOUT US", href: "/#about" },
  { label: "SERVICES", href: "/services" },
  { label: "Auto Trading Bot", href: "/auto-trading-bot" },
  { label: "FAQ", href: "/faq" },
  { label: "BLOG", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 py-0.5 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-2 md:px-6">
        <Link
          href="/"
          className="relative flex h-16 w-56 items-center lg:h-20 lg:w-72"
        >
          <Image
            src="/aegion-logo.png"
            alt="Aegion Mountain"
            fill
            className="origin-left object-contain"
            priority
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-semibold text-brand-blue lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex flex-1 justify-end">
          <Link
            href="https://admin.aegionmountain.com/register"
            target="_blank"
            className="rounded-full bg-brand-blue px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-navy"
            rel="noreferrer"
          >
            Sign Up / Log In
          </Link>
        </div>

        <button
          aria-label="Toggle navigation"
          className="rounded-full border border-brand-border bg-white p-2 text-brand-blue lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-brand-border bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4 text-base font-semibold text-brand-blue">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-1"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://admin.aegionmountain.com/register"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-gold px-6 py-2.5 text-center text-base font-semibold text-brand-navy"
              onClick={() => setIsOpen(false)}
            >
              Sign Up / Log In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
