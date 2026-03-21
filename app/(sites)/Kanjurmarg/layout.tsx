import { getSiteConfig } from "@/lib/config";
import "./globals.css";

import { Metadata } from "next";
import { routes } from "@/lib/config/routes";

const route = routes.Kanjurmarg;

export const metadata: Metadata = {
  title: getSiteConfig(route).seo.title,
  description: getSiteConfig(route).seo.description,
};

export default function KanjurmargLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
