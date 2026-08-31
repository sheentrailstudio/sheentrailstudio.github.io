import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementList } from "@/components/AnnouncementList";
import { Reveal } from "@/components/Reveal";
import { HOME_ANNOUNCEMENT_COUNT, announcements } from "@/content/announcements";
import { AmenJournalMockup } from "@/components/mockups/AmenJournalMockup";
import { DoseMateMockup } from "@/components/mockups/DoseMateMockup";

export const metadata: Metadata = {
  title: "Sheen Trail Digital — AI 產品工作室",
  description:
    "Sheen Trail Digital 專注於 AI 產品、App 設計與服務開發，協助團隊把想法落地成可信任、可延續的產品。",
};

const services = [
  {
    idx: "01",
    title: "Product Strategy",
    zh: "產品策略",
    body:
      "動手之前，先把方向定下來。",
    tags: ["Scoping", "Research", "Roadmap"],
  },
  {
    idx: "02",
    title: "UX & Interface Design",
    zh: "體驗與介面設計",
    body:
      "看得懂、改得動、撐得久的介面。",
    tags: ["IA", "UI System", "Prototyping"],
  },
  {
    idx: "03",
    title: "AI Integration",
    zh: "AI 輔助整合",
    body:
      "把 AI 放進真實流程，並驗證它可靠。",
    tags: ["LLM", "Agents", "Evaluation"],
  },
  {
    idx: "04",
    title: "App & Service Build",
    zh: "App 與服務開發",
    body:
      "iOS、Android 與 Web，從 MVP 做到長期維護。",
    tags: ["iOS", "Android", "Web"],
  },
];

const values = [
  { k: "Clarity", v: "先說清楚，再動手。" },
  { k: "Care", v: "看使用者的處境。" },
  { k: "Craft", v: "細節決定它能用多久。" },
  { k: "Purpose", v: "每個決定都對著需求。" },
];

const process = [
  {
    n: "01",
    t: "Listen",
    zh: "聆聽",
    body: "先懂問題，再談解法。",
  },
  {
    n: "02",
    t: "Frame",
    zh: "收斂",
    body: "定出方向與優先順序。",
  },
  {
    n: "03",
    t: "Build",
    zh: "打造",
    body: "做出能維護的東西。",
  },
  {
    n: "04",
    t: "Iterate",
    zh: "迭代",
    body: "上線後持續調整。",
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
              "radial-gradient(58% 46% at 78% 6%, rgba(92,238,192,0.14), transparent 62%), radial-gradient(48% 38% at 8% 92%, rgba(79,208,232,0.12), transparent 62%)",
          }}
        />
        <div className="shell grid gap-16 pb-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:pb-32">
          <div className="reveal">
            <p className="label">Sheen Trail Digital · Est. 2025</p>
            <h1 className="display-xxl metal-text mt-8 text-balance">
              做有溫度的產品
            </h1>
            <p className="mt-10 max-w-2xl text-pretty lede">
              策略、設計、AI 與工程，都在同一個節奏裡。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="btn-primary">
                View Products
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          <div className="reveal reveal-delay-2 border-t border-chrome-hair pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="label">Brand statement</p>
            <p className="display-lg metal-text mt-5">
              隨光同行，<br />
              晨星相伴。
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-y-5 border-t border-chrome-hair pt-6">
              <div>
                <dt className="label">Focus</dt>
                <dd className="mt-2 font-display text-lg text-chrome">AI · App · Service</dd>
              </div>
              <div>
                <dt className="label">Based in</dt>
                <dd className="mt-2 font-display text-lg text-chrome">Taipei</dd>
              </div>
              <div>
                <dt className="label">Since</dt>
                <dd className="mt-2 font-display text-lg text-chrome">2025</dd>
              </div>
              <div>
                <dt className="label">Works</dt>
                <dd className="mt-2 font-display text-lg text-chrome">1 Live · 2 Building</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="shell">
          <div className="flex items-center gap-6 border-y border-chrome-hair py-4 font-mono text-[11px] uppercase tracking-[0.24em] text-chrome-muted">
            <span>Strategy</span>
            <span aria-hidden className="text-[9px] text-star-300">✦</span>
            <span>UX Design</span>
            <span aria-hidden className="text-[9px] text-star-300">✦</span>
            <span>AI Integration</span>
            <span aria-hidden className="text-[9px] text-star-300">✦</span>
            <span className="hidden sm:inline">App &amp; Service Build</span>
            <span aria-hidden className="hidden sm:inline text-[9px] text-star-300">✦</span>
            <span className="hidden md:inline">Long-term Iteration</span>
          </div>
        </div>
      </section>

      {/* SERVICES — Bento */}
      <section id="services" className="section scroll-mt-24 border-t border-chrome-hair">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">B · Services</p>
              <h2 className="display-xl mt-7 text-balance">
                四種服務
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                先理解，再收斂，最後打造。
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
                          className="font-mono text-[10px] uppercase tracking-[0.16em] text-chrome-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="mt-12 font-display text-[28px] font-medium leading-tight text-chrome sm:text-[32px]">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-chrome-muted">
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
      <section id="work" className="section scroll-mt-24 border-t border-chrome-hair bg-void-soft/60">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">C · Selected Work</p>
              <h2 className="display-xl mt-7 text-balance">
                我們自己做的產品
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                做過什麼，就擺在這裡。
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Link
                href="/products/dosemate"
                className="group block h-full overflow-hidden rounded-2xl border border-chrome-hair bg-void-soft/40 transition-all duration-500 ease-editorial hover:-translate-y-0.5 hover:border-aurora-500/40"
              >
                <div className="relative overflow-hidden bg-gradient-to-b from-plasma-50/70 to-void px-8 pt-14 pb-10">
                  <DoseMateMockup />
                </div>
                <div className="flex items-end justify-between gap-4 border-t border-chrome-hair px-8 py-7">
                  <div>
                    <p className="label">Available · iOS · Android</p>
                    <h3 className="mt-3 font-display text-[28px] font-medium leading-tight text-chrome">
                      Dose Mate
                      <span className="ml-2 font-sans text-sm font-medium text-chrome-muted">
                        新生兒急救藥物指引
                      </span>
                    </h3>
                    <p className="mt-2 max-w-sm body">
                      劑量計算與急救流程，查得快、能二次確認。
                    </p>
                  </div>
                  <span className="shrink-0 pb-1 font-mono text-xs tracking-[0.12em] text-chrome-muted transition-colors group-hover:text-aurora-500">
                    View →
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <Link
                href="/products/amenjournal"
                className="group block h-full overflow-hidden rounded-2xl border border-chrome-hair bg-void-soft/40 transition-all duration-500 ease-editorial hover:-translate-y-0.5 hover:border-aurora-500/40"
              >
                <div className="relative overflow-hidden bg-gradient-to-b from-aurora-100/60 to-void px-8 pt-14 pb-10">
                  <AmenJournalMockup />
                </div>
                <div className="flex items-end justify-between gap-4 border-t border-chrome-hair px-8 py-7">
                  <div>
                    <p className="label">In development · Coming 2026</p>
                    <h3 className="mt-3 font-display text-[28px] font-medium leading-tight text-chrome">
                      Amen Journal
                      <span className="ml-2 font-sans text-sm font-medium text-chrome-muted">
                        阿們日記
                      </span>
                    </h3>
                    <p className="mt-2 max-w-sm body">
                      用說的禱告日記——語音、文字、照片都能留下，代禱可錄成聲音分享出去。
                    </p>
                  </div>
                  <span className="shrink-0 pb-1 font-mono text-xs tracking-[0.12em] text-chrome-muted transition-colors group-hover:text-aurora-500">
                    View →
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-6">
            <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-chrome-hair bg-void/60 p-8 sm:flex-row sm:items-center">
              <div>
                <p className="label">In planning</p>
                <h3 className="mt-3 font-display text-2xl font-medium text-chrome">
                  Echo Card · 回聲祝福小卡
                </h3>
                <p className="mt-2 max-w-xl body">
                  把一句話做成能傳出去的小卡。
                </p>
              </div>
              <span className="chip">尚未開始開發</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section scroll-mt-24 border-t border-chrome-hair">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">D · Process</p>
              <h2 className="display-xl mt-7 text-balance">
                四個步驟
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                每個階段都問同一件事：三年後還撐得住嗎？
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-0 border-t border-chrome-hair sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal
                key={p.n}
                delay={i * 80}
                className={`border-chrome-hair p-8 sm:border-b lg:border-r lg:border-b-0 ${
                  i === 3 ? "lg:border-r-0" : ""
                } ${i < 2 ? "" : "sm:border-b-0"}`}
              >
                <p className="num-badge">{p.n}</p>
                <h3 className="mt-10 font-display text-[28px] font-medium leading-tight text-chrome">
                  {p.t}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.22em] text-chrome-muted">
                  {p.zh}
                </p>
                <p className="mt-6 body">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section border-t border-chrome-hair bg-void-soft/60">
        <div className="shell grid gap-12 lg:grid-cols-[0.5fr_1fr]">
          <Reveal>
            <p className="label">E · Values</p>
            <h2 className="display-xl metal-text mt-7">
              我們在意的事
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="hairline-list">
              {values.map((v, i) => (
                <li
                  key={v.k}
                  className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-10"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="num-badge">
                      0{i + 1}
                    </span>
                    <span className="font-display text-2xl font-medium text-chrome">
                      {v.k}
                    </span>
                  </div>
                  <p className="max-w-xl font-sans text-[15px] leading-[1.75] text-chrome-soft">
                    {v.v}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section id="announcements" className="section scroll-mt-24 border-t border-chrome-hair">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="label">Recent</p>
              <h2 className="display-xl metal-text mt-7">最近公告</h2>
            </Reveal>
            <Reveal delay={80}>
              <Link
                href="/announcements"
                className="link-underline font-mono text-[12px] uppercase tracking-[0.16em] text-aurora-500"
              >
                All announcements
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-12">
            <AnnouncementList items={announcements.slice(0, HOME_ANNOUNCEMENT_COUNT)} />
          </div>
        </div>
      </section>
    </main>
  );
}
