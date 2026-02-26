import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'QT Garden 靈修花園 — Sheen Trail Digital',
  description: '專屬你的秘密花園：在安靜中與神相遇，讀經、禱告、書寫。尊重隱私、可離線使用的靈修 App。',
}

const features = [
  {
    title: '每日經文與靜默引導',
    desc: '每天與神的對話，陪你在日常中安靜片刻，重新連結內心。',
  },
  {
    title: '禱告清單與成就回顧',
    desc: '記錄代禱與回應，把被成就的事溫柔收好，感恩不被時間淹沒。',
  },
  {
    title: '靈修日誌與標籤',
    desc: '以文字留下心情與感動，加入標籤讓回顧更有脈絡與溫度。',
  },
  {
    title: '柔和提醒與安靜模式',
    desc: '不打擾的提醒節奏，讓靈修時間融入生活，而不是打斷生活。',
  },
  {
    title: '離線可用・隱私優先',
    desc: '重要內容本機保存，支援離線使用，你的靈修紀錄只屬於你。',
  },
  {
    title: '主題與字體自訂',
    desc: '溫柔主題、字距與字體大小可調，長時間閱讀也舒適自在。',
  },
]

const faq = [
  {
    q: 'QT Garden 是免費的嗎？',
    a: '完全免費，進階功能將來會以選擇性訂閱方式提供，讀經功能與靈修日記永遠免費。',
  },
  {
    q: '支援哪些平台？',
    a: 'iOS（iPhone 與 iPad）與 Android 均有支援，可分別在 App Store 及 Google Play 下載。',
  },
  {
    q: '換新手機後資料還在嗎？',
    a: '目前版本資料儲存於本機裝置。我們正在開發可選的端對端加密雲端備份，讓你換機時能安全還原紀錄。',
  },
  {
    q: '可以匯出我的靈修紀錄嗎？',
    a: '可以，目前支援匯出為純文字格式，PDF 匯出功能正在開發中。你永遠擁有自己的資料，隨時可以帶走。',
  },
]

const changelog = [
  {
    version: 'v1.2',
    date: '2026 / Feb',
    items: [
      '新增禱告標籤篩選與搜尋功能',
      '改善深色模式下的閱讀體驗',
      '修正部分裝置字體縮放問題',
    ],
  },
  {
    version: 'v1.1',
    date: '2025 / Dec',
    items: [
      '加入每週靈修回顧摘要',
      '新增更多聖經譯本選項',
      '效能優化與介面微調',
    ],
  },
  {
    version: 'v1.0',
    date: '2025 / Sep',
    items: [
      'QT Garden 正式上線',
      'iOS 與 Android 同步首發',
      '核心功能：讀經、禱告清單、靈修日誌',
    ],
  },
]

export default function QtGardenPage() {
  return (
    <div className="qt-page">
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
      <section className="hero" id="qt-top">
        <div className="wrap">
          <Link href="/" className="qt-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            返回首頁
          </Link>
          <p className="qt-hero-label">Product · 產品介紹</p>
          <h1 className="qt-hero-title">
            QT<br />Garden
          </h1>
          <p className="qt-hero-sub">
            <strong>靈修花園</strong> — 專屬你和神的秘密花園。<br /><br />
            在安靜中與神相遇，讀經、禱告、書寫。
            一款以<strong>對話</strong>作為設計核心的讀經 App，
            讓信仰的操練在忙碌的日常中有一個溫柔的落腳處。
          </p>
          <div className="store-badges">
            {/* Apple App Store */}
            <a
              href="https://apps.apple.com/us/app/qt-garden/id6751569807"
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
              href="https://play.google.com/store/apps/details?id=com.sheentrail.qtgarden"
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
                    <linearGradient id="playGrad1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#00C3FF" />
                      <stop offset="100%" stopColor="#1DA462" />
                    </linearGradient>
                  </defs>
                  <path d="M1 2.5C1 1.5 1.8 1 2.6 1.5L22 14l-19.4 12.5c-.8.5-1.6 0-1.6-1V2.5z" fill="url(#playGrad1)" />
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

      {/* Privacy */}
      <section>
        <div className="wrap">
          <span className="label">Privacy · 隱私承諾</span>
          <div className="qt-privacy-grid">
            <div className="qt-privacy-item">
              <h3>不追蹤</h3>
              <p>沒有廣告追蹤、不蒐集使用行為。我們不需要知道你讀了哪段聖經，也不需要賣你廣告。</p>
            </div>
            <div className="qt-privacy-item">
              <h3>你的資料</h3>
              <p>支援隨時匯出或刪除全部資料，不設任何門檻。資料的主權永遠在你手裡。</p>
            </div>
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
                  <div className="qt-cl-date">{v.date}</div>
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
          <p className="qt-feedback-heading">遇到問題或有建議？</p>
          <p className="qt-feedback-sub">
            你的回饋直接影響 QT Garden 的下一個版本。<br />
            無論是 Bug 回報、功能建議，或只是想說聲謝謝，都歡迎寫信給我們。
          </p>
          <a href="mailto:info@sheentrail.com" className="qt-feedback-email">
            info@sheentrail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Link href="/" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.6 }}>← 回到首頁</Link>
        <span>© 2026 Sheen Trail Digital</span>
      </footer>
    </div>
  )
}
