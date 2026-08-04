import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { AmenJournalMockup } from "@/components/mockups/AmenJournalMockup";

export const metadata: Metadata = {
  title: "Amen Journal 阿們日記",
  description:
    "Amen Journal 阿們日記是一款語音禱告日記 App。用說的、用寫的、用拍的記錄禱告，可分享代禱錄音，並由 AI 幫你回顧禱告主題與回應軌跡。開發中，預計 2026 推出。",
};

const problems = [
  {
    n: "01",
    title: "想禱告，卻不知道怎麼下筆",
    body: "打開空白的一頁反而更卡。心裡有話，但那些話比較適合「說出來」，不適合先整理成句子。",
  },
  {
    n: "02",
    title: "禱告完就散了",
    body: "那些在車上、在睡前、在眼淚裡說過的話，沒有被留下。過幾天連自己求過什麼都想不起來。",
  },
  {
    n: "03",
    title: "看不見自己走過的路",
    body: "神有沒有回應？我這一年長成什麼樣子？沒有紀錄，成長就只剩下一種模糊的感覺。",
  },
];

const solutions = [
  {
    n: "01",
    title: "用說的就可以禱告",
    body: "按住錄音，把心裡的話直接說出來。App 自動整理成逐字稿，你可以留著原始錄音，也可以只留文字。",
  },
  {
    n: "02",
    title: "語音、文字、照片，同一本日記",
    body: "有時候一段錄音就夠了；有時候想安靜地打字；有時候是一張夕陽、一頁筆記、一張診斷書。三種都收在同一天裡。",
  },
  {
    n: "03",
    title: "代禱錄音，可以送出去",
    body: "為家人或朋友錄一段禱告，用連結分享出去。收到的人聽見的是聲音，不只是文字——這是這個產品最想守住的一件事。",
  },
  {
    n: "04",
    title: "AI 幫你看見軌跡",
    body: "AI 整理你反覆提到的主題、標記已經記下回應的禱告，讓你在月末或年末回顧時，看得見光，也看得見影。",
  },
];

const useCases = [
  {
    time: "Morning",
    title: "出門前的一分鐘",
    body: "還沒清醒到能寫字，但可以說。錄一段就出門，文字稿等晚點再看。",
  },
  {
    time: "Commute",
    title: "車上、路上、走路的時候",
    body: "手不方便打字的時刻，正好是最想禱告的時刻。語音讓禱告不必等到坐下來。",
  },
  {
    time: "Evening",
    title: "睡前的整理",
    body: "把今天的重擔說完，拍下一張想記得的畫面，讓一天有一個結束的方式。",
  },
  {
    time: "Together",
    title: "為別人禱告的時候",
    body: "小組結束、朋友傳來一個消息，錄一段代禱送過去，比一句「我會為你禱告」更接近陪伴。",
  },
];

const features = [
  {
    title: "語音禱告錄音",
    body: "一鍵開始，長度不設限。原始錄音保留在你自己的日記裡。",
  },
  {
    title: "自動逐字稿",
    body: "語音自動轉成文字，可以自由修改，也可以選擇只保留聲音。",
  },
  {
    title: "文字書寫",
    body: "想安靜地寫的時候，一頁乾淨的書寫介面，支援自由格式。",
  },
  {
    title: "拍照記錄",
    body: "把畫面收進禱告裡——一段講道筆記、一張照片、一個當下。",
  },
  {
    title: "代禱錄音分享",
    body: "為特定的人錄一段禱告，用連結送出，可設定有效期限與存取權限。",
  },
  {
    title: "靈命軌跡回顧",
    body: "AI 整理主題、追蹤已回應的禱告，產生可以回頭讀的月度與年度回顧。",
  },
];

const faqs = [
  {
    question: "我的錄音會被誰聽到？",
    answer:
      "預設只有你自己。禱告日記屬於使用者的個人內容，不公開、不會出現在任何動態或社群牆上。只有你主動建立分享連結的那一段錄音，才會被你指定的人聽見。",
  },
  {
    question: "「AI 追蹤靈命成長」到底在追蹤什麼？",
    answer:
      "追蹤的是你自己留下的紀錄，不是你的信仰狀態。AI 做的事情是整理：把反覆出現的禱告主題歸類、把你標記為「已回應」的禱告串起來、在回顧時提醒你曾經求過什麼。它不評分、不排名，也不判斷你和神的關係——那不是一個 App 該做的事。",
  },
  {
    question: "可以完全不用語音，只打字嗎？",
    answer:
      "可以。語音、文字、照片三種輸入完全獨立，你可以只用其中一種。設計上不會因為你少用某個功能就催促你。",
  },
  {
    question: "分享出去的錄音可以收回嗎？",
    answer:
      "可以。分享連結由你建立、也由你關閉，並可設定有效期限。這是規劃中的核心行為，會在第一版就具備。",
  },
  {
    question: "這和之前的 QT Garden 有什麼不同？",
    answer:
      "QT Garden 想同時處理讀經、禱告、書寫與回顧，結果每一件事都只做了一半，已於日前下架。Amen Journal 把範圍收斂到一件事：把禱告留下來。語音優先、分享優先，其餘功能都要先通過「這能不能幫助禱告被留下」這個問題。",
  },
  {
    question: "什麼時候可以下載？",
    answer:
      "目前在開發中，規劃 2026 年於 iOS 與 Android 推出。確定日期後我們會更新這一頁。",
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
            <h1 className="display-xxl mt-8 text-balance">
              Prayers, kept in
              <br />
              your own{" "}
              <span className="italic text-moss-700">voice</span>.
            </h1>
            <p className="mt-10 max-w-xl text-pretty lede">
              一本用說的禱告日記。語音、文字、照片都可以留下，代禱可以錄成一段聲音送出去，而 AI
              會幫你把走過的光與影，整理成看得見的軌跡。
            </p>

            <div className="mt-10">
              <span className="chip">In development · Coming 2026</span>
            </div>

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
                <dd className="mt-2 font-serif text-lg text-ink">In development</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={150}>
            <AmenJournalMockup />
          </Reveal>
        </div>
      </section>

      {/* CONTEXT IMAGE */}
      <section className="border-t border-ink-hair">
        <div className="shell py-12">
          <div className="relative h-[36vh] min-h-[280px] w-full overflow-hidden rounded-2xl border border-ink-hair bg-paper-soft">
            <Image
              src="/amen-journal-context.png"
              alt="Morning light over an open journal and Bible"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1200px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-ink/20 via-transparent to-ink/10" />
            <div className="absolute bottom-6 left-6 max-w-md font-serif text-2xl italic text-paper sm:text-3xl">
              &ldquo;你們眾民當時時倚靠他，在他面前傾心吐意。&rdquo;
              <span className="mt-2 block font-sans text-xs not-italic tracking-[0.22em] text-paper/70">
                Psalm 62:8
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
                禱告最容易
                <span className="italic text-ember-500">流失的地方</span>。
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                不是不想禱告，而是禱告發生的時刻，常常不是能坐下來寫字的時刻。
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
                先讓禱告
                <span className="italic text-moss-600">留得下來</span>。
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl body lg:text-right lg:ml-auto">
                語音優先、分享優先。其他功能都要先回答同一個問題——這能不能幫助禱告被留下？
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
                我們不打算把使用者留在 App 裡，而是希望它出現在那些原本就會禱告的時刻。
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
                六個功能，
                <span className="italic text-ember-300">一句話說完</span>。
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl font-sans text-[15px] leading-[1.75] text-paper/75 lg:text-right lg:ml-auto">
                說出來、留下來、送出去，然後在某一天回頭看見。
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
                  i < features.length - (i % 3 === 2 ? 1 : 0) ? "border-b" : ""
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

          <Reveal delay={200}>
            <p className="mt-10 max-w-2xl font-sans text-[13px] leading-[1.8] text-paper/50">
              以上為開發中的規劃範圍，實際上架版本可能調整。我們會在功能確定後更新這一頁，而不是先把它寫成已經存在的樣子。
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-ink-hair">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-start">
            <Reveal>
              <p className="label">E · FAQ</p>
              <h2 className="display-xl mt-7 text-balance">
                你可能
                <span className="italic text-moss-600">會想先知道的事</span>。
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <FAQ items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section className="relative border-t border-ink-hair bg-ink text-paper">
        <div className="shell py-24 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="label !text-paper/60">Amen Journal · In development</p>
              <h2 className="display-xl mt-7 text-balance text-paper">
                還在做，
                <span className="italic text-ember-300">還沒做完</span>。
              </h2>
              <p className="mt-6 max-w-xl font-sans text-[15px] leading-[1.75] text-paper/75">
                預計 2026 年於 iOS 與 Android
                推出。上架之前，這一頁寫的都是規劃；上架之後，我們會把它換成真的。
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <Link
                href="/products"
                className="font-sans text-sm text-paper/70 underline decoration-paper/30 decoration-1 underline-offset-[6px] transition-colors hover:text-paper hover:decoration-paper"
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
