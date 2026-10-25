"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { delocalizePath, localizePath, nav, otherLocale, ui, type Locale } from "@/lib/i18n";
import { siteConfig, sitePages } from "@/lib/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  const canonicalPath = delocalizePath(pathname);
  const [open, setOpen] = useState(false);

  const primaryPages = sitePages.filter((page) => page.path !== "/contact");
  const contactPage = sitePages.find((page) => page.path === "/contact");

  return (
    <header>
      <nav className="wrap">
        <Link href={localizePath("/", locale)} className="brand">
          <span className="mark">C</span>
          {siteConfig.name}
        </Link>
        <div className={`navlinks${open ? " open" : ""}`} id="navLinks">
          {primaryPages.map((page) => (
            <Link
              key={page.path}
              href={localizePath(page.path, locale)}
              className={canonicalPath === page.path ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {nav[page.labelKey][locale]}
            </Link>
          ))}
          <Link
            href={localizePath(canonicalPath, otherLocale(locale))}
            className="navlang"
            onClick={() => setOpen(false)}
          >
            🌐 {ui.languageSwitchLabel[locale]}
          </Link>
          {contactPage && (
            <Link
              href={localizePath(contactPage.path, locale)}
              className="navcta"
              onClick={() => setOpen(false)}
            >
              {ui.requestConsultation[locale]}
            </Link>
          )}
        </div>
        <button
          className="burger"
          aria-label="Menu"
          type="button"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
}
