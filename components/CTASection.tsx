import Link from "next/link";

type CTASectionProps = {
  label?: string;
  title: string;
  description?: string;
  href?: string;
  buttonLabel?: string;
};

export function CTASection({
  label = "Start a conversation",
  title,
  description,
  href = "/contact",
  buttonLabel = "Contact us",
}: CTASectionProps) {
  return (
    <section className="relative border-t border-ink-hair bg-paper">
      <div className="shell py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="label">{label}</p>
            <h2 className="display-xl mt-7 text-balance">{title}</h2>
          </div>
          <div className="flex flex-col items-start gap-6 lg:items-end">
            {description ? (
              <p className="max-w-md text-pretty body lg:text-right">
                {description}
              </p>
            ) : null}
            <Link href={href} className="btn-primary">
              {buttonLabel}
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
