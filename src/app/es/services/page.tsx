import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { pageBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Servicios",
  description:
    "Ampliaciones residenciales, renovaciones mayores, remodelación de cocinas y baños por Citco Construction en Coral Gables, FL.",
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
          <span className="eyebrow">Qué Construimos</span>
          <h1>Servicios</h1>
          <p>
            Citco Construction se enfoca en trabajo residencial: ampliaciones, renovaciones mayores
            y remodelaciones completas de cocinas y baños — cada uno con el mismo proceso
            disciplinado, desde la primera consulta hasta la entrega final.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="services-grid">
            <div className="service-card service-primary">
              <span className="tagnum">01 — Enfoque Principal</span>
              <h3>Ampliaciones y Renovaciones Mayores</h3>
              <p>
                Ampliar una casa o renovarla por completo — cambios estructurales, nuevos metros
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
              <span className="tagnum">02 — Cocinas</span>
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
              <span className="tagnum">03 — Baños</span>
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

      <section className="bg-2">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Representante del Propietario</span>
            <h2>Preconstrucción y consultoría.</h2>
            <p>
              Presupuestos, cronogramas y asesoría de permisos antes de derribar la primera pared.
            </p>
          </div>
          <div className="approach-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="approach-item">
              <div className="idx">01</div>
              <h4>Viabilidad y Estimados</h4>
              <p>
                Una visión realista del alcance, el costo y el cronograma antes de comprometerse.
              </p>
            </div>
            <div className="approach-item">
              <div className="idx">02</div>
              <h4>Gestión de Permisos</h4>
              <p>
                Coordinación completa con las oficinas de permisos de Miami-Dade y Coral Gables.
              </p>
            </div>
            <div className="approach-item">
              <div className="idx">03</div>
              <h4>Gestión de Proveedores</h4>
              <p>
                Socios de oficio verificados, mantenidos bajo un solo estándar y gestionados por la
                gerencia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
