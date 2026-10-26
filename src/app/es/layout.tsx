import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { RootLayout } from "../root-layout";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.shortDescription,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <RootLayout locale="es">{children}</RootLayout>;
}
