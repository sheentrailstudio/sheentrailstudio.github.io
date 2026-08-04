import type { Metadata } from "next";
import { LegacyRedirect } from "@/components/LegacyRedirect";

export const metadata: Metadata = {
  title: "Dose Mate",
  description: "Dose Mate 醫療計算助手的產品頁已搬遷至 /products/dosemate。",
  robots: { index: false, follow: true },
  alternates: { canonical: "/products/dosemate/" },
};

export default function LegacyDoseMatePage() {
  return <LegacyRedirect to="/products/dosemate/" label="Dose Mate 產品頁" />;
}
