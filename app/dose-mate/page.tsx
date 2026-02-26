import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dose Mate 新生兒急救指引 — Sheen Trail Digital',
  description: '專為醫療專業人員設計的新生兒與兒科急救藥物劑量計算工具，支援離線使用，以實證醫學為基礎。',
}

const features = [
  {
    title: '急救劑量即時計算',
    desc: '根據體重、胎齡與月齡自動換算藥物劑量、輸注速率與稀釋濃度，消除手動計算的失誤風險。',
  },
  {
    title: '新生兒急救流程',
    desc: 'NRP 復甦流程圖、SpO₂ 參考表、氣管內管尺寸一目了然，在最緊迫的現場仍能快速查閱。',
  },
  {
    title: '兒科急救藥物',
    desc: '完整兒科急救藥物清單與劑量計算，涵蓋常用急救處置指引，適用於兒科急診與加護病房。',
  },
  {
    title: '特殊藥物計算',
    desc: '多巴胺、腎上腺素、Milrinone 等血管活性藥物的精確輸注速率計算，支援多單位換算。',
  },
  {
    title: '完全離線可用',
    desc: '所有計算均在裝置本機執行，無需網路連線，確保在訊號不佳的急救現場也能正常運作。',
  },
  {
    title: '實證醫學依據',
    desc: '引用台灣新生兒科醫學會、AHA、紐西蘭 Starship NICU 等 11+ 權威文獻，定期隨指引更新。',
  },
]

const faq = [
  {
    q: '這款 App 適合哪些人使用？',
    a: '設計給有執照的醫療專業人員，包括醫師、護理師、呼吸治療師和急救人員。不建議一般民眾在未受過專業訓練的情況下使用。',
  },
  {
    q: '計算結果可以直接作為臨床決策嗎？',
    a: 'Dose Mate 是輔助工具，所有計算結果僅供參考，不能取代臨床判斷與專業訓練。所有決策仍須由有執照的醫療人員根據實際病況決定。',
  },
  {
    q: '需要網路才能使用嗎？',
    a: '不需要。所有藥物劑量計算均可完全離線進行，確保在任何急救環境中都能正常運作，包含訊號不佳的急診現場。',
  },
  {
    q: '是否免費？有訂閱制嗎？',
    a: '完全免費，無訂閱制，無廣告。我們相信急救工具應該沒有使用門檻。',
  },
]

const changelog = [
  {
    version: 'v1.1.4',
    date: 'Latest',
    items: [
      '更新藥物參考圖表與特殊藥物計算欄位',
    ],
  },
  {
    version: 'v1.1.1',
    date: '',
    items: [
      '新增使用教學導引（8 頁 onboarding）',
      '修正部分藥物計算誤差',
      '加入參考文獻頁面',
    ],
  },
  {
    version: 'v1.1.0',
    date: '',
    items: [
      '使用體驗全面優化',
      '介面細節改善',
    ],
  },
  {
    version: 'v1.0.0',
    date: '',
    items: [
      'Dose Mate 正式上線',
      'iOS 與 Android 同步首發',
      '核心功能：新生兒急救、兒科急救、特殊藥物計算',
    ],
  },
]

export default function DoseMatePage() {
  return (
    <div className="dm-page">
      {/* Navigation */}
      <nav>
        <Link className="nav-logo" href="/">Sheentrail</Link>
        <div className="nav-links">
          <Link href="/#about">關於</Link>
          <Link href="/#services">服務</Link>
          <Link href="/#products">產品</Link>
          <Link href="/#contact">聯絡</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <Link href="/" className="qt-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            返回首頁
          </Link>
          <p className="qt-hero-label">Product · 產品介紹</p>
          <h1 className="qt-hero-title">
            Dose<br />Mate
          </h1>
          <p className="qt-hero-sub">
            <strong>新生兒急救指引</strong> — 專為醫療專業人員設計。<br /><br />
            在新生兒與兒科急救現場，每一秒都是關鍵。
            Dose Mate 提供即時的<strong>藥物劑量計算</strong>、輸注速率換算與急救流程查閱，
            讓臨床工作者在最緊迫的時刻，仍能精準、安心地做出每個決定。
          </p>
          <div className="store-badges">
            {/* Apple App Store */}
            <a
              href="https://apps.apple.com/app/dosemate/id6755082556"
              target="_blank"
              rel="noopener noreferrer"
              className="store-badge"
              aria-label="Download on the App Store"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" width="150" height="50">
                <rect width="120" height="40" rx="5" fill="#000" />
                <rect x="0.5" y="0.5" width="119" height="39" rx="4.5" fill="none" stroke="#a6a6a6" strokeWidth="1" />
                <g transform="translate(10, 7) scale(0.055)">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-74.3-19.7C57.2 141.6 0 184.3 0 270.6c0 26.9 4.8 54.6 14.5 83.2 12.8 37.5 59.2 129.5 107.5 127.9 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-120.1-65.7-30.7-61.1-89.8-60.1-92.9zm-56.7-166.3c27.3-32.4 24.8-62.1 24-72.5-24 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 50.2-11.4 69.5-34.3z" fill="var(--cream)" />
                </g>
                <text fill="var(--cream)" fontFamily="'Kollektif', Arial, sans-serif" fontSize="7" x="34" y="15" letterSpacing="0.02em">Download on the</text>
                <text fill="var(--cream)" fontFamily="'Kollektif', Arial, sans-serif" fontWeight="700" fontSize="14" x="34" y="30" letterSpacing="0.01em">App Store</text>
              </svg>
            </a>
            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.sheentrail.dosemate"
              target="_blank"
              rel="noopener noreferrer"
              className="store-badge"
              aria-label="Get it on Google Play"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 40" width="168" height="50">
                <rect width="135" height="40" rx="5" fill="#000" />
                <rect x="0.5" y="0.5" width="134" height="39" rx="4.5" fill="none" stroke="#a6a6a6" strokeWidth="1" />
                <g transform="translate(10, 6)">
                  <defs>
                    <linearGradient id="dmPlayGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#00C3FF" />
                      <stop offset="100%" stopColor="#1DA462" />
                    </linearGradient>
                  </defs>
                  <path d="M1 2.5C1 1.5 1.8 1 2.6 1.5L22 14l-19.4 12.5c-.8.5-1.6 0-1.6-1V2.5z" fill="url(#dmPlayGrad)" />
                  <path d="M2.6 1.5L16 11l-13.4 3V2.5c0-1 .8-1.5 1.6-1z" fill="#00C3FF" opacity="0.6" />
                  <path d="M16 11l6 3-6 3V11z" fill="#FFCE00" opacity="0.8" />
                  <path d="M2.6 26.5L16 17v6l-13.4 4.5c-.8.5-1.6 0-1.6-1z" fill="#F14C37" opacity="0.6" />
                </g>
                <text fill="var(--cream)" fontFamily="'Kollektif', Arial, sans-serif" fontSize="7" x="38" y="14.5" letterSpacing="0.02em">GET IT ON</text>
                <text fill="var(--cream)" fontFamily="'Kollektif', Arial, sans-serif" fontWeight="700" fontSize="13" x="38" y="29" letterSpacing="0.01em">Google Play</text>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <div className="wrap">
          <span className="label">Features · 功能特色</span>
          <div className="qt-features">
            {features.map((f) => (
              <div className="qt-feature" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section>
        <div className="wrap">
          <span className="label">Preview · App 截圖</span>
          <div className="qt-screenshots">
            {[1, 2, 3].map((i) => (
              <div className="qt-screenshot-ph" key={i}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
                <span>截圖 {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section>
        <div className="wrap">
          <span className="label">Disclaimer · 醫療聲明</span>
          <div className="dm-disclaimer">
            <strong>僅供醫療專業人員使用</strong>
            Dose Mate 為輔助計算工具，所有藥物劑量與臨床資訊僅供有執照的醫療專業人員參考使用。
            App 的計算結果不能取代臨床判斷、專業訓練或當地醫療機構的標準作業程序。
            在緊急情況下，所有醫療決策仍須由合格醫療人員依據實際病況做最終判斷。
            開發團隊不對因使用本 App 產生的任何臨床後果負責。
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <span className="label">FAQ · 常見問題</span>
          <div className="qt-faq">
            {faq.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <svg className="qt-faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </summary>
                <p className="qt-faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section>
        <div className="wrap">
          <span className="label">Changelog · 版本紀錄</span>
          <div className="qt-changelog">
            {changelog.map((v) => (
              <div className="qt-cl-item" key={v.version}>
                <div>
                  <div className="qt-cl-version">{v.version}</div>
                  {v.date && <div className="qt-cl-date">{v.date}</div>}
                </div>
                <ul className="qt-cl-items">
                  {v.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section>
        <div className="wrap">
          <span className="label">Feedback · 意見回饋</span>
          <p className="qt-feedback-heading">回報問題或建議功能</p>
          <p className="qt-feedback-sub">
            醫療工具的精確度攸關臨床安全，任何計算錯誤或資料疑慮請立即告知。<br />
            功能建議與使用反饋也非常歡迎。
          </p>
          <a href="mailto:info@sheentrail.com" className="qt-feedback-email">
            info@sheentrail.com
          </a>
          <p className="qt-feedback-note">通常在 2 個工作天內回覆</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span>© 2026 Sheen Trail Digital</span>
        <Link href="/" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.6 }}>← 回到首頁</Link>
      </footer>
    </div>
  )
}
