import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sheen Trail Digital 是一間 AI 數位產品工作室，專注於 App 產品設計、AI 輔助體驗與數位服務開發。",
};

const beliefs = [
  {
    k: "Clarity",
    zh: "明朗",
    body:
      "我們相信大部分產品的問題，是從「沒被理解」開始。先把複雜的事拆解看懂，才是每個決策的第一步。",
  },
  {
    k: "Care",
    zh: "關懷",
    body:
      "產品會被真實的人在真實的場景中使用。尊重使用者的注意力、情緒與時間，是設計的前提。",
  },
  {
    k: "Craft",
    zh: "職人",
    body:
      "細節與一致性是產品被長期信任的來源。每一個微小的選擇都算數。",
  },
  {
    k: "Purpose",
    zh: "目的",
    body:
      "技術有很多種可能，我們選擇與價值目標一致的那一條路。",
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
            <h1 className="display-xxl mt-8 max-w-4xl text-balance">
              把{" "}
              <span className="italic text-moss-700">清晨的光</span>
              <br />
              放進數位產品的工作室
            </h1>
            <p className="mt-10 max-w-2xl text-pretty lede">
              Sheen Trail Digital 是一間 AI 數位產品工作室。我們相信AI是更貼近生活的工具，把它變成能被信任、被延續的產品與服務。
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
            <div className="space-y-8 font-serif text-[21px] font-[380] leading-[1.7] text-ink sm:text-2xl">
              <p>
                「Sheen Trail」保留了晨光、道路的意象。對我們來說，產品是把需求設計成可靠、貼近使用者、能被長期使用的服務。
              </p>
              <p>
                好的產品要貼近生活，更要能被理解、被信任、被長期使用。AI 能加速流程與決策，但真正重要的是設計出合適的使用情境、資訊結構與產品節奏。
              </p>
              <p>
                目前的產品聚焦靈修陪伴與醫療工具，背後方法一致——從真實需求出發，用扎實的設計與穩定的技術把服務落地。
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
                四個信念，
                <span className="italic text-moss-600">一個判斷標準</span>。
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                決策的標準，是我們對產品的承諾。
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
                <h3 className="mt-10 font-serif text-[28px] font-[450] leading-tight text-ink">
                  {b.k}
                </h3>
                <p className="mt-1 font-sans text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">
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
                落實
                <span className="italic text-ember-500">四組專業</span>。
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                從策略到設計、從 AI 整合到產品開發，我們把專業落實在每個細節裡。
              </p>
            </Reveal>
          </div>

          <ul className="mt-14 hairline-list">
            {disciplines.map((d, i) => (
              <Reveal as="li" key={d.t} delay={i * 60}>
                <div className="grid items-baseline gap-4 sm:grid-cols-[60px_1fr_1.2fr] sm:gap-10">
                  <span className="num-badge">0{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-[450] text-ink">
                      {d.t}
                    </h3>
                    <p className="mt-1 font-sans text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">
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

      {/* FOCUS */}
      <section className="section border-t border-ink-hair bg-ink text-paper">
        <div className="shell grid gap-14 lg:grid-cols-[0.4fr_1fr]">
          <Reveal>
            <p className="label !text-paper/60">D · Focus</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="display-xl text-paper">
              我們追求讓每個產品解決當前痛點，發揮價值被長期使用。
            </p>
            <p className="mt-10 max-w-2xl font-sans text-[15px] leading-[1.75] text-paper/75">
              這意味著我們會拒絕不合適的合作，會在決策上花比寫 code 更多的時間，也會在細節上花比功能本身更多的心力。不是因為完美主義，而是因為這些才是產品能被信任的來源。
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        label="Next step"
        title="Have a product conversation with us."
        description="如果你正在規劃產品，歡迎與我們討論需求。"
        href="/contact"
        buttonLabel="Contact us"
      />
    </main>
  );
}
