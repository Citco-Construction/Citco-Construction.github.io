import type { Metadata } from "next";
import { Breadcrumbs } from "@/app/breadcrumbs";
import { ClockIcon, FileIcon, MailIcon, PhoneIcon, PinIcon } from "@/app/contact-icons";
import { pageMetadata } from "@/lib/metadata";
import { pageBreadcrumbItems, pageBreadcrumbSchema } from "@/lib/schema";
import { addressMapsUrl, siteConfig, telHref } from "@/lib/site";
import { ContactForm } from "../../contact-form";

export const metadata: Metadata = pageMetadata({
  title: "Contacte a un Contratista General en Coral Gables",
  description:
    "Póngase en contacto con Citco Construction, contratista general que sirve a Coral Gables y Miami-Dade, FL.",
  path: "/contact",
  locale: "es",
});

export default function ContactPageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint: JSON-LD injection is the standard pattern for structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageBreadcrumbSchema("contact", "/contact", "es")),
        }}
      />
      <section className="page-hero">
        <div className="wrap contact-grid">
          <div>
            <Breadcrumbs items={pageBreadcrumbItems("contact", "/contact", "es")} />
            <span className="eyebrow">Póngase en Contacto</span>
            <h1
              style={{
                fontSize: "clamp(28px,3.4vw,38px)",
                color: "var(--ink)",
                margin: "16px 0 18px",
              }}
            >
              Inicie una conversación con Citco.
            </h1>
            <p
              style={{
                color: "var(--ink-dim)",
                fontSize: "15.5px",
                marginBottom: 6,
                maxWidth: 440,
              }}
            >
              Cada proyecto comienza con una conversación directa, no con un centro de llamadas.
              Cuéntenos sobre su ampliación, renovación, cocina o baño.
            </p>
            <div style={{ marginTop: 8 }}>
              <div className="info-row">
                <div className="ico">
                  <PinIcon />
                </div>
                <div>
                  <h5>Oficina</h5>
                  <a href={addressMapsUrl} target="_blank" rel="noreferrer">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </a>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">
                  <PhoneIcon />
                </div>
                <div>
                  <h5>Teléfono</h5>
                  <p>
                    Oficina <a href={telHref(siteConfig.phoneOffice)}>{siteConfig.phoneOffice}</a>
                  </p>
                  <p>
                    Móvil <a href={telHref(siteConfig.phoneMobile)}>{siteConfig.phoneMobile}</a>
                  </p>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">
                  <MailIcon />
                </div>
                <div>
                  <h5>Correo Electrónico</h5>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">
                  <ClockIcon />
                </div>
                <div>
                  <h5>Horario</h5>
                  <p>Lunes a viernes, 9am-5pm</p>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">
                  <FileIcon />
                </div>
                <div>
                  <h5>Licencia</h5>
                  <p>
                    {siteConfig.license.jurisdiction} {siteConfig.license.number},{" "}
                    {siteConfig.license.type}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm locale="es" />
        </div>
      </section>
    </>
  );
}
