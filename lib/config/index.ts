import { routes } from "./routes";
import { siteConfig } from "./site";
import { avalonConfig} from "./avalon";
import { avanteConfig } from "./avante";
import { vasantLawnsConfig } from "./VasantLawns";

const configs = {
  [routes.default]: siteConfig,
  [routes.Avalon]: avalonConfig,
  [routes.Avante]: avanteConfig,
  [routes.VasantLawns]: vasantLawnsConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
