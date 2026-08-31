import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "找不到這個頁面",
  description: "這個網址不存在，或者它指向的內容已經搬走了。",
  robots: { index: false, follow: true },
};

const destinations = [
  { href: "/products", en: "Products", zh: "看目前在做的產品" },
  { href: "/about", en: "About", zh: "認識這間工作室" },
  { href: "/contact", en: "Contact", zh: "直接跟我們聊聊" },
];

export default function NotFound() {
  return (
    <main>
      <section className="relative overflow-hidden pt-28 sm:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 45% at 78% 8%, rgba(92,238,192,0.12), transparent 62%), radial-gradient(45% 38% at 8% 88%, rgba(79,208,232,0.1), transparent 62%)",
          }}
        />
        <div className="shell pb-24 sm:pb-32">
          <p className="label">Error 404</p>
          <h1 className="display-xxl metal-text mt-8 max-w-3xl text-balance">
            找不到這一頁
          </h1>
          <p className="mt-10 max-w-2xl text-pretty lede">
            這個網址不存在，或內容已經搬走了。
          </p>

          <ul className="hairline-list mt-14 max-w-2xl border-t border-chrome-hair pt-10">
            {destinations.map((d) => (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className="group flex items-baseline justify-between gap-6"
                >
                  <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                    <span className="font-display text-2xl font-medium text-chrome">
                      {d.en}
                    </span>
                    <span className="body">{d.zh}</span>
                  </span>
                  <span className="shrink-0 font-mono text-xs tracking-[0.12em] text-chrome-muted transition-colors group-hover:text-chrome">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              回到首頁
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
