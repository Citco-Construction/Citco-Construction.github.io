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
    return pageMetadata({ title: "Project", description: "", path: "/projects", locale: "en" });
  }

  return pageMetadata({
    title: project.title.en,
    description: `${project.category.en} completed by Citco Construction in Miami-Dade, FL.`,
    path: `/projects/${project.slug}`,
    locale: "en",
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint: JSON-LD injection is the standard pattern for structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectBreadcrumbSchema(project.title.en, project.slug, "en")),
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={projectBreadcrumbItems(project.title.en, project.slug, "en")} />
          <span className="eyebrow">{project.category.en}</span>
          <h1>{project.title.en}</h1>
          <p>{project.category.en} completed by Citco Construction in Miami-Dade, FL.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="gallery-grid">
            {project.images.map((image, i) => (
              <div className="gallery-item" key={image}>
                <img
                  src={`/images/projects/${project.slug}/${image}`}
                  alt={`${project.title.en}, view ${i + 1} of ${project.images.length}`}
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
