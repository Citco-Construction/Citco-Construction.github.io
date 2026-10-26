import type { Metadata } from "next";
import { Breadcrumbs } from "@/app/breadcrumbs";
import { ClockIcon, FileIcon, MailIcon, PhoneIcon, PinIcon } from "@/app/contact-icons";
import { ui } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { pageBreadcrumbItems, pageBreadcrumbSchema } from "@/lib/schema";
import { addressMapsUrl, siteConfig, telHref } from "@/lib/site";
import { ContactForm } from "../../contact-form";

export const metadata: Metadata = pageMetadata({
  title: "Contact a Coral Gables General Contractor",
  description:
    "Get in touch with Citco Construction, a general contractor serving Coral Gables and Miami-Dade, FL.",
  path: "/contact",
  locale: "en",
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint: JSON-LD injection is the standard pattern for structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageBreadcrumbSchema("contact", "/contact", "en")),
        }}
      />
      <section className="bg-2">
        <div className="wrap contact-grid" style={{ paddingTop: 96 }}>
          <div>
            <Breadcrumbs items={pageBreadcrumbItems("contact", "/contact", "en")} />
            <span className="eyebrow">Get In Touch</span>
            <h1
              style={{
                fontSize: "clamp(28px,3.4vw,38px)",
                color: "var(--ink)",
                margin: "16px 0 18px",
              }}
            >
              Start a conversation with Citco.
            </h1>
            <p
              style={{
                color: "var(--ink-dim)",
                fontSize: "15.5px",
                marginBottom: 6,
                maxWidth: 440,
              }}
            >
              Every project starts with a direct conversation, not a call center. Tell us about your
              addition, renovation, kitchen, or bathroom.
            </p>
            <p style={{ color: "var(--ink-dim)", fontSize: "15.5px", maxWidth: 440 }}>
              {ui.seHablaEspanol.en}
            </p>

            <div style={{ marginTop: 8 }}>
              <div className="info-row">
                <div className="ico">
                  <PinIcon />
                </div>
                <div>
                  <h5>Office</h5>
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
                  <h5>Phone</h5>
                  <p>
                    Office <a href={telHref(siteConfig.phoneOffice)}>{siteConfig.phoneOffice}</a>
                  </p>
                  <p>
                    Mobile <a href={telHref(siteConfig.phoneMobile)}>{siteConfig.phoneMobile}</a>
                  </p>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">
                  <MailIcon />
                </div>
                <div>
                  <h5>Email</h5>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">
                  <ClockIcon />
                </div>
                <div>
                  <h5>Hours</h5>
                  <p>Monday-Friday, 9am-5pm</p>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">
                  <FileIcon />
                </div>
                <div>
                  <h5>License</h5>
                  <p>
                    {siteConfig.license.jurisdiction} {siteConfig.license.number},{" "}
                    {siteConfig.license.type}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm locale="en" />
        </div>
      </section>
    </>
  );
}
