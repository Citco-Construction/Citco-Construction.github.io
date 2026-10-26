import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={item.href}>
          {i === items.length - 1 ? (
            <span aria-current="page">{item.name}</span>
          ) : (
            <Link href={item.href}>{item.name}</Link>
          )}
          {i < items.length - 1 && <span className="crumb-sep">/</span>}
        </span>
      ))}
    </nav>
  );
}
