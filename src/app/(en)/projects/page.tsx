import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/app/breadcrumbs";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { pageBreadcrumbItems, pageBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Completed Projects in Coral Gables and Miami",
  description:
    "Additions, renovations, kitchens, and bathrooms built by Citco Construction, a general contractor serving Coral Gables and Miami-Dade, FL.",
  path: "/projects",
  locale: "en",
});

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint: JSON-LD injection is the standard pattern for structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageBreadcrumbSchema("projects", "/projects", "en")),
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={pageBreadcrumbItems("projects", "/projects", "en")} />
          <span className="eyebrow">Selected Work</span>
          <h1>Projects across Coral Gables and Miami-Dade.</h1>
          <p>
            A sample of the jobs Citco Construction, a Miami-Dade general contractor, has built.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">What We Build</span>
            <h2>Residential additions, renovations, kitchens, and baths.</h2>
            <p>
              Our practice centers on residential construction: additions, major renovations, and
              full kitchen and bathroom remodels for homeowners who expect a disciplined process
              behind their own home.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card service-primary">
              <h3>Additions &amp; Major Renovations</h3>
              <p>
                End-to-end delivery for homeowners expanding or overhauling their living space, from
                permitting through final walkthrough.
              </p>
              <ul>
                <li>Room &amp; Second-Story Additions</li>
                <li>Whole-Home Renovations</li>
                <li>Structural &amp; Layout Changes</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Kitchens &amp; Bathrooms</h3>
              <p>Full remodels for the rooms that matter most, built around how you live.</p>
              <ul>
                <li>Custom Kitchen Remodels</li>
                <li>Primary &amp; Guest Bathrooms</li>
                <li>Cabinetry, Fixtures &amp; Finishes</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Pre-Construction &amp; Consulting</h3>
              <p>
                Budgeting, scheduling, and permitting guidance before the first wall comes down.
              </p>
              <ul>
                <li>Feasibility &amp; Estimating</li>
                <li>Permit Expediting</li>
                <li>Vendor &amp; Trade Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Gallery</span>
            <h2>Recent work</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <Link href={`/projects/${project.slug}`} className="proj" key={project.slug}>
                <div className="ph">
                  <Image
                    src={`/images/projects/${project.slug}/${project.images[0]}`}
                    alt={project.title.en}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 920px) 50vw, 33vw"
                  />
                </div>
                <div className="info">
                  <span className="tag">{project.category.en}</span>
                  <h4>{project.title.en}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
