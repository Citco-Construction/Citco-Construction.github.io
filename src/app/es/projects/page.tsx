import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { pageBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Proyectos",
  description:
    "Una muestra de las ampliaciones, renovaciones, cocinas y baños que construye Citco Construction.",
  path: "/projects",
  locale: "es",
});

const projects = [
  { tag: "Ampliación · Coral Gables", title: "Ampliación de Segundo Piso" },
  { tag: "Renovación · Coral Gables", title: "Renovación Completa del Hogar" },
  { tag: "Cocina · Coral Gables", title: "Remodelación de Cocina a Medida" },
  { tag: "Baño · Miami", title: "Remodelación de Baño Principal" },
  { tag: "Ampliación · Coconut Grove", title: "Ampliación en la Parte Trasera" },
  { tag: "Cocina · South Miami", title: "Remodelación de Cocina Abierta" },
];

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
          <span className="eyebrow">Trabajos Seleccionados</span>
          <h1>Proyectos</h1>
          <p>
            Este sitio de demostración muestra las categorías en las que trabaja Citco Construction.
            Las fotos reales y los casos de estudio se incorporan a medida que se trasladan desde el
            archivo de la empresa.
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
                    alt={`Marcador de posición — ${project.title}`}
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
