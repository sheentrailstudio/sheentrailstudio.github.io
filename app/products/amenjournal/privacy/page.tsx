import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { amenJournalPrivacy } from "@/content/amenjournal-legal";

export const metadata: Metadata = {
  title: "隱私權政策 · Amen Journal 阿們日記",
  description: "Amen Journal 阿們日記的隱私權政策：我們取得哪些資料、如何使用，以及你的權利。",
};

export default function AmenJournalPrivacyPage() {
  return (
    <LegalPage
      product="Amen Journal · 阿們日記"
      doc={amenJournalPrivacy}
      sibling={{ href: "/products/amenjournal/terms", label: "使用條款" }}
    />
  );
}
