type StoreBadgesProps = {
  ios?: string;
  android?: string;
  variant?: "default" | "inverted";
  className?: string;
};

export function StoreBadges({
  ios,
  android,
  variant = "default",
  className = "",
}: StoreBadgesProps) {
  const isInverted = variant === "inverted";
  const baseBtn = isInverted
    ? "border-paper/20 bg-paper/10 text-paper hover:bg-paper hover:text-ink"
    : "border-ink/15 bg-ink text-paper hover:bg-moss-700";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {ios ? (
        <a
          href={ios}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on the App Store"
          className={`group inline-flex items-center gap-3 rounded-full border px-5 py-2.5 transition-all duration-300 ease-editorial ${baseBtn}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[22px] w-[22px]"
            fill="currentColor"
            aria-hidden
          >
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
          </svg>
          <span className="flex flex-col items-start leading-tight">
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] opacity-70">
              Download on the
            </span>
            <span className="font-serif text-[17px] font-[450] leading-none">
              App Store
            </span>
          </span>
        </a>
      ) : null}

      {android ? (
        <a
          href={android}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get it on Google Play"
          className={`group inline-flex items-center gap-3 rounded-full border px-5 py-2.5 transition-all duration-300 ease-editorial ${baseBtn}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[22px] w-[22px]"
            fill="currentColor"
            aria-hidden
          >
            <path d="M3.609 1.814 13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zM14.499 12.707l2.58 2.58-11.863 6.815 9.283-9.395zm3.443-3.172 2.61 1.5a1.001 1.001 0 0 1 0 1.73l-2.61 1.5-2.83-2.865 2.83-2.865zM5.216 2.898l11.863 6.815-2.58 2.58L5.216 2.898z" />
          </svg>
          <span className="flex flex-col items-start leading-tight">
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] opacity-70">
              Get it on
            </span>
            <span className="font-serif text-[17px] font-[450] leading-none">
              Google Play
            </span>
          </span>
        </a>
      ) : null}
    </div>
  );
}
