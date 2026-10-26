import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import type { ComponentType } from "react";
import AboutPage from "@/app/(en)/about/page";
import AboutPageEs from "@/app/es/about/page";
import { siteConfig } from "@/lib/site";

describe("About page LinkedIn link", () => {
  it.each<[string, ComponentType, string]>([
    ["en", AboutPage, `${siteConfig.officers[1].name} on LinkedIn`],
    ["es", AboutPageEs, `${siteConfig.officers[1].name} en LinkedIn`],
  ])("links Chris Vidal's profile card (%s) to his LinkedIn profile", (_locale, Page, label) => {
    render(<Page />);

    const link = screen.getByRole("link", { name: label });

    expect(link).toHaveAttribute("href", siteConfig.officers[1].linkedInUrl);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });
});
