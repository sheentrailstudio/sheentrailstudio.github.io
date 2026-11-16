import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { StoreBadges } from "@/components/StoreBadges";
import { AmenScreenshot } from "@/components/AmenScreenshot";

const APP_STORE_URL = "https://apps.apple.com/tw/app/id6804240377";

export const metadata: Metadata = {
  title: "Amen Journal 阿們日記",
  itunes: { appId: "6804240377" },
  description:
    "Amen Journal 阿們日記是一款語音禱告日記 App。用說的、用寫的、用拍的留下禱告，依標籤串成軌跡。已在 iOS 上架，Android 即將推出。",
};

const problems = [
  {
    n: "01",
    title: "想禱告，卻不知道怎麼下筆",
    body: "空白的一頁反而更卡。心裡有話，但那些話適合說出來，不適合先整理成句子。",
  },
  {
    n: "02",
    title: "禱告完就散了",
    body: "在車上、睡前、眼淚裡說過的話沒有被留下。過幾天連求過什麼都想不起來。",
  },
  {
    n: "03",
    title: "看不見自己走過的路",
    body: "這一年為什麼事禱告、禱告了幾次？沒有紀錄，只剩模糊的感覺。",
  },
];

const inputs = [
  {
    kicker: "說",
    title: "按一下，開口禱告",
    body: "說完自動轉成逐字稿，可以修改。原始錄音保留，停頓與情緒不會不見。",
  },
  {
    kicker: "寫",
    title: "一頁安靜的書寫畫面",
    body: "想到什麼就寫。",
  },
  {
    kicker: "拍",
    title: "拍下手寫的禱告",
    body: "手寫的禱告、經文或一個當下都可以拍。App 會辨識圖片上的文字，之後搜尋得到。",
  },
];

const trail = [
  {
    kicker: "標籤",
    title: "記下為什麼事禱告",
    body: "例如「為母親的健康」。記錄時自己下，事後都能改。",
  },
  {
    kicker: "軌跡",
    title: "依時間串成一條線",
    body: "同一個標籤底下的禱告依時間排開，像星星連成星座。",
  },
];

const review = [
  {
    kicker: "清單",
    title: "每一則禱告都在這裡",
    body: "依日期排列，點開就能回頭看。",
  },
  {
    kicker: "月曆",
    title: "哪一天留下過禱告",
    body: "月曆上有點的日子，就是你禱告過的日子。",
  },
  {
    kicker: "圖片",
    title: "回顧拍下的畫面",
    body: "手寫的禱告與經文，收在圖片頁，隨時回顧。",
  },
  {
    kicker: "搜尋",
    title: "搜尋任何一個字",
    body: "找回曾經說過的話，錄音轉成的文字也找得到。",
  },
];

const faqs = [
  {
    question: "我的錄音會被誰聽到？",
    answer:
      "只有你自己。禱告預設只存在你的手機裡，不公開，也不會出現在任何動態牆。",
  },
  {
    question: "可以完全不用語音，只打字嗎？",
    answer:
      "可以。三種輸入互相獨立，只用一種也行，不會被催促。",
  },
  {
    question: "這和之前的 QT Garden 有什麼不同？",
    answer:
      "QT Garden 已停止開發並下架。開發的過程讓我們想清楚要做的那一件事：把禱告留下來。Amen Journal 從這裡重新開始，語音優先。",
  },
  {
    question: "什麼時候可以下載？",
    answer:
      "現在就可以。iOS 版已在 App Store 上架，Android 即將推出，確定日期會更新這頁。",
  },
];

export default function AmenJournalPage() {
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
            <p className="label">Amen Journal · 阿們日記</p>
            <h1 className="display-xxl metal-text mt-8 text-balance">
              用說的禱告日記
            </h1>
            <p className="mt-10 max-w-xl text-pretty lede">
              語音、文字、照片都留得下來，依標籤串成軌跡。
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <StoreBadges ios={APP_STORE_URL} />
              <span className="chip">Android 即將推出</span>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-8 border-t border-chrome-hair pt-8">
              <div>
                <dt className="label">Platform</dt>
                <dd className="mt-2 font-serif text-lg text-chrome">iOS</dd>
              </div>
              <div>
                <dt className="label">For</dt>
                <dd className="mt-2 font-serif text-lg text-chrome">Believers</dd>
              </div>
              <div>
                <dt className="label">Status</dt>
                <dd className="mt-2 font-serif text-lg text-chrome">Available</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={150}>
            <div className="mx-auto w-full max-w-[340px]">
              <AmenScreenshot n={1} priority />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section border-t border-chrome-hair">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">A · Problem</p>
              <h2 className="display-xl mt-7 text-balance">
                禱告流失的地方
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                不是不想禱告，而是禱告發生的時刻，常常不是能坐下來寫字的時刻。
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-0 border-y border-chrome-hair sm:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal
                key={p.n}
                delay={i * 80}
                className={`p-8 sm:border-r sm:border-chrome-hair ${
                  i === problems.length - 1 ? "sm:border-r-0" : ""
                } ${i < problems.length - 1 ? "border-b border-chrome-hair sm:border-b-0" : ""}`}
              >
                <p className="num-badge">{p.n}</p>
                <h3 className="mt-10 font-display text-2xl font-medium text-chrome">
                  {p.title}
                </h3>
                <p className="mt-4 body">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPTURE */}
      <section className="section border-t border-chrome-hair bg-void-soft/60">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">B · Capture</p>
              <h2 className="display-xl mt-7 text-balance">
                三種方式留下禱告
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                說、寫、拍，都收在同一本日記裡。
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.6fr] lg:items-center lg:gap-20">
            <ul className="hairline-list">
              {inputs.map((r, i) => (
                <Reveal as="li" key={r.kicker} delay={i * 60}>
                  <div className="grid items-baseline gap-3 sm:grid-cols-[110px_1fr] sm:gap-8">
                    <span className="font-display text-2xl font-medium text-star-500">
                      {r.kicker}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-medium text-chrome">
                        {r.title}
                      </h3>
                      <p className="mt-3 max-w-xl body">{r.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={100}>
              <div className="mx-auto w-full max-w-[320px]">
                <AmenScreenshot n={5} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRAIL */}
      <section className="section border-t border-chrome-hair">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">C · Trail</p>
              <h2 className="display-xl mt-7 text-balance">
                依標籤串成軌跡
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                同一件事的每一次禱告，排在同一條軌跡上。
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.6fr_1fr] lg:items-center lg:gap-20">
            <Reveal className="lg:order-2">
              <div className="mx-auto w-full max-w-[320px]">
                <AmenScreenshot n={2} />
              </div>
            </Reveal>
            <ul className="hairline-list lg:order-1">
              {trail.map((r, i) => (
                <Reveal as="li" key={r.kicker} delay={i * 60}>
                  <div className="grid items-baseline gap-3 sm:grid-cols-[110px_1fr] sm:gap-8">
                    <span className="font-display text-2xl font-medium text-star-500">
                      {r.kicker}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-medium text-chrome">
                        {r.title}
                      </h3>
                      <p className="mt-3 max-w-xl body">{r.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* REVIEW */}
      <section className="section border-t border-chrome-hair bg-void-soft/60">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="label">D · Review</p>
              <h2 className="display-xl mt-7 text-balance">
                回頭看走過的路
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                說出來、留下來，然後在某一天回頭看見。
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <Reveal>
              <div className="mx-auto grid max-w-[640px] grid-cols-2 gap-4 sm:gap-6">
                <AmenScreenshot n={3} />
                <AmenScreenshot n={4} />
              </div>
            </Reveal>
            <ul className="hairline-list">
              {review.map((r, i) => (
                <Reveal as="li" key={r.kicker} delay={i * 60}>
                  <div className="grid items-baseline gap-3 sm:grid-cols-[110px_1fr] sm:gap-8">
                    <span className="font-display text-2xl font-medium text-star-500">
                      {r.kicker}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-medium text-chrome">
                        {r.title}
                      </h3>
                      <p className="mt-3 max-w-xl body">{r.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* 隱私與收費段落（#13）加在這裡，FAQ 之前 */}

      {/* FAQ */}
      <section className="section border-t border-chrome-hair">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-start">
            <Reveal>
              <p className="label">E · FAQ</p>
              <h2 className="display-xl mt-7 text-balance">
                常見問題
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <FAQ items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section className="relative border-t border-chrome-hair bg-void-soft/60">
        <div className="shell py-24 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="label ">Amen Journal · Available on iOS</p>
              <h2 className="display-xl mt-7 text-balance text-chrome">
                現在可以下載了
              </h2>
              <p className="mt-6 max-w-xl font-sans text-[15px] leading-[1.75] text-chrome-soft">
                iOS 版已在 App Store 上架，Android 即將推出。
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <StoreBadges ios={APP_STORE_URL} />
                <span className="chip">Android 即將推出</span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <Link
                href="/products/amenjournal/privacy"
                className="font-sans text-sm text-chrome-soft underline decoration-void/30 decoration-1 underline-offset-[6px] transition-colors hover:text-void hover:decoration-void"
              >
                隱私權政策 →
              </Link>
              <Link
                href="/products/amenjournal/terms"
                className="font-sans text-sm text-chrome-soft underline decoration-void/30 decoration-1 underline-offset-[6px] transition-colors hover:text-void hover:decoration-void"
              >
                使用條款 →
              </Link>
              <Link
                href="/products"
                className="font-sans text-sm text-chrome-soft underline decoration-void/30 decoration-1 underline-offset-[6px] transition-colors hover:text-void hover:decoration-void"
              >
                查看其他產品 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
