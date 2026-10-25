import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Residential additions, major renovations, kitchen remodels, and bathroom remodels from Citco Construction in Coral Gables, FL.",
  path: "/services",
  locale: "en",
});

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">What We Build</span>
          <h1>Services</h1>
          <p>
            Citco Construction focuses on residential work: additions, major renovations, and
            full kitchen and bathroom remodels — each run with the same disciplined process from
            first consult to final walkthrough.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="services-grid">
            <div className="service-card service-primary">
              <span className="tagnum">01 — Primary Focus</span>
              <h3>Additions &amp; Major Renovations</h3>
              <p>
                Expanding a home or reworking it top to bottom — structural changes, new square
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
              <span className="tagnum">02 — Kitchens</span>
              <h3>Kitchen Remodels</h3>
              <p>Full kitchen remodels built around how a family actually cooks and gathers.</p>
              <ul>
                <li>Layout &amp; Cabinetry Planning</li>
                <li>Countertops &amp; Appliances</li>
                <li>Plumbing &amp; Electrical Rework</li>
              </ul>
            </div>
            <div className="service-card">
              <span className="tagnum">03 — Bathrooms</span>
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

      <section className="bg-2">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Owner&rsquo;s Rep</span>
            <h2>Pre-construction &amp; consulting.</h2>
            <p>Budgeting, scheduling, and permitting guidance before the first wall comes down.</p>
          </div>
          <div className="approach-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="approach-item">
              <div className="idx">01</div>
              <h4>Feasibility &amp; Estimating</h4>
              <p>A realistic read on scope, cost, and timeline before you commit.</p>
            </div>
            <div className="approach-item">
              <div className="idx">02</div>
              <h4>Permit Expediting</h4>
              <p>Full coordination across Miami-Dade and Coral Gables permitting offices.</p>
            </div>
            <div className="approach-item">
              <div className="idx">03</div>
              <h4>Vendor &amp; Trade Management</h4>
              <p>Vetted trade partners held to a single standard, managed by ownership.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
