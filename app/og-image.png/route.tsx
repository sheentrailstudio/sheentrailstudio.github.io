import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { GOLD_TEXT, INK, shareImage } from "@/lib/og";

/*
 * Site-wide share preview, used by every page without its own. See lib/og for the font.
 *
 * The logo and name sit as one centred lockup so a chat app that crops the
 * card to its middle square (x 285–915) still shows all of it.
 */
export const dynamic = "force-static";

export async function GET() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));

  return shareImage([
    <div
      key="lockup"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1200,
        height: 630,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        /* Letter-spacing trails the last glyph; nudge right to centre the ink. */
        paddingLeft: 12,
        paddingBottom: 12,
      }}
    >
      <img src={`data:image/png;base64,${logo.toString("base64")}`} width={188} height={188} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 144, lineHeight: 1.1, letterSpacing: 6, color: INK }}>行晨</div>
        <div style={{ marginTop: 4, fontSize: 60, lineHeight: 1.2, letterSpacing: 8, color: GOLD_TEXT }}>
          AI 工作室
        </div>
      </div>
    </div>,
  ]);
}
