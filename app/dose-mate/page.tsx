import { LegacyRedirect } from "@/components/LegacyRedirect";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Dose Mate",
  description: "Dose Mate 醫療計算助手的產品頁已搬遷至 /products/dosemate。",
  path: "/products/dosemate/",
  robots: { index: false, follow: true },
});

export default function LegacyDoseMatePage() {
  return <LegacyRedirect to="/products/dosemate/" label="Dose Mate 產品頁" />;
}
