import { Reveal } from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Sheen Trail Digital 開發自有 App，並承接 App、網站與 AI 功能的開發專案。",
  path: "/about/",
});

const principles = [
  {
    k: "Scope",
    zh: "範圍明確",
    body: "開工前訂定功能範圍與時程。",
  },
  {
    k: "Context",
    zh: "依情境設計",
    body: "依實際使用者與使用場景決定功能。",
  },
  {
    k: "Structure",
    zh: "結構可維護",
    body: "以可維護、可擴充的結構撰寫程式。",
  },
  {
    k: "Fit",
    zh: "技術對應需求",
    body: "每項技術選擇都對應一項明確需求。",
  },
];

const services = [
  {
    t: "Product Planning",
    zh: "產品規劃",
    body: "交付功能清單與開發時程，作為設計與開發的依據。",
  },
  {
    t: "Interface Design",
    zh: "介面設計",
    body: "交付介面設計稿與可操作原型，在開發前驗證流程。",
  },
  {
    t: "AI Integration",
    zh: "AI 功能導入",
    body: "將語音轉文字、圖片文字辨識與自動標籤整合進產品。",
  },
  {
    t: "App & Web Development",
    zh: "App 與網站開發",
    body: "開發 iOS、Android App 與網站，並完成上架。維護另簽合約。",
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
              關於行晨工作室
            </h1>
            <p className="mt-10 max-w-2xl text-pretty lede">
              行晨開發自有 App，也承接產品開發專案。
            </p>
          </Reveal>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="section border-t border-line">
        <div className="shell grid gap-14 lg:grid-cols-[0.4fr_1fr]">
          <Reveal delay={100} className="lg:col-start-2">
            <div className="space-y-8 font-display text-[21px] font-medium leading-[1.7] text-ink sm:text-2xl">
              <p>
                行晨成立於 2025 年，名稱取自晨光與道路。
              </p>
              <p>
                行晨提供產品規劃、介面設計、AI 功能導入與 App、網站開發。
              </p>
              <p>
                目前已上架醫療照護工具 Dose Mate 與禱告日記 Amen Journal。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section border-t border-line bg-surface-alt">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <h2 className="display-xl text-balance">
                行晨的四項工作原則
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                每個專案都照這四項執行。
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-0 border-y border-line sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((b, i) => (
              <Reveal
                key={b.k}
                delay={i * 70}
                className={`p-8 ${
                  i < principles.length - 1 ? "lg:border-r lg:border-line" : ""
                } ${i % 2 === 0 ? "sm:border-r sm:border-line lg:border-r" : ""} ${
                  i < 2 ? "border-b border-line sm:border-b lg:border-b-0" : ""
                }`}
              >
                <p className="num-badge">0{i + 1}</p>
                <h3 className="mt-10 font-display text-[28px] font-medium leading-tight text-ink">
                  {b.k}
                </h3>
                <p className="mt-1 meta">
                  {b.zh}
                </p>
                <p className="mt-6 body">{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section border-t border-line">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <h2 className="display-xl text-balance">
                四項產品開發服務
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                規劃、設計、AI 與工程由同一團隊負責。
              </p>
            </Reveal>
          </div>

          <ul className="mt-14 hairline-list">
            {services.map((d, i) => (
              <Reveal as="li" key={d.t} delay={i * 60}>
                <div className="grid items-baseline gap-4 sm:grid-cols-[60px_1fr_1.2fr] sm:gap-10">
                  <span className="num-badge">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink">
                      {d.t}
                    </h3>
                    <p className="mt-1 meta">
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
