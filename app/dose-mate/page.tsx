import { LegacyRedirect } from "@/components/LegacyRedirect";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "新生兒急救指引",
  description: "新生兒急救指引（Dose Mate）的產品頁已搬遷至 /products/dosemate。",
  path: "/products/dosemate/",
  robots: { index: false, follow: true },
});

export default function LegacyDoseMatePage() {
  return <LegacyRedirect to="/products/dosemate/" label="新生兒急救指引產品頁" />;
}
