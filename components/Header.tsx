"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled
          ? "border-b border-ink-hair bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Sheen Trail Digital"
        >
          <Image
            src="/logo.png"
            alt=""
            width={30}
            height={30}
            className="rounded-[6px]"
            priority
          />
          <span className="flex items-baseline gap-1.5">
            <span className="font-serif text-[17px] font-[450] leading-none text-ink">
              Sheen Trail
            </span>
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-ink-muted">
              Digital
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 sm:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 font-sans text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary ml-2 !py-2 !px-4">
            Contact
            <span className="arrow">→</span>
          </Link>
        </nav>

        <Link
          href="/contact"
          className="btn-primary !py-2 !px-4 sm:hidden"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
