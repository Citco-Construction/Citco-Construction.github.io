import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { locales, localizePath } from "@/lib/i18n";
import { legalPages, siteConfig, sitePages } from "@/lib/site";

export const dynamic = "force-static";

/** next.config.ts sets trailingSlash: true, so every served/canonical URL ends in "/" and the sitemap must match. */
function withTrailingSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => [
    ...[...sitePages, ...legalPages].map((page) => ({
      url: `${siteConfig.url}${withTrailingSlash(localizePath(page.path, locale))}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}${withTrailingSlash(localizePath(`/projects/${project.slug}`, locale))}`,
      lastModified: new Date(),
    })),
  ]);
}
