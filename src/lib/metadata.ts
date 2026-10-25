import type { Metadata } from "next";
import { localizePath, type Locale } from "./i18n";
import { siteConfig } from "./site";

export function pageMetadata({
  title,
  description,
  path,
  locale,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
}): Metadata {
  const canonical = `${siteConfig.url}${localizePath(path, locale)}`;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${siteConfig.url}${localizePath(path, "en")}`,
        es: `${siteConfig.url}${localizePath(path, "es")}`,
        "x-default": `${siteConfig.url}${localizePath(path, "en")}`,
      },
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "en" ? "en_US" : "es_LA",
      type: "website",
    },
  };
}
