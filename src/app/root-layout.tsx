import { Inter, Source_Serif_4 } from "next/font/google";
import type { Locale } from "@/lib/i18n";
import { generateOrganizationSchema } from "@/lib/schema";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-serif",
});

export function RootLayout({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html
      lang={locale}
      className={`${inter.variable} ${sourceSerif.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <script
          type="application/ld+json"
          // biome-ignore lint: JSON-LD injection is the standard pattern for structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        <SiteHeader locale={locale} />
        <main id="top">{children}</main>
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
