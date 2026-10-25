import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * Indexable pages only. Legacy redirects and retired-product URLs set
 * `robots: { index: false }` and stay out of the sitemap.
 * lastmod follows the last content change of each page.
 */
const pages: Array<{
  path: string;
  lastModified: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}> = [
  { path: "/", lastModified: "2026-08-31", changeFrequency: "monthly", priority: 1 },
  { path: "/products/", lastModified: "2026-08-31", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/dosemate/", lastModified: "2026-08-31", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/amenjournal/", lastModified: "2026-10-07", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/products/amenjournal/privacy/",
    lastModified: "2026-10-07",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/products/amenjournal/terms/",
    lastModified: "2026-10-07",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  { path: "/announcements/", lastModified: "2026-08-31", changeFrequency: "weekly", priority: 0.7 },
  { path: "/about/", lastModified: "2026-08-31", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact/", lastModified: "2026-08-31", changeFrequency: "yearly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: new URL(page.path, SITE_URL).toString(),
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
