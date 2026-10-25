import { type Locale, localizePath, nav } from "./i18n";
import { siteConfig, socialLinks } from "./site";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.shortDescription,
    foundingDate: `${siteConfig.foundingYear}`,
    email: siteConfig.email,
    telephone: siteConfig.phoneOffice,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.765566205887737,
      longitude: -80.25784302883642,
    },
    areaServed: [
      { "@type": "City", name: "Coral Gables" },
      { "@type": "AdministrativeArea", name: "Miami-Dade County" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: siteConfig.phoneOffice,
      email: siteConfig.email,
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
    sameAs: socialLinks.filter((link) => link.isProfile).map((link) => link.url),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Home > current page. Omit on the homepage itself — a BreadcrumbList needs at least two items. */
export function pageBreadcrumbSchema(labelKey: keyof typeof nav, path: string, locale: Locale) {
  return generateBreadcrumbSchema([
    { name: nav.home[locale], url: `${siteConfig.url}${localizePath("/", locale)}` },
    { name: nav[labelKey][locale], url: `${siteConfig.url}${localizePath(path, locale)}` },
  ]);
}
