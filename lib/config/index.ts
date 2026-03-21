import { routes } from "./routes";
import { siteConfig } from "./site";
import { kanjurmargConfig } from "./kanjurmarg";

const configs = {
  [routes.default]: siteConfig,
  [routes.Kanjurmarg]: kanjurmargConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
