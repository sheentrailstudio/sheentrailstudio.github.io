import type { Metadata } from "next";
import { LegacyRedirect } from "@/components/LegacyRedirect";

export const metadata: Metadata = {
  title: "新生兒急救指引",
  description: "新生兒急救指引（Dose Mate）的產品頁已搬遷至 /products/dosemate。",
  robots: { index: false, follow: true },
  alternates: { canonical: "/products/dosemate/" },
};

export default function LegacyDoseMatePage() {
  return <LegacyRedirect to="/products/dosemate/" label="新生兒急救指引產品頁" />;
}
