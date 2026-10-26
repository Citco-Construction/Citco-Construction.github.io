import { generateBreadcrumbSchema, generateOrganizationSchema } from "../schema";
import { siteConfig } from "../site";

describe("generateOrganizationSchema", () => {
  it("builds a GeneralContractor schema from siteConfig", () => {
    const schema = generateOrganizationSchema();

    expect(schema["@type"]).toBe("GeneralContractor");
    expect(schema.name).toBe(siteConfig.legalName);
    expect(schema.address.addressLocality).toBe(siteConfig.address.city);
  });

  it("only includes verified social profile links in sameAs", () => {
    const schema = generateOrganizationSchema();

    expect(schema.sameAs).toEqual([
      "https://www.linkedin.com/company/citco-construction-inc",
      "https://github.com/Citco-Construction",
    ]);
  });
});

describe("generateBreadcrumbSchema", () => {
  it("numbers breadcrumb items starting at 1", () => {
    const schema = generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
    ]);

    expect(schema.itemListElement).toEqual([
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "About", item: "/about" },
    ]);
  });
});
