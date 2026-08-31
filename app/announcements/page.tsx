import type { Metadata } from "next";
import { AnnouncementList } from "@/components/AnnouncementList";
import { Reveal } from "@/components/Reveal";
import { announcements } from "@/content/announcements";

export const metadata: Metadata = {
  title: "公告",
  description:
    "Sheen Trail Digital 的產品與工作室公告，包含 QT Garden 下架說明與 Amen Journal 阿們日記的開發進度。",
  alternates: { canonical: "/announcements/" },
};

export default function AnnouncementsPage() {
  return (
    <main>
      <section className="relative pt-28 sm:pt-36">
        <div className="shell pb-14 sm:pb-20">
          <Reveal>
            <p className="label">Announcements</p>
            <h1 className="display-xxl metal-text mt-8 max-w-3xl text-balance">
              最近消息
            </h1>
            <p className="mt-9 max-w-2xl text-pretty lede">
              上架、下架、改版與停止開發，都寫在這裡。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <AnnouncementList items={announcements} variant="full" />
        </div>
      </section>
    </main>
  );
}
