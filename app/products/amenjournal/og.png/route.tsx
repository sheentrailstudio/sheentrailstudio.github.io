import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/*
 * Share preview for /products/amenjournal/, rendered once at build time.
 * The route lives in a folder named `og.png` so the exported file keeps a .png
 * extension; GitHub Pages picks the content type from it.
 *
 * The font holds only the characters used in this file. After changing any
 * text here, run `scripts/og-font.sh`; a missing glyph is otherwise fetched
 * from Google at build time in whatever font it picks.
 */
export const dynamic = "force-static";

const SUBTITLE = "禱告軌跡";

const VOID = "#04060e";
const CHROME = "#e9edf6";
const CHROME_MUTED = "#8c96ac";
const STAR = "#e8cf9a";

const ASSETS = join(process.cwd(), "app/products/amenjournal/og.png");

/* Fixed pseudo-random field so every build draws the same sky. */
const stars = Array.from({ length: 70 }, (_, i) => {
  const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
  return {
    x: Math.round(r(1) * 1200),
    y: Math.round(r(2) * 630),
    size: r(3) > 0.85 ? 3 : r(3) > 0.5 ? 2 : 1,
    gold: r(4) > 0.8,
    opacity: 0.25 + r(5) * 0.6,
  };
});

export async function GET() {
  const [font, screenshot] = await Promise.all([
    readFile(join(ASSETS, "NotoSansTC-SemiBold.subset.ttf")),
    readFile(join(ASSETS, "screenshot-02.jpg")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          background: VOID,
          backgroundImage:
            "radial-gradient(circle at 78% 30%, rgba(232,207,154,0.14), rgba(4,6,14,0) 48%), radial-gradient(circle at 10% 100%, rgba(20,27,49,0.9), rgba(4,6,14,0) 60%)",
          fontFamily: "Noto Sans TC",
        }}
      >
        {stars.map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              borderRadius: s.size,
              background: s.gold ? STAR : CHROME,
              opacity: s.opacity,
            }}
          />
        ))}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 96,
            width: 640,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              letterSpacing: "0.22em",
              color: CHROME_MUTED,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" fill={STAR} />
            </svg>
            AMEN JOURNAL
          </div>
          <div style={{ marginTop: 28, fontSize: 132, lineHeight: 1.06, color: CHROME }}>
            阿們日記
          </div>
          <div style={{ marginTop: 32, fontSize: 48, lineHeight: 1.3, color: STAR }}>
            {SUBTITLE}
          </div>
        </div>

        <img
          src={`data:image/jpeg;base64,${screenshot.toString("base64")}`}
          width={400}
          height={869}
          style={{
            position: "absolute",
            right: 112,
            top: 56,
            borderRadius: 36,
            border: "1px solid rgba(233,237,246,0.14)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Noto Sans TC", data: font, weight: 600, style: "normal" }],
    },
  );
}
