import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { type Locale, localizePath, nav, ui } from "@/lib/i18n";
import {
  addressMapsUrl,
  legalPages,
  siteConfig,
  sitePages,
  socialLinks,
  telHref,
} from "@/lib/site";
import { LinkedInIcon } from "./social-icons";

const socialIcons: Record<string, ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0Zm0 2.16c3.203 0 3.585.016 4.85.073 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.057 1.17-.253 1.805-.418 2.227-.22.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.057-1.816-.253-2.236-.418-.569-.22-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.06-1.649-.06-4.844 0-3.196.015-3.586.06-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03Zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162ZM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Zm7.846-10.405c0 .795-.645 1.44-1.44 1.44-.795 0-1.44-.645-1.44-1.44 0-.795.645-1.439 1.44-1.439.795-.001 1.44.644 1.44 1.439Z" />
    </svg>
  ),
  LinkedIn: <LinkedInIcon />,
  GitHub: (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
      <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.38 7.86 10.9 0.57 0.1 0.78-0.25 0.78-0.55 0-0.27-0.01-1.17-0.02-2.12-3.2 0.7-3.88-1.36-3.88-1.36-0.52-1.33-1.28-1.68-1.28-1.68-1.04-0.71 0.08-0.7 0.08-0.7 1.16 0.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36 0.96 0.1-0.74 0.4-1.25 0.73-1.54-2.56-0.29-5.25-1.28-5.25-5.7 0-1.26 0.45-2.29 1.19-3.1-0.12-0.29-0.52-1.46 0.11-3.05 0 0 0.97-0.31 3.18 1.18 0.92-0.26 1.91-0.38 2.89-0.38 0.98 0 1.97 0.13 2.89 0.38 2.21-1.49 3.18-1.18 3.18-1.18 0.63 1.59 0.23 2.76 0.11 3.05 0.74 0.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69 0.42 0.36 0.77 1.07 0.77 2.15 0 1.56-0.01 2.81-0.01 3.19 0 0.31 0.21 0.66 0.79 0.55C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35 0.5 12 0.5Z" />
    </svg>
  ),
};

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href={localizePath("/", locale)} className="brand">
              <Image
                src="/logo_header.png"
                alt={siteConfig.name}
                className="brand-logo"
                width={1732}
                height={536}
              />
            </Link>
            <span className="footer-tagline">{ui.familyOwnedSince[locale]}</span>
          </div>
          <div className="footer-links">
            <div className="footer-col footer-col-company">
              <h5>{locale === "en" ? "Company" : "Compañía"}</h5>
              <div className="footer-col-links">
                {[...sitePages.filter((page) => page.path !== "/"), ...legalPages].map((page) => (
                  <Link key={page.path} href={localizePath(page.path, locale)}>
                    {nav[page.labelKey][locale]}
                  </Link>
                ))}
              </div>
            </div>
            <div className="footer-col">
              <h5>{locale === "en" ? "Contact" : "Contacto"}</h5>
              <a
                href={addressMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-address"
                aria-label={locale === "en" ? "Open address in Maps" : "Abrir dirección en Maps"}
              >
                <svg
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.25 6.52 11.73 6.8 12 .2.2.5.3.7.3s.5-.1.7-.3c.28-.27 6.8-6.75 6.8-12C19.5 5.36 16.14 2 12 2Zm0 10.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z" />
                </svg>
                <span>{siteConfig.address.street}</span>
              </a>
              <p>
                <a href={telHref(siteConfig.phoneOffice)}>{siteConfig.phoneOffice}</a>
              </p>
            </div>
            <div className="footer-col">
              <h5>{locale === "en" ? "Licensing" : "Licencia"}</h5>
              <p>
                {locale === "en" ? "Florida" : "Florida"} {siteConfig.license.number}
              </p>
              <p>{siteConfig.license.type}</p>
            </div>
            <div className="footer-col">
              <h5>{locale === "en" ? "Connect" : "Síguenos"}</h5>
              <div className="footer-social">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    aria-label={link.name}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {socialIcons[link.name]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}.{" "}
            {locale === "en" ? "All rights reserved." : "Todos los derechos reservados."}
          </span>
          <span>
            {ui.designedBy[locale]}{" "}
            <a href="https://aglflorida.com" target="_blank" rel="noreferrer">
              AGL Consulting LLC
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
