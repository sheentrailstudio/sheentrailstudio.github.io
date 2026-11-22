import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { AnnouncementList } from "@/components/AnnouncementList";
import { Reveal } from "@/components/Reveal";
import { HOME_ANNOUNCEMENT_COUNT, announcements } from "@/content/announcements";
import {
  AMEN_JOURNAL_IOS_URL,
  DOSE_MATE_ANDROID_URL,
  DOSE_MATE_IOS_URL,
} from "@/content/stores";
import { AmenScreenshot } from "@/components/AmenScreenshot";
import { DoseMatePhone } from "@/components/DoseMatePhone";
import { ProcessSection } from "@/components/ProcessSection";
import { StoreBadges } from "@/components/StoreBadges";

export const metadata = pageMetadata({
  title: "Sheen Trail Digital — AI 產品工作室",
  description:
    "Sheen Trail Digital 專注於 AI 產品、App 設計與服務開發，協助團隊把想法落地成可信任、可延續的產品。",
  path: "/",
});

const intro = [
  "行晨成立於 2025 年，開發自己的 App，也接受委託開發。",
  "分別是醫療照護用的 Dose Mate，和語音禱告日記 Amen Journal。",
  "規劃、設計、AI 與工程由同一組人負責，討論需求的人就是動手做的人。",
];

const services = [
  {
    title: "產品規劃",
    body: "把想法整理成功能清單與時程，作為設計與開發的依據。",
    tag: "功能清單・時程",
  },
  {
    title: "介面設計",
    body: "設計畫面與操作流程，並做成可點擊的原型。",
    tag: "畫面・流程・原型",
  },
  {
    title: "AI 功能導入",
    body: "把語音轉文字、圖片文字辨識、自動標籤等功能接進你的產品。",
    tag: "實例：Amen Journal",
  },
  {
    title: "App 與網站開發",
    body: "開發 iOS、Android App 與網站，並處理上架。維護另簽合約。",
    tag: "iOS・Android・網站",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <div className="shell grid gap-14 pb-20 pt-28 sm:pt-32 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-24">
        <div className="reveal">
          <Image
            src="/logo.png"
            alt=""
            width={52}
            height={52}
            className="rounded-full"
          />
          <p className="label mt-6">Sheen Trail Digital · Est. 2025</p>
          <h1 className="mt-5 font-display text-[clamp(2.4rem,4.7vw,4.25rem)] font-semibold leading-[1.15] tracking-display text-balance">
            從構想做到上架
          </h1>
          <p className="mt-5 max-w-[26em] text-pretty lede">
            行晨規劃、設計並開發 App、網站與 AI 功能。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="btn-primary">
              看我們的產品
            </a>
            <a href="mailto:info@sheentrail.com" className="btn-ghost">
              寄信洽詢
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-2 ml-auto grid w-full max-w-[540px] grid-cols-2 gap-4 sm:gap-8">
          <figure>
            <AmenScreenshot n={5} priority />
            <figcaption className="mt-3 text-sm font-semibold text-ink">
              Amen Journal
              <span className="block font-normal text-ink-muted">阿們日記</span>
            </figcaption>
          </figure>
          <figure className="mt-10 sm:mt-16">
            <DoseMatePhone priority />
            <figcaption className="mt-3 text-sm font-semibold text-ink">
              Dose Mate
              <span className="block font-normal text-ink-muted">新生兒急救指引</span>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section border-t border-line">
        <div className="shell grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:gap-12">
          <Reveal>
            <h2 className="display-xl text-balance">已上架兩款自有產品</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="max-w-2xl space-y-5">
              {intro.map((p) => (
                <p key={p} className="lede">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="work"
        className="section scroll-mt-24 border-t border-line bg-surface-alt"
      >
        <div className="shell">
          <Reveal>
            <h2 className="display-xl text-balance">我們自己做的產品</h2>
          </Reveal>

          <div className="mt-14">
            <Reveal className="grid items-center gap-10 border-t border-line py-14 lg:grid-cols-[4fr_8fr] lg:gap-16">
              <div>
                <p className="accent-text text-sm font-semibold">
                  已上架 iOS｜Android 即將推出
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-[34px]">
                  Amen Journal
                  <span className="mt-1.5 block text-[17px] font-medium text-ink-muted">
                    阿們日記
                  </span>
                </h3>
                <div className="mt-5 max-w-sm space-y-3">
                  <p className="body">
                    語音禱告日記：說話時即時轉成文字，也能用打字和照片記錄。
                  </p>
                  <p className="body">
                    紀錄依標籤串成軌跡。資料預設只存在手機，雲端備份需訂閱。
                  </p>
                </div>
                <StoreBadges ios={AMEN_JOURNAL_IOS_URL} className="mt-7" />
                <Link
                  href="/products/amenjournal"
                  className="mt-6 inline-block border-b-[1.5px] border-gold pb-0.5 text-[15px] font-semibold text-ink"
                >
                  View →
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-6">
                <AmenScreenshot n={1} />
                <AmenScreenshot n={3} />
                <AmenScreenshot n={4} />
              </div>
            </Reveal>

            <Reveal className="grid items-center gap-10 border-t border-line py-14 lg:grid-cols-[8fr_4fr] lg:gap-16">
              <div className="mx-auto w-full max-w-[200px] sm:max-w-[240px] lg:order-first">
                <DoseMatePhone />
              </div>
              <div className="order-first lg:order-none">
                <p className="accent-text text-sm font-semibold">
                  已上架｜iOS・Android
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-[34px]">
                  Dose Mate
                  <span className="mt-1.5 block text-[17px] font-medium text-ink-muted">
                    新生兒急救指引
                  </span>
                </h3>
                <div className="mt-5 max-w-sm space-y-3">
                  <p className="body">
                    為醫療與照護場景設計，涵蓋藥物劑量、體重換算、急救流程與常用公式。
                  </p>
                  <p className="body">
                    核心計算離線可用。結果標示為輔助參考，最終判斷保留給專業人員。
                  </p>
                </div>
                <StoreBadges
                  ios={DOSE_MATE_IOS_URL}
                  android={DOSE_MATE_ANDROID_URL}
                  className="mt-7"
                />
                <Link
                  href="/products/dosemate"
                  className="mt-6 inline-block border-b-[1.5px] border-gold pb-0.5 text-[15px] font-semibold text-ink"
                >
                  View →
                </Link>
              </div>
            </Reveal>

            <Reveal className="border-t border-line pt-10">
              <p className="accent-text text-sm font-semibold">
                規劃中・尚未開始開發
              </p>
              <h3 className="mt-2 font-display text-[22px] font-semibold text-ink">
                Echo Card · 回聲祝福小卡
              </h3>
              <p className="mt-1 body">把一句話做成能傳出去的小卡。</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section scroll-mt-24 border-t border-line">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <h2 className="display-xl text-balance">可以委託的工作</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:ml-auto lg:text-right">
                可以全部委託，也可以只委託其中一段。
              </p>
            </Reveal>
          </div>

          <ul className="mt-14 border-t border-ink">
            {services.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 60}
                className="grid gap-1 border-b border-line py-6 lg:grid-cols-[3fr_6fr_3fr] lg:items-baseline lg:gap-8"
              >
                <h3 className="font-display text-[22px] font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="body">{s.body}</p>
                <p className="meta lg:text-right">{s.tag}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSection id="process" />

      {/* ANNOUNCEMENTS */}
      <section id="announcements" className="section scroll-mt-24">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2 className="display-xl">最近公告</h2>
            </Reveal>
            <Reveal delay={80}>
              <Link
                href="/announcements"
                className="link-underline text-sm font-medium text-ink"
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
