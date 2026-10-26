import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/app/breadcrumbs";
import { LinkedInIcon } from "@/app/social-icons";
import { pageMetadata } from "@/lib/metadata";
import { pageBreadcrumbItems, pageBreadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Miami-Dade General Contractor Since 1982",
  description:
    "Citco Construction, Inc. is a family-owned general contractor serving Coral Gables and Miami-Dade, FL since 1982.",
  path: "/about",
  locale: "en",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint: JSON-LD injection is the standard pattern for structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageBreadcrumbSchema("about", "/about", "en")),
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={pageBreadcrumbItems("about", "/about", "en")} />
          <span className="eyebrow">Family Owned Since 1982</span>
          <h1>Built by the Vidal family, for Miami.</h1>
          <p>Four decades of residential construction in Coral Gables and greater Miami-Dade.</p>
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
            <h3>{siteConfig.officers[1].name}</h3>
            <p className="role">
              {siteConfig.officers[1].title}, {siteConfig.legalName}
            </p>
            <p className="tenure">Since 2004</p>
            <a
              href={siteConfig.officers[1].linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="profile-linkedin"
              aria-label={`${siteConfig.officers[1].name} on LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap about-grid">
          <div className="about-copy">
            <p>
              <strong>Citco Construction, Inc.</strong> is a family-owned general contracting firm
              rooted in Coral Gables, founded in {siteConfig.foundingYear}. The company operates
              under the license of <strong>{siteConfig.license.holder}</strong>, a{" "}
              {siteConfig.license.type} active in the {siteConfig.license.jurisdiction}.
            </p>
            <p>
              Four decades in, the approach hasn&rsquo;t changed: give every client close attention,
              hold every trade partner to a high standard, and never let a project outrun its plan.
            </p>
            <p>
              Today Citco focuses on{" "}
              <strong>residential additions, major renovations, kitchens, and bathrooms</strong>{" "}
              across Miami-Dade: work on the homes people actually live in.
            </p>
            <p>
              <strong>{siteConfig.officers[0].name}</strong> ({siteConfig.officers[0].title}) and{" "}
              <strong>{siteConfig.officers[1].name}</strong> ({siteConfig.officers[1].title}).
            </p>
          </div>
          <div className="license-card">
            <div className="lc-head">
              <span className="eyebrow">Licensing &amp; Standing</span>
            </div>
            <div className="license-body">
              <div className="license-row">
                <span className="k">Business Name</span>
                <span className="v">{siteConfig.legalName}</span>
              </div>
              <div className="license-row">
                <span className="k">License Holder</span>
                <span className="v">{siteConfig.license.holder}</span>
              </div>
              <div className="license-row">
                <span className="k">License Type</span>
                <span className="v">{siteConfig.license.type}</span>
              </div>
              <div className="license-row">
                <span className="k">License Number</span>
                <span className="v">{siteConfig.license.number}</span>
              </div>
              <div className="license-row">
                <span className="k">Founded</span>
                <span className="v">{siteConfig.foundingYear}</span>
              </div>
              <div className="license-row">
                <span className="k">Jurisdiction</span>
                <span className="v">{siteConfig.license.jurisdiction}</span>
              </div>
              <div className="license-row">
                <span className="k">Location</span>
                <span className="v">
                  {siteConfig.address.city}, {siteConfig.address.state}
                </span>
              </div>
            </div>
            <div className="license-badge">
              <span className="dot" />
              Active and current with the Florida DBPR
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
                alt="A Citco Construction kitchen and dining remodel"
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 920px) 50vw, 33vw"
              />
            </div>
            <div className="gallery-item">
              <Image
                src="/images/about-exterior.jpg"
                alt="A Coral Gables home exterior built by Citco Construction"
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 920px) 50vw, 33vw"
              />
            </div>
            <div className="gallery-item">
              <Image
                src="/images/about-living-room.jpg"
                alt="A living room remodel by Citco Construction"
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
