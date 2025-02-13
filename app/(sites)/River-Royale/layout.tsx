import { getSiteConfig } from "@/lib/config";
import "./globals.css";

import { Metadata } from "next";
import { routes } from "@/lib/config/routes";

const route = routes.Riverroyale;

export const metadata: Metadata = {
  title: getSiteConfig(route).seo.title,
  description: getSiteConfig(route).seo.description,
};

export default function RiyerRoyaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
