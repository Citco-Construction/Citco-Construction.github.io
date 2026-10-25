import type { MetadataRoute } from "next";
import { locales, localizePath } from "@/lib/i18n";
import { siteConfig, sitePages } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    sitePages.map((page) => ({
      url: `${siteConfig.url}${localizePath(page.path, locale)}`,
      lastModified: new Date(),
    })),
  );
}
