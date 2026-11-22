import Image from "next/image";

/** The phone cut out of public/dose-mate-context-v4.png (x 1010–1443). */
export function DoseMatePhone({ priority }: { priority?: boolean }) {
  return (
    <Image
      src="/dose-mate-phone.webp"
      alt="Dose Mate 的畫面：手機上的新生兒復甦流程圖，列出各步驟與每一步的判斷結果"
      width={433}
      height={941}
      priority={priority}
      className="h-auto w-full rounded-3xl border border-line"
    />
  );
}
