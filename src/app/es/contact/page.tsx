import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { pageBreadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "../../contact-form";

export const metadata: Metadata = pageMetadata({
  title: "Contacto",
  description: "Póngase en contacto con Citco Construction en Coral Gables, FL.",
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
      <section className="bg-2">
        <div className="wrap contact-grid" style={{ paddingTop: 96 }}>
          <div>
            <span className="eyebrow">Póngase en Contacto</span>
            <h1
              style={{
                fontSize: "clamp(28px,3.4vw,38px)",
                color: "var(--ink)",
                margin: "16px 0 18px",
              }}
            >
              Inicie una conversación con la gerencia.
            </h1>
            <p
              style={{
                color: "var(--ink-dim)",
                fontSize: "15.5px",
                marginBottom: 6,
                maxWidth: 440,
              }}
            >
              Cada proyecto comienza con una conversación directa — no con un centro de llamadas.
              Cuéntenos sobre su ampliación, renovación, cocina o baño.
            </p>
            <div style={{ marginTop: 8 }}>
              <div className="info-row">
                <div className="ico">◈</div>
                <div>
                  <h5>Oficina</h5>
                  <p>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </p>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">☏</div>
                <div>
                  <h5>Teléfono</h5>
                  <p>Oficina {siteConfig.phoneOffice}</p>
                  <p>Móvil {siteConfig.phoneMobile}</p>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">✉</div>
                <div>
                  <h5>Correo Electrónico</h5>
                  <p>{siteConfig.email}</p>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">◷</div>
                <div>
                  <h5>Horario</h5>
                  <p>Lunes a viernes, 9am–5pm</p>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">§</div>
                <div>
                  <h5>Licencia</h5>
                  <p>
                    {siteConfig.license.jurisdiction} {siteConfig.license.number} ·{" "}
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
