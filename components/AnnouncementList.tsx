import Link from "next/link";
import type { Announcement } from "@/content/announcements";
import { Reveal } from "@/components/Reveal";

type AnnouncementListProps = {
  items: Announcement[];
  /** "full" prints the body paragraphs; "compact" prints the summary only. */
  variant?: "compact" | "full";
};

/**
 * Announcements as a log: the date on the left, the entry on the right,
 * separated by hairline rules.
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
                className="text-[13px] font-semibold tabular-nums text-ink"
                dateTime={item.date}
              >
                {item.dateLabel}
              </time>
              <span className="chip">{item.kind}</span>
            </div>

            <div>
              <h3 className="display-md">{item.title}</h3>
              <p className="mt-3 max-w-2xl body">{item.summary}</p>

              {variant === "full" && item.body?.length ? (
                <div className="mt-6 max-w-2xl space-y-4 border-l border-gold pl-6">
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
                  className="link-underline mt-6 text-sm font-medium text-ink"
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
