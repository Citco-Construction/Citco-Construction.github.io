import { pageMetadata } from "../metadata";
import { siteConfig } from "../site";

describe("pageMetadata", () => {
  it("builds a canonical URL localized for the given locale", () => {
    const metadata = pageMetadata({
      title: "About",
      description: "About us",
      path: "/about",
      locale: "es",
    });

    expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/es/about`);
  });

  it("includes en, es, and x-default alternate links", () => {
    const metadata = pageMetadata({
      title: "About",
      description: "About us",
      path: "/about",
      locale: "en",
    });

    expect(metadata.alternates?.languages).toEqual({
      en: `${siteConfig.url}/about`,
      es: `${siteConfig.url}/es/about`,
      "x-default": `${siteConfig.url}/about`,
    });
  });

  it("sets the open graph locale from the page locale", () => {
    const metadata = pageMetadata({
      title: "Contact",
      description: "Contact us",
      path: "/contact",
      locale: "es",
    });

    expect(metadata.openGraph?.locale).toBe("es_LA");
  });
});
