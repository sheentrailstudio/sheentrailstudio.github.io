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

const skills = [
  {
    t: "Mobile App",
    zh: "App 開發",
    items: [
      "iOS 與 Android 跨平台開發",
      "相機、麥克風、通知等裝置功能整合",
      "離線資料儲存",
      "App Store 與 Google Play 送審上架",
    ],
  },
  {
    t: "Backend & Cloud",
    zh: "後端與雲端",
    items: [
      "會員登入與帳號管理",
      "雲端備份、換機還原與多裝置同步",
      "訂閱付款串接",
      "使用數據分析",
    ],
  },
  {
    t: "AI Integration",
    zh: "AI 功能整合",
    items: [
      "大型語言模型（LLM）功能串接",
      "語音轉文字與圖片文字辨識",
      "文字自動分類與標籤",
      "AI 輸出品質評估",
    ],
  },
  {
    t: "Product Design",
    zh: "產品設計",
    items: [
      "需求訪談與功能規劃",
      "資訊架構與使用流程",
      "介面設計與設計系統",
      "可操作原型",
    ],
  },
  {
    t: "Web",
    zh: "網站開發",
    items: [
      "企業官網與產品網站",
      "響應式版面",
      "搜尋引擎與社群分享設定",
      "網站部署與網域設定",
    ],
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
              行晨，按部就班地實現你的產品。
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section border-t border-line bg-surface-alt">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-end">
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

      {/* SKILLS */}
      <section className="section border-t border-line">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-end">
            <Reveal>
              <h2 className="display-xl text-balance">
                行晨的專業技術
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                以下技能都已用於上線的 App 與網站。
              </p>
            </Reveal>
          </div>

          <ul className="mt-14 hairline-list">
            {skills.map((d, i) => (
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
                  <ul className="max-w-2xl space-y-2 body">
                    {d.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
