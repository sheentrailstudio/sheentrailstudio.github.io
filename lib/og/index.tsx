import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { CSSProperties, ReactNode } from "react";
import { ImageResponse } from "next/og";

/*
 * Shared frame for the share images rendered at build time (`next/og`).
 * Each image is a route handler in a folder named `<name>.png`, so the static
 * export writes a real .png file and GitHub Pages serves it as image/png.
 *
 * The font is Noto Sans TC SemiBold (OFL, see OFL.txt) cut down to the
 * characters the share images draw. When an image's text changes, fetch a new
 * cut with every character both images use, for example:
 *   curl -A curl "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@600&text=<url-encoded characters>"
 * and download the truetype URL it returns. Check the result's cmap: a missing
 * glyph does not show up as a box, `next/og` quietly fetches another font from
 * Google at build time instead.
 */

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

/* tailwind.config.ts */
const VOID = "#04060e";
export const CHROME = "#e9edf6";
export const STAR = "#e8cf9a";

/* Nebula and aurora washes, after .sky-neb and .sky-glow in globals.css. */
const sky =
  "radial-gradient(circle at 80% 10%, rgba(92,238,192,0.12), rgba(4,6,14,0) 45%), " +
  "radial-gradient(circle at 85% 20%, rgba(122,92,220,0.18), rgba(4,6,14,0) 40%), " +
  "radial-gradient(circle at 15% 30%, rgba(56,160,200,0.13), rgba(4,6,14,0) 40%), " +
  "radial-gradient(circle at 30% 95%, rgba(92,238,192,0.09), rgba(4,6,14,0) 45%)";

/* Fixed pseudo-random field, so every build draws the same sky. */
const stars = Array.from({ length: 70 }, (_, i): CSSProperties => {
  const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
  const size = r(3) > 0.85 ? 3 : r(3) > 0.5 ? 2 : 1;
  return {
    position: "absolute",
    left: Math.round(r(1) * OG_WIDTH),
    top: Math.round(r(2) * OG_HEIGHT),
    width: size,
    height: size,
    borderRadius: size,
    background: r(4) > 0.8 ? STAR : CHROME,
    opacity: 0.25 + r(5) * 0.6,
  };
});

/**
 * Renders `children` over the starry ground as a 1200×630 PNG. Pass an array,
 * not a fragment: satori boxes a fragment, so absolute children would be placed
 * inside that box instead of the canvas.
 */
export async function starryImage(children: ReactNode[]) {
  const font = await readFile(join(process.cwd(), "lib/og/NotoSansTC-SemiBold.subset.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          background: VOID,
          backgroundImage: sky,
          fontFamily: "Noto Sans TC",
        }}
      >
        {stars.map((style, i) => (
          <div key={i} style={style} />
        ))}
        {children}
      </div>
    ),
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      fonts: [{ name: "Noto Sans TC", data: font, weight: 600, style: "normal" }],
    },
  );
}
