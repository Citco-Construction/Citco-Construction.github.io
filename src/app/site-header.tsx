"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { delocalizePath, type Locale, localizePath, nav, otherLocale, ui } from "@/lib/i18n";
import { siteConfig, sitePages } from "@/lib/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  const canonicalPath = delocalizePath(pathname);
  const [open, setOpen] = useState(false);

  const primaryPages = sitePages.filter((page) => page.path !== "/contact");
  const contactPage = sitePages.find((page) => page.path === "/contact");

  const renderLinks = (onNavigate: () => void) => (
    <>
      {primaryPages.map((page) => (
        <Link
          key={page.path}
          href={localizePath(page.path, locale)}
          className={canonicalPath === page.path ? "active" : ""}
          onClick={onNavigate}
        >
          {nav[page.labelKey][locale]}
        </Link>
      ))}
      <Link
        href={localizePath(canonicalPath, otherLocale(locale))}
        className="navlang"
        onClick={onNavigate}
      >
        🌐 {ui.languageSwitchLabel[locale]}
      </Link>
      {contactPage && (
        <Link href={localizePath(contactPage.path, locale)} className="navcta" onClick={onNavigate}>
          {ui.requestConsultation[locale]}
        </Link>
      )}
    </>
  );

  return (
    <header>
      <nav className="wrap">
        <Link href={localizePath("/", locale)} className="brand">
          <Image
            src="/logo_header.png"
            alt={siteConfig.name}
            className="brand-logo"
            width={1732}
            height={536}
            priority
          />
        </Link>
        <div className="navlinks navlinks-desktop">{renderLinks(() => {})}</div>
        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="navLinksMobile"
          type="button"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>
      {open && (
        <div className="navlinks navlinks-mobile" id="navLinksMobile">
          {renderLinks(() => setOpen(false))}
        </div>
      )}
    </header>
  );
}
