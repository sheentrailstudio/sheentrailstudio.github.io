import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ReactNode } from "react";
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

/* Values from the colors in tailwind.config.ts. This file does not read that config. */
const SURFACE = "#ffffff";
export const INK = "#16181d";
export const GOLD_TEXT = "#7a5f2a";
export const LINE = "#e3e5e9";

/**
 * Renders `children` on the white ground as a 1200×630 PNG. Pass an array,
 * not a fragment: satori boxes a fragment, so absolute children would be placed
 * inside that box instead of the canvas.
 */
export async function shareImage(children: ReactNode[]) {
  const font = await readFile(join(process.cwd(), "lib/og/NotoSansTC-SemiBold.subset.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          background: SURFACE,
          fontFamily: "Noto Sans TC",
        }}
      >
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
