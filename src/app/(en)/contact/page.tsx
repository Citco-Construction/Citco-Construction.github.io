import type { Metadata } from "next";
import { ui } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "../../contact-form";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Citco Construction in Coral Gables, FL.",
  path: "/contact",
  locale: "en",
});

export default function ContactPage() {
  return (
    <section className="bg-2">
      <div className="wrap contact-grid" style={{ paddingTop: 96 }}>
        <div>
          <span className="eyebrow">Get In Touch</span>
          <h2 style={{ fontSize: "clamp(28px,3.4vw,38px)", color: "var(--ink)", margin: "16px 0 18px" }}>
            Start a conversation with ownership.
          </h2>
          <p style={{ color: "var(--ink-dim)", fontSize: "15.5px", marginBottom: 6, maxWidth: 440 }}>
            Every project starts with a direct conversation — not a call center. Tell us about
            your addition, renovation, kitchen, or bathroom.
          </p>
          <p style={{ color: "var(--ink-dim)", fontSize: "15.5px", maxWidth: 440 }}>
            {ui.seHablaEspanol.en}
          </p>

          <div style={{ marginTop: 8 }}>
            <div className="info-row">
              <div className="ico">◈</div>
              <div>
                <h5>Office</h5>
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
                <h5>Phone</h5>
                <p>Office {siteConfig.phoneOffice}</p>
                <p>Mobile {siteConfig.phoneMobile}</p>
              </div>
            </div>
            <div className="info-row">
              <div className="ico">✉</div>
              <div>
                <h5>Email</h5>
                <p>{siteConfig.email}</p>
              </div>
            </div>
            <div className="info-row">
              <div className="ico">§</div>
              <div>
                <h5>License</h5>
                <p>
                  {siteConfig.license.jurisdiction} {siteConfig.license.number} ·{" "}
                  {siteConfig.license.type}
                </p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm locale="en" />
      </div>
    </section>
  );
}
