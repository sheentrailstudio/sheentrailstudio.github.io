/**
 * Studio announcements, newest first.
 *
 * To post a new one: add an entry at the top of `announcements`. Nothing else
 * needs changing — the home page shows the newest `HOME_ANNOUNCEMENT_COUNT`
 * entries and /announcements lists them all.
 */

export type AnnouncementKind = "產品" | "工作室" | "服務";

export type Announcement = {
  /** URL fragment, so an announcement can be linked to directly. */
  id: string;
  /** ISO date, used for sorting and <time dateTime>. */
  date: string;
  /** How the date is printed on the page. */
  dateLabel: string;
  kind: AnnouncementKind;
  title: string;
  /** One or two sentences. Shown in every context, including the home page. */
  summary: string;
  /** Full text. Shown only on /announcements. */
  body?: string[];
  link?: { href: string; label: string };
};

export const HOME_ANNOUNCEMENT_COUNT = 2;

export const announcements: Announcement[] = [
  {
    id: "amen-journal-in-development",
    date: "2026-08-04",
    dateLabel: "2026.08",
    kind: "產品",
    title: "Amen Journal 阿們日記開發中",
    summary:
      "一本用說的禱告日記。語音、文字、照片都能留下，代禱可以錄成一段聲音送給對方，AI 會把反覆出現的主題與已經記下的回應整理成軌跡。預計 2026 年推出。",
    body: [
      "語音放在最前面是刻意的。要人先在空白頁上打好字，反而把話卡住了；禱告本來就是說出口的，所以按著錄音就能開始，逐字稿之後再看。",
      "名字也是從同一個念頭來的。「阿們」是禱告說出口的最後一個字，對基督徒不用解釋；後面加上「日記」，是希望你光看名字就知道它在做什麼，不用猜。",
      "這次我們想慢慢做，做到自己每天都願意打開它，再交到你手上。",
    ],
    link: { href: "/products/amenjournal/", label: "看 Amen Journal" },
  },
  {
    id: "qt-garden-retired",
    date: "2026-06-30",
    dateLabel: "2026.06",
    kind: "產品",
    title: "QT Garden 停止開發並下架",
    summary:
      "開發 QT Garden 的過程，其實也是我們慢慢想清楚要做什麼的過程。答案愈來愈明確之後，我們決定把它收起來，讓力氣集中在那一件事上。2026 年中停止開發並下架。",
    body: [
      "那件事是：把禱告留下來。不是讀更多、記更多、整理得更漂亮，而是讓一句在車上、在睡前說出口的話，不會隔天就散掉。這個判斷是做了 QT Garden 才長出來的，不是一開始就知道。",
      "決定不做什麼，通常比決定要做什麼難。我們花了一段時間才把範圍收到這麼窄，也因為收得夠窄，才放得下上一個版本。",
      "Amen Journal 阿們日記就是那個答案。它只做一件事，而且把語音放在最前面——禱告本來就是說出口的。預計 2026 年推出，請期待。",
      "舊網址 /products/qtgarden 與 /qt-garden 保留為說明頁，不會直接變成 404。",
    ],
    link: { href: "/products/qtgarden/", label: "下架說明" },
  },
];
