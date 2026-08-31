import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Studio",
    links: [
      { href: "/about", label: "About" },
      { href: "/#services", label: "Services" },
      { href: "/#process", label: "Process" },
      { href: "/announcements", label: "Announcements" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { href: "/products/dosemate", label: "Dose Mate" },
      { href: "/products/amenjournal", label: "Amen Journal" },
      { href: "/products", label: "All Products" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-chrome-hair bg-void">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt=""
                width={34}
                height={34}
                className="rounded-[6px]"
              />
              <span className="flex items-baseline gap-1.5">
                <span className="font-display text-lg font-semibold text-chrome">
                  Sheen Trail
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-chrome-muted">
                  Digital
                </span>
              </span>
            </Link>
            <p className="metal-text mt-6 max-w-md font-display text-2xl font-medium leading-[1.3] sm:text-[28px]">
              隨光同行，晨星相伴。
            </p>
            <p className="mt-5 max-w-md body">
              Building meaningful digital products with clarity, care, and purpose.
            </p>
            <a
              href="mailto:info@sheentrail.com"
              className="mt-8 inline-flex items-center gap-3 font-mono text-base tracking-[0.06em] text-chrome underline decoration-chrome-hair decoration-1 underline-offset-[6px] transition-colors hover:text-aurora-500 hover:decoration-aurora-500"
            >
              info@sheentrail.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="label">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="font-sans text-sm text-chrome-soft transition-colors hover:text-chrome"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-chrome-hair pt-6 font-sans text-xs text-chrome-muted sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Sheen Trail Digital — All rights reserved.</span>
          <span className="font-mono tracking-[0.18em] uppercase">Clarity ✦ Care ✦ Purpose</span>
        </div>
      </div>
    </footer>
  );
}
