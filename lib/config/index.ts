import { horizonConfig } from "@/lib/config/horizon";
import { routes } from "./routes";
import { siteConfig } from "./site";
import { evergreenConfig } from "./evergreen";
import { kharadiConfig } from "./kharadi";
import { parkworldConfig } from "./parkworld";
import { riverroyaleConfig } from "./riyerroyale";

const configs = {
  [routes.default]: siteConfig,
  [routes.Horizon]: horizonConfig,
  [routes.Evergreen]: evergreenConfig,
  [routes.Kharadi]: kharadiConfig,
  [routes.Parkworld]: parkworldConfig,
  [routes.Riverroyale]: riverroyaleConfig, 
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
