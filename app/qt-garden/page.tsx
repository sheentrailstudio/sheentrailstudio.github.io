import type { Metadata } from "next";
import { RetiredNotice } from "@/components/RetiredNotice";

export const metadata: Metadata = {
  title: "QT Garden 已下架",
  description:
    "QT Garden 已停止開發並自 App Store 下架。開發過程讓我們想清楚真正要做的那一件事，答案是即將推出的 Amen Journal 阿們日記。",
  robots: { index: false, follow: true },
};

export default function LegacyQtGardenPage() {
  return <RetiredNotice />;
}
