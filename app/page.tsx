import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { QtGardenMockup } from "@/components/mockups/QtGardenMockup";
import { DoseMateMockup } from "@/components/mockups/DoseMateMockup";

export const metadata: Metadata = {
  title: "Sheen Trail Digital — AI 數位產品工作室",
  description:
    "Sheen Trail Digital 專注於 AI 數位產品、App 產品設計與數位服務開發，協助團隊把想法落地成可信任、可延續的產品。",
};

const services = [
  {
    idx: "01",
    title: "Product Strategy",
    zh: "產品策略",
    body:
      "從情境、商業目標與 AI 可行性出發，讓產品在早期就確立明確方向。",
    tags: ["Scoping", "Research", "Roadmap"],
  },
  {
    idx: "02",
    title: "UX & Interface Design",
    zh: "體驗與介面設計",
    body:
      "重視一致性、可讀性與長期維護的體驗品質。",
    tags: ["IA", "UI System", "Prototyping"],
  },
  {
    idx: "03",
    title: "AI Integration",
    zh: "AI 輔助整合",
    body:
      "將 LLM、代理式工作流與結構化輸出整合進真實產品流程，讓 AI 成為可信任的輔助。",
    tags: ["LLM", "Agents", "Evaluation"],
  },
  {
    idx: "04",
    title: "App & Service Build",
    zh: "App 與服務開發",
    body:
      "以可維護、可擴充的方式開發 App 與數位服務，從 MVP 到長期迭代，覆蓋 iOS、Android 與 Web。",
    tags: ["iOS", "Android", "Web"],
  },
];

const values = [
  { k: "Clarity", v: "先把複雜的事情說清楚，再決定怎麼做。" },
  { k: "Care", v: "尊重使用者場景。" },
  { k: "Craft", v: "細節與一致性是產品長期可信任的來源。" },
  { k: "Purpose", v: "每個產品決策都回到價值目標與真實需求。" },
];

const process = [
  {
    n: "01",
    t: "Listen",
    zh: "聆聽",
    body: "先理解問題、場景，再談解法。",
  },
  {
    n: "02",
    t: "Frame",
    zh: "收斂",
    body: "把需求整理成清楚的產品方向與優先順序。",
  },
  {
    n: "03",
    t: "Build",
    zh: "打造",
    body: "以可維護的方式打造介面、邏輯與 AI 流程。",
  },
  {
    n: "04",
    t: "Iterate",
    zh: "迭代",
    body: "上線後持續觀察、調整、優化，延續產品生命週期。",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 sm:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 10%, rgba(179,90,38,0.08), transparent 60%), radial-gradient(50% 40% at 10% 90%, rgba(38,68,51,0.1), transparent 60%)",
          }}
        />
        <div className="shell grid gap-16 pb-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:pb-32">
          <div className="reveal">
            <p className="label">Sheen Trail Digital · Est. 2025</p>
            <h1 className="display-xxl mt-8 text-balance">
              We design{" "}
              <span className="font-[380] italic text-moss-700">
                meaningful
              </span>
              <br />
              AI products, with{" "}
              <span className="font-[380] italic text-ember-500">clarity</span>.
            </h1>
            <p className="mt-10 max-w-2xl text-pretty lede">
              Sheen Trail Digital 是一間 AI 數位產品工作室。我們把策略、設計、AI 與工程整合在同一個節奏裡，協助團隊把想法落地成可被信任、可被延續的產品。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="btn-primary">
                View Products
                <span className="arrow">→</span>
              </Link>
              <Link href="/contact" className="btn-ghost">
                Start a project
              </Link>
            </div>
          </div>

          <div className="reveal reveal-delay-2 border-t border-ink-hair pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="label">Brand statement</p>
            <p className="display-lg mt-5 font-[400] italic text-ink">
              隨光同行，<br />
              晨星相伴。
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-y-5 border-t border-ink-hair pt-6">
              <div>
                <dt className="label">Focus</dt>
                <dd className="mt-2 font-serif text-lg text-ink">AI · App · Service</dd>
              </div>
              <div>
                <dt className="label">Based in</dt>
                <dd className="mt-2 font-serif text-lg text-ink">Taipei</dd>
              </div>
              <div>
                <dt className="label">Since</dt>
                <dd className="mt-2 font-serif text-lg text-ink">2025</dd>
              </div>
              <div>
                <dt className="label">Works</dt>
                <dd className="mt-2 font-serif text-lg text-ink">2 Products Live</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="shell">
          <div className="flex items-center gap-6 border-y border-ink-hair py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-ink-muted">
            <span>Strategy</span>
            <span className="h-1 w-1 rounded-full bg-ink-hair" />
            <span>UX Design</span>
            <span className="h-1 w-1 rounded-full bg-ink-hair" />
            <span>AI Integration</span>
            <span className="h-1 w-1 rounded-full bg-ink-hair" />
            <span className="hidden sm:inline">App &amp; Service Build</span>
            <span className="hidden sm:inline h-1 w-1 rounded-full bg-ink-hair" />
            <span className="hidden md:inline">Long-term Iteration</span>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[0.4fr_1fr]">
          <Reveal>
            <p className="label">A · Philosophy</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="display-xl text-balance">
              專業，是信任的起點。
            </p>
            <p className="mt-8 max-w-2xl body">
              我們相信 AI 與數位工具的價值，是幫助使用者更快理解資訊、更穩定完成任務。從公司、服務到產品，我們用同一個價值目標貫穿：可理解、可信任、可延續。
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES — Bento */}
      <section id="services" className="section scroll-mt-24 border-t border-ink-hair">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">B · Services</p>
              <h2 className="display-xl mt-7 text-balance">
                四種服務，
                <span className="italic text-ember-500">同一個節奏。</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                每個服務都在相同的節奏下運作——先理解，再收斂，最後打造。
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
            {services.map((s, i) => (
              <Reveal
                key={s.idx}
                delay={i * 80}
                className={`${
                  i === 0
                    ? "lg:col-span-7 lg:row-span-1"
                    : i === 1
                    ? "lg:col-span-5 lg:row-span-1"
                    : i === 2
                    ? "lg:col-span-5 lg:row-span-1"
                    : "lg:col-span-7 lg:row-span-1"
                }`}
              >
                <article className="card card-hover h-full">
                  <div className="flex items-center justify-between">
                    <span className="num-badge">{s.idx}</span>
                    <div className="flex gap-1.5">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="mt-12 font-serif text-[28px] font-[450] leading-tight text-ink sm:text-[32px]">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-sans text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">
                    {s.zh}
                  </p>
                  <p className="mt-6 max-w-md body">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="section scroll-mt-24 border-t border-ink-hair bg-paper-soft/60">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">C · Selected Work</p>
              <h2 className="display-xl mt-7 text-balance">
                產品是我們
                <span className="italic text-ember-300">最誠實的宣言</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                產品是我們最誠實的設計宣言——每個決策都公開在使用者面前。
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Link
                href="/products/qtgarden"
                className="group block overflow-hidden rounded-2xl border border-ink-hair bg-paper transition-all duration-500 ease-editorial hover:-translate-y-0.5 hover:border-ink/25"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-ember-50 via-paper to-moss-50 px-8 pt-14 pb-10">
                  <QtGardenMockup />
                </div>
                <div className="flex items-end justify-between gap-4 border-t border-ink-hair px-8 py-7">
                  <div>
                    <p className="label">Available · iOS · Android</p>
                    <h3 className="mt-3 font-serif text-[28px] font-[450] leading-tight text-ink">
                      QT Garden
                      <span className="ml-2 font-sans text-sm font-medium text-ink-muted">
                        靈修花園
                      </span>
                    </h3>
                    <p className="mt-2 max-w-sm body">
                      協助建立穩定靈修節奏，整合讀經、禱告、書寫與 AI 陪伴。
                    </p>
                  </div>
                  <span className="shrink-0 pb-1 font-serif text-sm italic text-ink-muted transition-colors group-hover:text-ink">
                    View →
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <Link
                href="/products/dosemate"
                className="group block overflow-hidden rounded-2xl border border-ink-hair bg-paper transition-all duration-500 ease-editorial hover:-translate-y-0.5 hover:border-ink/25"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-med-50 via-paper to-paper-soft px-8 pt-14 pb-10">
                  <DoseMateMockup />
                </div>
                <div className="flex items-end justify-between gap-4 border-t border-ink-hair px-8 py-7">
                  <div>
                    <p className="label">Available · iOS · Android</p>
                    <h3 className="mt-3 font-serif text-[28px] font-[450] leading-tight text-ink">
                      Dose Mate
                      <span className="ml-2 font-sans text-sm font-medium text-ink-muted">
                        新生兒急救藥物指引
                      </span>
                    </h3>
                    <p className="mt-2 max-w-sm body">
                      為醫療與照護場景整理計算、查詢與急救流程，降低資訊取得成本。
                    </p>
                  </div>
                  <span className="shrink-0 pb-1 font-serif text-sm italic text-ink-muted transition-colors group-hover:text-ink">
                    View →
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-6">
            <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-ink-hair bg-paper/60 p-8 sm:flex-row sm:items-center">
              <div>
                <p className="label">In development</p>
                <h3 className="mt-3 font-serif text-2xl font-[450] text-ink">
                  Echo Card · 回聲祝福小卡
                </h3>
                <p className="mt-2 max-w-xl body">
                  將有溫度的話語，透過小卡片延伸成可分享的連結。
                </p>
              </div>
              <span className="chip">Coming 2026</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section scroll-mt-24 border-t border-ink-hair">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">D · Process</p>
              <h2 className="display-xl mt-7 text-balance">
                四個步驟，
                <span className="italic text-moss-600">一個判斷標準</span>。
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                每個階段我們都問同一個問題——如何讓產品可信賴且長期被使用？
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-0 border-t border-ink-hair sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal
                key={p.n}
                delay={i * 80}
                className={`border-ink-hair p-8 sm:border-b lg:border-r lg:border-b-0 ${
                  i === 3 ? "lg:border-r-0" : ""
                } ${i < 2 ? "" : "sm:border-b-0"}`}
              >
                <p className="num-badge">{p.n}</p>
                <h3 className="mt-10 font-serif text-[28px] font-[450] leading-tight text-ink">
                  {p.t}
                </h3>
                <p className="mt-1 font-sans text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">
                  {p.zh}
                </p>
                <p className="mt-6 body">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section border-t border-ink-hair bg-ink text-paper">
        <div className="shell grid gap-12 lg:grid-cols-[0.5fr_1fr]">
          <Reveal>
            <p className="label !text-paper/60">E · Values</p>
            <h2 className="display-xl mt-7 text-paper">
              價值觀
              <span className="italic text-ember-300">是取捨的標準</span>。
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="hairline-list !border-paper/15">
              {values.map((v, i) => (
                <li
                  key={v.k}
                  className="!border-paper/15 grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-10"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="num-badge !text-paper/50">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-2xl font-[450] text-paper">
                      {v.k}
                    </span>
                  </div>
                  <p className="max-w-xl font-sans text-[15px] leading-[1.75] text-paper/75">
                    {v.v}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection
        label="Start a conversation"
        title="Let's discuss your next digital product."
        description="如果你正在規劃 App、AI 功能、數位服務或產品合作，歡迎與我們聊聊需求與可行方向。"
        href="/contact"
        buttonLabel="Contact us"
      />
    </main>
  );
}
