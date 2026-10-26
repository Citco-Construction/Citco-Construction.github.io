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
      latitude: siteConfig.address.lat,
      longitude: siteConfig.address.lng,
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

export type BreadcrumbItem = { name: string; href: string };

function absoluteBreadcrumbSchema(items: BreadcrumbItem[]) {
  return generateBreadcrumbSchema(
    items.map((item) => ({ name: item.name, url: `${siteConfig.url}${item.href}` })),
  );
}

/** Home > current page's breadcrumb items, as site-relative hrefs for the visible <Breadcrumbs> nav. */
export function pageBreadcrumbItems(
  labelKey: keyof typeof nav,
  path: string,
  locale: Locale,
): BreadcrumbItem[] {
  return [
    { name: nav.home[locale], href: localizePath("/", locale) },
    { name: nav[labelKey][locale], href: localizePath(path, locale) },
  ];
}

/** Home > current page. Omit on the homepage itself — a BreadcrumbList needs at least two items. */
export function pageBreadcrumbSchema(labelKey: keyof typeof nav, path: string, locale: Locale) {
  return absoluteBreadcrumbSchema(pageBreadcrumbItems(labelKey, path, locale));
}

/** Home > Projects > project title breadcrumb items, for the visible <Breadcrumbs> nav. */
export function projectBreadcrumbItems(
  projectTitle: string,
  slug: string,
  locale: Locale,
): BreadcrumbItem[] {
  return [
    { name: nav.home[locale], href: localizePath("/", locale) },
    { name: nav.projects[locale], href: localizePath("/projects", locale) },
    { name: projectTitle, href: localizePath(`/projects/${slug}`, locale) },
  ];
}

/** Home > Projects > project title, for /projects/[slug] detail pages. */
export function projectBreadcrumbSchema(projectTitle: string, slug: string, locale: Locale) {
  return absoluteBreadcrumbSchema(projectBreadcrumbItems(projectTitle, slug, locale));
}
