import type { Metadata } from "next";
import { Breadcrumbs } from "@/app/breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { pageBreadcrumbItems, pageBreadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Citco Construction handles the information you share with us.",
  path: "/privacy",
  locale: "en",
});

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint: JSON-LD injection is the standard pattern for structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageBreadcrumbSchema("privacy", "/privacy", "en")),
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={pageBreadcrumbItems("privacy", "/privacy", "en")} />
          <span className="eyebrow">Your Information</span>
          <h1>Privacy Policy</h1>
          <p>Last updated October 2026.</p>
        </div>
      </section>

      <section>
        <div className="wrap about-copy" style={{ maxWidth: 720 }}>
          <p>
            <strong>What we collect.</strong> When you submit the contact form on this site, we
            receive your name, email address, project type, and whatever details you choose to share
            about your project.
          </p>
          <p>
            <strong>How we use it.</strong> We use that information for one purpose: to get in touch
            with you and discuss your project. We don&rsquo;t add you to a mailing list, build a
            marketing profile, or use it for anything beyond responding to your inquiry.
          </p>
          <p>
            <strong>What we don&rsquo;t do.</strong> We don&rsquo;t sell or share your information
            with third parties. This site doesn&rsquo;t run analytics, tracking pixels, or
            advertising cookies — we don&rsquo;t track visitors.
          </p>
          <p>
            <strong>Questions.</strong> Email us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> with any questions about
            this policy or your information.
          </p>
        </div>
      </section>
    </>
  );
}
