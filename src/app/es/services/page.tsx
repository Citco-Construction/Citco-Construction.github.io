import type { Metadata } from "next";
import { Breadcrumbs } from "@/app/breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { pageBreadcrumbItems, pageBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Servicios de Contratista General en Miami-Dade",
  description:
    "Ampliaciones residenciales, renovaciones mayores, remodelación de cocinas y baños por un contratista general licenciado que sirve a Coral Gables y Miami-Dade, FL.",
  path: "/services",
  locale: "es",
});

export default function ServicesPageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint: JSON-LD injection is the standard pattern for structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageBreadcrumbSchema("services", "/services", "es")),
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={pageBreadcrumbItems("services", "/services", "es")} />
          <span className="eyebrow">Qué Construimos</span>
          <h1>Servicios de contratista general para Miami-Dade.</h1>
          <p>
            Citco Construction es un contratista general licenciado enfocado en trabajo residencial
            en Coral Gables y en todo Miami-Dade: ampliaciones, renovaciones mayores y
            remodelaciones completas de cocinas y baños, cada uno con el mismo proceso disciplinado,
            desde la primera consulta hasta la entrega final.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="services-grid">
            <div className="service-card service-primary">
              <h3>Ampliaciones y Renovaciones Mayores</h3>
              <p>
                Ampliar una casa o renovarla por completo: cambios estructurales, nuevos metros
                cuadrados y renovaciones integrales que abarcan toda la vivienda.
              </p>
              <ul>
                <li>Ampliaciones de Habitaciones y Segundo Piso</li>
                <li>Renovaciones Completas del Hogar</li>
                <li>Cambios Estructurales y de Distribución</li>
                <li>Coordinación de Permisos en Miami-Dade</li>
              </ul>
            </div>
            <div className="service-card">
              <span className="tagnum">Cocinas</span>
              <h3>Remodelación de Cocinas</h3>
              <p>
                Remodelaciones completas de cocina, pensadas para cómo vive realmente cada familia.
              </p>
              <ul>
                <li>Planificación de Distribución y Gabinetes</li>
                <li>Encimeras y Electrodomésticos</li>
                <li>Plomería y Electricidad</li>
              </ul>
            </div>
            <div className="service-card">
              <span className="tagnum">Baños</span>
              <h3>Remodelación de Baños</h3>
              <p>
                Remodelación de baños principales y de invitados, desde accesorios hasta acabados.
              </p>
              <ul>
                <li>Remodelación de Baño Principal</li>
                <li>Baños de Invitados y de Cortesía</li>
                <li>Azulejos, Accesorios e Impermeabilización</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
