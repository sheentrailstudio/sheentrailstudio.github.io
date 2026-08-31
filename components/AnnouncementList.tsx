import Link from "next/link";
import type { Announcement } from "@/content/announcements";
import { Reveal } from "@/components/Reveal";

type AnnouncementListProps = {
  items: Announcement[];
  /** "full" prints the body paragraphs; "compact" prints the summary only. */
  variant?: "compact" | "full";
};

/**
 * Announcements as a log: a mono timestamp on the left, the entry on the right,
 * separated by rules that catch the light.
 */
export function AnnouncementList({
  items,
  variant = "compact",
}: AnnouncementListProps) {
  return (
    <ul>
      {items.map((item, i) => (
        <Reveal as="li" key={item.id} delay={i * 70}>
          <div className="rule" />
          <article
            id={item.id}
            className="grid scroll-mt-24 gap-4 py-8 sm:grid-cols-[168px_1fr] sm:gap-10 sm:py-10"
          >
            <div className="flex flex-wrap items-center gap-3 sm:flex-col sm:items-start">
              <time
                className="metal-soft font-mono text-[13px] tracking-[0.14em]"
                dateTime={item.date}
              >
                {item.dateLabel}
              </time>
              <span className="chip">{item.kind}</span>
            </div>

            <div>
              <h3 className="display-md metal-text">{item.title}</h3>
              <p className="mt-3 max-w-2xl body">{item.summary}</p>

              {variant === "full" && item.body?.length ? (
                <div className="mt-6 max-w-2xl space-y-4 border-l border-aurora-500/30 pl-6">
                  {item.body.map((paragraph) => (
                    <p key={paragraph} className="body">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}

              {item.link ? (
                <Link
                  href={item.link.href}
                  className="link-underline mt-6 font-mono text-[12px] uppercase tracking-[0.16em] text-aurora-500"
                >
                  {item.link.label}
                  <span aria-hidden>→</span>
                </Link>
              ) : null}
            </div>
          </article>
        </Reveal>
      ))}
      <div className="rule" />
    </ul>
  );
}
