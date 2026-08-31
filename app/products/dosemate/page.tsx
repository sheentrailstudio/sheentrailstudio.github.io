import type { Metadata } from "next";
import Image from "next/image";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { StoreBadges } from "@/components/StoreBadges";
import { DoseMateMockup } from "@/components/mockups/DoseMateMockup";

const IOS_URL = "https://apps.apple.com/app/dosemate/id6755082556";
const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.sheentrail.dosemate";

export const metadata: Metadata = {
  title: "Dose Mate · 醫療計算助手",
  description:
    "Dose Mate 是為醫療與照護場景設計的輔助工具，整理藥物劑量、體重換算、急救流程與常用公式，降低資訊取得成本。",
};

const problems = [
  {
    n: "01",
    title: "資訊落在手冊、文件、記憶裡",
    body:
      "急救流程、藥物計算、常用公式分散在多個工具，關鍵時刻得翻找。",
  },
  {
    n: "02",
    title: "手動計算需二次確認",
    body:
      "體重乘劑量、稀釋換算、輸注速率。每一步都是重複勞動與風險。",
  },
  {
    n: "03",
    title: "把握急救黃金時間",
    body:
      "立即計算把握急救黃金時間。",
  },
];

const solutions = [
  {
    n: "01",
    title: "可被核對的計算結構",
    body:
      "輸入條件，立即得到結果、公式、濃度、體積與注意事項。",
  },
  {
    n: "02",
    title: "場景化流程整理",
    body:
      "急救、照護、準備，共用一致的閱讀路徑。",
  },
  {
    n: "03",
    title: "永遠可被再次確認",
    body:
      "每個結果都明確標示為支援性質，保留判斷空間給專業人員。",
  },
  {
    n: "04",
    title: "離線可用的關鍵路徑",
    body:
      "在現場網路不穩定時，核心計算與查詢仍可使用。",
  },
];

const useCases = [
  {
    time: "Emergency",
    title: "急救現場快速查詢",
    body:
      "輸入體重與場景，直接取得劑量、濃度與流程。",
  },
  {
    time: "Clinical",
    title: "臨床準備與查核",
    body:
      "給藥前再確認劑量、稀釋與輸注速率，作為雙重核對。",
  },
  {
    time: "Teaching",
    title: "臨床教學與演練",
    body:
      "把公式與流程整理成一致的版本，輔助新進人員理解與熟悉。",
  },
  {
    time: "Daily",
    title: "日常照護情境",
    body:
      "在長照與居家照護場景，協助照顧者進行基本的換算與查詢。",
  },
];

const features = [
  { title: "藥物劑量計算", body: "依體重、濃度與公式快速取得建議劑量。" },
  { title: "體重相關換算", body: "BSA、BMI、體表面積等常用換算。" },
  { title: "急救流程指引", body: "場景化指引與節奏提示，輔助臨場使用。" },
  { title: "常用公式整理", body: "把常用公式收集成可搜尋、可比對的清單。" },
  { title: "快速查詢", body: "全域搜尋與收藏，減少關鍵時刻的延遲。" },
  { title: "高可讀性介面", body: "大字、高對比與節制的資訊層級，支援現場快速操作。" },
];

const faqs = [
  {
    question: "這個 App 可以取代醫療判斷嗎？",
    answer:
      "不可以。它是輔助工具，不能取代臨床判斷、訓練或機構流程。結果須由合格人員確認後使用。",
  },
  {
    question: "計算是否完全正確？",
    answer:
      "依公式與常見臨床參考值計算。結果仍須由專業人員依病人狀況與院內規範確認。",
  },
  {
    question: "是否可離線使用？",
    answer:
      "是。核心計算、公式與流程都支援離線，網路不穩也能用。",
  },
  {
    question: "是否包含急救流程？",
    answer:
      "包含急救流程與常用資訊整理，仍須以院內規範與專業判斷為準。",
  },
  {
    question: "資料是否會被上傳？",
    answer:
      "計算與查詢都在本地完成，預設不上傳病人資料。只有你主動同步或回報時才傳送。",
  },
  {
    question: "是否有訂閱費用？",
    answer:
      "基本計算與查詢免費。進階流程與整合可能為加購項目，費用公開。",
  },
];

export default function DoseMatePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 sm:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 45% at 85% 15%, rgba(58,122,134,0.12), transparent 60%), radial-gradient(45% 40% at 10% 85%, rgba(16,19,15,0.04), transparent 60%)",
          }}
        />
        <div className="shell grid gap-16 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-32">
          <Reveal>
            <p className="label">Dose Mate · 醫療計算助手</p>
            <h1 className="display-xxl chrome-text mt-8 text-balance">
              關鍵資訊，查得到
            </h1>
            <p className="mt-10 max-w-xl text-pretty lede">
              計算、查詢與急救流程，查得快。判斷留給專業人員。
            </p>
            <StoreBadges ios={IOS_URL} android={ANDROID_URL} className="mt-10" />

            <dl className="mt-10 grid grid-cols-3 gap-8 border-t border-ink-hair pt-8">
              <div>
                <dt className="label">Platform</dt>
                <dd className="mt-2 font-serif text-lg text-ink">iOS · Android</dd>
              </div>
              <div>
                <dt className="label">For</dt>
                <dd className="mt-2 font-serif text-lg text-ink">Clinicians</dd>
              </div>
              <div>
                <dt className="label">Status</dt>
                <dd className="mt-2 font-serif text-lg text-ink">Available</dd>
              </div>
            </dl>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-ember-300/40 bg-ember-50/60 p-4">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ember-500 font-serif text-[13px] text-ink">
                !
              </span>
              <p className="font-sans text-[13px] leading-[1.65] text-ink-soft">
                <strong className="font-medium text-ink">Support only.</strong>{" "}
                Dose Mate 為輔助工具，不能取代醫療專業判斷、訓練或機構標準流程。
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <DoseMateMockup />
          </Reveal>
        </div>
      </section>

      {/* CONTEXT IMAGE */}
      <section className="border-t border-ink-hair">
        <div className="shell py-12">
          <div className="relative h-[36vh] min-h-[280px] w-full overflow-hidden rounded-2xl border border-ink-hair bg-paper-soft">
            <Image
              src="/dose-mate-context-v4.png"
              alt="Clinical workspace"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1200px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-ink/30 via-transparent to-ink/10" />
            <div className="absolute bottom-6 left-6 max-w-lg font-serif text-2xl text-paper sm:text-3xl">
              把資訊整理得更快、更容易確認。
              <span className="mt-2 block font-sans text-xs not-tracking-[0.22em] text-ink-soft">
                Designed for clinical support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section border-t border-ink-hair">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">A · Problem</p>
              <h2 className="display-xl mt-7 text-balance">
                把時間還給照護
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                提高資訊取得的速度與正確性，是提升醫療品質的關鍵。
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-0 border-y border-ink-hair sm:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal
                key={p.n}
                delay={i * 80}
                className={`p-8 sm:border-r sm:border-ink-hair ${
                  i === problems.length - 1 ? "sm:border-r-0" : ""
                } ${i < problems.length - 1 ? "border-b border-ink-hair sm:border-b-0" : ""}`}
              >
                <p className="num-badge">{p.n}</p>
                <h3 className="mt-10 font-display text-2xl font-medium text-ink">
                  {p.title}
                </h3>
                <p className="mt-4 body">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="section border-t border-ink-hair bg-paper-soft/60">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">B · Solution</p>
              <h2 className="display-xl mt-7 text-balance">
                結構化，不是裝飾
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                新生兒急救指引 把資訊整理成可快速取用結構的輔助層。
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {solutions.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <article className="card card-hover h-full">
                  <p className="num-badge">{s.n}</p>
                  <h3 className="mt-10 font-display text-[26px] font-medium leading-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-4 body">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section border-t border-ink-hair">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">C · Use Cases</p>
              <h2 className="display-xl mt-7 text-balance">
                使用情境
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                新生兒急救指引 把最常需要快速查詢的場景做得扎實。
              </p>
            </Reveal>
          </div>

          <ul className="mt-14 hairline-list">
            {useCases.map((u, i) => (
              <Reveal as="li" key={u.title} delay={i * 60}>
                <div className="grid items-baseline gap-4 sm:grid-cols-[180px_1fr] sm:gap-10">
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.22em] text-med-500">
                    {u.time}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink">
                      {u.title}
                    </h3>
                    <p className="mt-3 max-w-2xl body">{u.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section border-t border-ink-hair bg-paper-soft/60">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label ">D · Features</p>
              <h2 className="display-xl mt-7 text-ink">
                六個核心功能
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl font-sans text-[15px] leading-[1.75] text-ink-soft lg:text-right lg:ml-auto">
                所有功能只回答一個問題——這能否讓專業人員更快、更準確、更有信心地完成判斷？
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-0 border-t border-paper/15 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 60}
                className={`border-paper/15 p-8 ${
                  i % 3 !== 2 ? "lg:border-r" : ""
                } ${i % 2 === 0 ? "sm:border-r" : ""} ${
                  i < features.length - (i % 3 === 2 ? 1 : 0)
                    ? "border-b"
                    : ""
                }`}
              >
                <p className="num-badge !text-paper/55">0{i + 1}</p>
                <h3 className="mt-10 font-display text-2xl font-medium text-ink">
                  {f.title}
                </h3>
                <p className="mt-3 font-sans text-[14px] leading-[1.7] text-ink-soft">
                  {f.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="section-tight border-t border-ink-hair bg-paper">
        <div className="shell">
          <div className="rounded-2xl border border-ember-300/50 bg-ember-50/60 p-8 sm:p-10">
            <p className="label !text-ember-600">Boundaries</p>
            <h3 className="mt-6 font-display text-2xl font-medium text-ink sm:text-3xl">
              新生兒急救指引 是輔助工具，不是醫療判斷的替代品。
            </h3>
            <p className="mt-5 max-w-3xl body">
              所有計算結果、公式與流程資訊都作為支援性質使用。最終的用藥、處置與照護判斷，仍須依照當地醫療機構規範、病人實際狀況與合格專業人員的臨床判斷。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-ink-hair">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-start">
            <Reveal>
              <p className="label">E · FAQ</p>
              <h2 className="display-xl mt-7 text-balance">
                先劃定邊界
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <FAQ items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className="relative border-t border-ink-hair bg-paper-soft/60">
        <div className="shell py-24 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="label ">Download Dose Mate</p>
              <h2 className="display-xl mt-7 text-balance text-ink">
                下載 Dose Mate
              </h2>
              <p className="mt-6 max-w-xl font-sans text-[15px] leading-[1.75] text-ink-soft">
                新生兒急救指引 為輔助工具，所有結果仍需由醫療專業人員依病人狀況與機構規範確認後使用。iOS 與 Android 都可下載。
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <StoreBadges ios={IOS_URL} android={ANDROID_URL} variant="inverted" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
