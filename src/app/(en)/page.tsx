import type { Metadata } from "next";
import Image from "next/image";
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
        <div className="hero-media">
          <div className="hero-photo-layer">
            <Image
              src="/images/hero-kitchen.jpg"
              alt="A Citco Construction kitchen remodel with an ocean view"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-scrim" />
          </div>
          <div className="hero-overlay wrap">
            <span className="eyebrow">
              Coral Gables<span className="eyebrow-extra"> &amp; Greater Miami</span> · Est. 1982
            </span>
            <h1>Additions and renovations, done the way they should be done.</h1>
            <p className="lede">
              Citco Construction is a family-owned general contractor delivering residential
              additions, major renovations, kitchens, and bathrooms across Miami-Dade, with careful
              planning and honest scheduling.
            </p>
            <div className="badge">
              <span className="dot" />
              <span>
                {ui.seHablaEspanolShort.en}
                <span className="badge-extra">{ui.seHablaEspanolExtra.en}</span>
              </span>
            </div>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-solid">
                Request a Consultation
              </Link>
              <Link href="/projects#gallery" className="btn btn-line">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="wrap">
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
              <div className="label">Serving Dade County</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Selected Work</span>
            <h2>Citco Spotlight</h2>
            <p>A few finished kitchen remodels from across Miami-Dade.</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
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

      {/* <section className="quote-sec">
        <blockquote>
          &ldquo;Citco treats every job site like it&rsquo;s their own home.&rdquo;
        </blockquote>
        <div className="who">
          Placeholder client quote. <b>Case studies added as projects close.</b>
        </div>
      </section> */}
    </>
  );
}
