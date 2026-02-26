import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <a className="nav-logo" href="#home">Sheentrail</a>
        <div className="nav-links">
          <a href="#products">產品</a>
          <a href="#contact">聯絡</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="wrap">
          <h1 className="hero-title">
            Sheen<br />
            Trail<br />
            Digital
          </h1>
          <p className="hero-sub">
            在信仰的引領下，讓每一行代碼都折射出<strong>清晨的亮光</strong>。<br />
            我們是數位創作者，專注於打造有意義的產品。
          </p>
        </div>
      </section>

      {/* Products */}
      <section id="products">
        <div className="wrap">
          <span className="label">Products</span>
          <Link href="/qt-garden/" className="product-row">
            <div>
              <div className="product-name">QT Garden</div>
              <div className="product-desc">靈修花園 — 在安靜中與神相遇，讀經、禱告、書寫。</div>
            </div>
            <span className="product-status">Available</span>
          </Link>
          <Link href="/dose-mate/" className="product-row">
            <div>
              <div className="product-name">Dose Mate</div>
              <div className="product-desc">急救指引 — 醫療指引助手。</div>
            </div>
            <span className="product-status">Available</span>
          </Link>
          <div className="product-row inactive">
            <div>
              <div className="product-name">Echo Card</div>
              <div className="product-desc">回聲祝福小卡 — 傳遞溫暖的連結。</div>
            </div>
            <span className="product-status">即將推出</span>
          </div>
        </div>
      </section >

      {/* Contact */}
      < section id="contact" >
        <div className="wrap">
          <span className="label">Contact</span>
          <a href="mailto:info@sheentrail.com" className="contact-email">
            info@sheentrail.com
          </a>
        </div>
      </section >

      {/* Footer */}
      < footer >
        <span />
        <span>© {new Date().getFullYear()} Sheen Trail Digital</span>
      </footer >

      {/* Exit Button → QT Garden */}
      < Link href="/qt-garden/" className="exit-btn" title="QT Garden 靈修花園" >
        <svg
          width="22" height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Door frame */}
          <rect x="3" y="2" width="14" height="20" rx="1" />
          {/* Doorknob */}
          <circle cx="14" cy="12" r="1" fill="currentColor" stroke="none" />
          {/* Exit arrow */}
          <polyline points="17 15 21 12 17 9" />
          <line x1="21" y1="12" x2="11" y2="12" />
        </svg>
      </Link >
    </>
  )
}
