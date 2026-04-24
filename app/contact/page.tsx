import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "聯絡 Sheen Trail Digital 討論產品、合作、投資或技術開發。Email: info@sheentrail.com",
};

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

const expect = [
  { n: "01", t: "你寄信", body: "告訴我們你的需求、場景或想法，不需要寫得完整。" },
  { n: "02", t: "我們回信", body: "1–2 個工作天內回覆，確認方向與下一步。" },
  { n: "03", t: "簡短討論", body: "30 分鐘的對話，確認彼此適合與否。" },
  { n: "04", t: "正式開始", body: "進入正式合作流程，或推薦更合適的夥伴。" },
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
              Let&apos;s start
              <br />
              with{" "}
              <span className="italic text-moss-700">a clear question</span>.
            </h1>
            <p className="mt-10 max-w-xl text-pretty lede">
              如果你在規劃 AI 產品、App 服務，或想討論合作方向，寄信給我們就好。不需要寫得完整——把你面對的情境寫下來，就已經是好的開始。
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-ink-hair bg-paper-soft/70 p-8 sm:p-10">
              <p className="label">Primary contact</p>
              <a
                href="mailto:info@sheentrail.com"
                className="mt-6 inline-flex items-baseline gap-3 font-serif text-[32px] font-[420] italic text-ink underline decoration-ink-hair decoration-1 underline-offset-[8px] transition-colors hover:decoration-ink sm:text-4xl"
              >
                info@sheentrail.com
                <span aria-hidden className="text-xl not-italic">
                  →
                </span>
              </a>
              <p className="mt-6 max-w-md font-sans text-sm leading-[1.75] text-ink-muted">
                我們會在 1–2 個工作天內回覆。請盡量附上你目前的情境、想解決的問題，或可以參考的連結。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="section-tight border-t border-ink-hair">
        <div className="shell">
          <Reveal>
            <p className="label">A · Channels</p>
          </Reveal>
          <div className="mt-10 grid gap-0 border-y border-ink-hair sm:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal
                key={c.label}
                delay={i * 70}
                className={`p-8 ${
                  i < channels.length - 1 ? "sm:border-r sm:border-ink-hair" : ""
                } ${i < channels.length - 1 ? "border-b border-ink-hair sm:border-b-0" : ""}`}
              >
                <p className="num-badge">0{i + 1}</p>
                <h3 className="mt-10 font-serif text-2xl font-[450] text-ink">
                  {c.label}
                </h3>
                <p className="mt-2 font-sans text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">
                  {c.hint}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section border-t border-ink-hair bg-paper-soft/60">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">B · What to expect</p>
              <h2 className="display-xl mt-7 text-balance">
                四個步驟，
                <span className="italic text-moss-600">不會讓你被卡住</span>。
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                我們不用複雜表單或漫長流程——讓對話盡快發生，是最好的篩選器。
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-0 border-y border-ink-hair sm:grid-cols-2 lg:grid-cols-4">
            {expect.map((e, i) => (
              <Reveal
                key={e.n}
                delay={i * 70}
                className={`p-8 ${
                  i < expect.length - 1 ? "lg:border-r lg:border-ink-hair" : ""
                } ${i % 2 === 0 ? "sm:border-r sm:border-ink-hair" : ""} ${
                  i < 2 ? "border-b border-ink-hair sm:border-b lg:border-b-0" : ""
                }`}
              >
                <p className="num-badge">{e.n}</p>
                <h3 className="mt-10 font-serif text-2xl font-[450] text-ink">
                  {e.t}
                </h3>
                <p className="mt-4 body">{e.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section border-t border-ink-hair bg-ink text-paper">
        <div className="shell text-center">
          <Reveal>
            <p className="label !text-paper/60">Ready when you are</p>
            <h2 className="display-xxl mx-auto mt-8 max-w-4xl text-balance text-paper">
              寄一封信，
              <span className="italic text-ember-300">對話就開始了</span>。
            </h2>
            <a
              href="mailto:info@sheentrail.com"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 font-sans text-sm font-medium text-ink transition-colors hover:bg-ember-50"
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
