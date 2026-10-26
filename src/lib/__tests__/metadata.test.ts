import { defaultSocialImage, pageMetadata } from "../metadata";
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

  it("defaults the open graph and twitter image to the site's default social image", () => {
    const metadata = pageMetadata({
      title: "About",
      description: "About us",
      path: "/about",
      locale: "en",
    });

    const expectedUrl = `${siteConfig.url}${defaultSocialImage}`;
    expect(metadata.openGraph?.images).toEqual([{ url: expectedUrl }]);
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      images: [expectedUrl],
    });
  });

  it("uses a page-supplied image for the open graph and twitter image instead of the default", () => {
    const metadata = pageMetadata({
      title: "Kitchen Remodel",
      description: "A kitchen remodel",
      path: "/projects/kitchen-remodel",
      locale: "en",
      image: "/images/projects/kitchen-remodel/1.jpg",
    });

    const expectedUrl = `${siteConfig.url}/images/projects/kitchen-remodel/1.jpg`;
    expect(metadata.openGraph?.images).toEqual([{ url: expectedUrl }]);
    expect(metadata.twitter).toMatchObject({ images: [expectedUrl] });
  });
});
