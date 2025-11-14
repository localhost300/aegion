"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Why Us", href: "/#value" },
  { label: "Approach", href: "/#approach" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Insights", href: "/insights" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 py-0.5 shadow-sm backdrop-blur-md">
      <div className="flex w-full items-center justify-between px-3 py-1 md:px-6 md:py-1.5">
        <Link
          href="/"
          className="relative flex h-16 w-72 items-center lg:h-20 lg:w-[26rem]"
        >
          <Image
            src="/aegion-logo.png"
            alt="Aegion Mountain"
            fill
            className="object-contain scale-125 origin-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-semibold text-brand-slate lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="https://admin.aegionmountain.com/register"
            target="_blank"
            className="rounded-full bg-brand-blue px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-brand-navy"
            rel="noreferrer"
          >
            Sign Up
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
              className="rounded-full bg-brand-gold px-4 py-2 text-center font-semibold text-brand-navy"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
