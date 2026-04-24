import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { StoreBadges } from "@/components/StoreBadges";
import { QtGardenMockup } from "@/components/mockups/QtGardenMockup";
import { DoseMateMockup } from "@/components/mockups/DoseMateMockup";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Sheen Trail Digital 的產品清單，包含 QT Garden 靈修花園、Dose Mate 醫療計算助手，以及正在打造中的 Echo Card。",
};

type Product = {
  href?: string;
  label: string;
  title: string;
  zh: string;
  tagline: string;
  description: string;
  status: "available" | "soon";
  domain: string;
  toneBg: string;
  mockup: "qt" | "dose" | "echo";
  ios?: string;
  android?: string;
};

const products: Product[] = [
  {
    href: "/products/qtgarden",
    label: "Product 01",
    title: "QT Garden",
    zh: "靈修花園",
    tagline: "Let quiet time become sustainable.",
    description:
      "整合讀經、禱告、書寫與 AI 陪伴，協助建立每天回到安靜的節奏。",
    status: "available",
    domain: "Devotional · Spiritual Care",
    toneBg: "from-ember-50 via-paper to-moss-50",
    mockup: "qt",
    ios: "https://apps.apple.com/tw/app/qt-garden/id6744087320",
    // android: "https://play.google.com/store/apps/details?id=com.sheentrail.qtgarden",
  },
  {
    href: "/products/dosemate",
    label: "Product 02",
    title: "Dose Mate",
    zh: "醫療計算助手",
    tagline: "Organize critical information for review.",
    description:
      "將藥物劑量、體重換算、急救流程與常用公式整理成快速、有條理、可被二次確認的臨床輔助資訊。",
    status: "available",
    domain: "Medical · Clinical Support",
    toneBg: "from-med-50 via-paper to-paper-soft",
    mockup: "dose",
    ios: "https://apps.apple.com/app/dosemate/id6755082556",
    android: "https://play.google.com/store/apps/details?id=com.sheentrail.dosemate",
  },
  {
    label: "Product 03",
    title: "Echo Card",
    zh: "回聲祝福小卡",
    tagline: "Small cards, lasting warmth.",
    description:
      "讓有溫度的話語透過可分享的小卡片延伸連結，把關係放進產品的核心。規劃中，2026 推出。",
    status: "soon",
    domain: "Social · Relationship",
    toneBg: "from-paper-soft via-paper to-ember-50",
    mockup: "echo",
  },
];

function MockupSlot({ kind }: { kind: Product["mockup"] }) {
  if (kind === "qt") return <QtGardenMockup />;
  if (kind === "dose") return <DoseMateMockup />;
  return (
    <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[380px] overflow-hidden rounded-[38px] border border-dashed border-ink-hair bg-paper">
      <div className="flex h-full flex-col items-center justify-center gap-3 p-10 text-center">
        <span className="chip">Coming 2026</span>
        <p className="font-serif text-2xl font-[450] italic text-ink">
          Echo Card
        </p>
        <p className="max-w-[220px] font-sans text-xs text-ink-muted">
          產品正在設計中，歡迎保持關注。
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
            <h1 className="display-xxl mt-8 max-w-4xl text-balance">
              產品是我們最誠實的宣言。
            </h1>
            <p className="mt-10 max-w-2xl text-pretty lede">
              每個產品都回應同一件事 —— 在需要的時候，成為依靠的支點
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-ink-hair pt-6">
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted">
              Currently shipping
            </span>
            <span className="chip">QT Garden</span>
            <span className="chip">Dose Mate</span>
            <span className="chip opacity-60">Echo Card — 2026</span>
          </div>
        </div>
      </section>

      {/* PRODUCT ROWS */}
      <section className="border-t border-ink-hair">
        <div className="shell">
          {products.map((p, i) => {
            const reverse = i % 2 === 1;
            const content = (
              <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                <Reveal className={reverse ? "lg:order-2" : ""}>
                  <p className="label">{p.label}</p>
                  <h2 className="display-xl mt-7 text-balance">
                    {p.title}
                    <span className="ml-3 font-sans text-lg font-medium tracking-normal text-ink-muted">
                      {p.zh}
                    </span>
                  </h2>
                  <p className="mt-6 font-serif text-2xl italic text-ink">
                    &ldquo;{p.tagline}&rdquo;
                  </p>
                  <p className="mt-6 max-w-xl body">{p.description}</p>

                  <dl className="mt-10 grid gap-y-4 border-t border-ink-hair pt-6 sm:grid-cols-2">
                    <div>
                      <dt className="label">Domain</dt>
                      <dd className="mt-2 font-serif text-base text-ink">
                        {p.domain}
                      </dd>
                    </div>
                    <div>
                      <dt className="label">Status</dt>
                      <dd className="mt-2 font-serif text-base text-ink">
                        {p.status === "available"
                          ? "Available"
                          : "In development"}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-10 flex flex-col items-start gap-5">
                    {p.ios || p.android ? (
                      <StoreBadges ios={p.ios} android={p.android} />
                    ) : (
                      <span className="chip">Coming 2026</span>
                    )}
                    {p.href ? (
                      <Link
                        href={p.href}
                        className="link-underline font-sans text-sm font-medium text-ink"
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
                    className={`relative overflow-hidden rounded-3xl border border-ink-hair bg-gradient-to-br ${p.toneBg} px-6 py-16 sm:px-10`}
                  >
                    <MockupSlot kind={p.mockup} />
                  </div>
                </Reveal>
              </div>
            );

            return (
              <div
                key={p.title}
                className="border-b border-ink-hair py-20 last:border-b-0 sm:py-28"
              >
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        label="New product"
        title="Have a product idea worth building together?"
        description="如果你正在規劃一個 AI 數位產品或服務，歡迎與我們聊聊定位、場景與落地方式。"
        href="/contact"
        buttonLabel="Let's talk"
      />
    </main>
  );
}
