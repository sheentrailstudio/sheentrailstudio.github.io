import type { Metadata } from "next";

export const SITE_URL = "https://www.sheentrail.com";
export const SITE_NAME = "Sheen Trail Digital";
export const DEFAULT_TITLE = "Sheen Trail Digital — AI 產品工作室";
export const DEFAULT_DESCRIPTION =
  "Sheen Trail Digital 是一間 AI 產品工作室，專注於 App 設計、AI 輔助體驗與服務開發，協助團隊把想法落地成可信任、可延續的產品。";

export const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: SITE_NAME,
} as const;

/**
 * Path used as the canonical and og:url.
 * `trailingSlash: true` means directory routes are deployed with a trailing slash.
 * File paths such as `/404.html` are left as-is.
 */
export function canonicalPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized.includes(".")) return normalized;
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  /** Deployed path. A trailing slash is added for directory routes. */
  path: string;
  robots?: Metadata["robots"];
};

/** Per-page title, description, canonical, Open Graph, and Twitter metadata. */
export function pageMetadata({
  title,
  description,
  path,
  robots,
}: PageMetadataInput): Metadata {
  const canonical = canonicalPath(path);

  return {
    title,
    description,
    ...(robots ? { robots } : {}),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "zh_TW",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
