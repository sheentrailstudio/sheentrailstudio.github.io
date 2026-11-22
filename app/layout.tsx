import type { Metadata } from "next";
import { Albert_Sans, Noto_Sans_TC } from "next/font/google";
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

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-sans-tc",
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
    "新生兒急救指引",
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
      className={`${albertSans.variable} ${notoSansTC.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
