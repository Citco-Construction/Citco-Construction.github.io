import Link from "next/link";
import { localizePath, nav, ui, type Locale } from "@/lib/i18n";
import { siteConfig, sitePages, socialLinks } from "@/lib/site";

const socialInitial: Record<string, string> = {
  Instagram: "IG",
  LinkedIn: "in",
  GitHub: "GH",
};

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <Link href={localizePath("/", locale)} className="brand">
            <span className="mark">C</span>
            {siteConfig.name}
          </Link>
          <div className="footer-links">
            <div className="footer-col">
              <h5>{locale === "en" ? "Company" : "Compañía"}</h5>
              {sitePages
                .filter((page) => page.path !== "/")
                .map((page) => (
                  <Link key={page.path} href={localizePath(page.path, locale)}>
                    {nav[page.labelKey][locale]}
                  </Link>
                ))}
            </div>
            <div className="footer-col">
              <h5>{locale === "en" ? "Contact" : "Contacto"}</h5>
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </p>
              <p>{siteConfig.phoneOffice}</p>
            </div>
            <div className="footer-col">
              <h5>{locale === "en" ? "Licensing" : "Licencia"}</h5>
              <p>
                {locale === "en" ? "Florida" : "Florida"} {siteConfig.license.number}
              </p>
              <p>{siteConfig.license.type}</p>
            </div>
            <div className="footer-col">
              <h5>{locale === "en" ? "Follow" : "Síguenos"}</h5>
              <div className="footer-social">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    aria-label={link.name}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {socialInitial[link.name]}
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
          <span>{ui.familyOwnedSince[locale]}</span>
        </div>
      </div>
    </footer>
  );
}
