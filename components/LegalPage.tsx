import Link from "next/link";
import type { LegalBlock, LegalDocument } from "@/content/amenjournal-legal";

type LegalPageProps = {
  product: string;
  doc: LegalDocument;
  sibling: { href: string; label: string };
};

function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-chrome">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "p":
      return (
        <p className="body">
          <Inline text={block.text} />
        </p>
      );
    case "note":
      return (
        <p className="border-l-2 border-aurora-500 pl-5 body">
          <Inline text={block.text} />
        </p>
      );
    case "list":
      return (
        <ul className="list-disc space-y-3 pl-5 marker:text-chrome-muted">
          {block.items.map((item) => (
            <li key={item} className="body">
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                {block.head.map((cell) => (
                  <th
                    key={cell}
                    className="border-b border-chrome-hair py-3 pr-6 font-mono text-[11px] uppercase tracking-[0.18em] text-chrome-muted"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell) => (
                    <td
                      key={cell}
                      className="border-b border-chrome-hair py-3 pr-6 align-top body"
                    >
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function LegalPage({ product, doc, sibling }: LegalPageProps) {
  return (
    <main>
      <section className="relative pt-28 sm:pt-36">
        <div className="shell pb-12 sm:pb-16">
          <p className="label">{product}</p>
          <h1 className="display-xl metal-text mt-8 max-w-4xl text-balance">
            {doc.title}
          </h1>
        </div>
      </section>

      <section className="border-t border-chrome-hair">
        <div className="shell max-w-3xl space-y-12 py-16 sm:py-20">
          {doc.intro.length > 0 && (
            <div className="space-y-5">
              {doc.intro.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          )}

          {doc.sections.map((section, i) => (
            <div key={section.title} className="space-y-5">
              <h2 className="display-md text-chrome">
                {i + 1}. {section.title}
              </h2>
              {section.blocks.map((block, j) => (
                <Block key={j} block={block} />
              ))}
            </div>
          ))}

          <div className="flex flex-wrap gap-6 border-t border-chrome-hair pt-10">
            <Link
              href={sibling.href}
              className="font-sans text-sm text-chrome-soft underline decoration-chrome-hair decoration-1 underline-offset-[6px] transition-colors hover:text-aurora-500"
            >
              {sibling.label} →
            </Link>
            <Link
              href="/products/amenjournal"
              className="font-sans text-sm text-chrome-soft underline decoration-chrome-hair decoration-1 underline-offset-[6px] transition-colors hover:text-aurora-500"
            >
              回到 Amen Journal →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
