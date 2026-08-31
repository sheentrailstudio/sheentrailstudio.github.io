import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { StoreBadges } from "@/components/StoreBadges";
import { AmenJournalMockup } from "@/components/mockups/AmenJournalMockup";
import { DoseMateMockup } from "@/components/mockups/DoseMateMockup";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Sheen Trail Digital 的產品清單，包含 Dose Mate 醫療計算助手，以及開發中的 Amen Journal 阿們日記與 Echo Card。",
};

type Product = {
  href?: string;
  label: string;
  title: string;
  zh: string;
  tagline: string;
  description: string;
  status: "available" | "development" | "soon";
  domain: string;
  toneBg: string;
  mockup: "amen" | "dose" | "echo";
  ios?: string;
  android?: string;
};

const statusLabel: Record<Product["status"], string> = {
  available: "Available",
  development: "In development",
  soon: "In planning",
};

const products: Product[] = [
  {
    href: "/products/dosemate",
    label: "Product 01",
    title: "Dose Mate",
    zh: "醫療計算助手",
    tagline: "Organize critical information for review.",
    description:
      "劑量、換算、急救流程與常用公式，查得快、能二次確認。",
    status: "available",
    domain: "Medical · Clinical Support",
    toneBg: "from-plasma-50 via-void to-void-soft",
    mockup: "dose",
    ios: "https://apps.apple.com/app/dosemate/id6755082556",
    android: "https://play.google.com/store/apps/details?id=com.sheentrail.dosemate",
  },
  {
    href: "/products/amenjournal",
    label: "Product 02",
    title: "Amen Journal",
    zh: "語音禱告日記",
    tagline: "Prayers, kept in your own voice.",
    description:
      "用說的、寫的、拍的記錄禱告，代禱可錄成聲音送出。開發中。",
    status: "development",
    domain: "Devotional · Spiritual Care",
    toneBg: "from-star-50 via-void to-aurora-50",
    mockup: "amen",
  },
  {
    label: "Product 03",
    title: "Echo Card",
    zh: "回聲祝福小卡",
    tagline: "Small cards, lasting warmth.",
    description:
      "把一句有溫度的話，做成能傳出去的小卡。規劃中。",
    status: "soon",
    domain: "Social · Relationship",
    toneBg: "from-void-soft via-void to-star-50",
    mockup: "echo",
  },
];

function MockupSlot({ kind }: { kind: Product["mockup"] }) {
  if (kind === "amen") return <AmenJournalMockup />;
  if (kind === "dose") return <DoseMateMockup />;
  return (
    <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[380px] overflow-hidden rounded-[38px] border border-dashed border-chrome-hair bg-void">
      <div className="flex h-full flex-col items-center justify-center gap-3 p-10 text-center">
        <span className="chip">In planning</span>
        <p className="font-display text-2xl font-medium text-chrome">
          Echo Card
        </p>
        <p className="max-w-[220px] font-sans text-xs text-chrome-muted">
          設計中。
        </p>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative pt-28 sm:pt-36">
        <div className="shell pb-16 sm:pb-24">
          <Reveal>
            <p className="label">Products</p>
            <h1 className="display-xxl metal-text mt-8 max-w-4xl text-balance">
              我們的產品
            </h1>
            <p className="mt-10 max-w-2xl text-pretty lede">
              在需要的時候派得上用場。
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-chrome-hair pt-6">
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-chrome-muted">
              Currently shipping
            </span>
            <span className="chip">Dose Mate</span>
            <span className="chip opacity-60">Amen Journal — 開發中</span>
            <span className="chip opacity-60">Echo Card — 規劃中</span>
          </div>
        </div>
      </section>

      {/* PRODUCT ROWS */}
      <section className="border-t border-chrome-hair">
        <div className="shell">
          {products.map((p, i) => {
            const reverse = i % 2 === 1;
            const content = (
              <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                <Reveal className={reverse ? "lg:order-2" : ""}>
                  <p className="label">{p.label}</p>
                  <h2 className="display-xl mt-7 text-balance">
                    {p.title}
                    <span className="ml-3 font-sans text-lg font-medium tracking-normal text-chrome-muted">
                      {p.zh}
                    </span>
                  </h2>
                  <p className="mt-6 font-serif text-2xl text-chrome">
                    &ldquo;{p.tagline}&rdquo;
                  </p>
                  <p className="mt-6 max-w-xl body">{p.description}</p>

                  <dl className="mt-10 grid gap-y-4 border-t border-chrome-hair pt-6 sm:grid-cols-2">
                    <div>
                      <dt className="label">Domain</dt>
                      <dd className="mt-2 font-serif text-base text-chrome">
                        {p.domain}
                      </dd>
                    </div>
                    <div>
                      <dt className="label">Status</dt>
                      <dd className="mt-2 font-serif text-base text-chrome">
                        {statusLabel[p.status]}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-10 flex flex-col items-start gap-5">
                    {p.ios || p.android ? (
                      <StoreBadges ios={p.ios} android={p.android} />
                    ) : (
                      <span className="chip">
                        {p.status === "development"
                          ? "Coming 2026"
                          : "尚未開始開發"}
                      </span>
                    )}
                    {p.href ? (
                      <Link
                        href={p.href}
                        className="link-underline font-sans text-sm font-medium text-chrome"
                      >
                        View product details
                        <span aria-hidden>→</span>
                      </Link>
                    ) : null}
                  </div>
                </Reveal>

                <Reveal
                  delay={120}
                  className={reverse ? "lg:order-1" : ""}
                >
                  <div
                    className={`relative overflow-hidden rounded-3xl border border-chrome-hair bg-gradient-to-br ${p.toneBg} px-6 py-16 sm:px-10`}
                  >
                    <MockupSlot kind={p.mockup} />
                  </div>
                </Reveal>
              </div>
            );

            return (
              <div
                key={p.title}
                className="border-b border-chrome-hair py-20 last:border-b-0 sm:py-28"
              >
                {content}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
