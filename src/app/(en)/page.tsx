import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import { ui } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "General Contractor in Coral Gables and Miami-Dade",
  description: siteConfig.shortDescription,
  path: "/",
  locale: "en",
});

// The three Chawla/Burnstein/Kern kitchen remodels are the first entries in projects.ts.
const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-top">
            <div>
              <span className="eyebrow">Coral Gables &amp; Greater Miami · Est. 1982</span>
              <h1>Additions and renovations, done the way they should be done.</h1>
              <p className="lede">
                Citco Construction is a family-owned general contractor delivering residential
                additions, major renovations, kitchens, and bathrooms across Miami-Dade, with
                careful planning and honest scheduling.
              </p>
            </div>
            <div className="hero-side">
              <p style={{ color: "var(--ink-dim)", fontSize: "15.5px" }}>
                Family owned and operated since 1982, holding an active Florida General Contractor
                license.
              </p>
              <div className="badge">
                <span className="dot" />
                {ui.seHablaEspanol.en}
              </div>
              <div className="hero-ctas">
                <Link href="/contact" className="btn btn-solid">
                  Request a Consultation
                </Link>
                <Link href="/projects" className="btn btn-line">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap" style={{ paddingBottom: 0 }}>
          <div className="hero-photo">
            <img
              src="/images/hero-kitchen.jpg"
              alt="A Citco Construction kitchen remodel with an ocean view"
              loading="eager"
            />
          </div>
        </div>
        <div className="wrap">
          <div className="hero-stats">
            <div>
              <div className="num">40+</div>
              <div className="label">Years Licensed</div>
            </div>
            <div>
              <div className="num">CGC</div>
              <div className="label">Certified General Contractor</div>
            </div>
            <div>
              <div className="num">100%</div>
              <div className="label">Family Owned</div>
            </div>
            <div>
              <div className="num">Miami</div>
              <div className="label">Dade County Focus</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">What We Build</span>
            <h2>Residential additions, renovations, kitchens, and baths.</h2>
            <p>
              Our practice centers on residential construction — additions, major renovations, and
              full kitchen and bathroom remodels — for homeowners who expect a disciplined process
              behind their own home.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card service-primary">
              <span className="tagnum">01 — Primary Focus</span>
              <h3>Additions &amp; Major Renovations</h3>
              <p>
                End-to-end delivery for homeowners expanding or overhauling their living space —
                from permitting through final walkthrough.
              </p>
              <ul>
                <li>Room &amp; Second-Story Additions</li>
                <li>Whole-Home Renovations</li>
                <li>Structural &amp; Layout Changes</li>
              </ul>
            </div>
            <div className="service-card">
              <span className="tagnum">02 — Also Offered</span>
              <h3>Kitchens &amp; Bathrooms</h3>
              <p>Full remodels for the rooms that matter most, built around how you live.</p>
              <ul>
                <li>Custom Kitchen Remodels</li>
                <li>Primary &amp; Guest Bathrooms</li>
                <li>Cabinetry, Fixtures &amp; Finishes</li>
              </ul>
            </div>
            <div className="service-card">
              <span className="tagnum">03 — Owner&rsquo;s Rep</span>
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

      <section className="bg-2">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">How We Work</span>
            <h2>A straightforward process, well executed.</h2>
          </div>
          <div className="approach-grid">
            <div className="approach-item">
              <div className="idx">01</div>
              <h4>Consult &amp; Scope</h4>
              <p>
                A direct conversation with ownership to understand the project and set realistic
                expectations.
              </p>
            </div>
            <div className="approach-item">
              <div className="idx">02</div>
              <h4>Plan &amp; Permit</h4>
              <p>
                Detailed estimating and full permit coordination across Miami-Dade jurisdictions
                before a single trade mobilizes.
              </p>
            </div>
            <div className="approach-item">
              <div className="idx">03</div>
              <h4>Build &amp; Report</h4>
              <p>
                Disciplined scheduling, vetted trade partners, and transparent, regular progress
                reporting.
              </p>
            </div>
            <div className="approach-item">
              <div className="idx">04</div>
              <h4>Deliver &amp; Support</h4>
              <p>
                A clean final walkthrough, closeout documentation, and a team that still answers the
                phone after handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Selected Work</span>
            <h2>Recent kitchens, built by Citco.</h2>
            <p>A few finished kitchen remodels from across Miami-Dade.</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <Link href={`/projects/${project.slug}`} className="proj" key={project.slug}>
                <div className="ph">
                  <img
                    src={`/images/projects/${project.slug}/${project.images[0]}`}
                    alt={project.title.en}
                    loading="lazy"
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

      <section className="quote-sec">
        <blockquote>
          &ldquo;Citco treats every job site like it&rsquo;s their own home.&rdquo;
        </blockquote>
        <div className="who">
          Placeholder Client Quote — <b>Case Studies Added As Projects Close</b>
        </div>
      </section>
    </>
  );
}
