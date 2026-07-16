/** @deprecated Use @/data/services — kept for compatibility */
export { services as default } from "@/data/services";
export type { ServiceModule as ServiceItem } from "@/data/services";

import { services as mods } from "@/data/services";

export const services = mods.map((s, i) => ({
  id: i + 1,
  title: s.shortTitle,
  subtitle: s.subtitle,
  route: s.route,
  image: "/imgs/icon.png",
}));
