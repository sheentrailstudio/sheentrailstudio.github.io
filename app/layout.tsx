import type { Metadata } from 'next'
import { Coustard } from 'next/font/google'
import './globals.css'

const coustard = Coustard({
  weight: ['400', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-coustard',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sheentrail.com'),
  title: 'Sheen Trail Digital',
  description: '以信仰為核心，追求簡潔設計與隱私尊重，讓科技成為日常中的溫柔陪伴。',
  keywords: '網站開發, App開發, UI/UX設計, 數位轉型, Sheen Trail Digital',
  authors: [{ name: 'Sheen Trail Digital' }],
  openGraph: {
    title: 'Sheen Trail Digital',
    description: '以信仰為核心，追求簡潔設計與隱私尊重，讓科技成為日常中的溫柔陪伴。',
    url: 'https://www.sheentrail.com',
    siteName: 'Sheen Trail Digital',
    images: [{ url: '/logo.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Sheen Trail Digital',
    description: '以信仰為核心，追求簡潔設計與隱私尊重，讓科技成為日常中的溫柔陪伴。',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className={coustard.variable}>
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
