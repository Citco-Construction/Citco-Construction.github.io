import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/app/breadcrumbs";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { pageBreadcrumbItems, pageBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Completed Projects in Coral Gables and Miami",
  description:
    "Additions, renovations, kitchens, and bathrooms built by Citco Construction, a general contractor serving Coral Gables and Miami-Dade, FL.",
  path: "/projects",
  locale: "en",
});

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint: JSON-LD injection is the standard pattern for structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageBreadcrumbSchema("projects", "/projects", "en")),
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={pageBreadcrumbItems("projects", "/projects", "en")} />
          <span className="eyebrow">Selected Work</span>
          <h1>Projects across Coral Gables and Miami-Dade.</h1>
          <p>
            A sample of the jobs Citco Construction, a Miami-Dade general contractor, has built.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="projects-grid">
            {projects.map((project) => (
              <Link href={`/projects/${project.slug}`} className="proj" key={project.slug}>
                <div className="ph">
                  <img
                    src={`/images/projects/${project.slug}/${project.images[0]}`}
                    alt={project.title.en}
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <span className="tag">{project.category.en}</span>
                  <h4>{project.title.en}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
