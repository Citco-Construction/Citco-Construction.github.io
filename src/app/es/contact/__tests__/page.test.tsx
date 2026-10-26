import { render } from "@testing-library/react";
import ContactPageEs from "../page";

describe("ContactPageEs (es)", () => {
  it("does not stack an inline top padding on top of the section's own spacing", () => {
    const { container } = render(<ContactPageEs />);

    const grid = container.querySelector(".contact-grid") as HTMLElement | null;

    expect(grid).not.toBeNull();
    // Regression guard: the gap bug was caused by an inline paddingTop added
    // on top of the section's own top padding, doubling the spacing above
    // the fold on both desktop and mobile. The grid wrapper must rely on the
    // section's padding instead of adding its own inline offset.
    expect(grid?.style.paddingTop).toBe("");
  });

  it("uses the shared page-hero section so top spacing matches every other page", () => {
    const { container } = render(<ContactPageEs />);

    const section = container.querySelector("section");

    expect(section).not.toBeNull();
    expect(section?.classList.contains("page-hero")).toBe(true);
  });
});
