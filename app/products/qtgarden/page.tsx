import type { Metadata } from "next";
import Image from "next/image";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { StoreBadges } from "@/components/StoreBadges";
import { QtGardenMockup } from "@/components/mockups/QtGardenMockup";

const IOS_URL = "https://apps.apple.com/tw/app/qt-garden/id6744087320";
// const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.sheentrail.qtgarden";

export const metadata: Metadata = {
  title: "QT Garden 靈修花園",
  description:
    "QT Garden 是一款協助建立穩定靈修節奏的 App。整合讀經、禱告、書寫、紀錄與 AI 陪伴，解決靈修分散、難以持續、回顧不易的問題。",
};

const problems = [
  {
    n: "01",
    title: "靈修紀錄散落在不同地方",
    body:
      "筆記本、手機備忘錄、截圖、語音——想回顧的時候找不到。",
  },
  {
    n: "02",
    title: "難以持續回到安靜",
    body:
      "工作與生活節奏緊湊，靈修變成「有空再說」的事。",
  },
  {
    n: "03",
    title: "無從回顧自己的成長軌跡",
    body:
      "缺少一個回顧讀經與禱告的平台。",
  },
];

const solutions = [
  {
    n: "01",
    title: "一個專注的靈修空間",
    body:
      "讀經、禱告、反思、日記整合在一起。",
  },
  {
    n: "02",
    title: "可持續，溫柔陪伴",
    body:
      "使用者可以每天使用，也可以只在需要的時候使用。",
  },
  {
    n: "03",
    title: "可被回顧的屬靈軌跡",
    body:
      "紀錄被整理成時間軸與主題線，讓你看見自己成長的過程。",
  },
  {
    n: "04",
    title: "小園丁 AI 陪伴",
    body:
      "用溫柔的問題幫助整理反思方向、回到經文焦點——輔助書寫，不替代信仰判斷。",
  },
];

const useCases = [
  {
    time: "Morning",
    title: "通勤前的十分鐘",
    body:
      "出門前打開 App，讀一段經文、寫下當天的感動，讓一天從安靜開始。",
  },
  {
    time: "Evening",
    title: "睡前的整理",
    body:
      "把今天的感受全記下來，用禱告結束一天。",
  },
  {
    time: "Weekly",
    title: "主日後的回顧",
    body:
      "紀錄主日講道的筆記與回應，讓信息持續被翻起。",
  },
  {
    time: "Anytime",
    title: "需要安靜的時候",
    body:
      "焦慮、困惑或混亂的時刻，翻閱整理心裡的聲音。",
  },
];

const features = [
  { title: "每日靈修紀錄", body: "讀經、反思、禱告、感恩一頁完成。" },
  { title: "經文與心得書寫", body: "長文書寫介面，支援 markdown 與自由格式。" },
  { title: "禱告筆記", body: "分類、進度與回應紀錄，讓禱告被看見。" },
  { title: "靈修日記", body: "每一天都是一頁，可回顧、可搜尋、可反思。" },
  { title: "溫柔提醒", body: "非強制、可自訂時段，陪伴而不是打擾。" },
  { title: "AI 小園丁", body: "引導反思、整理思緒，輔助使用者回到安靜。" },
];

const faqs = [
  {
    question: "需要每天使用嗎？",
    answer:
      "不需要。QT Garden 的設計是陪伴使用者回到安靜。你可以每天使用，也可以只在需要整理心情、記錄禱告或回顧經文時使用。",
  },
  {
    question: "資料是否會被他人看到？",
    answer:
      "不會。靈修紀錄、禱告與日記都屬於使用者個人內容。產品以隱私與資料主權為優先，預設不分享、不公開。",
  },
  {
    question: "AI 小園丁會做什麼？",
    answer:
      "AI 小園丁提供溫柔的陪伴與引導，例如協助整理反思方向、提出安靜問題，或幫助回到經文與禱告焦點。它不是替代信仰判斷，而是輔助書寫與整理。",
  },
  {
    question: "可以只當日記用嗎？",
    answer:
      "可以。QT Garden 可以作為靈修日記、禱告筆記，也可以作為單純的安靜書寫空間使用。使用者可以依照自己的節奏選擇使用方式。",
  },
  {
    question: "支援哪些平台？",
    answer:
      "目前規劃 iOS 與 Android 雙平台，並以 Web 版作為長文書寫與回顧的補充入口。",
  },
  {
    question: "是否支援離線使用？",
    answer:
      "核心書寫、讀經、日記功能都支援離線。AI 小園丁功能在連線時提供最完整的體驗。",
  },
];

export default function QtGardenPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 sm:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 45% at 85% 15%, rgba(179,90,38,0.1), transparent 60%), radial-gradient(45% 40% at 10% 85%, rgba(38,68,51,0.08), transparent 60%)",
          }}
        />
        <div className="shell grid gap-16 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-32">
          <Reveal>
            <p className="label">QT Garden · 靈修花園</p>
            <h1 className="display-xxl mt-8 text-balance">
              Let quiet time
              <br />
              become{" "}
              <span className="italic text-moss-700">sustainable</span>.
            </h1>
            <p className="mt-10 max-w-xl text-pretty lede">
              在安靜中與神相遇。QT Garden 把讀經、禱告、書寫與反思整理在同一個專注的空間裡，讓每天回到神面前變得更容易。
            </p>
            {/* <StoreBadges ios={IOS_URL} android={ANDROID_URL} className="mt-10" /> */}
                        <StoreBadges ios={IOS_URL}  className="mt-10" />

            <dl className="mt-10 grid grid-cols-3 gap-8 border-t border-ink-hair pt-8">
              <div>
                <dt className="label">Platform</dt>
                <dd className="mt-2 font-serif text-lg text-ink">iOS · Android</dd>
              </div>
              <div>
                <dt className="label">For</dt>
                <dd className="mt-2 font-serif text-lg text-ink">Believers</dd>
              </div>
              <div>
                <dt className="label">Status</dt>
                <dd className="mt-2 font-serif text-lg text-ink">Available</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={150}>
            <QtGardenMockup />
          </Reveal>
        </div>
      </section>

      {/* CONTEXT IMAGE — placeholder, replace when ready */}
      <section className="border-t border-ink-hair">
        <div className="shell py-12">
          <div className="relative h-[36vh] min-h-[280px] w-full overflow-hidden rounded-2xl border border-ink-hair bg-paper-soft">
            <Image
              src="/qt-garden-context.png"
              alt="Morning light over open pages"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1200px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-ink/20 via-transparent to-ink/10" />
            <div className="absolute bottom-6 left-6 max-w-md font-serif text-2xl italic text-paper sm:text-3xl">
              &ldquo;就是清晨的日光，從高天臨到我們。&rdquo;
              <span className="mt-2 block font-sans text-xs not-italic tracking-[0.22em] text-paper/70">
                Luke 1:78
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
                  QT Garden 
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                讓讀經成為「輕鬆自然的事」。
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
                <h3 className="mt-10 font-serif text-2xl font-[450] text-ink">
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
                QT Garden 
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                讓安靜，變成期待的事。
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {solutions.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <article className="card card-hover h-full">
                  <p className="num-badge">{s.n}</p>
                  <h3 className="mt-10 font-serif text-[26px] font-[450] leading-tight text-ink">
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
                它適合
                <span className="italic text-moss-600">哪些時刻</span>？
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                QT Garden 不追求把使用者綁進 App，而是讓它自然融入既有的生活節奏。
              </p>
            </Reveal>
          </div>

          <ul className="mt-14 hairline-list">
            {useCases.map((u, i) => (
              <Reveal as="li" key={u.title} delay={i * 60}>
                <div className="grid items-baseline gap-4 sm:grid-cols-[180px_1fr] sm:gap-10">
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.22em] text-ember-500">
                    {u.time}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-[450] text-ink">
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
      <section className="section border-t border-ink-hair bg-ink text-paper">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label !text-paper/60">D · Features</p>
              <h2 className="display-xl mt-7 text-paper">
                六個核心功能，
                <span className="italic text-ember-300">一個共同目的</span>。
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl font-sans text-[15px] leading-[1.75] text-paper/75 lg:text-right lg:ml-auto">
                每個功能都回答同一個問題——這能否讓使用者更容易回到安靜？
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
                <h3 className="mt-10 font-serif text-2xl font-[450] text-paper">
                  {f.title}
                </h3>
                <p className="mt-3 font-sans text-[14px] leading-[1.7] text-paper/70">
                  {f.body}
                </p>
              </Reveal>
            ))}
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
                使用前可能
                <span className="italic text-moss-600">會想知道的事</span>。
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <FAQ items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className="relative border-t border-ink-hair bg-ink text-paper">
        <div className="shell py-24 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="label !text-paper/60">Download QT Garden</p>
              <h2 className="display-xl mt-7 text-balance text-paper">
                讓靈修成為
                <span className="italic text-ember-300">可持續的日常</span>。
              </h2>
              <p className="mt-6 max-w-xl font-sans text-[15px] leading-[1.75] text-paper/75">
                QT Garden 不是增加更多任務，而是協助你把讀經、禱告與書寫整理成可持續的節奏。
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <a
                href="/contact"
                className="font-sans text-sm text-paper/70 underline decoration-paper/30 decoration-1 underline-offset-[6px] transition-colors hover:text-paper hover:decoration-paper"
              >
                或與我們聊聊合作 →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
