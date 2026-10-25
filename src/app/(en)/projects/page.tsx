import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "A sample of the additions, renovations, kitchens, and bathrooms Citco Construction builds.",
  path: "/projects",
  locale: "en",
});

const projects = [
  { tag: "Addition · Coral Gables", title: "Second-Story Addition" },
  { tag: "Renovation · Coral Gables", title: "Whole-Home Renovation" },
  { tag: "Kitchen · Coral Gables", title: "Custom Kitchen Remodel" },
  { tag: "Bathroom · Miami", title: "Primary Bathroom Remodel" },
  { tag: "Addition · Coconut Grove", title: "Rear Room Addition" },
  { tag: "Kitchen · South Miami", title: "Open-Concept Kitchen Remodel" },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Selected Work</span>
          <h1>Projects</h1>
          <p>
            This demo site showcases the categories Citco Construction builds in. Real job
            photography and case studies are added as they&rsquo;re brought over from the
            company archive.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="proj" key={project.title}>
                <div className="ph">
                  <img
                    src="/images/placeholder/project-4x3.png"
                    alt={`Placeholder — ${project.title}`}
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <span className="tag">{project.tag}</span>
                  <h4>{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
