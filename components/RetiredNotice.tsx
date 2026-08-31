import Link from "next/link";

/**
 * Shown at the URLs of a product that is no longer available, so inbound links
 * land on an explanation instead of a 404.
 */
export function RetiredNotice() {
  return (
    <main>
      <section className="relative pt-24 sm:pt-28">
        <div className="shell pb-16 sm:pb-20">
          <p className="label">已下架的產品</p>
          <h1 className="display-xxl metal-text mt-8 max-w-3xl text-balance">
            QT Garden 已下架
          </h1>
          <p className="mt-7 max-w-2xl text-pretty lede">
            開發 QT Garden 的過程，其實也是我們慢慢想清楚要做什麼的過程。答案愈來愈明確之後，我們決定把它收起來，讓力氣集中在那一件事上。
          </p>

          <div className="mt-10 max-w-2xl space-y-5 border-l border-aurora-500/30 pl-6">
            <p className="body">
              那件事是：把禱告留下來。不是讀更多、記更多、整理得更漂亮，而是讓一句在車上、在睡前說出口的話，不會隔天就散掉。這個判斷是做了 QT Garden 才長出來的，不是一開始就知道。
            </p>
            <p className="body">
              決定不做什麼，通常比決定要做什麼難。我們花了一段時間才把範圍收到這麼窄，也因為收得夠窄，才放得下上一個版本。
            </p>
            <p className="body">
              Amen Journal 阿們日記就是那個答案。它只做一件事，而且把語音放在最前面——禱告本來就是說出口的。預計 2026 年推出，請期待。
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 border-t border-chrome-hair pt-10 sm:flex-row">
            <Link href="/products/amenjournal" className="btn-primary">
              認識 Amen Journal
              <span className="arrow">→</span>
            </Link>
            <Link href="/announcements" className="btn-ghost">
              看所有公告
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
