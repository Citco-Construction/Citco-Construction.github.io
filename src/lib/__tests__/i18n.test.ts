import { delocalizePath, localizePath, otherLocale } from "../i18n";

describe("otherLocale", () => {
  it("flips en to es and back", () => {
    expect(otherLocale("en")).toBe("es");
    expect(otherLocale("es")).toBe("en");
  });
});

describe("localizePath", () => {
  it("leaves english paths unchanged", () => {
    expect(localizePath("/about", "en")).toBe("/about");
  });

  it("prefixes spanish paths with /es", () => {
    expect(localizePath("/about", "es")).toBe("/es/about");
  });

  it("maps the root path to /es for spanish", () => {
    expect(localizePath("/", "es")).toBe("/es");
  });
});

describe("delocalizePath", () => {
  it("strips the /es prefix", () => {
    expect(delocalizePath("/es/about")).toBe("/about");
  });

  it("maps /es and /es/ back to the root path", () => {
    expect(delocalizePath("/es")).toBe("/");
    expect(delocalizePath("/es/")).toBe("/");
  });

  it("leaves english paths unchanged", () => {
    expect(delocalizePath("/about")).toBe("/about");
  });
});
