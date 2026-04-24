import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
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
  metadataBase: new URL("https://www.sheentrail.com"),
  title: {
    default: "Sheen Trail Digital — AI 數位產品工作室",
    template: "%s | Sheen Trail Digital",
  },
  description:
    "Sheen Trail Digital 是一間 AI 數位產品工作室，專注於 App 產品設計、AI 輔助體驗與數位服務開發，協助團隊把想法落地成可信任、可延續的產品。",
  keywords: [
    "Sheen Trail Digital",
    "AI 數位產品",
    "App 開發",
    "產品設計",
    "QT Garden",
    "Dose Mate",
    "靈修 App",
    "醫療工具",
  ],
  authors: [{ name: "Sheen Trail Digital" }],
  openGraph: {
    title: "Sheen Trail Digital",
    description:
      "Building meaningful digital products with clarity, care, and purpose.",
    url: "https://www.sheentrail.com",
    siteName: "Sheen Trail Digital",
    images: [{ url: "/logo.png", width: 512, height: 512 }],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sheen Trail Digital",
    description:
      "Building meaningful digital products with clarity, care, and purpose.",
    images: ["/logo.png"],
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
      className={`${fraunces.variable} ${inter.variable} ${notoSansTC.variable} ${notoSerifTC.variable}`}
    >
      <body className="relative">
        <Header />
        <div className="relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
