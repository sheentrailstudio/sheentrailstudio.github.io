import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { amenJournalTerms } from "@/content/amenjournal-legal";

export const metadata: Metadata = {
  title: "使用條款 · Amen Journal 阿們日記",
  description: "Amen Journal 阿們日記的使用條款：訂閱、權利歸屬、使用規範與責任。",
};

export default function AmenJournalTermsPage() {
  return (
    <LegalPage
      product="Amen Journal · 阿們日記"
      doc={amenJournalTerms}
      sibling={{ href: "/products/amenjournal/privacy", label: "隱私權政策" }}
    />
  );
}
