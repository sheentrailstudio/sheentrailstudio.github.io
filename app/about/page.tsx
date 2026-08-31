import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sheen Trail Digital 是一間 AI 產品工作室，專注於 App 設計、AI 輔助體驗與服務開發。",
};

const beliefs = [
  {
    k: "Clarity",
    zh: "明朗",
    body:
      "看懂了，決定就簡單。",
  },
  {
    k: "Care",
    zh: "關懷",
    body:
      "為真實的人、真實的場景而做。",
  },
  {
    k: "Craft",
    zh: "職人",
    body:
      "細節累積成手感。",
  },
  {
    k: "Purpose",
    zh: "目的",
    body:
      "讓技術對得上目的。",
  },
];

const disciplines = [
  {
    t: "Product Strategy",
    zh: "產品策略",
    body: "釐清產品面向，讓決策可被持續驗證。",
  },
  {
    t: "UX & Interface Design",
    zh: "體驗與介面",
    body: "把流程與資訊結構整理成可讀、可維護、可延續的介面。",
  },
  {
    t: "AI Integration",
    zh: "AI 整合",
    body: "把 LLM 與代理式流程放進真實產品，變成可信任的支援層。",
  },
  {
    t: "App & Service Build",
    zh: "產品開發",
    body: "以可維護、可擴充的方式打造 iOS / Android / Web 產品。",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative pt-28 sm:pt-36">
        <div className="shell pb-16 sm:pb-24">
          <Reveal>
            <p className="label">About · Sheen Trail Digital</p>
            <h1 className="display-xxl chrome-text mt-8 max-w-4xl text-balance">
              行晨工作室
            </h1>
            <p className="mt-10 max-w-2xl text-pretty lede">
              把 AI 變成能被信任、被延續的產品。
            </p>
          </Reveal>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="section border-t border-ink-hair">
        <div className="shell grid gap-14 lg:grid-cols-[0.4fr_1fr]">
          <Reveal>
            <p className="label">A · Story</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-8 font-display text-[21px] font-medium leading-[1.7] text-ink sm:text-2xl">
              <p>
                「Sheen Trail 行晨」取自晨光與道路。做產品，是把需求變成能長久使用的東西。
              </p>
              <p>
                AI 讓流程變快。使用情境、資訊結構與節奏，仍是慢工。
              </p>
              <p>
                目前做靈修陪伴與醫療工具，都始於身邊真實的需求。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="section border-t border-ink-hair bg-paper-soft/60">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">B · Beliefs</p>
              <h2 className="display-xl mt-7 text-balance">
                四個信念
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                我們怎麼判斷
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-0 border-y border-ink-hair sm:grid-cols-2 lg:grid-cols-4">
            {beliefs.map((b, i) => (
              <Reveal
                key={b.k}
                delay={i * 70}
                className={`p-8 ${
                  i < beliefs.length - 1 ? "lg:border-r lg:border-ink-hair" : ""
                } ${i % 2 === 0 ? "sm:border-r sm:border-ink-hair lg:border-r" : ""} ${
                  i < 2 ? "border-b border-ink-hair sm:border-b lg:border-b-0" : ""
                }`}
              >
                <p className="num-badge">0{i + 1}</p>
                <h3 className="mt-10 font-display text-[28px] font-medium leading-tight text-ink">
                  {b.k}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                  {b.zh}
                </p>
                <p className="mt-6 body">{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="section border-t border-ink-hair">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">C · Disciplines</p>
              <h2 className="display-xl mt-7 text-balance">
                四組專業
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                從策略到上架，都在同一組人手上。
              </p>
            </Reveal>
          </div>

          <ul className="mt-14 hairline-list">
            {disciplines.map((d, i) => (
              <Reveal as="li" key={d.t} delay={i * 60}>
                <div className="grid items-baseline gap-4 sm:grid-cols-[60px_1fr_1.2fr] sm:gap-10">
                  <span className="num-badge">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink">
                      {d.t}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                      {d.zh}
                    </p>
                  </div>
                  <p className="max-w-2xl body">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
