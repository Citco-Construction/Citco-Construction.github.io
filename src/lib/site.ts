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
  labelKey: "home" | "services" | "projects" | "about" | "contact";
};

export const sitePages: SitePage[] = [
  { path: "/", labelKey: "home" },
  { path: "/services", labelKey: "services" },
  { path: "/projects", labelKey: "projects" },
  { path: "/about", labelKey: "about" },
  { path: "/contact", labelKey: "contact" },
];

// TODO: no real social handles were provided — swap these placeholder hrefs
// for the company's actual Instagram / LinkedIn / GitHub links.
export const socialLinks: { name: "Instagram" | "LinkedIn" | "GitHub"; url: string }[] = [
  { name: "Instagram", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "GitHub", url: "#" },
];
