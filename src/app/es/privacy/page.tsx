import type { Metadata } from "next";
import { Breadcrumbs } from "@/app/breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { pageBreadcrumbItems, pageBreadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidad",
  description: "Cómo maneja Citco Construction la información que usted comparte con nosotros.",
  path: "/privacy",
  locale: "es",
});

export default function PrivacyPageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint: JSON-LD injection is the standard pattern for structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageBreadcrumbSchema("privacy", "/privacy", "es")),
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={pageBreadcrumbItems("privacy", "/privacy", "es")} />
          <span className="eyebrow">Su Información</span>
          <h1>Política de Privacidad</h1>
          <p>Última actualización: octubre de 2026.</p>
        </div>
      </section>

      <section>
        <div className="wrap about-copy" style={{ maxWidth: 720 }}>
          <p>
            <strong>Qué recopilamos.</strong> Cuando envía el formulario de contacto en este sitio,
            recibimos su nombre, correo electrónico, tipo de proyecto y los detalles que decida
            compartir sobre su proyecto.
          </p>
          <p>
            <strong>Cómo lo usamos.</strong> Usamos esa información para un solo propósito: ponernos
            en contacto con usted y conversar sobre su proyecto. No lo agregamos a una lista de
            correo, no construimos un perfil de marketing, ni lo usamos para nada más allá de
            responder a su consulta.
          </p>
          <p>
            <strong>Lo que no hacemos.</strong> No vendemos ni compartimos su información con
            terceros. Este sitio no utiliza análisis, píxeles de seguimiento ni cookies
            publicitarias — no rastreamos a los visitantes.
          </p>
          <p>
            <strong>Preguntas.</strong> Escríbanos a{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> con cualquier pregunta
            sobre esta política o su información.
          </p>
        </div>
      </section>
    </>
  );
}
