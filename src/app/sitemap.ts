import type { MetadataRoute } from "next";
import { locales, localizePath } from "@/lib/i18n";
import { legalPages, siteConfig, sitePages } from "@/lib/site";

export const dynamic = "force-static";

/** next.config.ts sets trailingSlash: true — every served/canonical URL ends in "/", so the sitemap must match. */
function withTrailingSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    [...sitePages, ...legalPages].map((page) => ({
      url: `${siteConfig.url}${withTrailingSlash(localizePath(page.path, locale))}`,
      lastModified: new Date(),
    })),
  );
}
