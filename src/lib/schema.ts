import { siteConfig, socialLinks } from "./site";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.legalName,
    url: siteConfig.url,
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
    sameAs: socialLinks.filter((link) => link.url !== "#").map((link) => link.url),
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
