import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/app/breadcrumbs";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { projectBreadcrumbItems, projectBreadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return pageMetadata({ title: "Proyecto", description: "", path: "/projects", locale: "es" });
  }

  return pageMetadata({
    title: project.title.es,
    description: `Trabajo de ${project.category.es.toLowerCase()} realizado por Citco Construction en Miami-Dade, FL.`,
    path: `/projects/${project.slug}`,
    locale: "es",
  });
}

export default async function ProjectDetailPageEs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint: JSON-LD injection is the standard pattern for structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectBreadcrumbSchema(project.title.es, project.slug, "es")),
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={projectBreadcrumbItems(project.title.es, project.slug, "es")} />
          <span className="eyebrow">{project.category.es}</span>
          <h1>{project.title.es}</h1>
          <p>
            Trabajo de {project.category.es.toLowerCase()} realizado por Citco Construction en
            Miami-Dade, FL.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="gallery-grid">
            {project.images.map((image, i) => (
              <div className="gallery-item" key={image}>
                <img
                  src={`/images/projects/${project.slug}/${image}`}
                  alt={`${project.title.es}, vista ${i + 1} de ${project.images.length}`}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
