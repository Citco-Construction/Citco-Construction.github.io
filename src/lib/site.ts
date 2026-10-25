export const siteConfig = {
  name: "Citco Construction",
  legalName: "Citco Construction, Inc.",
  shortDescription:
    "Family-owned general contractor in Coral Gables, FL, specializing in residential additions, major renovations, kitchens, and bathrooms since 1982.",
  url: "https://citcoconstruction.com",
  email: "Chris@citcoconstruction.com",
  phoneOffice: "(305) 642-5555",
  phoneMobile: "(305) 467-9538",
  address: {
    street: "717 Ponce de Leon Blvd, Suite #230",
    city: "Coral Gables",
    state: "FL",
    zip: "33134",
  },
  license: {
    number: "CGC024708",
    type: "Certified General Contractor",
    holder: "Sergio C. Vidal",
    jurisdiction: "State of Florida",
  },
  foundingYear: 1982,
  officers: [
    { name: "Sergio C. Vidal", title: "President" },
    { name: "Christopher M. Vidal", title: "VP, Treasurer" },
  ],
} as const;

export type SitePage = {
  path: string;
  labelKey: "home" | "services" | "projects" | "about" | "contact" | "privacy";
};

export const sitePages: SitePage[] = [
  { path: "/", labelKey: "home" },
  { path: "/services", labelKey: "services" },
  { path: "/projects", labelKey: "projects" },
  { path: "/about", labelKey: "about" },
  { path: "/contact", labelKey: "contact" },
];

// Legal pages: kept out of sitePages so they don't appear in the primary header nav,
// but still need sitemap coverage and a footer link.
export const legalPages: SitePage[] = [{ path: "/privacy", labelKey: "privacy" }];

// No company-specific Instagram/LinkedIn handles were provided yet, so those two
// link to the platform root rather than a real profile — isProfile stays false for
// them so generateOrganizationSchema doesn't cite a generic homepage as "sameAs" this
// business. GitHub links to the org's actual account, so it's a real profile link.
export const socialLinks: {
  name: "Instagram" | "LinkedIn" | "GitHub";
  url: string;
  isProfile: boolean;
}[] = [
  { name: "Instagram", url: "https://instagram.com", isProfile: false },
  { name: "LinkedIn", url: "https://linkedin.com", isProfile: false },
  { name: "GitHub", url: "https://github.com/Citco-Construction", isProfile: true },
];
