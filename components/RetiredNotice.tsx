import Link from "next/link";

/**
 * Shown at the URLs of a product that is no longer available, so inbound links
 * land on an explanation instead of a 404.
 */
export function RetiredNotice() {
  return (
    <main>
      <section className="relative pt-28 sm:pt-36">
        <div className="shell pb-28 sm:pb-36">
          <p className="label">Retired product</p>
          <h1 className="display-xxl mt-8 max-w-3xl text-balance">
            QT Garden 已經
            <span className="italic text-ember-500">下架</span>了。
          </h1>
          <p className="mt-10 max-w-2xl text-pretty lede">
            QT Garden 想同時處理讀經、禱告、書寫與回顧，結果每一件事都只做了一半。與其繼續維持一個我們自己也不滿意的版本，我們選擇讓它結束。
          </p>
          <p className="mt-6 max-w-2xl body">
            它的問題被我們留了下來，成為下一個產品的起點——Amen Journal
            阿們日記把範圍收斂到一件事：把禱告留下來。
          </p>

          <div className="mt-12 flex flex-col gap-3 border-t border-ink-hair pt-10 sm:flex-row">
            <Link href="/products/amenjournal" className="btn-primary">
              認識 Amen Journal
              <span className="arrow">→</span>
            </Link>
            <Link href="/products" className="btn-ghost">
              查看所有產品
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
