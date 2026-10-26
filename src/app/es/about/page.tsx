import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/app/breadcrumbs";
import { LinkedInIcon } from "@/app/social-icons";
import { pageMetadata } from "@/lib/metadata";
import { pageBreadcrumbItems, pageBreadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contratista General en Miami-Dade Desde 1982",
  description:
    "Citco Construction, Inc. es un contratista general familiar que sirve a Coral Gables y Miami-Dade, FL desde 1982.",
  path: "/about",
  locale: "es",
});

export default function AboutPageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint: JSON-LD injection is the standard pattern for structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageBreadcrumbSchema("about", "/about", "es")),
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={pageBreadcrumbItems("about", "/about", "es")} />
          <span className="eyebrow">Empresa Familiar Desde 1982</span>
          <h1>Construido por la familia Vidal, para Miami.</h1>
          <p>Cuatro décadas de construcción residencial en Coral Gables y el Gran Miami-Dade.</p>
        </div>
      </section>

      <section>
        <div className="wrap profile-grid">
          <div className="profile-photo">
            <Image
              src="/images/chris-vidal.jpg"
              alt={siteConfig.officers[1].name}
              fill
              sizes="(max-width: 920px) 160px, 240px"
            />
          </div>
          <div className="profile-copy">
            <h3>
              {siteConfig.officers[1].name}
              <a
                href={siteConfig.officers[1].linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="profile-linkedin"
                aria-label={`${siteConfig.officers[1].name} en LinkedIn`}
              >
                <LinkedInIcon />
              </a>
            </h3>
            <p className="role">
              {siteConfig.officers[1].title}, {siteConfig.legalName}
            </p>
            <p className="tenure">Desde 2004</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap about-grid">
          <div className="about-copy">
            <p>
              <strong>Citco Construction, Inc.</strong> es una empresa de contratación general
              familiar con raíces en Coral Gables, fundada en {siteConfig.foundingYear}. La empresa
              opera bajo la licencia de <strong>{siteConfig.license.holder}</strong>, un{" "}
              {siteConfig.license.type} activo en el estado de Florida.
            </p>
            <p>
              Después de cuatro décadas, el enfoque no ha cambiado: dar a cada cliente atención
              cercana, exigir a cada socio de oficio un estándar alto y nunca dejar que un proyecto
              se salga de su plan.
            </p>
            <p>
              Hoy Citco se enfoca en{" "}
              <strong>ampliaciones residenciales, renovaciones mayores, cocinas y baños</strong> en
              todo Miami-Dade: trabajo en las casas donde la gente realmente vive.
            </p>
            <p>
              <strong>{siteConfig.officers[0].name}</strong> (Presidente) y{" "}
              <strong>{siteConfig.officers[1].name}</strong> (Vicepresidente, Tesorero).
            </p>
          </div>
          <div className="license-card">
            <div className="lc-head">
              <span className="eyebrow">Licencia y Estado</span>
            </div>
            <div className="license-body">
              <div className="license-row">
                <span className="k">Nombre Comercial</span>
                <span className="v">{siteConfig.legalName}</span>
              </div>
              <div className="license-row">
                <span className="k">Titular de la Licencia</span>
                <span className="v">{siteConfig.license.holder}</span>
              </div>
              <div className="license-row">
                <span className="k">Tipo de Licencia</span>
                <span className="v">{siteConfig.license.type}</span>
              </div>
              <div className="license-row">
                <span className="k">Número de Licencia</span>
                <span className="v">{siteConfig.license.number}</span>
              </div>
              <div className="license-row">
                <span className="k">Fundada</span>
                <span className="v">{siteConfig.foundingYear}</span>
              </div>
              <div className="license-row">
                <span className="k">Jurisdicción</span>
                <span className="v">{siteConfig.license.jurisdiction}</span>
              </div>
              <div className="license-row">
                <span className="k">Ubicación</span>
                <span className="v">
                  {siteConfig.address.city}, {siteConfig.address.state}
                </span>
              </div>
            </div>
            <div className="license-badge">
              <span className="dot" />
              Activa y vigente con el DBPR de Florida
            </div>
          </div>
        </div>
      </section>

      <section className="bg-2">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <div className="gallery-grid">
            <div className="gallery-item">
              <Image
                src="/images/about-kitchen.jpg"
                alt="Remodelación de cocina y comedor por Citco Construction"
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 920px) 50vw, 33vw"
              />
            </div>
            <div className="gallery-item">
              <Image
                src="/images/about-exterior.jpg"
                alt="Exterior de una casa en Coral Gables construida por Citco Construction"
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 920px) 50vw, 33vw"
              />
            </div>
            <div className="gallery-item">
              <Image
                src="/images/about-living-room.jpg"
                alt="Remodelación de sala por Citco Construction"
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 920px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
