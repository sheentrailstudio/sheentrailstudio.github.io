import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { CHROME, STAR, starryImage } from "@/lib/og";

/* Share preview for /products/amenjournal/. See lib/og for the font. */
export const dynamic = "force-static";

export async function GET() {
  const screenshot = await readFile(
    join(process.cwd(), "app/products/amenjournal/og.png/screenshot-02.jpg"),
  );

  return starryImage([
    <div
      key="text"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 96,
      }}
    >
      <div style={{ fontSize: 132, lineHeight: 1.06, color: CHROME }}>阿們日記</div>
      <div style={{ marginTop: 32, fontSize: 48, lineHeight: 1.3, color: STAR }}>
        用說的禱告日記
      </div>
    </div>,
    <img
      key="screenshot"
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
    />,
  ]);
}
