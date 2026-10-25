export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

/** Prefix a canonical (English) path with /es when needed. */
export function localizePath(path: string, locale: Locale): string {
  if (locale === "en") return path;
  return path === "/" ? "/es" : `/es${path}`;
}

/** Strip the /es prefix to get the canonical (English) path. */
export function delocalizePath(pathname: string): string {
  if (pathname === "/es" || pathname === "/es/") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3);
  return pathname;
}

type Dict = Record<Locale, string>;

export const nav: Record<"home" | "services" | "projects" | "about" | "contact", Dict> = {
  home: { en: "Home", es: "Inicio" },
  services: { en: "Services", es: "Servicios" },
  projects: { en: "Projects", es: "Proyectos" },
  about: { en: "About", es: "Nosotros" },
  contact: { en: "Contact", es: "Contacto" },
};

export const ui = {
  languageSwitchLabel: { en: "Español", es: "English" } as Dict,
  requestConsultation: { en: "Request a Consultation", es: "Solicitar una Consulta" } as Dict,
  seHablaEspanol: {
    en: "Se habla español — consultas disponibles en español",
    es: "Se habla español — consultas y presupuestos disponibles en español",
  } as Dict,
  viewOurWork: { en: "View Our Work", es: "Ver Nuestro Trabajo" } as Dict,
  familyOwnedSince: { en: "Family Owned Since 1982", es: "Empresa Familiar Desde 1982" } as Dict,
};
