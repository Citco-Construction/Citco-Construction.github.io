import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { RootLayout } from "../root-layout";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.shortDescription,
  icons: { icon: "/favicon.svg" },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootLayout locale="en">{children}</RootLayout>;
}
