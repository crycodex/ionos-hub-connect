import { ServicePageLayout } from "@/components/ServicePageLayout";
import { getServiceBySlug } from "@/data/services";

export default function ProduccionVisual() {
  const service = getServiceBySlug("produccion-visual-audiovisual")!;
  return <ServicePageLayout service={service} />;
}
