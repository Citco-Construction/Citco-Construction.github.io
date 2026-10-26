import type { Metadata } from "next";
import { type Locale, localizePath } from "./i18n";
import { siteConfig } from "./site";

/**
 * Default social-share image for pages that don't supply their own `image`.
 * Without this, pages had no og:image/twitter:image at all, so shared links
 * rendered with no preview image on social platforms and chat apps.
 */
export const defaultSocialImage = "/images/hero-kitchen.jpg";

export function pageMetadata({
  title,
  description,
  path,
  locale,
  image = defaultSocialImage,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  /** Site-relative path to a social-share image, e.g. "/images/hero-kitchen.jpg". */
  image?: string;
}): Metadata {
  const canonical = `${siteConfig.url}${localizePath(path, locale)}`;
  const imageUrl = `${siteConfig.url}${image}`;

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
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [imageUrl],
    },
  };
}
