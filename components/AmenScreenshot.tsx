import Image from "next/image";

const alts = {
  1: "阿們日記的錄音畫面：中央一顆麥克風按鈕，下方寫著「按一下開始禱告」",
  2: "阿們日記的標籤星座畫面：每個標籤是一顆星，同一標籤的禱告連成星座",
  3: "阿們日記的清單畫面：禱告條目依日期由新到舊排列",
  4: "阿們日記的月曆畫面：留下過禱告的日期標有一顆小星",
  5: "阿們日記的條目畫面：一則寫下的禱告全文，底部帶有「感恩」標籤",
} as const;

export type AmenScreenshotNumber = keyof typeof alts;

export function AmenScreenshot({
  n,
  sizes,
  priority,
  className = "",
}: {
  n: AmenScreenshotNumber;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={`/amen-journal/screenshot-0${n}.webp`}
      alt={alts[n]}
      width={860}
      height={1868}
      sizes={sizes}
      priority={priority}
      className={`h-auto w-full rounded-3xl border border-chrome-hair ${className}`}
    />
  );
}
