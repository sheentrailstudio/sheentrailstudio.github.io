import type { Metadata } from "next";
import { RetiredNotice } from "@/components/RetiredNotice";

export const metadata: Metadata = {
  title: "QT Garden 已下架",
  description:
    "QT Garden 已停止服務並自 App Store 下架。它的問題成為 Amen Journal 阿們日記的起點。",
  robots: { index: false, follow: true },
};

export default function QtGardenRetiredPage() {
  return <RetiredNotice />;
}
