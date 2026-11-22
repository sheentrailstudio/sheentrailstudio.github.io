import { ProcessSection } from "@/components/ProcessSection";
import { Reveal } from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "聯絡 Sheen Trail Digital 討論產品、合作、投資或技術開發。Email: info@sheentrail.com",
  path: "/contact/",
});

const channels = [
  {
    label: "General",
    hint: "產品合作、諮詢、媒體",
  },
  {
    label: "Partnership",
    hint: "長期合作與投資洽談",
  },
  {
    label: "Support",
    hint: "產品回饋與技術支援",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative pt-28 sm:pt-36">
        <div className="shell grid gap-16 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-24">
          <Reveal>
            <p className="label">Contact</p>
            <h1 className="display-xxl mt-8 text-balance">
              先問一個好問題
            </h1>
            <p className="mt-10 max-w-xl text-pretty lede">
              把情境寫下來寄給我們，不必完整。
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-line bg-surface-alt p-8 sm:p-10">
              <p className="label">Primary contact</p>
              <a
                href="mailto:info@sheentrail.com"
                className="mt-6 inline-flex items-baseline gap-3 font-display text-2xl font-medium text-ink underline decoration-gold decoration-[1.5px] underline-offset-[8px] transition-colors hover:decoration-ink sm:text-4xl"
              >
                info@sheentrail.com
                <span aria-hidden className="text-xl not-italic">
                  →
                </span>
              </a>
              <p className="mt-6 max-w-md font-sans text-sm leading-[1.75] text-ink-muted">
                1–2 個工作天內回覆。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="section-tight border-t border-line">
        <div className="shell">
          <Reveal>
            <p className="label">A · Channels</p>
          </Reveal>
          <div className="mt-10 grid gap-0 border-y border-line sm:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal
                key={c.label}
                delay={i * 70}
                className={`p-8 ${
                  i < channels.length - 1 ? "sm:border-r sm:border-line" : ""
                } ${i < channels.length - 1 ? "border-b border-line sm:border-b-0" : ""}`}
              >
                <p className="num-badge">0{i + 1}</p>
                <h3 className="mt-10 font-display text-2xl font-medium text-ink">
                  {c.label}
                </h3>
                <p className="mt-2 font-sans meta">
                  {c.hint}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* FINAL CTA */}
      <section className="section border-t border-line bg-surface-alt">
        <div className="shell text-center">
          <Reveal>
            <p className="label">Ready when you are</p>
            <h2 className="display-xxl mx-auto mt-8 max-w-4xl text-balance text-ink">
              寄一封信
            </h2>
            <a
              href="mailto:info@sheentrail.com"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-sans text-sm font-medium text-surface transition-colors hover:bg-ink/85"
            >
              info@sheentrail.com
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
