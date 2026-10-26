import type { Metadata } from "next";
import Image from "next/image";
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
          <div className="sec-head">
            <span className="eyebrow">Qué Construimos</span>
            <h2>Ampliaciones, renovaciones, cocinas y baños residenciales.</h2>
            <p>
              Nuestra práctica se centra en la construcción residencial: ampliaciones, renovaciones
              mayores y remodelaciones completas de cocinas y baños para propietarios que esperan el
              mismo rigor en su propia casa.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card service-primary">
              <span className="tagnum">Enfoque Principal</span>
              <h3>Ampliaciones y Renovaciones Mayores</h3>
              <p>
                Entrega integral para propietarios que amplían o renuevan por completo su espacio,
                desde los permisos hasta la entrega final.
              </p>
              <ul>
                <li>Ampliaciones de Habitaciones y Segundo Piso</li>
                <li>Renovaciones Completas del Hogar</li>
                <li>Cambios Estructurales y de Distribución</li>
              </ul>
            </div>
            <div className="service-card">
              <span className="tagnum">También Ofrecemos</span>
              <h3>Cocinas y Baños</h3>
              <p>Remodelaciones completas de los espacios más importantes de su hogar.</p>
              <ul>
                <li>Remodelación de Cocinas a Medida</li>
                <li>Baños Principales y de Invitados</li>
                <li>Gabinetes, Accesorios y Acabados</li>
              </ul>
            </div>
            <div className="service-card">
              <span className="tagnum">Representante del Propietario</span>
              <h3>Preconstrucción y Consultoría</h3>
              <p>
                Presupuestos, cronogramas y asesoría de permisos antes de derribar la primera pared.
              </p>
              <ul>
                <li>Viabilidad y Estimados</li>
                <li>Gestión de Permisos</li>
                <li>Gestión de Proveedores y Subcontratistas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Galería</span>
            <h2>Trabajo terminado.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <Link href={`/es/projects/${project.slug}`} className="proj" key={project.slug}>
                <div className="ph">
                  <Image
                    src={`/images/projects/${project.slug}/${project.images[0]}`}
                    alt={project.title.es}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 920px) 50vw, 33vw"
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
