import type { Metadata } from "next";
import {
  Fraunces,
  Inter,
  JetBrains_Mono,
  Noto_Sans_TC,
  Noto_Serif_TC,
  Space_Grotesk,
} from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
  ogImage,
} from "@/lib/seo";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-sans-tc",
});

const notoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-serif-tc",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Sheen Trail Digital",
    "AI 產品",
    "App 開發",
    "產品設計",
    "Dose Mate",
    "Amen Journal",
    "阿們日記",
    "禱告日記 App",
    "語音日記",
    "醫療工具",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    images: [ogImage],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${fraunces.variable} ${inter.variable} ${notoSansTC.variable} ${notoSerifTC.variable}`}
    >
      <body className="relative">
        <div aria-hidden className="sky-neb" />
        <div aria-hidden className="sky" />
        <div aria-hidden className="sky-glow" />
        <Header />
        <div className="relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
