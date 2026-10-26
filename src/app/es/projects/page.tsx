import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/app/breadcrumbs";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { pageBreadcrumbItems, pageBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Proyectos en Coral Gables y Miami",
  description:
    "Ampliaciones, renovaciones, cocinas y baños construidos por Citco Construction, un contratista general que sirve a Coral Gables y Miami-Dade, FL.",
  path: "/projects",
  locale: "es",
});

export default function ProjectsPageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint: JSON-LD injection is the standard pattern for structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageBreadcrumbSchema("projects", "/projects", "es")),
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={pageBreadcrumbItems("projects", "/projects", "es")} />
          <span className="eyebrow">Trabajos Seleccionados</span>
          <h1>Proyectos en Coral Gables y Miami-Dade.</h1>
          <p>
            Una muestra de los trabajos que Citco Construction, contratista general de Miami-Dade,
            ha realizado.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="projects-grid">
            {projects.map((project) => (
              <Link href={`/es/projects/${project.slug}`} className="proj" key={project.slug}>
                <div className="ph">
                  <img
                    src={`/images/projects/${project.slug}/${project.images[0]}`}
                    alt={project.title.es}
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <span className="tag">{project.category.es}</span>
                  <h4>{project.title.es}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
