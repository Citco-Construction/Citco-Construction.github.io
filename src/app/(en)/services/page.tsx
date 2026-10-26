import type { Metadata } from "next";
import { Breadcrumbs } from "@/app/breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { pageBreadcrumbItems, pageBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "General Contracting Services in Miami-Dade",
  description:
    "Residential additions, major renovations, kitchen remodels, and bathroom remodels from a licensed general contractor serving Coral Gables and Miami-Dade, FL.",
  path: "/services",
  locale: "en",
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint: JSON-LD injection is the standard pattern for structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageBreadcrumbSchema("services", "/services", "en")),
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={pageBreadcrumbItems("services", "/services", "en")} />
          <span className="eyebrow">What We Build</span>
          <h1>General contracting services for Miami-Dade.</h1>
          <p>
            Citco Construction is a licensed general contractor focused on residential work in Coral
            Gables and across Miami-Dade: additions, major renovations, and full kitchen and
            bathroom remodels, each run with the same disciplined process from first consult to
            final walkthrough.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="services-grid">
            <div className="service-card service-primary">
              <h3>Additions &amp; Major Renovations</h3>
              <p>
                Expanding a home or reworking it top to bottom: structural changes, new square
                footage, and full-scope renovations that touch every room.
              </p>
              <ul>
                <li>Room &amp; Second-Story Additions</li>
                <li>Whole-Home Renovations</li>
                <li>Structural &amp; Layout Changes</li>
                <li>Permit Coordination Across Miami-Dade</li>
              </ul>
            </div>
            <div className="service-card">
              <span className="tagnum">Kitchens</span>
              <h3>Kitchen Remodels</h3>
              <p>Full kitchen remodels built around how a family actually cooks and gathers.</p>
              <ul>
                <li>Layout &amp; Cabinetry Planning</li>
                <li>Countertops &amp; Appliances</li>
                <li>Plumbing &amp; Electrical Rework</li>
              </ul>
            </div>
            <div className="service-card">
              <span className="tagnum">Bathrooms</span>
              <h3>Bathroom Remodels</h3>
              <p>Primary and guest bathroom remodels, from fixtures to finishes.</p>
              <ul>
                <li>Primary Suite Remodels</li>
                <li>Guest &amp; Powder Baths</li>
                <li>Tile, Fixtures &amp; Waterproofing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
