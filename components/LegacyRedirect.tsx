"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type LegacyRedirectProps = {
  /** Destination path. Include the trailing slash — the site uses `trailingSlash: true`. */
  to: string;
  label: string;
};

/**
 * Forwards a legacy URL to its current location.
 *
 * Server-side `redirect()` cannot be used here: the site is a static export
 * (`output: 'export'`), and pages that call it are exported as a Next.js error
 * page rather than a redirect. This runs on the client instead, and leaves a
 * real link behind for visitors without JavaScript.
 */
export function LegacyRedirect({ to, label }: LegacyRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <main>
      <section className="relative pt-28 sm:pt-36">
        <div className="shell pb-28 sm:pb-36">
          <p className="label">Redirecting</p>
          <h1 className="display-lg mt-8 max-w-2xl text-balance">
            這個頁面已經搬家了。
          </h1>
          <p className="mt-6 max-w-xl body">
            正在把你帶到 {label}。如果沒有自動跳轉，請點下方連結。
          </p>
          <Link
            href={to}
            className="link-underline mt-8 inline-flex font-sans text-sm font-medium text-chrome"
          >
            前往 {label}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
