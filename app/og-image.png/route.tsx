import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { CHROME, STAR, starryImage } from "@/lib/og";

/*
 * Site-wide share preview, used by every page without its own. See lib/og for the font.
 *
 * The logo and name sit as one centred lockup so a chat app that crops the
 * card to its middle square (x 285–915) still shows all of it. The glow is the
 * home hero's aurora/plasma wash.
 */
export const dynamic = "force-static";

/*
 * Hero washes (app/page.tsx): aurora rgb(92,238,192) and plasma rgb(79,208,232),
 * warmed by the star gold in .sky-neb. Full canvas, every stop fades out inside it.
 */
const GLOW =
  "radial-gradient(circle at 50% 50%, rgba(232,207,154,0.11), rgba(4,6,14,0) 25%), " +
  "radial-gradient(circle at 45% 46%, rgba(92,238,192,0.16), rgba(4,6,14,0) 44%), " +
  "radial-gradient(circle at 57% 56%, rgba(79,208,232,0.11), rgba(4,6,14,0) 47%)";

export async function GET() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));

  return starryImage([
    <div
      key="glow"
      style={{ position: "absolute", left: 0, top: 0, width: 1200, height: 630, backgroundImage: GLOW }}
    />,
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
        <div style={{ fontSize: 144, lineHeight: 1.1, letterSpacing: 6, color: CHROME }}>行晨</div>
        <div style={{ marginTop: 4, fontSize: 60, lineHeight: 1.2, letterSpacing: 8, color: STAR }}>
          AI 工作室
        </div>
      </div>
    </div>,
  ]);
}
